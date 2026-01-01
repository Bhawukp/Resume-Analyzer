import React , { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router';
import FileUploader from '~/components/FileUploader';
import { Navbar } from '~/components/Navbar'
import { usePuterStore } from '~/lib/puter';
import { convertPdfToImage } from '~/lib/pdf2img';
import { generateUUID } from '~/lib/utils';
import { prepareInstructions } from 'constants';

const upload = () => {
  const { auth, isLoading, fs, ai, kv} = usePuterStore(); 
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const handleFileSelect = (file: File | null) => {
    setFile(file)
  }
   const handleAnalyze = async ({ companyName, jobTitle, jobDescription, file }: { companyName: string, jobTitle: string, jobDescription: string, file: File  }) => {
    setIsProcessing(true);
    setStatusText('Uploading the File...');
    const uploadFile = await fs.upload([file]);
    if(!uploadFile)  return setStatusText('Error: Failed to upload file');
    setStatusText('Converting to image');
    const imageFile = await convertPdfToImage(file);
    console.log(imageFile);
    if(!imageFile.file) return setStatusText('Error: Failed to convert PDF to image');
    setStatusText('Uploading the image...');
    const uploadedImage = await fs.upload([imageFile.file]);
    if(!uploadedImage)  return setStatusText('Error: Failed to upload image');

    setStatusText('Preparing data...');
    const uuid = generateUUID();
    const data = {
        id: uuid,
        resumePath: uploadFile.path,
        imagePath: uploadedImage.path,
        companyName,
        jobTitle,
        jobDescription,
        feedback: ''
    }
    await kv.set(`resume:${uuid}`, JSON.stringify(data));
    setStatusText('Analyzing...');
    const feedback = await ai.feedback(
        uploadFile.path,
        prepareInstructions({ jobTitle, jobDescription })
    )
    if (!feedback) setStatusText('Error: Failed to analuze resume');
    const feedbackText = typeof feedback.message.content === 'string' ? feedback?.message.content : feedback?.message.content[0].text;
    data.feedback = JSON.parse(feedbackText);
    await kv.set(`resume:${uuid}`, JSON.stringify(data));
    setStatusText('Analysis complete, redirecting ...');
    console.log(data);
    navigate(`/resume/${uuid}`);
   }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.closest('form');
    if(!form) return;
    const formData  = new FormData(form);
    const companyName = formData.get('company-name') as string;
    const jobTitle = formData.get('job-title') as string;
    const jobDescription = formData.get('job-description') as string;

    if(!file) return;
    handleAnalyze({ companyName, jobTitle, jobDescription, file })

  }
  return (
    <main className="bg-gradient dark:bg-dark-bg bg-cover min-h-screen">
      <Navbar/>
      <section className="main-section">
        <div className='page-heading py-16 fade-in'>
            <h1>Smart feedback for your dream job</h1>
            {isProcessing ? (
               <div className='flex flex-col items-center gap-4'>
                 <h2 className='animate-pulse'>{statusText}</h2>
                 <div className='relative'>
                   <img src="/images/resume-scan.gif" className='w-full max-w-md'/>
                   <div className='absolute inset-0 bg-gradient-to-t from-white/50 dark:from-dark-bg/50 to-transparent'></div>
                 </div>
               </div>
            ) : (
                <h2>Drop your resume for an ATS score and improvement tips</h2>
            )}
        </div>
        {!isProcessing && (
            <form id="upload-form" onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8 max-w-3xl w-full fade-in glass-effect p-8 rounded-3xl'>
                <div className='form-div'>
                    <label htmlFor="company-name">Company Name</label>
                    <input type="text" name="company-name" placeholder='e.g. Google, Microsoft, Amazon' id="company-name" required/>
                </div>
                <div className='form-div'>
                    <label htmlFor="job-title">Job Title</label>
                    <input type="text" name="job-title" placeholder='e.g. Senior Software Engineer' id="job-title" required/>
                </div>
                <div className='form-div'>
                    <label htmlFor="job-description">Job Description</label>
                    <textarea rows={5} name="job-description" placeholder='Paste the complete job description here...' id="job-description" required/>
                </div>
                <div className='form-div'>
                    <label htmlFor="uploader">Upload Resume</label>
                    <FileUploader onFileSelect={handleFileSelect}/>
                </div>
                <button className='primary-button' type="submit" disabled={!file}>
                    <span className='flex items-center justify-center gap-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                      Analyze Resume with AI
                    </span>
                </button>
            </form>
        )}
      </section>
    </main>
  )
}

export default upload