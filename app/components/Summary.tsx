import React from 'react'
import ScoreGauge from './ScoreGauge';
import ScoreBadge from './ScoreBadge';

const Category =({ title, score }: {title: string, score: number}) => {
    const textColor = score > 70 ? 'text-green-600 dark:text-green-400' : score > 49 ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'
    return (
        <div className='resume-summary border-b last:border-b-0 border-gray-100 dark:border-dark-border'>
            <div className='category hover:scale-[1.02] transition-transform duration-200'>
                <div className='flex flex-row gap-2 items-center justify-center'>
                    <p className='text-2xl dark:text-dark-text'>{title}</p>
                    <ScoreBadge score={score}/>
                </div>
                <p className='text-2xl font-bold'>
                    <span className={textColor}>{score}</span>
                    <span className='text-gray-400 dark:text-dark-text-secondary'>/100</span>
                </p>
            </div>
        </div>
    )
}

const Summary = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className='bg-white dark:bg-dark-surface dark:border dark:border-dark-border rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full'>
        <div className='flex flex-row items-center p-4 gap-8 border-b border-gray-100 dark:border-dark-border'>
            <ScoreGauge score={feedback.overallScore}/>
            <div className='flex flex-col gap-2'>
                <h2 className='text-2xl font-bold dark:text-dark-text'>Your Resume Score</h2>
                <p className='text-sm text-gray-500 dark:text-dark-text-secondary'>
                    AI-powered analysis based on industry standards and best practices.
                </p>
            </div>
        </div>
        <Category title="Tone & Style" score={feedback.toneAndStyle.score}/>
        <Category title="Content" score={feedback.content.score}/>
        <Category title="Structure" score={feedback.structure.score}/>
        <Category title="Skills" score={feedback.skills.score}/>
    </div>
  )
}

export default Summary