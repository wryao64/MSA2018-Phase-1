import * as React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';

export default class App extends React.Component<{}> {
  public render() {
    return (
      <div className="container-fluid">
        <div className="centreText">
          {/* React components must have a wrapper node/element */}
          <h1>BookIt</h1>
          <h2>Run away with a new book in your hand!</h2>
          <div className="search">
            <Input
              placeholder="Genre"
              // className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
            <p></p>
            <Link to="/FirstComponent">
              <Button>CLICK ME</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
