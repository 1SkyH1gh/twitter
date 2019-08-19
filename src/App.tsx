import React from 'react';

import {Header} from "./Components/Header/Header";
import {News} from "./Components/NewsBlock/News";


const App: React.FC = () => {
  return (
   <div>
           <Header/>
           <News/>
   </div>
  );
}

export default App;
