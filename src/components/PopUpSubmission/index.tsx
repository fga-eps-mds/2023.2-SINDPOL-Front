import React from "react"
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
} from '@chakra-ui/react'
import theme from "../../theme/theme"

type statusType = "loading" | "error" | "info" | "warning" | "success";

interface PopUpSubmissionProps {
    open: boolean
    title: string
    description: string
    type:  statusType;
    onClose: () => void
}

class PopUpSubmissionState implements PopUpSubmissionProps {
    open: boolean
    title: string
    description: string
    type:  statusType
    bg: string
    iconColor: string
    onClose: () => void

    constructor(open:boolean, title: string, description: string, type:  statusType, onClose:() => void){
        this.open = open
        this.title = title
        this.description = description
        this.type = type
        this.bg = type === "success" ? theme.colors.softGreen : theme.colors.softRed
        this.iconColor = type === "success" ? theme.colors.greenAccent : theme.colors.pinkAccent
        this.onClose = onClose;
    }
}

export default function PopUpSubmission(props: Readonly<PopUpSubmissionProps>) {
    const propsSubmission: PopUpSubmissionState = new PopUpSubmissionState(props.open, props.title, props.description, props.type, props.onClose)
    
    return (
        <Modal isOpen={props.open} onClose={() => { props.onClose() }} isCentered>
            <ModalOverlay  bg={"#cccccc75"}/>
            <ModalContent boxShadow={'none'}>
                <ModalBody>
                    <Alert
                        status={props.type}
                        variant='subtle'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        textAlign='center'
                        height='200px'
                        width='400px'
                        borderRadius='10'
                        bg={propsSubmission.bg}
                    >
                        <AlertIcon boxSize='55px' id="icone" mb={5} color={propsSubmission.iconColor} />
                        <AlertTitle mb={2} fontSize='lg' fontFamily={theme.fonts.rubik} color={"white"} >
                            {propsSubmission.title}
                        </AlertTitle>
                        <AlertDescription maxWidth='sm' fontFamily={theme.fonts.rubik} fontWeight={"light"} color={"white"}>
                            {propsSubmission.description}
                        </AlertDescription>
                    </Alert>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
