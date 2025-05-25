import React from 'react'
import { H4 } from '../atoms/Typography'
import IconLink from '../molecules/IconLink'
import {
    FaLinkedinIn,
    FaGithub,
} from 'react-icons/fa'

const socials = [
    { href: 'https://www.linkedin.com/in/david-ríos-vélez-3442501b4/', icon: <FaLinkedinIn /> },
    { href: 'https://github.com/davidrios2', icon: <FaGithub /> },
]

/**
 * SocialNavBar organism - Displays a vertical navigation bar with social media links.
 * Each link is represented by an icon wrapped in a clickable circle.
 */
export const SocialNavBar: React.FC = () => (
    <aside className="flex flex-col items-center p-4 space-y-4 ">
        <H4 className="font-semibold">Links</H4>
        <nav className="flex flex-col items-center space-y-4">
            {socials.map(({ href, icon }, i) => (
                <IconLink
                    key={i}
                    href={href}
                    target="_blank"
                    size="md"
                    bg="bg-yellow-400"
                    className="text-black"
                >
                    {icon}
                </IconLink>
            ))}
        </nav>
    </aside>
)

export default SocialNavBar
