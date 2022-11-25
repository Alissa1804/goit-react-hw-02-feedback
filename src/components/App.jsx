import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  Counter = event => {
    const { id } = event.target;
    this.setState(prevState => ({
      [id]: prevState[id] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!(this.state.good * 100) / total) {
      return 0;
    }
    return Math.floor((this.state.good * 100) / total);
  };

  render() {
    return (
      <Section title="Please leave your feedback!">
        <FeedbackOptions onCounter={this.Counter}></FeedbackOptions>
        <Statistics
          title="Statistics"
          state={this.state}
          totalC={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        ></Statistics>
      </Section>
    );
  }
}

export default App;
