/* eslint-disable @next/next/no-head-element */

import React from "react";
import Link from "next/link";
import "./global.css";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html>
        <head>
            <title>Home Page</title>
        </head>
        <body>
        <main>
            <nav>
                {/*global nav bar*/}
                <Link href="/">Home</Link>
                <Link href="./notes">Notes</Link>
            </nav>
        </main>
        {children}
        </body>
        </html>
    );
}
