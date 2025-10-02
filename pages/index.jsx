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
                    I am a<strong>Game Developer</strong>
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
                    <a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/manuel-dominguez-058653384/">
                      <i aria-hidden="true" className="fab fa-linkedin" />
                    </a>
                    {/* <a target="_blank" rel="nofollow" href="#">
                      <i aria-hidden="true" className="fab fa-dribbble" />
                    </a>
                    <a target="_blank" rel="nofollow" href="#">
                      <i aria-hidden="true" className="fab fa-behance" />
                    </a> */}
                  </div>
                </div>
                <div className="bts">
                  <a
                    target="_blank"
                    href="https://www.artstation.com/manueld03251994"
                    className="btn"
                  >
                    <span>My CV</span>
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
                      <span className="num">20+</span>
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
                      alt="Ken Go"
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
                      <span>Ken Go</span>
                    </h6>
                    <div className="author">
                      <span>CEO, DECA Games</span>
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
                      alt="Hanna Liszniansky"
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
                      <span>Hanna Liszniansky</span>
                    </h6>
                    <div className="author">
                      <span>CTO, Roundtable Learning</span>
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
                      alt="Victor Aina"
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
                      <span>Victor Aina</span>
                    </h6>
                    <div className="author">
                      <span>
                        GAME PRODUCER, Tepida Games
                      </span>
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
                      <span>Creative Director, Accipiter Labs</span>
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
                  {/* <div 
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
                  </div> */}
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
                      <span> manueldominguez0325@gmail.com </span>
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
                      <span> +1 (214) 305-8552 </span>
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
