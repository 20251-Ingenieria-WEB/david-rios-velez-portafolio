import React from 'react';
import { Circle } from '../atoms/Circle';
import { Img } from '../atoms/Img'; // Assuming Img is a molecule as per your previous file structure

export interface AvatarProps {
    src: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'; // Include all sizes from Circle
    bg?: string;
    className?: string;
    imgClassName?: string; // To allow specific styling for the Img component
}

/**
 * Avatar molecule - Combines a Circle wrapper with an Img inside.
 */
export const Avatar: React.FC<AvatarProps> = ({
                                                  src,
                                                  alt = '',
                                                  size = 'md',
                                                  bg = 'bg-white',
                                                  className = '',
                                                  imgClassName = '',
                                              }) => {
    return (
        <Circle
            size={size}
            bg={bg}
            className={`overflow-hidden ${className}`}
        >
            <Img
                src={src}
                alt={alt}
                className={`object-cover w-full h-full rounded-full ${imgClassName}`}
            />
        </Circle>
    );
};

export default Avatar;