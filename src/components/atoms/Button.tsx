import React from 'react';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

// A simple Button component that can be used to trigger actions with a styled button.
export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  className = '',
                                                  ...rest
                                              }) => (
    <button
        className={[
            'inline-block',
            'px-6 py-3',
            'rounded-md',
            'bg-yellow-400 hover:bg-yellow-500',
            'text-black font-medium',
            'transition-colors',
            className,
        ]
            .filter(Boolean)
            .join(' ')}
        {...rest}
    >
        {children}
    </button>
);

export default Button;
