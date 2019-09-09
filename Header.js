import React from 'react';

class Header extends React.Component {
    state={}

    render() {
      return (

        <h1 style={this.props.style}>
          {' '}
          {this.props.titulo}
          {' '}
        </h1>
      );
    }
}

export default Header;
