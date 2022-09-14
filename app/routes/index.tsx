import HomePage from "~/components/main/HomePage";
import {json, LoaderFunction} from "@remix-run/cloudflare";
import {useLoaderData} from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
    const userAgent = request.headers.get("User-agent");
    const isMobile = !!userAgent ? Boolean(userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )) : false;

    return json({
        isMobile: isMobile
    });
};

export default function Index() {
    const { isMobile } = useLoaderData();

    return (
        <div
            style={{
                fontFamily: "system-ui, sans-serif",
                lineHeight: "1.4",
                margin: 0,
                overflow: 'scroll'
            }}
        >
            <HomePage isMobile={isMobile} />
        </div>
    );
}
