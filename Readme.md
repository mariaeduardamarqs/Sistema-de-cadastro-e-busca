## 📑 Sumário

- [Sobre](#-sobre)
- [Funcionalidades](#-funcionalidades)
- [Como executar](#-como-executar)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Conceitos aplicados](#-conceitos-aplicados)
- [Regras de validação](#-regras-de-validação)
- [Códigos de erro](#-códigos-de-erro)

---

## 📖 Sobre

O sistema roda no terminal e permite matricular alunos, contratar professores e buscar cadastros pelo CPF. Os dados ficam armazenados em memória durante a execução.

## ✨ Funcionalidades

| Opção | Ação | Dados solicitados |
|:---:|---|---|
| **1** | 🧑‍🎓 Matricular aluno | nome, CPF, e-mail, idade, curso |
| **2** | 👨‍🏫 Contratar professor | nome, CPF, e-mail, salário, titulação |
| **3** | 🔎 Buscar cadastro | CPF |
| **4** | 🚪 Sair | – |

## 🚀 Como executar

**Requisito:** Node.js 18 ou superior.

```bash
node index.js
```

> O `package.json` já define `"type": "module"`, necessário para os `import`/`export`.

## 🗂️ Estrutura do projeto

```text
📦 laboratorio_pratico
 ┣ 📜 index.js              → menu e interação com o usuário
 ┣ 📜 GestorAcademico.js    → cadastro, busca e tradução de erros
 ┣ 📜 PessoaBase.js         → classe abstrata (nome, CPF, e-mail)
 ┣ 📜 Aluno.js              → herda de PessoaBase
 ┣ 📜 Professor.js          → herda de PessoaBase
 ┣ 📜 ValidadorUtil.js      → validação de CPF e e-mail
 ┣ 📜 Dominio.js            → enums de status e titulação
 ┗ 📜 package.json
```

| Arquivo | Responsabilidade |
|---|---|
| `index.js` | Ponto de entrada: exibe o menu, lê os dados e chama o gestor. |
| `GestorAcademico.js` | Guarda alunos e professores em listas, cadastra, busca por CPF e converte códigos de erro em mensagens amigáveis. |
| `PessoaBase.js` | Classe **abstrata** com `nome`, `cpf` e `email` privados e suas validações. |
| `Aluno.js` | Adiciona `idade` (privada), `curso` e `status`. |
| `Professor.js` | Adiciona `salario` (privado) e `titulacao`. |
| `ValidadorUtil.js` | Métodos estáticos `validarCpf` e `validarEmail`. |
| `Dominio.js` | `StatusMatriculaEnum` e `TitulacaoEnum`. |

## 🧠 Conceitos aplicados

| Conceito | Onde aparece |
|---|---|
| **Herança** | `Aluno` e `Professor` estendem `PessoaBase`. |
| **Classe abstrata** | `PessoaBase` não pode ser instanciada (`new.target`). |
| **Encapsulamento** | Atributos privados com `#`, acessados por getters e setters. |
| **Enums** | Objetos imutáveis com `Object.freeze`. |
| **Tratamento de exceções** | `throw` nas classes e `try/catch/finally` no gestor. |
| **Métodos estáticos** | Utilitário `ValidadorUtil`. |

**Enums disponíveis**

- `StatusMatriculaEnum`: `ATIVA` · `TRANCADA` · `CANCELADA`
- `TitulacaoEnum`: `ESPECIALISTA` · `MESTRE` · `DOUTOR`

## ✅ Regras de validação

- **CPF:** exatamente 11 dígitos numéricos.
- **E-mail:** deve conter `@`.
- **Nome:** não pode ser vazio.
- **Idade (aluno):** entre 14 e 120 anos.
- **Salário (professor):** mínimo de R$ 1.500,00.

## ⚠️ Códigos de erro

| Código | Significado |
|---|---|
| `ERR_CLASSE_ABSTRATA` | Tentativa de instanciar `PessoaBase`. |
| `ERR_NOME_VAZIO` | Nome vazio ou só com espaços. |
| `ERR_CPF_INVALIDO` | CPF fora do formato esperado. |
| `ERR_EMAIL_INVALIDO` | E-mail sem `@`. |
| `ERR_TIPO_INVALIDO` | Valor não numérico em idade ou salário. |
| `ERR_IDADE_MINIMA` | Idade fora do intervalo permitido. |
| `ERR_SALARIO_BASE` | Salário abaixo do piso da categoria. |
