import React from 'react';
import ErrorBoundary from "./components/error-boundary";
import RoutesComp from "./components/routes/routes-comp";
import './App.css';

function App() {
    return (
        <ErrorBoundary>
            <div className="App">
                <RoutesComp/>
            </div>
        </ErrorBoundary>
    );
}

export default App;
