import React, { Component } from 'react';

class MethodAndRouteTabs extends Component {

  initClassName(element, index) {
    if (this.props.openTabs[index].length === 0) return undefined;
    else return this.props.openTabs[index][element];
  }

  render() {
    //render tabs into the tab div
    let tabs = this.props.openTabs.map((element, index) => {
      return <div key={index} className={"flex-tab " + this.initClassName(Object.keys(element)[0], index)}>
        <img className="tabLogo" src="./../public/images/whiteTabLogo@2x.png" />
        <button id={index} className="tabs" onClick={() => { this.props.displayReportFromTabs(Object.keys(element)[0]); this.props.highlightTab(Object.keys(element)[0], index) }}>{Object.keys(element)[0]}</button>
        <span className={"tabs hover cancel"} onClick={() => this.props.closeTab(index)}>x</span>
      </div>
    });

    return (
      <div id="tabsMenu">
        {tabs}
      </div>
    )
  }
}

export default MethodAndRouteTabs;