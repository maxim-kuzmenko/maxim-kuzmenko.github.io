"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useUTM from '../hooks/useUTM';

const ClientUTMProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter();
    const { referrer } = useUTM();

    // Function to modify the URL with UTM and referrer parameters
    const appendUTMParams = (url: string) => {
        const newUrl = new URL(url, window.location.origin);

        if (referrer) {
            newUrl.searchParams.set('referrer', referrer);
        }

        const finalUrl = newUrl.toString();
        return finalUrl;
    };

    useEffect(() => {
        if (!router) {
            return;
        }

        // Handle initial load
        const initialUrl = appendUTMParams(window.location.href);
        if (initialUrl !== window.location.href) {
            window.history.replaceState(null, '', initialUrl);
        }

        const originalPush = router.push;

        const customPush = (url: string, options?: any) => {
            const finalUrl = appendUTMParams(url);
            return originalPush(finalUrl, options);
        };

        router.push = customPush;

        return () => {
            router.push = originalPush;
        };
    }, [referrer, router]);

    return <>{children}</>;
};

export default ClientUTMProvider;
