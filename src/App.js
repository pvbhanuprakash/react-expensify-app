import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import DashboardComponent from "./Components/ExpenseDashboard";
import AddExpenseComponent from "./Components/AddExpense";
import EditComponent from "./Components/EditExpense";
import HelpComponent from "./Components/HelpPage";
import HeaderComponent from "./Components/Header";
import NotFoundComponent from "./Components/NotFoundPage";

const routes = () => (
  <BrowserRouter>
    <div>
      <HeaderComponent />
      <Switch>
        <Route path="/" component={DashboardComponent} exact={true} />
        <Route path="/create" component={AddExpenseComponent} />
        <Route path="/edit/:id" component={EditComponent} />
        <Route path="/help" component={HelpComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default routes;
