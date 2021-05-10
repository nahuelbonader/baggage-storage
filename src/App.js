import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout";
import Passengers from "./containers/passengers";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/passengers/" component={Passengers} />
        <Route path="/passengers/:id" component={Passengers} />
        <Redirect to="/passengers" />
      </Switch>
    </Layout>
  );
}

export default App;
