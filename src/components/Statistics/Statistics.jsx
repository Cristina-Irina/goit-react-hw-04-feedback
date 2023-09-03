import PropTypes from 'prop-types';
import { StatList, StatItem, StatDescription } from './Statistics.styled';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return total ? (
    <StatList>
      <StatItem>
        <StatDescription>
          Good: <span>{good}</span>
        </StatDescription>
      </StatItem>
      <StatItem>
        <StatDescription>
          Neutral: <span>{neutral}</span>
        </StatDescription>
      </StatItem>
      <StatItem>
        <StatDescription>
          Bad: <span>{bad}</span>
        </StatDescription>
      </StatItem>
      <StatItem>
        <StatDescription>
          Total: <span>{total}</span>
        </StatDescription>
      </StatItem>
      <StatItem>
        <StatDescription>
          Positive feeadback: <span>{positivePercentage}%</span>
        </StatDescription>
      </StatItem>
    </StatList>
  ) : (
    <Notification message="There is no feedback" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
