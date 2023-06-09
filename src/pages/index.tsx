import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Component } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  )
}
