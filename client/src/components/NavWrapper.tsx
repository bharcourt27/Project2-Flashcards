import Navbar from "./Header";


import { ReactNode } from 'react';

export default function NavWrapper({children}: {children: ReactNode}) {
  return (
  <>
  <Navbar/>
  {children}
  </>
  )
}
