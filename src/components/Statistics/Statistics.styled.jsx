import styled from 'styled-components';

export const StatList = styled.ul`
  margin: 24px 80px;
  padding: 24px 0;

  border-radius: ${props => props.theme.radii.normal};
  box-shadow: ${props => props.theme.shadows.boxShadowDiv};
  background-color: ${props => props.theme.colors.btnSecondary};
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StatDescription = styled.p`
  margin-left: 24px;
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.black};
`;
