# CopaScape

CopaScape e um jogo 3D arcade de futebol e fuga para navegador. O jogador assume o papel de um atleta de selecao nacional em uma campanha rumo ao titulo, coletando tacas, escapando de rivais, evitando juizes e superando missoes em um estadio vibrante.

O projeto combina a energia de uma Copa do Mundo com mecanicas de aventura, furtividade leve, progressao e desafios de fases. A proposta visual segue um estilo indie premium, com personagens low-poly carismaticos inspirados em jogos arcade modernos.

## Destaques

- Campo 3D jogavel com estadio, arquibancadas, torcida, telões, banners e iluminacao noturna.
- Personagens arcade low-poly criados com formas arredondadas, cabeca expressiva, uniforme detalhado e silhueta marcante.
- Selecao de equipes com escudos, cores de uniforme e identidade visual propria.
- Inimigos com papeis diferentes: marcador rapido, juiz, goleiro, rival forte e boss recorrente.
- Missoes variadas por fase, incluindo coleta de tacas, roubo de chave, alavancas, fuga por tunel e protecao da taca.
- HUD esportivo futurista com minimapa, narrador, stamina, bonus, objetivo e informacoes da partida.
- Menu inicial premium com progressao, moedas, desafios diarios, loja, conquistas, ranking e modo copa.
- Suporte mobile com joystick virtual, botoes de habilidade, HUD compacto e modo leve automatico.
- PWA instalavel no celular, com manifest, service worker, icone e orientacao em paisagem.
- Sistema de XP, niveis, recompensas, conquistas, estrelas por fase e melhores tempos locais.
- Efeitos de coleta, particulas, power-ups, feedback visual, narrador dinamico e momentos heroicos.
- Versao standalone em HTML unico para abrir diretamente no navegador.

## Gameplay

O objetivo muda conforme a fase, mas a base da experiencia e sempre clara: cumprir a missao, sobreviver aos adversarios e escapar para avancar na Copa.

As fases aumentam gradualmente a dificuldade:

1. **Fase de Grupos:** introduz movimento, coleta de tacas e fuga simples.
2. **Oitavas:** adiciona juiz com chave e rotas alternativas.
3. **Quartas:** traz perseguicoes mais fortes e objetivos de ativacao.
4. **Semifinal:** muda posicoes do tunel, areas perigosas e obstaculos.
5. **Final:** coloca o jogador contra o rival principal em uma disputa decisiva pela taca.

## Controles

| Acao | Tecla |
| --- | --- |
| Movimento | `WASD` ou setas |
| Turbo | `Shift` |
| Escudo | `E` |
| Ver mapa | `M` |
| Pausar | `P` ou `Esc` |

No celular, o jogo exibe joystick virtual, botao de turbo, botao de escudo e botao de mapa. O botao de tela cheia tenta ativar fullscreen e travar a orientacao em paisagem quando o navegador permite.

## Mobile e PWA

- O modo leve reduz pixel ratio, sombras, particulas, torcida animada, brilhos e luzes dinamicas em aparelhos mais fracos.
- O app pode ser instalado pela opcao "Adicionar a tela inicial" em navegadores compativeis.
- O PWA funciona melhor via servidor local, hospedagem HTTPS ou build de producao. Arquivos abertos direto por `file://` nao registram service worker.
- Para uma publicacao futura na Play Store, o projeto pode ser empacotado com Capacitor ou Cordova usando o build da pasta `dist/`.

## Tecnologias

- [Three.js](https://threejs.org/) para renderizacao 3D.
- [Vite](https://vite.dev/) para desenvolvimento e build.
- HTML, CSS e JavaScript modular.
- Assets locais e texturas otimizadas para navegador.

## Como Rodar Localmente

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador:

```text
http://127.0.0.1:5173/
```

## Build de Producao

Para gerar a versao otimizada:

```bash
npm run build
```

Para visualizar o build:

```bash
npm run preview
```

## Versao Standalone

O arquivo abaixo contem uma versao jogavel em HTML unico:

```text
copa-escape-3d.html
```

Ele pode ser aberto diretamente no navegador, sem servidor local.

## Estrutura do Projeto

```text
.
├── src/
│   ├── assets/        # Logos, imagens, icones e texturas do jogo
│   ├── main.js        # Logica principal, cena 3D, gameplay e sistemas
│   └── styles.css     # Interface, HUD, menus e responsividade
├── public/            # Paginas auxiliares
├── index.html         # Estrutura principal da aplicacao
├── copa-escape-3d.html# Build standalone em arquivo unico
├── server.cjs         # Servidor local simples
├── package.json       # Scripts e dependencias
└── vite.config.js     # Configuracao do Vite
```

## Roadmap

- Expandir otimizacoes mobile com carregamento progressivo de assets.
- Expandir o modo historia com novas cutscenes e escolhas de campanha.
- Adicionar novos estadios tematicos e chefes exclusivos.
- Criar mais cosméticos para loja e recompensas de temporada.
- Evoluir o sistema de replay e melhores momentos.
- Empacotar versao mobile com Capacitor ou Cordova.
- Preparar publicacao em plataformas como itch.io, Steam, Play Store ou web stores.

## Status

Projeto em desenvolvimento ativo. A versao atual ja e jogavel no navegador e serve como base para evolucao visual, mecanica e publicacao.
