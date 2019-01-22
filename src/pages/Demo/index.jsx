import React from 'react';
import { AutoWrapper } from '../../components/AutoWrapper';
import router from './router';

@AutoWrapper({ router })
export default class Demo extends React.PureComponent {
  render() {
    return <div>demo</div>;
  }
}
