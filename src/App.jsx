import "./App.css";
import SocialButton from "./Components/SocialButton";
import SponsorCard from "./Components/SponsorCard";
import Countdown from "./Components/Countdown";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Gallery from "./Pages/Gallery";
import Contacts from "./Pages/Contacts";
import About from "./Pages/About";
import RegistrationCounter from "./Components/RegistrationCounter";
import PrizeCounter from "./Components/PrizeCounter";
import Card2 from "./Components/Card2";

function App() {
  const images = [
    "/public/Images/hackhound 2k23 photos/IMG1.jpg",
    "/public/Images/hackhound 2k23 photos/IMG1.jpg",
    "/public/Images/hackhound 2k23 photos/IMG1.jpg",
    "/public/Images/hackhound 2k23 photos/IMG1.jpg",
    "/public/Images/hackhound 2k23 photos/IMG1.jpg",
  ];

  let lastScrollTop = 0; // This variable will hold the last scroll position

  window.addEventListener(
    "scroll",
    function () {
      // Check if the viewport width is larger than a certain threshold (e.g., 768px for tablets/desktops)
      if (window.innerWidth >= 768) {
        let currentScroll =
          window.scrollY || document.documentElement.scrollTop;

        // Compare the current scroll position to the last known scroll position
        if (currentScroll > lastScrollTop) {
          // Scrolling DOWN
          document.querySelector("nav").style.top = "-70px"; // Adjust this value based on your navbar's height
        } else {
          // Scrolling UP
          document.querySelector("nav").style.top = "0";
        }

        // Update lastScrollTop to the current scroll position
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
      } else {
        // Reset the navbar position on smaller devices
        document.querySelector("nav").style.top = "0";
      }
    },
    false
  );

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="navbar">
        <div className="logo">
          <img src="Images/hackhoundlogowhite.png"></img>
        </div>
        <button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li>
            <a onClick={() => scrollToSection("home")}>Home</a>
          </li>
          <li className="center">
            <a onClick={() => scrollToSection("gallery")}>Gallery</a>
          </li>
          <li className="upward">
            <a onClick={() => scrollToSection("about")}>About</a>
          </li>
          <li className="forward">
            <a onClick={() => scrollToSection("contact")}>Contact</a>
          </li>
        </ul>
      </nav>
    );
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setRendering(false);
  //   }, 2500);
  // }, []);
  return (
    <div className="App">
      <Navbar />
      {/* <div className="navigation">
        <nav>
          <ul>
            <li>
              <a onClick={() => scrollToSection("home")}>Home</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("gallery")}>Gallery</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("about")}>About</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("contact")}>Contact</a>
            </li>
          </ul>
        </nav>
      </div> */}

      {/* <div className="navigation">
        <ul className="nav-links">
          <li>
            <img src="Images/file_2024-02-28_15.06.46.png"></img>
          </li>
          <li>
            <a onClick={() => scrollToSection("home")}>Home</a>
          </li>
          <li className="center">
            <a onClick={() => scrollToSection("gallery")}>Gallery</a>
          </li>
          <li className="upward">
            <a onClick={() => scrollToSection("about")}>About</a>
          </li>
          <li className="forward">
            <a onClick={() => scrollToSection("contact")}>Contact</a>
          </li>
        </ul>
      </div> */}
      <div className="container">
        <div className="top" id="home">
          <br className="showhide"></br>
          <h1>
            <span className="heading">HackHound 2.0</span>
            <br></br>
            <div className="date">5ᵗʰ - 6ᵗʰ April</div>
            <br></br>
            <div className="text">
              HackHound is a 24-hour in-person hackathon that seeks to provide
              an opportunity for ardent members of the hacker community to
              showcase the best of their talents and encourage tech culture to
              the new and old.
              <br></br>
              <br></br>
            </div>
          </h1>
          <div
            className="apply-button"
            data-hackathon-slug="hackhound-2"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
          ></div>

          <p className="animtext">
            Get ready to code, collaborate, and innovate!
            <br></br>
            Starting in...
          </p>
          {/* <Countdown /> */}

          {/* <section className="registration">
            <h2>Registrations Opening Soon!</h2>
          </section> */}
        </div>

        <Footer />
        <br></br>
        <h2>Sponsors</h2>
        <div className="cards">
          <SponsorCard
            image="/HackHound2k24/public/Images/DevColored.png"
            alt="DEVFOLIO LOGO"
          />
          <SponsorCard
            image="/HackHound2k24/public/Images/Colored.png"
            alt="POLYGON LOGO"
          />
          <SponsorCard
            image="/HackHound2k24/public/Images/Untitled.png"
            alt="ETHINDIA LOGO"
          />
          <SponsorCard
            image="/HackHound2k24/public/Images/finlatics.png"
            alt=""
          />
        </div>

        <div className="participate">
          <h2>Why Participate</h2>
          <div className="cards">
            {/* <Card2
              image="Images/bus.gif"
              title="Pickup and Drop"
              description=""
            /> */}
            <Card2
              image="Images/mentors.gif"
              title="Mentors"
              description=""
            />
            <Card2
              image="Images/problem-solving.gif"
              title="Problem Cases"
              description=""
            />
            <Card2
              image="Images/spring_giveaway_utm_imgs_v2.gif"
              title="Cash Prizes"
              description=""
            />
            <Card2
              image="Images/catering.gif"
              title="Free Food"
              description=""
            />
            <Card2
              image="Images/open-gift.gif"
              title="Goodies"
              description=""
            />
          </div>
        </div>

        <br></br>

        {/* <section className="register-btn">
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Register Now
          </a>
        </section> */}
        <br></br>
        {/* <div className="PastSp">
          <h2>Past Sponsors</h2>
          <div className="cards">
            <SponsorCard image="/HackHound2k24/public/Images/Mlh-logo-color.svg.png" />
            <SponsorCard image="/HackHound2k24/public/Images//devfolio.png" />
            <SponsorCard image="/HackHound2k24/public/Images//Polygon_blockchain_logo.png" />
            <SponsorCard image="/HackHound2k24/public/Images//filecoinio-ar21.png" />
            <SponsorCard image="/HackHound2k24/public/Images//solana-sol9611.jpg" />
            <SponsorCard image="/HackHound2k24/public/Images//replit.png" />
            <SponsorCard image="/HackHound2k24/public/Images//interview-cake.jpg" />
            <SponsorCard image="/HackHound2k24/public/Images//axure2644.jpg" />
          </div>
        </div> */}

        <div className="PastJudges">
          <h2>Judges</h2>
          <div className="cards">
            <Card
              image="Images/Mentors/1646152713583.jfif"
              title="Gunjan Maddan"
              description="SDE@Microsoft | Ex-Paytm"
              link="https://www.linkedin.com/in/gunjanmadaan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
            <Card
              image="Images/Mentors/1672233980549.jfif"
              title="Mahima Hans"
              link="https://www.linkedin.com/in/mahima-hans-3b9976155
              "
              description="FSoftware Engineer, Adobe | Ex-Microsoft"
            />
            <Card
              image="Images/Mentors/1671115311576.jfif"
              title="Rishika Gupta
              "
              description="Former Product Intern @Adobe"
              link="https://www.linkedin.com/in/rishikagupta-rg/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
          </div>

          <h2>Mentors</h2>
          <div className="cards">
            <Card
              image="Images/Mentors/image.png"
              title="Aneesh Gupta"
              description="Top Doubt Resolver @Pepcoding"
              link="https://www.linkedin.com/in/aneesh-gupta-b819781b7"
            />
            {/* <Card image="public\Images\Arijit Roy2.jpg" title="Arijit Roy" description="Backend & ML @Docsumo || 6x Hackathon Winner"/> */}
            <Card
              image="Images/Mentors/1684875661492.jfif"
              title="Pulkit Batra"
              description="Consultant - Deloitte USI | Ex-Accenture"
              link="https://www.linkedin.com/in/pulkitbxtra"
            />
            {/* <Card image="public\Images\Divyansh Gandhi.jpg" title="Divyansh Gandhi" description="Founder of Stimuli Technologies || Flutter Lead at LikeMinds"/> */}
            <Card
              image="Images/Mentors/1673339274926.jfif"
              title="Nitya Pasrija"
              description="Upcoming SWE Intern @Microsoft"
              link="https://www.linkedin.com/in/nitya-pasrija/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
            <Card
              image="Images/Mentors/1682858364824.jfif"
              title="Pranav Chauhan"
              description="Cofounder @ UIspace.IO"
              link="https://www.linkedin.com/in/pranav-chauhan-217bb11b9"
            />
          </div>
        </div>
        <hr></hr>

        <div className="gallery" id="gallery">
          <h2>HackHound 2k23 Flashback</h2>
          <RegistrationCounter />
          <PrizeCounter />
          <h3>
            Click here to know more about{" "}
            <a
              href="https://hackhound2k23.github.io/page.github.io/"
              target="_blank"
            >
              HackHound 2k23
            </a>
          </h3>
          <h4>Recalling Moments of Inspiration</h4>
          <Gallery />
        </div>

        <div className="team">
          <br></br>
          <h2>Club Coordinator</h2>
          <div className="cards">
            <Card
              image="Images/WhatsApp Image 2024-02-28 at 6.42.52 PM.jpeg"
              title="Dr. Oshin Sharma"
              link="https://www.linkedin.com/in/dr-oshin-sharma-99142017"
              description="Associate Professor Department of CSE, SRMIST "
            />
          </div>
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <h2>Got a Query??? Connect with us!!</h2>

        <SocialButton
          imageUrl="Images/instagram (1).png"
          link="https://www.instagram.com/hack.hound/"
        />
        <SocialButton
          imageUrl="Images/linkedin.png"
          link="https://www.linkedin.com/company/hackhound/?originalSubdomain=in"
        />
        <SocialButton
          imageUrl="Images/twitter (2).png"
          link="https://twitter.com/hackhound2k24"
        />
        <SocialButton
          imageUrl="Images/gmail.png"
          link="mailto:inbox.hackhound@gmail.com"
        />
        <SocialButton
          imageUrl="Images/discord.png"
          link="https://discord.gg/c8rGTQcJ"
        />

        <p className="copyright">&copy; 2024 Copyright: HackHound 2024</p>
      </div>
    </div>
  );
}

export default App;