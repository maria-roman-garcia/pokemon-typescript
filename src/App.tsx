import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
//Context
import { PaginationContext, Pagination } from './Context/PageContext';
//Components
import PrincipalPage from './PrincipalPage/PrincipalPage';
import DetailedPokemon from './DetailedPokemon/DetailedPokemon';

function AppRouter() {

  const [pagination, setPagination] = React.useState({ pageSelected: 1, pageOffset: 1118 });

  return (
    <PaginationContext.Provider value={{ pagination, setPagination }}>
      <div className="App">
        <Router>
          <Route path="/" exact component={PrincipalPage} />
          <Route path="/pokemonDetailed/:id" component={DetailedPokemon} />
        </Router>
      </div>
    </PaginationContext.Provider>
  );
}

export default AppRouter;