import { StrictMode } from 'react';
import { render } from 'react-dom';

import './main.scss';

import App from './components/App';

const rootElement = document.getElementById('root');
render(
	<StrictMode>
		<App />
	</StrictMode>,
	rootElement
);
