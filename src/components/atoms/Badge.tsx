import React from 'react';

export interface BadgeProps
    extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    className?: string;
}

// A simple Badge component that can be used to display small notifications or labels.
export const Badge: React.FC<BadgeProps> = ({
                                                children,
                                                className = '',
                                                ...rest
                                            }) => (
    <span
        className={[
            'inline-block',
            'px-2',
            'py-1',
            'bg-yellow-400',
            'text-white',
            'text-xs',
            'font-medium',
            'rounded',
            className,
        ]
            .filter(Boolean)
            .join(' ')}
        {...rest}
    >
    {children}
  </span>
);

export default Badge;
