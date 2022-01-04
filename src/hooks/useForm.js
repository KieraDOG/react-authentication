import { useMemo, useState } from 'react';

const useForm = (fields) => {
  const initialTouched = fields.reduce((acc, cur) => ({
    ...acc,
    [cur]: false,
  }), {});

  const [touched, setTouched] = useState(initialTouched);

  const initialData = fields.reduce((acc, cur) => ({
    ...acc,
    [cur.key]: '',
  }), {});

  const [data, setData] = useState(initialData);

  const validate = () => Object
    .keys(fields)
    .every((key) => {
      const field = fields[key];

      return !field.getErrorMessage(data);
    });

  const onChange = (key) => (event) => setData((prevData) => ({
    ...prevData,
    [key]: event.target.value,
  }));

  const onBlur = (key) => () => setTouched((prevTouched) => ({
    ...prevTouched,
    [key]: true,
  }));

  return {
    data,
    touched,
    validate,
    onChange,
    onBlur,
  };
};

export default useForm;
