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