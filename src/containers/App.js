import React, {Component} from 'react';
import CardList from '../components/CardList.js'
import SearchBox from '../components/SearchBox.js';
import './App.css';
import Scroll from '../components/scroll';




class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}


	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}));
	}



	render() {
		const {robots, searchfield} = this.state;
		const filteredRobot = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return (
			<div className ="tc">
				<h1>RoboFriends</h1>
				<SearchBox searchChange = {this.onSearchChange} />
				<Scroll>
					<CardList robots = {filteredRobot}/>
				</Scroll>
			</div>
		);
	}
}









export default App;





