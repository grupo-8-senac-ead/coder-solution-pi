<h1 align="center">Grupo 21 - PROJETO INTEGRADOR: DESENVOLVIMENTO DE SISTEMAS ORIENTADO A DISPOSITIVOS MÓVEIS E BASEADOS NA WEB</h1>

<h3>Grupo composto por:</h3>

- HENRIQUE GRIGOLETTI SANTOS
- HENRIQUE LUCAS LOPES
- IGO MARCOS DA SILVA
- LOUYSE CHRISTINE ARAUJO CARVALHO DA SILVA
- MATHEUS FERNANDES DORTA
- RODRIGO ESTABEL BOQUER


***

<h2 align="center">Nome da empresa - Coder Solution</h2>
</br>

<h3 > Introdução: </h3>
<p>Nesta segunda fase do projeto, o objetivo foi a criação de uma prova de conceito para o sistema "Coder Solution", focando em demonstrar a funcionalidade do sistema de gerenciamento de estoque. Desde a autenticação de usuários até a manipulação de produtos no estoque, buscando criar uma experiência intuitiva e eficiente para os usuários.</p>
</br>

   
<h3>Prova de Conceito: </h3>
<p>A partir de diversas conferências com todo o grupo foi acordado realizar o desenvolvimento das principais partes do sistema, nos quais, foram pensadas para o setor logístico, e no caso, para o comprador do sistema, no qual terá acesso a um sistema seguro (criptografado), além de, um produto intuitivo e com fácil manuseio, fornecendo organização e controle da empresa.</p>
 </br>

<p>Dentro do que foi pensado, o sistema contará com: </p>

   - Tela de login: somente clientes cadastrados dentro da plataforma terão acesso ao sistema.
   - Tela de Dashboard: apresentação de estatísticas e analises para controle o organização.
   - Tela de Estoque: visualização de produtos cadastrados no sistema.
   - Tela de novo produto: o usuário poderá realizar o cadastro e fornecer as informações referentes a um item específico.
   - Tela de visualização do sistema: o cliente observará as funcionalidades do sistema (algumas abas estarão em "construção")
</br>

<h3>Preparação do ambiente: </h3>
<p> A criação de um site para controle de produtos e estoque é uma tarefa fundamental para empresas que buscam otimizar seus processos e melhorar sua eficiência operacional. Neste contexto, a escolha das ferramentas certas desempenha um papel crucial no desenvolvimento de um sistema robusto e escalável. Neste texto, exploraremos a preparação do ambiente para a criação de um site de controle de produtos e estoque, utilizando as ferramentas React JS para o frontend, Node.js para o backend e Firebase como banco de dados do projeto. 

React JS é uma biblioteca JavaScript de código aberto desenvolvida pelo Facebook, utilizada para construir interfaces de usuário interativas. Com o React, é possível criar componentes reutilizáveis que representam diferentes partes da interface do usuário. Ele utiliza uma abordagem baseada em componentes, o que facilita a organização e manutenção do código. Além disso, o React possui um ecossistema robusto de bibliotecas e ferramentas que facilitam o desenvolvimento frontend.
Para iniciar o desenvolvimento do frontend com React JS, é necessário configurar o ambiente de desenvolvimento. Isso inclui a instalação do Node.js e do npm (Node Package Manager) para gerenciar as dependências do projeto. Com o Node.js instalado, podemos usar o create-react-app, uma ferramenta oficial do React, para criar rapidamente um projeto React com uma estrutura de pastas e arquivos predefinidos. 

No backend, utilizaremos Node.js, um ambiente de tempo de execução JavaScript que permite criar aplicativos de rede escaláveis e de alto desempenho, tornando-o uma escolha popular para o desenvolvimento de servidores web. Com o Node.js, podemos criar APIs RESTful para fornecer dados para o frontend e realizar operações de CRUD (Create, Read, Update, Delete) no banco de dados. 

Agora, em relação ao banco de dados, optaremos por utilizar o Firebase, uma plataforma de desenvolvimento de aplicativos móveis e web desenvolvida pelo Google. O Firebase oferece uma variedade de serviços, incluindo armazenamento em tempo real, autenticação de usuários, hospedagem de aplicativos e um banco de dados em tempo real NoSQL. Para o nosso site de controle de produtos e estoque, utilizaremos o Firestore, o banco de dados NoSQL do Firebase, que oferece escalabilidade, sincronização em tempo real e segurança integrada. 

