import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import { Navbar } from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from '~/lib/puter'
import { Link, useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RecruitMaster - AI Resume Analyzer" },
    { name: "description", content: "Master your job applications with AI-powered resume analysis and ATS optimization!" },
  ];
}

export default function Home() {
  const { auth, kv  } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);
      const resumes = (await kv.list('resume:*', true)) as KVItem[];
      const parsedResumes = resumes?.map((resume) => (
        JSON.parse(resume.value) as Resume
      ))
      setResumes(parsedResumes || []);
      setLoadingResumes(false);
    }
    loadResumes();
  }, []);
  useEffect(() => {
    if(!auth.isAuthenticated) {
        navigate('/auth?next=/');
    }
  },[auth.isAuthenticated])

  return <main className="bg-gradient dark:bg-dark-bg bg-cover min-h-screen">
    <Navbar/>
    <section className="main-section">
      <div className="page-heading py-16 fade-in">
        <h1>Track Your Applications & Resume Ratings</h1>
        {!loadingResumes && resumes?.length === 0 ? (
          <h2>No resumes found. Upload your first resume to get AI-powered feedback</h2>
        ): (
          <h2>Review your submissions and check AI-powered feedback with actionable insights.</h2>
        )}
      </div>
      {loadingResumes && (
        <div className="flex flex-col items-center justify-center">
          <div className='relative'>
            <img src="/images/resume-scan-2.gif" className="w-[200px]"/>
            <div className='absolute inset-0 bg-gradient-to-t from-white/50 dark:from-dark-bg/50 to-transparent rounded-full'></div>
          </div>
          <p className='text-dark-200 dark:text-dark-text-secondary mt-4 animate-pulse'>Loading your resumes...</p>
        </div>
      )}
      {!loadingResumes && resumes.length > 0 && (
      <div className="resumes-section fade-in">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
      )
      }
      {!loadingResumes && resumes?.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-10 gap-6 fade-in">
          <div className='text-center max-w-md'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 mx-auto text-gray-400 dark:text-dark-text-secondary mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            <p className='text-lg text-dark-200 dark:text-dark-text-secondary'>Start your journey to the perfect resume</p>
          </div>
          <Link to="/upload" className="primary-button w-fit text-xl font-semibold px-8 py-4">
            <span className='flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              Upload Your First Resume
            </span>
          </Link>
        </div>
      )}
    </section>
    </main>;
}
