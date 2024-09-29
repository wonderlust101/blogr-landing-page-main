import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import Features from "./Features";
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