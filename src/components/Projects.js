import React, { Fragment } from "react";
import data from "../ProjectsData";

const Projects = () => {
  const allProjects = data.map((projects) => (
    <div
      className="card mt-4 mb-5"
      style={{ width: "30rem" }}
      key={projects.id}
    >
      <img src={projects.image} className="card-img-top" alt="banner" />
      <div className="card-body px-4 text-white">
        <h2 className="card-title text-center">{projects.name}</h2>
        <p className="card-text description text-center pt-1">
          {projects.description}
        </p>
        <hr />
        <div className="text-center mb-5 mt-2">
          <p className="tags">
            {projects.tags.map((tag, i) => (
              <span className="px-2 mx-2" key={i}>{`{${tag}}`}</span>
            ))}
          </p>
        </div>
        <div className="text-center">
          <a href={projects.code} className="btn code me-4" target="blank">
            CODE
          </a>
          {projects.live && (
            <a href={projects.live} className="btn live ms-4" target="blank">
              LIVE
            </a>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <Fragment>
      <div className=" text-center mb-4">
        <h2 className="text-white title ">Projects</h2>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-md-around  flex-md-wrap">
        {allProjects}
      </div>
    </Fragment>
  );
};

export default Projects;
