import './List_user.css';
import React from 'react';
import Show_user from './Show_user';

class List_user extends React.Component{
    
    render() {
        const list = this.props.listUser;
        console.log('this is the button : ', this.props.idDiv)
        console.log('this is my list', list)
        const mylist = list.map((myItem) =>  
        <Show_user user={myItem} idDiv={this.props.idDiv}/>  
      );  
        return(
            <div className='List_user'>
                {mylist}
            </div>
        )
    }
}

export default List_user;