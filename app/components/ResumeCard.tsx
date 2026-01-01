import React, {useEffect, useState} from 'react'
import { Link } from 'react-router'
import ScoreCircle from './ScoreCircle'
import { usePuterStore  } from '~/lib/puter'

const ResumeCard = ({ resume }: { resume: Resume}) => {
  const { fs } = usePuterStore();
    const [resumeUrl, setResumeUrl] = useState('');
    useEffect(() => {
      const loadResume = async() => {
        const blob = await fs.read(resume.imagePath);
        if(!blob) return;
        let url = URL.createObjectURL(blob);
        setResumeUrl(url);
      }
      loadResume();
    }, [resume.imagePath]);
  return (
    <Link to={`/resume/${resume.id}`} className='resume-card animate-in fade-in duration-1000 group relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500'></div>
        <div className='resume-card-header relative z-10'>
            <div className='flex flex-col gap-2'>
            {resume.companyName && <h2 className='!text-black dark:!text-dark-text font-bold break-words'>{resume.companyName}</h2> }
            {resume.jobTitle &&<h3 className='text-lg break-words text-gray-500 dark:text-dark-text-secondary'>
                {resume.jobTitle}
            </h3>}
            {!resume.companyName && !resume.jobTitle && <h2 className='!text-black dark:!text-dark-text font-bold'>Resume Feedback</h2>}
            </div>
            <div className='flex-shrink-0'>
                <ScoreCircle score={resume.feedback.overallScore}/>
            </div>
        </div>
        {resumeUrl && (<div className='gradient-border animate-in fade-in duration-1000 relative overflow-hidden group-hover:shadow-xl transition-shadow duration-300'>
           <div className='w-full h-full relative'>
              <img
                src={resumeUrl}
                alt='resume preview'
                className='w-full h-[350px] max-sm:h-[200px] object-cover object-top group-hover:scale-105 transition-transform duration-300'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4'>
                <span className='text-white font-semibold text-sm flex items-center gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  View Details
                </span>
              </div>
            </div> 
        </div>
        )}
        {!resumeUrl && (
          <div className='gradient-border animate-pulse'>
            <div className='w-full h-[350px] max-sm:h-[200px] bg-gray-200 dark:bg-dark-surface-2 rounded-xl flex items-center justify-center'>
              <div className='w-12 h-12 border-4 border-accent-blue border-t-transparent rounded-full animate-spin'></div>
            </div>
          </div>
        )}
    </Link>
  )
}

export default ResumeCard