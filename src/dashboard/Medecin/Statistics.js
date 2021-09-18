export function getMeGenderStatistics (myUser ,state) {
    myUsers.forEach(user => {
        if( user.roles[0].name==='ROLE_Patient'){
            if(user.sex === 'Homme') {
                this.setState({
                    ...this.state,
                    nbhomme : this.state.nbhomme + 1
                }) 
            } else {
                this.setState({
                    ...this.state,
                    nbfemme: this.state.nbfemme + 1
                })
            }
        }
        
    });
    console.log(this.state)
    // calculate the percentage of each gender
    this.setState({
        ...this.state,
        hommePer: (this.state.nbhomme * 100)/ (this.state.nbhomme+this.state.nbfemme),
        femmePer: (this.state.nbfemme * 100)/ (this.state.nbhomme+this.state.nbfemme)
    })
}