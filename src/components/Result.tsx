import * as React from "react";
// import { genreVar } from '../App'; 

const API = 'https://openlibrary.org/subjects/';
// const genreList = ['love'];
// let genre = genreList[Math.floor(Math.random() * genreList.length)];
const ending = '.json';
const queryLimit = '?limit=';
const LIMIT = 20;

export default class FirstComponent extends React.Component<{genre: string}, {genre:string, bookTitle: [], bookAuthor: [], index: number, requestFailed: boolean}> {        
        constructor(props:any) {
                super(props);
                // if (genre != '') {
                //         genre = this.props.genre;
                //         console.log(genre);
                // }
                this.state = {
                        // genreInfo: {
                        //         genre: gI.genre,
                        // },
                        genre: '',
                        bookTitle: [],
                        bookAuthor: [],
                        index: Math.floor(Math.random() * LIMIT),
                        requestFailed: false,
                }
        }

        componentDidMount() {
                // this.setState({
                //         genre: genreVar,
                // })
                this.getAPIData;
                // this.setState({genre: genreVar})
        }

        getAPIData() {
                fetch(API + this.props.genre + ending + queryLimit + LIMIT)
                .then(response => response.json())
                .then(json => {
                        if (json.ebook_count === 0) {
                                throw new Error('No results found')
                        }
                        this.setState({
                                bookTitle: json.works[this.state.index].title,
                                bookAuthor: json.works[0].authors[0].name,
                                // bookAuthor: json.works[this.state.index].authors[0].name,
                        })
                        
                }, () => {
                        this.setState({
                                requestFailed: true
                        })
                })
                .catch((error) => {
                        console.log(error)
                })
        }


        public render() {
                console.log("p: " + this.props.genre);
                console.log("s: " + this.state.genre);
                if (this.state.requestFailed) return <p>Failed</p>
                if (this.state.bookTitle === []) return <p>Loading...</p>
                return (
                        <div className="centreText">
                                {/* React components must have a wrapper node/element */}
                                <h1>And the book is... </h1>
                                <h1>{this.state.genre}</h1>
                                <h2>{this.state.bookTitle}</h2>
                                <h3>Author: {this.state.bookAuthor}</h3>
                        </div>
                );
        }
}