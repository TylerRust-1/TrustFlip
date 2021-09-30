import React from 'react';
import './App.css';
import hiscores, {getSkillPage} from 'osrs-json-hiscores';


const stats = hiscores.getStats('str rules105');
const skillPage = getSkillPage('overall');

//const topPage = await getSkillPage('overall');

const Top: React.FunctionComponent = () => {
  return(
    <div>
      <h1>TrustFlip</h1>
      <h2><a href ="https://github.com/strrules105/TrustFlip">Github Repository</a></h2>
      <div>
        getStats;
      </div>
    </div>
  )
}

const Skills: React.FunctionComponent = () => {
  return(
    <React.Fragment>
      {stats}
    </React.Fragment>
  )
}

const App: React.FunctionComponent = () => {
  return(
    <div>
      <Top />
      <Skills />
    </div>
  );
};
export default App;
