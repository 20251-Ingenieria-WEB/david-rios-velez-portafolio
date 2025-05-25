import React from 'react';
import Avatar from '../molecules/Avatar';
import { H4, P } from '../atoms/Typography';
import SkillSet from '../molecules/SkillSet';

const languages = [
    { label: 'Spanish', percent: 100 },
    { label: 'English', percent: 95 },
    { label: 'Portuguese', percent: 80 },
    { label: 'Japanese', percent: 50 },
];

const programming = [
    { label: 'Java 8, 11', percent: 90 },
    { label: 'Javascript/Typescript', percent: 70 },
    { label: 'VueJs - Angular', percent: 85 },
    { label: 'Node', percent: 70 },
    { label: 'Spring Boot', percent: 90 },
    { label: 'JPA', percent: 80 },
    { label: 'PostgreSQL', percent: 70 },
    { label: 'DynamoDB', percent: 70 },
    { label: 'Scala', percent: 60 },
];

const extraSkills = [
    'AWS (S3, EC2, SQS)',
    'Google Cloud',
    'Docker',
    'Maven',
    'OOP',
    'Communication',
    'Problem solving',
    'Team work',
];

/**
 * SidebarLeft organism - Displays a sidebar with user profile, contact info, and skills.
 */
export const SidebarLeft: React.FC = () => (
    <aside className="p-6 bg-white rounded-md space-y-6">
        {/* Profile */}
        <div className="flex flex-col items-center space-y-4">
            <Avatar size={'xxl'} src="/david.png" alt="Rayan Adlrdard"/>
            <H4>David Rios</H4>
            <P className="text-gray-500">Full Stack Developer</P>
        </div>

        <hr className="border-gray-200" />

        {/* Contact Info */}
        <div className="space-y-2 text-sm">
            <div className="flex justify-between">
                <P>Age:</P>
                <P>26</P>
            </div>
            <div className="flex justify-between">
                <P>Residence:</P>
                <P>CO</P>
            </div>
            <div className="flex justify-between">
                <P>Freelance:</P>
                <P className="text-green-500">Available</P>
            </div>
            <div className="flex justify-between">
                <P>Address:</P>
                <P>Medellín, Colombia</P>
            </div>
        </div>

        <hr className="border-gray-200" />

        <SkillSet title="Languages" skills={languages} />

        <hr className="border-gray-200" />

        <SkillSet title="Programming Languages" skills={programming} />

        <hr className="border-gray-200" />

        <div>
            <H4 className="mb-2">Extra Skills</H4>
            <ul className="list-disc list-inside text-xs space-y-1">
                {extraSkills.map((skill) => (
                    <li key={skill}>
                        <P>{skill}</P>
                    </li>
                ))}
            </ul>
        </div>
    </aside>
);

export default SidebarLeft;
