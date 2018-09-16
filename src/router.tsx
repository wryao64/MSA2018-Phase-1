import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App'
import Result from './components/Result';
import { Header } from './components/Header';
import Main from './components/Main';
import './css/styles.css';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (

        <BrowserRouter>
            <div>
                <Header />
                <main>
                    <Route exact={true} path="/" component={App} />
                    <Route path="/Main" component={Main} />
                    <Route path="/Result" component={Result} />
                    {/* <Redirect from='*' to='/' /> */}
                </main>
            </div>
        </BrowserRouter>

    );
}