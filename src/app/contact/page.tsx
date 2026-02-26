import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'تواصل معنا',
    description: 'تواصل مع شركة الكوثر كروب لطلب استشارة هندسية أو الاستفسار عن خدماتنا في المقاولات العامة والتصميم والإشراف الهندسي في جميع محافظات العراق.',
};

export default function Page() {
    return <ContactClient />;
}
