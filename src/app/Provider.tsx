'use client'
import { useRef } from 'react'
import { Provider } from "react-redux";
import { makeStore, AppStore } from '../lib/store'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { usePathname } from 'next/navigation';
import NetworkAlert from './components/NetworkAlert';
import UserInitializer from './components/UserInitializer';
function ProviderState({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const storeRef = useRef<AppStore>(undefined)
    const pathname = usePathname()

  if (!storeRef.current) {
          // Create the store instance the first time this renders
          storeRef.current = makeStore()
        }
  const shouldSkipLayout = pathname === '/login' || pathname === '/signup';
  return (
    <Provider store={storeRef.current}>
        <NetworkAlert />
        <UserInitializer />
        {!shouldSkipLayout &&<Header />}
        {children}
        { !shouldSkipLayout && <Footer />}
    
  </Provider>
  )
}

export default ProviderState
