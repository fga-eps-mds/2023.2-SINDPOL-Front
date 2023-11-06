import React, { useEffect } from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import { styles } from './styles';
import { fetchAssociates, selectAssociates } from '../../app/store/associate/associateSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { useNavigate } from 'react-router-dom';

export default function Associates(props: any) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const associates = useAppSelector(selectAssociates);

    useEffect(() => {
        dispatch(fetchAssociates());
    }, [dispatch]);

    return (
        <Box id="asssociates-page-container" sx={styles.boxContainer}>
            <Box id="associates-page-box" sx={{ ...styles.box, padding: '20px', backgroundColor: 'transparent' }}>
                <VStack align="center" spacing={4} width="100%">
                    <Box width="100%">
                        <Heading textAlign="center" color="black">
                            Gerar Documento
                        </Heading>
                    </Box>
                    <Box width="100%" display="flex" flexDirection="column" sx={{ paddingLeft: '20px', paddingRight: '20px' }}>
                        <Box
                            id="associates-page-box-header-add-button"
                            onClick={() => {
                                navigate('/declaration');
                            }}
                            width="100%"
                            height="60px"
                            fontSize="20px"
                            justifyContent="flex-start"
                            backgroundColor="transparent"
                            color="black"
                            border="1px solid #ED8936"
                            borderRadius="md"
                            padding="10px"
                            marginTop="10px"
                            display="flex"
                            alignItems="center"
                        >
                            Declaração de Vínculo
                        </Box>
                        <Box
                            id="associates-page-box-header-import-button"
                            onClick={() => {
                                navigate('/card');
                            }}
                            width="100%"
                            height="60px"
                            fontSize="20px"
                            justifyContent="flex-start"
                            backgroundColor="transparent"
                            color="black"
                            border="1px solid #ED8936"
                            borderRadius="md"
                            padding="10px"
                            marginTop="10px"
                            display="flex"
                            alignItems="center"
                        >
                            Gerar Carteirinha Digital do Sindicalizado
                        </Box>
                    </Box>
                </VStack>
            </Box>
        </Box>
    );
}
