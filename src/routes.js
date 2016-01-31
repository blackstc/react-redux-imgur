import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Topics from './containers/topics';
import Topic from './containers/topic';
import ImageDetail from './containers/image-detail';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Topics} />
        <Route path="topics/:id" component={Topic} />
        <Route path="images/:id" component={ImageDetail} />
    </Route>
);
