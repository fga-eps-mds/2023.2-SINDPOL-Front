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
  error?: Error
  helperText?: string
  sxFormControl?: any
  sxInput?: any
}

interface Error {
  hasError: boolean
  message: string
}

export default function GenericInput(props: GenericInputProps) {
  return (
    <>
      <FormControl
        {...(props.id && { id: props.id })}
        isInvalid={props.error?.hasError ? true : false}
        {...(props.sxFormControl && { sx: props.sxFormControl })}
      >
        {props.label && <FormLabel margin={"0px"}>{props.label}</FormLabel>}
        <Input {...props} {...(props.sxInput && { sx: props.sxInput })} />
        {props.helperText && (
          <FormHelperText>{props.helperText}</FormHelperText>
        )}
        {props.error && (
          <FormErrorMessage>{props.error?.message}</FormErrorMessage>
        )}
      </FormControl>
    </>
  )
}
