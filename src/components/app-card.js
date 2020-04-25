import React from "react"

import './app-card.scss'

const AppCard = ({ app }) => {
  
  let colorClass = 'maybe';
  switch (app.IsE2EE) {
    case 'Yes':
      colorClass = 'yes';
      break;
      case 'No':
      colorClass = 'no';
      break;
      case '?':
      colorClass = 'maybe';
      break;
    case '-':
      colorClass = 'warn';
      break;
      
    default:
      colorClass = 'maybe';
      break;
    }

  return (
    <div className={"app-card " + colorClass} >
      <h2 className="name" >{app.Name}</h2>
      {/* <h3 className="org" >{app.Organization}</h3> */}
      <p className={"answer"} >{app.IsE2EE}</p>
    </div>
  )
}

export default AppCard
