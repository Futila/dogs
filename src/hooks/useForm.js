import { useState } from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

    message: "fill in a valid email.",
  },

  number: {
    regex: /^\d+$/,
    message: "Use numbers only",
  },
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const validate = (value) => {
    if (type === false) return true; //in case we dont want validate the field
    if (value.length === 0) {
      setError("fill in a value.");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    if (error) validate(value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
