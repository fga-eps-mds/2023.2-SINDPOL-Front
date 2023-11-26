import { CSSProperties } from 'react';


export const BACKGROUND_STYLE: CSSProperties = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000
}

export const MODAL_STYLE: CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '150px',
    backgroundColor: '#FFF',
    borderRadius: '10px'
}

export const HEADER: CSSProperties = {
    display: 'flex',
    position: 'absolute',
    top: '10%',
}

export const TEXT_MODAL: CSSProperties = {
    cursor: 'pointer',
    position: 'fixed',
    left: '10%',
}

export const CLOSE_MODAL_BUTTON: CSSProperties = {
    cursor: 'pointer',
    borderWidth: '1px',
    position: 'fixed',
    right: '10%',
}