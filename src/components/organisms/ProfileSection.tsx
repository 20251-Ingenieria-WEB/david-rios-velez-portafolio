"use client";

import React, { useState } from 'react'; // Import useState
import { H1, H2, P } from '../atoms/Typography';
import Button from '../atoms/Button';
import Img from '../atoms/Img';
import Modal from "@/components/atoms/Modal";

/**
 * ProfileSection organism - Displays a profile section with a title, subtitle, description, and a button to open a modal.
 * This section includes a profile image and a modal with more information about the user.
 */
export const ProfileSection: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section
                className={`
          grid grid-cols-1
          md:grid-cols-[2fr_1fr]
          items-center
          bg-white py-12 px-6 md:px-12
          gap-8
        `}
            >

                <div className="max-w-prose">
                    <H1>I’m David Rios</H1>
                    <H2 className="text-yellow-400 mt-2">Full Stack Developer</H2>
                    <P className="mt-4">
                        Full Stack Java developer with more than 4 years of experience
                        building and implementing backend and frontend solutions, for scalable
                        architectures in applications such SaaS for a marketplace. Establish team
                        communication and collaboration using agile methodologies such as
                        SCRUM. Support solutions in technologies such Java 8, 11, Spring Boot,
                        AngularJS, Vue3, and in cloud platforms such as AWS. Experience in multiple
                        architectures monolithics and microservices and using object oriented
                        programming and functional programming
                    </P>
                    <Button className="mt-6" onClick={() => setIsOpen(true)}>
                        HIRE ME &rarr;
                    </Button>
                </div>

                <div className="overflow-hidden rounded-md">
                    <Img
                        src="/hero.png"
                        alt="I don't want to be a hero, I just want to be a full stack developer :p. No picture available"
                        className="w-full h-auto rounded-md"
                    />
                </div>
            </section>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="About Me">
                <P>
                    Full Stack Java developer with more than 4 years of experience
                    building and implementing backend and frontend solutions.
                </P>
            </Modal>
        </>
    );
};

export default ProfileSection;
