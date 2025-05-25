// src/components/organisms/SkillSet.tsx
import React from 'react';
import { H3 } from '../atoms/Typography';
import ProgressSkillBar from '../molecules/ProgressSkillBar';

interface Skill {
    label: string;
    percent: number;
}

export interface SkillSetProps {
    title: string;
    skills: Skill[];
}

/**
 * SkillSet molecule - Displays a set of skills with their proficiency levels.
 * @param title - The title of the skill set.
 * @param skills - An array of skills, each with a label and proficiency percentage.
 */
export const SkillSet: React.FC<SkillSetProps> = ({ title, skills }) => (
    <div>
        <H3 className="mb-4">{title}</H3>

        <div className="space-y-3">
            {skills.map(({ label, percent }) => (
                <ProgressSkillBar
                    key={label}
                    label={label}
                    percent={percent}
                />
            ))}
        </div>
    </div>
);

export default SkillSet;
