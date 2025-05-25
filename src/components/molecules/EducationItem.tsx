import React from 'react';
import { H4, P } from '../atoms/Typography';
import Badge from '../atoms/Badge';

export interface EducationItemProps {
    title: string;
    role: string;
    dateRange: string;
    certificate: string;
    description: string;
}

/**
 * EducationItem molecule - Displays an education item with title, role, date range, certificate, and description.
 */
export const EducationItem: React.FC<EducationItemProps> = ({
                                                                title,
                                                                role,
                                                                dateRange,
                                                                certificate,
                                                                description,
                                                            }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 py-8">
        {/* Left side */}
        <div>
            <H4>{title}</H4>
            <div className="flex items-center space-x-4 mt-2">
                <P className="text-sm text-gray-600">{role}</P>
                <Badge>{dateRange}</Badge>
            </div>
        </div>

        {/* Right side */}
        <div>
            <H4>{certificate}</H4>
            <P className="mt-4 text-gray-600">{description}</P>
        </div>
    </div>
);

export default EducationItem;
