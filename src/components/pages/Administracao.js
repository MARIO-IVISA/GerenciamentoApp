import React from 'react'
import InserirImagemForm from '../forms/InserirImagemForm'


export default function Administracao() {
  return (
    <div className='container mt-3 '>
       <div className='row'>
            <div className='col-md-8 offset-md-2'>
                <div className='card'>
                    <div className='card-body'>
                            <h5 className='card-title'>Página de Administração</h5>
                            <p>Gerenciamento de Imagens do Sistema</p>

                        <InserirImagemForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
