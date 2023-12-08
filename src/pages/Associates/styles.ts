import { CSSProperties } from 'react';

export const INPUT_HIDDEN: CSSProperties = {
    display: 'none',
    width:'100%'
}

export const ICON: CSSProperties = {
    width: '80px',
    height: '80px',
}

export const LABEL_ICON: CSSProperties = {
    left: '44%',
    position: 'absolute',
    top: '40%'
}

export const TABLE: CSSProperties = {
    border: '1px solid black',
    padding: '10px',
}

export const TABLE_MOTIVO: CSSProperties = {
    border: '1px solid black',
    padding: '10px',
    width: '300px',
    maxWidth: '300px',
}

export const styles = {
    boxContainer: {
        width: '100%',
        padding: '24px 12px',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '90vh',
        borderRadius: '24px',        
    },
    boxList: {
        width: '100%',
        height: '100%',
        padding: '12px',
        overflowY: 'scroll',

        
    },
    boxItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 24px',
        borderRadius: '16px',

        _hover: {
            backgroundColor: '#FFF7E8',
        }
    },
    boxHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: '24px',
    },
    modalBox: {
        borderWidth: '3px',
        borderStyle: 'dashed',
        margin: '40px 0 10px 0',
        padding: '80px',
        minWidth: '500px'
    },
    modalBoxResult: {
        margin: '15px',
    },
    text: {
        fontWeight: 'bold',
        fontSize: '30px'
    },
    associatImportButtom: {
        display: 'flex',
        width: '277px',
        height: '69px',
        left: '17%',
    },
    fileInputHidden: {
        display: 'none',
    },
    textImport: {
        marginTop: '60px',
    },
};