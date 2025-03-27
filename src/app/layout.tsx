import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "김성한 포트폴리오",
    description: "대구소프트웨어마이스터고등학교 김성한의 포트폴리오입니다.",
    icons: {
        icon: "favicon.jpg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
