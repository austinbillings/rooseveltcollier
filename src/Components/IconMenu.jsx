import React from 'react';

import Icon from 'Components/Icon';

class IconMenu extends React.Component {
  constructor (props) {
    super(props);
  }

  makeLinkList (list) {
    return list.map(({ id, url, icon, name }) => (
      <a key={id} href={url} title={name} target="_blank">
        <Icon fa={icon} />
      </a>
    ));
  }

  render () {
    const { list, className } = this.props;
    const linkList = this.makeLinkList(list);

    return (
      <div className={'IconMenu' + (className ? ' ' + className : '')}>
        {linkList}
      </div>
    );
  }
};

export default IconMenu;
