import type {MetaFunction} from "@remix-run/cloudflare";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import styles from "~/styles/global.css";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Visit Radisson Riga",
    viewport: "width=device-width,initial-scale=1",
});

export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: 'script', href: 'https://player.vimeo.com/api/player.js'}
    ];
}

export default function App() {
    return (
        <html lang="en">
        <head>
            <Meta/>
            <Links/>
        </head>
        <body>
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    );
}
