import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import './style.scss'

class AnalysisChart extends React.Component {
    constructor(props){
        super(props)
        var values=[];
        values.push(props.analysis.protein)
        values.push(props.analysis.fat)
        values.push(props.analysis.ash)
        values.push(props.analysis.fibre)
        values.push(props.analysis.omega3)
        values.push(props.analysis.omega6)
        
        var total =0
        for (var i in values) { total +=values[i]}
        values.push(1-total)
        this.state={
            chartData:{
                title:{
                    text:"Analiz",
                    display:true,
                },
                datasets:[{
                    label:'Oranlar',
                    backgroundColor: [
                        "#2ecc71",
                        "#3498db",
                        "#95a5a6",
                        "#9b59b6",
                        "#f1c40f",
                        "#f3c8ba",
                        "#FFFFFF"
                        ],
                    data:values
                }],
                labels:['Protein','Yağ','Ham Kül','Ham Selülöz','Omega 3','Omega 6',""],
            }
        }
    }
    
    
    render (){
        return (
            
                <Doughnut 
                    data={this.state.chartData}
                    options={{
                        responsive:true,
                        maintainAspectRatio:true,
                        defaultFontSize:"14px",
                        legend:{
                            display:false,
                        },
                        layout:{
                            padding:{bottom:"30px"},
                        },
                        
                        plugins:{
                            datalabels: {
                                display:"auto",
                                clamp:true,
                                color:'#000000',
                                anchor: function(context){
                                    var odd=context.dataIndex%2;
                                    return odd ==0 ? "end" :"start";
                                },
                                formatter: function(value, context) {
                                        return context.chart.data.labels[context.dataIndex];
                }
                            }
                        } 
                    }}
                    />
            
            
            )
        
    }
    
}

export default AnalysisChart;