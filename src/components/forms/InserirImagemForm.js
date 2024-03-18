import React, { useState } from 'react';
import NomeDoCss from './forms.module.css';
import * as blobServices from '../../services/blob-services';

export default function InserirImagemForm() {
  const [curso, setCurso] = useState({
    nome: '',
    descricao: '',
    idProfessor: '',
    media: 0,
    dataCurso: ''
  });
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurso({ ...curso, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await blobServices.postCadastrarBlob(curso);
        setStatus({ type: 'success', mensagem: 'Curso cadastrado com sucesso!' });
        alert('Curso cadastrado com sucesso!');
        window.location.href = '/inicio';

    } catch (error) {
      setStatus({ type: 'error', mensagem: 'Erro ao enviar dados.' });
      console.error(error);
    }
  };

  return (
    <div>
      {status.type === 'success' && <p style={{ color: 'green' }}>{status.mensagem}</p>}
      {status.type === 'error' && <p style={{ color: '#ff0000' }}>{status.mensagem}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nome do Curso:</label>
          <input
            type="text"
            className="form-control"
            name="nome"
            value={curso.nome}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>Descrição do Curso:</label>
          <textarea
            className="form-control"
            name="descricao"
            value={curso.descricao}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>Média do Curso:</label>
          <input
            type="number"
            className="form-control"
            name="media"
            value={curso.media}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>Data do Curso:</label>
          <input
            type="datetime-local"
            className="form-control"
            name="dataCurso"
            value={curso.dataCurso}
            onChange={handleInputChange}
          />
        </div>
        <button className={`${NomeDoCss.submit} btn btn-success`} type="submit">Cadastrar Curso</button>
      </form>
    </div>
  );
}
