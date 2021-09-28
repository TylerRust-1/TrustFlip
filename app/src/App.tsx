import React from 'react';
import './App.css';
import hiscores, {getSkillPage} from 'osrs-json-hiscores';

const stats = await hiscores.getStats('str rules105');
const topPage = await getSkillPage('overall');

const App: React.FunctionComponent = () => {
  return(
    <div>
      {topPage}
    </div>
  );
};
export default App;
