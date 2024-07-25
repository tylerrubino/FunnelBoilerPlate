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
    // <div>
    // 	<h2 centered>Select Job Type</h2>
    // 	{!isOtherSelected ? (
    // 		<div class='d-flex justify-content-center'>
    // 			<ButtonGroup vertical aria-label='Vertical example'>
    // 				<Button secondary>Bathroom</Button>
    // 				<button className='button' onClick={() => handleSelect('Bathroom')}>
    // 					Bathroom
    // 				</button>
    // 				<button className='button' onClick={() => handleSelect('Kitchen')}>
    // 					Kitchen
    // 				</button>
    // 				<button className='button' onClick={() => handleSelect('Deck')}>
    // 					Deck
    // 				</button>
    // 				<button className='button' onClick={() => handleSelect('Basement')}>
    // 					Basement
    // 				</button>
    // 				<button className='button' onClick={() => handleSelect('other')}>
    // 					Other
    // 				</button>
    // 			</ButtonGroup>
    // 		</div>
    // 	) : (
    // 		<div className='inputContainer'>
    // 			<input
    // 				type='text'
    // 				placeholder='Enter job type'
    // 				value={values.jobType}
    // 				onChange={handleOtherChange}
    // 				className='input'
    // 			/>
    // 			{error && <div className='error'>{error}</div>}
    // 			<button className='button' onClick={handleOtherSubmit}>
    // 				Next
    // 			</button>
    // 			<button
    // 				className='backButton'
    // 				onClick={() => {
    // 					setIsOtherSelected(false);
    // 				}}>
    // 				Back
    // 			</button>
    // 		</div>
    // 	)}
    // </div>
    <div className='list-group list-group-checkable d-grid gap-2 border-0'>
      <input
        className='list-group-item-check pe-none'
        type='radio'
        name='listGroupCheckableRadios'
        id='listGroupCheckableRadios1'
        value=''
        checked=''
      />
      <label
        class='list-group-item rounded-3 py-3'
        for='listGroupCheckableRadios1'
      >
        First radio
        <span class='d-block small opacity-50'>
          With support text underneath to add more detail
        </span>
      </label>

      <input
        class='list-group-item-check pe-none'
        type='radio'
        name='listGroupCheckableRadios'
        id='listGroupCheckableRadios2'
        value=''
      />
      <label
        class='list-group-item rounded-3 py-3'
        for='listGroupCheckableRadios2'
      >
        Second radio
        <span class='d-block small opacity-50'>Some other text goes here</span>
      </label>

      <input
        class='list-group-item-check pe-none'
        type='radio'
        name='listGroupCheckableRadios'
        id='listGroupCheckableRadios3'
        value=''
      />
      <label
        class='list-group-item rounded-3 py-3'
        for='listGroupCheckableRadios3'
      >
        Third radio
        <span class='d-block small opacity-50'>
          And we end with another snippet of text
        </span>
      </label>

      <input
        class='list-group-item-check pe-none'
        type='radio'
        name='listGroupCheckableRadios'
        id='listGroupCheckableRadios4'
        value=''
        disabled=''
      />
      <label
        class='list-group-item rounded-3 py-3'
        for='listGroupCheckableRadios4'
      >
        Fourth disabled radio
        <span class='d-block small opacity-50'>This option is disabled</span>
      </label>
    </div>
  );
};

export default JobType;
