import React, { useEffect, useState } from 'react';
import NomeDoCss from './forms.module.css'
import * as blobServices from '../../services/blob-services';
import moment from 'moment';


export default function DetalharNoticia({ detalharNoticia }) {

    const [Noticia, setNoticia] = useState([]);

    const dadosNoticia = (id) => {
        blobServices.getNoticiaId(id)
            .then(result => {
                setNoticia(result);
            })
            .catch(e => { console.log(e) })
    }

    const formatDate = (dateString) => {
        return moment(dateString).format('DD/MM/YYYY');
      };
      

    useEffect(() => { dadosNoticia(detalharNoticia); }, [])

    return (
        <div className='row mb-3'>
            <div className='col-md-12'>
                <table className='mt-2' style={{ fontSize: '18px' }}>
                    <tbody>
                        <tr>
                            <th className='font-weight-bold'>Descrição do Curso:</th>
                            <td className='pl-2'>{Noticia.descricao}</td>
                        </tr>
                        <tr>
                            <th className='font-weight-bold'>Média do Curso::</th>
                            <td className='pl-2'>{Noticia.media}</td>
                        </tr>
                        <tr>
                            <th className='font-weight-bold'>Data do Curso:</th>
                            <td className='pl-2'>{formatDate(Noticia.dataCurso)}</td>
                        </tr>
                        {/* <tr>
                            <th className='font-weight-bold'>Autor da Notícia:</th>
                            <td className='pl-2'>{Noticia.autor}</td>
                        </tr> */}
                        <tr>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )

}
