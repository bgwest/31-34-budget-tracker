import React from 'react';
import PropTypes from 'prop-types';

// display a single card
class Card extends React.Component {
  render() {
    console.log('passed key');
    console.log(this.props.key);
    console.log('passed card:');
    console.log(this.props.card);
    return (
      <p key={this.props.key}>{ this.props.card.content }</p>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object,
  key: PropTypes.number,
};

export default Card;
