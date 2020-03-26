import React, { Component } from 'react';

export class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operation: "",
            result: "",
        }
    }

    _handleButtonNumber = (e, number) => {
        e.preventDefault();
        console.log(number);
        this.setState({ operation: this.state.operation + number });
    }

    _handleButtonOperator = (e, operator) => {
        e.preventDefault();
        this.setState({ operation: this.state.operation + operator });
    }

    _handleButtonEquals = (e, symbol) => {
        e.preventDefault();
        let aux = evaluateOperation(this.state.operation);
        if (aux === -1) {
            this.setState({ operation: this.state.operation, result: "Not a valid expresion" });
        }
        else {
            this.setState({ result: this.state.operation + symbol + aux, operation: aux });
        }
    }

    _handleButtonClear = (e) => {
        this.setState({ result: "", operation: "" });
    }

    _handleButtonClearLast = (e) => {
        (this.state.operation.length >= 0)
            ? this.setState({ operation: this.state.operation.slice(0, this.state.operation.length - 1) })
            : this.setState({ operation: "" })
    }

    _handleButtonDecimal = (e, symbol) => {
        this.setState({ operation: this.state.operation + symbol });
    }

    render() {
        return (
            <div className='calculatorDisplay' >
                <div className='resultsDisplay' >
                    <h3 className='results' > {this.state.result} </h3>
                    <h3 className='operation'> {this.state.operation}</h3>
                </div>
                <div className='buttons' >

                    {numbers.map(number =>
                        <button className={number.value}
                            key={number.id}
                            onClick={
                                (e) => this._handleButtonNumber(e, number.value)} >
                            {number.value}
                        </button>
                    )
                    }
                    {operators.map(operator =>
                        <button className={operator.id}
                            key={operator.id}
                            onClick={
                                (e) => this._handleButtonOperator(e, operator.value)} > {operator.value}
                        </button>
                    )
                    }
                    <button className={equals.id}
                        onClick={
                            (e) => this._handleButtonEquals(e, equals.value)} >
                        {equals.value}
                    </button>

                    <button className={decimal.id}
                        key={decimal.id}
                        onClick={
                            (e) => this._handleButtonDecimal(e, decimal.value)} >
                        {decimal.value}
                    </button>

                    < button className={clear.id}
                        key={clear.id}
                        onClick={
                            (e) => this._handleButtonClear(e)} >
                        {clear.value}
                    </button>

                    <button className={clearLast.id}
                        key={clearLast.id}
                        onClick={
                            (e) => this._handleButtonClearLast(e)} > {clearLast.value}
                    </button>

                </div>
            </div>
        )
    }
}

let numbers = [
    { value: 7, id: "seven" },
    { value: 8, id: "eight" },
    { value: 9, id: "nine" },
    { value: 4, id: "four" },
    { value: 5, id: "five" },
    { value: 6, id: "six", },
    { value: 1, id: "one" },
    { value: 2, id: "two" },
    { value: 3, id: "three" },
    { value: 0, id: "zero" }
];

let operators = [
    { value: "+", id: "sum" },
    { value: "-", id: "substraction" },
    { value: "*", id: "multiplication" },
    { value: "/", id: "division" }
];

let clear = { value: "AC", id: "clear" };
let clearLast = { value: "C", id: "clearLast" };
let equals = { value: "=", id: "equals" };
let decimal = { value: ".", id: "decimal" };

function evaluateOperation(operation) {
    let result = "";
    try {
        result = eval(operation)
    } catch (err) {
        result = -1;
    }
    return result;
}
