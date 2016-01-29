import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Topic from './containers/topic';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Topic} />
    </Route>
);
