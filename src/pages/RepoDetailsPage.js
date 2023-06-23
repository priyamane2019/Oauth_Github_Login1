import React from 'react'
import { useLocation } from 'react-router-dom'
import {GoRepoForked } from "react-icons/go";
import { useAuth0 } from '@auth0/auth0-react';
import "../index.css"

const RepoDetailsPage = () => {
  const {logout } = useAuth0();
  const location = useLocation();
  const result = location.state;
  console.log(result);
  return (
    <div className='detail'>
      <div className="parent">
      <button className="logout1"
                onClick={() => logout({ returnTo: window.location.origin })}>
                 Log Out
              </button>
      </div>
      <div className="container-fluid mt-5">
        {
          result.map(item => {
            return (
              <div className="col-10 col-md-4 mt-5" key={item.id}>
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image"> <img src={item.avtar_url} className="rounded" width="155" alt="img" /> </div>
                    <div className="ml-3 w-100">
                      {<h4 className="mb-0 mt-0 textLeft"><b>Id:</b>{item.id}  </h4>}
                      {<p className="mb-0 mt-0 textLeft"><b>Repo:</b>{item.repo_name}  </p>}
                      {<p className="mb-0 mt-0 textLeft"><b>Author:</b>{item.author}  </p>}
                      {<span className="text-left"><b>Node_Id:</b>{item.Node_id}</span>}
                      {<p className="mb-0 mt-0 textLeft"><b>Language:</b>{item.language}  </p>}<br/><br/>
                      <button className='fork'><GoRepoForked size={25} />  Start fork</button>
                    </div>
                  </div>
                </div>
              </div>
              

            )
          })
        }
      </div>
    </div>
    
  )

}

export default RepoDetailsPage

