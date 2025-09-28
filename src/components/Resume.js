import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Bachelor of Science, Computer Engineering",
    academy: "Urbana University, OH",
    dec: "Comprehensive study in computer engineering fundamentals, software development, and system design principles.",
    startYear: "2011",
    endYear: "2014",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Lead Game Developer",
    company: "Tepida | Birmingham, Alabama",
    dec: "Successfully spearheaded the development of immersive 3D games using Unreal Engine and Unity. Led creation of high-fidelity VR games, managed multiplayer functionality implementation, and provided technical leadership to junior developers. Developed shaders, optimized performance, and conducted regular playtesting sessions.",
    startYear: "Apr 2020",
    endYear: false,
  },
  {
    id: 2,
    title: "Senior Game Developer",
    company: "Roundtable Learning | Los Angeles, California",
    dec: "Leveraged expertise in Unreal Engine and C++ to develop cutting-edge games and simulations. Developed robust game mechanics and AI behaviors, managed collaborations with artists for 3D asset creation, and implemented performance optimization techniques achieving significant improvements in frame rates.",
    startYear: "Aug 2017",
    endYear: "Mar 2020",
  },
  {
    id: 3,
    title: "Unity Developer",
    company: "DECA Games | Austin, TX",
    dec: "Designed and developed engaging web-based games using Unity and C#. Developed and consumed RESTful APIs for game data management, participated in Agile development methodologies, and contributed to automated testing processes for enhanced game stability.",
    startYear: "Oct 2015",
    endYear: "Jul 2017",
  },
  {
    id: 4,
    title: "Game Developer",
    company: "Accipiter Labs | Island Park, New York",
    dec: "Collaborated with team to develop custom gaming software and applications. Provided remote technical support for game-related issues, created documentation and wireframes for in-house applications, and developed internal contribution portal for tracking team contributions.",
    startYear: "Sep 2014",
    endYear: "Aug 2015",
  },
];

const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-bottom" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Story</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            {/* Education */}
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Education </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${
                      educationToggle === education.id ? "opened" : ""
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        educationToggle == education.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {education.startYear} - {education.endYear}{" "}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experience </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${
                      experience.id == experienceToggle ? "opened" : ""
                    }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        experienceToggle == experience.id ? " active" : ""
                      }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;