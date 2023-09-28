import React from 'react';
import { useState } from 'react';
import TableDiv from './TableDiv';
import Header from './Header';
import Form from './Form';

const InvestmentCalculator = () => {
  const [userInput, setUserInput] = useState({
    currentSavings: '',
    yearlyCont: '',
    expectedReturn: '',
    duration: '',
  });

  const [yearlyData, setYearlyData] = useState([]);

  const onReset = () => {
    setUserInput({
      currentSavings: '',
      yearlyCont: '',
      expectedReturn: '',
      duration: '',
    });
    setYearlyData([]);
  };

  const onCalculate = (e) => {
    e.preventDefault();

    if (userInput) {
      let currentSavings = +userInput.currentSavings;
      const yearlyContribution = +userInput.yearlyCont;
      const expectedReturn = +userInput.expectedReturn / 100;
      const duration = +userInput.duration;

      const calculatedData = [];

      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        calculatedData.push({
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }

      setYearlyData(calculatedData);
      setUserInput({
        currentSavings: '',
        yearlyCont: '',
        expectedReturn: '',
        duration: '',
      });
    }
  };

  return (
    <div className="w-full p-5 min-h-screen min-w-[280px] bg-[#1FA2A5] text-[#fff] flex justify-center items-center">
      <div className="max-w-[850px] flex flex-col justify-center">
        <Header />
        <Form
          userInput={userInput}
          setUserInput={setUserInput}
          onCalculate={onCalculate}
          onReset={onReset}
        />
        {yearlyData.length <= 0 ? (
          <p className=" text-center">
            Please fill out the details above for me to calculate.
          </p>
        ) : (
          userInput && (
            <TableDiv
              data={yearlyData}
              initialInvestment={userInput.currentSavings}
            />
          )
        )}
      </div>
    </div>
  );
};

export default InvestmentCalculator;
