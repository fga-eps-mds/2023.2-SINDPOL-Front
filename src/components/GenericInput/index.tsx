import React from "react"
import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"

interface GenericInputProps {
  id?: string
  type: string
  name: string
  value: string
  onChange: any
  hasRightElement?: boolean
  rightElement?: any
  label?: string
  placeholder?: string
  error: Error
  helperText?: string
  sxFormControl?: any
  sxInput?: any
  isRequired?: boolean
  mask?: (value: string) => string
}

interface Error {
  hasError: boolean
  message: string
}

export default function GenericInput(props: GenericInputProps) {
  
  const applyMask = (value: string, maskFunction?: (value: string) => string) => {
    return maskFunction ? maskFunction(value) : value;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    const maskedValue = applyMask(value, props.mask);
    
    props.onChange(props.name, maskedValue);
  };
  
  return (
    <>
      <FormControl
        {...(props.id && { id: props.id })}
        isInvalid={props.error.hasError ? true : false}
        isRequired={props.isRequired}
        {...(props.sxFormControl && { sx: props.sxFormControl })}
      >
        {props.label && <FormLabel margin={"0px"}>{props.label}</FormLabel>}
        <Input {...props} {...(props.sxInput && { sx: props.sxInput })}
          value={applyMask(props.value, props.mask)} // Aplica a máscara condicionalmente
          onChange={handleChange}
        />
        {!props.error.hasError
          ? <FormHelperText>{props.helperText}</FormHelperText>
          : <FormErrorMessage margin={"0px"}>{props.error.message}</FormErrorMessage>
        }
      </FormControl>
    </>
  )
}
