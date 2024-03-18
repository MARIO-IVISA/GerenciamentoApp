import React from 'react'
import AplicarNotaForm from '../forms/AplicarNotaForm'


export default function AplicarNota() {
  return (
    <div className='container mt-3 '>
       <div className='row'>
            <div className='col-md-8 offset-md-2'>
                <div className='card'>
                    <div className='card-body'>
                            <h5 className='card-title'>Aplicar Nota</h5>

                        <AplicarNotaForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
