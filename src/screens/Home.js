import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
//  librarry
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import * as yup from "yup";
import { Formik } from "formik";
import resume from "./CV.pdf";
// Images
import Design1 from "../component/assests/3.png";
import Design2 from "../component/assests/2.jpg";
import Design3 from "../component/assests/5.png";
import Services1 from "../component/assests/service_icon/001-options.svg";
import Services2 from "../component/assests/service_icon/002-chat.svg";
import Services3 from "../component/assests/service_icon/004-percentage.svg";
import Services4 from "../component/assests/service_icon/004-percentage.svg";
import Services5 from "../component/assests/service_icon/006-goal.svg";
import Services6 from "../component/assests/service_icon/005-line-chart.svg";
import Logo from "../component/assests/default-removebg-preview.png";
import Profile from "../component/assests/profile.png";

const validationSchema = yup.object({
  name: yup.string().trim().required("Name is Missing"),
  email: yup.string().email().trim().required("Email is Missing"),
  description: yup.string().trim().required("Description is Missing"),
});
const Home = () => {
  const navRef = useRef();
  const HandleOnClick = () => {
    navRef.current.classList.toggle("active");
  };
  const [counterOn, setCounterOn] = useState(true);

  const HandleSubmitButton = async (values, { resetForm }) => {
    console.log(values)
    const res = await
      fetch("https://reactfirebaseproject-f8015-default-rtdb.firebaseio.com/userDataRecords.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ values })
      })
    if (res) {
      resetForm();
      alert("Data Stored");
    } else {
      alert("Plz fill the data");
    }
  };

  return (
    <>
      <div className="main_container">
        <div className="navbar">
          <div className="hamburger hamburger1" onClick={HandleOnClick}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className="navbar_items navbar_items1 ">
            <nav>
              <ul className="navbar_list navbar_list1">
                <li className="nav_list">
                  <a
                    href="#Home_page"
                    // spy={true}
                    // smooth={true}
                    // offset={-100}
                    // duration={500}
                    // delay={1000}
                    className="nav_link"
                  >
                    Home
                  </a>
                </li>
                <li className="nav_list">
                  <a
                    href="#portfolio"
                    // spy={true}
                    // smooth={true}
                    // offset={100}
                    // duration={500}
                    // delay={1000}
                    className="nav_link"
                  >
                    Porfolio
                  </a>
                </li>
                <li className="nav_list">
                  <a
                    href="#about"
                    // spy={true}
                    // smooth={true}
                    // offset={-10}
                    // duration={500}
                    // delay={1000}
                    className="nav_link"
                  >
                    About
                  </a>
                </li>
                <li className="nav_list">
                  <a
                    href="#services"
                    // spy={true}
                    // smooth={true}
                    // offset={-100}
                    // duration={500}
                    // delay={1000}
                    className="nav_link"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className=" navbar_items2 navbar_items ">
            <nav>
              <ul className="navbar_list navbar_list2">
                <li className="nav_list">
                  <a
                    href="#skills"
                    // spy={true}
                    // smooth={true}
                    // offset={-100}
                    // duration={500}
                    // delay={1000}
                    className="nav_link"
                  >
                    Skills
                  </a>
                </li>
                <li className="nav_list">
                  <a
                    href="#socials"
                    // spy={true}
                    // smooth={true}
                    // offset={-100}
                    // duration={500}
                    // delay={1000}
                    className="nav_link"
                  >
                    Socials
                  </a>
                </li>
                <li className="nav_list">
                  <a
                    href="#client"
                    // spy={true}
                    // smooth={true}
                    // offset={-100}
                    // duration={500}
                    // delay={1000}
                    className="nav_link"
                  >
                    Happy Client
                  </a>
                </li>
                <li className="nav_list">
                  <a
                    href="#contact"
                    // spy={true}
                    // smooth={true}
                    // offset={-100}
                    // duration={500}
                    // delay={1000}
                    className="nav_link"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="main_container">
        <div className="home_page" id="Home_page">
          <div
            className="content"
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1>Mtech</h1>
            <p>
              I’m Muhammad Maaz Naveed A Website Developer and Designer Based In
              Pakistan.
            </p>
          </div>
        </div>
      </div>
      <div className="heading" id="portfolio">
        <h1
        // data-aos="fade-right"
        >Portfolio</h1>
      </div>
      <div className="main_container">
        <div className="portfolio">
          <div className="row">
            <div
              className="item"
            // data-aos="zoom-in"
            // data-aos-easing="linear"
            // data-aos-duration="1500"
            >
              <a href="/">
                <div className="img">
                  <img src={Design2} alt="" />
                </div>
                <div className="content">
                  <p>E-Commerce shopping store </p>
                  <span>MERN</span>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div
              className="item"
            // data-aos="zoom-in"
            // data-aos-easing="linear"
            // data-aos-duration="1500"
            >
              <a href="/">
                <div className="img">
                  <img src={Design1} alt="" />
                </div>
                <div className="content">
                  <p>Business website </p>
                  <span>Express App</span>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div
              className="item"
            // data-aos="zoom-in"
            // data-aos-easing="linear"
            // data-aos-duration="1500"
            >
              <a href="/">
                <div className="img">
                  <img src={Design3} alt="" />
                </div>
                <div className="content">
                  <p>Proceesing </p>
                  <span>MERN</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main_container" id="socials">
        <div className="socials">
          <div className="socials_row">
            <div className="socials_item">
              <a
                href="https://github.com/MuhammadMaazNaveed"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
                <div className="text">
                  <p>Github</p>
                </div>
              </a>
            </div>
            <div className="socials_item">
              <a
                href="https://twitter.com/Maaz_Naveed_dev"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-square-twitter"></i>
                <div className="text">
                  <p>Twitter</p>
                </div>
              </a>
            </div>
            <div className="socials_item">
              <a
                href="https://www.instagram.com/maaz_web_dev/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
                <div className="text">
                  <p>instagram</p>
                </div>
              </a>
            </div>
            <div className="socials_item">
              <a
                href="https://www.facebook.com/MaazNaveeddev"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
                <div className="text">
                  <p>Facebook</p>
                </div>
              </a>
            </div>
            <div className="socials_item">
              <a
                href="https://www.linkedin.com/in/maaz-naveed-0a6451219/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
                <div className="text">
                  <p>Linkedin</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="heading" id="about">
        <h1
        // data-aos="fade-right"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
        >
          About Me
        </h1>
      </div>
      <div className="main_container">
        <div className="about">
          <div className="about_row">
            <div
              className="image"
            // data-aos="fade-down-right"
            // data-aos-easing="linear"
            // data-aos-duration="1500"
            >
              <img src={Profile} alt="" />
            </div>
            <div
              className="content"
            // data-aos="fade-down-left"
            // data-aos-easing="linear"
            // data-aos-duration="1500"
            >
              <h1>We can make it together</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there
                <span>live the blind</span>
                texts.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <div className="download_button">
                <a href={resume} download="CV">
                  <button>Download your CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="heading" id="services">
        <h1
        // data-aos="fade-right"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
        >
          Services
        </h1>
      </div>
      <div className="main_container">
        <div className="Service">
          <div className="Service_row">
            <div className="item">
              <img src={Services1} alt="" />
              <h1 className="heading_item">
                Digital <br />
                Strategy
              </h1>
              <p className="para_item">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
            <div className="item">
              <img src={Services2} alt="" />
              <h1 className="heading_item">
                Web <br />
                Design
              </h1>
              <p className="para_item">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
            <div className="item">
              <img src={Services3} alt="" />
              <h1 className="heading_item">
                Website
                <br />
                Development
              </h1>
              <p className="para_item">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
            <div className="item">
              <img src={Services4} alt="" />
              <h1 className="heading_item">
                Web <br />
                Development
              </h1>
              <p className="para_item">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
            <div className="item">
              <img src={Services5} alt="" />
              <h1 className="heading_item">
                WordPress <br />
                Solutions
              </h1>
              <p className="para_item">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
            <div className="item">
              <img src={Services6} alt="" />
              <h1 className="heading_item">
                Mobile <br />
                Applications
              </h1>
              <p className="para_item">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="heading" id="skills">
        <h1
        // data-aos="fade-right"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
        >
          My Skills
        </h1>
      </div>
      <div className="main_container">
        <div className="Skills">
          <div className="Skills_row">
            <div className="item">
              <ScrollTrigger
              // onEnter={() => setCounterOn(true)}
              // onExit={() => setCounterOn(false)}
              >
                {/* {counterOn && ( */}
                <CountUp
                  className="skill_rating"
                  start={0}
                  end={90}
                  duration={2}
                  delay={0}
                />
                {/* )} */}
                <sup>%</sup>
              </ScrollTrigger>

              <h1 className="skills_heading_item">HTML</h1>
            </div>
            <div className="item">
              <ScrollTrigger
              // onEnter={() => setCounterOn(true)}
              // onExit={() => setCounterOn(false)}
              >
                {/* {counterOn && ( */}
                <CountUp
                  className="skill_rating"
                  start={0}
                  end={80}
                  duration={2}
                  delay={0}
                />
                {/* )} */}
                <sup>%</sup>
              </ScrollTrigger>

              <h1 className="skills_heading_item">CSS</h1>
            </div>
            <div className="item">
              <ScrollTrigger
              // onEnter={() => setCounterOn(true)}
              // onExit={() => setCounterOn(false)}
              >
                {/* {counterOn && ( */}
                <CountUp
                  className="skill_rating"
                  start={0}
                  end={60}
                  duration={2}
                  delay={0}
                />
                {/* )} */}
                <sup>%</sup>
              </ScrollTrigger>

              <h1 className="skills_heading_item">JavaScript</h1>
            </div>
            <div className="item">
              <ScrollTrigger
              // onEnter={() => setCounterOn(true)}
              // onExit={() => setCounterOn(false)}
              >
                {/* {counterOn && ( */}
                <CountUp
                  className="skill_rating"
                  start={0}
                  end={60}
                  duration={2}
                  delay={0}
                />
                {/* )} */}
                <sup>%</sup>
              </ScrollTrigger>

              <h1 className="skills_heading_item">React JS</h1>
            </div>
            <div className="item">
              <ScrollTrigger
              // onEnter={() => setCounterOn(true)}
              // onExit={() => setCounterOn(false)}
              >
                {/* {counterOn && ( */}
                <CountUp
                  className="skill_rating"
                  start={0}
                  end={50}
                  duration={2}
                  delay={0}
                />
                {/* // )} */}
                <sup>%</sup>
              </ScrollTrigger>

              <h1 className="skills_heading_item">Node JS</h1>
            </div>
            <div className="item">
              <ScrollTrigger
              // onEnter={() => setCounterOn(true)}
              // onExit={() => setCounterOn(false)}
              >
                {/* {counterOn && ( */}
                <CountUp
                  className="skill_rating"
                  start={0}
                  end={90}
                  duration={2}
                  delay={0}
                />
                {/* )} */}
                <sup>%</sup>
              </ScrollTrigger>

              <h1 className="skills_heading_item">Express JS</h1>
            </div>
            <div className="item">
              <ScrollTrigger
              // onEnter={() => setCounterOn(true)}
              // onExit={() => setCounterOn(false)}
              >
                {/* {counterOn && ( */}
                <CountUp
                  className="skill_rating"
                  start={0}
                  end={80}
                  duration={2}
                  delay={0}
                />
                {/* )} */}
                <sup>%</sup>
              </ScrollTrigger>

              <h1 className="skills_heading_item">Mongo DB</h1>
            </div>
            <div className="item">
              <ScrollTrigger
              // onEnter={() => setCounterOn(false)}
              // onExit={() => setCounterOn(true)}
              >
                {/* {!counterOn && ( */}
                <CountUp
                  className="skill_rating"
                  start={0}
                  end={90}
                  duration={2}
                  delay={0}
                />
                {/* )} */}
                <sup>%</sup>
              </ScrollTrigger>

              <h1 className="skills_heading_item">Wordpress</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="heading" id="client">
        <h1
        // data-aos="fade-right"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
        >
          My Happy Clients
        </h1>
      </div>
      <div className="main_container">
        <div className="clients">
          <div className="container">
            <input type="radio" name="dot" id="one" />
            <input type="radio" name="dot" id="two" />
            <div className="main-card">
              <div className="cards">
                <div className="wrapper">
                  <div className="card front-face">
                    <img
                      src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c0b841de4b0644caa14f1384eb3aca2a-1658826858046/09f7ca89-1844-4f6b-bcba-b4fadec52edf.jpg"
                      alt="Flip Card"
                    />
                  </div>
                  <div className="card back-face">
                    <img
                      src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c0b841de4b0644caa14f1384eb3aca2a-1658826858046/09f7ca89-1844-4f6b-bcba-b4fadec52edf.jpg"
                      alt="Flip Card"
                    />
                    <div className="info">
                      <div className="title">neareden</div>
                      <p>Great..Thanks</p>
                    </div>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="card front-face">
                    <img
                      src="https://pbs.twimg.com/profile_images/1463207615194750976/YloZTWZ7_400x400.jpg"
                      alt="Flip Card"
                    />
                  </div>
                  <div className="card back-face">
                    <img
                      src="https://pbs.twimg.com/profile_images/1463207615194750976/YloZTWZ7_400x400.jpg"
                      alt="Flip Card"
                    />
                    <div className="info">
                      <div className="title">CodingLab</div>
                      <p>"You did an amazing job on my app - thank you!"</p>
                    </div>
                    <ul>
                      <a href="https://twitter.com/deepnkrahlawt">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.instagram.com/svintmvrcus/">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.youtube.com/channel/UCpih6dQQqtGm0kauNsMRfBw">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </ul>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="card front-face">
                    <img
                      src="https://pbs.twimg.com/profile_images/1562683979400040448/FzuNaKPx_400x400.jpg"
                      alt="Flip Card"
                    />
                  </div>
                  <div className="card back-face">
                    <img
                      src="https://pbs.twimg.com/profile_images/1562683979400040448/FzuNaKPx_400x400.jpg"
                      alt="Flip Card"
                    />
                    <div className="info">
                      <div className="title">Svint </div>
                      <p>
                        "Excellent website development - impressive design,
                        functionality, and user experience."
                      </p>
                    </div>
                    <ul>
                      <a href="https://www.facebook.com/svintmvrcus/">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.instagram.com/dpnkr.ahlawat/">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.facebook.com/deepankar.ahlawat">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="wrapper">
                  <div className="card front-face">
                    <img
                      src="https://pbs.twimg.com/profile_images/1522074284499288064/l0Qcz2RW_400x400.jpg"
                      alt="Flip Card"
                    />
                  </div>
                  <div className="card back-face">
                    <img
                      src="https://pbs.twimg.com/profile_images/1522074284499288064/l0Qcz2RW_400x400.jpg"
                      alt="Flip Card"
                    />
                    <div className="info">
                      <div className="title">Aizk</div>
                      <p>
                        "Fantastic website development! Exceeded expectations in
                        every way possible."
                      </p>
                    </div>
                    <ul>
                      <a href="https://twitter.com/Aizkmusic">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.instagram.com/isaacgemal/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </ul>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="card front-face">
                    <img
                      src="https://cdn.beacons.ai/user_content/3UTvYbjIuDVEK9JVYkOVJyZs2Cs1/profile_ariquxeen.png?t=1649657586589"
                      alt="Flip Card"
                    />
                  </div>
                  <div className="card back-face">
                    <img
                      src="https://cdn.beacons.ai/user_content/3UTvYbjIuDVEK9JVYkOVJyZs2Cs1/profile_ariquxeen.png?t=1649657586589"
                      alt="Flip Card"
                    />
                    <div className="info">
                      <div className="title">Ariquxeen</div>
                      <p>
                        "Thank you for developing our website! The design is
                        modern and user-friendly, and we've received positive
                        feedback from our clients."
                      </p>
                    </div>
                    <ul>
                      <a href="https://www.facebook.com/AriQuxeen">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://twitter.com/AriQuxeen">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.instagram.com/Ariquxeen/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </ul>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="card front-face">
                    <img
                      src="https://thronecdn.com/users/twitch:166480635.jpg.jpeg?version=1677479134077"
                      alt="Flip Card"
                    />
                  </div>
                  <div className="card back-face">
                    <img
                      src="https://thronecdn.com/users/twitch:166480635.jpg.jpeg?version=1677479134077"
                      alt="Flip Card"
                    />
                    <div className="info">
                      <div className="title">blaine</div>
                      <p>
                        "The website exceeded my expectations with its design
                        and functionality."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button">
              <label htmlFor="one" className="active one"></label>
              <label htmlFor="two" className="two"></label>
            </div>
          </div>
        </div>
      </div>
      <div className="heading" id="contact">
        <h1
        // data-aos="fade-right"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
        >
          Get in touch
        </h1>
      </div>
      <div className="main_container">
        <div className="contact">
          <div
            className="left"
          >
            <Formik
              initialValues={{ name: "", email: "", description: "" }}
              validationSchema={validationSchema}
              onSubmit={HandleSubmitButton}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <>
                  <div className="group">
                    <div className="form_field">
                      <label htmlFor="">NAME</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange("name")}
                        onBlur={handleBlur("name")}
                        value={values.name}
                      />
                      <p> {errors.name && touched.name && errors.name}</p>
                    </div>
                    <div className="form_field">
                      <label htmlFor="">EMAIL</label>
                      <input
                        type="text"
                        name="email"
                        onChange={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                      />
                      <p> {errors.email && touched.email && errors.email}</p>
                    </div>
                  </div>
                  <div className="form_field">
                    <label htmlFor="">Write your message</label>
                    <textarea
                      name="description"
                      id=""
                      cols="30"
                      rows="10"
                      onChange={handleChange("description")}
                      onBlur={handleBlur("description")}
                      value={values.description}
                    ></textarea>
                    <p>
                      {" "}
                      {errors.description &&
                        touched.description &&
                        errors.description}
                    </p>
                  </div>
                  <div className="message_button">
                    {/* <input
                      type="submit"
                      className="submit"
                      value="Create Account"
                      onClick={handleSubmit}
                    /> */}
                    <button type="button" onClick={handleSubmit}>Send Message</button>
                  </div>
                </>
              )}
            </Formik>
          </div>
          <div
            className="right"
          // data-aos="fade-down-left"
          // data-aos-easing="linear"
          // data-aos-duration="1500"
          >
            <div className="contact_field">
              <label htmlFor="">EMAIL</label>
              <p>maaznaveed571@gmail.com</p>
            </div>
            <div className="contact_field">
              <label htmlFor="">Phone</label>
              <p>+92 336 3017225</p>
            </div>
            <div className="contact_field">
              <label htmlFor="">Address</label>
              <p>
                Post office Society <br /> plot no 701 A <br /> Karachi,75300
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main_container3">
        <footer className="footer">
          <div className="footer_container">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="list">
              <ul>
                <li>
                  <a href="https://www.facebook.com/MaazNaveeddev">Facebook</a>
                </li>
                <li>
                  <a href="https://twitter.com/Maaz_Naveed_dev">Twitter</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/maaz_web_dev/">
                    instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.fiverr.com/maaz_naveed">Fiver</a>
                </li>
                <li>
                  <a href="https://github.com/MuhammadMaazNaveed">Github</a>
                </li>
                <li>
                  <a href="https://legiit.com/maaz_web_dev">legiit</a>
                </li>
                <li>
                  <a href="https://contra.com/maaznaveed5712_edrrg2d6">
                    Contra
                  </a>
                </li>
              </ul>
            </div>
            <div className="copy_right">
              <p>
                ©2023 All rights reserved | Muhammad Maaz Naveed
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
