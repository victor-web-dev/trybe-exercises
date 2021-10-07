import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends Component {

  render() {
    const { id, name, type, weight, measureUnit, image } = this.props;
    return (
      <div key={id} className="pokemon-info">
        <div>
          <p className="info">{name}</p>
          <p className="info">{type}</p>
          <p className="info">{weight} {measureUnit}</p>
        </div>
        <img src={image} alt={name} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  measureUnit: PropTypes.string,
  image: PropTypes.string.isRequired,
}

Pokemon.defaultProps = {
  measureUnit: 'kg',
}