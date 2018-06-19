import React from 'react';

import './CardList.scss';
import Card from './Card';

class CardList extends React.Component {
  constructor (props) {
    super(props);
    this.renderCard = this.renderCard.bind(this);
  }

  renderCard (card, index) {
    return (
      <Card key={index} {...card}/>
    );
  }

  render () {
    const { list } = this.props;

    return (
      <div className="card-list">
        {!list || !list.length ? null : list.map(this.renderCard)}
      </div>
    )
  }
};

export default CardList;
