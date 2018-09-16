import * as React from 'react';
import './App.css';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import withRoot from './withRoot';
import Result from './components/Result';
import Main from './components/Main';

export interface IState {
  submitted:boolean
  genre: string;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing.unit * 20,
      margin: theme.spacing.unit * 20,
    },
  });

class App extends React.Component<WithStyles<typeof styles>, IState> {
  constructor(props:any) {
    super(props);
    this.state = {
      submitted: false,
      genre: '',
    }
  }

  //callback function to get genre data from Main
  cb = (childGenre: string) => {
    this.setState({
      genre: childGenre,
      submitted: true,
    })
  }

  public render() {
    if (!this.state.submitted) {
      return (
        <div className="container-fluid">
          <Main cb={this.cb} />
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <Result genre={this.state.genre} />
        </div>      
      );
    }
  }
}

export default withRoot(withStyles(styles)(App));
