import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

export default Container;
