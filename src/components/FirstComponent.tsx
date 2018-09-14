import * as React from "react";

const API = 'https://openlibrary.org/subjects/';
const genre = 'love';
const ending = '.json';
const queryLimit = '?limit=';
const LIMIT = 20;

export default class FirstComponent extends React.Component<{}, {bookTitle: [], bookAuthor: [], index: number, requestFailed: boolean}> {
        constructor(props:any) {
                super(props);
                this.state = {
                        bookTitle: [],
                        bookAuthor: [],
                        index: NaN,
                        requestFailed: false,
                }
        }

        componentDidMount() {
                fetch(API + genre + ending + queryLimit + LIMIT)
                .then(response => response.json())
                .then(json => {
                        if (json.ebook_count != 0) {
                                this.setState({
                                        index: Math.floor(Math.random() * LIMIT),
                                })
                        } else {
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
                        console.log(error)
                })
        }

        public render() {
                if (this.state.requestFailed) return <p>Failed</p>
                if (this.state.bookTitle === []) return <p>Loading...</p>
                return (
                        <div className="centreText">
                                {/* React components must have a wrapper node/element */}
                                <h1>And the book is...</h1>
                                <h2>{this.state.bookTitle}</h2>
                                <h3>Author: {this.state.bookAuthor}</h3>
                        </div>
                );
        }
}