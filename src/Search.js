import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
              <input className="input" type="text" placeholder="Search" onChange={e => this.props.search(e.target.value)}/>  
            </div>
        );
    }
}

export default Search;