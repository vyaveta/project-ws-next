import Navbar from '@/components/Navbar/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Nunito } from 'next/font/google'
import { store } from '../store'
import { Provider, useSelector } from 'react-redux'
import { SideMenu } from '@/components/SideMenu/SideMenu'
import { RootState } from '../store'

const nunito = Nunito({
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
     <main className={`${nunito.className} bg-white`}>
      <Navbar />
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
     </main>
    </Provider>
  )
}
