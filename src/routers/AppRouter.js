import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import DashboardComponent from "../Components/ExpenseDashboard";
import AddExpenseComponent from "../Components/AddExpense";
import EditComponent from "../Components/EditExpense";
import HelpComponent from "../Components/HelpPage";
import HeaderComponent from "../Components/Header";
import NotFoundComponent from "../Components/NotFoundPage";
import LoginPage from "../Components/LoginPage";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <HeaderComponent />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={DashboardComponent} />
        <Route path="/create" component={AddExpenseComponent} />
        <Route path="/edit/:id" component={EditComponent} />
        <Route path="/help" component={HelpComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
