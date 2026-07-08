import React from 'react';
import { NavLink } from 'react-router-dom';

import Pages from 'meta/pages';

class NavMenu extends React.Component {
  constructor (props) {
    super(props);
    this.makeNavList = this.makeNavList.bind(this);
  }

  makeNavList (list) {
    return list
      .filter(page => !page.hidden)
      .map(({ name, url, id }) => {
        const base = 'item ' + id + '-page-link';
        return (
          <NavLink
            key={id}
            to={url}
            end
            title={name}
            className={({ isActive }) => base + (isActive ? ' active' : '')}
          >
            {name}
          </NavLink>
        );
      });
  }

  render () {
    const { className } = this.props;
    const list = this.makeNavList(Pages);

    return (
      <nav className={'NavMenu ' + className}>{list}</nav>
    );
  }
};

export default NavMenu;
