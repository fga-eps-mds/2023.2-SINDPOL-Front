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
    const [dataList1, setDataList1] = useState<{ id: string; name: string }[]>([]);

    const Opcoes = ['Novo', 'Antigo', 'Matrícula'];


    const handleSelecao = (opcao: string) => {
        console.log(`Opção selecionada na página: ${opcao}`);
    };

    const handleDisableUser = async (userId: string) => {
        try {
            const response = await fetch(`http://localhost:8001/api/users/${userId}/disable`, {
                method: 'PATCH',
            });

            if (response.ok) {
                console.log('User disabled successfully');
            } else {
                console.error('Failed to disable user:', response.statusText);
            }
        } catch (error) {
            console.error('Error disabling user:', error);
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8001/api/users/');
                const data = await response.json();
                setDataList(data);
                setDataList1(data);
                console.log(data);

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
                        {dataList1.map(user => (
                            <GenericButton
                                id="associates-page-box-header-import-button"
                                text="Aprovar cadastro"
                                onClick={() => handleDisableUser(user.id)} // Passe o ID do usuário para desabilitar
                                sx={{ marginX: '12px', borderRadius: '50px' }}
                            />
                        ))}
                        <GenericButton
                            id="associates-page-box-header-import-button"
                            text="Desaprovar cadastro"
                            onClick={() => handleDisableUser('user_id_here')} // Passe o ID do usuário para desabilitar
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
