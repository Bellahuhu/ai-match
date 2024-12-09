import { StartButtonProps } from './types';

export const StartButton = ({ 
  onClick, 
  className = '',
  isLoading = false 
}: StartButtonProps) => {
  return (
    <button 
      onClick={onClick}
      disabled={isLoading}
      className={`
        inline-flex items-center justify-center
        px-6 py-3 rounded-full
        bg-blue-500 hover:bg-blue-600
        transform transition-all duration-200
        hover:scale-105 active:scale-98
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        disabled:opacity-70 disabled:cursor-not-allowed
        ${className}
      `}
      aria-label="开始测试"
    >
      <span className="text-white font-medium text-lg">
        开始测试
      </span>
      {isLoading ? (
        <svg 
          className="ml-2 h-5 w-5 animate-spin text-white" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : (
        <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      )}
    </button>
  );
};