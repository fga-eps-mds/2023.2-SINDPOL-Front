import React, { useEffect } from "react"
import { Box, Divider, Heading, IconButton, Text } from "@chakra-ui/react"
import { styles } from "./styles"
import GenericInput from "../../components/GenericInput"
import GenericButton from "../../components/GenericButton"
import httpClient from "../../app/api/HttpClient"

import {
    fetchAssociates,
    selectAssociates,
} from "../../app/store/associate/associateSlice"
import { useAppDispatch, useAppSelector } from "../../utils/hooks"
import { IconEye, IconMenu2, IconDownload } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"
import axios from 'axios';


export default function Associates(props: any) {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [associates, setAssociates] = React.useState<any>([])



    useEffect(() => {
        dispatch(fetchAssociates()).then((res) => {
            setAssociates(res.payload)
        })
    }, [])
    const generateDoc = async (associateId: string) => {
        console.log("ID do associado:", associateId);
        try {
            const response = await httpClient.get(`/api/documents/affiliation/${associateId}`, {
                responseType: 'arraybuffer',
            });

            const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });

            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Declaração_de_vínculo.docx'); // Defina o nome do arquivo aqui
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            console.error('Erro ao buscar o documento:', error);
        }
    }


    return (
        <Box id="asssociates-page-container" sx={styles.boxContainer}>
            <Box id="associates-page-box" sx={styles.box}>
                <Box id="associates-page-box-header" sx={styles.boxHeader}>
                    <Heading id="associates-page-box-header-title">
                        Sindicalizados
                    </Heading>
                    <GenericInput
                        id="associates-page-box-header-input"
                        placeholder="Pesquisar por Nome ou Mátricula"
                        type="text"
                        name="search"
                        value=""
                        onChange={() => { }}
                        sxFormControl={{ marginX: "12px", maxWidth: "600px" }}
                    />
                </Box>
                <Box id="associates-page-box-body" sx={styles.boxList}>
                    {/* Tabela de associados */}
                    {associates && associates.length > 0 && associates.map((associate: any) => {
                        return (
                            <>
                                <Box sx={styles.boxItem}>
                                    <Box>
                                        <Text align={"left"} fontWeight={'bold'}>{associate.fullName}</Text>
                                        <Text align={"left"}>{associate.registration} - {associate.cpf} - {associate.birthDate}</Text>
                                    </Box>
                                    <Box display={"flex"}>
                                        <IconButton
                                            aria-label="Dowload"
                                            icon={<IconDownload size={20} />}
                                            onClick={() => { generateDoc(associate.id) }}
                                            color={"#734A00"}
                                        />
                                    </Box>
                                </Box>
                            </>
                        )
                    })}
                </Box>
                <Box id="associates-page-box-footer">{/* Botões de paginação */}</Box>
            </Box>
        </Box>
    )
}
