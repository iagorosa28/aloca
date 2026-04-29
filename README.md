# Aloca

O **Aloca** é uma aplicação web para organização de carteiras de investimentos e simulação de aportes com base em alocação percentual definida pelo próprio usuário.

O projeto também funciona como um laboratório pessoal de desenvolvimento assistido por IA. A ideia é usar ChatGPT para planejamento, revisão, arquitetura, prompts e documentação, e Codex como agente principal de implementação.

## Objetivo funcional

O objetivo funcional do Aloca é ajudar o usuário a:

- registrar ativos de uma carteira de investimentos;
- definir uma alocação percentual desejada;
- visualizar a distribuição atual da carteira;
- comparar a alocação atual com a alocação alvo;
- simular novos aportes de acordo com os percentuais definidos.

O Aloca não faz recomendação financeira. A aplicação apenas organiza informações e calcula distribuições a partir dos dados e metas informados pelo usuário.

## Objetivo como laboratório de IA

O Aloca também será usado para experimentar um fluxo de desenvolvimento em que agentes de IA participam do ciclo de construção do software.

Neste fluxo:

- ChatGPT apoia planejamento, revisão, arquitetura, prompts e documentação;
- Codex atua como agente principal de implementação, além de apoiar alterações em arquivos, investigação do código e documentação;
- Iago não pretende escrever código manualmente neste projeto;
- Iago permanece responsável por decisões, validação, testes, revisão, aprovação e direção do projeto.

O objetivo não é automatizar decisões, mas aprender a conduzir um projeto real com apoio de IA de forma crítica, controlada e documentada.

## Premissa de desenvolvimento

O desenvolvimento do Aloca parte das seguintes premissas:

- toda mudança relevante deve ser compreendida e aprovada por uma pessoa;
- código gerado por IA deve ser revisado antes de ser aceito;
- decisões de produto, arquitetura e escopo continuam sendo humanas;
- Iago atua como responsável humano por decisões, validação, testes, revisão e aprovação;
- documentação deve acompanhar as principais decisões do projeto;
- o projeto deve evoluir de forma incremental, com escopo pequeno e verificável.

## Visão inicial do produto

A primeira versão do Aloca deve ser simples e focada em organização manual de carteira. O usuário deverá conseguir cadastrar ativos, informar valores atuais, definir metas percentuais e simular como um novo aporte poderia ser distribuído para aproximar a carteira da alocação desejada.

O produto deve priorizar clareza, controle do usuário e transparência nos cálculos.

## Status

Projeto em fase inicial.

O repositório já possui a estrutura base com `backend/`, `frontend/` e `e2e/`, mas a visão de produto, o fluxo de trabalho com IA e as decisões iniciais ainda estão sendo documentados.

## Estrutura do projeto

```txt
aloca/
|-- backend/
|-- frontend/
|-- e2e/
|-- docs/
|   |-- ai-workflow.md
|   |-- product-vision.md
|   `-- decision-log.md
|-- README.md
`-- package.json
```

## Documentação

- [Fluxo de trabalho com IA](docs/ai-workflow.md)
- [Visão de produto](docs/product-vision.md)
- [Log de decisões](docs/decision-log.md)
