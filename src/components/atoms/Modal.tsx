"use client";
import React, { ReactNode, useEffect } from 'react';
import {H2} from "@/components/atoms/Typography";
import Button from "@/components/atoms/Button";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

// A simple Modal component that can be used to display content in a modal dialog.
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    // Close on Escape
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-80"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-md shadow-2xl max-w-lg w-full p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="flex justify-between items-center mb-4">
                    <H2 className="text-xl font-semibold">{title}</H2>
                    <Button
                        aria-label="Close"
                        className="text-gray-500 hover:text-gray-800 text-sm"
                        onClick={onClose}
                    >
                        ✕
                    </Button>
                </header>
                <div className="overflow-y-auto max-h-[70vh]">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
