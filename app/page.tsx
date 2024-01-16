/* eslint-disable react/jsx-no-undef */
import Image from 'next/image'
import {Navbar,Hero} from "@/components"
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
          <Navbar/>
          <Hero/>
    </Fragment>
  )
}
