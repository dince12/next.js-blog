// top level component
import '../styles/global.css'
import NavigationBar from "../components/navigationBar";

export default function App({Component, pageProps}) {
    return (
        <>
            <style jsx> {
                `.wrapper {
                    margin-left: 10%,
                    margin-write: 10%
                }`
            }
            </style>
            <div>
                <NavigationBar></NavigationBar>
                <Component {...pageProps} />
            </div>
        </>
    )
}