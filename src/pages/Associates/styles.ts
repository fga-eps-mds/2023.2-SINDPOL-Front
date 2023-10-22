export const styles = {
    boxContainer: {
        width: '100%',
        padding: '24px',
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
        width: '100%',
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
};