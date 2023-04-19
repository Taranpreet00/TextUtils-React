import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible py-2 fade show`} style={{position: 'absolute', width: '100vw', height: '40px'}} role="alert">
        <strong>{capitalize(props.alert.type)}:</strong>  {props.alert.message}
        
    </div>
  )
}
