import React, { useState, useEffect } from 'react';
import * as blobServices from '../../services/blob-services';
import InserirImagemForm from '../forms/InserirImagemForm';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DetalharNoticia from '../forms/DetalharNoticia';
import moment from 'moment'; 
import { Link } from 'react-router-dom';

export default function Inicio() {
  const [statusUsuario, setStatusUsuario] = useState('');
  const [idUsuario, setIdUsuario] = useState('');
  const [imagens, setImagens] = useState([]);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [idNoticia, setIdNoticia] = useState('');
  const [tituloNoticia, setTituloNoticia] = useState('');
  const detalharNoticia = (id) => { setIdNoticia(id); }


  const listarImagens = () => {
    blobServices.getBlobs()
      .then(result => setImagens(result))
      .catch(e => console.log(e.response));
  }
  const perfil = () =>{
    const perfil = JSON.parse(localStorage.getItem('USER_AUTH')).perfilEnum;
    setStatusUsuario(perfil);
  }
  const Usuario = () =>{
    const id = JSON.parse(localStorage.getItem('USER_AUTH')).id;
    setIdUsuario(id);
  }

  const cadastrarCurso = async (id)  => {
    const Matricula = {
      cursoId: id,
      alunosId:idUsuario
  };
   var result = await blobServices.verificaMatricula(Matricula)
    if(result == "Disponível")
    {
      var result = await blobServices.matricularAluno(Matricula)
      if(result.Value == "Mensagem Service: Aluno cadastrado"){
        alert("Aluno matriculado com sucesso");
      }
      else
      {
        alert("Erro ao matricular aluno");
      }
    }
    else
    {
      alert("Aluno já cadastrado nesse curso");
    }
   
    
  };

  useEffect(() => {
    perfil();
    Usuario();
    listarImagens();

    
  }, []);

  const toggleForm = () => {
    setMostrarForm(!mostrarForm);
  };

  const formatDate = (dateString) => {
    return moment(dateString).format('DD/MM/YYYY');
  };

  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-12'>
          <h1>Projeto Tech Challenge  {statusUsuario == 1 && ( 
            <button className='btn btn-primary' onClick={toggleForm}>
              {/* Condiciona o texto do botão com base no valor de statusUsuario */}
              {mostrarForm ? 'Esconder Formulário' : 'Cadastrar Curso'}
            </button>
          )}</h1>
          {mostrarForm && (
            <div className='row' style={{ marginTop: '20px' }}>
              <div className='col-md-12'>
                <div className='card'>
                  <div className='card-body'> 
                        <h5 className='card-title'> Cadastro de Cursos</h5>
                    <InserirImagemForm />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className='row'>
            {imagens.map((imagem, i) => (
              <div className='card col-md-3' style={{ marginTop: '20px', minHeight: '250px' }} key={i}>
                <div className='card-body'>
                  <h1 className='card-title' style={{ fontWeight: 'bold' }}> {imagem.titulo}</h1>
                  <h2 className='card-text'>
                    {imagem.nome}
                  </h2>
                  {imagem.descricao}
                  <h5 className='card-text'>
                    {imagem.chapeu}
                  </h5>
                  <p className='card-text'> Data do Curso:
                    {formatDate(imagem.dataPublicacao)}
                  </p>
                  <div>
                  <button type="button" className="btn btn-primary" onClick={() => { setLgShow(true); setTituloNoticia(imagem.nome); detalharNoticia(imagem.id) }}>
                    <i style={{ width: '15px' }} className="fas fa-info-circle" /> Detalhar
                  </button>
                  &nbsp; {/* Adiciona um espaço entre os botões */}                
                  <button type="button" className="btn btn-success" onClick={() => cadastrarCurso(imagem.id)}>
                  <i style={{ width: '15px' }} className="fas fa-info-circle" /> Matricular
                  </button>
                  {statusUsuario === 1 && ( 
                  <Link to={`/aplicar-nota/${imagem.id}`} className="btn btn-danger mt-3">
                  <i style={{ width: '15px' }} className="fas fa-info-circle" /> Aplicar Nota
                   </Link>
                )}
                            
                </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header className='bg-info' closeButton>
          <Modal.Title >
            <i className="fas fa-info-circle" /> Curso - {tituloNoticia}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DetalharNoticia detalharNoticia={idNoticia} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setLgShow(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

    </div>

  );
}

