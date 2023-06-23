import React from 'react'
import { FcApproval } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import "../index.css"
const GithubUsers = ({ users }) => {
     const {logout } = useAuth0();

    const [input, setInput] = React.useState("");
    const [value, setValue] = React.useState("lang");
    const [answer, setAnswer] = React.useState([]);
    const [isTrue, setIsTrue] = React.useState(false);

    const navigate = useNavigate();
 
function handleAns (id, repo_name)
{
    const result = answer.filter(item=> item.id ===id)
navigate(`/RepoDetailsPage/${repo_name}`, {
    state:result
})
}

function handleClick(repo_name, id)
{
    const result = users.filter(item=> item.id ===id)
    console.log(result);
navigate(`/RepoDetailsPage/${repo_name}`, {
   state:result
})
    
}
function handleSearch()
{
  if(value==="repo")
  {
     const result= users.filter(item=>item.repo_name === input)
     setAnswer(result);
     setIsTrue(true);
  }
  else if(value==="date"){
    const result= users.filter(item=>item.date === input)
    setAnswer(result);
    setIsTrue(true);
  }
  else if(value==="lang"){
    const result= users.filter(item=>item.language === input)
    setAnswer(result);
    setIsTrue(true);
  }
}


    return (
        <div className='parent'>
            <h2>List of GitHub Users</h2>
            <input type="text" className='searchip' value={input} onChange = {(e)=>{
                setInput(e.target.value);
            }}/>
            <select value={value} onChange={(e)=>{
                setValue(e.target.value)
            }}>
                <option value="repo">RepoName</option>
                <option value="date">Date</option>
                <option value="lang">Language</option>
            </select>
            <button className="search" onClick={handleSearch}>Search</button>
            <button className="logout"
                onClick={() => logout({ returnTo: window.location.origin })}>
                 Log Out
              </button>
            <div className="container-fluid mt-5">
                {
                    isTrue ? (
                        answer.map((item)=>{
                            
                            const { avtar_url, id, repo_name, date, language} = item;
                            return (
                                <div className="col-10 col-md-4 mt-5" onClick = {()=>handleClick(repo_name, id)} key={id}>
                                <div className="card p-2">
                                    <div className="d-flex align-items-center">
                                        <div className="image"> <img src={avtar_url} className="rounded" width="155" alt="img" /> </div>
                                        <div className="ml-3 w-100">
                                        {<span className="text-left"><b>Id:</b> {id}</span>}<br/>
                                        {<h4 className="mb-0 mt-0 textLeft"><b>Repo: </b>{repo_name} <FcApproval /> </h4>}
                                                    {<span className="text-left"><b>Date:</b> {date}</span>}<br/>
                                                    {<span className="text-left"><b>Language: </b>{language}</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                        
                    ):(
                        <div className="row text-center">
                  
                        {
    
                            users.map((curElem) => {
    
                                const {avtar_url, id, repo_name, date, language  } = curElem;
                                return (
                                    <div className="col-10 col-md-4 mt-5" onClick = {()=>handleClick(repo_name, id)} key={id}>
                                        <div className="card p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="image"> <img src={avtar_url} className="rounded" width="155" alt="img" /> </div>
                                                <div className="ml-3 w-100">
                                                {<span className="text-left"><b>Id:</b> {id}</span>}<br/>
                                                    {<h4 className="mb-0 mt-0 textLeft"><b>Repo: </b>{repo_name} <FcApproval /> </h4>}
                                                    {<span className="text-left"><b>Date:</b> {date}</span>}<br/>
                                                    {<span className="text-left"><b>Language: </b>{language}</span>}


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
    
                        }
    
                    </div> 
                    )
                }
            </div>
        </div>
    )
}

export default GithubUsers
