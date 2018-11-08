import * as React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default class App extends React.Component {
  state = {
    sidebar: true,
  }

  handleToggleSidebar = () => {
    this.setState({
      sidebar: !this.state.sidebar,
    });
  }

  render() {
    const sidebarClassName = (this.state.sidebar) ? 'open' : 'closed';
    return (
      <div className={sidebarClassName}>
        <Header onToggleSidebar={this.handleToggleSidebar} />
        <Sidebar open={this.state.sidebar} />
        <div id="root-children">
          {this.props.children}
        </div>
      </div>
    );
  }
}
