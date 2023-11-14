import React, { useEffect, useState } from 'react';
import {
    Box,
    Heading,
} from '@chakra-ui/react';
import { styles } from './styles';
import GenericInput from '../../components/GenericInput';
import GenericButton from '../../components/GenericButton';
import { fetchAssociates, selectAssociates } from '../../app/store/associate/associateSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { useNavigate } from 'react-router-dom';
import AceeptanceList from '../../components/AceeptanceList';
import MenuOrdenacao from '../../components/GenericMenuOptions';



export default function Associates(props: any) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const associates = useAppSelector(selectAssociates);
    const [dataList, setDataList] = useState([]);
    const Opcoes = ['Novo', 'Antigo', 'Matrícula'];
    

    const handleSelecao = (opcao: string) => {
        console.log(`Opção selecionada na página: ${opcao}`);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('data.json'); 
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
    }, [dispatch]); 
    

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
                            sx={styles.boxHeaderTitle}
                        >
                            Aprovar cadastro de sindicalizados
                        </Heading>
                        <GenericInput
                            id="associates-page-box-header-input"
                            placeholder="Pesquisar por Nome ou Matrícula"
                            type="text"
                            name="search"
                            value=""
                            sxInput={{ border: 'none', borderRadius: '50px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}
                            onChange={() => { }}
                        />
                        <MenuOrdenacao opcoes={Opcoes} onSelecao={handleSelecao} />
                    </Box>
                    <Box
                        sx={styles.boxHeaderBotton}
                    >
                        <GenericButton
                            id="associates-page-box-header-add-button"
                            text="Aprovar cadastro"
                            onClick={() => {  }}
                            sx={{ marginX: '12px', borderRadius: '50px' }}
                        />
                        <GenericButton
                            id="associates-page-box-header-import-button"
                            text="Desaprovar cadastro"
                            onClick={() => { }}
                            sx={{ marginX: '12px', borderRadius: '50px' }}
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
