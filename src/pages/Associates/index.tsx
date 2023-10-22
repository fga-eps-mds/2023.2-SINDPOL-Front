import React from 'react';
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
import { selectAssociates } from '../../app/store/associate/associateSlice';
import { useAppSelector } from '../../utils/hooks';
import { IconBoxSeam, IconEye, IconMenu } from '@tabler/icons-react';

export default function Associates(props: any) {
    // cosnt associates = useAppSelector(selectAssociates);
    const associates  = [
        {
            id: '1',
            name: 'João da Silva',
        },
        {
            id: '2',
            name: 'Maria da Silva',
        },
        {
            id: '3',
            name: 'José da Silva',
        },
        {
            id: '4',
            name: 'João da Silva',
        },
        {
            id: '5',
            name: 'Maria da Silva',
        },
        {
            id: '6',
            name: 'José da Silva',
        },
        {
            id: '7',
            name: 'João da Silva',
        },
        {
            id: '8',
            name: 'Maria da Silva',
        },
        {
            id: '9',
            name: 'José da Silva',
        },
        {
            id: '10',
            name: 'João da Silva',
        },
        {
            id: '11',
            name: 'Maria da Silva',
        },
        {
            id: '12',
            name: 'José da Silva',
        },
        {
            id: '13',
            name: 'João da Silva',
        },
        {
            id: '14',
            name: 'Maria da Silva',
        },
        {
            id: '15',
            name: 'José da Silva',
        },
        {
            id: '16',
            name: 'João da Silva',
        },
        {
            id: '17',
            name: 'Maria da Silva',
        },
        {
            id: '18',
            name: 'José da Silva',
        },
        {
            id: '19',
            name: 'João da Silva',
        },
        {
            id: '20',
            name: 'Maria da Silva',
        },
        {
            id: '21',
            name: 'José da Silva',
        },
        {
            id: '22',
            name: 'João da Silva',
        },
        {
            id: '23',
            name: 'Maria da Silva',
        },
        {
            id: '24',
            name: 'José da Silva',
        },
        {
            id: '25',
            name: 'João da Silva',
        },
        {
            id: '26',
            name: 'Maria da Silva',
        },
        {
            id: '27',
            name: 'José da Silva',
        },
        {
            id: '28',
            name: 'João da Silva',
        },
        {
            id: '29',
            name: 'Maria da Silva',
        },
        {
            id: '30',
            name: 'José',
        },
    ];

    return (
        <>
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
                        <Heading
                            id="associates-page-box-header-title"
                        >
                            sindicalizados
                        </Heading>
                        <GenericInput
                            id="associates-page-box-header-input"
                            placeholder="Pesquisar por Nome ou Mátricula"
                            type="text"
                            name="search"
                            value=""
                            onChange={() => { }}
                        />
                        <Box >
                            <GenericButton
                                id="associates-page-box-header-add-button"
                                text="Cadastrar"
                                onClick={() => { }}
                                sx={{ marginX: '12px'}}
                            />
                            <GenericButton
                                id="associates-page-box-header-import-button"
                                text="Importar"
                                onClick={() => { }}
                                sx={{ marginX: '12px'}}
                            />
                        </Box>
                    </Box>
                    <Box
                        id="associates-page-box-body"
                        sx={styles.boxList}
                    >
                        {/* Tabela de associados */}
                        {associates.map((associate) => {
                            return (
                                <>
                                    <Box sx={styles.boxItem}>
                                        <Box>
                                            <Text
                                                align={'left'}
                                            >
                                                {associate.name}
                                            </Text>
                                            <Text
                                                align={'left'}
                                            >
                                                {associate.id}
                                            </Text>
                                        </Box>
                                        <Box display={'flex'}>
                                            <IconButton
                                                aria-label="Ver sindicalizado"
                                                icon={<IconEye />}
                                                onClick={() => { }}
                                                color={"#734A00"}
                                            />
                                            <Divider orientation="vertical" color={"#734A00"} />
                                            <IconButton
                                                aria-label="mais opções"
                                                icon={<IconMenu />}
                                                onClick={() => { }}
                                                color={"#734A00"}
                                            />
                                        </Box>
                                    </Box>
                                </>
                            );
                        })}
                    </Box>
                    <Box
                        id="associates-page-box-footer"
                    >
                        {/* Botões de paginação */}
                    </Box>
                </Box>
            </Box>
        </>
    );
}