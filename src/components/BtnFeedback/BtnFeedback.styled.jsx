import styled from 'styled-components';

export const BtnStyled = styled.button`
  width: 120px;
  height: 36px;
  border-radius: 20px;
  background-color: ${props => {
    switch (props.$feedbackType) {
      case 'good':
        return '#2BD800';
      case 'neutral':
        return '#FFCC00';
      case 'bad':
        return '#FF4A4A';
      default:
        return props.theme.colors.btnPrimary;
    }
  }};
  color: ${props => props.theme.colors.accents};
  font-weight: ${props => props.theme.fontWeights.bold};
  cursor: pointer;
  opacity: 0.8;
  transition: box-shadow 0.2s ease-in, opacity 0.2s ease-in;

  &:is(:hover, :focus) {
    opacity: 1;
  }
`;
