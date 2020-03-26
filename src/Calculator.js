import React, { Component } from 'react';

 export class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operation: "",
            result: "",
            operandIsPresent: false,
            isNegative: false

        }
    }

    _handleButtonNumber = (e, number) => {
        e.preventDefault();
        console.log(number);
        this.setState({ operation: this.state.operation + number });
        this.setState({ operandIsPresent: false, isNegative: false});

    }

    _handleButtonOperator = (e, operator) => {
        e.preventDefault();
        let lastElement = this.state.operation.slice(this.state.operation.length -1);
        /*if (operator === "-" && this.state.isNegative === false){
            if(["+","-","*","/"].indexOf(lastElement)>=0){
                this.setState({operandIsPresent: false});
                this.setState({operation: this.state.operation + operator});
                this.setState({isNegative: true});
            } else this.setState({ operandIsPresent: true });
        }
         else this.setState({ operandIsPresent: true });
        console.log(this.state.operandIsPresent, this.state.operation, this.state.isNegative);
        this.setState({operandIsPresent: true});
        if (operator === "-"){
            console.log(lastElement);
            if (lastElement)
        }*/
        (this.state.operandIsPresent) ?
            this.setState({ operation: this.state.operation.slice(0, this.state.operation.length - 1) + operator }) : this.setState({ operation: this.state.operation + operator});
    }

    _handleButtonEquals = (e, symbol) => {
        if (this.state.operandIsPresent === false) {
            let aux = evaluateOperation(this.state.operation);
            this.setState({ result: this.state.operation  +symbol  + aux });
            this.setState({ operation: aux })
        }
    }

    _handleButtonClear = (e) => {
        this.setState({ result: "", operation: "" });
    }

    _handleButtonClearLast = (e) => {
        (this.state.operation.length>1)
        ? this.setState({ operation: this.state.operation.slice(0, this.state.operation.length - 1) })
        : this.setState({operation: ""})
    }
        

    _handleButtonDecimal = (e, symbol) => {
        this.setState({ operation: this.state.operation + symbol });
    }

    render() {
        return (
        <div className='calculatorDisplay' >
            <div className='resultsDisplay' >

                <h3 className='results' > {this.state.result} </h3>
                <h3 className='operation' > {this.state.operation}</h3>

            </div>
            <div className='buttons' >

                {numbers.map(number =>
                    <button className={number.value}
                        key={number.key}
                        onClick={
                            (e) => this._handleButtonNumber(e, number.value)} >
                        {number.value}
                    </button>
                )
                }
                {operators.map(operator =>
                    <button className={operator.key}
                        key={operator.key}
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
    { value: 7, id: "seven", key: "seven" },
    { value: 8, id: "eight", key: "eight" },
    { value: 9, id: "nine", key: "nine" },
    { value: 4, id: "four", key: "four" },
    { value: 5, id: "five", key: "five" },
    { value: 6, id: "six", key: "six" },
    { value: 1, id: "one", key: "one" },
    { value: 2, id: "two", key: "two" },
    { value: 3, id: "three", key: "three" },
    { value: 0, id: "zero", key: "zero" }
];

let operators = [
    { value: "+", id: "sum", key: "sum" },
    { value: "-", id: "substraction", key: "substraction" },
    { value: "*", id: "multiplication", key: "multiplication" },
    { value: "/", id: "division", key: "division" }
];

let clear = { value: "AC", id: "clear" };
let clearLast = { value: "C", id: "clearLast" };
let equals = { value: "=", id: "equals" };
let decimal = { value: ".", id: "decimal" };

function evaluateOperation(operation){

    let result = eval(operation);
    return result;
}
