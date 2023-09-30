import "./App.css";
import Logo from "./images/logo.svg";
import Illustration from "./images/illustration-mockups.svg";
import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
	return (
		<div className="App">
			<div className="illustrationContainer">
				<img className="logo" src={Logo} alt="logo" />
				<img className="illustration" src={Illustration} alt="illustration" />
				<div className="empty" />
			</div>
			<div className="infoContainer">
				<div className="empty" />
				<div className="textContainer">
					<h1>Build The Community Your Fans Will Love</h1>
					<p>
						Huddle re-imagines the way we build communities. You have a voice,
						but so does your audience. Create connections with your users as you
						engage in genuine discussion.
					</p>
					<button className="registerButton">Register</button>
				</div>
				<div className="socials">
					<button className="socialButton">
						<FontAwesomeIcon className="socialIcon" icon={faFacebookF} />
					</button>
					<button className="socialButton">
						<FontAwesomeIcon className="socialIcon" icon={faTwitter} />
					</button>
					<button className="socialButton">
						<FontAwesomeIcon className="socialIcon" icon={faInstagram} />
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
