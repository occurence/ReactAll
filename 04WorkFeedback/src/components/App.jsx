import { useState } from 'react';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good+neutral+bad;
  }
  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return total > 0 ? Math.round(good/total * 100) : 0;
  }
  const handleClick = type => {
    setFeedback(prevState => ({...prevState, [type]: prevState[type] + 1}));

  }
  const { good, neutral, bad } = feedback;
  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return(
    <div>
      <Section title="Please leave a Feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>
        {total > 0 ? 
          <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
          </Section> :
          <Section title="No Feedback">
            <Notification message="There is no feedback yet"/>
          </Section>
        }
    </div>
  )
}