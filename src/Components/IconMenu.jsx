import React from 'react';

import Icon from 'components/Icon';

class IconMenu extends React.Component {
  constructor (props) {
    super(props);
  }

  makeLinkList (list) {
    return list.map(({ id, url, icon, name }) => (
      <a
        key={id}
        href={url}
        title={name}
        className="item icon-menu-item"
        target="_blank">
        <Icon fa={icon} />
      </a>
    ));
  }

  render () {
    const { list, className, style } = this.props;
    const linkList = this.makeLinkList(list);

    return <div className={'icon-menu' + (className ? ' ' + className : '')} children={linkList} style={style} />
  }
};

export default IconMenu;
