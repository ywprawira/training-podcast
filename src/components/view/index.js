import React from 'react';

import{ 
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom';
import Podcastlist from './Listpodcast.js';
import Detail from './Detail.js';
import Searchbar from "./Searchbar";

const View = () => {
  const match = useRouteMatch();
  return(
    <div>
      <Switch>
        <Route exact path="/podcast/:podcastid">
          <Detail />
        </Route>
        <Route exact path={`${match.url}`}>
          <Searchbar />
          <Podcastlist />
        </Route>
      </Switch>
    </div>
  )
};

export default View;