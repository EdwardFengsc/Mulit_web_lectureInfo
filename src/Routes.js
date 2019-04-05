import React,{Component} from 'react';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import Home from "./Pages/Home"
import Upload from "./Pages/Upload";
import Update from './Pages/Update';
import NotFound from './Pages/Notfound';
import Delete from "./Pages/Delete"
import App from "./App"
const history = browserHistory;
class Routes extends Component{
    render(){
        return(
            <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            {/* TODO: how to configure home page? */}
            <Route path='home' component={Home}/>
            <Route path="upload" component={Upload}/>
            <Route path='update' component={Update}/>
            <Route path='delete' component={Delete}/>
            <Route path='*' component={NotFound}/>
        </Route>
    </Router>
        )
    }
}
export default Routes