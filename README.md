# Testes iOS - EBAC

Projeto desenvolvido para o exercício do Módulo 29 da EBAC, com foco em automação de testes iOS utilizando WebDriverIO e Appium.

## Objetivo

Implementar uma suíte de testes automatizados para o fluxo de compra do aplicativo EBAC Store em ambiente iOS.

## Fluxo automatizado

- Login no aplicativo
- Acesso à área Browse
- Seleção de produto
- Adição do produto ao carrinho
- Adição de endereço
- Continuação para pagamento
- Finalização do checkout

## Tecnologias utilizadas

- JavaScript
- Node.js
- WebDriverIO
- Appium
- XCUITest

## Como executar

```bash
npm install
npm run wdio

## Observação

A execução completa de testes iOS exige ambiente macOS com Xcode e xcrun configurados. Como o projeto foi desenvolvido em ambiente Windows, a execução apresenta erro relacionado à ausência do xcrun, comportamento esperado para esse ambiente.