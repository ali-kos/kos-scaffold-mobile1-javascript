import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from '@/pages';

// 路由配置
class RouteMap extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Main} />
          <Route render={() => <span>404</span>} />
        </Switch>
      </Router>
    );
  }
}

export default RouteMap;
