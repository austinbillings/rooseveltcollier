import React from 'react';

import './card-list.scss';
import Card from './card';

class CardList extends React.Component {
  constructor (props) {
    super(props);
    this.renderCard = this.renderCard.bind(this);
  }

  renderCard (card, index) {
    const { axis } = this.props;

    return <Card key={index} axis={axis} {...card}/>
  }

  render () {
    const { list } = this.props;
    const cards = list.map(this.renderCard);

    return <div className="card-list" children={cards} />
  }
};

CardList.defaultProps = {
  list: [],
  axis: 'x'
};

export default CardList;
