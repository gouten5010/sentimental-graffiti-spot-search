// app/layout.tsx
import React from 'react';
import '../styles/tailwind.css'; // パスは適宜調整

export const metadata = {
    title: 'Sentimental Spot',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body>{children}</body>
        </html>
    );
}
