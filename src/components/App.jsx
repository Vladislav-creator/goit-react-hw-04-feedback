import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Container from './Container/Container';

const App = () => {
	
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

	const totalFeedback = good + neutral + bad;
		
	const countPositiveFeedbackPercentage = () => {
		const percentage = (good * 100) / totalFeedback;
		return Math.round(percentage);
	};

	const onLeaveFeedback = (e) => {
		switch (e.target.name) {
			case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
		  }
	};

	const positivePercentage = countPositiveFeedbackPercentage();

		return (
			<Container>
				<Section title="Please leave feedback">
					<FeedbackOptions  options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback} />
				</Section>

				{totalFeedback === 0 ? (
					<Notification message="No feedback given" />
				) : (
					<Section title="Statistics">
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={totalFeedback}
							positivePercentage={positivePercentage}
						/>
					</Section>
				)}
			</Container>
		);
}
export default App