import React from 'react';
import InputDiv from './InputDiv';

const Form = ({ userInput, setUserInput, onReset, onCalculate }) => {
  console.log(userInput);
  return (
    <form className="flex flex-col gap-5 my-10 bg-[#009192] rounded-3xl shadow-2xl p-8">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
        <div className="flex flex-col gap-5">
          <InputDiv
            title={'Current Savings ($)'}
            setVal={setUserInput}
            val={userInput}
            objKey={'currentSavings'}
          />
          <InputDiv
            title={'Expected Interest (%, per year)'}
            setVal={setUserInput}
            val={userInput}
            objKey={'expectedReturn'}
          />
        </div>
        <div className="flex flex-col gap-5">
          <InputDiv
            title={'Yearly Savings ($)'}
            setVal={setUserInput}
            val={userInput}
            objKey={'yearlyCont'}
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
          onClick={onReset}
          className=" rounded-lg outline-none border-none py-3 px-5 text-center bg-[#0e535556]"
        >
          Reset
        </button>
        <button
          type="submit"
          onClick={onCalculate}
          className=" rounded-lg outline-none border-none py-3 px-5 text-center bg-[#156365]"
        >
          Calculate
        </button>
      </div>
    </form>
  );
};

export default Form;
