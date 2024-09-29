import './Hero.scss'
import Button from "../../../components/Button";

export default function Hero() {
    return (
        <section className="hero grid-bleed">
            <div className='hero__content'>
                <div className="hero__text">
                    <h1>A modern publishing platform</h1>
                    <p className="hero__body-text">Grow your audience and build your online brand</p>
                </div>

                <div className="hero__buttons">
                    <Button variant='button--white' location='#'>Start for Free</Button>
                    <Button variant='button--transparent' location='#'>Learn More</Button>
                </div>
            </div>
        </section>
    )
}