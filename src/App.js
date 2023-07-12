import { useRoutes } from 'react-router';
import routes from './routes';
import SideBar from './Components/SideBar';

import './App.css';


function App() {
  let router = useRoutes(routes);

  return (
    <div className="containerApp">
      <SideBar/>
      {router}
    </div>
  );
}

export default App;
