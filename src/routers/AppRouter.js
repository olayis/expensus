import React from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import ExpensusDashboardPage from '../components/ExpensusDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ExpensusDashboardPage} exact />                                
                <Route path='/create' component={AddExpensePage} />                                        
                <Route path='/edit/:id' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />                    
                <Route component={NotFoundPage} />                    
            </Switch>
        </div>
    </Router>
);

export default AppRouter;