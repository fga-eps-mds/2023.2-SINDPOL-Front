import React from 'react';
import {
    FormControl,
    Input,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    InputRightElement,
    IconButton,
    InputGroup,
    Tooltip,
} from '@chakra-ui/react';
import EyeClose from '../../assets/svg/EyeCloseSvg';
import EyeOpen from '../../assets/svg/EyeOpenSvg';

interface GenericInputProps {
    type: string;
    name: string;
    value: string;
    onChange: any;
    hasRightElement?: boolean;
    rightElement?: any;
    label?: string;
    placeholder?: string;
    error?: Error;
    helperText?: string;

    sxFormControl?: any;
    sxInput?: any;
}

interface Error {
    error: boolean;
    message: string;
}
export default function PasswordInput(props: any) {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <>
            <FormControl
                id={props.name}
                isInvalid={props.error ? true : false}
                maxWidth={'455px'}
                {...props.sxFormControl && { sx: props.sxFormControl }}
            >
                {props.label && <FormLabel>{props.label}</FormLabel>}
                <InputGroup>
                    <Input
                        {...props}
                        type={show ? 'text' : 'password'}
                        {...props.sxInput && { sx: props.sxInput }}
                    />
                    <InputRightElement width="4.5rem">
                        <Tooltip label={show ? 'Esconder senha' : 'Mostrar senha'} placement='top'>
                            <IconButton
                                aria-label='show password'
                                fontSize='20px'
                                icon={show ? <EyeClose /> : <EyeOpen />}
                                onClick={handleClick}
                                bg={'transparent'}
                                _hover={{ bg: 'transparent' }}
                            />
                        </Tooltip>
                    </InputRightElement>
                </InputGroup>
                {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
                {props.error && <FormErrorMessage>{props.error?.message}</FormErrorMessage>}
            </FormControl>
        </>
    );
}