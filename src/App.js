import 'font-awesome/css/font-awesome.min.css' 
import './scss/themes/default/theme.scss'
import {Switch,Route} from 'react-router-dom'
import { DataProvider } from './api/context'
import Home from './Pages/Home'
import Details from './Pages/Details'
import AddMovie from './Pages/AddMovie'
import Account from './Pages/Account'
function App() {
  return (
    <DataProvider>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/details" component={Details}/>
        <Route exact path="/add-movie" component={AddMovie}/>
        <Route exact path="/profile" component={Account}/>
      </Switch>
    </div>
    </DataProvider>
  );
}

export default App;
