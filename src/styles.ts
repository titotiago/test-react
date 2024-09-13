import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
`;

export const Input = styled.input`
  line-height: 2.3rem;
  border-radius: 8px;
  margin-right: 16px;
  width: 30vw;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

export const Form = styled.form`
  margin-bottom: 16px;
`;

export const Button = styled.button`
  margin-right: 8px;
`;

export const Text = styled.h3`
  color: white;
  font-weight: 600;
`;
