export const simpleOnClickExample: string = `
<button onClick={() => alert('Auto Destruct Activated!')}>
    Don't Click Me!
</button>
`;

export const onClickExampleWithHandlerTypeScript: string = `
const AutoDestruct: React.FC = () => {
    const handleDoomClick = (): void => {
        alert('Auto Destruct Activated!');
    }

    return (
        <button onClick={handleDoomClick}>
            Don't Click Me!
        </button>
    );
};

export default AutoDestruct;
`;

export const eventObjectTypes: { mouseEvent: string; keyboardEvent: string; changeEvent: string; formSubmitEvent: string; } = {
    mouseEvent: `// Mouse Event
const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    // logic to execute when a button is clicked
};`,
    keyboardEvent: `// Keyboard Event
const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    // logic to execute a key is pressed
}`,
    changeEvent: `// Change Event
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
   // logic to execute when the value in an input field changes
}`,
    formSubmitEvent: `// Form Submit Event
const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    // logic to execute when a form is submitted
}`
}

export const simpleOnChangeExample: string = `
<input onChange={(event) => console.log(event.target.value)} placeholder='Enter Auto-Desctruct Code' />
`

export const onChangeWithHandlerAndState: string = `
import React, { useState } from 'react;

const InputComponent = () = {
    const [complaint, setComplaintValue] = useState('');

    const handleChange = (event) = {
    setComplaintValue(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={complaint}
                onChange={handleChange}
                placeholder='Awaiting Grievances and Gripes...'
                />
            <p>Current Complaint: {complaint}</p>
        </div>
    )
}

export default InputComponent
`

export const complexOnChangeWithHandlerStateAndTypeScript: string = `
import React, { useState } from 'react';

type FormFields = {
  name: string;
  age: string;
  email: string;
  phone: string;
  agreeToTerms: boolean;
}

const ComplexForm: React.FC = () => {
    const [formData, setFormData] = useState<FormFields>({
      name: '',
      age:'',
      email: '',
      phone: '',
      agreeToTerms: false,
    });

// Partial is a TypeScript utility type that, when applied to a type, makes all properties
// of that type optional. Partial allos each field to be undefined, so starting with the 
// initial state set to be an empty object is valid.
    
    const [errors, setErrors] = useState<Partial<FormFields>>({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value, type, checked } = event.target;
      
      const updatedValue = type === 'checkbox' ? checked : value;

      setFormData((prevData) => ({
        ...prevData,
        [name]: updateValue,
      }));

      if (name === 'age' && isNan(Number(value))) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: '',
        }));
      }

      if (name === 'email' && !value.includes('@')) {
        setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email address',
        }));
      }
    };

    return (
        <form>
          <div>
            <label>Name:</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span>{errors.name}</span>}
          </div>

          <div>
            <label>Age:</label>
            <input
              type='text'
              name='age'
              value={formData.age}
              onChange={handleChange}
            />
            {errors.age && <span>{errors.email}</span>}
          </div>

          <div>
            <label>Phone:</label>
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span>{errors.phone}</span>}
          </div>

          <div>
            <label>
              <input
                type='checkbox'
                name='agreeToTerms'
                checked={formData.agreeToTerms}
                onChange={handleChange}
              />
              I agree to the terms and conditions.
            </label>
          </div>

          <button type='submit'>Submit</button>
        </form>
    );
};

export default ComplexForm;
`