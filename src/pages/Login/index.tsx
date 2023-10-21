import { Box, Image, Link } from "@chakra-ui/react"
import React from "react"
import GenericInput from "../../components/GenericInput"
import { LoginRequest } from "../../app/services/authService"
import PasswordInput from "../../components/PasswordInput"
import { styles } from "./styles"
import GenericButton from "../../components/GenericButton"

export default function Login(props: any) {
  const [loginState, setLoginState] = React.useState<LoginRequest>({
    username: "",
    password: "",
  })

  return (
    <>
      <Box id={"container-login"} sx={styles.containerLogin}>
        <Box id={"login-box"} sx={styles.loginBox}>
          <Image
            src="src/assets/logo.png"
            width={"470px"}
            marginBottom={"30px"}
          />
          <GenericInput
            type={"string"}
            name={"username"}
            value={loginState.username}
            onChange={(e: { target: { value: any } }) =>
              setLoginState({ ...loginState, username: e.target.value })
            }
            label="Matricula"
            sxFormControl={{ marginTop: "20px" }}
          />
          <PasswordInput
            type={"password"}
            name={"password"}
            value={loginState.password}
            onChange={(e: { target: { value: any } }) =>
              setLoginState({ ...loginState, password: e.target.value })
            }
            label="Senha"
            sxFormControl={{ marginTop: "15px" }}
          />
          <Link margin={"20px"}>Esqueci a senha</Link>
          <Link margin={"10px"}>Ainda não sou filiado</Link>
          <GenericButton text="Entrar" marginTop={"20px"} />
        </Box>
      </Box>
    </>
  )
}
