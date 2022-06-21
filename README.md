## Pixel Art

### [Clique aqui para ver o deploy no repl.it](https://pixel-art.unamednada.repl.co/)

Projeto realizado em HTML, CSS e JS.

Um sandbox simples que permite fazer desenhos pixelados, com altura e largura reguláveis. Lógica desenvolvida em JS vanilla, servidor express + http. Deploy feito no repl.it.

Projeto incentivado pela Trybe, no módulo de fundamentos do curso de Desenvolvimento Web.

---

## Habilidades

- Manipular o DOM

- Manipular o Javascript

### 🗒 PARA RODAR O PIXEL ART LOCALMENTE:

1. Clone o repositório
  * `git clone git@github.com:unamednada/pixel-art.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd pixel-art`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`

3. Rode o servidor e vá até `http://localhost:3000` no seu navegador
  * Verifique que a sua porta 3000 está livre no localhost:
    * `sudo ss -plnut`
  * Agora, execute o servidor
    * `npm start`

---

### 🗒 PARA CONTRIBUIR COM O PIXEL ART:

1. Clone o repositório
  * `git clone git@github.com:unamednada/pixel-art.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd pixel-art`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-feat-descricao`
    * Exemplo: `git checkout -b mariazinha-feat-mobile-design`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listados os arquivos em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'Feat: mobile responsive design'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin mariazinha-feat-mobile-design`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/unamednada/pixel-art/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Adicione uma descrição para o _Pull Request_, um título que o identifique, e clique no botão verde _"Create pull request"_. Crie da seguinte forma: `[MARIAZINHA][FEAT]Mobile design`
  * Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/unamednada/pixel-art/pulls) e confira que o seu _Pull Request_ está criado

---

**⚠️ Aguarde review do seu PR ⚠️**

Depois que as mudanças forem revisadas, elas poderão ser incorporadas, ou você pode ter que fazer uma mudança pra que elas sejam revisadas novamente. Fique de olho!

---

### Linter

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
npm run lint
npm run lint:styles
```

Quando é executado o comando `npm run lint:styles`, ele irá avaliar se os arquivos com a extensão `CSS` estão com o padrão correto.

Quando é executado o comando `npm run lint`, ele irá avaliar se os arquivos com a extensão `JS` e `JSX` estão com o padrão correto.
