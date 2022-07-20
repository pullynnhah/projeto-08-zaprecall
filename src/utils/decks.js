const decks = {
  Terminal: [
    {
      question: "Como ir de qualquer diretório para o home do usuário?",
      answer: "cd",
    },
    {
      question: "Como voltar para o diretório pai?",
      answer: "cd ..",
    },
    {
      question: "Como ir para um diretório filho?",
      answer: "cd <dirname>",
    },
    {
      question: "Qual comando mostra o path atual?",
      answer: "pwd",
    },
    {
      question: "Qual comando mostra o nome do usuário?",
      answer: "whoami",
    },
    {
      question: "Como criar um diretório vazio?",
      answer: "mkdir <dirname>",
    },
    {
      question: "Como remover um diretório vazio?",
      answer: "rmdir <dirname>",
    },
    {
      question: "Como criar um arquivo?",
      answer: "touch <filename>",
    },
    {
      question: "Qual comando te deixa ver o conteúdo do arquivo direto no terminal?",
      answer: "cat <filename>",
    },
    {
      question: "Como mostrar no terminal as primeiras N linhas de um arquivo?",
      answer: "head -n N <filename>",
    },
    {
      question: "Como mostrar no terminal as últimas N linhas de um arquivo?",
      answer: "tail -n N <filename>",
    },
    {
      question: "Qual comando deleta uma pasta e seus conteúdos?",
      answer: "rm -r <dirname>",
    },
    {
      question: "Qual comando remove um arquivo?",
      answer: "rm <filename>",
    },
    {
      question: "Qual símbolo representa a home?",
      answer: "~",
    },
    {
      question: "Qual símbolo representa o diretório atual?",
      answer: ".",
    },
    {
      question: "Qual símbolo representa o diretório pai?",
      answer: "..",
    },
    {
      question: "Como renomear arquivos/diretórios?",
      answer: "mv <oldname> <newname>",
    },
    {
      question: "Como mover arquivos/diretórios?",
      answer: "mv <name> <existingfolder>",
    },
    {
      question: "Como copiar arquivos?",
      answer: "cp <filename> <copyname>",
    },
    {
      question: "Como copiar pastas?",
      answer: "cp -r <filename> <copyname>",
    },
    {
      question: "Como imprimir 'Hello World!' no terminal?",
      answer: "echo 'Hello World!",
    },
    {
      question: "Como salvar 'Hello World!' em 'hello.txt'?",
      answer: "echo 'Hello World! > hello.txt",
    },
    {
      question: "Como limpar o terminal?",
      answer: "clear",
    },
    {
      question: "Como parar execução de um código?",
      answer: "CTRL + C",
    },
    {
      question: "Como fechar o terminal?",
      answer: "exit",
    },
  ],
  Git: [
    {
      question: "Como iniciar um repositório git?",
      answer: "git init",
    },
    {
      question:
        "Em qual arquivo deve-se colocar o nome de pastas/arquivos a serem ignorados pelo git?",
      answer: ".gitignore",
    },
    {
      question: "Quais os passos para adicionar mudanças ao repo no GitHub?",
      answer: "git add <filename>\ngit commit -m 'mensagem'\ngit push",
    },
    {
      question: "Qual o comando para adicionar um arquivo a área de staging?",
      answer: "git add <filename>",
    },
    {
      question: "Qual o commando para commitar as mudanças?",
      answer: "git commit -m 'mensagem'",
    },
    {
      question: "Como ver o histórico de commits?",
      answer: "git log",
    },
    {
      question: "Como ver a área de staging?",
      answer: "git status",
    },
  ],
};

export default decks;
