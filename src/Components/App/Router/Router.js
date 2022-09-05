import { Routes, Route } from 'react-router-dom'
import { About } from '../../Pages/About'
import { Contact } from '../../Pages/Contact'
import { GoalDetails } from '../../Pages/Goals/GoalDetails'
import { GoalList } from '../../Pages/Goals/GoalList'
import { Home } from "../../Pages/Home"
import { Notfound } from "../../Pages/Notfound"
import { Header } from '../../Partials/Header'
import { ColorMe } from '../../Pages/ColorMe/ColorMe'
import { ColorMeZustand } from '../../Pages/ColorMe/ColorMeZustand'
import { Footer } from '../../Partials/Footer'
import Login from '../../Pages/Login/Login'
import { Profile } from '../../Pages/Profile'
import { useLoginStore } from '../../Pages/Login/useLoginStore'


export const Router = () => {
    const { loggedIn} = useLoginStore((store) => ({
        loggedIn: store.loggedIn,
    }))
    return (
        <>
        <Header />
            <Routes>
                <Route path="colorme" element={<ColorMe />} />
                { loggedIn &&<Route path="profile" element={<Profile />} />}

                <Route path="/colormezustand" element={<ColorMeZustand />} />
                <Route path="/login" element={<Login/>} />
                <Route index path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="goals" element={<GoalList />} >
                    <Route path=":id" element={<GoalDetails />} />
                </Route>
                <Route path="*" element={<Notfound />} />
            </Routes>
            <Footer />
            </>
    )
}
