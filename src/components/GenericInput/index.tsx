import React from "react"
import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"

interface GenericInputProps {
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
  error: boolean
  message: string
}

export default function GenericInput(props: GenericInputProps) {
  return (
    <>
      <FormControl
        id={props.name}
        isInvalid={props.error ? true : false}
        maxWidth={"455px"}
        {...(props.sxFormControl && { sx: props.sxFormControl })}
      >
        {props.label && <FormLabel margin={"0px"}>{props.label}</FormLabel>}
        <Input
          {...props}
          maxWidth={"455px"}
          maxHeight={"60px"}
          {...(props.sxInput && { sx: props.sxInput })}
        />
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
