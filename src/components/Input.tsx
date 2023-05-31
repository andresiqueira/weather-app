import { InputHTMLAttributes } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { useState, useEffect } from "react";

import Error from "./Error"
import { FormProps } from "./Form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: keyof FormProps;
  type?: string;
  label: string;
  register: UseFormRegister<FormProps>;
  error: FieldError | undefined
}

const Input = ({ register, name, label, error, placeholder, type = "text", ...rest }: InputProps) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  useEffect(() => {
    setErrorMessage(error?.message)
    const intervalError = setInterval(() => setErrorMessage(undefined), 2000)
    return () => clearInterval(intervalError)
  }, [error])

  return (
    <div {...rest}>
      <label htmlFor={name}>{label}</label>
      <input
        className="p-2 mt-2 mb-1 border border-gray-200 rounded-md"
        type={type}
        id={name}
        placeholder={placeholder}
        {...register(name)}
      />
      
      {
        errorMessage && 
        <Error message={errorMessage} />
      }
    </div>
  )
}

export default Input