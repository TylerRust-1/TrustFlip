import React, { useEffect, useState } from 'react';
import './App.css';
import hiscores, {getSkillPage, Player} from 'osrs-json-hiscores';


//const stats = hiscores.getStats('str rules105');
//const skillPage = getSkillPage('overall');

const Top: React.FunctionComponent = () => {
  return(
    <div>
      <h1>TrustFlip</h1>
      <h2><a href ="https://github.com/strrules105/TrustFlip">Github Repository</a></h2>
    </div>
  )
}

function PlayerView():JSX.Element{
  const [data, setData] = useState<Player>()

  useEffect( () => {
    (async () => {
      const stats  = await hiscores.getStats('str rules105');
      setData(stats);
    })
  },[])
  return(
    <div>
      {data === null ?
        <span>Loading</span> :
        <span>{data.name}</span>}
    </div>
  )
}

const Skills: React.FunctionComponent = () => {
  return(
    <React.Fragment>
      {PlayerView}
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
