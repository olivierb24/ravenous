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
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
    }
    /* */
    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    }
    
    handleSortByChange(sortByOption) {
        this.setState( {
            sortBy: sortByOption
        });
    }


    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption =>{ 
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
        });
    };
    
    /*The following render the HTML code to display. It calls the SearchBar class in order to display the list of search options*/
    render() {
        return(
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
            <ul>
            {this.renderSortByOptions()}
            </ul>
            </div>
            <div className="SearchBar-fields">
            <input placeholder="Search Businesses" />
            <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
            <a>Let's Go</a>
            </div>
            </div>
            )
        }
    }

    export default SearchBar;
    