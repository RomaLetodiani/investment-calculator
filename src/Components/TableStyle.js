import styled from 'styled-components';

export const Table = styled.table`
  background-color: #008081;
  box-shadow: inset 0px 0px 20px 15px #082c3780;
  max-width: 50rem;
  padding: 1rem;
  border-radius: 20px;
  table-layout: fixed;
  border-spacing: 1rem;
  text-align: right;
  thead {
    font-size: 12px;
  }
  tbody {
    font-size: 14px;
    tr {
      padding-bottom: 20px;
    }
  }
`;
