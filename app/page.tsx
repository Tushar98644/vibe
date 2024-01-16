/* eslint-disable react/jsx-no-undef */
import {Navbar,Hero ,About} from "@/components"
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
          <Navbar/>
          <Hero/>
          <About/>
    </Fragment>
  )
}
