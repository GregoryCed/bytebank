# Bytebank

## Dependências:

Node - Versão 14.20.1

AngularCli - Versão 10.1.6

## Para fazer a instalação e o gerenciamento das versões do node, eu uso o NVM

Código para a instalação:

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash`

`export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"`

`[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"`

## Instalando o node na versão 14.20.1:

`nvm install 14`

## Instalando o AngularCli:

`npm install -g @angular/cli@10.1.6`

`npm install @angular/cli@10.1.6`

Tem que instalar ele tanto globalmente quanto dentro do projeto.

## Abrindo o projeto no servidor local:

`ng serve --open`
