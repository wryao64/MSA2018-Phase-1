import * as React from "react";
import { TextField, Input } from "@material-ui/core";
import { IState } from "../App";

interface IProps {
    cb: ((genre: String) => void)
}

export default class Main extends React.Component<IProps, IState> {
    handleSubmit = (pGenre: string) => (event: any) => {
        this.setState({
          submitted: true,
        })
    }

    handleChange = (event:any) => {
        this.setState({
          genre: event.target.value,
        });
        // console.log("this.state.genre: " + this.state.genre);
    };

    public render() {
        return (
            <div className="centreText">
                {/* React components must have a wrapper node/element */}
                <h1>BookIt</h1>
                <h2>Run away with a new book in your hand!</h2>

                <form onSubmit={this.handleSubmit(this.state.genre)}>
                    <div className="search">
                        <TextField
                            required
                            id="genre"
                            label="Genre"
                            className="textField"
                            value={this.state.genre}
                            onChange={this.handleChange}
                            margin="normal"
                        />
                        <Input type="submit" value="SEARCH"/>

                        {/* <Link to="/FirstComponent">
                            {/* <Button variant="outlined" className="btn">SEARCH</Button>
                        </Link> */}
                    </div>
                </form>
            </div>
        );
      }
    
}