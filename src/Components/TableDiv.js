import React from 'react';
import { Table } from './TableStyle';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const TableDiv = ({ data, initialInvestment }) => {
  return data.length > 0 ? (
    <Table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{formatter.format(row.savingsEndOfYear)}</td>
            <td>{formatter.format(row.yearlyInterest)}</td>
            <td>
              {formatter.format(
                row.savingsEndOfYear -
                  initialInvestment -
                  row.yearlyContribution * row.year
              )}
            </td>
            <td>
              {formatter.format(
                initialInvestment + row.yearlyContribution * row.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  ) : (
    <p className=" text-center">
      Please type the valid Investment Duration (years) above for me to
      calculate.
    </p>
  );
};

export default TableDiv;
