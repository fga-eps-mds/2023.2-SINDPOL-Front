import React, { CSSProperties, ReactNode } from 'react';
import { IconButton, Text } from "@chakra-ui/react"
import { IconX } from "@tabler/icons-react"
import { styles } from "./styles"

const BACKGROUND_STYLE: CSSProperties = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000
}

const MODAL_STYLE: CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '150px',
    backgroundColor: '#FFF',
    borderRadius: '10px'
}

const HEADER: CSSProperties = {
    display: 'flex',
    position: 'absolute',
    top: '10%',
}

const TEXT_MODAL: CSSProperties = {
    cursor: 'pointer',
    position: 'fixed',
    left: '10%',
}

const CLOSE_MODAL_BUTTON: CSSProperties = {
    cursor: 'pointer',
    borderWidth: '1px',
    position: 'fixed',
    right: '10%',
}

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