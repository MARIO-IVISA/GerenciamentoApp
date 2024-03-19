import React, { useState } from 'react';
import NomeDoCss from './forms.module.css';
import { useForm, Controller } from 'react-hook-form';
import * as services from '../../services/account-services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// Enum de Perfil
const PerfilEnum = {
    Aluno: 0,
    Administrador: 1
};

export default function CadastrarForm() {
    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const {
        control,
        handleSubmit,
        formState: {
            errors,
        },
        reset
    } = useForm();

    const onSubmit =  (data) => {
        setMensagemSucesso('');
        setMensagemErro('');

        const usuarioData = {
            nome: data.nome,
            email: data.email,
            senha: data.senha,
            dataNascimento: new Date(data.dataNascimento), 
            perfil: parseInt(data.perfil)
        };

        services.postUsuario(usuarioData)
        // window.location.href = '/';
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={NomeDoCss.container}>
            {mensagemSucesso && <div className='alert alert-success'> <strong> Sucesso! </strong> {mensagemSucesso} </div>}
            {mensagemErro && <div className='alert alert-danger'> <strong> Erro! </strong> {mensagemErro} </div>}

            <div className='row mb-3'>
                <div className='col-md-6'>
                    <label><strong>Nome de Usuário:</strong></label>
                    <Controller
                        control={control}
                        name='nome'
                        defaultValue=''
                        rules={{
                            required: 'Nome é obrigatório'
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <input type='text' id='nome' placeholder='Digite aqui seu nome ' className='form-control' onChange={onChange} onBlur={onBlur} value={value} />
                        )}
                    />
                    {errors.nome && <div className='text-danger'> {errors.nome.message} </div>}
                </div>

                <div className='col-md-6'>
                    <label><strong>E-mail:</strong> </label>
                    <Controller control={control} name='email' defaultValue='' rules={{
                        required: 'Email é obrigatório',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Email inválido'
                        }
                    }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <input type='email' placeholder='Digite aqui seu e-mail' className='form-control' onChange={onChange} onBlur={onBlur} value={value} />
                        )}
                    />
                    {errors.email && <div className='text-danger'> {errors.email.message} </div>}
                </div>
            </div>

            <div className='row mb-3'>
                <div className='col-md-6'>
                    <label><strong>Senha:</strong></label>
                    <div className='input-group'>
                        <Controller control={control} name='senha' defaultValue='' rules={{
                            required: 'Senha é obrigatória',
                            minLength: {
                                value: 6,
                                message: 'Senha deve ter pelo menos 6 caracteres'
                            }
                        }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type={mostrarSenha ? 'text' : 'password'}
                                    id='senha'
                                    placeholder='Digite aqui sua senha'
                                    className='form-control'
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )}
                        />
                        <div className='input-group-append'>
                            <button
                                type='button'
                                className='btn btn-outline-secondary'
                                onClick={() => setMostrarSenha(!mostrarSenha)}
                            >
                                {mostrarSenha ? 'Esconder' : 'Mostrar'}
                            </button>
                        </div>
                    </div>
                    {errors.senha && <div className='text-danger'> {errors.senha.message} </div>}
                </div>

                <div className='col-md-6'>
                    <label><strong>Data de Nascimento:</strong></label>
                    <Controller
                        control={control}
                        name='dataNascimento'
                        defaultValue=''
                        rules={{
                            required: 'Data de Nascimento é obrigatória'
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <input type='date' className='form-control' onChange={onChange} onBlur={onBlur} value={value} />
                        )}
                    />
                    {errors.dataNascimento && <div className='text-danger'> {errors.dataNascimento.message} </div>}
                </div>
            </div>

            <div className='row mb-3'>
                <div className='col-md-6'>
                    <label><strong>Perfil:</strong></label>
                    <Controller
                        control={control}
                        name='perfil'
                        defaultValue={PerfilEnum.Usuario}
                        rules={{
                            required: 'Perfil é obrigatório'
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <select className='form-control' onChange={onChange} onBlur={onBlur} value={value}>
                                <option value={PerfilEnum.Aluno}>Aluno</option>
                                <option value={PerfilEnum.Administrador}>Administrador</option>
                            </select>
                        )}
                    />
                    {errors.perfil && <div className='text-danger'> {errors.perfil.message} </div>}
                </div>
            </div>

            <div>
                <input type='submit' value='Realizar Cadastro' className={`${NomeDoCss.submit} btn btn-success`} />
            </div>
        </form>
    )
}
