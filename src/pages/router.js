import LoadableComponent from '../components/LoadableComponent';
// 方式一: 懒加载
const Demo = LoadableComponent(() => import('./Demo'));

// 方式二: 正常加载
// import Demo from './Demo';

export default [
  {
    path: 'demo',
    Component: Demo,
    icon: 'appstore',
    name: 'demo'
  }
];
