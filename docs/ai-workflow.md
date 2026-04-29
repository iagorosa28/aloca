# Fluxo de trabalho com IA

Este documento descreve como o Aloca será desenvolvido com apoio de IA.

## Papéis

### Iago

Iago é o responsável humano pelo projeto e não pretende escrever código manualmente neste projeto.

Suas responsabilidades incluem:

- definir objetivos e prioridades;
- decidir escopo de produto;
- aprovar ou rejeitar alterações;
- testar funcionalidades;
- validar regras de negócio;
- revisar entregas;
- manter coerência entre produto, código e documentação.

### ChatGPT

ChatGPT será usado principalmente para:

- discutir ideias de produto;
- planejar funcionalidades;
- revisar decisões;
- apoiar decisões de arquitetura;
- ajudar na criação e refinamento de prompts;
- ajudar a escrever ou melhorar documentação;
- levantar riscos, alternativas e próximos passos;
- apoiar a decomposição de tarefas para implementação.

### Codex

Codex será usado como agente principal de implementação, principalmente para:

- investigar o código existente;
- implementar alterações em arquivos;
- criar ou atualizar documentação;
- executar comandos locais quando necessário;
- propor ajustes técnicos;
- resumir mudanças feitas no projeto.

## Regra principal

Nenhuma mudança gerada por IA deve ser aceita automaticamente.

Toda alteração relevante deve passar por revisão humana. Iago continua responsável por entender, testar, validar e aprovar as mudanças antes que elas sejam consideradas parte do projeto.

## Fluxo padrão de trabalho

1. Iago define o objetivo da tarefa.
2. ChatGPT pode ser usado para planejar, discutir alternativas, revisar arquitetura e organizar o escopo.
3. Codex recebe uma tarefa clara, com contexto, escopo e restrições.
4. Codex investiga o repositório antes de alterar arquivos.
5. Codex informa o plano e os arquivos que pretende alterar.
6. Codex implementa a mudança.
7. Codex resume os arquivos alterados, o que mudou e eventuais decisões tomadas.
8. Iago revisa, testa e decide se aceita a mudança.

## Boas práticas

- Definir claramente o objetivo antes de pedir implementação.
- Informar o que está dentro e fora de escopo.
- Pedir que Codex liste os arquivos que pretende alterar antes de editar.
- Manter mudanças pequenas e revisáveis.
- Separar decisões de produto, arquitetura e implementação.
- Registrar decisões importantes em `docs/decision-log.md`.
- Não tratar respostas da IA como autoridade final.
- Revisar documentação e código com o mesmo cuidado.

## Exemplo de prompt para Codex

```txt
Você está trabalhando no projeto Aloca.

Objetivo:
Implementar ou atualizar [descreva a tarefa].

Contexto:
- [explique o estado atual ou a decisão tomada]
- [liste arquivos ou módulos relevantes, se souber]

Escopo:
- [liste o que deve ser feito]

Fora de escopo:
- [liste o que não deve ser alterado]

Antes de alterar arquivos:
1. Explique rapidamente o plano.
2. Liste os arquivos que pretende criar ou modificar.

Depois de implementar:
1. Liste os arquivos alterados.
2. Resuma o que mudou.
3. Informe se houve alguma decisão adicional tomada durante a implementação.
```
