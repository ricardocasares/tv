import styled from "@emotion/styled";

const Input = styled.input`
  color: #333;
  border: none;
  background: #000;
  padding: 15px;
  transition: color 0.2s;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;

  :focus {
    color: #fff;
  }
`;

export default Input;
