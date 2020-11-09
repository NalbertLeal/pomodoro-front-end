# Pomodoro front-end

## Indice

- Descrição do projeto
- O que foi feito na primeira parte?
- Contribuidores e avaliadores

## Descrição do projeto

Neste projeto sera desenvolvida uma aplicação pomodoro fazendo uso de quatro frameworks front-end. Os frameworks são angular, react, svelte e vuejs (ou seja, uma versão do pomodoro em cada framework). Irei refazer o código seguindo padrões de projeto e recriando versões em angular, react, vuejs. Será uma boas experiência.

## O que foi feito na primeira parte?

Na primeira parte do projeto foi desenvolvidos os componentes basicoas das aplicações vueJS, reactJS e svelte. Além dos componentes foram desenvolvidas as páginas de cadastro de usuário, recupareção de senha, login e do pomodoro (temporizador com lista de tarefas). A lista de tarefas da página do pomodoro ainda está sendo feita, por isso ainda não mostra as tarefas criadas. Os 3 projetos citados possuem uma store configurada, assim temos vueJS possue o vuex, o react o redux e o svelte o store (no caso apenas o vuex está 100% funcional).

Os componentes criados foram:

  - Timer: O componente responsável por medir e mostrar um cronometro para o usuario no topo da tela
  - Input: O input de text da aplicação que recebe os parametros de tipo (text, password, email, etc), label e onChange (função chamada quando o text do input muda)
  - Button: O botão da aplicação que recebe os parametros de label e onClick (função chamada quando botão é clicado)
  - Figure: UExibe uma imagem seguindo o padrão HTML5 com a tag <img> dentro de uma tag <figure> e com um <figcaption>

As páginas criadas foram:

  - Timer: O a tela de timer do pomodoro
  - Cadastro de usuario: A tela de cadastro de usuário
  - Recupereção de senha: A tela de recuperação de senha
  - login (autenticação): a tela de autenticação do usuário cadastrado no sistema

Foi feita uma api rest em expressJS que se encontra na pasta "api/" que está na raiz do projeto. Essa é uma simples API que será usada para ligar os fronts a um serviço que vai armazenar os usuários (os endpoints de usuário estão testados) e de armazenar as tasks dos usuários (ainda sendo feito).

Infelizmente a implementação angular está atrasada por ser diferente das demais e demandar um pouco mais de esforço para entender.

## Contribuidores e avaliadores

Contribuidor/responsável: Nalbert Gabriel Melo Leal
Avaliador: Dr. André Mauricio

# Referencias:

imagem usada na logo: [logo](https://www.pngwing.com/pt/free-png-xqail)