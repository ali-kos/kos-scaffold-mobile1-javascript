import React from 'react';
import KOS from 'kos-core';
import { Switch, Route, withRouter } from 'react-router-dom';

import { siderMenus } from '../../common/utils/Menus';

const routeMenus = JSON.parse(JSON.stringify(siderMenus));

const sortList = (a, b) => {
  const pathA = a.path;
  const pathB = b.path;
  // if (pathA.indexOf(pathB) === 0) {
  //   return -1;
  // } if (pathB.indexOf(pathA) === 0) {
  //   return 1;
  // }
  // return -1;
  return pathB.indexOf(pathA) === 0;
};

const RouterWrapper = ({ router = {}, history = {} }) => {
  if (!(router instanceof Array)) {
    throw new Error('router config is expected a Array!');
  }
  if (router.length <= 0) {
    return '';
  }
  const sortRouter = router.sort(sortList);
  return (
    <Switch>
      {sortRouter.map(_ => {
        const { Component, path } = _;
        const currentRoute = routeMenus.find(item => item.path === path);
        const childPath = currentRoute.route.toLowerCase();
        return (
          <Route key={childPath} path={childPath} render={() => <Component history={history} namespacePath={path} />} />
        );
      })}
    </Switch>
  );
};

const AutoWrapper = ({ config = {}, router = [] }) => Component => {
  const KosWrapper = KOS.Wrapper({
    namespace: Symbol('namespace'),
    ...config
  })(Component);
  const component = props => {
    const { namespacePath = '', history } = props;
    const routerWrapper = <RouterWrapper history={history} router={router} />;
    // 判断是否使用KOS
    const idx = namespacePath.indexOf(':');
    const viewNamespace = idx >= 0 ? namespacePath.substr(0, idx - 1) : namespacePath;

    if (config.model) {
      const namespace = config.model.namespace || config.namespace || viewNamespace;
      return (
        <div>
          {/* {routerWrapper} */}
          <KosWrapper namespace={namespace} history={history} {...props} routers={routerWrapper} />
        </div>
      );
    }
    return (
      <div>
        {/* {routerWrapper} */}
        <Component {...props} history={history} routers={routerWrapper} />
      </div>
    );
  };
  return withRouter(component);
};

export { AutoWrapper };
