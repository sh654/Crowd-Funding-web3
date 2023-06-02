import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter as Router} from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import { StateContexProvider } from "./context";
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider activeChain={ChainId.Goerli}>
        <Router>
            <StateContexProvider>
                <App />
            </StateContexProvider>
        </Router>
    </ThirdwebProvider>
)