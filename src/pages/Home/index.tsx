import React, { useState, useEffect } from 'react';
import AssociateList from '../../components/AssociateList';
import AceeptanceList from '../../components/AceeptanceList';
import data from '../../../data.json'; // Importe seu arquivo JSON aqui





export default function Home() {

    const [dataList, setDataList] = useState([]);

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

    return (
        <AceeptanceList data={dataList} />
    );
}