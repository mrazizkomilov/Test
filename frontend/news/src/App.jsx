import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./companent/pages/Footer";
// import Footer from "./companent/pages/pages/Footer";
// import NotFound from "./companent/pages/NotFound";
// import PostDetail from "./companent/pages/PostDetail";
// import Posts from "./companent/pages/Posts";
// import Registratsiya from "./companent/pages/Registrations";
import Navbar from "./companent/pages/Navbar";
import NotFound from "./companent/pages/NotFound";
import PostDetail from "./companent/pages/PostDetail";
import Posts from "./companent/pages/Posts";
import Registratsiya from "./companent/pages/Registrations";


export default function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/news/:id" component={PostDetail} />
                    <Route path='/register' component={Registratsiya} />
                    <Route path="/" component={Posts} exact />
                    <Route path='' component={NotFound} />
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}
