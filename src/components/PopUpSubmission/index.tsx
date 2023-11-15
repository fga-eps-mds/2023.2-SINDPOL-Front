import React from "react"
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
} from '@chakra-ui/react'
import theme from "../../theme/theme"
import { SUCCESS } from "../../utils/constants/PopUp"

interface PopUpSubmissionProps {
    open: boolean
    title: string
    description: string
    type:  "loading" | "error" | "info" | "warning" | "success";
    onClose: () => {}
}

class PopUpSubmissionState implements PopUpSubmissionProps {
    open: boolean
    title: string
    description: string
    type:  "loading" | "error" | "info" | "warning" | "success"
    bg: string
    iconColor: string
    onClose: () => {}

    constructor(open:boolean, title: string, description: string, type:  "loading" | "error" | "info" | "warning" | "success", onClose:() =>{}){
        this.open = open
        this.title = title
        this.description = description
        this.type = type
        this.bg = type === "success" ? theme.colors.softGreen : theme.colors.softRed
        this.iconColor = type === "success" ? theme.colors.greenAccent : theme.colors.pinkAccent
        this.onClose = onClose;
    }
}

export default function PopUpSubmission(props: PopUpSubmissionProps) {
    const propsSubmission: PopUpSubmissionState = new PopUpSubmissionState(props.open, props.title, props.description, props.type, props.onClose)
    return (
        <>
            <Modal isOpen={props.open} onClose={() => {props.onClose()}} >
                <ModalOverlay />
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
        </>
    )
}