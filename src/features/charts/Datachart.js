import React from 'react'
import { Chart } from 'react-google-charts';




function Datachart() {
    const options = {
        legend: "none",
        backgroundColor: "#18181A",
        bar: { groupWidth: "45%" },
        titleTextStyle: {
            color: 'red', // Specify the font color here
        },
        candlestick: {
            fallingColor: { strokeWidth: 0, fill: "#ea3943" }, // red
            risingColor: { strokeWidth: 0, fill: "#16c784" }, // green
        },
        animation: {
            startup: true,
            easing: 'linear',
            duration: 1000, // Animation duration in milliseconds
        },

    };
    const data = [
        ["Day", "", "", "", ""],
        ["Mon", 20, 28, 38, 45],
        ["Tue", 31, 38, 55, 66],
        ["Wed", 50, 55, 77, 80],
        ["Thu", 77, 77, 66, 50],
        ["Fri", 68, 66, 22, 15],

    ];
    return (
        <section>
            <div className='text-white md:block hidden'>
                <Chart chartType="CandlestickChart" width="100%" height="360px" data={data} options={options} />
            </div>
            <div className='text-white md:hidden'>
                <Chart chartType="CandlestickChart" width="100%"  data={data} options={options} />
            </div>
        </section>
    );
}


export default Datachart
