export const styles = {
    sidebarBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '90vh',
        width: '250px',
        backgroundColor: '#ffffff',
        padding: '16px',
        margin: '24px',
        borderRadius: '24px',
    },
    
    logo: {
        margin: '8px',
        width: '120px',
        marginBottom: '24px',
    },
    sidebarItem: {
        display: 'flex',
        padding: '12px 6px',
        borderRadius: '12px',
        gap: '12px',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        
        _hover: {
            backgroundColor: '#FFF7E8',
        },
    },
};