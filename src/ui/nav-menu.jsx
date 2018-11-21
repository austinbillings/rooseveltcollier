import React from 'react';
import { NavLink } from 'react-router-dom';

import Pages from 'meta/pages';

class NavMenu extends React.Component {
  constructor (props) {
    super(props);
    this.makeNavList = this.makeNavList.bind(this);
  }

  makeNavList (list, { pathname }) {
    return list
      .filter(page => !page.hidden)
      .map(({ name, url, id }) => {
        const className = 'item ' + id + '-page-link';
        return (
          <NavLink key={id} to={url} activeClassName="active" title={name} className={className}>
            {name}
          </NavLink>
        );
      });
  }

  render () {
    const { location, className } = this.props;
    const list = this.makeNavList(Pages, location);

    return (
      <nav className={'NavMenu ' + className}>{list}</nav>
    );
  }
};

export default NavMenu;
