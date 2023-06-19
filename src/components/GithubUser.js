import React from 'react'
import { FcApproval } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import "../index.css"
const GithubUsers = ({ users }) => {
    const [input, setInput] = React.useState("");
    const [value, setValue] = React.useState("lang");
    const [answer, setAnswer] = React.useState([]);
    const [isTrue, setIsTrue] = React.useState(false);

    const navigate = useNavigate();
 
function handleAns (id, login)
{
    const result = answer.filter(item=> item.id ===id)
navigate(`/RepoDetailsPage/${login}`, {
    state:result
})
}

function handleClick(login, id)
{
    const result = users.filter(item=> item.id ===id)
    console.log(result);
navigate(`/RepoDetailsPage/${login}`, {
   state:result
})
    
}
function handleSearch()
{
  if(value==="lang")
  {
     const result= users.filter(item=>item.login === input)
     setAnswer(result);
     setIsTrue(true);
  }
  else if(value==="date"){
    const result= users.filter(item=>item.node_id === input)
    setAnswer(result);
    setIsTrue(true);
  }
}

    return (
        <div>
            <h2>List of GitHub Users</h2>
            <input type="text" className='searchip' value={input} onChange = {(e)=>{
                setInput(e.target.value);
            }}/>
            <select value={value} onChange={(e)=>{
                setValue(e.target.value)
            }}>
                <option value="repo">RepoName</option>
                <option value="date">NodeId</option>
            </select>
            <button className="search" onClick={handleSearch}>Search</button>
            <div className="container-fluid mt-5">
                {
                    isTrue ? (
                        answer.map((item)=>{
                            
                            const { avatar_url, id, login, type, node_id} = item;
                            return (
                                <div className="col-10 col-md-4 mt-5" onClick = {()=>handleClick(login, id)} key={id}>
                                <div className="card p-2">
                                    <div className="d-flex align-items-center">
                                        <div className="image"> <img src={avatar_url} className="rounded" width="155" alt="img" /> </div>
                                        <div className="ml-3 w-100">
                                            {<h4 className="mb-0 mt-0 textLeft"><b>RepoName=</b>{login} <FcApproval /> </h4>}
                                            {<span className="text-left">{type}</span>}<br/>
                                            {<span className="text-left">{id}</span>}<br/>
                                            {<span className="text-left"><b>NodeId=</b>{node_id}</span>}
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
    
                                const { avatar_url, id, login, type, node_id } = curElem;
                                return (
                                    <div className="col-10 col-md-4 mt-5" onClick = {()=>handleClick(login, id)} key={id}>
                                        <div className="card p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="image"> <img src={avatar_url} className="rounded" width="155" alt="img" /> </div>
                                                <div className="ml-3 w-100">
                                                    {<h4 className="mb-0 mt-0 textLeft"><b>RepoName=</b>{login} <FcApproval /> </h4>}
                                                    {<span className="text-left">{type}</span>}<br/>
                                                    {<span className="text-left">{id}</span>}<br/>
                                                    {<span className="text-left"><b>NodeId=</b>{node_id}</span>}


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
