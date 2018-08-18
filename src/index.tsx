import * as ReactDOM from 'react-dom';
import * as React from 'react';

const App = () => (
    <main>
        <h1>Hello styled-jsx</h1>
        <style jsx>{`
            h1 {color: red}
        `}</style>
    </main>
);

ReactDOM.render(
    <App/>,
    document.body
);