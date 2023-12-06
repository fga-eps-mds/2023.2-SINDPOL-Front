import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Checkbox } from '@chakra-ui/react';
import theme from "../../theme/theme";
import { IconEye, IconMinusVertical } from '@tabler/icons-react';
import { IconButton } from '@chakra-ui/react';
import { styles } from "./styles";

interface DataItem {
    id: number;
    fullName: string;
    cpf: string;
    registration: number;
    birthDate: string;
    status: string;
}

interface DataTableProps {
    data: DataItem[];
    selectedIds: string[]; // Adicionando a propriedade de IDs selecionados
    onCheckboxChange: (id: string) => void; // Função para manipular a seleção
  }

export default function AceeptanceList(props: DataTableProps ) {

    return (
        <Table variant="unstyled"
            sx={styles.table}>
            <Tbody fontFamily={theme.fonts.body}>
                {props.data.map((item) => (
                    <Tr key={item.id}
                        _hover={{ bg: "#FFF7E8", color: "#734A00" }}

                        borderRadius={'30px'}
                    >
                        <Td>
                            <Checkbox
                                iconColor='black'
                                border='black'
                                variant="circular"
                                style={{ borderRadius: '16px' }} // Define o raio das bordas
                                onChange={() => props.onCheckboxChange(item.id.toString())} // Chamar a função no componente principal
                                />
                        </Td>
                        <Td>
                            <span style={{ color: 'black', fontSize: '14px', fontWeight: 'bold' }}>{item.fullName}</span><br />
                            <span style={{ color: 'gray', fontSize: '12px' }}>{item.cpf}</span>
                            <span style={{ color: 'gray', fontSize: '12px' }}> - </span>
                            <span style={{ color: 'gray', fontSize: '12px' }}>{item.registration}</span>
                            <span style={{ color: 'gray', fontSize: '12px' }}> - </span>
                            <span style={{ color: 'gray', fontSize: '12px' }}>{item.birthDate}</span>
                        </Td>
                        <td style={{ textAlign: 'right' }}>
                            <span style={{ color: 'black', fontSize: '14px' }}>{item.status}</span>
                            <IconButton aria-label='Search database' icon={<IconMinusVertical />} color={'gray'} />
                        </td>
                        <td>
                            <IconButton
                                aria-label="Ver sindicalizado"
                                icon={<IconEye/>}
                                onClick={() => { }}
                                color={"black"}
                            />
                        </td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );

};
