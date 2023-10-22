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
import { IconBoxSeam, IconEye, IconMenu2 } from '@tabler/icons-react';

export default function Associates(props: any) {
     const associates = useAppSelector(selectAssociates);

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
                    <Heading
                        id="associates-page-box-header-title"
                    >
                        Sindicalizados
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
                                            icon={<IconMenu2 />}
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
    );
}