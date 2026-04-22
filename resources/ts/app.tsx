import { createInertiaApp } from '@inertiajs/react';
import BaseLayout from '@/layouts/base-layout';
import AdminLayout from './layouts/admin-layout';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
createInertiaApp({
    layout(_, page) {
        const url = page.url.toLowerCase();
        if (url.startsWith('/admin')) {
            return AdminLayout;
        }
        if (url.startsWith('/c/manage')) {
            return AdminLayout;
        }
        return BaseLayout;
    },
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    },
});
