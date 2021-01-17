import React from 'react'

export default class MyComponent extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        data: [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]],
        input: '',
        results: ''
        }
    }

    largestOfFour(arr) {
        var results = []
        for (let i = 0; i < arr.length; i++) {
            var largestNumber = arr[i][0];

            for (let x = 0; x < arr[i].length; x++) {
                if (arr[i][x] > largestNumber) {
                    largestNumber = arr[i][x];
                }
            }
            results[i] = largestNumber;
        }
        this.setState(results);
    }

    render(){
        return (
            <>
                <h1>Largest of Four Numbers</h1>
                <h2>Sample Data</h2>
                <p>[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]</p>
                <p>[[10, 99, 74, 3], [103, 102, 101, 100], [32, 77, 66, 55], [100000000, 1121546548, 12356489, 11122313513215]]</p>

                <input type='text' value={this.state.input} placeholder={this.state.data}></input>
                <button type='submit' onClick={this.largestOfFour(this.state.input)}>Submit</button>
                <br />
                <h2>Result: {this.state.results}</h2>
            </>
        )
    }
}