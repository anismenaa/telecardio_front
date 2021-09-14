import React from 'react';
import mysql from 'mysql';
class SearchMedic extends React.Component{

    render() {
        return(
            <div className='SeachMedic'>
                you search for {this.props.searchItem}
            </div>
        )
    }
}

export default SearchMedic;