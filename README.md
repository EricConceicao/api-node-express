## API JSON com Express

## Comandos úteis

### GIT
```
git --version
```

### Verifica a versão do git instalada
Comandos para configuração do usuário na maquina.
```
git config --global user.name "Fulaninho"
git config --global user.email "fdfggGfdfg@com"
```

### Inicializa o git na pasta atual
```
git init
```

### Situação do git na pasta atual
```
git status
```

### Vincula à pasta local ao repositório remoto
```
git remote add origin <link do respositório>
```

### Status dos arquivos / legendas
```
U - untracked (não rastreado/novo)
M - modified (modificado)
D - Deleted (deletado)
```

### Prepara os arquivos os passando para (staged)
```
git add .
```

### Passa do stage para o commit
```
git commit -m "comentários"
```

### Envia os arquivos para o repositório remoto
```
git push
```


## Node

### Verifica a versão do node instalado
```
node --v
```

### NPM (Node Package Manager)
```
npm -v
```
### import from & require
O atributo ``type`` no package.json determina o estilo de importação com ``type:'module'`` se usa o estilo: 

``import n1 from './'``

Do contrário:

`const n1 = require('./')`


## Express Framework

### Formas da organização com o modelo MVC

A nomeclatura dos arquivos de controle fica a gosto do operador, e há duas maneiras de se fazer os controllers.

#### Criando um arquivo único como user.controller.js e ter toda à lógica centrada nele 
**Prós**
- Código centralizado.
- Menos imports no arquivos de rotas.
**Contras**
- O arquivo pode ficar imenso e dificultar a leitura do código.
- Você terá que procurar determinado controle no meio da bagunça.

#### Criando com uma pasta e vários arquivos para cada controller 
```
'controllers/user/insertUser.js'
```
**Prós**
- Cada arquivo com nome do associado a seu controle.
- Cada arquivo terá apenas um controle específico.
- Muito fácil de usar a ferramenta buscar arquivos se você usar uma nomeclatura boa para os arquivos.
**Contras**
- Você terá muito mais arquivos, mesmo que sejam lógicas pequenas.
- Você terá que importar um à um no arquivo de rotas ou onde for usar sua função.
