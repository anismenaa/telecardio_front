import React from 'react';
import Show_medecin from './Show_medecin'

class View_medecin extends React.Component {

    style = {
        'View_medecin':{
            padding: '20px',
            height: '100%',
            overflow: 'scroll',
        }
    }

    render() {
        const list = this.props.users;
        console.log('this is my list', list)
        const mylist = list.map((myItem) =>  
        <Show_medecin user={myItem} setMeIdAndName = {this.props.setMeId}/> )
        return(
            <div className='View_medecin' style={this.style.View_medecin}>
                {mylist}
            </div>
        )
    }
}

export default View_medecin;