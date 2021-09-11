import './Statistics.css';
import React from 'react';

class Statistics extends React.Component {
    render() {
        return(
            <div className="statistics">
                <div className="statistics__Card">
                    <div className="statistics__RoundNumber">
                        <p>29</p>
                    </div>
                    <div className="statistics__indicatorText">
                        <p>nombre de medecins actifs : <strong>25</strong></p>
                    </div>
                </div>
                <div className="statistics__Card">
                    <div className="statistics__RoundNumber">
                        <p>115</p>
                    </div>
                    <div className="statistics__indicatorText">
                        <p>npmbre de patient enregistré : <strong>99</strong></p>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Statistics