## Project Trybesmith

Para este projeto, foi desenvolvido um **CRUD** (_Create, Read, Update_ e _Delete_) de itens medievais, no formato de uma _API_, utilizando _Typescript_, criando alguns _endpoints_ que irão ler e escrever em um banco de dados, utilizando o **MySQL**.

---

<details>
  <summary>
    <strong> 👨‍💻 Habilidades exercida: </strong>
  </summary><br>


  - Declaração de variáveis e funções com tipagens _Typescript_

  - Construição de uma _API Node Express_ utilizando o _Typescript_

  - Aplicação de arquitetura _MSC_ (Camada de Controller e Service)

  - Utilização do bando de dados **MySQL**

  - Criação de endpoints no padrão _REST_

</details>

---
<details>
  <summary>
    <strong> ⌨️ Clone do repositório </strong>
  </summary><br>
  
  1. Clone o repositório
    - `git clone git@github.com:Adriana-coderstar/Trybesmith.git`
    
  2. Instale as dependências
    - `npm install`
    
 </details>

---
<details>
  <summary>
    <strong> ⚠ Configurando variável de ambiente: </strong>
  </summary><br>
  
 - Modificar o arquivo env.example para .env
 
 - Alterar DATABASE_URL="mysql://`USER:PASSWORD`@`localhost`:`PORT`/`NAME_DATABASE`"
 </details>
 
 ---
 
 <details>
  <summary>
    <strong>🏦 Comandos para rodar o banco de dados </strong>
  </summary><br>
  
 - Rodar aplicação com nodemon:
    - `npm run dev`
 
 - Gerar o banco de dados e as migrations 
    - `npx prisma generate`
    - `npx prisma migrate dev`
    
 </details>
 
 ---
 <details>
  <summary>
    <strong> :mag_right: Observações: </strong>
  </summary><br>
  
  1 - Rota `/products` o endpoint deve receber a seguinte estrutura:

```json
 {
   "name": "Espada longa",
   "amount": "30 peças de ouro"
 }
```

 2 - Rota `/users` o endpoint deve receber a seguinte estrutura:

```json
{
  "username": "string",
  "classe": "string",
  "level": 1,
  "password": "string"
}
```

3 - Rota `/orders` o endpoint deve receber a seguinte estrutura:

```json
 [
  {
    "id": 1,
    "userId": 2,
    "products": [1, 2]
   },
   {
    "id": 2,
    "userId": 2,
    "products": [3, 4]
   }
  ]
 ```

</details>

 
 ---
 
 
 <details>
  <summary>
   <strong> :rocket: Tecnologias utilizadas:</strong>
  </summary><br>
  
<a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg" alt="nodejs"       width="40" height="40"/>  <a href="https://www.prisma.io/" target="_blank" rel="noreferrer"></a> <img src="https://www.freelogovectors.net/wp-content/uploads/2022/01/prisma_logo-freelogovectors.net_.png" alt="prisma"  width="40" height="40"/> <a href="https://git-scm.com/" target="_blank"   rel="noreferrer"> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> <a   href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img   src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> 
 
 </details>
