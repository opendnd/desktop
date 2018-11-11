import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';

const electron = require('electron');
const settings = require('electron-settings');
const remote = electron.remote;

let styles = require('./Dashboard.scss');

export interface IState {
  dataFolder: string
}

export default class Dashboard extends React.Component {
  state:IState = {
    dataFolder: settings.get('dataFolder'),
  }

  handleFolderClick = () => {
    const dataFolder = remote.dialog.showOpenDialog({
      properties: ['openDirectory'],
    });

    // save the selected folder if we got something back
    if (dataFolder) {
      settings.set('dataFolder', dataFolder)
      this.setState({
        dataFolder,
      })
    }
  }

  render() {
    const { dataFolder } = this.state;

    return (
      <div>
        <div className={styles.container} data-tid="container" id="dashboard">
          <Typography variant="title" color="inherit">
            Data Folder:
          </Typography>
          <Paper className="Paper">
            <InputLabel>
              This determines where your files are stored on your computer
            </InputLabel>
            <Input
              color="white"
              type="text"
              readOnly={true}
              fullWidth={true}
              value={dataFolder} 
            />
            <Button 
              color="primary"
              variant="raised"
              onClick={this.handleFolderClick}
            >
              Select Directory
            </Button>
          </Paper>
        </div>
      </div>
    );
  }
}
