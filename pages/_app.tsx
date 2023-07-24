import type {AppProps} from "next/app";
import {magicLink, metamaskWallet, ThirdwebProvider} from "@thirdweb-dev/react";
import "../styles/globals.css";
import {createTheme, NextUIProvider} from "@nextui-org/react";
import {Mumbai} from "@thirdweb-dev/chains";
import {ThemeProvider} from "next-themes";
import {MAGIC_LINK_API_KEY} from "../contants";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

function MyApp({Component, pageProps}: AppProps) {

    const lightTheme = createTheme({type: "light"});
    const darkTheme = createTheme({
        type: "dark",
        className: 'dark-gold',
        theme: {
            colors: {
                primary: '#FAB23D',
                primaryLight: '#FFC812',
                success: '#FFC812'
            }
        }
    })

    return (
        <ThemeProvider
            defaultTheme='system'
            attribute='class'
            value={{
                light: lightTheme.className,
                dark: darkTheme.className
            }}
        >
            <NextUIProvider>
                <ThirdwebProvider
                    activeChain={Mumbai}
                    supportedWallets={[
                        magicLink({
                            apiKey: MAGIC_LINK_API_KEY
                        }),
                        metamaskWallet()
                    ]}
                >
                    <Component {...pageProps} />
                </ThirdwebProvider>
            </NextUIProvider>
        </ThemeProvider>
    );
}

export default MyApp;
