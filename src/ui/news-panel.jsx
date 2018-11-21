import React from 'react';

class NewsPanel extends React.Component {
  constructor (props) {
    super(props);
    this.renderArticleItem = this.renderArticleItem.bind(this);
  }

  renderArticleItem (article, index) {
    let className = 'NewsItem xs-12 ' + (index ? 'sm-6 stack nowrap' : 'row');
    let { title, feature } = article;
    return (
      <article key={title} className={className}>
        <box className="xs-12 sm-6 NewsItem-Feature">
          {feature}
        </box>
        <box className="xs-12 sm-6 NewsItem-Content white-plate">
          Plate
        </box>
      </article>
    );
  }

  render () {
    const { articles } = this.props;
    const articleList = !articles ? null : articles.map(this.renderArticleItem);

    return (
      <row className="NewsPanel">
        {articleList}
      </row>
    );
  }
};

export default NewsPanel;
