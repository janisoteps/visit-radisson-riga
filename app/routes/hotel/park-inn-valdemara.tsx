import {json, LoaderFunction} from "@remix-run/cloudflare";
import {useLoaderData} from "@remix-run/react";
import Page5 from "~/components/main/pages/Page5";
import HotelPageContainer from "~/components/layout/shared/HotelPageContainer";

export const loader: LoaderFunction = async ({ request }) => {
    const userAgent = request.headers.get("User-agent");
    const isMobile = !!userAgent ? Boolean(userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )) : false;

    return json({
        isMobile: isMobile
    });
};

export default function ParkInnValdemara() {
    const { isMobile } = useLoaderData();

    return (
        <HotelPageContainer isMobile={isMobile}>
            <div>
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/visit-radisson-riga.appspot.com/o/valdemara-park-inn-int-1.webp?alt=media&token=d55c925b-cae0-4c4d-81c3-e9f53d09ffa3")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 0
                    }}
                >
                </div>

                <div
                    style={{
                        width: '100%',
                        minHeight: '100vh',
                        display: 'flex',
                        position: 'relative',
                        zIndex: 1
                    }}
                >
                    <Page5 isHome={false} isMobile={isMobile} />
                </div>
            </div>
        </HotelPageContainer>
    )
}
