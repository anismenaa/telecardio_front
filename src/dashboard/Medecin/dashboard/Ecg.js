import React from 'react';
import Chart from 'react-apexcharts';
import jsonEcg from './ecg.json'

class ApexChart extends React.Component {
    constructor(props) {
      super(props);
     
      this.state = {
        
        options: {

            chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: true
                },
                markers: {
                    size: "10px",
                },
                stroke: {
                    curve: 'stepline',
                  }
              },
            xaxis: {
                categories: [],
                title: {
                    text: 'temps'
                  }
            },
            yaxis: {
                title: {
                  text: 'Temperature'
                },
            }
          },

         series: [
             {
              data : []
             
             }
             
         ],
         noData: {
            text: 'Loading...'
          }

      };
    }

    componentDidMount = () => {
        const valueSaveTimes = [];
        const values = [];

        // on remplit le tableau de valuesSaveTimes 
        jsonEcg.forEach( donnee => valueSaveTimes.push(donnee['valueSaveTime']));
        // on remplit le tableau de values 
        jsonEcg.forEach( donnee => values.push(donnee['value']) )

        // console.log('valuesTimeSave : ', valueSaveTimes);
        // console.log('values : ', values);
        
        // by using this.setState set me the data
        this.setState({
            options: {

                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                      enabled: true
                    },
                    markers: {
                        size: "10px",
                    },
                    stroke: {
                        curve: 'stepline',
                      }
                  },
                xaxis: {
                    categories: valueSaveTimes,
                    title: {
                        text: 'temps'
                      }
                },
                yaxis: {
                    title: {
                      text: 'Temperature'
                    },
                }
              },
    
             series: [
                 {
                  data : values 
                 
                 }
                 
             ],
             noData: {
                text: 'Loading...'
              }
    
        })
    }
  

    render() {
        // const donneeTemp = []
        // console.log('hah',jsonEcg[0]['valueSaveTime'])
        // jsonEcg.forEach(donnee => {
        //     donneeTemp.push(donnee['valueSaveTime'])
        // });
        // console.log('hihhh : ', donneeTemp)
      return (
        

        <div className="row">
            <div className="mixed-chart">
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="500"
            />
            </div>
        </div>



      );
    }
  }

export default ApexChart;