import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

// A simple Card component that can be used to wrap content with a styled container.
export const Card: React.FC<CardProps> = ({
                                              children,
                                              className = '',
                                              ...rest
                                          }) => (
    <div
        className={[
            'bg-white',
            'rounded-md',
            'shadow-sm',
            className,
        ]
            .filter(Boolean)
            .join(' ')}
        {...rest}
    >
        {children}
    </div>
);

export default Card;
