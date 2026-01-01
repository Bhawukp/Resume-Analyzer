import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import Summary from '~/components/Summary'
import ATS from '~/components/ATS'
import { usePuterStore } from '~/lib/puter'
import Details from '~/components/Details'

export const meta = () => ([
    { title: 'RecruitMaster | Resume Review' },
    { name: 'description', content: 'Comprehensive AI-powered analysis of your resume with actionable insights' },
])

const resume = () => {
  const { auth, isLoading, fs, kv } = usePuterStore();
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState('');
  const [resumeUrl, setResumeUrl] = useState('');
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoading && !auth.isAuthenticated) {
        navigate(`/auth?next=/resume/${id}`);
    }
  },[isLoading])

  useEffect(() => {
    const loadResume = async() => {
        const resume = await kv.get(`resume:${id}`);
        if(!resume) return;
        const data = JSON.parse(resume);
        const resumeBlob = await fs.read(data.resumePath);
        if(!resumeBlob) return;
        const pdfBlob = new Blob([resumeBlob], {type: 'application/pdf'});
        const resumeUrl = URL.createObjectURL(pdfBlob);
        setResumeUrl(resumeUrl);

        const imageBlob = await fs.read(data.imagePath);
        if(!imageBlob) return;
        const imageUrl = URL.createObjectURL(imageBlob);
        setImageUrl(imageUrl);
        setFeedback(data.feedback);
    }
    loadResume();
  }, [id]);
  return (
    <main className='!pt-0 dark:bg-dark-bg min-h-screen'>
        <nav className='resume-nav'>
            <Link to="/" className="back-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              <span className='text-gray-800 dark:text-dark-text text-sm font-semibold'>Back to Homepage</span>
            </Link>
            <div className='flex items-center gap-2'>
              <span className='text-xs font-semibold text-gray-500 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full'>AI Analysis</span>
            </div>
        </nav>
        <div className='flex flex-row w-full max-lg:flex-col-reverse'>
            <section className="feedback-section bg-gradient dark:bg-dark-surface h-[100vh] sticky top-0 items-center justify-center">
                {imageUrl && resumeUrl && (
                    <div className='animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-wxl:h-fit w-fit shadow-2xl hover:shadow-accent-blue/20 transition-shadow duration-300'>
                        <a href={resumeUrl} target='_blank' rel="noopener noreferrer" className='block group'>
                            <div className='relative'>
                              <img
                                src={imageUrl}
                                className='w-full h-full object-contain rounded-2xl'
                                title="Click to view full PDF"
                                alt="Resume preview"
                              />
                              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center pb-4'>
                                <span className='text-white font-semibold flex items-center gap-2'>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                  </svg>
                                  Open Full PDF
                                </span>
                              </div>
                            </div>
                        </a>
                    </div>
                )}
                {!imageUrl && !resumeUrl && (
                  <div className='flex items-center justify-center h-full'>
                    <div className='animate-pulse text-center'>
                      <div className='w-16 h-16 border-4 border-accent-blue border-t-transparent rounded-full animate-spin mx-auto mb-4'></div>
                      <p className='text-dark-text-secondary'>Loading resume...</p>
                    </div>
                  </div>
                )}
            </section>
            <section className='feedback-section dark:bg-dark-bg'>
                <h2 className='text-4xl !text-black dark:!text-dark-text font-bold flex items-center gap-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent-purple">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                  AI Resume Analysis
                </h2>
                {feedback ? (
                    <div className='flex flex-col gap-8 animate-in fade-in duration-1000'>
                        <Summary feedback={feedback}/>
                        <ATS score={feedback.ATS.score || 0} suggestions={feedback.ATS.tips || []}/>
                        <Details feedback={feedback}/>
                    </div>

                ) : (
                  <div className='flex flex-col items-center justify-center py-20'>
                    <img src="/images/resume-scan-2.gif" className="w-64 mb-4"/>
                    <p className='text-dark-text-secondary animate-pulse'>Analyzing your resume with AI...</p>
                  </div>
                )}
            </section>

        </div>
    </main>
  )
}

export default resume