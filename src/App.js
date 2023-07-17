import { useRoutes } from 'react-router';
import routes from './routes';
import SideBar from './Components/SideBar';

import './App.css';


function App() {
  let router = useRoutes(routes);

  return (
    <div className="container-fluid">
      <div className='row'>
      <div className='col-sm-3 col-md-2'><SideBar/></div>
      <div className='col-sm-9 col-md-10'>{router}</div>
      </div>
    </div>
  );
}

export default App;
