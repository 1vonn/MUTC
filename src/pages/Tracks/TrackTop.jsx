import './tracks.css'
import cyberImg from "../../assets/cyber.jpg";
import uiuxImg from "../../assets/uiux.jpg";
import webImg from "../../assets/web.jpg";
import MOBILEImg from "../../assets/MOBILE.jpg";
import cloudImg from "../../assets/cloud.jpg";
import powerImg from '../../assets/power.jpg'
const TrackTop = () => {
    return(
        <section className="tracks">
            <div  className="tracks-offered">
                <div className="track-offered-item">
<h2 className="title"> Cyber Security</h2>
< img src={cyberImg} alt="image" width="300px" ></img>
<p className="description">Students who chooses Cyber security track will delve  into the critical aspects of  protesting systems, 
networks and data  from cyber threaats</p>
             </div>
             <div className="track-offered-item">
<h2 className="title"> UI/UX Design</h2>
< img src={uiuxImg} alt="image" width="300px" ></img>
<p className="description">Students who enroll this track will explore the principles of creating 
user friendly and visually appealing interfaces.</p>
             </div>
             <div className="track-offered-item">
<h2 className="title"> Web Development</h2>
< img src={webImg} alt="image" width="300px"></img>
<p className="description">Students who pursue this track will gain comprehensive knowledge
  in building dynamic and responsives websites.</p>
             </div>
             <div className="track-offered-item">
<h2 className="title"> Mobile App DEvelopment</h2>
< img src={MOBILEImg} alt="image" width="300px" ></img>
<p className="description">Students who opt this track will learn to design and build applications for
 mobile devices using platforms such as Android and iOS.</p>
             </div>
             <div className="track-offered-item">
<h2 className="title"> Cloud Engineering</h2>
< img src={cloudImg} alt="image" width="300px" ></img>
<p className="description">Students who opt this track will learn to design and build applications for
 mobile devices using platforms such as Android and iOS.</p>
             </div>
             <div className="track-offered-item">
<h2 className="title"> Power Platform</h2>
< img src={powerImg} alt="image" width="300px" ></img>
<p className="description">Students who opt this track will learn to design and build applications for
 mobile devices using platforms such as Android and iOS.</p>
             </div>
             <div className='registration-form'>
             <form action='' className='form-content'>
      <div>
        <label htmlFor="name" className='labeling'>Name:</label>
        <input className='text-box'
          type="text"
          id="name"
          name="name"
    
          required
        />
      </div>
      <div>
        <label htmlFor="course" className='labeling'>Course:</label>
        <input className='text-box'
          type="text"
          id="course"
          name="course"
         
          required
        />
      </div>
      <div>
        <label htmlFor="email" className='labeling'>Email:</label>
        <input className='text-box'
          type="email"
          id="email"
          name="email"
    
          required
        />
      </div>
      <div>
        <label htmlFor="track" className='labeling'>Track:</label>
        <select className='text-box'
          id="track"
          name="track"
          
          required
        >
          <option value="" >Select a track</option>
          <option value="cybersecurity">Cybersecurity</option>
          <option value="webDevelopment">Web Development</option>
          <option value="mobileAppDevelopment">Mobile App Development</option>
        </select>
      </div>
      <div>
        <button type="submit" className='sbt-button' >Submit</button>
      </div>
    </form>

             </div>

            </div>
            
        </section>
    )
}
export default TrackTop;