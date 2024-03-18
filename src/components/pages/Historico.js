import React from 'react'
import HistoricoForm from '../forms/HistoricoForm'


export default function Historico() {
  return (
    <div className='container mt-3 '>
       <div className='row'>
            <div className='col-md-8 offset-md-2'>
                <div className='card'>
                    <div className='card-body'>
                            <h5 className='card-title'>Historico</h5>

                        <HistoricoForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
