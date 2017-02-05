import React from 'react';
import Routes from './layouts/routes.js';

// utility
import Typekit from 'react-typekit';


class Layout extends React.Component {
  render() {
    return (
      <div className="main">
        <Typekit kitId="zrz0mev" />
        { this.props.children }
      </div>
    );
  }
}
Layout.propTypes = {

};
export default Layout;
