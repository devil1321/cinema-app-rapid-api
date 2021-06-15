import 'font-awesome/css/font-awesome.min.css' 
import './scss/themes/default/theme.scss'
import React,{useContext, useEffect} from 'react' 
import { Switch, Route, Redirect } from 'react-router-dom'
import {DataContext} from './api/context'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'
import Details from './Pages/Details'
import AddMovie from './Pages/AddMovie'
import Account from './Pages/Account'

const PrivateRoute = ({Component,...rest}) => {
  const {isAuthenticated,setIsAuthenticated} = useContext(DataContext)

  useEffect(()=>{

  },[isAuthenticated])

  return (
    <Route {...rest} render={()=>{
        return isAuthenticated === true 
          ? <Component />
          : <Redirect to = "/"/>
    }}/>
  )
}


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn}/>
        <PrivateRoute exact path="/sign-up" Component={SignUp}/>
        <PrivateRoute exact path="/home" Component={Home}/>
        <PrivateRoute exact path="/details" Component={Details}/>
        <PrivateRoute exact path="/add-movie" Component={AddMovie}/>
        <PrivateRoute exact path="/profile" Component={Account}/>
      </Switch>
    </div>
  );
}

export default App;
