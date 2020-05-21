import React, { useContext, useState } from "react";
import { AlertContext } from "../context/Alert/AlertContext";
import { GitHubContext } from "../context/Github/GithubContext";

const Search = () => {
  const alert=useContext(AlertContext);
  const [value,setValue]=useState('');
  const github=useContext(GitHubContext);

  const onSubmit=(event)=>{
    if(event.key!=='Enter'){
        return;
    }
    github.clearUsers();
    if(value.trim()){
      alert.hide();
      github.search(value.trim());
    }else{
      alert.show('Введите данные пользователя');
    }
  }
  return (
    <div className="form-group">
      <input
        type="text"
        value={value}
        className="form-control"
        placeholder="Введите ник пользователя..."
        onKeyPress={onSubmit}
        onChange={(event)=>setValue(event.target.value)}
      />
    </div>
  );
};

export default Search;
