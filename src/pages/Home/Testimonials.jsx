import './home.css';
const Testimonials = () => {
    return (
        <section className="our-testimonials">
            <div className="members">
                <h2 className="subtitle">Testimonials</h2>
            </div>
            <div className="member-testimonials">
                    < div className="member-testimonial-list">
                    < img src="./src\assets\cynthia.jpg" alt="image" width="300px" height="" ></img>
                    <caption>
                        <p className="testimonial" >The collaborative enviroment at MUTC is unmatched. </p>
                      <p className='testimonial'>  Working on innnovative projects with fellow members has</p>
                      <p className='testimonial'>not only been educational but also incredibly inspiring.</p>
                        <h2 className="member-status">Cynthia Lucy, Alumni</h2>
                    </caption>
                    </div>
                    < div className="member-testimonial-list">
                    < img src="./src\assets\dennis.jpg" alt="image" width="300px" height="" ></img>
                    <caption>
                        <p className="testimonial">Joining MUTC was one of the best decision i made in college.</p>
                        <p className='testimonial'> The resources and support 
                        provided by the club hellped me turn my ideas into reality.</p>
                        <h2 className="member-status">Dennis John, Alumni</h2>
                    </caption>
                    </div>
                    
                
            </div>
        </section>
    )
}
export default Testimonials ;