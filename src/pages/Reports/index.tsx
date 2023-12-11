import React, { useState, useEffect } from 'react';
import { Box, VStack, Flex, IconButton } from '@chakra-ui/react';
import { styles } from './styles';
import { fetchAssociates, selectAssociates } from '../../app/store/associate/associateSlice';
import httpClient from "../../app/api/HttpClient"
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { useNavigate } from 'react-router-dom';
import { IconDownload } from '@tabler/icons-react';

export default function Reports(props: any) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [isReportSelected, setIsReportSelected] = useState(false);
    const [associates, setAssociates] = React.useState<any>([])

    
    useEffect(() => {
        dispatch(fetchAssociates()).then((res) => {
            setAssociates(res.payload)
        })
    }, [])
    const generateReport = async () => {
        try {
            const response = await httpClient.get(`/gestao/documents/report-users/`, {
                responseType: 'arraybuffer',
            });

            const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'report-users.xlsx'); // Defina o nome do arquivo aqui
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            console.error('Erro ao buscar o documento:', error);
        }
    }

    return (
        <Box id="asssociates-page-container" sx={styles.boxContainer}>
            <Box id="associates-page-box" sx={{ ...styles.box, padding: '20px', border: '1px solid white' }}>
                <VStack align="flex-start" spacing={4} width="100%">
                    <Box width="100%">
                        <h2 style={{ color: 'black', textAlign: 'center', fontSize: '24px', fontWeight:'bold' }}>
                            Gerar Relatórios
                        </h2>
                    </Box>
                    <Box width="100%" display="flex" flexDirection="column" sx={{ paddingLeft: '20px', paddingRight: '20px' }}>
                        <Flex
                            id="associates-page-box-header-add-button"
                            onClick={() => {
                                generateReport();
                            }}
                            width="100%"
                            height="60px"
                            fontSize="20px"
                            justifyContent="space-between"
                            alignItems="center"
                            textAlign="left"
                            color="black"
                            _hover={{ backgroundColor: '#FFF7E8' }}
                        >
                            Relatório de Associados
                            <Flex>
                                <IconButton
                                    aria-label="Dots Vertical"
                                    icon={<IconDownload size={20} />}
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
