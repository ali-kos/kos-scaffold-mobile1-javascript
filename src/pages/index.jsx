import React from 'react';
import { AutoWrapper } from '../components/AutoWrapper';
import router from './router';

@AutoWrapper({ router })
export class Main extends React.PureComponent {
  render() {
    return <div>{this.props.routers}</div>;
  }
}
