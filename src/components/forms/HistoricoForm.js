import React, { useState, useEffect } from 'react';
import NomeDoCss from './forms.module.css';
import * as blobServices from '../../services/blob-services';

export default function HistoricoForm() {
    const [historico, setHistorico] = useState([]);
    const idUsuario = JSON.parse(localStorage.getItem('USER_AUTH')).id;

    useEffect(() => {
        async function fetchHistorico() {
            try {
                const response = await blobServices.getHistorico(idUsuario);
                const historicoAluno = response.historico.map(item => {
                    return {
                        curso: item.curso,
                        nota: item.nota,
                        idMatricula: item.idMatricula,
                        status: item.status
                    };
                });
                
                setHistorico(historicoAluno);
            
            } catch (error) {
                console.error('Erro ao obter histórico:', error);
            }
        }

        fetchHistorico();
    }, [idUsuario]);

    if (!historico || historico.length === 0) {
        return <div className={NomeDoCss.container}>Não há histórico disponível.</div>;
    }

    return (
        <div className={NomeDoCss.container}>
            <h2>Historico do Aluno</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Curso</th>
                        <th>Status</th>
                        <th>Nota</th>
                    </tr>
                </thead>
                <tbody>
                    {historico.map((item, index) => (
                        <tr key={index}>
                            <td>{item.curso.nome} - {item.curso.descricao}</td>
                            <td>{getStatusText(item.status)}</td>
                            <td>{item.nota}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function getStatusText(status) {
    switch (status) {
        case 0:
            return 'Em andamento';
        case 1:
            return 'Concluído';
        default:
            return '';
    }
}
