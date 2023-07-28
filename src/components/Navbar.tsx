"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Logo from '../../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <motion.nav
      initial={{ scale: 1.2 }}
      transition={{ type: 'spring', stiffness: 200, damping: 60, duration: 3 }}
      animate={{ scale: 1 }}
      className="flex flex-row   border-b border-b-white justify-between items-center px-8 py-2">
      <Link href='/'>
        <Image alt='' className="h-12 w-12" src={Logo}></Image>
      </Link>
      <Link href='/admin'>
        <button className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          ADMIN DASHBOARD</button>
      </Link>

    </motion.nav>
  )
}

export default Navbar