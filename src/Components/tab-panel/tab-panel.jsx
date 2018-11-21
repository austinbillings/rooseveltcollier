import React from 'react';

import './tab-panel.scss';

class TabPanel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeTab: 0
    };

    this.setActiveTab = this.setActiveTab.bind(this);
  }

  setActiveTab (activeTab) {
    if (typeof activeTab !== 'number') {
      return;
    }

    this.setState({ activeTab });
  }

  render () {
    const { activeTab } = this.state;
    const { className, tabs } = this.props;

    const tabClass = index =>
      `tab ${activeTab === index ? 'tab-active' : ''}`;

    const showTab = index => event => this.setActiveTab(index);

    return !tabs || !tabs.length ? null : (
      <div className={'tab-panel ' + (className || '')}>
        <div className="tab-bar">
          {tabs.map((tab, index) => (
            <span
              key={index}
              className={tabClass(index)}
              onClick={showTab(index)}
              children={tab.name ? tab.name : `Tab ${index}`}
            />
          ))}
        </div>
        {tabs.map((tab, index) => activeTab === index
          ? <div className="tab-content" key={index} children={tab.content}/>
          : null
        )}
      </div>
    );
  }
};

export default TabPanel;
