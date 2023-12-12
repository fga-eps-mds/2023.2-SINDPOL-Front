import React from "react"
import { Box } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import PrivateOutlet from "./Private/PrivateOutlet"
import PublicOutlet from "./Public/PublicOutlet"
import Login from "../../pages/Login"
import Home from "../../pages/Home"
import Profile from "../../pages/Profile"
import AdminOutlet from "./Admin/AdminOutlet"
import Documents from "../../pages/Documents"
import Reports from "../../pages/Reports"
import Associates from "../../pages/Associates"
import Patrimony from "../../pages/Patrimony"
import FiliationForm from "../../pages/FiliationForm"
import SelectAssociateDoc from "../../pages/selectAssociateDoc"
import Aceeptance from "../../pages/AceeptanceList"

export default function AppRouter(props: any) {
  return (
    <Box>
      <Routes>
        <Route path={"/"} element={<PublicOutlet />}>
          <Route path={"/"} element={<Login />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/filiation"} element={<FiliationForm />} />
          <Route path={"/update/:associateId"} element={<FiliationForm />} />
          <Route path={"/declaration"} element={<SelectAssociateDoc />} />
          <Route path={"/report-users"} element={<Reports />} />

          {/* Pagina de filiação */}
        </Route>
        <Route path={"/"} element={<PrivateOutlet />}>
          <Route path={"/home"} element={<Home />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/documents"} element={<Documents />} />
        </Route>
        <Route path={"/"} element={<AdminOutlet />}>
          <Route path={"/aceeptance"} element={<Aceeptance />} />
          <Route path={"/reports"} element={<Reports />} />
          <Route path={"/associates"} element={<Associates />} />
          <Route path={"/patrimony"} element={<Patrimony />} />
          <Route path={"/update/:associateId"} element={<FiliationForm />} />
          <Route path={"/declaration"} element={<SelectAssociateDoc />} />
          <Route path={"/report-users"} element={<Reports />} />
        </Route>
      </Routes>
    </Box>
  )
}
