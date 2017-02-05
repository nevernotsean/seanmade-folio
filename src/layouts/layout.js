import React from 'react';
import Router from '../layouts/routes.js';

// utility
import Typekit from 'react-typekit';


class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <Typekit kitId="zrz0mev" />
        <Router/>
      </div>
    );
  }
}
Layout.propTypes = {

};
export default Layout;
