import React from 'react'
import { useLocation } from 'react-router-dom'
import "../index.css"

const RepoDetailsPage = () => {
  const location = useLocation();
  const result = location.state;
  console.log(result);
  return (
    <div className='detail'>
      <div className="container-fluid mt-5">
        {
          result.map(item => {
            return (
              <div className="col-10 col-md-4 mt-5" key={item.id}>
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image"> <img src={item.avatar_url} className="rounded" width="155" alt="img" /> </div>
                    <div className="ml-3 w-100">
                      {<h4 className="mb-0 mt-0 textLeft">{item.login}  </h4>}
                      {<h4 className="mb-0 mt-0 textLeft">{item.id}  </h4>}
                      {<span className="text-left">{item.type}</span>}
                      {<h4 className="mb-0 mt-0 textLeft">{item.node_id}  </h4>}
                    </div>
                  </div>
                </div>
                <h4>All Details</h4>
                <div className="Allurl">
                 <span><b>Repos_Url:</b> {item.repos_url}</span> <br />  
                 <span><b>Events_Url:</b> {item.events_url}</span> <br />  
                 <span><b>Followers_Url:</b> {item.followers_url}</span> <br />
                 <span><b>Gists_Url:</b> {item.gists_url}</span> <br />
                 <span><b>Organization_Url:</b> {item.organizations_url}</span> <br />
                 <span><b>Subscription_Url:</b> {item.subscriptions_url}</span> <br />  
                
                 <span><b>HTML_Url:</b> {item.html_url}</span> <br />



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

