import React from "react"
import { Button, ButtonProps } from "@chakra-ui/react"
import theme from "../../theme/theme"

interface GenericButtonProps extends ButtonProps {
  size?: string
  variant?: string
  text: string
  onClick?: any
  isDisabled?: boolean
}

export default function GenericButton(props: GenericButtonProps) {
  return (
    <>
      <Button {...props} backgroundColor={theme.colors.orange}>
        {props.text}
      </Button>
    </>
  )
}
