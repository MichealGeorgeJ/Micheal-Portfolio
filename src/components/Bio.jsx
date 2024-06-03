import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Bio = ({ id }) => {
  const bioRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const bioTop = bioRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (bioTop < windowHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    AOS.init();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id={id} ref={bioRef}>
      <div className={`container-fluid }`}>
        <div className="row d-flex">
          <div className="col">
            <div >
              <div data-aos="fade-down"
    data-aos-offset="-300"
    data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">
                <h3>About Me :</h3>
                <p>
                  Combining my engineering background with my passion for coding, I thrive in creating efficient and scalable web applications. I love diving into complex problems and crafting elegant solutions that enhance user experiences. With a keen eye for detail and a dedication to continuous learning, I stay updated with the latest technologies and best practices in the rapidly evolving field of web development.
                </p>
              </div>
            </div>
            
            <div >
              <div data-aos="fade-up"
    data-aos-offset="-500"
    data-aos-delay="500"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="bottom-center">
                <h3>Interests :</h3>
                <p>
                  Outside of coding, I enjoy exploring new technologies, reading tech blogs, and participating in coding communities. I'm also passionate about contributing to open-source projects and volunteering my time to mentor aspiring developers.
                  <br />
                  Feel free to explore my portfolio to see examples of my work and projects I've contributed to. I'm excited about the opportunity to leverage my skills and experience as a Full Stack Developer to make meaningful contributions to innovative projects and teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
