import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';
import App from '@/containers/App';

// import 'bootstrap';
import 'reset-css/reset.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.scss';
import 'react-select/dist/react-select.css';
import 'bulma/css/bulma.min.css';

WebFont.load({
	google: {
		families: [
			'Nunito+Sans:300,400,600,700,800,900:latin,latin-ext',
			'Poppins:300,400,500,600,700:latin-ext'
		]
	}
});

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
		
				<App />
			
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
serviceWorker.unregister();
