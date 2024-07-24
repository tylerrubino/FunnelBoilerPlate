import { useState } from 'react';
import JobType from './JobType';
import SquareFootage from './SquareFootage';
import Location from './Location';
import UserInfo from './UserInfo';
import ThankYou from './ThankYou';

const Funnel = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		jobType: '',
		squareFootage: '',
		location: '',
		name: '',
		email: '',
		phone: '',
	});

	const nextStep = () => setStep(step + 1);
	const prevStep = () => setStep(step - 1);

	const handleChange = (input) => (e) => {
		setFormData({ ...formData, [input]: e.target.value });
	};

	switch (step) {
		case 1:
			return (
				<JobType
					nextStep={nextStep}
					handleChange={handleChange}
					values={formData}
				/>
			);
		case 2:
			return (
				<SquareFootage
					nextStep={nextStep}
					prevStep={prevStep}
					handleChange={handleChange}
					values={formData}
				/>
			);
		case 3:
			return (
				<Location
					nextStep={nextStep}
					prevStep={prevStep}
					handleChange={handleChange}
					values={formData}
				/>
			);
		case 4:
			return (
				<UserInfo
					nextStep={nextStep}
					prevStep={prevStep}
					handleChange={handleChange}
					values={formData}
				/>
			);
		case 5:
			return <ThankYou />;
		default:
			return (
				<JobType
					nextStep={nextStep}
					handleChange={handleChange}
					values={formData}
				/>
			);
	}
};

export default Funnel;
