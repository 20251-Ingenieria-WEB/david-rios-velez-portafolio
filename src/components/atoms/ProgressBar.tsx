import React from 'react';

export interface ProgressBarProps {
    percent: number;
    className?: string;
}

// A simple ProgressBar component that can be used to display progress visually.
export const ProgressBar: React.FC<ProgressBarProps> = ({
                                                            percent,
                                                            className = '',
                                                        }) => {
    const pct = Math.max(0, Math.min(100, percent));

    return (
        <div
            className={[
                'w-full',
                'h-1',
                'bg-gray-200',
                'rounded-full',
                className,
            ].join(' ')}
        >
            <div
                className="h-full bg-yellow-400 rounded-full"
                style={{ width: `${pct}%` }}
            />
        </div>
    );
};

export default ProgressBar;
