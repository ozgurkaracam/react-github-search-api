// STEP 1 - Include Dependencies
// Include react
import React from "react";
import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import {useGithubContext} from "../../context/Context";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
const ExampleChart= ({chartData,tip,descrip,xLabel,yLabel='Number',theme="fusion"})=>{
    const chartConfigs = {
        type: tip, // The chart type
        width: "100%", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                //Set the chart caption
                caption: descrip,
                //Set the chart subcaption
                //Set the x-axis name
                xAxisName: xLabel,
                //Set the y-axis name
                yAxisName: yLabel,
                numberSuffix: "",
                //Set the theme for your chart
                theme: theme
            },
            // Chart Data
            data: chartData
        }
    };

    return (<div className="shadow-2xl rounded-2xl overflow-hidden mb-4">
        <ReactFC {...chartConfigs} />
    </div>);

}

export default ExampleChart;