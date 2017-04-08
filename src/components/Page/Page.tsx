import React, { PropTypes } from 'react';
import { pure } from 'recompose';

export const Page = ({ location, children }) =>
  <section className="Page">
    <Header location={location} />
    {children}
  </section>;

Page.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default pure(Page);
