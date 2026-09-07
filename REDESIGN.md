# Redesign Pizza Quadrada

## Resultado e auditoria

Projeto React + Vite existente preservado, com JavaScript, JSX, CSS Modules e GSAP. `App.jsx`, `main.jsx`, dependências, configuração do Vite, imagens locais e `menuData.js` foram mantidos. Os três sabores continuam sendo A Essencial, Bosco e Horta, com descrições originais e preços `R$ ---`. Instagram preservado: https://www.instagram.com/pizza.quadrada__/.

Home: TopBar → Header → Hero → MenuShowcase → DealsAndAbout → LocationOrder → InstagramSection → Footer. Grade desktop com três produtos e um card de pedido, sem inventar um quarto sabor. O antigo carrossel foi substituído por cards simultâneos. Galeria incorporada ao Instagram; pedido incorporado à faixa de localização. Removido o scroll preso da experiência editorial. Animações discretas respeitam movimento reduzido.

## Arquivos criados

- `src/components/BrandLogo/BrandLogo.jsx` e `BrandLogo.module.css`
- `src/components/TopBar/TopBar.jsx` e `TopBar.module.css`
- `src/components/DealsAndAbout/DealsAndAbout.jsx` e `DealsAndAbout.module.css`
- `src/components/LocationOrder/LocationOrder.jsx` e `LocationOrder.module.css`
- `src/data/site.js` — navegação, Instagram e URL de pedido.
- `src/hooks/useReveal.js` — animações de entrada com limpeza GSAP.
- `REDESIGN.md` — este relatório.

## Arquivos alterados / componentes reaproveitados

- `index.html`: título, descrição, idioma mantido e cor do tema. Favicon vazio evita requisição automática; nenhum símbolo fictício foi criado.
- `src/pages/Home/Home.jsx`: composição e link para pular ao conteúdo.
- `src/styles/variables.css` e `globals.css`: nova paleta, Barlow Condensed + Inter, botões, foco e responsividade.
- JSX e CSS Module de `Header`, `Hero`, `MenuShowcase`, `About`, `InstagramSection` e `Footer`: identidade visual substituída.

## Arquivos removidos

- `src/components/Experience/Experience.jsx` e `Experience.module.css`
- `src/components/FinalCTA/FinalCTA.jsx` e `FinalCTA.module.css`
- `src/components/Gallery/Gallery.jsx` e `Gallery.module.css`

Nenhum asset foi apagado.

## Logo: pendência de arquivo

A imagem da logo apareceu na conversa, mas nenhum arquivo de imagem foi disponibilizado na pasta de anexos ou no projeto. Por isso, **a logo não foi salva nem recriada**. Header e Footer mostram uma reserva explicitamente identificada como “Logo original pendente”.

Salvar o arquivo original em `src/assets/logo-pizza-quadrada.png` (também aceita jpg, jpeg ou webp com o mesmo nome). O componente BrandLogo detecta o asset no build e o utiliza nos dois locais, com `alt="Pizza Quadrada"`, largura responsiva, altura automática e `object-fit: contain`. Depois de adicionar o arquivo, executar novamente `npm run build` e conferir a integração visual. A primeira imagem de referência também não estava acessível; a composição seguiu a descrição do pedido.

## Informações provisórias / dados necessários

- WhatsApp oficial para substituir `orderUrl = '#'` em `src/data/site.js`. Os CTAs levam à seção de pedido; o botão final ainda é placeholder e não envia pedidos.
- Preços e confirmação do cardápio atual.
- Duas promoções reais, condições e validade. Os dois cards estão marcados como demonstrativos, com TODOs.
- História oficial. O texto existente foi preservado como demonstrativo, e o botão abre mais informações via `details`.
- Endereço e localização para o mapa. Nenhuma localização fictícia foi utilizada.
- Dias e horários de funcionamento; confirmação das opções de delivery e retirada.
- Fotos oficiais para substituir as imagens ilustrativas existentes.
- Arquivo original da logo; slogan definitivo, se houver. O título do Hero preserva “Um novo jeito de comer pizza”.

## Validação

- `npm run build`: aprovado, sem erros ou avisos do build.
- Chrome headless na versão de produção: 375, 430, 768, 1024, 1440 e 1920 px.
- Sem overflow horizontal, imagens quebradas, respostas HTTP 404, erros ou warnings de console.
- Um H1; todos os destinos das âncoras internas presentes.
- Menu mobile: abre, fecha por Escape e bloqueia/desbloqueia o body; atributos ARIA implementados.
- Movimento reduzido: Hero permanece visível; nenhuma seção prende o scroll.
- Capturas desktop e mobile inspecionadas durante a implementação.

As fontes usam Google Fonts com fallback sans-serif; todas as fotografias são locais. A validação da logo original depende do arquivo pendente.
