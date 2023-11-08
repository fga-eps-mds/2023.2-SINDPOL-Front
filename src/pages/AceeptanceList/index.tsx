import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
    Box,
    Divider,
    Heading,
    IconButton,
    Text,
} from '@chakra-ui/react';
import { styles } from './styles';
import GenericInput from '../../components/GenericInput';
import GenericButton from '../../components/GenericButton';
import { fetchAssociates, selectAssociates } from '../../app/store/associate/associateSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { IconEye, IconMenu2 } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import AceeptanceList from '../../components/AceeptanceList';



export default function Associates(props: any) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const associates = useAppSelector(selectAssociates);
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        // Função assíncrona para buscar e ler o arquivo JSON
        const fetchData = async () => {
            try {
                const response = await fetch('data.json'); // Substitua pelo caminho correto para o arquivo JSON
                const data = await response.json();
                setDataList(data);
            } catch (error) {
                console.error('Erro ao buscar dados do arquivo JSON:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        dispatch(fetchAssociates());
    });

    return (
        <Box
            id="asssociates-page-container"
            sx={styles.boxContainer}
        >
            <Box
                id="associates-page-box"
                sx={styles.box}
            >
                <Box
                    id="associates-page-box-header"
                    sx={styles.boxHeader}
                >
                    <Box 
                        sx={styles.boxHeaderTop}
                    >
                        <Heading
                            id="associates-page-box-header-title"
                        >
                            Aprovar cadastro de sindicalizados
                        </Heading>
                        <GenericInput
                            id="associates-page-box-header-input"
                            placeholder="Pesquisar por Nome ou Mátricula"
                            type="text"
                            name="search"
                            value=""
                            onChange={() => { }}
                        />
                    </Box>
                    <Box 
                        sx={styles.boxHeaderBotton}
                    >
                        <GenericButton
                            id="associates-page-box-header-add-button"
                            text="Cadastrar"
                            onClick={() => { navigate("/filiation") }}
                            sx={{ marginX: '12px' }}
                        />
                        <GenericButton
                            id="associates-page-box-header-import-button"
                            text="Importar"
                            onClick={() => { }}
                            sx={{ marginX: '12px' }}
                        />
                    </Box>
                </Box>
                <Box
                    id="associates-page-box-body"
                    sx={styles.boxList}
                >
                    {/* Tabela de associados */}
                    <AceeptanceList data={dataList} />

                </Box>
                <Box
                    id="associates-page-box-footer"
                >
                    {/* Botões de paginação */}
                </Box>
            </Box>
        </Box>
    );
}