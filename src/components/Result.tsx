import * as React from "react";
// import { genreVar } from '../App'; 

const API = 'https://openlibrary.org/subjects/';
// const genreList = ['love'];
// let genre = genreList[Math.floor(Math.random() * genreList.length)];
const ending = '.json';
const queryLimit = '?limit=';
const LIMIT = 20;

interface bookState {
  genre: string,
  bookTitle: [],
  bookAuthor: [],
  index: number,
  requestFailed: boolean,
}

export default class FirstComponent extends React.Component<{ genre: string }, bookState> {
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
          <h2>That is not a valid genre!</h2>
        </div>
      );
    } else if (!this.state.requestFailed && this.state.bookTitle[0]) {
      return (
        <div className="centreText">
          <h1>And the book is... </h1>
          <h2>{this.state.bookTitle}</h2>
          <h3>Author: {this.state.bookAuthor}</h3>
        </div>
      );
    } else {
      return (
        <div className="centreText">
          <h2>Loading...</h2>
        </div>
      );
    }
  }
}