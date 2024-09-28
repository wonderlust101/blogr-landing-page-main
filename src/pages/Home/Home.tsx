import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import './Home.scss'

export default function Home() {
    return (
        <div className='home'>
            <Header/>

            <main className='grid-bleed'>
                <Hero/>
                <Features/>
            </main>
            
            <Footer/>
        </div>
    )
}