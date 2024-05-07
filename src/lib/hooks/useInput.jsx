import { useState } from 'react';

function useInput(defaultValue = '', validate = () => {}) {
    const [value, setValue] = useState(defaultValue);
    const [error, setError] = useState('');

    const onValueChangeHandler = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        setError(validate(newValue));
    };

    return [value, onValueChangeHandler, error];
}

export default useInput;
