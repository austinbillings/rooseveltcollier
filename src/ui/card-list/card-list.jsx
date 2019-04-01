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
    const { list, axis, max } = this.props;
    const cards = list.map((card, index) => !max || index < max ? this.renderCard(card) : null);

    return <div className={`card-list card-list-layout-${axis}`} children={cards} />
  }
};

CardList.defaultProps = {
  list: [],
  axis: 'x',
  max: null
};

export default CardList;
