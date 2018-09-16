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
  getGenre = (childGenre: string) => {
    this.setState({
      genre: childGenre,
      submitted: true,
    })
  }

  //callback function to reset state
  resetState = () => {
    this.setState({
      submitted: false,
      genre: '',
    })
  }

  public render() {
    if (!this.state.submitted) {
      return (
        <div className="container-fluid">
          <Main getGenre={this.getGenre} />
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <Result genre={this.state.genre} resetState={this.resetState} />
        </div>      
      );
    }
  }
}

export default withRoot(withStyles(styles)(App));
