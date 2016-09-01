import React, { PropTypes } from 'react';

import '../styles/global.less';

export default class Root extends React.Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render = () => this.props.children
}
