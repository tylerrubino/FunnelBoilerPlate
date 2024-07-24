import { useState } from 'react';
import { Button, ButtonGroup } from 'bootstrap-4-react/lib/components';

const JobType = ({ nextStep, handleChange, values }) => {
	const [isOtherSelected, setIsOtherSelected] = useState(false);
	const [error, setError] = useState('');

	const handleSelect = (jobType) => {
		if (jobType === 'other') {
			setIsOtherSelected(true);
			handleChange('jobType')({ target: { value: '' } }); // Reset jobType to empty
		} else {
			handleChange('jobType')({ target: { value: jobType } });
			nextStep();
		}
	};

	const handleOtherChange = (e) => {
		setError('');
		handleChange('jobType')(e);
	};

	const handleOtherSubmit = () => {
		if (values.jobType) {
			nextStep();
		} else {
			setError('Please enter the job type.');
		}
	};

	return (
		<div>
			<h2 centered>Select Job Type</h2>
			{!isOtherSelected ? (
				<div class='d-flex justify-content-center'>
					<ButtonGroup vertical aria-label='Vertical example'>
						<Button secondary>Bathroom</Button>
						<button className='button' onClick={() => handleSelect('Bathroom')}>
							Bathroom
						</button>
						<button className='button' onClick={() => handleSelect('Kitchen')}>
							Kitchen
						</button>
						<button className='button' onClick={() => handleSelect('Deck')}>
							Deck
						</button>
						<button className='button' onClick={() => handleSelect('Basement')}>
							Basement
						</button>
						<button className='button' onClick={() => handleSelect('other')}>
							Other
						</button>
					</ButtonGroup>
				</div>
			) : (
				<div className='inputContainer'>
					<input
						type='text'
						placeholder='Enter job type'
						value={values.jobType}
						onChange={handleOtherChange}
						className='input'
					/>
					{error && <div className='error'>{error}</div>}
					<button className='button' onClick={handleOtherSubmit}>
						Next
					</button>
					<button
						className='backButton'
						onClick={() => {
							setIsOtherSelected(false);
						}}>
						Back
					</button>
				</div>
			)}
		</div>
	);
};

export default JobType;
