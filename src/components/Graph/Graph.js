import React from 'react';
import RTChart from 'react-rt-chart';
import './Graph.css'

export default class Graph extends React.Component {
    componentDidMount() {
        setInterval(() => this.forceUpdate(), 3000);
    }

    getRandomValue() {
        return Math.floor(Math.random() * 20) + 15;
    }

    render() {
        var data = {
            date: new Date().setMilliseconds(0),
            temp: this.getRandomValue()
        };

        var chart = {
            axis: {
                y: { min: -20, max: 40 }
            },
            point: {
                show: false
            }
        };
        return (
            <div>
                {!this.props.empty && <RTChart chart={chart} fields={['temp']} data={data} maxValues={20} />}
            </div>
        );
    }
}
