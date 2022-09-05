import React from 'react'
import { useColorMeStore } from '../Pages/ColorMe/useColorMeStore'

export const Footer = () => {
    const { colorme } = useColorMeStore((store) => ({
        colorme: store.colorme,
    }))
  return (
    <div style={{ backgroundColor: colorme.background, color: colorme.color, padding: "10px"}}>Footer</div>
  )
}
