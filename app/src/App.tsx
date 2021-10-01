import React, { useEffect, useState } from 'react';
import { Middle } from './components/Middle';
import { Top } from './components/Top';
import './App.css';
import './index.css';


/* OSRS JSON HISCORES API || COULDN'T GET WORKING */
//const stats = hiscores.getStats('str rules105');
//const skillPage = getSkillPage('overall');

/*
function PlayerView ():JSX.Element{
  const [data, setData] = useState<any>()

  useEffect( () => {
    async function test (){
      let str = await Hiscores.fetch('str rules105')//, {type: AccountType.Normal, virtualLevels:true});
      setData(str);
    }
    test()
  },[])
  return(
    <div style={styles.container}>
      {
        data === null ?
        <span>Loading</span> :
        <span>{data}</span>
      }
    </div>
  )
}
*/
/*
const Top: React.FunctionComponent = () => {

  const [data, setData] = useState<Items>()
  useEffect( () => {
    async function test (){
      let  = await hiscores.getStats('str rules105')//, {type: AccountType.Normal, virtualLevels:true});
      setData(str);
    }
    test()
  },[])

  return(
    <div style = {styles.container}>
      <h1>TrustFlip</h1>
      <h2><a href ="https://github.com/strrules105/TrustFlip">Github Repository</a></h2>
    </div>
  )
}
*/

const App: React.FunctionComponent = () => {
  return(
    <div>
      <Top />
      <Middle />
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
