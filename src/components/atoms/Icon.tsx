import React, { ReactElement, isValidElement, cloneElement } from 'react';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: ReactElement;
    className?: string;
}

// A simple Icon component that can be used to wrap SVG or icon components with a styled container.
export const Icon: React.FC<IconProps> = ({
                                              children,
                                              className = '',
                                              ...rest
                                          }) => {
    const iconChild = isValidElement(children)
        ? cloneElement(children, {
            className: [
                'w-full',
                'h-full',
                // preserve any className the child already had:
                (children.props.className || ''),
            ]
                .filter(Boolean)
                .join(' '),
        })
        : children;

    return (
        <span
            className={[
                'inline-block',   // allow w-full & h-full
                'w-full',
                'h-full',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
            {...rest}
        >
      {iconChild}
    </span>
    );
};

export default Icon;