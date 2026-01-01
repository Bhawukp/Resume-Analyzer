import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter'

export const meta = () => ([
    { title: 'RecruitMaster | Authentication' },
    { name: 'description', content: 'Sign in to access your AI-powered resume analysis' },
])

const auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split('next=')[1];
  const navigate = useNavigate() 
  useEffect(() => {
    if(auth.isAuthenticated) {
        navigate(next);
    }
  },[auth.isAuthenticated, next])
  return (
    <main className="bg-gradient dark:bg-dark-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className='absolute top-20 left-20 w-72 h-72 bg-accent-blue/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
        
        <div className='gradient-border shadow-2xl relative z-10 max-w-2xl w-full mx-4'>
            <section className="flex flex-col gap-8 bg-white dark:bg-dark-surface rounded-2xl p-10 backdrop-blur-xl" >
                <div className='flex flex-col items-center gap-6 text-center'>
                    <div className='flex items-center gap-3'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gradient">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                      <h1 className='!text-5xl'>Welcome</h1>
                    </div>
                    <h2 className='dark:text-dark-text-secondary'>Sign in to unlock AI-powered resume insights</h2>
                    <div className='flex gap-4 flex-wrap justify-center mt-2'>
                      <span className='text-xs bg-accent-blue/10 dark:bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full font-medium'>✓ ATS Score Analysis</span>
                      <span className='text-xs bg-accent-purple/10 dark:bg-accent-purple/20 text-accent-purple px-3 py-1 rounded-full font-medium'>✓ AI Feedback</span>
                      <span className='text-xs bg-accent-cyan/10 dark:bg-accent-cyan/20 text-accent-cyan px-3 py-1 rounded-full font-medium'>✓ Track Applications</span>
                    </div>
                </div>
                <div>
                    {isLoading ? (
                        <button className="auth-button animate-pulse opacity-80 cursor-not-allowed" disabled>
                            <span className='flex items-center justify-center gap-3'>
                              <div className='w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin'></div>
                              Signing you in...
                            </span>
                        </button>
                    ): (
                        <>
                        {auth.isAuthenticated ? (
                            <button className='auth-button' onClick={auth.signOut}>
                                <span className='flex items-center justify-center gap-3'>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                  </svg>
                                  Log Out
                                </span>
                            </button>
                        ) : (
                            <button className='auth-button' onClick={auth.signIn}>
                               <span className='flex items-center justify-center gap-3'>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                 </svg>
                                 Sign In to Continue
                               </span> 
                            </button>
                        )}
                        </>
                    )} 
                </div>
                <p className='text-center text-sm text-gray-500 dark:text-dark-text-secondary'>
                  Powered by advanced AI to help you land your dream job
                </p>
            </section>
        </div>
    </main>
  )
}

export default auth