Para configurar o Firebase em nosso projeto, precisaremos criar um projeto no console do Firebase, configurar as regras de segurança do banco de dados e instalar o pacote firebase-admin para interagir com o Firestore a partir do backend. Além disso, podemos usar o Firebase SDK no frontend para autenticação de usuários, armazenamento de arquivos e comunicação em tempo real com o banco de dados. </p>



<h3>Apresentação do produto: </h3>
<p>No aplicativo, foram selecionadas diversas funcionalidades para o projeto em desenvolvimento. Dentre elas, destacam-se o cadastro de clientes, login, cadastro de produtos e visualização de estoque. </p>

<h3>Cadastro:</h3> 
<img src="/public/cadastro.gif">
<p>Ao considerar a experiência do usuário, é fundamental garantir uma interface intuitiva e eficiente. Na tela inicial do aplicativo, os usuários encontrarão campos dedicados para inserção de e-mail e senha. Ao preencher esses campos, basta clicar no botão de cadastro para efetuar o registro de clientes. Uma vez completado o processo, uma mensagem de confirmação será exibida, informando que a conta foi criada com sucesso. Esses dados de login serão então registrados na base de dados do Firebase, proporcionando aos usuários acesso imediato ao site.</p>

<h3>Login:</h3>
<img src="/public/login.gif">
<p>Para acessar a área restrita do aplicativo, os usuários devem fazer login utilizando as credenciais cadastradas anteriormente. Após inserir os dados de login corretamente, basta clicar no botão correspondente para entrar automaticamente na dashboard do aplicativo. Nessa área, os usuários terão acesso a estatísticas detalhadas sobre os produtos cadastrados, fornecendo insights valiosos para a gestão eficaz do estoque.</p>

<h3>Apresentação da tela de estoque:</h3>
<img src="/public/tela-produtos.png">
<p>Na dashboard do aplicativo, os usuários encontrarão um menu lateral com várias opções, incluindo o acesso à aba de estoque. Ao clicar neste ícone, eles serão direcionados para a seção de estoque de produtos. Nessa área, serão apresentadas informações detalhadas sobre os produtos cadastrados, como nome, categoria e quantidade disponível em estoque. Essa funcionalidade oferece aos usuários uma visão abrangente do status atual do estoque, permitindo que tomem decisões informadas em relação à gestão de produtos.</p>

<h3>Cadastro de novos produtos:</h3>
<img src="/public/registro.gif">
<p>Para adicionar novos produtos ao sistema, os usuários podem acessar a opção "Novo Produto" localizada no canto superior direito da tela de estoque. Ao clicar neste botão, serão direcionados para uma página de cadastro, onde poderão inserir detalhes essenciais sobre o produto, como nome, categoria, preço, imagem, fornecedor e descrição. Uma vez preenchidos todos os campos obrigatórios, basta clicar no botão "Adicionar Produto" para que o novo item seja registrado na base de dados do Firebase e imediatamente adicionado à tela de estoque, garantindo a atualização em tempo real do sistema.</p>

<h3>Banco de dados firebase:</h3>
<img src="/public/Firebase-bd-login.png">
<img src="/public/Firebase-bd-prod.png">
<p>Conforme mostrado, o Firebase foi o banco de dados utilizado para armazenar informações de login, cadastro de novos usuários e produtos. As imagens mostram os usuários e os produtos cadastrados durante os primeiros testes do aplicativo.</p>

<h2 > Conclusão </h2>
<p>A modelagem do projeto proposto na primeira etapa foi concluída com sucesso nesta segunda etapa. Utilizamos ferramentas confiáveis e reconhecidas, como React.js para o frontend, Node.js para o backend e o Firebase como o banco de dados. Essas tecnologias foram escolhidas devido à sua eficiência e familiaridade para os integrantes do grupo, o que permitiu um desenvolvimento consistente e eficaz do protótipo. Com isso, avançamos significativamente em direção à implementação do projeto final, estabelecendo uma base sólida para as próximas etapas. Estamos confiantes de que as escolhas feitas e o progresso alcançado nos permitirão atingir nossos objetivos com êxito.

Em resumo, o projeto demonstrou o potencial das abordagens ágeis para o desenvolvimento de software, fornecendo uma solução eficaz e inovadora para o gerenciamento de estoque e produtos. Conseguimos atender às necessidades dos usuários de forma rápida e eficiente, garantindo a entrega de um produto de alta qualidade.

À medida que avançamos para futuras iterações do projeto, estamos comprometidos em continuar aprimorando e expandindo as funcionalidades do aplicativo, sempre com foco no fornecimento de valor agregado aos nossos clientes.
</p>
</br>
