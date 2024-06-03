import './home.css';
const AboutUs =() => {
return(
    <section className="About-section">
        <div className="about-us">
            <h2 className="title">About Us</h2>
         </div>
         <div className='about-us-items'>
        < div className="about-us-list">
            <h2 className="sub-title">Our Mission</h2>
            <p className="sub-title description">MUT strives to cultivate a collaborative enviroment where technology enthusiasts
            can come together to learn, share , and innovate.We are dedicated
             to providing opportunities for hands-on experience, mentorship, and proffesional growth.</p>

        </div>
        <div className="about-us-list">
            <h2 className="sub-title">Our Values</h2>
            <p className="sub-title description">At MUTC, we promote innovative thinking and the creation of advanced
            technologies. We value teamwork and the open sharing of ideas, and beleiveing in the strength of collaborative efforts.
             Striving for excellence in all we do, we foster a culture ofcontinous improvements.</p>
        </div>
            <div className="about-us-list">
                <h2 className="sub-title">Objectives</h2>
                <p className="sub-title description">MUTC provides  a variety of educational programs, including workshops, seminars
                , and courses, to help members develop their technical skills and knowledge. We also facilitate networking opportunities
                , connecting members with industry professionals and peers to build a supportive teech commmunity.</p>
            </div>
            </div>
    
    </section>
)
}
export default AboutUs;