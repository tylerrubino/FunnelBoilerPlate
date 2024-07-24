import { useState } from 'react';

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
		<div className='container'>
			<h2 className='heading'>Select Job Type</h2>
			{!isOtherSelected ? (
				<div className='buttonContainer'>
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
