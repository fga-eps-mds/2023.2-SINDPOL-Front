import React from "react"
import { styles } from "./styles"
import { Box, Icon, Image } from "@chakra-ui/react"
import {
  IconHome,
  IconUser,
  IconSettings,
  IconFileExport,
  IconDatabaseExport,
  IconUsers,
  IconArchive,
  IconLogout,
} from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"

const sidebarItens = {
  IconHome: { icon: <IconHome />, label: "Pagina Inicial", destiny: "/home" },
  IconUser: { icon: <IconUser />, label: "Perfil", destiny: "/profile" },
  IconSettings: {
    icon: <IconSettings />,
    label: "Configurações",
    destiny: "/settings",
  },
  IconFileExport: {
    icon: <IconFileExport />,
    label: "Gerar documentos",
    destiny: "/documents",
  },
  IconDatabaseExport: {
    icon: <IconDatabaseExport />,
    label: "Gerar relatórios",
    destiny: "/reports",
  },
  IconUsers: {
    icon: <IconUsers />,
    label: "Sindicalizados",
    destiny: "/Associates",
  },
  IconArchive: {
    icon: <IconArchive />,
    label: "Patrimônio",
    destiny: "/patrimony",
  },
  IconLogout: { icon: <IconLogout />, label: "Sair", destiny: "/login" },
}

export default function Sidebar(props: any) {
  const navigate = useNavigate()

  const SidebarItem = (iconName: string) => {
    let item = Object.entries(sidebarItens).find(([key]) => key === iconName)

    if (item) {
      return (
        <Box
          sx={styles.sidebarItem}
          onClick={() => {
            if (item) {
              navigate(item[1].destiny)
            }
          }}
        >
          {item[1].icon}
          {item[1].label}
        </Box>
      )
    }
  }

  return (
    <Box id="sidebar-box" sx={styles.sidebarBox}>
      <Box>
        <Image src="./src/assets/logo.png" sx={styles.logo} />
        <Box>
          {SidebarItem("IconHome")}
          {SidebarItem("IconUsers")}
          {SidebarItem("IconFileExport")}
          {SidebarItem("IconDatabaseExport")}
          {SidebarItem("IconArchive")}
        </Box>
      </Box>
      <Box>
        {SidebarItem("IconUser")}
        {SidebarItem("IconSettings")}
        {SidebarItem("IconLogout")}
      </Box>
    </Box>
  )
}
