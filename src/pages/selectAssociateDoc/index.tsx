import React, { useEffect, useState } from "react"
import { Box, Heading, IconButton, Text } from "@chakra-ui/react"
import { styles } from "./styles"
import GenericInput from "../../components/GenericInput"
import httpClient from "../../app/api/HttpClient"
import { fetchAssociates } from "../../app/store/associate/associateSlice"
import { useAppDispatch } from "../../utils/hooks"
import { IconDownload } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"


export default function SelectAssociateDoc(props: any) {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [associates, setAssociates] = React.useState<any>([])
    const [searchText, setSearchText] = useState('');




    useEffect(() => {
        dispatch(fetchAssociates()).then((res) => {
            setAssociates(res.payload)
        })
    }, [])
    const generateDoc = async (associateId: string) => {
        console.log("ID do associado:", associateId);
        try {
            const response = await httpClient.get(`/gestao/documents/affiliation/${associateId}`, {
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
    const filteredAssociates = associates.filter((associate: any) =>
        associate.fullName.toLowerCase().includes(searchText.toLowerCase()) || associate.registration.toLowerCase().includes(searchText.toLowerCase())
    );


    return (
        <Box id="asssociates-page-container" sx={styles.boxContainer}>
            <Box id="associates-page-box" sx={styles.box}>
                <Box id="associates-page-box-header" sx={styles.boxHeader}>
                    <Heading id="associates-page-box-header-title">
                        Sindicalizados
                    </Heading>
                    <GenericInput
                        id="associates-page-box-header-input"
                        placeholder="Pesquisar por Nome"
                        type={"string"}
                        name={"search"}
                        value={searchText}
                        error={{ hasError: false, message: "" }}
                        sxInput={{ border: 'none', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', width: '400px' }}
                        onChange={(name: any, value: any) =>
                            setSearchText(value)} />
                </Box>
                <Box id="associates-page-box-body" sx={styles.boxList}>
                    {/* Tabela de associados */}
                    {filteredAssociates && filteredAssociates.length > 0 ? (
                        filteredAssociates.map((associate: any) => {
                            if (associate.status === 'active') {
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
                            }
                            return null;
                        })
                    ) : (
                        <Text>Nenhum associado encontrado.</Text>
                    )}
                </Box>
                <Box id="associates-page-box-footer">{/* Botões de paginação */}</Box>
            </Box>
        </Box>
    )
}
