import React, { useReducer } from "react";
import { GitHubContext } from "./GithubContext";
import { gitHubReducer } from "./GitHubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SET_LOADING,
} from "../types";
import axios from "axios";

const CLIENT_ID = "4317963456a8c7b100e6";
const CLIENT_SECRET = "33e7109d812e1a075d82d203a08ffbdc930feac4";

const withCreds = (url) => {
  return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
};

export const GitHubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: [],
  };
  const [state, dispatch] = useReducer(gitHubReducer, initialState);
  const search = async (value) => {
    setLoading();
    const response = await axios.get(
      withCreds(`https://api.github.com/search/users?q=${value}&`)
    );
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };
  const getUser = async (name) => {
    setLoading();
    const response = await axios.get(
      withCreds(`https://api.github.com/users/${name}?`)
    );
    dispatch({ type: GET_USER, payload: response.data });
  };
  const getRepos = async (name) => {
    setLoading();
    const response = await axios.get(
      withCreds(`https://api.github.com/users/${name}/repos?per_page=5&`)
    );
    dispatch({ type: GET_REPOS, payload: response.data });
  };
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  const setLoading = () => dispatch({ type: SET_LOADING });
  const { user, users, repos, loading } = state;
  return (
    <GitHubContext.Provider
      value={{
        setLoading,
        search,
        getUser,
        getRepos,
        clearUsers,
        user,
        users,
        repos,
        loading,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};
