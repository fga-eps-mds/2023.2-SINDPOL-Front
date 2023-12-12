import { Box, Image, Link } from "@chakra-ui/react"
import React from "react"
import GenericInput from "../../components/GenericInput"
import { LoginRequest } from "../../app/services/authService"
import PasswordInput from "../../components/PasswordInput"
import { styles } from "./styles"
import GenericButton from "../../components/GenericButton"
import { useNavigate } from "react-router-dom"
import Logo from "../../assets/logo.png"
import { useAppDispatch } from "../../utils/hooks"
import { postLogin } from "../../app/store/auth/authSlice"
import Mask from "../../utils/Mask"

export default function Login(props: any) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [loginState, setLoginState] = React.useState<LoginRequest>({
    registration: "",
    password: "",
  })

  const submitLogin = () => {
    dispatch(postLogin(loginState))
      .then((response) => {
        console.log(response)
        if (response.payload && (response.payload as any).status == 200) {
          navigate("/home")
        }
      })
  }

  return (
    <>
      <Box id={"container-login"} sx={styles.containerLogin}>
        <Box id={"login-box"} sx={styles.loginBox}>
          <Image
            src={Logo}
            width={"470px"}
            marginBottom={"30px"}
          />
          <GenericInput
            type={"string"}
            name={"matricula"}
            value={loginState.registration}
            onChange={(name: any, value: any) =>
              setLoginState({ ...loginState, registration: value })
            }
            label="Matricula"
            sxFormControl={{
              marginTop: "20px",
              maxWidth: "500px",
              minHeight: "50px",
            }}
            error={{
              hasError: false,
              message: "",
            }}
          />
          <GenericInput
            type={"string"}
            name={"cpf"}
            value={loginState.password}
            onChange={(name: any, value: any) =>
              setLoginState({ ...loginState, password: value })
            }

            label="CPF"
            sxFormControl={{
              marginTop: "15px",
              maxWidth: "500px",
              minHeight: "50px",
            }}
            error={{
              hasError: false,
              message: "",
            }}
            mask={(value: string) => Mask.CPF(value)}
          />
          <Link margin={"20px"}>Esqueci a senha</Link>
          <Link margin={"10px"} onClick={() => navigate("/filiation")}>
            Ainda não sou filiado
          </Link>
          <GenericButton
            text="Entrar"
            marginTop={"20px"}
            onClick={submitLogin}
          />
        </Box>
      </Box>
    </>
  )
}
