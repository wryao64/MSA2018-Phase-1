import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App'
import Result from './components/Result';
import { Header } from './components/Header';
// import SecondComponent from './components/SecondComponent';
import './css/styles.css';
import Main from './components/Main';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (

        <BrowserRouter>
            <div>
                <Header />
                <main>
                    <Route exact={true} path="/" component={App} />
                    <Route path="/Main" component={Main} />
                    <Route path="/Result" component={Result} />
                    {/* <Route path="/SecondComponent" component={SecondComponent} /> */}
                    {/* <Redirect from='*' to='/' /> */}
                </main>
            </div>
        </BrowserRouter>

    );
}