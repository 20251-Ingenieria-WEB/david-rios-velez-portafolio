import React from 'react'

interface CircleProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'sm'|'md'|'lg'|'xl'|'xxl' // Added 'xl' and 'xxl'
    bg?: string
    children: React.ReactNode
}

const sizes = { sm:'w-12 h-12', md:'w-16 h-16', lg:'w-28 h-28', xl:'w-32 h-32', xxl:'w-40 h-40' }

// A simple Circle component that can be used to create circular containers with different sizes and background colors.
export const Circle: React.FC<CircleProps> = ({
                                                  size='md', bg='bg-white', className='', children, ...rest
                                              }) => (
    <div
        className={[
            sizes[size],
            bg,
            'rounded-full flex items-center justify-center p-5',
            className
        ].join(' ')}
        {...rest}
    >
        {children}
    </div>
)

export default Circle