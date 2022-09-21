import './Main.css';
import './../../App.css';
import { Button } from '../Button';

const Main = () => {
    return (
        <div className="main-container">
            <video src="video/video-2.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="main-btns">
                <Button className='btn' buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
                <Button className='btn' buttonStyle="btn--primary" buttonSize="btn--large">
                        WATCH TRAILOR <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    );
}
 
export default Main;