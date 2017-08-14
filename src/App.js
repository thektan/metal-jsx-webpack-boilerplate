import JSXComponent from 'metal-jsx';
import HelloWorld from './HelloWorld';

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