import React from "react"
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './app-card.scss'

const colorSelector = (answer) => {
  switch (answer) {
    case 'Yes':
      return 'yes';
    case 'No':
      return 'no';
    case '?':
      return 'maybe';
    case '-':
      return 'warn';
    default:
      return 'maybe';
  }
}

const AppCard = ({ app }) => {

  let cardColorClass = colorSelector(app.Is_E2EE);

  return (
    <ExpansionPanel className={"app-card " + cardColorClass} >
      <ExpansionPanelSummary
        className="app-card-summary"
        expandIcon={<ExpandMoreIcon />}
      >
        <h2 className="name" >{app.Name}</h2>
        <p className={"answer"} >{app.Is_E2EE}</p>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className="links" >
          <h3><a href={app.Official_Site} >{app.Name}</a></h3>
          <a href={app.Wikipedia_Page}>(Wikipedia)</a>
        </div>
        <div className="details" >
          {app.Is_E2EE_by_default.length > 0 &&          
          <div className="detail" >
            <h4>E2EE By Default</h4>
            <p className={colorSelector(app.Is_E2EE_by_default)} >{app.Is_E2EE_by_default}</p>
          </div>
          }
          <div className="detail" >
            <h4>Client Open Source</h4>
            <p className={colorSelector(app.Is_Official_Client_OSS)} >{app.Is_Official_Client_OSS}</p>
          </div>
          <div className="detail" >
            <h4>Server Open Source</h4>
            <p className={colorSelector(app.Is_Server_OSS)} >{app.Is_Server_OSS}</p>
          </div>
        </div>
        {app.Is_E2EE_Reference.length > 0 ?
          <div>
            <a href={app.Is_E2EE_Reference} >Source</a>
          </div> :
          <div>
            <a href="https://github.com/romainbou/isE2EE/blob/master/src/data/app-list.csv" >Missing source, please contribute</a>
          </div>
      }
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default AppCard
