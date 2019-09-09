import React from 'react';

class Button extends React.Component {
    state={}

    render() {
      return (

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => { window.open(this.props.link, '_blank'); }}
        >
          {this.props.texto}

        </button>

      );
    }
}

export default Button;
