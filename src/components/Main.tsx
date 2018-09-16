import * as React from "react";
import { IState } from "../App";
import { TextField, Input, Grid, Paper, withStyles, Theme, createStyles } from "@material-ui/core";

interface IProps {
    getGenre: ((genre: String) => void)
}

const styles = (theme: Theme) =>
    createStyles({
    // root: {
    //   flexGrow: 1,
    // },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class Main extends React.Component<IProps, IState> {
    constructor(props:any) {
        super(props);
        this.state = {
          submitted: false,
          genre: '',
        }
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        this.setState({
          submitted: true,
        })
        this.props.getGenre(this.state.genre)
    }

    handleChange = (event:any) => {
        this.setState({
          genre: event.target.value,
        });
    };

    public render() {
        return (
            <div className="centreText">
                <Grid container spacing={16}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Paper className="paper">
                        <h1>BookIt</h1>
                        <h2>Run away with a new book in your hand!</h2>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}></Grid>

                    <Grid item xs={4}></Grid>
                        <Grid item xs={4}>
                        <Paper className="paper">
                            <form onSubmit={this.handleSubmit} className="form">
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="genre"
                                        label="Genre"
                                        className="textField"
                                        value={this.state.genre}
                                        onChange={this.handleChange}
                                        margin="normal"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Input type="submit" value="SEARCH" />
                                </Grid>
                            </form>
                        </Paper>
                        </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
            </div>
        );
      }
    
}

export default withStyles(styles)(Main);