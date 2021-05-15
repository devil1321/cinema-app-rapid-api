import 'font-awesome/css/font-awesome.min.css' 
import './scss/themes/default/theme.scss'
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Details from './Pages/Details'
import { DataProvider } from './api/context'
import Contact from './Pages/Contact'
function App() {
  return (
    <DataProvider>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/details" component={Details}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </div>
    </DataProvider>
  );
}

export default App;
