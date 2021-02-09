import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardComponent from "../Components/ExpenseDashboard";
import AddExpenseComponent from "../Components/AddExpense";
import EditComponent from "../Components/EditExpense";
import HelpComponent from "../Components/HelpPage";
import HeaderComponent from "../Components/Header";
import NotFoundComponent from "../Components/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <>
      <HeaderComponent />
      <Switch>
        <Route path="/" component={DashboardComponent} exact={true} />
        <Route path="/create" component={AddExpenseComponent} />
        <Route path="/edit/:id" component={EditComponent} />
        <Route path="/help" component={HelpComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    < />
  </BrowserRouter>
);

export default AppRouter;
