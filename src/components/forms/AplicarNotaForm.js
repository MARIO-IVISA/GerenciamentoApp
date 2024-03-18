import React, { useState, useEffect } from 'react';
import NomeDoCss from './forms.module.css';
import moment from 'moment'; 
import { useParams } from 'react-router-dom';
import * as blobServices from '../../services/blob-services';

export default function AplicarNotaForm() {
    const { id } = useParams();
    const [curso, setCurso] = useState({});
    const [listagemAlunoCurso, setListagemAlunoCurso] = useState([]);
    const [notasAlunos, setNotasAlunos] = useState({}); // Estado para armazenar as notas de cada aluno
    const [isLoading, setIsLoading] = useState(true); // Adiciona estado para controlar o carregamento dos dados
    const [error, setError] = useState(null); // Adiciona estado para controlar erros

    useEffect(() => {
        console.log('ID do curso:', id);
        async function fetchData() {
            try {
                const response = await blobServices.getAlunosPorCurso(id);
                console.log('Dados obtidos:', response);
                setCurso(response.curso);
                setListagemAlunoCurso(response.listagemAlunoCurso);
                // Inicializa as notas dos alunos com 0
                const notasIniciais = {};
                response.listagemAlunoCurso.forEach(aluno => {
                    notasIniciais[aluno.id] = 0;
                });
                setNotasAlunos(notasIniciais);
                setIsLoading(false); // Define isLoading como falso após obter os dados
            } catch (error) {
                console.error('Erro ao obter dados:', error);
                setError(error); // Define o erro, caso ocorra
                setIsLoading(false); // Define isLoading como falso em caso de erro
            }
        }

        fetchData();
    }, [id]); 

    const atualizarNota = async (alunoId, novaNota) => {
        try {
            const usuarioData = {
                id: alunoId.id,
                nota: novaNota, 
                media: curso.media
            };
            await blobServices.cadastrarNota(usuarioData);
            window.location.reload();
   
            // Atualiza a nota do aluno no estado
            setNotasAlunos(prevState => ({
                ...prevState,
                [alunoId]: novaNota
            }));

            // Atualiza a lista de alunos com a nova nota
            const novaListagemAlunoCurso = listagemAlunoCurso.map(aluno => {
                if (aluno.id === alunoId) {
                    return { ...aluno, nota: novaNota };
                }
                return aluno;
            });
            setListagemAlunoCurso(novaListagemAlunoCurso);
        } catch (error) {
            console.error('Erro ao atualizar nota:', error);
        }
    };

    // Verifica se há um erro
    if (error) {
        return <div>Erro: {error.message}</div>;
    }

    // Verifica se está carregando
    if (isLoading) {
        return <div>Carregando...</div>;
    }

    // Verifica se não há alunos matriculados
    if (listagemAlunoCurso.length === 0) {
        return <div>Não há alunos matriculados neste curso.</div>;
    }

    // Se chegou até aqui, renderiza a tabela com os alunos
    return (
        <div className={NomeDoCss.container}>
            <div>
                <h3>Curso</h3>
                <p>{curso.nome}</p>
                <p>{curso.descricao}</p>
                <p>Média: {curso.media}</p>
                <p>Data do Curso: {moment(curso.dataCurso).format('DD/MM/YYYY')}</p> {/* Formata a data */}
            </div>
            <div>
                <h3>Listagem de Alunos do Curso</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Nota</th>
                            <th>Atualizar Nota</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listagemAlunoCurso.map((aluno, index) => (
                            <tr key={index}>
                                <td>{aluno.nome}</td>
                                <td>{aluno.email}</td>
                                <td>{getStatusText(aluno.status)}</td>
                                <td>{aluno.nota}</td>
                                <td>
                                    <div className="input-group">
                                        <input type="number" className="form-control" value={notasAlunos[aluno.id]} onChange={(event) => setNotasAlunos(prevState => ({ ...prevState, [aluno.id]: event.target.value }))} />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" onClick={() => atualizarNota(aluno, notasAlunos[aluno.id])}>Atualizar</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function getStatusText(status) {
    switch (status) {
        case 0:
            return 'Pendente';
        case 1:
            return 'Aprovado';
        case 2:
            return 'Reprovado';
        default:
            return '';
    }
}
