import React from 'react';
import { ProgressBar } from '../atoms/ProgressBar';
import { P } from '../atoms/Typography';

export interface LabelWithProgressProps {
    label: string;
    percent: number;
}

/**
 * ProgressSkillBar molecule - Displays a skill with a label and a progress bar indicating proficiency.
 */
export const ProgressSkillBar: React.FC<LabelWithProgressProps> = ({
                                                                        label,
                                                                        percent,
                                                                    }) => (
    <div className="space-y-1">
        <div className="flex justify-between items-center text-sm">
            <P className="text-gray-700">{label}</P>
            <P className="font-medium">{percent}%</P>
        </div>
        <ProgressBar percent={percent} />
    </div>
);

export default ProgressSkillBar;
