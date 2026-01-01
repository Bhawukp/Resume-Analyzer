import { cn } from "~/lib/utils";

const ATS = ({
  score,
  suggestions,
}: {
  score: number;
  suggestions: { type: "good" | "improve"; tip: string }[];
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-full bg-gradient-to-b dark:from-dark-surface-2 dark:to-dark-surface to-light-white p-8 flex flex-col gap-4 border dark:border-dark-border",
        score > 69
          ? "from-green-100 dark:border-green-700/30"
          : score > 49
          ? "from-yellow-100 dark:border-yellow-700/30"
          : "from-red-100 dark:border-red-700/30"
      )}
    >
      <div className="flex flex-row gap-4 items-center">
        <div className='p-3 bg-white dark:bg-dark-surface rounded-full shadow-sm'>
          <img
            src={
              score > 69
                ? "/icons/ats-good.svg"
                : score > 49
                ? "/icons/ats-warning.svg"
                : "/icons/ats-bad.svg"
            }
            alt="ATS"
            className="w-8 h-8"
          />
        </div>
        <div>
          <p className="text-2xl font-semibold dark:text-dark-text">ATS Score</p>
          <p className={cn("text-3xl font-bold", 
            score > 69 ? "text-green-600 dark:text-green-400" : 
            score > 49 ? "text-yellow-600 dark:text-yellow-400" : 
            "text-red-600 dark:text-red-400"
          )}>{score}<span className='text-lg text-gray-400'>/100</span></p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-medium text-xl dark:text-dark-text">
            Applicant Tracking System Analysis
          </p>
          <p className="text-lg text-gray-500 dark:text-dark-text-secondary mt-2">
            Your resume was scanned like an employer's ATS would. Here's how it performed:
          </p>
        </div>
        <div className='flex flex-col gap-3 bg-white/50 dark:bg-dark-surface/50 p-4 rounded-xl'>
          {suggestions.map((suggestion, index) => (
            <div className="flex flex-row gap-3 items-start" key={index}>
              <div className={cn('p-1 rounded-full mt-0.5',
                suggestion.type === "good" ? 'bg-green-100 dark:bg-green-900/30' : 'bg-yellow-100 dark:bg-yellow-900/30'
              )}>
                <img
                  src={
                    suggestion.type === "good"
                      ? "/icons/check.svg"
                      : "/icons/warning.svg"
                  }
                  alt={suggestion.type}
                  className="w-4 h-4"
                />
              </div>
              <p className="text-base text-gray-700 dark:text-dark-text-secondary flex-1">{suggestion.tip}</p>
            </div>
          ))}
        </div>
        <p className="text-base text-gray-600 dark:text-dark-text-secondary italic">
          💡 Pro tip: Improve your score by implementing the suggestions in the detailed sections below.
        </p>
      </div>
    </div>
  );
};

export default ATS;