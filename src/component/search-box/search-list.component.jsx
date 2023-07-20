import { Component } from "react";
import './search-box.styles.css'

class SearchList extends Component {
    render() {
        const {onChangeHandler} = this.props;
        return (
            <div>
                <input type="search" className='search-box' placeholder='Search Monster'
                 onChange={onChangeHandler} />
            </div>
        )
    }
}

export default SearchList;