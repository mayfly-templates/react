import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
{{#codeSplit}}
import loadable from "@loadable/component";
import Loading from "./components/Loading";
{{else}}
import HelloWorld from './components/HelloWorld'
{{/codeSplit}}
{{#codeSplit}}
const LoadableHelloWorld = loadable(() => import(/* webpackChunkName: "HelloWorld" */"./components/HelloWorld/index"), {
  fallback: <Loading />
});
{{/codeSplit}}
const Routers = () => 
<React.Fragment>
  <Router>
    <React.Fragment>
      <Switch>
        <Route path="/">
          {{#codeSplit}} 
          <LoadableHelloWorld />
          {{else}}
          <HelloWorld />
          {{/codeSplit}}
        </Route>
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  </Router>
</React.Fragment>

export default Routers