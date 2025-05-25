import React from 'react';
import { P } from '../atoms/Typography';

/**
 * Footer molecule - Displays a simple footer with copyright information.
 */
export const Footer: React.FC = () => (
    <footer className="py-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <P className="text-sm text-gray-600">
                2025 All Rights not Reserved. David Rios :v
            </P>
        </div>
    </footer>
);

export default Footer;
