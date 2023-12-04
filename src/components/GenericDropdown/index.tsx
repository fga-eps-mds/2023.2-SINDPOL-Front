import React from "react"
import {
  Select,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react"

interface DropdownOption {
  value: string
  label: string
}

interface DropdownProps {
  id?: string
  name: string
  value: string
  options: DropdownOption[]
  onChange: (name: string, value: string) => void
  label?: string
  helperText?: string
  isRequired?: boolean
  sxFormControl?: any
  sxSelect?: any
}

export default function GenericDropdown(props: DropdownProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    props.onChange(props.name, value)
  }

  return (
    <FormControl
      {...(props.id && { id: props.id })}
      isRequired={props.isRequired}
      {...(props.sxFormControl && { sx: props.sxFormControl })}
    >
      {props.label && <FormLabel margin={"0px"}>{props.label}</FormLabel>}
      <Select
        {...props}
        value={props.value}
        onChange={handleChange}
        {...(props.sxSelect && { sx: props.sxSelect })}
      >
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </FormControl>
  )
}
