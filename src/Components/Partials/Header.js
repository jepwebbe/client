import React from 'react'
import { NavLink } from 'react-router-dom'
import { useColorMeStore } from '../Pages/ColorMe/useColorMeStore'

import { ColorMe } from '../Pages/ColorMe/ColorMe'
import { ColorMeZustand } from '../Pages/ColorMe/ColorMeZustand'
import { Home } from '../Pages/Home'
import { Profile } from '../Pages/Profile'
import { GoalList } from '../Pages/Goals/GoalList'
import Login from '../Pages/Login/Login'
import { useLoginStore } from '../Pages/Login/useLoginStore'

export const Header = () => {
    const { loggedIn} = useLoginStore((store) => ({
        loggedIn: store.loggedIn,
    }))

    const { colorme } = useColorMeStore((store) => ({
        colorme: store.colorme,
    }))

    return (
        <header>
            <ul style={{ backgroundColor: colorme.background }}>
                <li><NavLink style={{ color: colorme.color }} to="/" element={<Home />}>Home</NavLink></li>
                <li><NavLink style={{ color: colorme.color }} to="colorme" element={<ColorMe />}>ColorMe useState</NavLink></li>
                <li><NavLink style={{ color: colorme.color }} to="colormezustand" element={<ColorMeZustand />}>ColorMeZustand</NavLink></li>
                { loggedIn && <li><NavLink style={{ color: colorme.color }} to="profile" element={<Profile />}>Profile</NavLink></li>}
                <li><NavLink style={{ color: colorme.color }} to="goals" element={<GoalList />}>Goals</NavLink></li>
                <li><NavLink style={{ color: colorme.color }} to="login" element={<Login />}>Login</NavLink></li>
            </ul>
            
        </header>
    )
}
