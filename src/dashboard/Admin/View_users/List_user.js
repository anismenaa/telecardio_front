import './List_user.css';
import React from 'react';
import Show_user from './Show_user';

class List_user extends React.Component{
    
    render() {
        const list = this.props.listUser;
        console.log(typeof list)
        const mylist = list.map((myItem) =>  
        <Show_user username={myItem}/>  
      );  
        console.log(list)
       
        console.log('iam here')
        return(
            <div className='List_user'>
                {mylist}
            </div>
        )
    }
}

export default List_user;