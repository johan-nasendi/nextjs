import Image from 'next/image'
import { Swiper } from 'swiper';
import Hero1 from '../../images/home-1.png'
import Hero2 from '../../images/home-2.png'
import Hero3 from '../../images/home-3.png'



const HeroSection = () => {

    const swiper = new Swiper('.home-slider', {
        spaceBetween:30,
        centeredSlides:true,
        autoplay: {
            delay:7500,
            disableOnInteraction:false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        loop:true,

      });

    return (

    <section className="home" id="home">

    <div className="swiper-container home-slider">

        <div className="swiper-wrapper wrapper">

            <div className="swiper-slide slide">
                <div className="content">
                    <span>our special </span>
                    <h3>Home Renovation</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                    <a href="#" className="btn">Learn More</a>
                </div>
                <div className="image">
                   <Image src={Hero1}  alt='sajasa' />
                </div>
            </div>

            <div className="swiper-slide slide">
                <div className="content">
                    <span>our special </span>
                    <h3>Software Engineer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                    <a href="#" className="btn">Learn More</a>
                </div>
                <div className="image">
                <Image src={Hero3}  alt='sajasa' />
                </div>
            </div>

            <div className="swiper-slide slide">
                <div className="content">
                    <span>our special dish</span>
                    <h3>Hire Care</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                    <a href="#" className="btn">Learn More</a>
                </div>
                <div className="image">
                <Image src={Hero2}  alt='sajasa' />
                </div>
            </div>

        </div>
        <div className="swiper-pagination">  </div>
    </div>
    </section>
  
    )
}

export default HeroSection
