import React from 'react';

type TextProps = {
    children: React.ReactNode;
    className?: string;
};

export const H1: React.FC<TextProps> = ({
                                            children,
                                            className = '',
                                        }) => (
    <h1 className={`text-4xl font-bold text-gray-800 ${className}`}>
        {children}
    </h1>
);

export const H2: React.FC<TextProps> = ({
                                            children,
                                            className = '',
                                        }) => (
    <h2 className={`text-3xl font-semibold text-gray-800 ${className}`}>
        {children}
    </h2>
);

export const H3: React.FC<TextProps> = ({
                                            children,
                                            className = '',
                                        }) => (
    <h3 className={`text-2xl font-medium text-gray-800 ${className}`}>
        {children}
    </h3>
);

export const H4: React.FC<TextProps> = ({
                                            children,
                                            className = '',
                                        }) => (
    <h4 className={`text-xl font-medium text-gray-800 ${className}`}>
        {children}
    </h4>
);

// A simple Paragraph component that can be used to display text content.
export const P: React.FC<TextProps> = ({
                                           children,
                                           className = '',
                                       }) => (
    <p className={`text-base text-gray-600 leading-relaxed ${className}`}>
        {children}
    </p>
);
