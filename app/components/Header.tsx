import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { dashboardRoutes } from './Sidebar';

export interface IProps {
  onToggleSidebar: () => void,
}

export default class Header extends React.Component<IProps> {
  render() {
    let title = '';
    dashboardRoutes.map((route, index) => {
      if (window.location.hash.replace('#/', '/') === route.path) title = route.sidebarName;
    });

    return (
      <div>
        <AppBar color="primary" position="static" id="header">
          <Toolbar>
            <IconButton aria-label="Menu" onClick={this.props.onToggleSidebar.bind(this)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="default">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
