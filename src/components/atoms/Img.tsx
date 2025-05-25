import React from 'react';

export interface LogoProps {
    src: string;
    alt?: string;
    className?: string;
}

// A simple Img component that can be used to display images with a styled container.
export const Img: React.FC<LogoProps> = ({
                                              src,
                                              alt = '',
                                              className = '',
                                          }) => (
        <img
            src={src}
            alt={alt}
            className={`object-cover w-full h-full ${className}`}
        />
);

export default Img;