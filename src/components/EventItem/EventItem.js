import './EventItem.css';

import React, { Component } from 'react';

import PropTypes from 'prop-types';

class EventItem extends Component {
  render() {
    return (
      <div className='container'>
        <p>{this.props.name}</p>
        <span className='start-date'> {this.props.startDate}</span>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

EventItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired
};

EventItem.defaultProps = {
  name: '',
  description: '',
  startDate: ''
};

export default EventItem;
