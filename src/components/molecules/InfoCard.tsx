// src/components/molecules/KnowledgeCard.tsx
import React from 'react';
import Card from '../atoms/Card';
import Icon from '../atoms/Icon';
import { H4, P } from '../atoms/Typography';

export interface KnowledgeCardProps {
    icon: React.ReactElement;
    title: string;
    subtitle?: string;
}

/**
 * InfoCard molecule - Displays an informational card with an icon, title, and optional subtitle.
 */

export const InfoCard: React.FC<KnowledgeCardProps> = ({
                                                                icon,
                                                                title,
                                                                subtitle,
                                                            }) => (
    <Card className="flex flex-col items-center p-6">
        <div className="w-12 h-12 mb-4 text-yellow-400">
            <Icon>{icon}</Icon>
        </div>
        <H4 className="text-center text-gray-800">{title}</H4>
        {subtitle && (
            <P className="mt-2 text-center text-gray-500">{subtitle}</P>
        )}
    </Card>
);

export default InfoCard;
