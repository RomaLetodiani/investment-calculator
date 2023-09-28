import React from 'react';
import { useState } from 'react';
import TableDiv from './TableDiv';
import Header from './Header';
import Form from './Form';

const InvestmentCalculator = () => {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div className="w-full p-5 overflow-hidden min-h-screen min-w-[280px] bg-[#1FA2A5] text-[#fff] flex justify-center items-center">
      <div className="max-w-[850px] flex flex-col justify-center items-center">
        <Header />
        <Form onCalculate={calculateHandler} />
        {!userInput && (
          <p className=" text-center">
            Please fill out the details above for me to calculate.
          </p>
        )}
        {userInput && (
          <TableDiv
            data={yearlyData}
            initialInvestment={userInput['current-savings']}
          />
        )}
      </div>
    </div>
  );
};

export default InvestmentCalculator;
