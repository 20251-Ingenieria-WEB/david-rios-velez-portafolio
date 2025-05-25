import React from 'react';
import { H2, P } from '../atoms/Typography';
import EducationItem from '../molecules/EducationItem';

const educationData = [
    {
        title: 'Universidad De Antioquia, Colombia',
        role: 'Student',
        dateRange: '01/2019 - 12/2026 (Current - 9th semester)',
        certificate: 'Systems Engineer (B.Sc. Equivalent)',
        description:
            'Currently pursuing a Systems Engineering degree, developing a strong foundation in software development, system design, and problem-solving within the field of information technology.',
    },
    {
        title: 'Google Cloud',
        role: 'Certification',
        dateRange: '09/2024',
        certificate: 'Production ML Systems, TensorFlow, Launching into ML',
        description:
            'Completed specialized training in Machine Learning on the Google Cloud Platform, covering production systems, TensorFlow applications, and foundational ML concepts.',
    },
    {
        title: 'University of Michigan, Online',
        role: 'Course Completion',
        dateRange: '08/2020',
        certificate: 'Introduction to Python',
        description:
            'Successfully completed an introductory course in Python programming, gaining fundamental skills in syntax, data structures, and basic programming concepts.',
    },
];

/**
 * EducationSection organism - Displays a section with educational background items.
 */
export const EducationSection: React.FC = () => (
    <section className="py-12 px-6 bg-gray-100">

        <div className="max-w-3xl mx-auto text-center mb-8">
            <H2>Education</H2>
            <P className="mt-2 text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </P>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-md shadow divide-y divide-gray-200 px-8">
            {educationData.map((item, idx) => (
                <EducationItem
                    key={idx}
                    title={item.title}
                    role={item.role}
                    dateRange={item.dateRange}
                    certificate={item.certificate}
                    description={item.description}
                />
            ))}
        </div>
    </section>
);

export default EducationSection;