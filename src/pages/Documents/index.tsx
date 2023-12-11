import React, { useState, useEffect } from 'react';
import { Box, VStack, Flex, IconButton } from '@chakra-ui/react';
import { styles } from './styles';
import { fetchAssociates, selectAssociates } from '../../app/store/associate/associateSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { useNavigate } from 'react-router-dom';
import { IconDownload, IconMinusVertical, IconDotsVertical } from '@tabler/icons-react';

export default function Associates(props: any) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const associates = useAppSelector(selectAssociates);
    const [isDeclarationSelected, setIsDeclarationSelected] = useState(false);
    const [isCardSelected, setIsCardSelected] = useState(false);

    useEffect(() => {
        dispatch(fetchAssociates());
    }, [dispatch]);

    return (
        <Box id="asssociates-page-container" sx={styles.boxContainer}>
            <Box id="associates-page-box" sx={{ ...styles.box, padding: '20px', border: '1px solid white' }}>
                <VStack align="flex-start" spacing={4} width="100%">
                    <Box width="100%">
                        <h2 style={{ color: 'black', textAlign: 'center', fontSize: '24px' }}>
                            Gerar Documento
                        </h2>
                    </Box>
                    <Box width="100%" display="flex" flexDirection="column" sx={{ paddingLeft: '20px', paddingRight: '20px' }}>
                        <Flex
                            id="associates-page-box-header-add-button"
                            onClick={() => {
                                navigate('/declaration');
                                setIsDeclarationSelected(true);
                            }}
                            width="100%"
                            height="60px"
                            fontSize="20px"
                            justifyContent="space-between"
                            alignItems="center"
                            textAlign="left"
                            color="black"
                            sx={{ backgroundColor: isDeclarationSelected ? '#FFF7E8' : 'transparent' }}
                        >
                            Declaração de Vínculo
                            <Flex>
                                <IconButton
                                    aria-label="Dots Vertical"
                                    icon={<IconDotsVertical size={20} />}
                                    ml={2}
                                />
                            </Flex>
                        </Flex>
                        <Flex
                            id="associates-page-box-header-import-button"
                            onClick={() => {
                                navigate('/card');
                                setIsCardSelected(true);
                            }}
                            width="100%"
                            height="60px"
                            fontSize="20px"
                            justifyContent="space-between"
                            alignItems="center"
                            textAlign="left"
                            color="black"
                            sx={{ backgroundColor: isCardSelected ? '#FFF7E8' : 'transparent' }}
                        >
                            Gerar Carteirinha Digital do Sindicalizado
                            <Flex>
                                <IconButton
                                    aria-label="Download"
                                    icon={<IconDownload size={20} />}
                                    onClick={() => {
                                        setIsCardSelected(!isCardSelected);
                                    }}
                                />
                                <IconButton
                                    aria-label="Minus Vertical"
                                    icon={<IconMinusVertical size={20} />}
                                    ml={2}
                                />
                                <IconButton
                                    aria-label="Dots Vertical"
                                    icon={<IconDotsVertical size={20} />}
                                    ml={2}
                                />
                            </Flex>
                        </Flex>
                    </Box>
                </VStack>
            </Box>
        </Box>
    );
}
