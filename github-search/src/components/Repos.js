import React from "react";

const Repos = ({ repos }) => (
  <React.Fragment>
    {repos.map((repo, index) => (
      <div className="card mb-3" key={index}>
        <div className="card-body">
          <h5>
            <a href={repo.html_url}>{repo.name}</a>
          </h5>
        </div>
      </div>
    ))}
  </React.Fragment>
);

export default Repos;
