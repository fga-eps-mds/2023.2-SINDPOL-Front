import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks'
import Sidebar from '../../../components/Sidebar'
import { Box } from '@chakra-ui/react'

export default function AdminOutlet() {
  const auth = useAuth()
  const location = useLocation()

  return (
    <Box>
      <Sidebar />
      <Outlet />
    </Box>
  )

  // return auth.user ? (
  //   <>
  //     <Sidebar />
  //     <Outlet />
  //   </>
  // ) : (
  //   <Navigate to="/login" state={{ from: location }} />
  // )
}