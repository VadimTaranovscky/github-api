import React, { Fragment, useContext } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import { GitHubContext } from "../context/Github/GithubContext";

const Home = () => {
  const { loading, users } = useContext(GitHubContext);
  return (
    <Fragment>
      <Search />
      <div className="row">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          users.map((item) => {
            return (
              <div key={item.id} className="col-sm-4 mb-4">
                <Card user={item} />
              </div>
            );
          })
        )}
      </div>
    </Fragment>
  );
};

export default Home;
