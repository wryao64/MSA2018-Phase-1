import * as React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import withRoot from './withRoot';
// import { ButtonToolbar } from 'react-bootstrap';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing.unit * 20,
    },
  });

const API = 'https://openlibrary.org/subjects/';
const ending = '.json';

class App extends React.Component<WithStyles<typeof styles>> {
  constructor(props:any) {
    super(props);
  }

  state = {
    genre: '',
    hits: [],
  }

  getBookData(genre: String) {
    fetch(API + genre + ending)
    .then(response => response.json())
    .then(data => this.setState({ hits: data.hits }));
  }

  handleChange = (genre:any) => (event:any) => {
    this.setState({
      [genre]: event.target.value,
    });
  };

  public render() {
    return (
      <div className="container-fluid">
        <div className="centreText">
          {/* React components must have a wrapper node/element */}
          <h1>BookIt</h1>
          <h2>Run away with a new book in your hand!</h2>

          <div className="search">
            <TextField
              id="genre"
              label="Genre"
              className="textField"
              value={this.state.genre}
              onChange={this.handleChange('genre')}
              margin="normal"
            />

            <Link to="/FirstComponent">
              <Button variant="outlined" className="btn" onClick={() => this.getBookData(this.state.genre)}>SEARCH</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
