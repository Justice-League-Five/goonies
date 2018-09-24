import React, { Component } from 'react';
import ChecklistItem from './ChecklistItem';

class Checklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checklistItems: ['Backpack', 'Water', 'Extra batteries', 'Food',
        'Solar Charger', 'First Aid Kit', 'Extra Shoes', 'Extra Socks',
        'Extra Clothes', 'Map'],
      newCheckListItem: '',
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({
      newCheckListItem: event.target.value
    });
  }

  clickHandler(event) {

    this.setState({
      checklistItems: this.state.checklistItems.push(this.state.newCheckListItem),
      newCheckListItem: '',
    });

  }

  render() {
    const items = this.state.checklistItems.map((checklistItem, index) => <ChecklistItem message={checklistItem} key={index} />);
    return (
      <div>
        <div className="list-head" />
        <input type="text" value={this.state.newCheckListItem} placeholder="Add item..."onChange={this.changeHandler} />
        <input className="list-btn" type="button" value="Add" onClick={this.clickHandler} />
        <div className="list-items">{items}</div>
      </div>
    );
  }
}


export default Checklist;
