import * as React from "react";
import { Button, Grid, Paper } from "@material-ui/core";

const API = 'https://openlibrary.org/subjects/';
// const genreList = ['love'];
// let genre = genreList[Math.floor(Math.random() * genreList.length)];
const ending = '.json';
const queryLimit = '?limit=';
const LIMIT = 20;

interface IProps {
  genre: string
  resetState: (() => void)
}

interface bookState {
  genre: string,
  bookTitle: [],
  bookAuthor: [],
  index: number,
  requestFailed: boolean,
}

export default class FirstComponent extends React.Component<IProps, bookState> {
  constructor(props: any) {
    super(props);
    this.state = {
      genre: '',
      bookTitle: [],
      bookAuthor: [],
      index: Math.floor(Math.random() * LIMIT),
      requestFailed: false,
    }
  }

  componentDidMount() {
    this.setState({
      genre: this.props.genre,
    })
    this.getAPIData();
  }

  getAPIData() {
    let fullQuery = API + this.props.genre + ending + queryLimit + LIMIT;
    fetch(fullQuery)
      .then(response => response.json())
      .then(json => {
        if (json.ebook_count === 0) {
          throw new Error('No results found')
        }
        this.setState({
          bookTitle: json.works[this.state.index].title,
          bookAuthor: json.works[this.state.index].authors[0].name,
        })

      }, () => {
        this.setState({
          requestFailed: true
        })
      })
      .catch((error) => {
        // console.log('wow omg an error: ', error)
        this.setState({
          requestFailed: true
        })
      })
  }

  public render() {
    if (this.state.requestFailed) {
      return (
        
        <div className="centreText">
        <Grid container spacing={16}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Paper className="paper">
              <h2>That is not a valid genre!</h2>
              <Button variant="outlined" className="btn" onClick={this.props.resetState}>Do another search</Button>
            </Paper>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        </div>
      );
    } else if (!this.state.requestFailed && this.state.bookTitle[0]) {
      return (
        <div className="centreText">
          <Grid container spacing={16}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Paper className="paper">
                <h3>And the book is... </h3>
                <h1>{this.state.bookTitle}</h1>
                <h3>Author: {this.state.bookAuthor}</h3>
                <Button variant="outlined" color="primary" className="btn" onClick={this.props.resetState}>Do another search</Button>
              </Paper>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </div>
      );
    } else {
      return (
        <div className="centreText">
          <Grid container spacing={16}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Paper className="paper">
                <h2>Loading...</h2>
              </Paper>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </div>
      );
    }
  }
}