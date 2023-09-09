
import "bootstrap/dist/css/bootstrap.min.css"
import {Body } from "./components/pageParts/Body"
import {Footer } from "./components/pageParts/Footer"
import {Header } from "./components/pageParts/Header"

export const metadata = {
    title: "Rycio aplikacija",
    description: "Pavizdys paskaitoms"
}


export default function RootLayout({
children,
}: {
    children: React.ReactNode

}) {

    return(
        <html lang = "en" >
       <Body>
        <Header />
        {children}
        <Footer />
        </Body>
        </html>
    )
}