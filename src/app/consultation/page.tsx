import { Metadata } from 'next';
import ConsultationClient from './ConsultationClient';

export const metadata: Metadata = {
    title: 'طلب استشارة هندسية',
    description: 'اطلب استشارة هندسية متخصصة من فريق الكوثر كروب لمشروعك السكني، التجاري، الصناعي، أو الطبي في العراق مجاناً.',
};

export default function Page() {
    return <ConsultationClient />;
}
