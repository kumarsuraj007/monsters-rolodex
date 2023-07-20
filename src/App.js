import {Component} from 'react';
import './App.css';
import CardList from './component/card-list/card-list.component';
import SearchList from './component/search-box/search-list.component';

class App extends Component {

  constructor () {
    super();
    this.state = {
      monsters: [],
      searchString: ''
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }, 
    () => {
      console.log(this.state)
    }))
  }

  onSearch = (e) => {
    const searchString = e.target.value;
    this.setState(() => {
      return {searchString}
    })
  }

  render () {
    const {monsters, searchString} = this.state;
    const {onSearch} = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString)
    })

     return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
    <SearchList onChangeHandler={onSearch} />
    <CardList monsters={filteredMonsters} />
    </div>
  )
}
}

export default App;
