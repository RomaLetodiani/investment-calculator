import React, { useState } from 'react';
import InputDiv from './InputDiv';

const initialUserInput = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  duration: 10,
};

const Form = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (e) => {
    e.preventDefault();

    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  return (
    <form
      onSubmit={submitHandler}
      className=" max-w-[335px] md:max-w-full w-full flex flex-col gap-5 my-10 bg-[#009192] rounded-3xl shadow-2xl p-8"
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
        <div className="flex flex-col gap-5">
          <InputDiv
            title={'Current Savings ($)'}
            setVal={setUserInput}
            val={userInput}
            objKey={'current-savings'}
          />
          <InputDiv
            title={'Expected Interest (%, per year)'}
            setVal={setUserInput}
            val={userInput}
            objKey={'expected-return'}
          />
        </div>
        <div className="flex flex-col gap-5">
          <InputDiv
            title={'Yearly Savings ($)'}
            setVal={setUserInput}
            val={userInput}
            objKey={'yearly-contribution'}
          />

          <InputDiv
            title={'Investment Duration (years)'}
            setVal={setUserInput}
            val={userInput}
            objKey={'duration'}
          />
        </div>
      </div>
      <div className="md:self-end self-center flex gap-5">
        <button
          type="reset"
          onClick={resetHandler}
          className=" rounded-lg outline-none border-none py-3 px-5 text-center bg-[#0e535556]"
        >
          Reset
        </button>
        <button
          type="submit"
          className=" rounded-lg outline-none border-none py-3 px-5 text-center bg-[#156365]"
        >
          Calculate
        </button>
      </div>
    </form>
  );
};

export default Form;
