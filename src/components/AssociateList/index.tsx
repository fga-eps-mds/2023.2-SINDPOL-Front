import { styles } from './styles';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { IconEye, IconEyeOff, IconDotsVertical, IconChevronDown, IconArrowNarrowRight, IconMinusVertical} from '@tabler/icons-react';
import { IconButton } from '@chakra-ui/react'

export default function MyTable(props: any) {
    return (
      <TableContainer>
        <Table variant="unstyled"
            sx={styles.table}
        >
          <Thead>
            <Tr>
              <Td><span style={{ color: 'black', fontWeight: 'bold', fontSize:'20px'}}>Sindicalizados</span></Td>
              <Td><><br /></></Td>
              <Td><span style={{ color: 'Dark Gray', fontWeight: 'inter', fontSize:'14px'}}>Ordenar por </span>
              <span style={{ color: 'Dark Gray', fontWeight: 'bold', fontSize:'14px'}}>Mais novos</span>
              <IconButton aria-label='Search database' icon={<IconChevronDown/>} /></Td>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
            <Td><span style={{ color: 'black', fontWeight: 'bold', fontSize:'14px'}}>Nome</span><br/>
            <span style={{ color: 'black', fontSize:'12px'}}>Matrícula</span></Td>
            <Td><><br /></></Td>
            <Td><><br /></></Td>
            <Td><><br /></></Td>
            <Td><><br /></></Td>
            <Td><><br /></></Td>
            <IconButton aria-label='Search database' icon={<IconEye/>} />
            <IconButton aria-label='Search database' icon={<IconMinusVertical/>}/>
            <IconButton aria-label='Search database' icon={<IconDotsVertical/>} />
            </Tr>
            <Tr>
            <Td><span style={{ color: 'black', fontWeight: 'bold', fontSize:'14px'}}>
            Nome</span><br/><span style={{ color: 'black', fontSize:'12px'}}>Matrícula</span></Td>
            <span style={{ color: '#734A00'}}></span>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
            <Td><span style={{ color: '#734A00', fontWeight: 'inter', fontSize:'14px'}}>
            Todos os Sindicalizados<IconButton aria-label='Search database' icon={<IconArrowNarrowRight/>}/></span></Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      
    );
}