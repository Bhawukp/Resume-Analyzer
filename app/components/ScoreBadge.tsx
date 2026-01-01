interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let badgeColor = '';
  let badgeText = '';
  let icon = '';

  if (score > 70) {
    badgeColor = 'bg-badge-green dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-300 dark:border-green-700';
    badgeText = 'Strong';
    icon = '🎯';
  } else if (score > 49) {
    badgeColor = 'bg-badge-yellow dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border border-yellow-300 dark:border-yellow-700';
    badgeText = 'Good Start';
    icon = '📈';
  } else {
    badgeColor = 'bg-badge-red dark:bg-red-900/30 text-red-600 dark:text-red-400 border border-red-300 dark:border-red-700';
    badgeText = 'Needs Work';
    icon = '🔧';
  }

  return (
    <div className={`px-3 py-1 rounded-full ${badgeColor} flex items-center gap-1.5 transition-all duration-200 hover:scale-105`}>
      <span className="text-xs">{icon}</span>
      <p className="text-sm font-medium">{badgeText}</p>
    </div>
  );
};

export default ScoreBadge;