import './home.css';
import HeroTop from './HeroTop';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
const Home = () => {
    return (
        <section className='home'>
            <HeroTop/>
            <AboutUs/>
            <Testimonials/>
        </section>
            
    )
}
export default Home;