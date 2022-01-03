import React from 'react'
import { Alert } from 'react-bootstrap'

const Error = () => {
    return (
        <div className='d-flex p-2 justify-content-center' >

            <Alert variant='danger'>
                <Alert.Heading> Opps!! Sitio no encontrado !!!</Alert.Heading>
            </Alert>
        </div>
    )
}

export default Error
