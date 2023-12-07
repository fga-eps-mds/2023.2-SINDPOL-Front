import React, { useState } from 'react';
import AssociateList from '../../components/AssociateList';
import { styles } from "./styles"
import { Box, Heading } from "@chakra-ui/react"
import MenuOrdenacao from '../../components/GenericMenuOptions';

export default function Home() {
    const Opcoes = ['Novo', 'Antigo'];
    const [associates, setAssociates] = React.useState<any>([])
    
    
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

    return (
        <Box id="asssociates-page-container" sx={styles.boxContainer}>
            <Box id="associates-page-box" sx={styles.box}>
                <Box id="associates-page-box-header" sx={styles.boxHeader}>
                    <Heading id="associates-page-box-header-title" sx={styles.boxHeaderTitle}> Sindicalizados</Heading>
                </Box>
                <AssociateList />
            </Box>
        </Box>
    );
}