import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Header} from "./Components/Header";
import {Footer} from "./Components/Footer";
import {Home} from "./Pages/Home";
import {Contact} from "./Pages/Contact";
import {About} from "./Pages/About";
import {NotFound} from "./Pages/NotFound";
import {Category} from "./Pages/Category";
import {Recipe} from "./Pages/Recipe";

function App() {
    return (
        <>
            <BrowserRouter basename={"/food"}>
                <Header/>
                <main className="container content">
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route path={"/about"} component={About}/>
                        <Route path={"/contact"} component={Contact}/>
                        <Route path={"/category/:name"} component={Category}/>
                        <Route path={"/meal/:id"} component={Recipe}/>
                        <Route component={NotFound}/>
                    </Switch>
                </main>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
