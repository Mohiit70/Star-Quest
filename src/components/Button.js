import styled from 'styled-components';

const Button = styled.button`
  background-color: #ff00ff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: #cc00cc;
    transform: translateY(-2px);
  }
`;

export default Button;