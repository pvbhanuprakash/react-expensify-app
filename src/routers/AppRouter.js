import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import DashboardComponent from "../Components/ExpenseDashboard";
import AddExpenseComponent from "../Components/AddExpense";
import EditComponent from "../Components/EditExpense";
import NotFoundComponent from "../Components/NotFoundPage";
import LoginPage from "../Components/LoginPage";
import PrivateRouter from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true} />
      <PrivateRouter path="/dashboard" component={DashboardComponent} />
      <PrivateRouter path="/create" component={AddExpenseComponent} />
      <PrivateRouter path="/edit/:id" component={EditComponent} />
      <Route component={NotFoundComponent} />
    </Switch>
  </Router>
);

export default AppRouter;
