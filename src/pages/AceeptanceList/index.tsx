import React, { useEffect, useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { styles } from './styles';
import GenericInput from '../../components/GenericInput';
import GenericButton from '../../components/GenericButton';
import { fetchAssociates, disableAssociateID, enableAssociateID } from '../../app/store/associate/associateSlice';
import { useAppDispatch } from '../../utils/hooks';
import { useNavigate } from 'react-router-dom';
import AceeptanceList from '../../components/AceeptanceList';
import MenuOrdenacao from '../../components/GenericMenuOptions';

export default function Aceeptance(props: any) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [associates, setAssociates] = React.useState<any>([])
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const Opcoes = ['Novo', 'Antigo'];
    const [searchText, setSearchText] = useState('');


    const handleSelecao = (opcao: string) => {
        console.log(`Opção selecionada na página: ${opcao}`);

        let sortedAssociates = [...associates];

        if (opcao === 'Novo') {
            sortedAssociates.sort((a: any, b: any) => {
                const dateA = new Date(a.created_at).getTime();
                const dateB = new Date(b.created_at).getTime();
                return dateB - dateA;
            });
        } else if (opcao === 'Antigo') {
            sortedAssociates.sort((a: any, b: any) => {
                const dateA = new Date(a.created_at).getTime();
                const dateB = new Date(b.created_at).getTime();
                return dateA - dateB;
            });
        }

        setAssociates(sortedAssociates);
    };

    const handleCheckboxChange = (id: string) => {
        const updatedIds = selectedIds.includes(id)
            ? selectedIds.filter(selectedId => selectedId !== id)
            : [...selectedIds, id];
        setSelectedIds(updatedIds);
        console.log(updatedIds)

        return { selectedIds, handleCheckboxChange };
    };

    const handleEnableUsers = async () => {
        try {
            for (const userId of selectedIds) {
                const resultAction = await dispatch(enableAssociateID(userId));
                const { error } = resultAction.payload;

                if (!error) {
                    console.log(`User with ID ${userId} enabled successfully`);
                } else {
                    console.error(`Failed to enable user with ID ${userId}:`, error);
                }
            }
            reFetchList()

        } catch (error) {
            console.error('Error enabling users:', error);
        }
    };

    const handleDisableUsers = async () => {
        try {
            for (const userId of selectedIds) {
                const resultAction = await dispatch(disableAssociateID(userId));
                const { error } = resultAction.payload;
                if (!error) {
                    console.log(`User with ID ${userId} enabled successfully`);
                } else {
                    console.error(`Failed to enable user with ID ${userId}:`, error);
                }
            }
            reFetchList()

        } catch (error) {
            console.error('Error enabling users:', error);
        }
    };

    const filteredAssociates = associates.filter((associate: any) =>
        associate.fullName.toLowerCase().includes(searchText.toLowerCase())
    );

    const reFetchList = () => {
        dispatch(fetchAssociates()).then((res) => {
            setAssociates(res.payload)
        })
    }

    useEffect(() => {
        dispatch(fetchAssociates()).then((res) => {
            setAssociates(res.payload)
        })
    }, [])

    return (
        <Box id="asssociates-page-container" sx={styles.boxContainer}>
            <Box id="associates-page-box" sx={styles.box}>
                <Box id="associates-page-box-header" sx={styles.boxHeader}>
                    <Box sx={styles.boxHeaderTop}>
                        <Heading id="associates-page-box-header-title" sx={styles.boxHeaderTitle}> Aprovar cadastro de sindicalizados </Heading>
                    </Box>
                    <Box sx={styles.boxHeaderMiddle}>
                        <GenericInput
                            id="associates-page-box-header-input"
                            placeholder="Pesquisar por Nome ou Matrícula"
                            type={"string"}
                            name={"search"}
                            value={searchText}
                            sxInput={{ border: 'none', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', width: '400px' }}
                            onChange={(name: any, value: any) =>
                                setSearchText(value)}
                            error={{
                                hasError: false,
                                message: ""
                            }}
                        />
                        <MenuOrdenacao opcoes={Opcoes} onSelecao={handleSelecao} />
                    </Box>
                    <Box sx={styles.boxHeaderBotton}>
                        <GenericButton
                            id="associates-page-box-header-import-button"
                            text="Aprovar cadastro"
                            onClick={handleEnableUsers} // Chama a função para desativar os usuários selecionados
                            sx={{ marginX: '12px', borderRadius: '50px' }}
                        />
                        <GenericButton
                            id="associates-page-box-header-import-button"
                            text="Desaprovar cadastro"
                            onClick={handleDisableUsers} // Chama a função para desativar os usuários selecionados
                            sx={{ marginX: '12px', borderRadius: '50px' }}
                        />
                    </Box>
                </Box>
                <Box id="associates-page-box-body" sx={styles.boxList}>
                    {/* Tabela de associados */}
                    <AceeptanceList data={filteredAssociates} selectedIds={selectedIds} onCheckboxChange={handleCheckboxChange} />
                </Box>
                <Box id="associates-page-box-footer">
                    {/* Botões de paginação */}
                </Box>
            </Box>
        </Box>
    );
}
