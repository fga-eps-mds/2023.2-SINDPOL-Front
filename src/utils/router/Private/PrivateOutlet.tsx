import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../../../utils/hooks"
import Sidebar from "../../../components/Sidebar"
import { Box } from "@chakra-ui/react"

export default function PrivateOutlet() {
  const auth = useAuth()
  const location = useLocation()

  return (
    <Box>
      <Sidebar />
      <Outlet />
    </Box>
  )
}
