
export default function CardPhoto(props){
    return (
        <div style={{
            margin: '15px 10px', borderRadius: '16px', backgroundColor: 'red',
            ...styles[props.size]
        }}>

        </div>
    )
}

const styles = {
    card: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'red'
    },
    small: {
        gridRowEnd: 'span 26'
    },
    medium: {
        gridRowEnd: 'span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    },
}