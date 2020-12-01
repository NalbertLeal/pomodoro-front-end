# Pomodoro front-end

## Indice

- Descrição do projeto
- O que foi feito na primeira parte?
- Contribuidores e avaliadores

## Descrição do projeto

Neste projeto sera desenvolvida uma aplicação pomodoro fazendo uso de quatro frameworks front-end. Os frameworks são angular, react, svelte e vuejs (ou seja, uma versão do pomodoro em cada framework). Para mais informações [clique aqui](http://dimap.ufrn.br/~andre/mat/courses/fwjs/).

## O que foi feito?

Na segunda unidade do projeto ouve uma completa reescrita do projeto. Tomei essa decisão pois o numero de componentes estavam crescendo e a interface que eu desejava montar mostrava que mais componentes teriam de ser criandos, isso para ser mantidos em 4 projetos diferentes se mostrou muito custoso. Sendo assim obtive na internet uma biblioteca css cklamada Matier CSS que permite o uso de alguns componentes do matereal design usando apenas css e html. Com isso pude montar as páginas de forma simples usando html e css puro, o resultado pode ser visto em "./pure-font-end/html/".

Cada uma das páginas foram passadas para os foamatos de templates dos frameworks e quebrados em componentes menores e reutilizaveis (Button, Input, Link e Modal) além das views (as páginas/rotas login, registro de usuários e pomodoro). Para manter a lógica dos frameworks o mais simples posível foi criado dentro da pasta "./pure-font-end/js/" 3 pastas, **domain**, **data** e **exceptions**. Elas seguem (tentam seguir) a arquitetura **clean-arquitecture** proposta por Uncle Bob em seu livro lançado em 2017. O código javascript dessas pastas é reutilizado em todos os frameworks, isso poupou tempo e melhorou a o entendimento do fluxo dos dados dentro da aplicação no front.

Para dar suporte ao front foi criada uma API javascript/nodejs usando o framework expressJS. essa API usa apenas cache para guardar os dados, sendo assim ao ser desligada perde todos esses dados. Ela foi desenvolvida apenas para dar um suporte simples a esse projeto, sendo assim toda a validação está nos front-ends e apenas o armazenamento de usuarios, tasks e tokens de autenticação fica como responsabilidade do back-end.

Note que react, svelte e vue possuem validação dos dados nos formulários de login e registro de usuário, o angular ficou um pouco complicado, por conta do tempo estou entregando na 2ª unidade sem a validação de formulários no angular. Note que na clean-arquitecture é responsabilidade das classes entidades a validação dos dados. Eu quebrei ainda mais a responsabilidade da validação para aumentar o reuso de código, assim criei classes do tipo **ValueObject** são classes usadas nos campos de outra classe que precisam de validacão, por exemplo, tem uma classe Email que valida um Email, outra Password que valida uma senha e essas classes são usadas como os tipos dos campos email e password da classe User que por sua vez é válida se seus campos email e password (lembrand que esses campos são dos tipos Email e Password) forem válidos.

A lógica explicada acima facilitou muito a parte de validação de um dado de entrada na aplicação. Existem classes Repository e dataSource que respectivamente é uma abstração ao dado e a outra dá acesso a fonte do dado (a API), essas classes estão dentro da pasta data. A pasta expceptions por sua vez armazena todas as excessões lançadas pela aplicação (o front).

## Contribuidores e avaliadores

Contribuidor/responsável: Nalbert Gabriel Melo Leal
Avaliador: Dr. André Mauricio

# Referencias:

livro de arquitetura limpa: [link](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164)
arquitetura limpa vs DDD: [link](https://khalilstemmler.com/articles/software-design-architecture/domain-driven-design-vs-clean-architecture/)
explicação de value objects no DDD: [link](https://khalilstemmler.com/articles/typescript-value-object/)