import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import { Title, Container, List, Span, P, Item } from './Statistics.styled';

export const Statistics = ({ title, state, totalC, positivePercentage }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {totalC() >= 1 ? (
        <List>
          <Item>
            <P>Good:</P>
            <Span>{state.good}</Span>
          </Item>
          <Item>
            <P>Neutral:</P>
            <Span>{state.neutral}</Span>
          </Item>
          <Item>
            <P>Bad:</P>
            <Span>{state.bad}</Span>
          </Item>
          <Item>
            <P>Total:</P>
            <Span>{totalC()}</Span>
          </Item>
          <Item>
            <P>Positive Feedback:</P>
            <Span>{positivePercentage()}%</Span>
          </Item>
        </List>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  totalC: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
