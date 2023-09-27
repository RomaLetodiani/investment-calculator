import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: #008081;
  box-shadow: inset 0px 0px 20px 15px #082c3780;
  max-width: 90%;
  padding: 30px;
  text-align: right;
  border-radius: 20px;
  > div {
    display: flex;
    gap: 30px;
    overflow: auto;
    > div {
      display: flex;
      flex-direction: column;
      gap: 12px;
      p {
        font-size: 14px;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 20px;

        li {
          font-size: 12px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    max-width: 48%;
    min-width: 250px;
    > div {
      flex-direction: column;
      > div {
        flex-direction: row;
        gap: 40px;
        p {
          min-width: 100px;
        }
        ul {
          flex-direction: row;
          &.years {
            gap: 52px;
          }
        }
      }
    }
  }
`;
