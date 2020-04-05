import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import './style.scss'

class AnalysisChart extends React.Component {
    constructor(props){
        super(props)
        var values=[];
        var labels=[];
        var colors=[];
        if (props.analysis.protein) {
            values.push(props.analysis.protein)
            labels.push("Protein")
            colors.push("#2ecc71")
        }
        if (props.analysis.fat) {
            values.push(props.analysis.fat)
            labels.push("Yağ")
            colors.push("#3498db")
        }
        if (props.analysis.ash) {
            values.push(props.analysis.ash)
            labels.push("Kül")
            colors.push("#95a5a6")
        }
        if (props.analysis.fibre) {
            values.push(props.analysis.fibre)
            labels.push("Selülöz")
            colors.push("#9b59b6")
        }
        if (props.analysis.omega3) {
            values.push(props.analysis.omega3)
            labels.push("Omega 3")
            colors.push("#f1c40f")
        }
        if (props.analysis.omega6) {
            values.push(props.analysis.omega6)
            labels.push("Omega 6")
            colors.push("#f3c8ba")
        }
        
        var total =0
        for (var i in values) { total +=values[i]}
        //values.push(1-total)
        //labels.push("nem")
        //colors.push("#80c5de")
        this.state={
            chartData:{
                title:{
                    text:"Analiz",
                    display:true,
                },
                datasets:[{
                    label:'Oranlar',
                    backgroundColor: colors,
                    data:values
                }],
                labels:labels,
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
                        rotation: -0.5,
                        legend:{
                            display:false,
                        },
                        backgroundColor:"#A9A9A9",
                        layout:{
                            padding:{
                                top:10,
                                bottom:10,
                                left:10,
                                right:10,
                            }
                        },
                        
                        plugins:{
                            datalabels: {
                                display:"auto",
                                clamp:true,
                                color:'#000000',
                                anchor: "end",
                                
                               
                                formatter: function(value, context) {
                                        return context.chart.data.labels[context.dataIndex] +': '+ Math.round(value*100)+'%';
                },
                               
                            }
                        } 
                    }}
                    />
            
            
            )
        
    }
    
}

export default AnalysisChart;