import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

const GlobalLayout = () => {
  return (
    <>
    <div><Header/></div>
    <div><Outlet/></div>
    </>
  )
}

export default GlobalLayout