"use client";

import React, { useState } from 'react';
import Card from '../atoms/Card';
import Img from '../atoms/Img';
import { H4, P } from '../atoms/Typography';
import Modal from '../atoms/Modal';

export interface PortfolioCardProps {
    imageSrc: string;
    title: string;
    description: string;
    href: string;
}
/**
 * PortfolioCard molecule - Displays a portfolio item with an image, title, description, and a link to learn more.
 */
const PortfolioCard: React.FC<PortfolioCardProps> = ({
                                                         imageSrc,
                                                         title,
                                                         description,
                                                         href,
                                                     }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Card className="overflow-hidden flex flex-col">
                <div className="w-full h-48">
                    <Img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                    <H4>{title}</H4>
                    <P className="mt-2 text-gray-600 flex-1">{description}</P>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="mt-4 text-yellow-400 font-medium inline-block"
                    >
                        Learn More &rarr;
                    </button>
                </div>
            </Card>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title}>
                <P>{description}</P>
                <P className="mt-4">
                    Más detalles aquí.{' '}
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline ml-2"
                    >
                        Ver en GitHub
                    </a>
                </P>
            </Modal>
        </>
    );
};

export default PortfolioCard;

