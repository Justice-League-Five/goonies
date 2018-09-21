import React from 'react';
import Forecast from './Forecast';

class ForecastForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { forecasts } = this.props;
    return (
      <div style={{ backgroundColor: '#aaaaaa' }}>
        <Forecast forecasts={forecasts} />
      </div>
      
    );
  }
}
 
export default ForecastForm;
