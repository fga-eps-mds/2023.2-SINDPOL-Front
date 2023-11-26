import React, { CSSProperties, ReactNode } from 'react';
import { IconButton, Text } from "@chakra-ui/react"
import { IconX } from "@tabler/icons-react"
import { styles } from "../../pages/Associates/styles"
import { BACKGROUND_STYLE, MODAL_STYLE, HEADER, TEXT_MODAL, CLOSE_MODAL_BUTTON } from "./styles";

interface ModalProps {
    isOpen: boolean;
    Title: string;
    children: ReactNode;
    setModalOpen: () => void;
}

export default function Modal({ isOpen, setModalOpen, Title, children }: ModalProps) {
    if (isOpen) {
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <div style={HEADER}>
                        <div style={TEXT_MODAL}>
                            <Text sx={styles.text}>{Title}</Text>
                        </div>
                        <div style={CLOSE_MODAL_BUTTON}>
                            <IconButton
                                onClick={setModalOpen}
                                aria-label="fechar"
                                icon={<IconX />}
                                color={"#000"}>
                            </IconButton>
                        </div>
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        );
    }

    return null;
}