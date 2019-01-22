import 'babel-polyfill';
import KOS from 'kos-core';
import createLogger from 'redux-logger';
import Router from './router';

KOS.use(createLogger);

KOS.start(Router, '#app');
