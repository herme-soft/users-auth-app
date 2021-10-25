import Home from "./Pages/Home/Home";
// import DiaryMembers from './Pages/DiaryMembers/DiaryMembers'
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateHome from './Pages/PrivateHome/PrivateHome'
import PrivateRoute from './Components/PrivateRoute'
// import'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/espacemembres" component={DiaryMembers} /> */}
          <PrivateRoute exact path="/loggedHome" component={PrivateHome} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
