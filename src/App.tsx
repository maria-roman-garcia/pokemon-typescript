import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Components
import PrincipalPage from './PrincipalPage/PrincipalPage';
import DetailedPokemon from './DetailedPokemon/DetailedPokemon';

function AppRouter() {
  return (
    <Router>
        <Route path="/" exact component={PrincipalPage} />
        <Route path="/products/:id" component={DetailedPokemon} />
    </Router>
  );
}

export default AppRouter;