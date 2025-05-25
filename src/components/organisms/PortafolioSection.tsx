import React from 'react';
import { H2, P } from '../atoms/Typography';
import PortfolioCard from '../molecules/PortafolioCard';

const portfolioItems = [
    {
        // Assuming this is a frontend project
        imageSrc: '/inno.png',
        title: 'Frontend Innovation (fe-inno)',
        description:
            'A frontend development project, showcasing modern web UI implementations and best practices with atomic design',
        href: 'https://github.com/davidrios2/fe-inno',
    },
    {
        imageSrc: '/solid.png',
        title: 'Academic Project (AE-2025-1)',
        description:
            'An academic project, related to solip principle implementations from non OOP languages.',
        href: 'https://github.com/davidrios2/ae-2025-1',
    },
    {
        imageSrc: '/modelos-1.png',
        title: 'Models Project (Modelos-1)',
        description:
            'A project focused on implementing various models or theoretical concepts, potentially from a university course.',
        href: 'https://github.com/davidrios2/modelos-1',
    },
    {
        imageSrc: '/inmutable.png',
        title: 'Immutable Data Structures',
        description:
            'Exploration of immutable data structures, demonstrating principles of functional programming.',
        href: 'https://github.com/davidrios2/inmutable',
    },
    {
        imageSrc: '/reservas.png',
        title: 'Backend Reservations System',
        description:
            'A Java backend project, specifically a reservation system, showcasing API design and database interaction.',
        href: 'https://github.com/davidrios2/backend/tree/master/src/main/java/com/udea/reservas/backend',
    },
];

/**
 * PortfolioSection organism - Displays a section with portfolio items.
 */
export const PortfolioSection: React.FC = () => (
    <section className="py-12 px-6 bg-gray-100">
        {/* header */}
        <div className="max-w-4xl mx-auto text-center mb-8">
            <H2>Portfolio</H2>
            <P className="mt-2 text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </P>
        </div>

        {/* scroll container */}
        <div className="overflow-x-auto">
            <div className="flex space-x-6 pb-4">
                {portfolioItems.map((item, i) => (
                    <div key={i} className="flex-shrink-0 w-1/2">
                        <PortfolioCard
                            imageSrc={item.imageSrc}
                            title={item.title}
                            description={item.description}
                            href={item.href}
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default PortfolioSection;
