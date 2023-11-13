import React, { useEffect, useState } from 'react';
import {
    Box,
    Divider,
    Heading,
    IconButton,
    Icon,
    Text,
    InputLeftElement,
    Button, Menu, MenuButton, MenuList, MenuItem
} from '@chakra-ui/react';
import { styles } from './styles';
import GenericInput from '../../components/GenericInput';
import GenericButton from '../../components/GenericButton';
import { fetchAssociates, selectAssociates } from '../../app/store/associate/associateSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { IconEye, IconMenu2, IconSearch } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import AceeptanceList from '../../components/AceeptanceList';

export default function Associates(props: any) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const associates = useAppSelector(selectAssociates);
    const [dataList, setDataList] = useState([]);
    const [opcaoSelecionada, setOpcaoSelecionada] = useState<string | null>(null); // Adicionando a declaração inicial

    const Opcoes = ['Novo', 'Antigo', 'Matrícula'];

    const handleOpcaoSelecionada = (opcao: string) => {
        setOpcaoSelecionada(opcao);
        // Adicione aqui a lógica que deseja executar quando uma opção for selecionada
        console.log(`Opção selecionada: ${opcao}`);
    };

    useEffect(() => {
        // Exemplo de uso da opcaoSelecionada, você pode adicionar sua lógica aqui
        if (opcaoSelecionada) {
            console.log(`Realizando alguma ação com a opção selecionada: ${opcaoSelecionada}`);
        }
    }, [opcaoSelecionada]);

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
    }, [dispatch]); // Adicionando a dependência 'dispatch' ao useEffect

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

                        <Menu>
                            <MenuButton as={Button} colorScheme="blue">
                                {opcaoSelecionada ? `Ordenar por ${opcaoSelecionada}` : 'Ordenar por'}
                            </MenuButton>
                            <MenuList>
                                {Opcoes.map((opcao) => (
                                    <MenuItem key={opcao} onClick={() => handleOpcaoSelecionada(opcao)}>
                                        {opcao}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>


                    </Box>
                    <Box
                        sx={styles.boxHeaderBotton}
                    >
                        <GenericButton
                            id="associates-page-box-header-add-button"
                            text="Aprovar cadastro"
                            onClick={() => { navigate("/filiation") }}
                            sx={{ marginX: '12px' }}
                        />
                        <GenericButton
                            id="associates-page-box-header-import-button"
                            text="Desaprovar cadastro"
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
