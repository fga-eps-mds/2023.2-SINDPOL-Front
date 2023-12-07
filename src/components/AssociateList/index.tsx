import React, { useEffect } from "react"
import { styles } from './styles';
import { Table, Tbody, Tfoot, Tr, Td, TableContainer } from '@chakra-ui/react'
import { IconEye } from '@tabler/icons-react';
import { IconButton } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../utils/hooks"
import { fetchAssociates } from "../../app/store/associate/associateSlice"

export default function MyTable(props: any) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [associates, setAssociates] = React.useState<any>([])

  useEffect(() => {
    dispatch(fetchAssociates()).then((res) => {
      setAssociates(res.payload)
    })
  }, [])

  const handleEyeClick = (associateId: string) => {
    console.log("ID do associado:", associateId);
    navigate(`/update/${associateId}`);
  }

  return (
    <TableContainer>
      <Table variant="unstyled">
        {associates.map((associate: any) => {
          return (
            <>
              <Tbody>
                <Tr>
                  <Td>
                    <span style={{ color: 'black', fontWeight: 'bold', fontSize: '14px' }}>{associate.fullName}</span>
                    <br />
                    <span style={{ color: 'black', fontSize: '12px' }}>CPF: {associate.cpf}</span>
                  </Td>
                  <IconButton 
                    aria-label='Search database' 
                    icon={<IconEye />} 
                    onClick={() => { handleEyeClick(associate.id) }}
                    />
                </Tr>
              </Tbody>
            </>
          )
        })}
      </Table>
    </TableContainer>

  );
}