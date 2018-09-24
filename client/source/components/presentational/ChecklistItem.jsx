import React, { Component } from 'react';

class ChecklistItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { checked } = this.state;
    this.setState({
      checked: !checked,
    });
  }

  render() {
    const { checked } = this.state;
    const { message } = this.props;
    const text = checked ? <strike>{message}</strike> : message;
    return (
      <div>
        <input type="checkbox" onClick={this.handleClick} />
        {text}
        <hr />
      </div>
    );
  }
}


export default ChecklistItem;
