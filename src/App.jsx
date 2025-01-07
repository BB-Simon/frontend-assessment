import React from "react";
import { BrowserRouter } from "react-router";

import "./app.css";
import { routes } from "./routing/routes";
import RoutesComponent from "./routing/RoutesComponent.jsx";

const App = () => {
  // TODO:
  // 1. set up routes
  // 2. Implement layouts
  // 3. imaplement dashboard main page
  // 4. implement edit page
  // 5. implement mock API
  // 6. implement unit tests
  return (
    <BrowserRouter>
      <RoutesComponent routes={routes()} />
    </BrowserRouter>
  );
};

export default App;
