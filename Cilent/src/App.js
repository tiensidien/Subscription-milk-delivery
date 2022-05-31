import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Aboutus from 'pages/Aboutus';
import ServiceAreas from 'pages/ServiceAreas';
import CustomizedInputBase from 'components/TextComponen';  
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';





function App() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/AboutUs" component={Aboutus} />
            <Route exact path="/ServiceAreas" component={ServiceAreas} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/text" component={CustomizedInputBase
            } />
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default App;
