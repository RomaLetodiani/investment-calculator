import styled from 'styled-components';

export const Table = styled.table`
  background-color: #008081;
  box-shadow: inset 0px 0px 20px 15px #082c3780;
  max-width: 90%;
  margin: auto;
  padding: 10px;
  border-radius: 20px;
  border-spacing: 5px;
  text-align: center;
  table-layout: fixed;
  border-collapse: unset;
  thead {
    font-size: 11px;
  }
  tbody {
    font-size: 11px;
  }
  @media (min-width: 768px) {
    padding: 20px;
    text-align: right;
    border-spacing: 15px;
  }
`;
