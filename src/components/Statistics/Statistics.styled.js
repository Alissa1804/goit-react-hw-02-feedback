import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #fff;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  min-width: 230px;
  min-height: 150px;
  align-items: center;
  gap: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
  color: #d5a0e9;
  font-size: 16px;
`;

export const List = styled.ul`
  color: #fff;
  font-family: 'Dosis', sans-serif;
  min-width: 180px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  &::after {
    content: '';
    display: inline-block;
    flex-grow: 1;
    height: 1px;
    margin-right: 6px;
    margin-left: 6px;
    background-color: rgba(157, 164, 189, 0.12);
  }
`;

export const Span = styled.p`
  color: #d5a0e9;
  margin-left: 5px;
  font-size: 18px;
  order: 2;
`;

export const P = styled.p`
  display: flex;
  justify-content: space-between;
`;
