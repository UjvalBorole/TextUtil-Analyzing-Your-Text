import React from 'react'

function Alert(props){
    const capitalization = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
       //we are initially alert set as null so we do alert is null no data has print and alert has something so data print
       <div style = {{height: '70px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalization(props.alert.type)}</strong>: {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert //export the Alert name function