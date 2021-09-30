import React, { useEffect, useState } from 'react';
import './App.css';
import './index.css';
//import hiscores, {getSkillPage, Player} from 'osrs-json-hiscores';
import { Hiscores, News, Player } from 'oldschooljs';
import { isWhiteSpaceLike } from 'typescript';
import { AccountType } from 'oldschooljs/dist/meta/types';
//import { AccountType } from 'oldschooljs/dist/meta/types';


/* OSRS JSON HISCORES API || COULDN'T GET WORKING */
//const stats = hiscores.getStats('str rules105');
//const skillPage = getSkillPage('overall');

/*
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
*/

function PlayerView ():JSX.Element{
  const [data, setData] = useState<Player>()

  useEffect( () => {
    async function test (){
      const str  = await Hiscores.fetch('str rules105', {type: AccountType.Normal, virtualLevels:true});
      setData(str);
      const recentArticles = await News.fetchRecent();
      const mostRecentArticle = recentArticles[0];
    }
    test()
  },[])
  return(
    <div style={styles.container}>
      {data === null ?
        <span>Loading</span> :
        <span>{data}</span>}
    </div>
  )
}

const Top: React.FunctionComponent = () => {
  return(
    <div style = {styles.container}>
      <h1>TrustFlip</h1>
      <h2><a href ="https://github.com/strrules105/TrustFlip">Github Repository</a></h2>
      {PlayerView}
    </div>
  )
}

const App: React.FunctionComponent = () => {
  return(
    <div>
      <Top />
    </div>
  );
};

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgb(122, 121, 120)',
    width: "60%",
    color: 'black',    
  } 
}
export default App;
