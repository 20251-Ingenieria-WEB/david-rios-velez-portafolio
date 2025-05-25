import React from 'react';
import { H2, P } from '../atoms/Typography';
import InfoCard from '../molecules/InfoCard';
import {
    FaCode, FaLaptopCode, FaCloud, FaCogs, FaUsers, FaLightbulb,
} from 'react-icons/fa';

const items = [
    {
        icon: <FaLaptopCode />,
        title: 'Full Stack Development',
        subtitle: 'Java, Spring Boot, VueJS, Angular, NodeJS',
    },
    {
        icon: <FaCloud />,
        title: 'Cloud Platforms & DevOps',
        subtitle: 'AWS, Google Cloud, Docker, Jenkins',
    },
    {
        icon: <FaCode />,
        title: 'Software Architecture',
        subtitle: 'Microservices, Monoliths, OOP, Functional',
    },
    {
        icon: <FaCogs />,
        title: 'System Analysis & Agile',
        subtitle: 'User Requirements, SCRUM, Jira',
    },
    {
        icon: <FaUsers />, // Represents teamwork and collaboration
        title: 'Team Collaboration',
        subtitle: 'Cross-Functional, Lead Refinements, UX/UI Liaison',
    },
    {
        icon: <FaLightbulb />, // Represents problem-solving and critical thinking
        title: 'Problem Solving',
        subtitle: 'High Priority Bugs, Requirements Analysis, Solution Design',
    },
];

/**
 * KnowledgeSection organism - Displays a section with knowledge and skills items.
 */
export const KnowledgeSection: React.FC = () => (
    <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center mb-8">
            <H2 className={'text-gray-800'}>My Knowledge</H2>
            <P className="mt-2 text-gray-600">
                As a Full Stack Java Developer with over 4 years of experience,
                I specialize in building and implementing scalable backend and frontend solutions,
                particularly for SaaS applications in marketplace environments.
            </P>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(({ icon, title, subtitle }) => (
                <InfoCard
                    key={title}
                    icon={icon}
                    title={title}
                    subtitle={subtitle}
                />
            ))}
        </div>
    </section>
);

export default KnowledgeSection;
