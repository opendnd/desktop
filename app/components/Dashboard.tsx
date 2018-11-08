import * as React from 'react';
import Typography from '@material-ui/core/Typography';

let styles = require('./Dashboard.scss');

export default class Dashboard extends React.Component {
  handleNavigation = (path:string) => {
    console.log(path);
  }

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <Typography variant="title" color="inherit">
            Dashboard Actions
          </Typography>
        </div>
      </div>
    );
  }
}
