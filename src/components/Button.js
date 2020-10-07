import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid;
  margin-top: 10px;
  background: ${({ theme, noBgColor }) =>
    noBgColor ? 'null' : theme.color.brightOrange};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : null)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : null)};
  border-color: ${({ theme, borderColor }) =>
    borderColor ? borderColor : theme.color.borderColor};
  color: ${({ theme }) => theme.color.black};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : null};
`;

export default Button;
