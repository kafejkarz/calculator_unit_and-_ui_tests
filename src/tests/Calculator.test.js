import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it("should add two numbers", () => {
    const number1 = container.find("#number1");
    number1.simulate("click");
    const AddNumber = container.find("#operator_add");
    AddNumber.simulate("click");
    const number4 = container.find("#number4");
    number4.simulate("click");
    const addTwoNumbers = container.find("#operator-equals");
    addTwoNumbers.simulate("click");
    const totalNumber = container.find("#running-total");
    expect(totalNumber.text()).toEqual('5');
  })
  
  it("should subtract a number", () => {
    const number7 = container.find("#number7");
    number7.simulate("click");
    const subtractNumber = container.find("#operator-subtract");
    subtractNumber.simulate("click");
    const number4 = container.find("#number4");
    number4.simulate("click");
    const subtractTwoNumbers = container.find("#operator-equals");
    subtractTwoNumbers.simulate("click");
    const totalSubtract = container.find("#running-total");
    expect(totalSubtract.text()).toEqual('3');
  })


  it("should multiply two numbers", () => {
    const number3 = container.find("#number3");
    number3.simulate("click");
    const multiplyNum = container.find("#operator-multiply");
    multiplyNum.simulate("click");
    const number5 = container.find("#number5");
    number5.simulate("click");
    const multiplyTwoNum = container.find("#operator-equals");
    multiplyTwoNum.simulate("click");
    const totalMultiply = container.find("#running-total");
    expect(totalMultiply.text()).toEqual("15");
    
  })

  it("should divide two numbers", () => {
    const number2 = container.find("#number2");
    number2.simulate("click");
    const number1 = container.find("#number1");
    number1.simulate("click");
    const divideNum = container.find("#operator-divide");
    divideNum.simulate("click");
    const number7 = container.find("#number7");
    number7.simulate("click");
    const divideTwoNum = container.find("#operator-equals");
    divideTwoNum.simulate("click");
    const totalDivide = container.find("#running-total");
    expect(totalDivide.text()).toEqual("3");
  })

  it("should concatenate multiple number button clicks", () => {
    const number1 = container.find("#number1");
    number1.simulate("click");
    const number2 = container.find("#number2");
    number2.simulate("click");
    const number3 = container.find("#number3");
    number3.simulate("click");
    const totalconcatenateNum = container.find("#running-total")
    expect(totalconcatenateNum.text()).toEqual("123");
  })

  it("should chain multiple operations together", () => {
    const number1 = container.find("#number1");
    number1.simulate("click");
    const addNum = container.find("#operator_add");
    addNum.simulate("click");
    const number2 = container.find("#number2");
    number2.simulate("click");
    const multiplyNum = container.find("#operator-multiply");
    multiplyNum.simulate("click");
    const number4 = container.find("#number4");
    number4.simulate("click");
    const chainOperations = container.find("#operator-equals");
    chainOperations.simulate("click");
    const totalChainOperations = container.find("#running-total")
    expect(totalChainOperations.text()).toEqual("12")
    
  })

  it("should clear the running total without affecting the calculation", () => {
    const number1 = container.find("#number1");
    number1.simulate("click");
    const addNum = container.find("#operator_add");
    addNum.simulate("click");
    const number5 = container.find("#number5");
    number5.simulate("click");
    const clearNum = container.find("#clear");
    clearNum.simulate("click");
    const addNumber = container.find("#operator_add");
    addNumber.simulate("click");
    const number3 = container.find("#number3");
    number3.simulate("click");
    const equal = container.find("#operator-equals");
    equal.simulate("click");
    const total = container.find("#running-total");
    expect(total.text()).toEqual("4");
  })
  it ("should be able to handle dividing by zero",() => {
    const number6 = container.find("#number6");
    number6.simulate("click");
    const divideNum = container.find("#operator-divide");
    divideNum.simulate("click");
    const number0 =container.find("#number0");
    number0.simulate("click");
    const total = container.find("#running-total");
    expect(total.text()).toEqual("0");

  })
})