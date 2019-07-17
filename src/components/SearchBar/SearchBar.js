import React from 'react';
import './SearchBar.css';


/*This class takes in the sortByOptions object and returns each key:value into a list item associated with the correct key. Done this way in order to 
only have to modify the sortByOptions object if the API requires new query methods*/
class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: ''  ,
            sortBy: 'best_match'
        };
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
    }
    /*Compares the current sort method (stored in state) to the current <li> value to either set class to empty string or to 'active'*/
    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    }
    
    //Changes the state 'sortBy' to the value of the <li> clicked
    handleSortByChange(sortByOption) {
        this.setState( {
            sortBy: sortByOption
        });
    }

    handleTermChange(event) {
        this.setState({
            term: event.target.value
        });

    }

    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        });
    }

    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    /*Iterates through the sortByOptions object to create a <li> with each value. Also
    runs handleSortByChange when a <li> is clicked. Then runs getSortByClass to set class of clicked <li> to 'active' */
    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption =>{ 
            let sortByOptionValue = this.sortByOptions[sortByOption]; 
            return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
        });
    };
    
    /*The following renders the HTML code to display. It calls the renderSortByOption method in order to display the list of search options*/
    render() {
        return(
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
            <ul>
            {this.renderSortByOptions()}
            </ul>
            </div>
            <div className="SearchBar-fields">
            <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
            <input placeholder="Where?" onChange={this.handleLocationChange}/>
            </div>
            <div className="SearchBar-submit">
            <a href='www.#.com' onClick={this.handleSearch}>Let's Go</a>
            </div>
            </div>
            )
        }
    }

    export default SearchBar;
    