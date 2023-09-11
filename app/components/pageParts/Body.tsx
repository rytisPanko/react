"use client"
import { SessionProvider } from "next-auth/react"

export function Body(props: { children: React.ReactNode}) {
    const { children } = props
return(
    <SessionProvider>
       
        <body className= "container-lg">
        <div className="p-3 mb-2 bg-success-subtle text-emphasis-success">
        <div className="container-lg">
                {/* Šis skyrius skirtas antraštei */}
                <section className="jumbotron text-center">
                    <h1 className="display-4">Sveiki atvykę!</h1>
                    <p className="lead">Čia galite rasti įvairių informacijos apie ivairius miestus.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Daugiau sužinoti</a>
                </section>
</div>
</div>
{children}
        </body>
    </SessionProvider>
)

}
