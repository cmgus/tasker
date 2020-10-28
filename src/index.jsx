import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App'
import 'bulma/css/bulma.min.css'
import { FirebaseAppProvider, SuspenseWithPerf } from 'reactfire'
import { firebaseConfig } from './config'

ReactDOM.render(
    <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <SuspenseWithPerf fallback={<p>Loading...</p>}>
                <App />
            </SuspenseWithPerf>
        </FirebaseAppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

