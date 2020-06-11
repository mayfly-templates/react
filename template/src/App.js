import React from 'react';
{{#router}}
import Routers from './Routers'
{{else}}
import HelloWorld from './components/HelloWorld'
{{/router}}

const App = () => 
<React.Fragment>
  {{#router}}
  <Routers />
  {{else}}
  <HelloWorld />
  {{/router}}
</React.Fragment>

export default App;
