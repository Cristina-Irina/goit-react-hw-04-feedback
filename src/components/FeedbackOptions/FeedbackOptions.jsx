import React from 'react';
import { BtnWrapper } from './FeedbackOptions.styled';
import PropTypes, { arrayOf } from 'prop-types';
import { BtnFeedback } from 'components/BtnFeedback/BtnFeedback';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      {options.map(option => {
        return (
          <li key={option}>
            <BtnFeedback
              key={option}
              type="button"
              value={option}
              feedbackType={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </BtnFeedback>
          </li>
        );
      })}
    </BtnWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
