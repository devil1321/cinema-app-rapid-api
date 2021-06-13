import 'font-awesome/css/font-awesome.min.css' 
import './scss/themes/default/theme.scss'
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Details from './Pages/Details'
import { DataProvider } from './api/context'
import AddMovie from './Pages/AddMovie'
function App() {
  return (
    <DataProvider>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/details" component={Details}/>
        <Route exact path="/add-movie" component={AddMovie}/>
      </Switch>
    </div>
    </DataProvider>
  );
}

export default App;
