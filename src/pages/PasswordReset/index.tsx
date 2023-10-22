import {
    Box,
    Image,
} from '@chakra-ui/react';
import React from 'react';
import PasswordInput from '../../components/PasswordInput';
import { styles } from './styles';
import GenericButton from '../../components/GenericButton';


export default function PasswordReset(props: any) {
    const [passNew, setpassNew] = React.useState('');
    const [confirmPassNew, setConfirmPassNew] = React.useState('');

    return (
        <>
            <Box
                id={'container-password'}
                sx={styles.containerPassword}
            >
                <Box
                    id={'password-box'}
                    sx={styles.passwordBox}
                >
                    <Image 
                        src='src/assets/logo.png'
                        width={'470px'}
                        marginBottom={'30px'}
                    />
                    <PasswordInput
                        type={'password'}
                        name={'passNew'}
                        value={passNew}
                        onChange={(e: { target: { value: any; }; }) => setpassNew(e.target.value)}
                        label='Senha nova'
                        sxFormControl={{ marginTop: '20px' }}
                    />
                    <PasswordInput
                        type={'password'}
                        name={'confirmPassNew'}
                        value={confirmPassNew}
                        onChange={(e: { target: { value: any; }; }) => setConfirmPassNew(e.target.value)}
                        label='Confirme a senha Nova'
                        sxFormControl={{ marginTop: '15px' }}
                    />
                    <GenericButton
                        text='Mudar senha'
                        marginTop={'20px'}
                    />
                </Box>
            </Box>
        </>
    );
}