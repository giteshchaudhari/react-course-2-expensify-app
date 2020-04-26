import React from 'react';
import createHistory from 'history/createBrowserHistory';
import {Router,Route,Switch} from 'react-router-dom';
import ExpenseDashboardPage from './../component/ExpenseDashboardPage';
import AddExpensePage from './../component/AddExpensePage';
import HelpPage  from './../component/HelpPage';
import EditExpensePage from './../component/EditExpensePage';
import NotFoundPage from './../component/NotFoundPage';
import LoginPage from './../component/LoginPage';
import {PrivateRoute} from './PrivateRoute';
import {PublicRoute} from './PublicRoute';

export const history=createHistory();
const AppRouter=()=>(
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true}/>
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;