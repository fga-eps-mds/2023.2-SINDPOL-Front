export const styles = {
    boxContainer: {
        width: '30%',
        padding: '24px 12px',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        backgroundColor: '#fff',
        height: '60vh',
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
    boxHeaderTitle:{
        fontWeight: 'semibold',
        textAlign: 'left',
        color: '#000',
    }
};