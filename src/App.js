import React, { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setActiveItem = item => {
    this.setState(prevState => ({
      [item]: prevState[item] + 1,
    }));
  };

  getBtnName = name => {
    return `${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}`;
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, item) => total + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback :)">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.setActiveItem}
            getBtnName={this.getBtnName}
          />
        </Section>

        <Section title="Statistics: ">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given"></Notification>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
