import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onCounter }) => {
  return (
    <List>
      <li>
        <Button type="button" id="good" onClick={onCounter}>
          &#x1F879; Good
        </Button>
      </li>
      <li>
        <Button type="button" id="neutral" onClick={onCounter}>
          &#x1F878; Neutral
        </Button>
      </li>
      <li>
        <Button type="button" id="bad" onClick={onCounter}>
          &#x1F87B; Bad
        </Button>
      </li>
    </List>
  );
};

FeedbackOptions.propTypes = {
  onCounter: PropTypes.func.isRequired,
};
