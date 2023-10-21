import {
    Box,
    Image,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import GenericInput from '../../components/GenericInput';
import { styles } from './styles';
import GenericButton from '../../components/GenericButton';

export default function Email(props: any) {
    const [emailForPass,setEmailForPass] = React.useState('');

    return (
        <>
            <Box
                id={'container-email'}
                sx={styles.containerEmail}
            >
                <Box
                    id={'email-box'}
                    sx={styles.emailBox}
                >
                    <Image 
                        src='src/assets/logo.png'
                        width={'470px'}
                        marginBottom={'30px'}
                    />
                    <Text
                        fontSize="30px"
                        fontWeight="Regular"
                        color="black"
                    >
                        Recuperação de senha
                    </Text>
                    <GenericInput
                        type={'string'}
                        name={'email'}
                        value={emailForPass}
                        onChange={(e: { target: { value: any; }; }) => setEmailForPass(e.target.value)}
                        label='Email'
                        sxFormControl={{ marginTop: '20px' }}
                    />
                    <GenericButton
                        text='Enviar recuperação de senha'
                        marginTop={'150px'}
                    />
                </Box>
            </Box>
        </>
    );
}