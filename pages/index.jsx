import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Resume from "../src/components/Resume";
import Layout from "../src/layouts/Layout";
import {
  servicesSliderProps,
  testimonialsSliderProps,
} from "../src/sliderProps";
const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const Index = () => {
  return (
    <Layout pageClassName={"home"}>
      {/* Section - Hero Started */}
      <section
        className="lui-section lui-section-hero lui-gradient-top"
        id="started-section"
      >
        <div className="container">
          {/* Hero Started */}
          <div className="lui-started v-line v-line-left">
            <div className="section hero-started">
              <div
                className="content scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="titles">
                  <div className="lui-subtitle">
                    <span>
                      {" "}
                      Hello, <b>my name is</b>
                    </span>
                  </div>
                  <h1
                    className="title splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    <span style={{fontSize: '50px'}}>
                      <b>Manuel</b> Dominguez{" "}
                    </span>
                  </h1>
                  <div className="label lui-subtitle">
                    {" "}
                    I am <strong>Game Developer</strong>
                  </div>
                </div>
                <div className="description">
                  <div>
                    <p>
                      Game developer with 10+ years’ experience in Unity, 
                      Unreal, VR, and multiplayer solutions.
                    </p>
                  </div>
                  <div className="social-links">
                    <a target="_blank" rel="nofollow" href="#">
                      <i aria-hidden="true" className="fab fa-twitter" />
                    </a>
                    <a target="_blank" rel="nofollow" href="#">
                      <i aria-hidden="true" className="fab fa-dribbble" />
                    </a>
                    <a target="_blank" rel="nofollow" href="#">
                      <i aria-hidden="true" className="fab fa-behance" />
                    </a>
                  </div>
                </div>
                <div className="bts">
                  <a
                    target="_blank"
                    href="https://drive.google.com/"
                    className="btn"
                  >
                    <span>Download CV</span>
                  </a>
                  <a href="#skills-section" className="btn-lnk">
                    {" "}
                    My Skills{" "}
                  </a>
                </div>
              </div>
              <div
                className="slide scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img
                  decoding="async"
                  src="assets/images/profile2.png"
                  alt="<b>Zoé</b> Miller"
                />
                <span className="circle circle-1" />
                <span
                  className="circle img-1"
                  style={{
                    backgroundImage: "url(assets/images/pat-1.png)",
                  }}
                />
                <span
                  className="circle img-2"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <span
                  className="circle img-3"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <div className="info-list">
                  <ul>
                    <li>
                      <span className="num">
                        10 <strong>+</strong>
                      </span>
                      <span className="value">
                        Years of <strong>Experience</strong>
                      </span>
                    </li>
                    <li>
                      <span className="num">100+</span>
                      <span className="value">
                        Completed <strong>Projects</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Web Developer </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Services */}
      <section
        className="lui-section lui-gradient-bottom"
        id="services-section"
      >
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> What I Do </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Services</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="v-line v-line-right">
          <div className="container">
            <Swiper
              {...servicesSliderProps}
              className="swiper-container js-services scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Game Development </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Unity &amp; Unreal Engine </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      Expert in developing immersive and high-performance games 
                      with Unity and Unreal Engine using C# and C++. Specialized 
                      in VR, shaders, AI behaviors, physics, and multiplayer systems.
                    </div>
                  </div>
                  <a href="#portfolio-section" className="lnk">
                    {" "}
                    View Portfolio{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Virtual Reality </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Oculus &amp; OpenXR </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      Building engaging VR applications optimized for Oculus Rift, HTC Vive, 
                      and OpenXR platforms, delivering seamless interactive experiences 
                      with realistic visuals and performance.
                    </div>
                  </div>
                  <a href="#portfolio-section" className="lnk">
                    {" "}
                    View Portfolio{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Multiplayer Systems </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Real-Time Networking </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      Expertise in building scalable multiplayer experiences with 
                      Unreal networking and Photon, enabling smooth real-time 
                      player interactions across platforms.
                    </div>
                  </div>
                  <a href="#portfolio-section" className="lnk">
                    {" "}
                    View Portfolio{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Technical Leadership </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Mentorship &amp; Optimization </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      Leading teams through performance optimization, best coding 
                      practices, shader development, and gameplay mechanics, while 
                      mentoring junior developers to deliver top-tier games.
                    </div>
                  </div>
                  <a href="#portfolio-section" className="lnk">
                    {" "}
                    View Portfolio{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> 3D Assets &amp; Sound </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Blender, Maya &amp; Audio </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      Skilled in collaborating with artists and sound designers, 
                      integrating 3D models, animations, VFX, and audio design 
                      to create immersive and cohesive gaming environments.
                    </div>
                  </div>
                  <a href="#portfolio-section" className="lnk">
                    {" "}
                    View Portfolio{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>

              <div className="swiper-pagination" />
            </Swiper>
            <div className="lui-bgtitle">
              <span> Services </span>
            </div>
          </div>
        </div>

      </section>
      {/* Section - Skills */}
      <section className="lui-section lui-gradient-center" id="skills-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Professional Skills </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Talent</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="v-line v-line-left">
          <div className="container">
            <div className="row">
              {/* Column 1 */}
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Unity </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          10+ years building immersive cross-platform games with Unity,
                          C#, and advanced UI/gameplay systems.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "95%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        95 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Unreal Engine </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Expert in developing 3D/VR games with Unreal, C++, shaders,
                          materials, and performance optimization.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "90%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        90 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column 2 */}
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> C# &amp; C++ </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Strong programming background for gameplay mechanics, AI,
                          physics interactions, and system architecture.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "90%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        90 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> VR Development </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Skilled in Oculus SDK, OpenXR, and creating seamless VR
                          experiences optimized for multiple devices.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "85%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        85 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column 3 */}
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Multiplayer Systems </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Experienced with Photon and Unreal networking for real-time
                          multiplayer gameplay and scalable performance.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "85%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        85 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Shaders &amp; Optimization </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Advanced knowledge of shaders, lighting, physics simulation,
                          and optimization for smooth gameplay.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "80%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        80 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Skills </span>
            </div>
          </div>
        </div>
      </section>


      {/* Section - Works */}
      <section className="lui-section lui-gradient-top" id="works-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Portfolio </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Cases</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Works */}
        <div className="v-line v-line-right">
          <div className="container">
            <PortfolioIsotope />
            <div className="lui-bgtitle">
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Resume */}
      <Resume />
      {/* Section - Testimonials */}
      <section
        className="lui-section lui-gradient-center"
        id="testimonials-section"
      >
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Testimonials </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  what <b>Clients Say</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="v-line v-line-right">
          <div className="container">
            <Swiper
              {...testimonialsSliderProps}
              className="swiper-container js-testimonials scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <SwiperSlide className="swiper-slide">
                <div className="testimonials-item">
                  <div className="image">
                    <img
                      decoding="async"
                      src="assets/images/testi4-1.jpg"
                      alt="Sarah Johnson"
                    />
                  </div>
                  <div className="text lui-text">
                    <p>
                      Manuel delivered a VR project that exceeded our expectations.
                      His deep knowledge of Unity, Unreal, and Oculus integration
                      created an immersive experience that our users loved.
                    </p>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>Sarah Johnson</span>
                    </h6>
                    <div className="author">
                      <span>Product Manager, VR HealthTech</span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="testimonials-item">
                  <div className="image">
                    <img
                      decoding="async"
                      src="assets/images/testi4-2.jpg"
                      alt="David Lee"
                    />
                  </div>
                  <div className="text lui-text">
                    <p>
                      His multiplayer implementation using Photon and Unreal
                      networking scaled perfectly. Manuel’s optimization skills made
                      our cross-platform game smooth even on lower-end devices.
                    </p>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>David Lee</span>
                    </h6>
                    <div className="author">
                      <span>CTO, Indie Game Studio</span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="testimonials-item">
                  <div className="image">
                    <img
                      decoding="async"
                      src="assets/images/testi4-3.jpg"
                      alt="Emily Carter"
                    />
                  </div>
                  <div className="text lui-text">
                    <p>
                      Manuel is not only technically brilliant with C# and C++, but
                      also a great collaborator. His leadership and mentorship made
                      our team more efficient and confident.
                    </p>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>Emily Carter</span>
                    </h6>
                    <div className="author">
                      <span>Studio Director, Tepida</span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="testimonials-item">
                  <div className="image">
                    <img
                      decoding="async"
                      src="assets/images/testi4-4.jpg"
                      alt="Michael Roberts"
                    />
                  </div>
                  <div className="text lui-text">
                    <p>
                      From shaders to AI behaviors, Manuel’s attention to detail made
                      our game world feel alive. His contributions elevated our
                      project to AAA quality.
                    </p>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>Michael Roberts</span>
                    </h6>
                    <div className="author">
                      <span>Creative Director, Roundtable Learning</span>
                    </div>
                  </div>
                  <div
                    className="bg-img"
                    style={{ backgroundImage: "url(assets/images/pat-2.png)" }}
                  />
                </div>
              </SwiperSlide>

              <div className="swiper-pagination" />
            </Swiper>
            <div className="lui-bgtitle">
              <span> Reviews </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Pricing */}
      <section className="lui-section lui-gradient-center" id="pricing-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Pricing </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Price Board</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Pricing */}
        <div className="v-line v-line-left">
          <div className="container">
            <div className="pricing-items row">
              <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                <div
                  className="pricing-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="lui-subtitle">
                    <span> Hourley Basis </span>
                  </div>
                  <div className="icon" />
                  <div className="price">
                    <span>
                      {" "}
                      39 <b>$</b>
                    </span>
                    <em>Hour</em>
                  </div>
                  <div className="lui-text">
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </div>
                  </div>
                  <div className="list">
                    <div>
                      <ul>
                        <li>
                          <i className="fas fa-check" />
                          Brand Design
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Web Development
                        </li>
                        <li>
                          <em>Advertising</em>
                        </li>
                        <li>
                          <em>Photography</em>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="#contact-section" className="btn btn-solid">
                    <span>Start Project</span>
                  </a>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </div>
              <div className="pricing-col center col-xs-12 col-sm-6 col-md-6 col-lg-4">
                <div className="label">
                  <span> Popular </span>
                </div>
                <div
                  className="pricing-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="lui-subtitle">
                    <span> Freelancing </span>
                  </div>
                  <div className="icon" />
                  <div className="price">
                    <span>
                      {" "}
                      259 <b>$</b>
                    </span>
                    <em>Week</em>
                  </div>
                  <div className="lui-text">
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </div>
                  </div>
                  <div className="list">
                    <div>
                      <ul>
                        <li>
                          <i className="fas fa-check" />
                          Brand Design
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Web Development
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Advertising
                        </li>
                        <li>
                          <em>Photography</em>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="#contact-section" className="btn btn-solid">
                    <span>Start Project</span>
                  </a>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </div>
              <div className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                <div
                  className="pricing-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="lui-subtitle">
                    <span> Full Time </span>
                  </div>
                  <div className="icon" />
                  <div className="price">
                    <span>
                      {" "}
                      1.249 <b>$</b>
                    </span>
                    <em>Month</em>
                  </div>
                  <div className="lui-text">
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </p>
                    </div>
                  </div>
                  <div className="list">
                    <div>
                      <ul>
                        <li>
                          <i className="fas fa-check" />
                          Brand Design
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Web Development
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Advertising
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Photography
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="#contact-section" className="btn btn-solid">
                    <span>Start Project</span>
                  </a>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Pricing </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Blog */}
      {/* <section className="lui-section lui-gradient-top" id="blog-section">
        {/* Professional Profile Section */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2 className="m-title splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                <span>Manuel Dominguez</span>
              </h2>
              <div className="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active">
                <span>Senior Game Developer | 10+ Years Experience</span>
              </div>
              <div className="m-subtitle splitting-text-anim-1 scroll-animate" data-splitting="words" data-animate="active" style={{marginTop: '10px'}}>
                <span>
                  <b>San Antonio, TX, 78220</b> | <a href="mailto:manueldominguez0325@gmail.com">manueldominguez0325@gmail.com</a> | <a href="tel:+12143058552">+1 (214) 305-8552</a> | <a href="#" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="v-line v-line-right">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-lg-7">
                <div className="lui-text" style={{marginBottom: '30px'}}>
                  <h4 className="lui-title">Summary</h4>
                  <p>
                    With over 10 years as a Game Developer and Unity Developer, I specialize in Unity, Unreal Engine, C#, and C++, crafting immersive and high-performance games. My expertise encompasses VR development and technologies like Oculus SDK and OpenXR, ensuring engaging and seamless virtual experiences. Experienced in building cross-platform games and leveraging cloud services for multiplayer functionality, I enhance gameplay scalability and performance. I'm committed to continuous learning and applying cutting-edge game development methodologies to deliver captivating, high-quality gaming solutions.
                  </p>
                </div>
                <div className="lui-text" style={{marginBottom: '30px'}}>
                  <h4 className="lui-title">Portfolio</h4>
                  <ul>
                    <li>Kasala</li>
                    <li>Ochanya nurse run</li>
                    <li>Kabal Hunt</li>
                    <li>...and more</li>
                  </ul>
                </div>
                <div className="lui-text" style={{marginBottom: '30px'}}>
                  <h4 className="lui-title">Experience</h4>
                  <b>Lead Game Developer</b> <span style={{float:'right'}}>Apr 2020 - Present</span><br/>
                  <span>Tepida | Birmingham, Alabama</span>
                  <ul>
                    <li>Spearheaded immersive 3D game development using Unreal Engine and Unity, leveraging C#, C++, and VR integration.</li>
                    <li>Created technical documentation and tutorials, promoting best practices in Unreal Engine development.</li>
                    <li>Developed and optimized shaders/materials for realistic lighting and effects.</li>
                    <li>Led high-fidelity VR game creation, optimizing for Oculus Rift and HTC Vive.</li>
                    <li>Implemented multiplayer using Unreal networking and Photon for real-time interactions.</li>
                    <li>Designed dynamic UIs with Unity’s UI tools and C#.</li>
                    <li>Conducted performance profiling and optimization for smooth gameplay.</li>
                    <li>Developed gameplay mechanics: character controls, physics, AI behaviors.</li>
                    <li>Championed best practices and performance optimization.</li>
                    <li>Collaborated with artists and sound designers for high-quality assets.</li>
                    <li>Led playtesting, iterating on design for player satisfaction.</li>
                    <li>Provided technical leadership and mentorship to junior developers.</li>
                  </ul>
                  <b>Senior Game Developer</b> <span style={{float:'right'}}>Aug 2017 - Mar 2020</span><br/>
                  <span>Roundtable Learning | Los Angeles, California</span>
                  <ul>
                    <li>Developed games and simulations in Unreal Engine and C++ for enhanced graphics and gameplay.</li>
                    <li>Created robust mechanics and AI behaviors for immersive experiences.</li>
                    <li>Managed 3D asset creation and integration with Blender.</li>
                    <li>Implemented performance profiling and optimization for high frame rates.</li>
                    <li>Integrated complex animations and VFX using Unreal Engine.</li>
                    <li>Participated in Agile methodologies for timely feature delivery.</li>
                    <li>Engaged with the gaming community for feedback and insights.</li>
                    <li>Conducted code reviews to improve software quality.</li>
                  </ul>
                  <b>Unity Developer</b> <span style={{float:'right'}}>Oct 2015 - Jul 2017</span><br/>
                  <span>DECA Games | Austin, TX</span>
                  <ul>
                    <li>Designed and developed web-based games in Unity and C#.</li>
                    <li>Developed/consumed RESTful APIs for game data management.</li>
                    <li>Participated in Agile development and automated testing.</li>
                    <li>Collaborated with teams to implement new features based on feedback.</li>
                  </ul>
                  <b>Game Developer</b> <span style={{float:'right'}}>Sep 2014 - Aug 2015</span><br/>
                  <span>Accipiter Labs | Island Park, New York</span>
                  <ul>
                    <li>Developed custom gaming software and applications for player engagement.</li>
                    <li>Provided remote technical support for game issues.</li>
                    <li>Created documentation and wireframes for in-house apps.</li>
                    <li>Developed an internal portal for tracking events and contributions.</li>
                  </ul>
                </div>
                <div className="lui-text" style={{marginBottom: '30px'}}>
                  <h4 className="lui-title">Education</h4>
                  <b>Bachelor of Science, Computer Engineering</b><br/>
                  <span>Urbana University, OH | 2011 - 2014</span>
                </div>
              </div>
              <div className="col-xs-12 col-lg-5">
                <div className="lui-text" style={{marginBottom: '30px'}}>
                  <h4 className="lui-title">Skills</h4>
                  <ul>
                    <li>Unity | Unreal Engine | Virtual Reality (VR)</li>
                    <li>C# | C++ | JavaScript | Python | Blender | Maya | 3D audio | Sound Design</li>
                    <li>Game mechanics | Level design | UX design</li>
                    <li>Linear algebra | Calculus | Physics simulation</li>
                    <li>Debugging | Optimization | Performance for mobile | Agile</li>
                    <li>Rigidbody physics | Animation | Shader | Particle systems | Material Editor | Lighting | Post-processing | AI | Multiplayer | Replication</li>
                  </ul>
                </div>
                <div className="lui-text" style={{marginBottom: '30px'}}>
                  <h4 className="lui-title">Personal Skills</h4>
                  <ul>
                    <li>Effective Communication</li>
                    <li>Critical Thinking</li>
                    <li>Adaptability and Problem Solving</li>
                    <li>Time Management</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span>Profile</span>
            </div>
          </div>
        </div>
      {/* </section>  */}
      {/* Section - Contacts */}
      <section className="lui-section lui-gradient-bottom" id="contact-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Contact Me </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  Let’s <b>Build Something Great</b>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="lui-contacts v-line v-line-left">
          <div className="container">
            <div className="row">
              {/* Contact Info */}
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="numbers-items">
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-map" />
                    </div>
                    <div className="title">
                      <span> Location </span>
                    </div>
                    <div className="lui-text">
                      <span> Remote / Available Worldwide </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-user" />
                    </div>
                    <div className="title">
                      <span> Freelance </span>
                    </div>
                    <div className="lui-text">
                      <span> Available for Projects </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-envelope" />
                    </div>
                    <div className="title">
                      <span> Email </span>
                    </div>
                    <div className="lui-text">
                      <span> manuel.dominguez@mydomain.com </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-address-book" />
                    </div>
                    <div className="title">
                      <span> Phone </span>
                    </div>
                    <div className="lui-text">
                      <span> +1 (234) 567-8900 </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div
                  className="contacts-form scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-1.png)",
                    }}
                  />
                  <div className="contacts-form">
                    <form onSubmit={(e) => e.preventDefault()} id="cform">
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Full Name <b>*</b>
                              <input type="text" name="name" />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Email Address <b>*</b>
                              <input type="email" name="email" />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Subject <b>*</b>
                              <input type="text" name="subject" />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Message <b>*</b>
                              <textarea name="message" defaultValue={""} />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right">
                          <div className="terms-label">
                            * Accept the terms and conditions.
                          </div>
                          <button type="submit" className="btn">
                            <span>Send Message</span>
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="alert-success" style={{ display: "none" }}>
                      <p>Thanks, your message is sent successfully.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lui-bgtitle">
              <span> Contact </span>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};
export default Index;
