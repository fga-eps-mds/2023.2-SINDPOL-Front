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
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        padding: '24px',
        fontSize: '20px',
        fontWeight: 'semibold',
        color: 'black'
    },
    boxHeaderTop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    boxHeaderMiddle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '20px',
    },
    boxHeaderBotton: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '30px',
        justifyContent: "flex-start"
    },
    boxHeaderTitle: {
        fontWeight: 'semibold',
        textAlign: 'left',
    }
};