import "./Hero.css";
import heroBanner from "../../assets/images/hero/hero-banner.jpg";

function Hero() {

    return (

        <section

            className="hero"

            style={{

                backgroundImage: `url(${heroBanner})`

            }}

        >

            <div className="hero__overlay">

                <div className="hero__content">

                    <p className="hero__subtitle">

                        SIVA COLLECTION

                    </p>

                    <h1 className="hero__title">

                        Timeless Elegance in Every Drape

                    </h1>

                    <p className="hero__description">

                        Experience handcrafted premium sarees designed
                        for weddings, festivals and every special occasion.

                    </p>

                    <button className="hero__button">

                        Explore Collection

                    </button>

                </div>

            </div>

        </section>

    );

}

export default Hero;