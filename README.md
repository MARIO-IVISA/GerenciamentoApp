# GerenciamentoApp

## Visão Geral
O GerenciamentoApp é uma aplicação desenvolvida em React para gerenciamento de alunos, cursos e matrículas. Ela se integra a diferentes sistemas para realizar suas funcionalidades, incluindo autenticação, cadastro e listagem de cursos, envio e processamento de matrículas, e gerenciamento de matrículas.

## Funcionalidades

### Autenticação de Usuário
O GerenciamentoApp utiliza o sistema de gerenciamento de usuários [Usuarios](https://github.com/MARIO-IVISA/Usuarios) para autenticação de usuários.

### Cadastro de Alunos
Permite cadastrar novos alunos na plataforma.

### Cadastro e Listagem de Cursos
Integra-se ao sistema de gerenciamento de cursos [CursosApi](https://github.com/MARIO-IVISA/CursosApi) para cadastrar e listar cursos disponíveis.

### Processamento de Emails
O processamento de emails é realizado pelo [SecretariaWorker](https://github.com/MARIO-IVISA/SecretariaWorker) que consome as mensagens do azure service bus o envio de email de acorco com o status do aluno.

###  Matrícula de Alunos, Atualização de Notas e Histórico de Alunos
Utiliza a [SecretariaApi](https://github.com/MARIO-IVISA/SecretariaApi) para atualizar notas dos alunos e acessar o histórico de matrículas.

### Listagem de Alunos Inscritos em Cursos
Integra-se à [SecretariaApi](https://github.com/MARIO-IVISA/SecretariaApi) para listar os alunos inscritos em cursos.

### Gerenciamento de Rotas
A API Gateway [Gateway](https://github.com/MARIO-IVISA/Gateway) é responsável pelo gerenciamento das rotas da aplicação, direcionando as requisições para os sistemas adequados.

## Tecnologias Utilizadas

- React
- JavaScript/TypeScript
- Axios (para integração com APIs)
- Material-UI (para interface de usuário)
