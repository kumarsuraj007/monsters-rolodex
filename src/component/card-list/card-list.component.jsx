import { Component } from "react";
import './card-list.styles.css';
import './card.styles.css'

class CardList extends Component {
    render () {
        const {monsters} = this.props;
        return (
        <div className="card-list">
            {
             monsters.map(monster => (
               <div className="card-container" key={monster.id}>
                <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="" />
                <h1>{monster.name}</h1>
                <p>{monster.email}</p>
               </div> 
             ))
            }
        </div>
        )
    }
}

export default CardList;