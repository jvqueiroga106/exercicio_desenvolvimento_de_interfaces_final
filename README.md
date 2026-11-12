# EstudaMais

Site de estudos que fiz para o projeto final de Desenvolvimento de Interfaces. É feito só com HTML, CSS e JavaScript, sem framework.






## O que tem no site

- Página de login (a validação funciona, mas o envio é só simulado, não tem servidor)
- Carrossel de imagens com botões de anterior e próximo
- Cartões com as matérias
- Pesquisa com abas e campo de busca
- Formulário de contato
- Painel de acessibilidade: modo claro/escuro, fonte maior ou menor, alto contraste e botão para restaurar o padrão
- Rodapé

## Prints

Painel de acessibilidade com o modo escuro e a fonte maior:

![Modo escuro](images/02_acessibilidade_escuro.png)

Login:

![Login](images/03_login.png)

Carrossel:

![Carrossel](images/04_carrossel.png)

Cartões:

![Cartões](images/05_cartoes.png)

Pesquisa por abas:

![Pesquisa](images/06_pesquisa_abas.png)

Contato:

![Contato](images/07_contato.png)

Rodapé:

![Rodapé](images/08_rodape.png)

## Acessibilidade

Segui o WCAG 2.2 e calculei o contraste das cores nos três modos. Textos e botões passaram no nível AA ou AAA. A única coisa que ficou abaixo do recomendado foi a borda dos campos no modo claro, que pretendo escurecer depois.

Também dá para usar o site só com o teclado, e o foco aparece com um contorno amarelo. Tem um link "Pular para o conteúdo" no começo da página.

## Cores

Usei azul como cor principal por ser associado a concentração e confiança. Os valores:

| | Claro | Escuro | Alto contraste |
|---|---|---|---|
| Fundo | #FFFFFF | #0F172A | #000000 |
| Texto | #1B1F2A | #E5E7EB | #FFFFFF |
| Primária | #1D4ED8 | #93C5FD | #FFFF00 |
| Cartões | #F1F5F9 | #1E293B | #000000 |

## Arquivos

```
README.md
images/       prints usados aqui
site/
  index.html
  style.css
  script.js
```

## Como abrir

Baixe ou clone o repositório e abra o arquivo `site/index.html` no navegador. Não precisa instalar nada.

## Autor

[SEU NOME] - RA [SEU RA]
