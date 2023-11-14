import React, { useState, useEffect } from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem,Icon, border } from '@chakra-ui/react';
import { IconChevronDown } from '@tabler/icons-react';

interface MenuOrdenacaoProps {
  opcoes: string[];
  onSelecao: (opcao: string) => void;
}

const MenuOrdenacao: React.FC<MenuOrdenacaoProps> = ({ opcoes, onSelecao }) => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string | null>(null);

  useEffect(() => {
    if (opcaoSelecionada) {
      console.log(`Realizando alguma ação com a opção selecionada: ${opcaoSelecionada}`);
    }
  }, [opcaoSelecionada]);

  const handleOpcaoSelecionada = (opcao: string) => {
    setOpcaoSelecionada(opcao);
    onSelecao(opcao); 
  };

  return (
    <Menu>
      <MenuButton as={Button} colorScheme="blue">
        {opcaoSelecionada ? `Ordenar por ${opcaoSelecionada}` : 'Ordenar por'}
        <Icon as={IconChevronDown}/>

      </MenuButton>
      <MenuList style={{ border: 'none', backgroundColor:'white' }}>
        {opcoes.map((opcao) => (
          <MenuItem key={opcao} onClick={() => handleOpcaoSelecionada(opcao)}>
            {opcao}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuOrdenacao;
