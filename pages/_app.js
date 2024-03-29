import '../styles/globals.css'
import { SWRConfig } from 'swr'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: {session, ...pageProps} }) {

  return (
      <SessionProvider session={session}>
          <SWRConfig value={{
              fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
          }}>
            <Component {...pageProps} />
          </SWRConfig>
      </SessionProvider>
  )
}

export default MyApp
