// src/components/atoms/IconLink.tsx
import React from 'react'
import Circle from "@/components/atoms/Circle";
import Icon from "@/components/atoms/Icon";

export interface IconLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    bg?: string
    children: React.ReactElement
    className?: string
}

/**
 * IconLink molecule - A clickable icon wrapped in a circle, styled as a link.
 */
export const IconLink: React.FC<IconLinkProps> = ({
                                                      href,
                                                      size = 'md',
                                                      bg = 'bg-white',
                                                      children,
                                                      className = '',
                                                      target,
                                                      rel,
                                                      ...rest
                                                  }) => {
    // if opening in a new tab, add rel for security
    const computedRel = target === '_blank'
        ? rel ?? 'noopener noreferrer'
        : rel

    return (
        <a
            href={href}
            target={target}
            rel={computedRel}
            className={`group ${className}`}
            {...rest}
        >
            <Circle size={size} bg={bg}>
                <Icon>{children}</Icon>
            </Circle>
        </a>
    )
}

export default IconLink
