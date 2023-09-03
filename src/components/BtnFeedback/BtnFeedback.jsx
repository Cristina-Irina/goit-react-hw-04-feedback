import React from 'react';
import { BtnStyled } from './BtnFeedback.styled';
import PropTypes from 'prop-types';

export const BtnFeedback = ({
  type = 'button',
  children,
  onClick,
  feedbackType,
}) => {
  return (
    <BtnStyled type={type} onClick={onClick} $feedbackType={feedbackType}>
      {children}
    </BtnStyled>
  );
};

BtnFeedback.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  feedbackType: PropTypes.oneOf(['good', 'neutral', 'bad']).isRequired,
};
