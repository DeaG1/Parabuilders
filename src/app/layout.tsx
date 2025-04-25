import type { Metadata } from "next";
import { LanguageProvider } from "@/components/translations/LanguageContext";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "Parabuilders",
    description: "The best community",
    icons:{
        icon: "/favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white overflow-x-hidden`}
                >
                <LanguageProvider>
                {children}
                </LanguageProvider>
            </body>
        </html>
    );
}
