// src/app/page.tsx
import React from 'react';
import DefaultLayout from '@/components/templates/DefaultLayout';
import SidebarLeft from "@/components/organisms/SidebarLeft";
import ProfileSection from "@/components/organisms/ProfileSection";
import KnowledgeSection from "@/components/organisms/KnowledgeSection";
import EducationSection from "@/components/organisms/EducationSection";
import PortfolioSection from "@/components/organisms/PortafolioSection";
import Footer from "@/components/molecules/Footer";
import SocialNavBar from "@/components/organisms/SocialMediaNav";


export default function Page() {
    return (
        <DefaultLayout>
            {/* 1) Left sidebar: fixed 20% */}
            <SidebarLeft />

            {/* 2) Main content: flows in 70% */}
            <main className="space-y-16">
                <ProfileSection />
                <KnowledgeSection />
                <EducationSection />
                <PortfolioSection />
                <Footer />
            </main>

            {/* 3) Right social nav: fixed 10% */}
            <SocialNavBar />
        </DefaultLayout>
    );
}
