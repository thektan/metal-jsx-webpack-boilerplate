import JSXComponent from 'metal-jsx';
import HelloWorld from './HelloWorld';
import '../css/App.scss';

class App extends JSXComponent {
	render() {
		return (
			<div id="app">
				<HelloWorld />
			</div>
		);
	}
}

export const Root = new App({element:  '#app'});