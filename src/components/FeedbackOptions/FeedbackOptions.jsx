import React from 'react';
import { BtnWrapper } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
import { BtnFeedback } from 'components/BtnFeedback/BtnFeedback';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrapper as="ul">
      {options.map(option => (
        <li key={option}>
          <BtnFeedback
            type="button"
            feedbackType={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </BtnFeedback>
        </li>
      ))}
    </BtnWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
