import * as React from "react";

const API = 'https://openlibrary.org/subjects/';
const ending = '.json';

export default class FirstComponent extends React.Component<{}, {bookData: [], requestFailed: boolean}> {
        constructor(props:any) {
                super(props);
                this.state = {
                        bookData: [],
                        requestFailed: false,
                }
        }

        componentDidMount() {
                fetch(API + "love" + ending)
                .then(response => response.json())
                .then(json => {
                        this.setState({
                                bookData: json.works[0].title
                        })
                }, () => {
                        this.setState({
                                requestFailed: true
                        })
                })
        }

        public render() {
                if (this.state.requestFailed) return <p>Failed</p>
                if (this.state.bookData === []) return <p>Loading...</p>
                return (
                        <div className="centreText">
                                {/* React components must have a wrapper node/element */}
                                {/* <h1>And the book is...</h1> */}
                                <p>{this.state.bookData}</p>
                        </div>
                );
        }
}