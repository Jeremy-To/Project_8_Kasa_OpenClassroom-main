import React from 'react';
import './styles/main.scss';
import RouteConfig from './RouteConfig.jsx';

function App() {
   document.title = 'Kasa';
   return (
      <div className="App">
         <RouteConfig />
      </div>
   );
}

export default App;
