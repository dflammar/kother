import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
    title: 'مشاريعنا المنفذة',
    description: 'استعرض مشاريع شركة الكوثر كروب المنجزة في العراق من تصميم وتنفيذ وإشراف هندسي وأنظمة ميكانيكية متكاملة وفحص فني.',
};

export default function Page() {
    return <ProjectsClient />;
}
