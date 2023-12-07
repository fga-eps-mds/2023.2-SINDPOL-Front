import theme from "../../theme/theme";
import React, { useState } from "react";
import { styles } from "./styles";
import { Table, Tbody, Tr, Td, Checkbox, IconButton } from '@chakra-ui/react';
import { IconEye, IconMinusVertical } from '@tabler/icons-react';
import { useAppDispatch } from "../../utils/hooks"
import { useNavigate } from "react-router-dom"

interface DataItem {
    id: string;
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

export default function AceeptanceList(props: DataTableProps) {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [associates, setAssociates] = React.useState<any>([])

    const handleEyeClick = (associateId: string) => {
        console.log("ID do associado:", associateId);
        navigate(`/update/${associateId}`);
    }


    return (
        <Table variant="unstyled"
            sx={styles.table}>
            <Tbody fontFamily={theme.fonts.body}>
                {props.data.map((item) => (
                    <Tr key={item.id} _hover={{ bg: "#FFF7E8", color: "#734A00" }} borderRadius={'30px'}>
                        <Td>
                            <Checkbox
                                iconColor='black'
                                border='black'
                                variant="circular"
                                style={{ borderRadius: '16px' }} // Define o raio das bordas
                                onChange={() => props.onCheckboxChange(item.id)} // Chamar a função no componente principal
                            />
                        </Td>
                        <Td>
                            <span style={{ color: 'black', fontSize: '16px', fontWeight: 'bold' }}>{item.fullName}</span><br />
                            <span style={{ color: 'gray', fontSize: '14px' }}>{item.cpf} - {item.registration} - {item.birthDate}</span>
                        </Td>
                        <td style={{ textAlign: 'right' }}>
                            <span style={{ color: 'black', fontSize: '14px' }}>{item.status}</span>
                            <IconButton aria-label='' icon={<IconMinusVertical />} color={'gray'} />
                        </td>
                        <td>
                            <IconButton
                                aria-label="Ver sindicalizado"
                                icon={<IconEye />}
                                onClick={() => { handleEyeClick(item.id) }}
                                color={"black"}
                            />
                        </td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );

};
