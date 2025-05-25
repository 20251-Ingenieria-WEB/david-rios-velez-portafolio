import React, { ReactElement, isValidElement, cloneElement } from 'react';

interface ElementWithClassName {
    className?: string;
}

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: ReactElement;
    className?: string;
}

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
                ((children.props as any).className || ''),
            ]
                .filter(Boolean)
                .join(' '),
        } as any)
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