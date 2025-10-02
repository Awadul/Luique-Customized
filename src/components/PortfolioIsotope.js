import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

const PortfolioIsotope = ({ noViewMore }) => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
    });

    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: "*" })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  const projects = [
    { title: "Kasala", categories: ["sorting-unity", "sorting-vr"], image: "assets/images/work1.jpeg", description: "A visually stunning immersive game experience.", href: "/work-single" },
    { title: "Mada", categories: ["sorting-unity", "sorting-action-adventure"], image: "assets/images/work2.jpeg", description: "Engaging gameplay with immersive storytelling", href: "/work-single" },
    { title: "Kabal Hunt", categories: ["sorting-unreal", "sorting-multiplayer"], image: "assets/images/work3.jpeg", description: "High-intensity action with cinematic visuals.", href: "/work-single" },
    { title: "Explore VR", categories: ["sorting-unity", "sorting-vr", "sorting-ui-ux"], image: "assets/images/work4.jpeg", description: "Virtual reality game optimized for Oculus and HTC Vive.", href: "/work-single" },
    { title: "Stay Fit", categories: ["sorting-unity", "sorting-multiplayer", "sorting-ui-ux"], image: "assets/images/work5.jpeg", description: "Interactive fitness game with multiplayer support.", href: "/work-single" },
    { title: "Kana", categories: ["sorting-unreal", "sorting-vr"], image: "assets/images/work6.jpeg", description: "Immersive storytelling with realistic AI behaviors.", href: "/work-single" },
  ];

  const filters = [
    { label: "All", key: "*" },
    { label: "Unity", key: "sorting-unity" },
    { label: "Unreal Engine", key: "sorting-unreal" },
    { label: "VR", key: "sorting-vr" },
    { label: "Multiplayer", key: "sorting-multiplayer" },
    { label: "UI/UX", key: "sorting-ui-ux" },
  ];

  return (
    <Fragment>
      <div className="works-box">
        <div className="filter-links">
          {filters.map((filter) => (
            <a
              key={filter.key}
              className={`c-pointer ${activeBtn(filter.key)}`}
              onClick={handleFilterKeyChange(filter.key)}
            >
              {filter.label}
            </a>
          ))}
        </div>

        <div className="works-items works-masonry-items row">
          {projects.map((project, i) => (
            <div key={i} className={`works-col col-12 ${project.categories.join(" ")}`}>
              <div className="works-item">
                <div className="image">
                  <div className="img">
                    {/* <Link href={project.href} legacyBehavior>
                      <a>
                        <img src={project.image} alt={project.title} />
                        <span className="overlay" />
                      </a>
                    </Link> */}
                        <img src={project.image} alt={project.title} />
                        <span className="overlay" />
                  </div>
                </div>
                <div className="desc">
                  <span className="category">{project.categories.map(c => c.replace("sorting-", "")).join(", ")}</span>
                  <h5 className="name">
                    {/* <Link href={project.href} legacyBehavior>
                      <a>{project.title}</a>
                    </Link> */}
                    {project.title}
                  </h5>
                  <p>{project.description}</p>
                  {/* <Link href={project.href} legacyBehavior>
                    <a className="lnk">See project</a>
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!noViewMore && (
          <div className="load-more-link">
            <Link href="/works" legacyBehavior>
              <a className="btn">
                <span>View More</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default PortfolioIsotope;
