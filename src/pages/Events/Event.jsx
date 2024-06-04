import './events.css';
import cyberImg from "../../assets/cyber.jpg";
import uiuxImg from "../../assets/uiux.jpg";
import webImg from "../../assets/web.jpg";
import MOBILEImg from "../../assets/MOBILE.jpg";
import cloudImg from "../../assets/cloud.jpg";
import powerImg from '../../assets/power.jpg'
const Event = () => {
    return (
        <section className="events">
            <div className="events- list">
                < div className="event-list-item">
                    <h2 className="event-name">Cyber Security</h2>
                    < img src={cyberImg} alt="image" width="300px"></img>
                    <p className="description">Every Monday from 4pm to 7pm at computer lab FO4, led by Webstar Ifedha</p>
                </div>
                < div className="event-list-item">
                    <h2 className="event-name">UI/UX</h2>
                    < img src={uiuxImg} alt="image" width="300px"></img>
                    <p className="description">Every Monday from 4pm to 7pm at computer lab FO4, led by Webstar Ifedha</p>
                </div>
                
                < div className="event-list-item">
                    <h2 className="event-name">Web Development</h2>
                    < img src={webImg} alt="image" width="300px"></img>
                    <p className="description">Every Wednesday from 4pm to 7pm at computer lab FO4, led by Carolyne</p>
                </div>
                < div className="event-list-item">
                    <h2 className="event-name">Mobile App Development</h2>
                    < img src={MOBILEImg} alt="image" width="300px"></img>
                    <p className="description">Every Thursday from 4pm to 7pm at computer lab FO4, led by Stanely Amunze</p>
                </div>
                < div className="event-list-item">
                    <h2 className="event-name">Cloud Engineeringt</h2>
                    < img src={cloudImg} alt="image" width="300px"></img>
                    <p className="description">Every Friday from 4pm to 7pm at computer lab FO4, led by Paul Karanja</p>
                </div>
                < div className="event-list-item">
                    <h2 className="event-name">Power Platform</h2>
                    < img src={powerImg} alt="image" width="300px"></img>
                    <p className="description">Every Friday from 4pm to 7pm at computer lab FO4, led by Evyonn Mbithe</p>
                </div>
            </div>
        </section>
    )
}
export default Event ;