import * as THREE from 'three';
import './styles.css';
import brasilLogo from './assets/logos/brasil.png';
import argentinaLogo from './assets/logos/argentina.png';
import francaLogo from './assets/logos/franca.png';
import alemanhaLogo from './assets/logos/alemanha.png';
import espanhaLogo from './assets/logos/espanha.png';
import portugalLogo from './assets/logos/portugal.png';
import inglaterraLogo from './assets/logos/inglaterra.png';
import japaoLogo from './assets/logos/japao.png';
import kenneyTrophyIcon from './assets/kenney/ui/icon-trophy.png';
import kenneyPowerIcon from './assets/kenney/ui/icon-power.png';
import kenneyTargetIcon from './assets/kenney/ui/icon-target.png';
import kenneySoccerBall from './assets/kenney/sports/ball-soccer.png';
import kenneyYellowCard from './assets/kenney/sports/card-yellow.png';

const canvas = document.querySelector('#game');
const app = document.querySelector('#app');
const menuScreen = document.querySelector('#menu-screen');
const howScreen = document.querySelector('#how-screen');
const levelScreen = document.querySelector('#level-screen');
const achievementsScreen = document.querySelector('#achievements-screen');
const dailyScreen = document.querySelector('#daily-screen');
const rankingScreen = document.querySelector('#ranking-screen');
const editorScreen = document.querySelector('#editor-screen');
const shopScreen = document.querySelector('#shop-screen');
const pauseScreen = document.querySelector('#pause-screen');
const levelCompleteScreen = document.querySelector('#level-complete-screen');
const teamScreen = document.querySelector('#team-screen');
const gameOverScreen = document.querySelector('#game-over');
const hud = document.querySelector('#hud');
const minimap = document.querySelector('#minimap');
const minimapContext = minimap.getContext('2d');
const narrator = document.querySelector('#narrator');
const narratorLine = document.querySelector('#narrator-line');
const cutscene = document.querySelector('#cutscene');
const cutsceneKicker = document.querySelector('#cutscene-kicker');
const cutsceneTitle = document.querySelector('#cutscene-title');
const cutsceneCopy = document.querySelector('#cutscene-copy');
const cutsceneTeamLogo = document.querySelector('#cutscene-team-logo');
const cutsceneTeamName = document.querySelector('#cutscene-team-name');
const cutsceneRivalLogo = document.querySelector('#cutscene-rival-logo');
const cutsceneRivalName = document.querySelector('#cutscene-rival-name');
const cutsceneProgress = document.querySelector('#cutscene-progress');
const pauseButton = document.querySelector('#pause-button');
const abilityDock = document.querySelector('#ability-dock');
const mobileSystemActions = document.querySelector('#mobile-system-actions');
const fullscreenButton = document.querySelector('#fullscreen-button');
const menuFullscreenButton = document.querySelector('#menu-fullscreen-button');
const installAppButton = document.querySelector('#install-app-button');
const menuInstallButton = document.querySelector('#menu-install-button');
const touchControls = document.querySelector('#touch-controls');
const touchJoystick = document.querySelector('#touch-joystick');
const touchJoystickKnob = document.querySelector('#touch-joystick-knob');
const touchTurboButton = document.querySelector('#touch-turbo-button');
const touchShieldButton = document.querySelector('#touch-shield-button');
const touchMapButton = document.querySelector('#touch-map-button');
const teamGrid = document.querySelector('#team-grid');
const levelGrid = document.querySelector('#level-grid');
const achievementGrid = document.querySelector('#achievement-grid');
const dailyGrid = document.querySelector('#daily-grid');
const rankingGrid = document.querySelector('#ranking-grid');
const shopGrid = document.querySelector('#shop-grid');
const editorMission = document.querySelector('#editor-mission');
const editorMap = document.querySelector('#editor-map');
const editorObjectives = document.querySelector('#editor-objectives');
const editorObstacles = document.querySelector('#editor-obstacles');
const editorTheme = document.querySelector('#editor-theme');
const profileLevel = document.querySelector('#profile-level');
const profileXpLabel = document.querySelector('#profile-xp-label');
const profileXpBar = document.querySelector('#profile-xp-bar');
const profileCoins = document.querySelector('#profile-coins');
const headerXp = document.querySelector('#header-xp');
const homeTeamLogo = document.querySelector('#home-team-logo');
const homeTeamName = document.querySelector('#home-team-name');
const homePlayerModel = document.querySelector('#home-player-model');
const homePlayerLabel = document.querySelector('#home-player-label');
const progressLevel = document.querySelector('#progress-level');
const progressPercent = document.querySelector('#progress-percent');
const nextRewardLabel = document.querySelector('#next-reward-label');
const campaignTeam = document.querySelector('#campaign-team');
const campaignStage = document.querySelector('#campaign-stage');
const campaignLast = document.querySelector('#campaign-last');
const campaignBest = document.querySelector('#campaign-best');
const campaignChapter = document.querySelector('#campaign-chapter');
const campaignObjective = document.querySelector('#campaign-objective');
const campaignReward = document.querySelector('#campaign-reward');
const cupBracketList = document.querySelector('#cup-bracket-list');
const dailyRewardButton = document.querySelector('#daily-reward-button');
const dailyRewardStatus = document.querySelector('#daily-reward-status');
const albumProgressLabel = document.querySelector('#album-progress-label');
const stadiumProgressLabel = document.querySelector('#stadium-progress-label');
const missionProgressBar = document.querySelector('#mission-progress-bar');
const missionProgressLabel = document.querySelector('#mission-progress-label');
const streakLabel = document.querySelector('#streak-label');
const newsTitle = document.querySelector('#news-title');
const newsCopy = document.querySelector('#news-copy');
const shopProfile = document.querySelector('#shop-profile');
const playButton = document.querySelector('#play-button');
const howButton = document.querySelector('#how-button');
const levelsButton = document.querySelector('#levels-button');
const achievementsButton = document.querySelector('#achievements-button');
const shopButton = document.querySelector('#shop-button');
const dailyButton = document.querySelector('#daily-button');
const speedrunButton = document.querySelector('#speedrun-button');
const coopButton = document.querySelector('#coop-button');
const rankingButton = document.querySelector('#ranking-button');
const editorButton = document.querySelector('#editor-button');
const settingsButton = document.querySelector('#settings-button');
const profileButton = document.querySelector('#profile-button');
const howBackButton = document.querySelector('#how-back-button');
const levelBackButton = document.querySelector('#level-back-button');
const achievementsBackButton = document.querySelector('#achievements-back-button');
const dailyBackButton = document.querySelector('#daily-back-button');
const rankingBackButton = document.querySelector('#ranking-back-button');
const editorBackButton = document.querySelector('#editor-back-button');
const editorSaveButton = document.querySelector('#editor-save-button');
const editorPlayButton = document.querySelector('#editor-play-button');
const shopBackButton = document.querySelector('#shop-back-button');
const resumeButton = document.querySelector('#resume-button');
const pauseMenuButton = document.querySelector('#pause-menu-button');
const nextLevelButton = document.querySelector('#next-level-button');
const resultMenuButton = document.querySelector('#result-menu-button');
const startButton = document.querySelector('#start-button');
const restartButton = document.querySelector('#restart-button');
const hudTeam = document.querySelector('#hud-team');
const hudTeamLogo = document.querySelector('#hud-team-logo');
const hudLevel = document.querySelector('#hud-level');
const hudCups = document.querySelector('#hud-cups');
const hudObjective = document.querySelector('#hud-objective');
const hudPower = document.querySelector('#hud-power');
const hudStamina = document.querySelector('#hud-stamina');
const hudStaminaFill = document.querySelector('#hud-stamina-fill');
const hudBoostStatus = document.querySelector('#hud-boost-status');
const hudShieldStatus = document.querySelector('#hud-shield-status');
const hudHeroicStatus = document.querySelector('#hud-heroic-status');
const message = document.querySelector('#message');
const messageTitle = document.querySelector('#message-title');
const messageBody = document.querySelector('#message-body');
const resultKicker = document.querySelector('#result-kicker');
const resultTitle = document.querySelector('#result-title');
const statTime = document.querySelector('#stat-time');
const statObjectives = document.querySelector('#stat-objectives');
const statSaves = document.querySelector('#stat-saves');
const statBest = document.querySelector('#stat-best');
const statReward = document.querySelector('#stat-reward');
const statStars = document.querySelector('#stat-stars');
const statRank = document.querySelector('#stat-rank');
const replayList = document.querySelector('#replay-list');
const endKicker = document.querySelector('#end-kicker');
const endTitle = document.querySelector('#end-title');
const endCopy = document.querySelector('#end-copy');

const teams = [
  { name: 'Brasil', colors: [0x16a34a, 0xfacc15], logo: brasilLogo },
  { name: 'Argentina', colors: [0x38bdf8, 0xffffff], logo: argentinaLogo },
  { name: 'França', colors: [0x1d4ed8, 0xef4444], logo: francaLogo },
  { name: 'Alemanha', colors: [0x111827, 0xf8fafc], logo: alemanhaLogo },
  { name: 'Espanha', colors: [0xdc2626, 0xfacc15], logo: espanhaLogo },
  { name: 'Portugal', colors: [0x15803d, 0xef4444], logo: portugalLogo },
  { name: 'Inglaterra', colors: [0xf8fafc, 0xdc2626], logo: inglaterraLogo },
  { name: 'Japão', colors: [0xf8fafc, 0xbe123c], logo: japaoLogo }
];

const recurringRival = {
  name: 'El Matador',
  team: { name: 'Rival', colors: [0x7f1d1d, 0xfacc15], logo: null }
};

const PROFILE_STORAGE_KEY = 'copaEscapeProfileV2';
const MAX_PLAYER_LEVEL = 100;
const defaultOwnedItems = ['uniform_default', 'trail_none', 'trophy_classic', 'celebration_basic'];
const achievementDefinitions = [
  { id: 'first_champion', name: 'Primeiro Campeao', description: 'Venca sua primeira fase.', reward: 80 },
  { id: 'no_captures', name: 'Sem Capturas', description: 'Venca uma fase sem usar escudo contra captura.', reward: 120 },
  { id: 'escape_master', name: 'Mestre da Fuga', description: 'Complete a fase final da Copa.', reward: 260 },
  { id: 'cup_collector', name: 'Colecionador de Tacas', description: 'Colete 25 tacas no total.', reward: 180 },
  { id: 'speedster', name: 'Velocista', description: 'Venca qualquer fase em menos de 45 segundos.', reward: 150 }
];

const starTimeGoals = {
  1: 90,
  2: 100,
  3: 115,
  4: 125,
  5: 150
};

const cupStageNames = ['Grupos', 'Oitavas', 'Quartas', 'Semi', 'Final'];
const storyChapters = [
  {
    title: 'A selecao desacreditada',
    intro: 'Sua selecao chegou sem favoritismo. A torcida duvida, o rival observa e cada taca recuperada vira uma resposta.',
    objective: 'Colete as tacas da fase de grupos e prove que sua campanha merece continuar.',
    reward: '+120 XP / +49 moedas'
  },
  {
    title: 'O juiz fecha o caminho',
    intro: 'O arbitro travou a saida e El Matador comecou a cercar o campo. Roube a chave antes que a pressao engula sua selecao.',
    objective: 'Roube a chave do juiz e escolha a rota de classificacao.',
    reward: '+150 XP / +63 moedas'
  },
  {
    title: 'Provocacao nas oitavas',
    intro: 'El Matador provoca sua camisa e chama marcadores para a perseguicao. As alavancas mudam de lugar a cada partida.',
    objective: 'Ative 3 alavancas e escape enquanto a torcida reage a cada risco.',
    reward: '+180 XP / +77 moedas'
  },
  {
    title: 'Semifinal no limite',
    intro: 'O estadio virou um labirinto, o tunel muda de posicao e areas perigosas tomam o gramado.',
    objective: 'Encontre o tunel procedural e sobreviva aos bloqueios.',
    reward: '+210 XP / +91 moedas'
  },
  {
    title: 'Final contra El Matador',
    intro: 'A taca esta no centro do estadio. El Matador quer roubar sua historia no ultimo minuto.',
    objective: 'Proteja a taca, resista ao chefe e escolha como levantar o titulo.',
    reward: '+250 XP / +105 moedas'
  }
];
const dailyChallengePool = [
  { id: 'phase2_no_shield', name: 'Juiz limpo', description: 'Complete a fase 2 sem usar escudo.', rewardXp: 90, rewardCoins: 45 },
  { id: 'under_90', name: 'Relogio contra voce', description: 'Termine qualquer fase em menos de 90 segundos.', rewardXp: 80, rewardCoins: 40 },
  { id: 'three_star', name: 'Partida perfeita', description: 'Ganhe 3 estrelas em uma fase.', rewardXp: 110, rewardCoins: 55 },
  { id: 'collect_three', name: 'Colecionador diario', description: 'Colete pelo menos 3 tacas em uma partida.', rewardXp: 70, rewardCoins: 35 },
  { id: 'finish_phase4', name: 'Tunel do dia', description: 'Escape pelo tunel da fase 4.', rewardXp: 100, rewardCoins: 50 }
];

const speedrunRanks = [
  { name: 'Ouro', seconds: 360 },
  { name: 'Prata', seconds: 480 },
  { name: 'Bronze', seconds: 620 }
];

const shopItems = [
  { id: 'uniform_default', category: 'uniform', name: 'Uniforme da selecao', description: 'Usa as cores reais da selecao escolhida.', price: 0, level: 1, colors: null },
  { id: 'uniform_gold', category: 'uniform', name: 'Uniforme Campeao', description: 'Dourado com preto para partidas decisivas.', price: 220, level: 4, colors: [0xfacc15, 0x111827] },
  { id: 'uniform_neon', category: 'uniform', name: 'Uniforme Neon', description: 'Azul eletrico com verde de arena.', price: 360, level: 9, colors: [0x38bdf8, 0x22c55e] },
  { id: 'uniform_royal', category: 'uniform', name: 'Uniforme Real', description: 'Branco, vermelho e detalhe de final.', price: 520, level: 16, colors: [0xf8fafc, 0xdc2626] },
  { id: 'trail_none', category: 'trail', name: 'Sem efeito', description: 'Corrida limpa, sem rastro.', price: 0, level: 1, color: null },
  { id: 'trail_blue', category: 'trail', name: 'Rastro Azul', description: 'Faixas azuis ao arrancar.', price: 160, level: 3, color: 0x38bdf8 },
  { id: 'trail_gold', category: 'trail', name: 'Rastro Dourado', description: 'Rastro de campeao em velocidade.', price: 300, level: 7, color: 0xfacc15 },
  { id: 'trail_confetti', category: 'trail', name: 'Confete', description: 'Particulas coloridas durante a corrida.', price: 480, level: 14, color: 0x22c55e },
  { id: 'trophy_classic', category: 'trophy', name: 'Taca classica', description: 'Visual dourado tradicional.', price: 0, level: 1, cupColor: 0xffc83d, glow: 0xfacc15 },
  { id: 'trophy_crystal', category: 'trophy', name: 'Taca cristal', description: 'Taca azul brilhante para objetivos.', price: 240, level: 5, cupColor: 0x67e8f9, glow: 0x38bdf8 },
  { id: 'trophy_emerald', category: 'trophy', name: 'Taca esmeralda', description: 'Taca verde com brilho de estadio.', price: 380, level: 10, cupColor: 0x34d399, glow: 0x22c55e },
  { id: 'trophy_final', category: 'trophy', name: 'Taca final', description: 'Taca vermelha para desafios finais.', price: 620, level: 20, cupColor: 0xf97316, glow: 0xef4444 },
  { id: 'celebration_basic', category: 'celebration', name: 'Comemoracao simples', description: 'Vitoria classica ao fim da fase.', price: 0, level: 1 },
  { id: 'celebration_spin', category: 'celebration', name: 'Giro da Copa', description: 'Explosao circular ao vencer.', price: 180, level: 4 },
  { id: 'celebration_wave', category: 'celebration', name: 'Onda da Torcida', description: 'A torcida pulsa junto com a vitoria.', price: 340, level: 11 },
  { id: 'celebration_fireworks', category: 'celebration', name: 'Fogos da Final', description: 'Particulas coloridas na celebracao.', price: 560, level: 18 }
];

let currentShopCategory = 'uniform';

function createDefaultProfile() {
  return {
    xp: 0,
    coins: 0,
    ownedItems: [...defaultOwnedItems],
    equipped: {
      uniform: 'uniform_default',
      trail: 'trail_none',
      trophy: 'trophy_classic',
      celebration: 'celebration_basic'
    },
    achievements: {},
    stars: {},
    daily: {},
    bestSpeedrun: 0,
    rankings: {
      bestTime: [],
      fewerCaptures: [],
      mostCoins: []
    },
    adaptive: {
      losses: 0,
      wins: 0,
      averageTime: 0
    },
    customLevel: null,
    stats: {
      phasesCompleted: 0,
      finalWins: 0,
      trophiesCollected: 0,
      noCaptureWins: 0,
      fastestWin: 0
    }
  };
}

function loadProfile() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || 'null');
    const nextProfile = Object.assign(createDefaultProfile(), saved || {});
    nextProfile.ownedItems = Array.from(new Set([...(nextProfile.ownedItems || []), ...defaultOwnedItems]));
    nextProfile.equipped = Object.assign(createDefaultProfile().equipped, nextProfile.equipped || {});
    nextProfile.achievements = nextProfile.achievements || {};
    nextProfile.stars = nextProfile.stars || {};
    nextProfile.daily = nextProfile.daily || {};
    nextProfile.bestSpeedrun = nextProfile.bestSpeedrun || 0;
    nextProfile.rankings = Object.assign(createDefaultProfile().rankings, nextProfile.rankings || {});
    nextProfile.adaptive = Object.assign(createDefaultProfile().adaptive, nextProfile.adaptive || {});
    nextProfile.customLevel = nextProfile.customLevel || null;
    nextProfile.stats = Object.assign(createDefaultProfile().stats, nextProfile.stats || {});
    return nextProfile;
  } catch {
    return createDefaultProfile();
  }
}

const profile = loadProfile();

function saveProfile() {
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
}

function xpNeededForLevel(level) {
  return 90 + level * 35;
}

function getLevelInfo(totalXp = profile.xp) {
  let level = 1;
  let currentXp = totalXp;
  while (level < MAX_PLAYER_LEVEL && currentXp >= xpNeededForLevel(level)) {
    currentXp -= xpNeededForLevel(level);
    level += 1;
  }
  return {
    level,
    currentXp,
    neededXp: level >= MAX_PLAYER_LEVEL ? 0 : xpNeededForLevel(level)
  };
}

function getShopItem(id) {
  return shopItems.find((item) => item.id === id);
}

function getEquippedItem(category) {
  return getShopItem(profile.equipped[category]);
}

function getAdaptiveEnemyMultiplier() {
  if (profile.adaptive.losses >= profile.adaptive.wins + 2) return 0.86;
  if (profile.adaptive.wins >= profile.adaptive.losses + 3 && profile.adaptive.averageTime && profile.adaptive.averageTime < 70) return 1.1;
  return 1;
}

function getAdaptivePowerBonus() {
  return profile.adaptive.losses >= profile.adaptive.wins + 2 ? 1 : 0;
}

const state = {
  selectedTeam: teams[0],
  selectedLevel: 1,
  unlockedLevel: Number(localStorage.getItem('copaEscapeUnlockedLevel') || 1),
  pendingMode: 'normal',
  mode: 'normal',
  coop: false,
  customLevelActive: false,
  speedrunStartTime: 0,
  speedrunElapsed: 0,
  running: false,
  paused: false,
  pendingNextLevel: 1,
  level: 1,
  missionType: 'cup',
  missionLabel: 'Taças',
  cupsCollected: 0,
  cupsNeeded: 3,
  protectTimer: 0,
  protectDuration: 0,
  exitOpen: false,
  exitGate: null,
  exitChoices: [],
  selectedExitChoice: null,
  choiceRewardBonus: 0,
  protectedCup: null,
  keyHolder: null,
  boostTimer: 0,
  shield: false,
  stamina: 100,
  levelStartTime: 0,
  elapsedTime: 0,
  capturesAvoided: 0,
  shieldUsesThisLevel: 0,
  trophiesCollectedThisLevel: 0,
  lastReward: null,
  lastStars: 0,
  playerMoving: false,
  playerSprinting: false,
  hidden: false,
  player2: {
    active: false,
    object: null,
    stamina: 100,
    boostTimer: 0,
    shield: false,
    moving: false,
    sprinting: false,
    hidden: false,
    distractionCooldown: 0
  },
  quality: {
    mobile: false,
    lowPower: false,
    stadiumUpdateCooldown: 0
  },
  nearDangerTimer: 0,
  tutorialStep: 0,
  tutorialTimer: 0,
  keys: new Set(),
  touch: {
    moveX: 0,
    moveZ: 0,
    sprint: false,
    joystickPointerId: null,
    mapVisible: true
  },
  enemies: [],
  cups: [],
  powerUps: [],
  obstacles: [],
  dangerZones: [],
  shadowZones: [],
  eventObjects: [],
  cosmeticParticles: [],
  distraction: null,
  distractionCooldown: 0,
  rainSystem: null,
  activeEvent: null,
  eventCooldown: 0,
  rareEventTriggered: false,
  proceduralSeed: 0,
  crowdReactCooldown: 0,
  heroicTimer: 0,
  heroicCooldown: 0,
  heroicReason: '',
  trailCooldown: 0,
  minimapCooldown: 0,
  clock: new THREE.Clock(),
  messageTimer: 0,
  narratorTimer: 0,
  narratorCooldown: 0,
  cutsceneTimer: 0,
  cutsceneMax: 0,
  replayEvents: [],
  lastCaptureAvoided: null,
  rival: null,
  rivalMomentDone: false,
  rivalStealDone: false
};

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x061126);
scene.fog = new THREE.Fog(0x061126, 38, 96);

const camera = new THREE.PerspectiveCamera(56, 1, 0.1, 130);
const mobileRuntimeQuery = window.matchMedia('(max-width: 820px), (pointer: coarse)');
function isMobileRuntime() {
  return mobileRuntimeQuery.matches || navigator.maxTouchPoints > 0;
}
function isLowPowerRuntime() {
  const memory = Number(navigator.deviceMemory || 8);
  const cores = Number(navigator.hardwareConcurrency || 8);
  return isMobileRuntime() || memory <= 4 || cores <= 4;
}
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
function applyRuntimeQuality() {
  const mobile = isMobileRuntime();
  const lowPower = isLowPowerRuntime();
  state.quality.mobile = mobile;
  state.quality.lowPower = lowPower;
  app.classList.toggle('mobile-runtime', mobile);
  app.classList.toggle('low-power-runtime', lowPower);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 0.72 : lowPower ? 0.95 : 1.15));
  renderer.shadowMap.enabled = !lowPower;
  renderer.shadowMap.type = lowPower ? THREE.BasicShadowMap : THREE.PCFSoftShadowMap;
}
applyRuntimeQuality();
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.18;

const textureLoader = new THREE.TextureLoader();
function loadHudTexture(url) {
  const texture = textureLoader.load(url);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

const trophyIconTexture = loadHudTexture(kenneyTrophyIcon);
const powerIconTexture = loadHudTexture(kenneyPowerIcon);
const targetIconTexture = loadHudTexture(kenneyTargetIcon);
const soccerBallTexture = loadHudTexture(kenneySoccerBall);
const yellowCardTexture = loadHudTexture(kenneyYellowCard);
const sharedParticleGeometry = new THREE.SphereGeometry(1, 6, 4);
const sharedCollectRingGeometry = new THREE.TorusGeometry(1, 0.045, 8, 36);

function createBillboardSprite(texture, scale = 1, y = 1, color = 0xffffff, opacity = 1) {
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: texture,
      color,
      transparent: true,
      opacity,
      depthWrite: false
    })
  );
  sprite.scale.set(scale, scale, 1);
  sprite.position.y = y;
  return sprite;
}

let audioContext = null;
let crowdNoise = null;
function ensureAudio() {
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  if (audioContext.state === 'suspended') audioContext.resume();
}

function playTone(frequency, duration = 0.16, type = 'sine', volume = 0.08) {
  if (!audioContext) return;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(volume, audioContext.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration + 0.02);
}

function playSound(name) {
  ensureAudio();
  if (name === 'collect') {
    playTone(740, 0.08, 'triangle', 0.07);
    setTimeout(() => playTone(980, 0.1, 'triangle', 0.06), 70);
  } else if (name === 'whistle') {
    playTone(1700, 0.16, 'square', 0.045);
    setTimeout(() => playTone(1450, 0.12, 'square', 0.035), 170);
  } else if (name === 'portal') {
    playTone(420, 0.16, 'sine', 0.08);
    setTimeout(() => playTone(620, 0.2, 'sine', 0.07), 130);
    setTimeout(() => playTone(920, 0.26, 'sine', 0.06), 260);
  } else if (name === 'power') {
    playTone(520, 0.08, 'triangle', 0.06);
    setTimeout(() => playTone(1040, 0.16, 'triangle', 0.07), 80);
  } else if (name === 'danger') {
    playTone(120, 0.12, 'sawtooth', 0.04);
  } else if (name === 'trophy') {
    [523, 659, 784, 1046].forEach((tone, index) => setTimeout(() => playTone(tone, 0.14, 'triangle', 0.075), index * 78));
    setTimeout(() => playTone(1318, 0.18, 'sine', 0.045), 290);
  } else if (name === 'hit') {
    playTone(180, 0.09, 'sawtooth', 0.055);
    setTimeout(() => playTone(115, 0.08, 'square', 0.035), 70);
  } else if (name === 'win') {
    [520, 660, 780, 1040].forEach((tone, index) => setTimeout(() => playTone(tone, 0.16, 'triangle', 0.07), index * 110));
  }
}

function startCrowdSound() {
  ensureAudio();
  if (crowdNoise) return;
  const bufferSize = audioContext.sampleRate * 2;
  const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i += 1) data[i] = (Math.random() * 2 - 1) * 0.18;
  const source = audioContext.createBufferSource();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();
  source.buffer = buffer;
  source.loop = true;
  filter.type = 'bandpass';
  filter.frequency.value = 520;
  filter.Q.value = 0.7;
  gain.gain.value = 0.018;
  source.connect(filter).connect(gain).connect(audioContext.destination);
  source.start();
  crowdNoise = { source, gain };
}

function pulseCrowdSound(kind = 'good') {
  if (!audioContext) return;
  startCrowdSound();
  if (!crowdNoise) return;
  const peak = kind === 'danger' ? 0.052 : kind === 'win' ? 0.072 : 0.04;
  const settle = kind === 'win' ? 0.028 : 0.02;
  crowdNoise.gain.gain.cancelScheduledValues(audioContext.currentTime);
  crowdNoise.gain.gain.setTargetAtTime(peak, audioContext.currentTime, 0.05);
  crowdNoise.gain.gain.setTargetAtTime(settle, audioContext.currentTime + 0.55, 0.45);
  if (kind === 'good') {
    [390, 520].forEach((tone, index) => setTimeout(() => playTone(tone, 0.07, 'triangle', 0.018), index * 80));
  } else if (kind === 'win') {
    [440, 554, 659, 880].forEach((tone, index) => setTimeout(() => playTone(tone, 0.1, 'triangle', 0.022), index * 90));
  }
}

function stopCrowdSound() {
  if (!crowdNoise) return;
  crowdNoise.gain.gain.setTargetAtTime(0.0001, audioContext.currentTime, 0.2);
  setTimeout(() => {
    crowdNoise?.source.stop();
    crowdNoise = null;
  }, 350);
}

function flashFeedback(type) {
  app.classList.remove('feedback-danger', 'feedback-power', 'feedback-shield', 'feedback-collect', 'feedback-hit');
  app.classList.add(`feedback-${type}`);
  setTimeout(() => app.classList.remove(`feedback-${type}`), type === 'collect' ? 340 : 230);
}

function formatTime(seconds) {
  const total = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(total / 60).toString().padStart(2, '0');
  const secs = (total % 60).toString().padStart(2, '0');
  return `${minutes}:${secs}`;
}

function colorToCss(color) {
  return `#${color.toString(16).padStart(6, '0')}`;
}

function getDailyRewardKey() {
  return `copaEscapeDailyReward:${getTodayKey()}`;
}

function canClaimDailyReward() {
  return localStorage.getItem(getDailyRewardKey()) !== 'claimed';
}

function getCampaignInfo(level) {
  const chapter = storyChapters[THREE.MathUtils.clamp(level, 1, 5) - 1];
  return [
    `${getStageName(level)} - ${chapter.title}`,
    `Objetivo: ${chapter.objective}`,
    `Recompensa: ${chapter.reward}`
  ];
}

function getStoryChapter(level) {
  return storyChapters[THREE.MathUtils.clamp(level, 1, 5) - 1];
}

function renderCupBracket() {
  if (!cupBracketList) return;
  cupBracketList.innerHTML = '';
  cupStageNames.forEach((name, index) => {
    const level = index + 1;
    const item = document.createElement('div');
    const status = level < state.unlockedLevel ? 'done' : level === state.unlockedLevel ? 'current' : 'locked';
    const label = status === 'done' ? 'Classificado' : status === 'current' ? 'Em disputa' : 'Bloqueado';
    item.className = `cup-stage ${status}`;
    item.innerHTML = `<span>${name}</span><strong>${label}</strong>`;
    cupBracketList.appendChild(item);
  });
}

function updateHomeDashboard() {
  const info = getLevelInfo();
  const percent = info.neededXp ? Math.min(100, Math.round(info.currentXp / info.neededXp * 100)) : 100;
  const bestTime = profile.stats.fastestWin || getBestTime(state.unlockedLevel);
  const missionTarget = 5;
  const missionProgress = Math.min(missionTarget, profile.stats.trophiesCollected || 0);
  const currentLevel = Math.min(5, state.unlockedLevel);
  const [chapter, objective, reward] = getCampaignInfo(currentLevel);
  const albumCount = Math.min(120, profile.stats.trophiesCollected * 3 + getTotalStars() * 2 + Object.keys(profile.achievements).length * 4);
  const stadiumCount = Math.min(16, Math.max(1, state.unlockedLevel + Math.floor(getTotalStars() / 3)));
  if (homeTeamLogo) homeTeamLogo.src = state.selectedTeam.logo;
  if (homeTeamName) homeTeamName.textContent = state.selectedTeam.name;
  if (homePlayerModel) {
    homePlayerModel.style.setProperty('--kit-primary', colorToCss(state.selectedTeam.colors[0]));
    homePlayerModel.style.setProperty('--kit-secondary', colorToCss(state.selectedTeam.colors[1]));
  }
  if (homePlayerLabel) homePlayerLabel.textContent = `${state.selectedTeam.name} #10`;
  if (progressLevel) progressLevel.textContent = info.level;
  if (progressPercent) progressPercent.textContent = `${percent}%`;
  if (nextRewardLabel) nextRewardLabel.textContent = info.neededXp ? `+${45 + (info.level + 1) * 8} moedas` : 'Nivel maximo';
  if (campaignTeam) campaignTeam.textContent = state.selectedTeam.name;
  if (campaignStage) campaignStage.textContent = getStageName(currentLevel);
  if (campaignLast) campaignLast.textContent = profile.adaptive.averageTime ? `Media ${formatTime(profile.adaptive.averageTime)}` : 'Sem registro';
  if (campaignBest) campaignBest.textContent = bestTime ? formatTime(bestTime) : '--:--';
  if (campaignChapter) campaignChapter.textContent = chapter;
  if (campaignObjective) campaignObjective.textContent = objective;
  if (campaignReward) campaignReward.textContent = reward;
  renderCupBracket();
  if (headerXp) headerXp.textContent = info.neededXp ? `${info.currentXp}/${info.neededXp} XP` : 'Maximo';
  if (dailyRewardButton && dailyRewardStatus) {
    const available = canClaimDailyReward();
    dailyRewardButton.disabled = !available;
    dailyRewardButton.textContent = available ? 'Resgatar' : 'Resgatado';
    dailyRewardStatus.textContent = available ? 'Disponivel hoje.' : 'Volte amanha para novo premio.';
  }
  if (albumProgressLabel) albumProgressLabel.textContent = `${albumCount}/120 figurinhas`;
  if (stadiumProgressLabel) stadiumProgressLabel.textContent = `Estadios: ${stadiumCount}/16 desbloqueados`;
  if (missionProgressBar) missionProgressBar.style.width = `${Math.round(missionProgress / missionTarget * 100)}%`;
  if (missionProgressLabel) missionProgressLabel.textContent = `${missionProgress}/${missionTarget}`;
  if (streakLabel) streakLabel.textContent = `${profile.adaptive.wins || 0} vitorias consecutivas`;
  if (newsTitle && newsCopy) {
    const totalStars = getTotalStars();
    if (totalStars >= 10) {
      newsTitle.textContent = 'Campanha lendaria';
      newsCopy.textContent = 'Voce ja acumulou estrelas suficientes para mirar a final perfeita.';
    } else if (profile.coins >= 200) {
      newsTitle.textContent = 'Loja aquecida';
      newsCopy.textContent = 'Ha moedas suficientes para buscar novos uniformes e efeitos.';
    } else {
      newsTitle.textContent = 'Temporada 2026 ativa';
      newsCopy.textContent = 'Novos eventos, desafios diarios e recompensas ja estao no menu.';
    }
  }
}

function updateProfileUi() {
  const info = getLevelInfo();
  const percent = info.neededXp ? Math.min(100, Math.round(info.currentXp / info.neededXp * 100)) : 100;
  profileLevel.textContent = info.level;
  profileXpLabel.textContent = info.neededXp ? `${info.currentXp}/${info.neededXp} XP` : 'Nivel maximo';
  profileXpBar.style.width = `${percent}%`;
  profileCoins.textContent = profile.coins;
  updateHomeDashboard();
  if (shopProfile) {
    shopProfile.innerHTML = `
      <div><span>Nivel</span><strong>${info.level}</strong></div>
      <div class="profile-xp"><span>${info.neededXp ? `${info.currentXp}/${info.neededXp} XP` : 'Nivel maximo'}</span><i><b style="width:${percent}%"></b></i></div>
      <div><span>Moedas</span><strong>${profile.coins}</strong></div>
    `;
  }
}

function renderAchievements() {
  achievementGrid.innerHTML = '';
  achievementDefinitions.forEach((achievement) => {
    const unlocked = Boolean(profile.achievements[achievement.id]);
    const card = document.createElement('article');
    card.className = `achievement-card ${unlocked ? 'unlocked' : 'locked'}`;
    card.innerHTML = `
      <span>${unlocked ? 'Desbloqueada' : 'Bloqueada'}</span>
      <strong>${achievement.name}</strong>
      <p>${achievement.description}</p>
      <span>Premio: ${achievement.reward} moedas</span>
    `;
    achievementGrid.appendChild(card);
  });
}

function renderShop() {
  const levelInfo = getLevelInfo();
  document.querySelectorAll('.shop-tab').forEach((tab) => {
    tab.classList.toggle('selected', tab.dataset.shopCategory === currentShopCategory);
  });
  shopGrid.innerHTML = '';
  shopItems.filter((item) => item.category === currentShopCategory).forEach((item) => {
    const owned = profile.ownedItems.includes(item.id);
    const equipped = profile.equipped[item.category] === item.id;
    const levelLocked = levelInfo.level < item.level;
    const canBuy = !owned && !levelLocked && profile.coins >= item.price;
    const card = document.createElement('article');
    card.className = `shop-card${equipped ? ' equipped' : ''}`;
    const swatches = item.colors
      ? `<div class="swatches">${item.colors.map((color) => `<i style="background:${colorToCss(color)}"></i>`).join('')}</div>`
      : item.color
        ? `<div class="swatches"><i style="background:${colorToCss(item.color)}"></i></div>`
        : item.cupColor
          ? `<div class="swatches"><i style="background:${colorToCss(item.cupColor)}"></i><i style="background:${colorToCss(item.glow)}"></i></div>`
          : '<div class="swatches"><i style="background:#f8fafc"></i></div>';
    const buttonText = equipped ? 'Equipado' : owned ? 'Equipar' : levelLocked ? `Nivel ${item.level}` : item.price > 0 ? `Comprar ${item.price}` : 'Gratis';
    card.innerHTML = `
      <span>${owned ? 'Seu item' : `Nivel ${item.level}`}</span>
      <strong>${item.name}</strong>
      ${swatches}
      <p>${item.description}</p>
      <button ${equipped || levelLocked || (!owned && !canBuy) ? 'disabled' : ''}>${buttonText}</button>
    `;
    card.querySelector('button').addEventListener('click', () => {
      if (!owned) {
        if (profile.coins < item.price || levelInfo.level < item.level) return;
        profile.coins -= item.price;
        profile.ownedItems.push(item.id);
      }
      profile.equipped[item.category] = item.id;
      saveProfile();
      updateProfileUi();
      renderShop();
    });
    shopGrid.appendChild(card);
  });
}

function unlockAchievement(id, unlockedNames) {
  if (profile.achievements[id]) return;
  const achievement = achievementDefinitions.find((item) => item.id === id);
  if (!achievement) return;
  profile.achievements[id] = Date.now();
  profile.coins += achievement.reward;
  unlockedNames.push(achievement.name);
}

function evaluateAchievements(context, unlockedNames) {
  if (profile.stats.phasesCompleted >= 1) unlockAchievement('first_champion', unlockedNames);
  if (profile.stats.noCaptureWins >= 1) unlockAchievement('no_captures', unlockedNames);
  if (profile.stats.finalWins >= 1) unlockAchievement('escape_master', unlockedNames);
  if (profile.stats.trophiesCollected >= 25) unlockAchievement('cup_collector', unlockedNames);
  if (context.seconds < 45) unlockAchievement('speedster', unlockedNames);
}

function awardMatchProgress(seconds) {
  const before = getLevelInfo();
  const xpGained = 90 + state.level * 32 + state.cupsCollected * 10 + Math.max(0, 75 - Math.floor(seconds));
  let coinsGained = 35 + state.level * 14 + state.cupsCollected * 4;
  if (state.choiceRewardBonus) coinsGained += state.choiceRewardBonus;
  const levelUps = [];
  const unlockedNames = [];

  profile.stats.phasesCompleted += 1;
  profile.adaptive.wins += 1;
  profile.adaptive.losses = Math.max(0, profile.adaptive.losses - 1);
  profile.adaptive.averageTime = profile.adaptive.averageTime ? profile.adaptive.averageTime * 0.78 + seconds * 0.22 : seconds;
  profile.stats.trophiesCollected += state.trophiesCollectedThisLevel;
  if (state.level >= 5) profile.stats.finalWins += 1;
  if (state.shieldUsesThisLevel === 0) profile.stats.noCaptureWins += 1;
  if (!profile.stats.fastestWin || seconds < profile.stats.fastestWin) profile.stats.fastestWin = seconds;

  profile.xp += xpGained;
  profile.coins += coinsGained;
  const after = getLevelInfo();
  for (let level = before.level + 1; level <= after.level; level += 1) {
    const levelReward = 45 + level * 8;
    profile.coins += levelReward;
    coinsGained += levelReward;
    levelUps.push(level);
  }
  evaluateAchievements({ seconds }, unlockedNames);
  saveProfile();
  updateProfileUi();
  renderAchievements();
  renderShop();
  state.lastReward = { xpGained, coinsGained, levelUps, unlockedNames };
  return state.lastReward;
}

function awardParticipationProgress() {
  const before = getLevelInfo();
  const xpGained = 25 + state.level * 8 + state.cupsCollected * 4;
  let coinsGained = 8 + state.level * 3;
  const levelUps = [];
  profile.adaptive.losses += 1;
  profile.xp += xpGained;
  profile.coins += coinsGained;
  const after = getLevelInfo();
  for (let level = before.level + 1; level <= after.level; level += 1) {
    const levelReward = 45 + level * 8;
    profile.coins += levelReward;
    coinsGained += levelReward;
    levelUps.push(level);
  }
  saveProfile();
  updateProfileUi();
  renderShop();
  state.lastReward = { xpGained, coinsGained, levelUps, unlockedNames: [] };
  return state.lastReward;
}

function getTodayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function getDailyChallenges() {
  const key = getTodayKey();
  const seed = key.split('').reduce((total, char) => total + char.charCodeAt(0), 0);
  return [0, 1, 2].map((offset) => dailyChallengePool[(seed + offset * 2) % dailyChallengePool.length]);
}

function getDailyState() {
  const key = getTodayKey();
  if (!profile.daily[key]) profile.daily[key] = {};
  return profile.daily[key];
}

function completeDailyChallenge(id) {
  const dailyState = getDailyState();
  if (dailyState[id]) return null;
  const challenge = dailyChallengePool.find((item) => item.id === id);
  if (!challenge) return null;
  dailyState[id] = Date.now();
  profile.xp += challenge.rewardXp;
  profile.coins += challenge.rewardCoins;
  saveProfile();
  updateProfileUi();
  renderDailyChallenges();
  renderShop();
  return challenge;
}

function evaluateDailyChallenges(context) {
  const completed = [];
  for (const challenge of getDailyChallenges()) {
    const matched =
      challenge.id === 'phase2_no_shield' && context.level === 2 && context.shieldUses === 0 ||
      challenge.id === 'under_90' && context.seconds < 90 ||
      challenge.id === 'three_star' && context.stars >= 3 ||
      challenge.id === 'collect_three' && context.trophiesCollected >= 3 ||
      challenge.id === 'finish_phase4' && context.level === 4;
    if (matched) {
      const reward = completeDailyChallenge(challenge.id);
      if (reward) completed.push(reward.name);
    }
  }
  return completed;
}

function renderDailyChallenges() {
  const dailyState = getDailyState();
  dailyGrid.innerHTML = '';
  getDailyChallenges().forEach((challenge) => {
    const completed = Boolean(dailyState[challenge.id]);
    const card = document.createElement('article');
    card.className = `achievement-card ${completed ? 'unlocked' : 'locked'}`;
    card.innerHTML = `
      <span>${completed ? 'Concluido hoje' : 'Disponivel hoje'}</span>
      <strong>${challenge.name}</strong>
      <p>${challenge.description}</p>
      <span>Premio: ${challenge.rewardXp} XP / ${challenge.rewardCoins} moedas</span>
    `;
    dailyGrid.appendChild(card);
  });
}

function calculateStars(seconds) {
  let stars = 1;
  if (state.shieldUsesThisLevel === 0) stars += 1;
  if (seconds <= (starTimeGoals[state.level] || 120)) stars += 1;
  return stars;
}

function saveStars(level, stars) {
  const current = Number(profile.stars[level] || 0);
  if (stars > current) {
    profile.stars[level] = stars;
    saveProfile();
  }
}

function getTotalStars() {
  return Object.values(profile.stars).reduce((total, stars) => total + Number(stars || 0), 0);
}

function getSpeedrunRank(seconds) {
  const rank = speedrunRanks.find((item) => seconds <= item.seconds);
  return rank ? rank.name : 'Participante';
}

function getStageName(level) {
  return cupStageNames[THREE.MathUtils.clamp(level, 1, 5) - 1];
}

function pushRanking(category, entry, sorter) {
  profile.rankings[category] = [...(profile.rankings[category] || []), entry]
    .sort(sorter)
    .slice(0, 8);
}

function recordRanking(seconds, coinsGained) {
  const modeLabel = state.customLevelActive ? 'Editor' : state.mode === 'coop' ? 'Coop Local' : state.mode === 'speedrun' ? 'Copa Completa' : 'Solo';
  pushRanking('bestTime', { label: `${modeLabel} F${state.level}`, value: seconds, date: Date.now() }, (a, b) => a.value - b.value);
  pushRanking('fewerCaptures', { label: `${modeLabel} F${state.level}`, value: state.capturesAvoided, date: Date.now() }, (a, b) => a.value - b.value);
  pushRanking('mostCoins', { label: `${modeLabel} F${state.level}`, value: coinsGained, date: Date.now() }, (a, b) => b.value - a.value);
  saveProfile();
}

function renderRanking() {
  const sections = [
    { key: 'bestTime', title: 'Melhor tempo', format: (value) => formatTime(value) },
    { key: 'fewerCaptures', title: 'Menos capturas', format: (value) => `${value}` },
    { key: 'mostCoins', title: 'Mais moedas', format: (value) => `${value}` }
  ];
  rankingGrid.innerHTML = '';
  sections.forEach((section) => {
    const entries = profile.rankings[section.key] || [];
    const card = document.createElement('article');
    card.className = 'achievement-card unlocked';
    card.innerHTML = `
      <span>Ranking local</span>
      <strong>${section.title}</strong>
      <p>${entries.length ? entries.map((entry, index) => `${index + 1}. ${entry.label}: ${section.format(entry.value)}`).join('<br>') : 'Nenhum resultado registrado ainda.'}</p>
      <span>Online real precisa servidor dedicado</span>
    `;
    rankingGrid.appendChild(card);
  });
}

function getEditorLevelFromInputs() {
  return {
    mission: editorMission.value,
    map: editorMap.value,
    objectives: THREE.MathUtils.clamp(Number(editorObjectives.value || 4), 1, 7),
    obstacles: THREE.MathUtils.clamp(Number(editorObstacles.value || 8), 0, 18),
    theme: THREE.MathUtils.clamp(Number(editorTheme.value || 1), 1, 6)
  };
}

function loadEditorFromProfile() {
  const saved = profile.customLevel;
  if (!saved) return;
  editorMission.value = saved.mission || 'cup';
  editorMap.value = saved.map || 'balanced';
  editorObjectives.value = saved.objectives || 4;
  editorObstacles.value = saved.obstacles || 8;
  editorTheme.value = saved.theme || 1;
}

function saveEditorLevel() {
  profile.customLevel = getEditorLevelFromInputs();
  saveProfile();
  showMessage('Fase salva', 'Sua fase criada ficou pronta para jogar.');
}

const sun = new THREE.DirectionalLight(0xb9dcff, 0.88);
sun.position.set(-8, 18, 14);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 60;
sun.shadow.camera.left = -34;
sun.shadow.camera.right = 34;
sun.shadow.camera.top = 38;
sun.shadow.camera.bottom = -38;
scene.add(sun);
const hemisphere = new THREE.HemisphereLight(0x9fd5ff, 0x061126, 0.48);
scene.add(hemisphere);
const fieldFillLight = new THREE.DirectionalLight(0xfff2c6, 0.34);
fieldFillLight.position.set(8, 12, 10);
scene.add(fieldFillLight);

const arena = new THREE.Group();
scene.add(arena);

function createGrassTexture() {
  const textureCanvas = document.createElement('canvas');
  textureCanvas.width = 512;
  textureCanvas.height = 512;
  const context = textureCanvas.getContext('2d');
  const gradient = context.createLinearGradient(0, 0, 512, 512);
  gradient.addColorStop(0, '#2fb866');
  gradient.addColorStop(0.48, '#1f8f4d');
  gradient.addColorStop(1, '#126735');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 512, 512);
  for (let y = 0; y < 512; y += 16) {
    context.fillStyle = y % 32 === 0 ? 'rgba(255,255,255,0.045)' : 'rgba(0,0,0,0.055)';
    context.fillRect(0, y, 512, 8);
  }
  for (let x = 0; x < 512; x += 64) {
    context.fillStyle = x % 128 === 0 ? 'rgba(255,255,255,0.022)' : 'rgba(0,0,0,0.026)';
    context.fillRect(x, 0, 28, 512);
  }
  context.globalAlpha = 0.26;
  for (let i = 0; i < 20; i += 1) {
    context.strokeStyle = i % 2 ? '#7ddf91' : '#0f5f33';
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(-40, i * 28);
    context.lineTo(552, i * 28 + 80);
    context.stroke();
  }
  context.globalAlpha = 1;
  for (let i = 0; i < 5200; i += 1) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const bladeLength = 2 + Math.random() * 5;
    const tint = Math.random() > 0.62 ? '255,255,255' : Math.random() > 0.36 ? '12,64,32' : '0,0,0';
    context.strokeStyle = `rgba(${tint},${0.035 + Math.random() * 0.075})`;
    context.lineWidth = 0.8 + Math.random() * 0.9;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + Math.random() * 2 - 1, y - bladeLength);
    context.stroke();
  }
  for (let i = 0; i < 900; i += 1) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    context.fillStyle = `rgba(255,255,255,${Math.random() * 0.035})`;
    context.fillRect(x, y, 1.4, 1.4);
  }
  const texture = new THREE.CanvasTexture(textureCanvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(7, 10);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = isLowPowerRuntime() ? 1 : 4;
  return texture;
}

const grassTexture = createGrassTexture();
const pitchMaterial = new THREE.MeshStandardMaterial({ color: 0x22a45b, map: grassTexture, roughness: 0.82 });
const pitch = new THREE.Mesh(new THREE.BoxGeometry(42, 0.4, 56), pitchMaterial);
pitch.receiveShadow = true;
arena.add(pitch);

const stripeMaterials = [
  new THREE.MeshStandardMaterial({ color: 0x2fb866, map: grassTexture, roughness: 0.92 }),
  new THREE.MeshStandardMaterial({ color: 0x1c7f45, map: grassTexture, roughness: 0.92 })
];
const stadiumThemes = [
  { name: 'Brasil', sky: 0x061126, fog: 0x0b1730, pitch: 0x1f8a4f, stripes: [0x2fb866, 0x1c7f45], light: 0xfacc15, boss: 'Capitao Canarinho' },
  { name: 'Argentina', sky: 0x071a2f, fog: 0x0a2742, pitch: 0x238f5d, stripes: [0x36b983, 0x1f7955], light: 0x38bdf8, boss: 'Maestro Celeste' },
  { name: 'Franca', sky: 0x06112b, fog: 0x0a1a3d, pitch: 0x236f4a, stripes: [0x2d8a58, 0x1f6d49], light: 0x1d4ed8, boss: 'Comandante Azul' },
  { name: 'Japao', sky: 0x111827, fog: 0x1e293b, pitch: 0x1f8a55, stripes: [0x2f9f69, 0x1d7f50], light: 0xbe123c, boss: 'Samurai do Gol' },
  { name: 'Catar futurista', sky: 0x2b1022, fog: 0x2b1022, pitch: 0x1d7a55, stripes: [0x245f58, 0x173f44], light: 0xd946ef, boss: 'Guardiao Neon' },
  { name: 'Estadio espacial', sky: 0x020617, fog: 0x020617, pitch: 0x14532d, stripes: [0x166534, 0x052e16], light: 0x38bdf8, boss: 'Astro Campeao' }
];

function getStadiumTheme(level, themeOverride = null) {
  if (themeOverride) return stadiumThemes[THREE.MathUtils.clamp(Number(themeOverride), 1, stadiumThemes.length) - 1];
  if (state.mode === 'speedrun' && level >= 5) return stadiumThemes[5];
  return stadiumThemes[THREE.MathUtils.clamp(level, 1, 5) - 1];
}

function applyStadiumTheme(level, themeOverride = null) {
  const theme = getStadiumTheme(level, themeOverride);
  scene.background.setHex(theme.sky);
  scene.fog.color.setHex(theme.fog);
  pitchMaterial.color.setHex(theme.pitch);
  stripeMaterials[0].color.setHex(theme.stripes[0]);
  stripeMaterials[1].color.setHex(theme.stripes[1]);
  stadiumSpotLights.forEach((light, index) => {
    if (index % 2 === 0) light.color.setHex(theme.light);
  });
  return theme;
}
for (let i = 0; i < 8; i += 1) {
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(42, 0.035, 7), stripeMaterials[i % 2]);
  stripe.position.set(0, 0.23, -24.5 + i * 7);
  stripe.receiveShadow = true;
  arena.add(stripe);
}

const grassSheenMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.035, depthWrite: false });
for (let i = 0; i < 7; i += 1) {
  const sheen = new THREE.Mesh(new THREE.BoxGeometry(42, 0.018, 0.08), grassSheenMaterial);
  sheen.position.set(0, 0.285, -22 + i * 7.2);
  sheen.rotation.y = i % 2 ? -0.04 : 0.04;
  arena.add(sheen);
}

const pitchEdgeMaterial = new THREE.MeshBasicMaterial({ color: 0x052e16, transparent: true, opacity: 0.18, depthWrite: false });
[
  [0, -27.2, 42.6, 0.34],
  [0, 27.2, 42.6, 0.34],
  [-21.35, 0, 0.34, 55.6],
  [21.35, 0, 0.34, 55.6]
].forEach(([x, z, w, d]) => {
  const edge = new THREE.Mesh(new THREE.BoxGeometry(w, 0.02, d), pitchEdgeMaterial);
  edge.position.set(x, 0.31, z);
  arena.add(edge);
});

const lineMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
function addLine(x, z, w, d) {
  const line = new THREE.Mesh(new THREE.BoxGeometry(w, 0.04, d), lineMaterial);
  line.position.set(x, 0.24, z);
  arena.add(line);
}
function addCircle(x, z, radius) {
  const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.055, 8, 80), lineMaterial);
  ring.rotation.x = Math.PI / 2;
  ring.position.set(x, 0.29, z);
  arena.add(ring);
}
addLine(0, -26.5, 42, 0.18);
addLine(0, 26.5, 42, 0.18);
addLine(-20.8, 0, 0.18, 54);
addLine(20.8, 0, 0.18, 54);
addLine(0, 0, 42, 0.18);
addLine(0, -18.5, 16, 0.18);
addLine(0, 18.5, 16, 0.18);
addLine(-8, -22.5, 0.18, 8);
addLine(8, -22.5, 0.18, 8);
addLine(-8, 22.5, 0.18, 8);
addLine(8, 22.5, 0.18, 8);
addCircle(0, 0, 4.2);

function addGoal(z, flip) {
  const goal = new THREE.Group();
  const postMaterial = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35 });
  const netMaterial = new THREE.MeshBasicMaterial({ color: 0xdbeafe, transparent: true, opacity: 0.34, side: THREE.DoubleSide });
  const postGeometry = new THREE.BoxGeometry(0.18, 2.5, 0.18);
  const crossbarGeometry = new THREE.BoxGeometry(8.2, 0.18, 0.18);
  [-4, 4].forEach((x) => {
    const post = new THREE.Mesh(postGeometry, postMaterial);
    post.position.set(x, 1.25, z);
    post.castShadow = true;
    goal.add(post);
  });
  const crossbar = new THREE.Mesh(crossbarGeometry, postMaterial);
  crossbar.position.set(0, 2.5, z);
  crossbar.castShadow = true;
  goal.add(crossbar);
  const back = new THREE.Mesh(new THREE.PlaneGeometry(8.2, 2.5, 8, 4), netMaterial);
  back.rotation.y = Math.PI;
  back.position.set(0, 1.35, z + flip * 1.15);
  goal.add(back);
  const roof = new THREE.Mesh(new THREE.PlaneGeometry(8.2, 1.2, 8, 2), netMaterial);
  roof.rotation.x = Math.PI / 2;
  roof.position.set(0, 2.45, z + flip * 0.55);
  goal.add(roof);
  arena.add(goal);
}
addGoal(-27.1, -1);
addGoal(27.1, 1);

const stands = new THREE.Group();
const stadiumFans = [];
const stadiumFlags = [];
const stadiumSpotLights = [];
const stadiumPointLights = [];
let stadiumConfetti = null;
let stadiumCrowdSparkles = null;
scene.add(stands);

const decorationGroup = new THREE.Group();
scene.add(decorationGroup);

function addCornerFlag(x, z, rotation = 0) {
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 1.75, 8), new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.32 }));
  pole.position.set(x, 0.92, z);
  decorationGroup.add(pole);
  const flag = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.34, 0.035), new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.45, emissive: 0xfacc15, emissiveIntensity: 0.08 }));
  flag.position.set(x + Math.cos(rotation) * 0.29, 1.55, z - Math.sin(rotation) * 0.29);
  flag.rotation.y = rotation;
  decorationGroup.add(flag);
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.34, 0.04), new THREE.MeshStandardMaterial({ color: 0x0a4fff, roughness: 0.45 }));
  stripe.position.set(flag.position.x + Math.cos(rotation) * 0.17, 1.55, flag.position.z - Math.sin(rotation) * 0.17);
  stripe.rotation.y = rotation;
  decorationGroup.add(stripe);
  stadiumFlags.push({ flag, stripe });
}

function addBench(x, z, rotation = 0) {
  const baseMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5, metalness: 0.15 });
  const seatMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.46, emissive: 0x0a4fff, emissiveIntensity: 0.05 });
  const bench = new THREE.Group();
  const seat = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.28, 0.82), seatMat);
  seat.position.y = 0.44;
  const back = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.78, 0.2), seatMat);
  back.position.set(0, 0.88, -0.42);
  const base = new THREE.Mesh(new THREE.BoxGeometry(4.45, 0.12, 1.05), baseMat);
  base.position.y = 0.18;
  bench.add(seat, back, base);
  bench.position.set(x, 0, z);
  bench.rotation.y = rotation;
  decorationGroup.add(bench);
}

function addTvCamera(x, z, rotation = 0) {
  const cameraGroup = new THREE.Group();
  const dark = new THREE.MeshStandardMaterial({ color: 0x020814, roughness: 0.35, metalness: 0.3 });
  const lens = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.85 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.38, 0.48), dark);
  body.position.y = 1.12;
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.19, 0.5, 12), dark);
  barrel.rotation.x = Math.PI / 2;
  barrel.position.set(0, 1.12, -0.44);
  const glass = new THREE.Mesh(new THREE.CircleGeometry(0.15, 18), lens);
  glass.position.set(0, 1.12, -0.71);
  const tripod = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 1.4, 8), dark);
  tripod.position.y = 0.48;
  cameraGroup.add(body, barrel, glass, tripod);
  cameraGroup.position.set(x, 0, z);
  cameraGroup.rotation.y = rotation;
  decorationGroup.add(cameraGroup);
}

function addBallRack(x, z) {
  const rack = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.38, metalness: 0.2 });
  const rail = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.08, 0.28), mat);
  rail.position.y = 0.28;
  rack.add(rail);
  for (let i = 0; i < 3; i += 1) {
    const ball = createBillboardSprite(soccerBallTexture, 0.42, 0.45, 0xffffff, 0.95);
    ball.position.x = -0.46 + i * 0.46;
    rack.add(ball);
  }
  rack.position.set(x, 0, z);
  decorationGroup.add(rack);
}

function addSidelineDecorations() {
  addCornerFlag(-20.8, -26.6, 0);
  addCornerFlag(20.8, -26.6, Math.PI);
  addCornerFlag(-20.8, 26.6, 0);
  addCornerFlag(20.8, 26.6, Math.PI);
  addBench(-10, 29.2, Math.PI);
  addBench(10, 29.2, Math.PI);
  addBench(-10, -29.2, 0);
  addBench(10, -29.2, 0);
  addTvCamera(-22.8, -8, Math.PI / 2);
  addTvCamera(22.8, 8, -Math.PI / 2);
  addTvCamera(-18, 28.8, Math.PI);
  addTvCamera(18, -28.8, 0);
  addBallRack(-17, 25.7);
  addBallRack(17, -25.7);
}

addSidelineDecorations();

function createCrowdFan(colorA, colorB) {
  const group = new THREE.Group();
  const shirt = new THREE.MeshStandardMaterial({ color: colorA, roughness: 0.66 });
  const accent = new THREE.MeshStandardMaterial({ color: colorB, roughness: 0.66 });
  const skin = new THREE.MeshStandardMaterial({ color: 0xf0bd8b, roughness: 0.7 });
  const hairMat = new THREE.MeshStandardMaterial({ color: 0x2d160a, roughness: 0.7 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.48, 0.24), shirt);
  body.position.y = 0.28;
  const shoulders = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.12, 0.26), shirt);
  shoulders.position.y = 0.52;
  const shortsFan = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.16, 0.22), accent);
  shortsFan.position.y = 0.04;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), skin);
  head.position.y = 0.72;
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.152, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.56), hairMat);
  hair.position.y = 0.79;
  const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.42, 0.1), accent);
  leftArm.position.set(-0.31, 0.52, 0);
  leftArm.rotation.z = -0.82;
  const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.42, 0.1), accent);
  rightArm.position.set(0.31, 0.52, 0);
  rightArm.rotation.z = 0.82;
  const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.28, 0.1), accent);
  leftLeg.position.set(-0.1, -0.08, 0);
  const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.28, 0.1), accent);
  rightLeg.position.set(0.1, -0.08, 0);
  group.add(body, shoulders, shortsFan, head, hair, leftArm, rightArm, leftLeg, rightLeg);
  group.traverse((part) => {
    part.castShadow = false;
    part.receiveShadow = false;
  });
  group.userData = { body, shoulders, shortsFan, leftArm, rightArm, baseY: 0, phase: Math.random() * Math.PI * 2 };
  return group;
}

function updateCrowdTeamColors(team) {
  stadiumFans.forEach((fan, index) => {
    fan.userData.body.material.color.setHex(team.colors[index % 2]);
    fan.userData.shoulders.material.color.setHex(team.colors[index % 2]);
    fan.userData.shortsFan.material.color.setHex(team.colors[(index + 1) % 2]);
    fan.userData.leftArm.material.color.setHex(team.colors[(index + 1) % 2]);
    fan.userData.rightArm.material.color.setHex(team.colors[(index + 1) % 2]);
  });
}

function updateStadiumTeamColors(team) {
  updateCrowdTeamColors(team);
  stadiumFlags.forEach((item, index) => {
    item.flag.material.color.setHex(team.colors[index % 2]);
    item.stripe.material.color.setHex(team.colors[(index + 1) % 2]);
  });
  stadiumSpotLights.forEach((light, index) => {
    light.color.setHex(team.colors[index % 2]);
  });
}

function addStadiumBlock(x, z, w, d, rows, side) {
  const baseMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.72 });
  const seatMats = [
    new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.7 }),
    new THREE.MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.7 }),
    new THREE.MeshStandardMaterial({ color: 0xb91c1c, roughness: 0.7 }),
    new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.68 })
  ];

  const base = new THREE.Mesh(new THREE.BoxGeometry(w, 1.2, d), baseMat);
  base.position.set(x, 0.62, z);
  base.castShadow = false;
  base.receiveShadow = true;
  stands.add(base);

  for (let row = 0; row < rows; row += 1) {
    const rowHeight = 1.35 + row * 0.5;
    const fanSpan = side === 'north' || side === 'south' ? w * 0.86 : d * 0.86;
    const fanSpacing = isLowPowerRuntime() ? (row % 2 === 0 ? 9.4 : 10.2) : (row % 2 === 0 ? 4.85 : 5.15);
    const seat = new THREE.Mesh(
      side === 'north' || side === 'south'
        ? new THREE.BoxGeometry(w, 0.36, 1.15)
        : new THREE.BoxGeometry(1.15, 0.36, d),
      seatMats[row % seatMats.length]
    );
    if (side === 'north') seat.position.set(x, rowHeight, z - row * 1.18);
    if (side === 'south') seat.position.set(x, rowHeight, z + row * 1.18);
    if (side === 'west') seat.position.set(x - row * 1.18, rowHeight, z);
    if (side === 'east') seat.position.set(x + row * 1.18, rowHeight, z);
    seat.castShadow = false;
    seat.receiveShadow = true;
    stands.add(seat);

    const fanCount = Math.floor(fanSpan / fanSpacing);
    for (let i = 0; i < fanCount; i += 1) {
      if ((i + row) % (isLowPowerRuntime() ? 4 : 13) === 0) continue;
      const fan = createCrowdFan(0x16a34a, 0xfacc15);
      const offset = -fanSpan / 2 + (i + 0.5) * (fanSpan / fanCount);
      const jitter = THREE.MathUtils.randFloat(-0.16, 0.16);
      if (side === 'north' || side === 'south') fan.position.set(x + offset, rowHeight + 0.45, seat.position.z + jitter);
      else fan.position.set(seat.position.x + jitter, rowHeight + 0.45, z + offset);
      if (side === 'north') fan.rotation.y = Math.PI;
      if (side === 'west') fan.rotation.y = Math.PI / 2;
      if (side === 'east') fan.rotation.y = -Math.PI / 2;
      fan.scale.setScalar(THREE.MathUtils.randFloat(0.82, 1.08));
      fan.userData.baseY = fan.position.y;
      stadiumFans.push(fan);
      stands.add(fan);
    }
  }
}

addStadiumBlock(0, -32, 58, 5.2, 5, 'north');
addStadiumBlock(0, 32, 58, 5.2, 5, 'south');
addStadiumBlock(-26.5, 0, 5.2, 65, 5, 'west');
addStadiumBlock(26.5, 0, 5.2, 65, 5, 'east');

const roofMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.25, roughness: 0.38 });
[
  [0, -40, 66, 4],
  [0, 40, 66, 4],
  [-34, 0, 4, 74],
  [34, 0, 4, 74]
].forEach(([x, z, w, d]) => {
  const roof = new THREE.Mesh(new THREE.BoxGeometry(w, 0.35, d), roofMat);
  roof.position.set(x, 6.35, z);
  roof.castShadow = false;
  roof.receiveShadow = true;
  stands.add(roof);
});

function addBanner(text, x, z, rotation = 0, color = 0x16a34a) {
  const group = new THREE.Group();
  const panel = new THREE.Mesh(
    new THREE.BoxGeometry(8.5, 1.25, 0.12),
    new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.18, roughness: 0.42 })
  );
  panel.position.y = 2.45;
  group.add(panel);

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const context = canvas.getContext('2d');
  context.fillStyle = '#f8fafc';
  context.font = '900 54px Arial, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, 256, 66);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const label = new THREE.Mesh(
    new THREE.PlaneGeometry(7.8, 0.9),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide })
  );
  label.position.set(0, 2.48, -0.07);
  group.add(label);
  group.position.set(x, 0, z);
  group.rotation.y = rotation;
  stands.add(group);
}

function addLedBoard(text, x, z, width, rotation = 0, color = 0x0a4fff) {
  const group = new THREE.Group();
  const panel = new THREE.Mesh(
    new THREE.BoxGeometry(width, 0.74, 0.12),
    new THREE.MeshStandardMaterial({ color: 0x020814, emissive: color, emissiveIntensity: 0.42, roughness: 0.28 })
  );
  panel.position.y = 1.52;
  group.add(panel);

  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 128;
  const context = canvas.getContext('2d');
  const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, '#020814');
  gradient.addColorStop(0.5, '#0A4FFF');
  gradient.addColorStop(1, '#020814');
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = '#38bdf8';
  for (let i = 0; i < 26; i += 1) {
    context.fillRect(i * 42, 0, 18, canvas.height);
  }
  context.fillStyle = '#f8fafc';
  context.font = '900 42px Arial, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, 512, 66);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const label = new THREE.Mesh(
    new THREE.PlaneGeometry(width - 0.45, 0.52),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide })
  );
  label.position.set(0, 1.54, -0.07);
  group.add(label);
  group.position.set(x, 0, z);
  group.rotation.y = rotation;
  stands.add(group);
}

addBanner('COPA ESCAPE', -12, -29.4, 0, 0x047857);
addBanner('RUMO A TACA', 12, 29.4, Math.PI, 0x1d4ed8);
addBanner('WORLD CUP', -23.4, -11, Math.PI / 2, 0xb91c1c);
addBanner('2026', 23.4, 11, -Math.PI / 2, 0xf59e0b);
addBanner('MODO HISTORIA', -23.4, 14, Math.PI / 2, 0x0a4fff);
addBanner('ESCAPE ARENA', 23.4, -15, -Math.PI / 2, 0x047857);
addLedBoard('COPA ESCAPE 3D  •  RUMO A TACA  •  COPA DO MUNDO 2026', 0, -28.35, 44, 0, 0x38bdf8);
addLedBoard('COPA ESCAPE 3D  •  ESTADIO LOTADO  •  EVENTO AO VIVO', 0, 28.35, 44, Math.PI, 0xfacc15);
addLedBoard('RUMO A TACA  •  TURBO  •  ESCUDO  •  FUGA', -22.35, 0, 54, Math.PI / 2, 0x22c55e);
addLedBoard('TEMPORADA 2026  •  MODO HISTORIA  •  FINAL DA COPA', 22.35, 0, 54, -Math.PI / 2, 0xef4444);

const scoreboardCanvas = document.createElement('canvas');
scoreboardCanvas.width = 1536;
scoreboardCanvas.height = 384;
const scoreboardContext = scoreboardCanvas.getContext('2d');
const scoreboardTexture = new THREE.CanvasTexture(scoreboardCanvas);
scoreboardTexture.colorSpace = THREE.SRGBColorSpace;
const scoreboard = new THREE.Mesh(
  new THREE.BoxGeometry(30, 5.2, 0.22),
  [
    new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: 0x020617, emissiveIntensity: 0.5 }),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: 0x020617, emissiveIntensity: 0.5 }),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: 0x020617, emissiveIntensity: 0.5 }),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: 0x020617, emissiveIntensity: 0.5 }),
    new THREE.MeshBasicMaterial({ map: scoreboardTexture }),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: 0x020617, emissiveIntensity: 0.5 })
  ]
);
scoreboard.position.set(0, 7.05, -31.4);
scoreboard.castShadow = false;
stands.add(scoreboard);
const rearScoreboard = new THREE.Mesh(
  new THREE.BoxGeometry(30, 5.2, 0.22),
  [
    new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: 0x020617, emissiveIntensity: 0.5 }),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: 0x020617, emissiveIntensity: 0.5 }),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: 0x020617, emissiveIntensity: 0.5 }),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: 0x020617, emissiveIntensity: 0.5 }),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: 0x020617, emissiveIntensity: 0.5 }),
    new THREE.MeshBasicMaterial({ map: scoreboardTexture })
  ]
);
rearScoreboard.position.set(0, 7.05, 31.4);
rearScoreboard.castShadow = false;
stands.add(rearScoreboard);

let scoreboardText = '';
function updateScoreboard() {
  const modeText = state.mode === 'speedrun' ? `${getStageName(state.level)} ${formatTime(state.speedrunElapsed)}` : `FASE ${state.level}`;
  const text = `${state.selectedTeam.name}  |  ${modeText}  |  ${getScoreboardObjectiveText()}`;
  if (text === scoreboardText) return;
  scoreboardText = text;
  scoreboardContext.clearRect(0, 0, scoreboardCanvas.width, scoreboardCanvas.height);
  const gradient = scoreboardContext.createLinearGradient(0, 0, scoreboardCanvas.width, scoreboardCanvas.height);
  gradient.addColorStop(0, '#020814');
  gradient.addColorStop(0.48, '#061126');
  gradient.addColorStop(1, '#0A4FFF');
  scoreboardContext.fillStyle = gradient;
  scoreboardContext.fillRect(0, 0, scoreboardCanvas.width, scoreboardCanvas.height);
  scoreboardContext.fillStyle = 'rgba(255,215,0,0.18)';
  scoreboardContext.fillRect(0, 0, scoreboardCanvas.width, 18);
  scoreboardContext.fillRect(0, scoreboardCanvas.height - 18, scoreboardCanvas.width, 18);
  scoreboardContext.fillStyle = '#FFD700';
  scoreboardContext.font = '900 48px Arial, sans-serif';
  scoreboardContext.textAlign = 'left';
  scoreboardContext.fillText('AO VIVO', 74, 88);
  scoreboardContext.fillStyle = '#facc15';
  scoreboardContext.font = '900 86px Arial, sans-serif';
  scoreboardContext.textAlign = 'center';
  scoreboardContext.fillText('COPA ESCAPE 3D', 768, 130);
  scoreboardContext.fillStyle = '#f8fafc';
  scoreboardContext.font = '900 60px Arial, sans-serif';
  scoreboardContext.fillText(text, 768, 235);
  scoreboardContext.fillStyle = '#38bdf8';
  scoreboardContext.font = '800 38px Arial, sans-serif';
  scoreboardContext.fillText('RUMO A TACA  |  ESTADIO LOTADO  |  TEMPORADA 2026', 768, 322);
  scoreboardTexture.needsUpdate = true;
}

function addFlag(x, z, colorA, colorB, rotation = 0) {
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 2.6, 8), new THREE.MeshStandardMaterial({ color: 0xe2e8f0 }));
  pole.position.set(x, 3.1, z);
  pole.rotation.y = rotation;
  stands.add(pole);
  const flag = new THREE.Mesh(
    new THREE.BoxGeometry(1.05, 0.55, 0.04),
    new THREE.MeshStandardMaterial({ color: colorA, roughness: 0.55 })
  );
  flag.position.set(x + Math.cos(rotation) * 0.48, 3.75, z - Math.sin(rotation) * 0.48);
  flag.rotation.y = rotation;
  stands.add(flag);
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.55, 0.045), new THREE.MeshStandardMaterial({ color: colorB, roughness: 0.55 }));
  stripe.position.set(flag.position.x + Math.cos(rotation) * 0.26, 3.75, flag.position.z - Math.sin(rotation) * 0.26);
  stripe.rotation.y = rotation;
  stands.add(stripe);
  stadiumFlags.push({ flag, stripe });
}

function addLargeFlag(x, z, rotation = 0, colorA = 0x22c55e, colorB = 0xfacc15) {
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.11, 3.6, 10), new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.35 }));
  pole.position.set(x, 4.12, z);
  pole.castShadow = false;
  stands.add(pole);
  const flag = new THREE.Mesh(
    new THREE.BoxGeometry(4.25, 2.05, 0.05),
    new THREE.MeshStandardMaterial({ color: colorA, roughness: 0.48, emissive: colorA, emissiveIntensity: 0.05 })
  );
  flag.position.set(x + Math.cos(rotation) * 1.95, 4.85, z - Math.sin(rotation) * 1.95);
  flag.rotation.y = rotation;
  flag.rotation.z = Math.sin(x + z) * 0.08;
  flag.castShadow = false;
  stands.add(flag);
  const stripe = new THREE.Mesh(
    new THREE.BoxGeometry(2.05, 2.05, 0.06),
    new THREE.MeshStandardMaterial({ color: colorB, roughness: 0.46, emissive: colorB, emissiveIntensity: 0.04 })
  );
  stripe.position.set(flag.position.x + Math.cos(rotation) * 1.05, 4.85, flag.position.z - Math.sin(rotation) * 1.05);
  stripe.rotation.copy(flag.rotation);
  stripe.castShadow = false;
  stands.add(stripe);
  stadiumFlags.push({ flag, stripe });
}

for (let i = 0; i < 16; i += 1) {
  const x = -28 + (i % 8) * 8;
  addFlag(x, i < 8 ? -37.5 : 37.5, [0xef4444, 0x22c55e, 0x1d4ed8, 0xfacc15][i % 4], 0xf8fafc, i < 8 ? 0 : Math.PI);
}
addLargeFlag(-18, -36.4, 0, 0x1d4ed8, 0xf8fafc);
addLargeFlag(18, -36.4, 0, 0x22c55e, 0xfacc15);
addLargeFlag(-18, 36.4, Math.PI, 0xef4444, 0xf8fafc);
addLargeFlag(18, 36.4, Math.PI, 0x0a4fff, 0xffffff);

function createStadiumConfetti() {
  const count = isLowPowerRuntime() ? 150 : 520;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const palette = [0xffd700, 0x0a4fff, 0x00c853, 0xef4444, 0xffffff];
  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = THREE.MathUtils.randFloatSpread(58);
    positions[i * 3 + 1] = THREE.MathUtils.randFloat(6, 14);
    positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(72);
    const color = new THREE.Color(palette[i % palette.length]);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const points = new THREE.Points(
    geometry,
    new THREE.PointsMaterial({ size: 0.16, vertexColors: true, transparent: true, opacity: 0.78 })
  );
  points.userData = { count };
  scene.add(points);
  return points;
}

stadiumConfetti = createStadiumConfetti();

function createCrowdSparkles() {
  const count = isLowPowerRuntime() ? 220 : 900;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const palette = [0xffd700, 0x38bdf8, 0x22c55e, 0xf8fafc, 0xef4444];
  for (let i = 0; i < count; i += 1) {
    const side = i % 4;
    if (side < 2) {
      positions[i * 3] = THREE.MathUtils.randFloatSpread(55);
      positions[i * 3 + 2] = side === 0 ? THREE.MathUtils.randFloat(-39, -30) : THREE.MathUtils.randFloat(30, 39);
    } else {
      positions[i * 3] = side === 2 ? THREE.MathUtils.randFloat(-33, -25) : THREE.MathUtils.randFloat(25, 33);
      positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(62);
    }
    positions[i * 3 + 1] = THREE.MathUtils.randFloat(2.2, 6.2);
    const color = new THREE.Color(palette[i % palette.length]);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const points = new THREE.Points(
    geometry,
    new THREE.PointsMaterial({ size: 0.12, vertexColors: true, transparent: true, opacity: 0.68, depthWrite: false })
  );
  points.userData = { count };
  scene.add(points);
  return points;
}

stadiumCrowdSparkles = createCrowdSparkles();

[
  [-31, -34],
  [31, -34],
  [-31, 34],
  [31, 34]
].forEach(([x, z], index) => {
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 11.5, 12), new THREE.MeshStandardMaterial({ color: 0x475569 }));
  mast.position.set(x, 5.75, z);
  mast.castShadow = true;
  scene.add(mast);
  const lampBar = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.28, 0.5), new THREE.MeshStandardMaterial({ color: 0xe2e8f0, emissive: 0xffffff, emissiveIntensity: 0.8 }));
  lampBar.position.set(x, 11.6, z);
  lampBar.castShadow = true;
  scene.add(lampBar);
  const bulbMat = new THREE.MeshBasicMaterial({ color: 0xfff7d6, toneMapped: false });
  for (let row = 0; row < 2; row += 1) {
    for (let col = 0; col < 6; col += 1) {
      const bulb = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.18, 0.08), bulbMat);
      bulb.position.set(x - 1.34 + col * 0.54, 11.52 + row * 0.22, z + (z < 0 ? 0.32 : -0.32));
      scene.add(bulb);
    }
  }
  const halo = new THREE.Mesh(
    new THREE.PlaneGeometry(5.2, 1.7),
    new THREE.MeshBasicMaterial({ color: 0xfff7d6, transparent: true, opacity: 0.18, depthWrite: false, side: THREE.DoubleSide, toneMapped: false })
  );
  halo.position.set(x, 11.48, z + (z < 0 ? 0.4 : -0.4));
  halo.rotation.x = z < 0 ? -0.25 : 0.25;
  scene.add(halo);
  const lamp = new THREE.PointLight(0xfff3cf, 42, 78, 1.12);
  lamp.position.set(x, 11.2, z);
  lamp.userData.baseIntensity = lamp.intensity;
  scene.add(lamp);
  stadiumPointLights.push(lamp);
  const spot = new THREE.SpotLight([0x22c55e, 0x38bdf8, 0xfacc15, 0xef4444][index], 36, 90, Math.PI / 5.2, 0.58, 1.05);
  spot.position.set(x, 11.1, z);
  spot.target.position.set(0, 0, 0);
  spot.castShadow = false;
  spot.userData.baseIntensity = spot.intensity;
  scene.add(spot);
  scene.add(spot.target);
  stadiumSpotLights.push(spot);
});

function applySceneQuality() {
  const lowPower = isLowPowerRuntime();
  sun.castShadow = !lowPower;
  sun.shadow.mapSize.set(lowPower ? 512 : 1024, lowPower ? 512 : 1024);
  if (stadiumConfetti) stadiumConfetti.material.opacity = lowPower ? 0.48 : 0.78;
  if (stadiumCrowdSparkles) stadiumCrowdSparkles.visible = !lowPower;
  stadiumPointLights.forEach((light, index) => {
    light.visible = !lowPower || index < 2;
    light.intensity = (light.userData.baseIntensity || light.intensity) * (lowPower ? 0.72 : 1);
  });
  stadiumSpotLights.forEach((light, index) => {
    light.visible = !lowPower || index < 2;
    light.intensity = (light.userData.baseIntensity || light.intensity) * (lowPower ? 0.66 : 1);
  });
}

applySceneQuality();
updateStadiumTeamColors(state.selectedTeam);

const player = createPlayer(teams[0]);
scene.add(player);
const player2 = createPlayer(teams[0]);
player2.visible = false;
scene.add(player2);
state.player2.object = player2;

function makePart(geometry, material, x, y, z, castShadow = true) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.castShadow = castShadow;
  mesh.receiveShadow = true;
  return mesh;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createNumberMaterial(value, color = '#ffffff') {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = '900 150px Arial, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.lineWidth = 14;
  context.strokeStyle = color === '#111827' ? '#ffffff' : '#111827';
  context.fillStyle = color;
  context.strokeText(String(value), 128, 132);
  context.fillText(String(value), 128, 132);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    side: THREE.DoubleSide,
    polygonOffset: true,
    polygonOffsetFactor: -4
  });
}

function createFloatingTextSprite(text, color = '#ffd700') {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 168;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = '900 64px Inter, Arial, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.lineWidth = 10;
  context.shadowColor = 'rgba(0, 0, 0, 0.7)';
  context.shadowBlur = 16;
  context.strokeStyle = '#020814';
  context.fillStyle = color;
  context.strokeText(text, 256, 86);
  context.fillText(text, 256, 86);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
    toneMapped: false
  });
  const sprite = new THREE.Sprite(material);
  sprite.userData.textTexture = texture;
  return sprite;
}

function createArcadeCharacter({
  primary,
  secondary,
  shorts = 0x111827,
  socks = 0xf8fafc,
  skin = 0xf0bd8b,
  referee = false,
  logo = null,
  number = randomInt(1, 99),
  numberColor = '#ffffff',
  hairColor = null,
  bootColor = 0x0f172a,
  captain = false
}) {
  const group = new THREE.Group();
  const materialBase = { roughness: 0.48, metalness: 0.02, flatShading: true };
  const kit = new THREE.MeshStandardMaterial({ ...materialBase, color: primary, emissive: primary, emissiveIntensity: 0.025 });
  const trim = new THREE.MeshStandardMaterial({ ...materialBase, color: secondary, emissive: secondary, emissiveIntensity: 0.035 });
  const shortsMat = new THREE.MeshStandardMaterial({ ...materialBase, color: shorts, roughness: 0.52 });
  const socksMat = new THREE.MeshStandardMaterial({ ...materialBase, color: socks, roughness: 0.5 });
  const bootMat = new THREE.MeshStandardMaterial({ ...materialBase, color: bootColor, roughness: 0.36, metalness: 0.08 });
  const skinMat = new THREE.MeshStandardMaterial({ ...materialBase, color: skin, roughness: 0.56 });
  const hairMat = new THREE.MeshStandardMaterial({ ...materialBase, color: hairColor ?? (referee ? 0x111827 : 0x2d160a), roughness: 0.72 });
  const whiteDetailMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc });
  const seamMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc, transparent: true, opacity: 0.48 });
  const bootStripeMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
  const studMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc });
  const darkFaceMat = new THREE.MeshBasicMaterial({ color: 0x111827 });

  const body = makePart(new THREE.CapsuleGeometry(0.43, 0.52, 8, 14), kit, 0, 1.28, 0);
  body.scale.set(0.96, 0.92, 0.72);
  group.add(body);

  const bellyPanel = makePart(new THREE.SphereGeometry(0.34, 14, 8), trim, 0, 1.25, 0.4, false);
  bellyPanel.scale.set(0.78, 0.66, 0.1);
  group.add(bellyPanel);

  const chest = makePart(new THREE.SphereGeometry(0.24, 12, 8), kit, 0, 1.46, 0.43, false);
  chest.scale.set(1.24, 0.3, 0.08);
  group.add(chest);

  const frontStripe = makePart(new THREE.CapsuleGeometry(0.03, 0.48, 5, 8), trim, 0, 1.27, 0.48, false);
  frontStripe.scale.set(1, 1, 0.6);
  group.add(frontStripe);

  const leftCollar = makePart(new THREE.CapsuleGeometry(0.018, 0.28, 4, 8), trim, -0.09, 1.69, 0.49, false);
  leftCollar.rotation.z = 0.58;
  const rightCollar = leftCollar.clone();
  rightCollar.position.x = 0.09;
  rightCollar.rotation.z = -0.58;
  const leftSideStripe = makePart(new THREE.CapsuleGeometry(0.018, 0.42, 4, 8), seamMat, -0.32, 1.21, 0.42, false);
  leftSideStripe.rotation.z = 0.06;
  const rightSideStripe = leftSideStripe.clone();
  rightSideStripe.position.x = 0.32;
  rightSideStripe.rotation.z = -0.06;
  group.add(leftCollar, rightCollar, leftSideStripe, rightSideStripe);

  const shoulders = makePart(new THREE.CapsuleGeometry(0.2, 0.78, 7, 12), kit, 0, 1.58, 0);
  shoulders.rotation.set(-0.02, 0, Math.PI / 2);
  shoulders.scale.set(1.06, 1, 1.22);
  group.add(shoulders);

  const leftShoulderTrim = makePart(new THREE.SphereGeometry(0.23, 12, 8), trim, -0.58, 1.57, 0.02);
  leftShoulderTrim.scale.set(1.14, 0.72, 1.04);
  const rightShoulderTrim = leftShoulderTrim.clone();
  rightShoulderTrim.position.x = 0.58;
  group.add(leftShoulderTrim, rightShoulderTrim);

  const hips = makePart(new THREE.SphereGeometry(0.41, 14, 8), shortsMat, 0, 0.83, 0);
  hips.scale.set(1.08, 0.44, 0.72);
  group.add(hips);

  const waistTrim = makePart(new THREE.TorusGeometry(0.36, 0.026, 7, 22), trim, 0, 1.06, 0, false);
  waistTrim.rotation.x = Math.PI / 2;
  waistTrim.scale.set(1.22, 0.74, 1);
  group.add(waistTrim);

  const backNumber = makePart(
    new THREE.PlaneGeometry(0.64, 0.64),
    createNumberMaterial(number, numberColor),
    0,
    1.3,
    -0.46,
    false
  );
  backNumber.rotation.y = Math.PI;
  backNumber.renderOrder = 20;
  group.add(backNumber);

  if (logo) {
    const badgeTexture = new THREE.TextureLoader().load(logo);
    badgeTexture.colorSpace = THREE.SRGBColorSpace;
    const badge = makePart(
      new THREE.PlaneGeometry(0.3, 0.3),
      new THREE.MeshBasicMaterial({ map: badgeTexture, transparent: true }),
      -0.22,
      1.41,
      0.49,
      false
    );
    badge.renderOrder = 18;
    group.add(badge);
  }

  const neck = makePart(new THREE.CylinderGeometry(0.15, 0.18, 0.24, 10), skinMat, 0, 1.91, 0);
  group.add(neck);

  const head = makePart(new THREE.SphereGeometry(0.53, 18, 13), skinMat, 0, 2.36, 0.02);
  head.scale.set(1.03, 1.03, 0.95);
  group.add(head);

  const hair = makePart(new THREE.SphereGeometry(0.55, 13, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), hairMat, 0, 2.58, 0.02);
  hair.scale.set(1.04, 0.88, 0.94);
  group.add(hair);

  const fringe = makePart(new THREE.CapsuleGeometry(0.078, 0.44, 5, 8), hairMat, -0.02, 2.53, 0.41);
  fringe.rotation.set(Math.PI / 2 - 0.16, 0, Math.PI / 2);
  const quiff = makePart(new THREE.CapsuleGeometry(0.125, 0.38, 5, 8), hairMat, 0.07, 2.86, 0.2);
  quiff.rotation.set(1.04, 0.12, -0.34);
  const leftLock = makePart(new THREE.CapsuleGeometry(0.064, 0.3, 5, 8), hairMat, -0.2, 2.72, 0.25);
  leftLock.rotation.set(1.05, -0.06, 0.34);
  const rightLock = makePart(new THREE.CapsuleGeometry(0.064, 0.28, 5, 8), hairMat, 0.23, 2.7, 0.23);
  rightLock.rotation.set(1.08, 0.08, -0.42);
  group.add(fringe, quiff, leftLock, rightLock);

  const leftEye = makePart(new THREE.SphereGeometry(0.062, 9, 7), darkFaceMat, -0.16, 2.43, 0.49, false);
  leftEye.scale.set(1.12, 0.84, 0.52);
  const rightEye = makePart(new THREE.SphereGeometry(0.062, 9, 7), darkFaceMat, 0.16, 2.43, 0.49, false);
  rightEye.scale.set(1.12, 0.84, 0.52);
  const nose = makePart(new THREE.SphereGeometry(0.04, 7, 5), skinMat, 0, 2.34, 0.55, false);
  nose.scale.set(0.72, 0.82, 1.25);
  const mouth = makePart(new THREE.CapsuleGeometry(0.012, captain && !referee ? 0.16 : 0.13, 4, 7), new THREE.MeshBasicMaterial({ color: referee ? 0x111827 : 0x7f1d1d }), 0, 2.24, 0.52, false);
  mouth.rotation.z = Math.PI / 2;
  const leftBrow = makePart(new THREE.CapsuleGeometry(0.014, 0.15, 4, 7), hairMat, -0.16, 2.54, 0.5, false);
  leftBrow.rotation.z = referee ? -0.42 : captain ? 0.08 : -0.16;
  const rightBrow = makePart(new THREE.CapsuleGeometry(0.014, 0.15, 4, 7), hairMat, 0.16, 2.54, 0.5, false);
  rightBrow.rotation.z = referee ? 0.42 : captain ? -0.08 : 0.16;
  group.add(leftEye, rightEye, nose, mouth, leftBrow, rightBrow);

  const headParts = [head, hair, fringe, quiff, leftLock, rightLock, leftEye, rightEye, nose, mouth, leftBrow, rightBrow].map((part) => ({
    part,
    baseY: part.position.y
  }));

  const leftArm = new THREE.Group();
  const rightArm = new THREE.Group();
  const leftLeg = new THREE.Group();
  const rightLeg = new THREE.Group();

  function buildArm(target, side) {
    target.position.set(side * 0.72, 1.48, 0.02);
    const sleeve = makePart(new THREE.CapsuleGeometry(0.2, 0.4, 7, 10), kit, side * 0.02, -0.13, 0);
    sleeve.rotation.z = side * 0.2;
    const sleeveSeam = makePart(new THREE.CapsuleGeometry(0.01, 0.2, 4, 7), seamMat, side * 0.04, -0.12, 0.14, false);
    sleeveSeam.rotation.z = side * 0.2;
    const cuff = makePart(new THREE.CylinderGeometry(0.19, 0.19, 0.07, 9), trim, side * 0.035, -0.38, 0, false);
    cuff.rotation.z = side * 0.2;
    cuff.scale.set(1, 0.74, 0.9);
    const forearm = makePart(new THREE.CapsuleGeometry(0.15, 0.36, 7, 10), skinMat, side * 0.055, -0.6, 0);
    forearm.rotation.z = side * 0.1;
    const hand = makePart(new THREE.SphereGeometry(0.19, 9, 7), skinMat, side * 0.07, -0.83, 0.02);
    hand.scale.set(0.96, 1.08, 0.92);
    target.add(sleeve, sleeveSeam, cuff, forearm, hand);
    if (captain && side === -1 && !referee) {
      const armband = makePart(new THREE.CylinderGeometry(0.158, 0.158, 0.07, 9), new THREE.MeshBasicMaterial({ color: 0xfacc15 }), side * 0.025, -0.27, 0.01, false);
      armband.rotation.z = side * 0.2;
      armband.scale.set(1.03, 0.82, 0.92);
      target.add(armband);
    }
    target.userData = { sleeve, cuff, forearm, hand, baseX: target.position.x };
    group.add(target);
  }

  function buildLeg(target, side) {
    target.position.set(side * 0.27, 0.94, 0);
    const thigh = makePart(new THREE.CapsuleGeometry(0.18, 0.4, 7, 10), shortsMat, 0, -0.18, 0);
    thigh.rotation.z = side * 0.035;
    const shortStripe = makePart(new THREE.CapsuleGeometry(0.01, 0.28, 4, 7), trim, side * 0.12, -0.18, 0.14, false);
    shortStripe.rotation.z = side * 0.05;
    const sockStripe = makePart(new THREE.CylinderGeometry(0.14, 0.14, 0.065, 9), trim, 0, -0.43, 0, false);
    sockStripe.scale.set(0.98, 0.65, 0.9);
    const shin = makePart(new THREE.CapsuleGeometry(0.13, 0.43, 7, 10), socksMat, 0, -0.62, 0);
    shin.scale.set(0.95, 1, 0.84);
    const boot = makePart(new THREE.CapsuleGeometry(0.12, 0.44, 7, 10), bootMat, 0, -0.86, -0.13);
    boot.rotation.x = Math.PI / 2;
    boot.scale.set(1.3, 0.98, 0.96);
    const toe = makePart(new THREE.SphereGeometry(0.16, 9, 7), bootMat, 0, -0.86, -0.39);
    toe.scale.set(1.12, 0.66, 1.26);
    const bootStripe = makePart(new THREE.CapsuleGeometry(0.014, 0.28, 4, 7), bootStripeMat, 0, -0.79, -0.25, false);
    bootStripe.rotation.set(Math.PI / 2, 0, Math.PI / 2);
    const lace = makePart(new THREE.CapsuleGeometry(0.008, 0.16, 4, 7), bootStripeMat, 0, -0.78, -0.32, false);
    lace.rotation.set(Math.PI / 2, 0, Math.PI / 2);
    const sole = makePart(new THREE.CapsuleGeometry(0.04, 0.36, 4, 7), darkFaceMat, 0, -0.96, -0.34, false);
    sole.rotation.set(Math.PI / 2, 0, Math.PI / 2);
    const frontStud = makePart(new THREE.CylinderGeometry(0.024, 0.032, 0.05, 6), studMat, side * 0.055, -1.0, -0.44, false);
    const rearStud = makePart(new THREE.CylinderGeometry(0.022, 0.03, 0.045, 6), studMat, side * -0.055, -1.0, -0.21, false);
    frontStud.rotation.x = Math.PI / 2;
    rearStud.rotation.x = Math.PI / 2;
    target.add(thigh, shortStripe, sockStripe, shin, boot, toe, bootStripe, lace, sole, frontStud, rearStud);
    target.userData = { thigh, shin, boot, toe, bootStripe, lace, sole };
    group.add(target);
  }

  buildArm(leftArm, -1);
  buildArm(rightArm, 1);
  buildLeg(leftLeg, -1);
  buildLeg(rightLeg, 1);

  if (referee) {
    for (let i = -1; i <= 1; i += 1) {
      const stripe = makePart(new THREE.CapsuleGeometry(0.024, 0.68, 5, 8), whiteDetailMat, i * 0.15, 1.35, 0.53, false);
      stripe.scale.set(1, 1, 0.62);
      group.add(stripe);
    }
  }

  group.userData = {
    phase: Math.random() * Math.PI * 2,
    body,
    shoulders,
    chest,
    hips,
    head,
    leftArm,
    rightArm,
    leftLeg,
    rightLeg,
    headParts,
    materials: { kit, trim, shortsMat, socksMat, bootMat, skinMat, hairMat },
    face: { leftEye, rightEye, nose, mouth, leftBrow, rightBrow },
    animationEnergy: captain ? 1.16 : 1,
    baseBodyY: body.position.y,
    baseShouldersY: shoulders.position.y,
    baseChestY: chest.position.y,
    baseHipsY: hips.position.y,
    baseHeadY: head.position.y
  };
  return group;
}

function createStumbleFootballCharacter({
  primary,
  secondary,
  shorts = 0x111827,
  socks = 0xf8fafc,
  skin = 0xf0bd8b,
  referee = false,
  logo = null,
  number = randomInt(1, 99),
  numberColor = '#ffffff',
  hairColor = null,
  bootColor = 0x020814,
  captain = false
}) {
  const group = new THREE.Group();
  const materialBase = { roughness: 0.5, metalness: 0.02, flatShading: true };
  const kit = new THREE.MeshStandardMaterial({ ...materialBase, color: primary, emissive: primary, emissiveIntensity: 0.035 });
  const trim = new THREE.MeshStandardMaterial({ ...materialBase, color: secondary, emissive: secondary, emissiveIntensity: 0.05 });
  const shortsMat = new THREE.MeshStandardMaterial({ ...materialBase, color: shorts, roughness: 0.55 });
  const socksMat = new THREE.MeshStandardMaterial({ ...materialBase, color: socks, roughness: 0.48 });
  const bootMat = new THREE.MeshStandardMaterial({ ...materialBase, color: bootColor, roughness: 0.34, metalness: 0.1 });
  const skinMat = new THREE.MeshStandardMaterial({ ...materialBase, color: skin, roughness: 0.58 });
  const hairMat = new THREE.MeshStandardMaterial({ ...materialBase, color: hairColor ?? (referee ? 0x111827 : 0x2a1408), roughness: 0.72 });
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc, transparent: true, opacity: 0.62 });
  const darkMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
  const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const eyeMat = new THREE.MeshBasicMaterial({ color: referee ? 0x111827 : 0x08111f });
  const bootAccentMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
  const studMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc });

  const body = makePart(new THREE.CapsuleGeometry(0.48, 0.48, 10, 16), kit, 0, 1.32, 0);
  body.scale.set(1.08, 0.95, 0.78);
  group.add(body);

  const chest = makePart(new THREE.SphereGeometry(0.45, 16, 10), kit, 0, 1.48, 0.26);
  chest.scale.set(1.05, 0.68, 0.42);
  group.add(chest);

  const bellyPatch = makePart(new THREE.SphereGeometry(0.34, 14, 8), trim, 0, 1.26, 0.44, false);
  bellyPatch.scale.set(0.88, 0.58, 0.09);
  const centerStripe = makePart(new THREE.CapsuleGeometry(0.026, 0.58, 5, 8), trim, 0, 1.31, 0.51, false);
  centerStripe.scale.set(1, 1, 0.62);
  const leftKitSeam = makePart(new THREE.CapsuleGeometry(0.013, 0.46, 4, 7), lineMat, -0.34, 1.28, 0.45, false);
  leftKitSeam.rotation.z = 0.08;
  const rightKitSeam = leftKitSeam.clone();
  rightKitSeam.position.x = 0.34;
  rightKitSeam.rotation.z = -0.08;
  group.add(bellyPatch, centerStripe, leftKitSeam, rightKitSeam);

  const leftCollar = makePart(new THREE.CapsuleGeometry(0.018, 0.3, 4, 7), trim, -0.1, 1.77, 0.5, false);
  leftCollar.rotation.z = 0.56;
  const rightCollar = leftCollar.clone();
  rightCollar.position.x = 0.1;
  rightCollar.rotation.z = -0.56;
  const collarShadow = makePart(new THREE.CapsuleGeometry(0.016, 0.2, 4, 7), darkMat, 0, 1.72, 0.515, false);
  collarShadow.rotation.z = Math.PI / 2;
  group.add(leftCollar, rightCollar, collarShadow);

  const shoulders = new THREE.Group();
  shoulders.position.set(0, 1.57, 0);
  const leftSleeveCap = makePart(new THREE.SphereGeometry(0.28, 14, 9), kit, -0.58, 0, 0.02);
  leftSleeveCap.scale.set(1.08, 0.78, 0.92);
  const rightSleeveCap = leftSleeveCap.clone();
  rightSleeveCap.position.x = 0.58;
  const leftSleeveTrim = makePart(new THREE.TorusGeometry(0.2, 0.018, 6, 20), trim, -0.62, -0.02, 0.02, false);
  leftSleeveTrim.rotation.set(Math.PI / 2, 0.18, 0);
  leftSleeveTrim.scale.set(0.72, 1, 0.72);
  const rightSleeveTrim = leftSleeveTrim.clone();
  rightSleeveTrim.position.x = 0.62;
  rightSleeveTrim.rotation.y = -0.18;
  shoulders.add(leftSleeveCap, rightSleeveCap, leftSleeveTrim, rightSleeveTrim);
  group.add(shoulders);

  const hips = makePart(new THREE.SphereGeometry(0.4, 14, 8), shortsMat, 0, 0.88, 0);
  hips.scale.set(1.18, 0.46, 0.72);
  group.add(hips);

  const waistBand = makePart(new THREE.TorusGeometry(0.34, 0.026, 7, 24), trim, 0, 1.02, 0, false);
  waistBand.rotation.x = Math.PI / 2;
  waistBand.scale.set(1.4, 0.76, 1);
  group.add(waistBand);

  const backNumber = makePart(
    new THREE.PlaneGeometry(0.62, 0.62),
    createNumberMaterial(number, numberColor),
    0,
    1.33,
    -0.5,
    false
  );
  backNumber.rotation.y = Math.PI;
  backNumber.renderOrder = 24;
  group.add(backNumber);

  if (logo) {
    const badgeTexture = new THREE.TextureLoader().load(logo);
    badgeTexture.colorSpace = THREE.SRGBColorSpace;
    const badge = makePart(
      new THREE.PlaneGeometry(0.28, 0.28),
      new THREE.MeshBasicMaterial({ map: badgeTexture, transparent: true }),
      -0.23,
      1.48,
      0.53,
      false
    );
    badge.renderOrder = 22;
    group.add(badge);
  }

  const neck = makePart(new THREE.CylinderGeometry(0.15, 0.19, 0.24, 10), skinMat, 0, 1.92, 0);
  group.add(neck);

  const head = makePart(new THREE.SphereGeometry(0.58, 18, 14), skinMat, 0, 2.38, 0.02);
  head.scale.set(1.08, 1.02, 0.94);
  group.add(head);

  const hairCap = makePart(new THREE.SphereGeometry(0.59, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.54), hairMat, 0, 2.61, 0.02);
  hairCap.scale.set(1.08, 0.88, 0.96);
  const frontHair = makePart(new THREE.CapsuleGeometry(0.09, 0.46, 5, 8), hairMat, -0.03, 2.56, 0.42);
  frontHair.rotation.set(1.36, 0, Math.PI / 2);
  const topTuft = makePart(new THREE.CapsuleGeometry(0.13, 0.42, 5, 8), hairMat, 0.06, 2.9, 0.16);
  topTuft.rotation.set(0.95, 0.18, -0.34);
  const leftSideHair = makePart(new THREE.SphereGeometry(0.1, 8, 6), hairMat, -0.42, 2.51, 0.08);
  leftSideHair.scale.set(0.72, 1.3, 0.82);
  const rightSideHair = leftSideHair.clone();
  rightSideHair.position.x = 0.42;
  group.add(hairCap, frontHair, topTuft, leftSideHair, rightSideHair);

  const leftEyeWhite = makePart(new THREE.SphereGeometry(0.118, 10, 8), eyeWhiteMat, -0.18, 2.43, 0.52, false);
  leftEyeWhite.scale.set(1.05, 0.86, 0.34);
  const rightEyeWhite = leftEyeWhite.clone();
  rightEyeWhite.position.x = 0.18;
  const leftEye = makePart(new THREE.SphereGeometry(0.073, 10, 8), eyeMat, -0.18, 2.43, 0.565, false);
  leftEye.scale.set(1.02, 0.86, 0.28);
  const rightEye = leftEye.clone();
  rightEye.position.x = 0.18;
  const leftSpark = makePart(new THREE.SphereGeometry(0.018, 6, 4), eyeWhiteMat, -0.205, 2.46, 0.592, false);
  const rightSpark = leftSpark.clone();
  rightSpark.position.x = 0.155;
  const nose = makePart(new THREE.SphereGeometry(0.038, 7, 5), skinMat, 0, 2.34, 0.59, false);
  nose.scale.set(0.76, 0.82, 1.28);
  const mouth = makePart(new THREE.CapsuleGeometry(0.013, captain && !referee ? 0.18 : 0.14, 4, 7), new THREE.MeshBasicMaterial({ color: referee ? 0x111827 : 0x7f1d1d }), 0, 2.23, 0.56, false);
  mouth.rotation.z = Math.PI / 2;
  const leftBrow = makePart(new THREE.CapsuleGeometry(0.015, 0.17, 4, 7), hairMat, -0.18, 2.56, 0.54, false);
  leftBrow.rotation.z = referee ? -0.45 : captain ? 0.08 : -0.18;
  const rightBrow = makePart(new THREE.CapsuleGeometry(0.015, 0.17, 4, 7), hairMat, 0.18, 2.56, 0.54, false);
  rightBrow.rotation.z = referee ? 0.45 : captain ? -0.08 : 0.18;
  group.add(leftEyeWhite, rightEyeWhite, leftEye, rightEye, leftSpark, rightSpark, nose, mouth, leftBrow, rightBrow);

  const headParts = [
    neck,
    head,
    hairCap,
    frontHair,
    topTuft,
    leftSideHair,
    rightSideHair,
    leftEyeWhite,
    rightEyeWhite,
    leftEye,
    rightEye,
    leftSpark,
    rightSpark,
    nose,
    mouth,
    leftBrow,
    rightBrow
  ].map((part) => ({ part, baseY: part.position.y }));

  const leftArm = new THREE.Group();
  const rightArm = new THREE.Group();
  const leftLeg = new THREE.Group();
  const rightLeg = new THREE.Group();

  function buildArm(target, side) {
    target.position.set(side * 0.72, 1.48, 0.02);
    const sleeve = makePart(new THREE.CapsuleGeometry(0.19, 0.3, 7, 10), kit, 0, -0.1, 0);
    sleeve.rotation.z = side * 0.14;
    const forearm = makePart(new THREE.CapsuleGeometry(0.155, 0.42, 7, 10), skinMat, side * 0.04, -0.48, 0);
    forearm.rotation.z = side * 0.08;
    const cuff = makePart(new THREE.TorusGeometry(0.15, 0.018, 6, 18), trim, side * 0.028, -0.3, 0, false);
    cuff.rotation.set(Math.PI / 2, 0, 0);
    cuff.scale.set(1, 0.78, 1);
    const hand = makePart(new THREE.SphereGeometry(0.205, 10, 8), skinMat, side * 0.06, -0.75, 0.02);
    hand.scale.set(1, 1.1, 0.92);
    target.add(sleeve, cuff, forearm, hand);
    if (captain && side === -1 && !referee) {
      const armband = makePart(new THREE.TorusGeometry(0.155, 0.02, 6, 18), new THREE.MeshBasicMaterial({ color: 0xfacc15 }), side * 0.026, -0.22, 0.01, false);
      armband.rotation.set(Math.PI / 2, 0, 0);
      armband.scale.set(1, 0.72, 1);
      target.add(armband);
    }
    target.userData = { sleeve, cuff, forearm, hand, baseX: target.position.x };
    group.add(target);
  }

  function buildLeg(target, side) {
    target.position.set(side * 0.28, 0.96, 0);
    const thigh = makePart(new THREE.CapsuleGeometry(0.18, 0.38, 7, 10), shortsMat, 0, -0.16, 0);
    thigh.rotation.z = side * 0.03;
    const shortStripe = makePart(new THREE.CapsuleGeometry(0.012, 0.28, 4, 7), trim, side * 0.12, -0.17, 0.14, false);
    shortStripe.rotation.z = side * 0.04;
    const sock = makePart(new THREE.CapsuleGeometry(0.14, 0.46, 7, 10), socksMat, 0, -0.6, 0);
    sock.scale.set(0.94, 1, 0.84);
    const sockBand = makePart(new THREE.CylinderGeometry(0.14, 0.14, 0.06, 9), trim, 0, -0.38, 0, false);
    sockBand.scale.set(0.96, 0.66, 0.9);
    const boot = makePart(new THREE.CapsuleGeometry(0.12, 0.46, 7, 10), bootMat, 0, -0.88, -0.12);
    boot.rotation.x = Math.PI / 2;
    boot.scale.set(1.34, 1, 0.98);
    const toe = makePart(new THREE.SphereGeometry(0.16, 9, 7), bootMat, 0, -0.88, -0.4);
    toe.scale.set(1.15, 0.66, 1.3);
    const bootFlash = makePart(new THREE.CapsuleGeometry(0.014, 0.3, 4, 7), bootAccentMat, 0, -0.81, -0.25, false);
    bootFlash.rotation.set(Math.PI / 2, 0, Math.PI / 2);
    const sole = makePart(new THREE.CapsuleGeometry(0.044, 0.38, 4, 7), darkMat, 0, -0.98, -0.33, false);
    sole.rotation.set(Math.PI / 2, 0, Math.PI / 2);
    const studA = makePart(new THREE.CylinderGeometry(0.023, 0.032, 0.05, 6), studMat, side * 0.055, -1.02, -0.45, false);
    const studB = makePart(new THREE.CylinderGeometry(0.022, 0.03, 0.045, 6), studMat, side * -0.055, -1.02, -0.22, false);
    studA.rotation.x = Math.PI / 2;
    studB.rotation.x = Math.PI / 2;
    target.add(thigh, shortStripe, sock, sockBand, boot, toe, bootFlash, sole, studA, studB);
    target.userData = { thigh, shin: sock, boot, toe, bootStripe: bootFlash, sole };
    group.add(target);
  }

  buildArm(leftArm, -1);
  buildArm(rightArm, 1);
  buildLeg(leftLeg, -1);
  buildLeg(rightLeg, 1);

  if (referee) {
    for (let i = -1; i <= 1; i += 1) {
      const stripe = makePart(new THREE.CapsuleGeometry(0.022, 0.62, 5, 8), lineMat, i * 0.15, 1.34, 0.535, false);
      stripe.scale.set(1, 1, 0.62);
      group.add(stripe);
    }
  }

  group.userData = {
    phase: Math.random() * Math.PI * 2,
    body,
    shoulders,
    chest,
    hips,
    head,
    leftArm,
    rightArm,
    leftLeg,
    rightLeg,
    headParts,
    materials: { kit, trim, shortsMat, socksMat, bootMat, skinMat, hairMat },
    face: { leftEye, rightEye, nose, mouth, leftBrow, rightBrow },
    animationEnergy: captain ? 1.18 : 1,
    baseBodyY: body.position.y,
    baseShouldersY: shoulders.position.y,
    baseChestY: chest.position.y,
    baseHipsY: hips.position.y,
    baseHeadY: head.position.y
  };
  return group;
}

function createCharacter({
  primary,
  secondary,
  shorts = 0x111827,
  socks = 0xf8fafc,
  skin = 0xf0bd8b,
  referee = false,
  logo = null,
  number = randomInt(1, 99),
  numberColor = '#ffffff',
  hairColor = null,
  bootColor = 0x0f172a,
  captain = false
}) {
  return createStumbleFootballCharacter({
    primary,
    secondary,
    shorts,
    socks,
    skin,
    referee,
    logo,
    number,
    numberColor,
    hairColor,
    bootColor,
    captain
  });
  const group = new THREE.Group();
  const materialBase = { roughness: 0.44, metalness: 0.02, flatShading: true };
  const kit = new THREE.MeshStandardMaterial({ ...materialBase, color: primary });
  const trim = new THREE.MeshStandardMaterial({ ...materialBase, color: secondary, roughness: 0.4 });
  const shortsMat = new THREE.MeshStandardMaterial({ ...materialBase, color: shorts, roughness: 0.5 });
  const socksMat = new THREE.MeshStandardMaterial({ ...materialBase, color: socks, roughness: 0.46 });
  const bootMat = new THREE.MeshStandardMaterial({ ...materialBase, color: bootColor, roughness: 0.34, metalness: 0.08 });
  const skinMat = new THREE.MeshStandardMaterial({ ...materialBase, color: skin, roughness: 0.54 });
  const hairMat = new THREE.MeshStandardMaterial({ ...materialBase, color: hairColor ?? (referee ? 0x111827 : 0x2d160a), roughness: 0.7 });
  const bootStripeMat = new THREE.MeshBasicMaterial({ color: secondary });
  const whiteDetailMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc });
  const softWhiteDetailMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc, transparent: true, opacity: 0.62 });

  const body = makePart(new THREE.CapsuleGeometry(0.46, 0.68, 10, 18), kit, 0, 1.36, 0);
  body.scale.set(0.98, 1.05, 0.76);
  group.add(body);

  const shoulders = makePart(new THREE.CapsuleGeometry(0.18, 0.82, 8, 14), kit, 0, 1.72, 0);
  shoulders.rotation.set(-0.03, 0, Math.PI / 2);
  shoulders.scale.set(1, 1, 1.42);
  group.add(shoulders);
  const chest = makePart(new THREE.SphereGeometry(0.42, 16, 10), trim, 0, 1.42, 0.37);
  chest.scale.set(0.9, 0.72, 0.11);
  chest.rotation.x = -0.08;
  group.add(chest);
  const frontStripe = makePart(new THREE.CapsuleGeometry(0.035, 0.52, 6, 10), kit, 0, 1.42, 0.46);
  frontStripe.scale.set(1, 1, 0.5);
  group.add(frontStripe);
  const leftShoulderTrim = makePart(new THREE.CapsuleGeometry(0.054, 0.3, 6, 10), trim, -0.49, 1.75, 0);
  leftShoulderTrim.rotation.set(0, Math.PI / 2, Math.PI / 2);
  leftShoulderTrim.scale.set(1, 1, 1.25);
  const rightShoulderTrim = makePart(new THREE.CapsuleGeometry(0.054, 0.3, 6, 10), trim, 0.49, 1.75, 0);
  rightShoulderTrim.rotation.set(0, Math.PI / 2, Math.PI / 2);
  rightShoulderTrim.scale.set(1, 1, 1.25);
  group.add(leftShoulderTrim, rightShoulderTrim);

  const leftSidePanel = makePart(new THREE.CapsuleGeometry(0.026, 0.54, 5, 8), trim, -0.38, 1.35, 0.31, false);
  leftSidePanel.rotation.z = -0.04;
  const rightSidePanel = makePart(new THREE.CapsuleGeometry(0.026, 0.54, 5, 8), trim, 0.38, 1.35, 0.31, false);
  rightSidePanel.rotation.z = 0.04;
  const chestHighlight = makePart(new THREE.CapsuleGeometry(0.022, 0.44, 5, 8), softWhiteDetailMat, 0, 1.61, 0.47, false);
  chestHighlight.rotation.z = Math.PI / 2;
  group.add(leftSidePanel, rightSidePanel, chestHighlight);

  const backPanel = makePart(new THREE.PlaneGeometry(0.72, 0.7), new THREE.MeshBasicMaterial({ color: primary, transparent: true, opacity: 0.12, side: THREE.DoubleSide }), 0, 1.42, -0.505, false);
  backPanel.rotation.y = Math.PI;
  group.add(backPanel);
  const backNumber = makePart(
    new THREE.PlaneGeometry(0.74, 0.74),
    createNumberMaterial(number, numberColor),
    0,
    1.43,
    -0.535,
    false
  );
  backNumber.rotation.y = Math.PI;
  backNumber.renderOrder = 20;
  group.add(backNumber);

  if (logo) {
    const badgeTexture = new THREE.TextureLoader().load(logo);
    badgeTexture.colorSpace = THREE.SRGBColorSpace;
    const badge = makePart(
      new THREE.PlaneGeometry(0.26, 0.26),
      new THREE.MeshBasicMaterial({ map: badgeTexture, transparent: true }),
      -0.25,
      1.5,
      0.475,
      false
    );
    group.add(badge);
  }

  const hips = makePart(new THREE.SphereGeometry(0.43, 16, 10), shortsMat, 0, 0.84, 0);
  hips.scale.set(1.08, 0.46, 0.72);
  hips.rotation.x = -0.03;
  group.add(hips);
  const waistTrim = makePart(new THREE.TorusGeometry(0.36, 0.024, 8, 24), trim, 0, 1.05, 0, false);
  waistTrim.rotation.x = Math.PI / 2;
  waistTrim.scale.set(1.28, 0.78, 1);
  group.add(waistTrim);
  const leftShortStripe = makePart(new THREE.CapsuleGeometry(0.024, 0.3, 5, 8), trim, -0.39, 0.84, 0.02, false);
  leftShortStripe.rotation.z = -0.02;
  const rightShortStripe = makePart(new THREE.CapsuleGeometry(0.024, 0.3, 5, 8), trim, 0.39, 0.84, 0.02, false);
  rightShortStripe.rotation.z = 0.02;
  group.add(leftShortStripe, rightShortStripe);

  const neck = makePart(new THREE.CylinderGeometry(0.15, 0.18, 0.12, 10), skinMat, 0, 1.96, 0);
  group.add(neck);
  const collar = makePart(new THREE.TorusGeometry(0.22, 0.026, 8, 24), trim, 0, 1.91, 0.02, false);
  collar.rotation.x = Math.PI / 2;
  group.add(collar);

  const head = makePart(new THREE.SphereGeometry(0.43, 18, 14), skinMat, 0, 2.29, 0.02);
  head.scale.set(0.96, 1.05, 0.9);
  group.add(head);
  const hair = makePart(new THREE.SphereGeometry(0.44, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), hairMat, 0, 2.46, 0.02);
  hair.scale.set(1.03, 0.88, 0.92);
  group.add(hair);
  const fringe = makePart(new THREE.CapsuleGeometry(0.06, 0.4, 5, 8), hairMat, 0, 2.42, 0.34);
  fringe.rotation.set(Math.PI / 2 - 0.18, 0, Math.PI / 2);
  fringe.scale.set(1, 1, 0.85);
  group.add(fringe);
  const quiff = makePart(new THREE.CapsuleGeometry(0.11, 0.32, 5, 8), hairMat, 0.05, 2.68, 0.19);
  quiff.rotation.set(1.08, 0.16, -0.32);
  quiff.scale.set(1, 1.15, 0.8);
  const leftLock = makePart(new THREE.CapsuleGeometry(0.06, 0.26, 5, 8), hairMat, -0.14, 2.61, 0.24);
  leftLock.rotation.set(1.08, -0.1, 0.28);
  const rightLock = makePart(new THREE.CapsuleGeometry(0.06, 0.24, 5, 8), hairMat, 0.2, 2.58, 0.19);
  rightLock.rotation.set(1.12, 0.06, -0.42);
  const leftFade = makePart(new THREE.CapsuleGeometry(0.048, 0.18, 5, 8), hairMat, -0.37, 2.34, 0.08);
  leftFade.rotation.z = -0.08;
  const rightFade = makePart(new THREE.CapsuleGeometry(0.048, 0.18, 5, 8), hairMat, 0.37, 2.34, 0.08);
  rightFade.rotation.z = 0.08;
  group.add(quiff, leftLock, rightLock, leftFade, rightFade);
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0x111827 });
  const leftEye = makePart(new THREE.SphereGeometry(0.046, 8, 6), eyeMat, -0.14, 2.32, 0.38, false);
  leftEye.scale.set(1.08, 0.78, 0.6);
  const rightEye = makePart(new THREE.SphereGeometry(0.046, 8, 6), eyeMat, 0.14, 2.32, 0.38, false);
  rightEye.scale.set(1.08, 0.78, 0.6);
  const nose = makePart(new THREE.SphereGeometry(0.04, 8, 6), skinMat, 0, 2.24, 0.45, false);
  nose.scale.set(0.72, 0.82, 1.25);
  const mouth = makePart(new THREE.CapsuleGeometry(0.011, 0.14, 4, 7), new THREE.MeshBasicMaterial({ color: referee ? 0x111827 : 0x7f1d1d }), 0, 2.17, 0.43, false);
  mouth.rotation.z = Math.PI / 2;
  const leftBrow = makePart(new THREE.CapsuleGeometry(0.012, 0.13, 4, 7), hairMat, -0.14, 2.43, 0.39, false);
  leftBrow.rotation.z = referee ? -0.34 : -0.18;
  const rightBrow = makePart(new THREE.CapsuleGeometry(0.012, 0.13, 4, 7), hairMat, 0.14, 2.43, 0.39, false);
  rightBrow.rotation.z = referee ? 0.34 : 0.18;
  const leftEar = makePart(new THREE.SphereGeometry(0.065, 8, 6), skinMat, -0.41, 2.28, 0.02, false);
  leftEar.scale.set(0.8, 1.15, 0.62);
  const rightEar = makePart(new THREE.SphereGeometry(0.065, 8, 6), skinMat, 0.41, 2.28, 0.02, false);
  rightEar.scale.set(0.8, 1.15, 0.62);
  group.add(leftEye, rightEye, nose, mouth, leftBrow, rightBrow, leftEar, rightEar);
  const headParts = [head, hair, fringe, quiff, leftLock, rightLock, leftFade, rightFade, leftEye, rightEye, nose, mouth, leftBrow, rightBrow, leftEar, rightEar].map((part) => ({
    part,
    baseY: part.position.y
  }));

  const leftArm = new THREE.Group();
  const rightArm = new THREE.Group();
  const leftLeg = new THREE.Group();
  const rightLeg = new THREE.Group();

  function buildArm(target, side) {
    target.position.set(side * 0.62, 1.69, 0.02);
    const sleeve = makePart(new THREE.CapsuleGeometry(0.14, 0.4, 7, 12), kit, side * 0.01, -0.2, 0);
    sleeve.rotation.z = side * 0.18;
    sleeve.scale.set(0.96, 1, 0.9);
    const cuff = makePart(new THREE.CylinderGeometry(0.14, 0.14, 0.06, 10), trim, side * 0.03, -0.44, 0, false);
    cuff.rotation.z = side * 0.16;
    cuff.scale.set(1, 0.76, 0.92);
    const forearm = makePart(new THREE.CapsuleGeometry(0.105, 0.38, 7, 12), skinMat, side * 0.045, -0.65, 0);
    forearm.rotation.z = side * 0.09;
    forearm.scale.set(0.94, 1, 0.9);
    const hand = makePart(new THREE.SphereGeometry(0.145, 10, 8), skinMat, side * 0.05, -0.9, 0.02);
    hand.scale.set(0.9, 1.05, 0.9);
    target.add(sleeve, cuff, forearm, hand);
    if (captain && side === -1 && !referee) {
      const armband = makePart(new THREE.CylinderGeometry(0.126, 0.126, 0.07, 14), new THREE.MeshBasicMaterial({ color: 0xfacc15 }), side * 0.02, -0.31, 0.01, false);
      armband.rotation.z = side * 0.16;
      armband.scale.set(1.05, 0.85, 0.92);
      target.add(armband);
    }
    target.userData = { sleeve, cuff, forearm, hand, baseX: target.position.x };
    group.add(target);
  }

  function buildLeg(target, side) {
    target.position.set(side * 0.29, 0.98, 0);
    const thigh = makePart(new THREE.CapsuleGeometry(0.16, 0.42, 7, 12), shortsMat, 0, -0.2, 0);
    thigh.rotation.z = side * 0.025;
    thigh.scale.set(0.98, 1, 0.9);
    const knee = makePart(new THREE.SphereGeometry(0.13, 10, 8), skinMat, 0, -0.43, 0.01, false);
    knee.scale.set(0.88, 0.5, 0.78);
    const sockStripe = makePart(new THREE.CylinderGeometry(0.13, 0.13, 0.065, 10), trim, 0, -0.48, 0, false);
    sockStripe.scale.set(0.98, 0.65, 0.9);
    const shin = makePart(new THREE.CapsuleGeometry(0.126, 0.43, 7, 12), socksMat, 0, -0.63, 0);
    shin.scale.set(0.92, 1, 0.82);
    const boot = makePart(new THREE.CapsuleGeometry(0.11, 0.42, 7, 12), bootMat, 0, -0.88, -0.12);
    boot.rotation.x = Math.PI / 2;
    boot.scale.set(1.22, 0.94, 0.94);
    const toe = makePart(new THREE.SphereGeometry(0.15, 10, 8), bootMat, 0, -0.88, -0.37);
    toe.scale.set(1.1, 0.66, 1.24);
    const bootStripe = makePart(new THREE.CapsuleGeometry(0.012, 0.26, 5, 8), bootStripeMat, 0, -0.825, -0.21, false);
    bootStripe.rotation.set(Math.PI / 2, 0, Math.PI / 2);
    const sole = makePart(new THREE.CapsuleGeometry(0.032, 0.42, 5, 8), new THREE.MeshBasicMaterial({ color: 0x020814 }), 0, -0.98, -0.14, false);
    sole.rotation.x = Math.PI / 2;
    sole.scale.set(1.3, 0.65, 0.8);
    const lace = makePart(new THREE.CapsuleGeometry(0.008, 0.18, 4, 8), whiteDetailMat, 0, -0.825, -0.28, false);
    lace.rotation.set(Math.PI / 2, 0, Math.PI / 2);
    const frontStud = makePart(new THREE.CylinderGeometry(0.025, 0.032, 0.055, 6), whiteDetailMat, 0.09, -1.015, -0.28, false);
    frontStud.rotation.x = Math.PI / 2;
    const rearStud = frontStud.clone();
    rearStud.position.x = -0.09;
    target.add(thigh, knee, sockStripe, shin, boot, toe, bootStripe, sole, lace, frontStud, rearStud);
    if (side === -1) {
      const shortNumber = makePart(
        new THREE.PlaneGeometry(0.2, 0.2),
        createNumberMaterial(number, numberColor),
        -0.01,
        -0.23,
        0.17,
        false
      );
      shortNumber.scale.setScalar(0.8);
      target.add(shortNumber);
    }
    target.userData = { thigh, knee, shin, boot, toe, bootStripe, sole, lace };
    group.add(target);
  }

  buildArm(leftArm, -1);
  buildArm(rightArm, 1);
  buildLeg(leftLeg, -1);
  buildLeg(rightLeg, 1);

  if (referee) {
    for (let i = -1; i <= 1; i += 1) {
      const frontStripeRef = makePart(new THREE.CapsuleGeometry(0.024, 0.82, 5, 10), new THREE.MeshBasicMaterial({ color: 0xf8fafc }), i * 0.16, 1.45, 0.43, false);
      frontStripeRef.scale.set(1, 1, 0.62);
      group.add(frontStripeRef);
    }
    const card = makePart(new THREE.BoxGeometry(0.18, 0.26, 0.03), new THREE.MeshBasicMaterial({ color: 0xfacc15 }), 0.36, 1.76, 0.46, false);
    group.add(card);
    const cardIcon = createBillboardSprite(yellowCardTexture, 0.36, 1.92, 0xffffff, 0.96);
    cardIcon.position.x = 0.56;
    cardIcon.position.z = 0.48;
    group.add(cardIcon);
  }

  group.userData = {
    phase: Math.random() * Math.PI * 2,
    body,
    shoulders,
    chest,
    hips,
    head,
    leftArm,
    rightArm,
    leftLeg,
    rightLeg,
    headParts,
    materials: { kit, trim, shortsMat, socksMat, bootMat, skinMat, hairMat },
    animationEnergy: captain ? 1.12 : 1,
    baseBodyY: body.position.y,
    baseShouldersY: shoulders.position.y,
    baseChestY: chest.position.y,
    baseHipsY: hips.position.y,
    baseHeadY: head.position.y
  };
  return group;
}

function createPlayer(team) {
  const uniform = getEquippedItem('uniform');
  const isDefaultUniform = !uniform?.colors;
  const colors = uniform?.colors || (team.name === 'Brasil' ? [0xfacc15, 0x16a34a] : team.colors);
  const shortsColor = isDefaultUniform && team.name === 'Brasil' ? 0x1d4ed8 : colors[1];
  const lightKit = colors[0] === 0xf8fafc || colors[0] === 0xffffff;
  const character = createCharacter({
    primary: colors[0],
    secondary: colors[1],
    shorts: shortsColor,
    socks: 0xf8fafc,
    logo: team.logo,
    number: randomInt(1, 10),
    numberColor: lightKit ? '#111827' : '#ffffff',
    hairColor: 0x2a1408,
    bootColor: 0x020814,
    captain: true
  });
  character.scale.setScalar(1.06);
  return character;
}

function createCup(x, z) {
  const group = new THREE.Group();
  const trophy = getEquippedItem('trophy') || getShopItem('trophy_classic');
  const cupColor = trophy.cupColor || 0xffc83d;
  const glowColor = trophy.glow || 0xfacc15;
  const gold = new THREE.MeshStandardMaterial({ color: cupColor, emissive: glowColor, emissiveIntensity: 0.12, metalness: 0.75, roughness: 0.25 });
  const darkGold = new THREE.MeshStandardMaterial({ color: cupColor, metalness: 0.55, roughness: 0.32 });
  const bowl = new THREE.Mesh(new THREE.SphereGeometry(0.45, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.62), gold);
  bowl.scale.set(1, 0.8, 1);
  bowl.position.y = 1.35;
  bowl.castShadow = true;
  group.add(bowl);
  const leftHandle = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.045, 8, 18, Math.PI * 1.2), gold);
  leftHandle.position.set(-0.39, 1.24, 0);
  leftHandle.rotation.set(0, 0, Math.PI / 2);
  leftHandle.castShadow = true;
  group.add(leftHandle);
  const rightHandle = leftHandle.clone();
  rightHandle.position.x = 0.39;
  rightHandle.rotation.z = -Math.PI / 2;
  group.add(rightHandle);
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 0.72, 16), gold);
  stem.position.y = 0.75;
  stem.castShadow = true;
  group.add(stem);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.48, 0.2, 24), darkGold);
  base.position.y = 0.28;
  base.castShadow = true;
  group.add(base);
  const glow = new THREE.Mesh(
    new THREE.CylinderGeometry(0.72, 0.72, 0.03, 32),
    new THREE.MeshBasicMaterial({ color: glowColor, transparent: true, opacity: 0.28 })
  );
  glow.position.y = 0.08;
  group.add(glow);
  const objectiveIcon = createBillboardSprite(trophyIconTexture, 0.72, 2.12, glowColor, 0.98);
  group.add(objectiveIcon);
  group.position.set(x, 0, z);
  group.userData = { type: 'cup', active: false, objectiveIcon };
  return group;
}

function createKey(x, z) {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.35, roughness: 0.25, emissive: 0x0ea5e9, emissiveIntensity: 0.4 });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.06, 10, 28), mat);
  ring.position.y = 1.05;
  ring.castShadow = true;
  group.add(ring);
  const shaft = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.58, 0.12), mat);
  shaft.position.y = 0.62;
  shaft.castShadow = true;
  group.add(shaft);
  const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.12, 0.12), mat);
  tooth.position.set(0.14, 0.34, 0);
  tooth.castShadow = true;
  group.add(tooth);
  group.position.set(x, 0, z);
  group.userData = { type: 'key', active: false };
  return group;
}

function createSwitch(x, z) {
  const group = new THREE.Group();
  const baseMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.45 });
  const leverMat = new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0x7f1d1d, emissiveIntensity: 0.35, roughness: 0.34 });
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.58, 0.18, 20), baseMat);
  base.position.y = 0.16;
  base.castShadow = true;
  group.add(base);
  const lever = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.78, 0.16), leverMat);
  lever.position.y = 0.74;
  lever.rotation.z = -0.45;
  lever.castShadow = true;
  group.add(lever);
  const light = new THREE.PointLight(0xef4444, 1.4, 7, 1.3);
  light.position.y = 1.05;
  group.add(light);
  group.position.set(x, 0, z);
  group.userData = { type: 'switch', active: false, lever, light };
  return group;
}

function createObjectiveItem(type, x, z) {
  if (type === 'key') return createKey(x, z);
  if (type === 'switch') return createSwitch(x, z);
  return createCup(x, z);
}

function createPowerUp(type, x, z) {
  const group = new THREE.Group();
  const isBoost = type === 'boost';
  const color = isBoost ? 0x38bdf8 : 0x22c55e;
  const mat = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.5, roughness: 0.28 });
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.65, 0.12, 24), mat);
  base.position.y = 0.18;
  base.castShadow = true;
  group.add(base);
  const outerRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.62, 0.045, 8, 36),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.86 })
  );
  outerRing.position.y = 0.46;
  outerRing.rotation.x = Math.PI / 2;
  group.add(outerRing);

  if (isBoost) {
    const bolt = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.78, 3), mat);
    bolt.position.y = 0.86;
    bolt.rotation.z = -0.45;
    bolt.castShadow = true;
    group.add(bolt);
  } else {
    const shield = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.07, 10, 28), mat);
    shield.position.y = 0.82;
    shield.rotation.x = Math.PI / 2;
    shield.castShadow = true;
    group.add(shield);
  }
  const icon = createBillboardSprite(isBoost ? powerIconTexture : targetIconTexture, 0.56, 1.36, 0xffffff, 0.92);
  group.add(icon);

  const glow = new THREE.PointLight(color, 1.6, 8, 1.4);
  glow.position.y = 1.2;
  group.add(glow);
  group.position.set(x, 0, z);
  group.userData = { type, baseY: 0, outerRing, icon };
  return group;
}

function createExitGate() {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({
    color: 0xfacc15,
    emissive: 0xfacc15,
    emissiveIntensity: 0.85,
    metalness: 0.35,
    roughness: 0.25
  });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.13, 12, 64), mat);
  ring.position.y = 1.55;
  ring.castShadow = true;
  group.add(ring);

  const base = new THREE.Mesh(new THREE.CylinderGeometry(1.65, 1.8, 0.14, 32), mat);
  base.position.y = 0.12;
  base.castShadow = true;
  group.add(base);

  const light = new THREE.PointLight(0xfacc15, 4.2, 18, 1.3);
  light.position.y = 1.7;
  group.add(light);
  group.position.set(0, 0, -23.4);
  group.userData = { baseY: 0 };
  return group;
}

function styleExitGate(gate, color, kind, label) {
  gate.traverse((child) => {
    if (child.material) {
      child.material = child.material.clone();
      child.material.color?.setHex(color);
      child.material.emissive?.setHex(color);
    }
    if (child.isLight) child.color.setHex(color);
  });
  gate.userData.exitKind = kind;
  gate.userData.label = label;
  const letter = new THREE.Mesh(
    new THREE.PlaneGeometry(0.86, 0.86),
    createNumberMaterial(kind === 'fast' ? 'A' : 'B', '#ffffff')
  );
  letter.position.set(0, 3.05, 0);
  letter.renderOrder = 8;
  gate.add(letter);
  return gate;
}

function createTunnelGate() {
  const group = new THREE.Group();
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.7 });
  const glowMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0ea5e9, emissiveIntensity: 0.9, roughness: 0.28 });
  const arch = new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.18, 12, 64, Math.PI), glowMat);
  arch.position.y = 1.1;
  arch.rotation.z = Math.PI;
  arch.castShadow = true;
  group.add(arch);
  const entrance = new THREE.Mesh(new THREE.BoxGeometry(2.65, 1.6, 0.22), new THREE.MeshBasicMaterial({ color: 0x020617 }));
  entrance.position.y = 0.82;
  entrance.position.z = -0.08;
  group.add(entrance);
  const base = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.24, 1), wallMat);
  base.position.y = 0.12;
  base.castShadow = true;
  group.add(base);
  const light = new THREE.PointLight(0x38bdf8, 3.6, 14, 1.35);
  light.position.y = 1.25;
  group.add(light);
  group.position.set(0, 0, -24.2);
  group.userData = { baseY: 0, exitKind: 'tunnel' };
  return group;
}

function createDangerZone(x, z, radius = 3.5) {
  const group = new THREE.Group();
  const disk = new THREE.Mesh(
    new THREE.CircleGeometry(radius, 48),
    new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 0.18, side: THREE.DoubleSide })
  );
  disk.rotation.x = -Math.PI / 2;
  disk.position.y = 0.31;
  group.add(disk);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(radius, 0.045, 8, 72),
    new THREE.MeshBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0.82 })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.34;
  group.add(ring);
  group.position.set(x, 0, z);
  group.userData = { radius, pulse: Math.random() * Math.PI * 2 };
  return group;
}

function createShadowZone(x, z, radius = 3.4) {
  const group = new THREE.Group();
  const disk = new THREE.Mesh(
    new THREE.CircleGeometry(radius, 40),
    new THREE.MeshBasicMaterial({ color: 0x020617, transparent: true, opacity: 0.34, side: THREE.DoubleSide })
  );
  disk.rotation.x = -Math.PI / 2;
  disk.position.y = 0.33;
  group.add(disk);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(radius, 0.035, 8, 56),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.32 })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.35;
  group.add(ring);
  group.position.set(x, 0, z);
  group.userData = { radius };
  return group;
}

function createDistraction(position) {
  const group = new THREE.Group();
  const marker = new THREE.Mesh(
    new THREE.TorusGeometry(0.8, 0.06, 8, 36),
    new THREE.MeshBasicMaterial({ color: 0xfacc15, transparent: true, opacity: 0.9 })
  );
  marker.rotation.x = Math.PI / 2;
  marker.position.y = 0.36;
  group.add(marker);
  const light = new THREE.PointLight(0xfacc15, 1.8, 8, 1.3);
  light.position.y = 0.9;
  group.add(light);
  group.position.copy(position);
  group.userData = { timer: 5.5, marker };
  return group;
}

function createRainSystem() {
  const count = 260;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = THREE.MathUtils.randFloatSpread(48);
    positions[i * 3 + 1] = THREE.MathUtils.randFloat(5, 17);
    positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(62);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const rain = new THREE.Points(
    geometry,
    new THREE.PointsMaterial({ color: 0xbfdbfe, size: 0.1, transparent: true, opacity: 0.62 })
  );
  rain.userData = { count };
  return rain;
}

function createCrowdInvader(index) {
  const invader = createCrowdFan(state.selectedTeam.colors[index % 2], state.selectedTeam.colors[(index + 1) % 2]);
  const fromLeft = index % 2 === 0;
  invader.scale.setScalar(2.15);
  invader.position.set(fromLeft ? -23 : 23, 0.38, THREE.MathUtils.randFloat(-18, 15));
  invader.userData.velocity = new THREE.Vector3(fromLeft ? 3.4 : -3.4, 0, THREE.MathUtils.randFloat(-0.8, 0.8));
  invader.userData.radius = 0.95;
  return invader;
}

function createAlienShip(index) {
  const group = new THREE.Group();
  const hull = new THREE.Mesh(
    new THREE.CylinderGeometry(1.45, 1.95, 0.34, 32),
    new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.65, roughness: 0.24, emissive: 0x0f172a, emissiveIntensity: 0.2 })
  );
  hull.position.y = 0.8;
  group.add(hull);
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(0.82, 22, 12, 0, Math.PI * 2, 0, Math.PI * 0.55),
    new THREE.MeshStandardMaterial({ color: 0x67e8f9, transparent: true, opacity: 0.78, emissive: 0x22d3ee, emissiveIntensity: 0.55 })
  );
  dome.position.y = 1.06;
  group.add(dome);
  const beam = new THREE.Mesh(
    new THREE.ConeGeometry(1.8, 4.4, 32, 1, true),
    new THREE.MeshBasicMaterial({ color: 0x22c55e, transparent: true, opacity: 0.18, side: THREE.DoubleSide })
  );
  beam.position.y = -1.2;
  beam.rotation.x = Math.PI;
  group.add(beam);
  const light = new THREE.PointLight(0x22c55e, 3.5, 12, 1.3);
  light.position.y = 0.2;
  group.add(light);
  group.position.set(index % 2 ? 22 : -22, 5.5, THREE.MathUtils.randFloat(-18, 14));
  group.userData = {
    velocity: new THREE.Vector3(index % 2 ? -2.8 : 2.8, 0, THREE.MathUtils.randFloat(-0.4, 0.4)),
    radius: 1.8
  };
  return group;
}

function createDinosaurRunner() {
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.5 });
  const bellyMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.46 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.75, 1.2, 8, 14), bodyMat);
  body.rotation.z = Math.PI / 2;
  body.position.y = 1.1;
  body.castShadow = true;
  group.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.48, 18, 12), bodyMat);
  head.position.set(1.05, 1.45, 0);
  head.castShadow = true;
  group.add(head);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.36, 16, 10), bellyMat);
  belly.scale.set(1, 0.75, 0.7);
  belly.position.set(0.2, 1.03, 0.02);
  group.add(belly);
  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.28, 1.25, 12), bodyMat);
  tail.rotation.z = -Math.PI / 2;
  tail.position.set(-1.14, 1.12, 0);
  tail.castShadow = true;
  group.add(tail);
  for (let i = 0; i < 4; i += 1) {
    const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.62, 6, 10), bodyMat);
    leg.position.set(i < 2 ? -0.46 : 0.55, 0.48, i % 2 ? -0.34 : 0.34);
    leg.castShadow = true;
    group.add(leg);
  }
  group.scale.setScalar(1.65);
  group.position.set(-24, 0, THREE.MathUtils.randFloat(-16, 12));
  group.userData = { velocity: new THREE.Vector3(4.2, 0, THREE.MathUtils.randFloat(-0.45, 0.45)), radius: 2.4 };
  return group;
}

function createRareTrophyDrop(index) {
  const cup = createCup(THREE.MathUtils.randFloat(-18, 18), THREE.MathUtils.randFloat(-22, 18));
  cup.position.y = THREE.MathUtils.randFloat(6, 12);
  cup.scale.setScalar(0.62);
  cup.userData.velocity = new THREE.Vector3(THREE.MathUtils.randFloatSpread(0.6), THREE.MathUtils.randFloat(-3.8, -2.2), THREE.MathUtils.randFloatSpread(0.6));
  cup.userData.radius = 0.9;
  cup.userData.gravity = true;
  cup.userData.spin = 2 + index * 0.2;
  return cup;
}

function getEnemyVisualConfig(kind, role, team) {
  const isReferee = kind === 'referee';
  const rivalTeam = team || recurringRival.team;
  const base = {
    primary: isReferee ? 0x111827 : rivalTeam.colors[0],
    secondary: isReferee ? 0xfacc15 : rivalTeam.colors[1],
    shorts: isReferee ? 0x111827 : rivalTeam.colors[1],
    socks: isReferee ? 0x111827 : 0xf8fafc,
    logo: isReferee ? null : rivalTeam.logo,
    numberColor: isReferee ? '#facc15' : '#ffffff',
    hairColor: isReferee ? 0x111827 : 0x231006,
    bootColor: 0x07111f,
    animationEnergy: isReferee ? 0.95 : 1
  };

  if (role === 'marker') {
    return {
      ...base,
      primary: 0x3f1018,
      secondary: 0xef4444,
      shorts: 0x111827,
      socks: 0x7f1d1d,
      numberColor: '#ffffff',
      hairColor: 0x0f172a,
      bootColor: 0x020814,
      animationEnergy: 1.32
    };
  }

  if (role === 'rivalCaptain' || role === 'rivalBoss' || role === 'boss') {
    return {
      ...base,
      primary: role === 'rivalBoss' || role === 'boss' ? 0x1f0a0d : 0x3f1018,
      secondary: 0xef4444,
      shorts: 0x020814,
      socks: 0x7f1d1d,
      hairColor: 0x020814,
      bootColor: 0x020814,
      numberColor: '#ffffff',
      animationEnergy: role === 'rivalCaptain' ? 1.08 : 0.9
    };
  }

  if (role === 'goalkeeper') {
    return {
      ...base,
      primary: 0x16a34a,
      secondary: 0xfacc15,
      shorts: 0x0f5132,
      socks: 0x16a34a,
      hairColor: 0x111827,
      bootColor: 0xf8fafc,
      numberColor: '#ffffff',
      animationEnergy: 0.98
    };
  }

  if (role === 'bruiser') {
    return {
      ...base,
      primary: 0x581c87,
      secondary: 0xfacc15,
      shorts: 0x111827,
      socks: 0x6d28d9,
      hairColor: 0x111827,
      bootColor: 0x020814,
      numberColor: '#ffffff',
      animationEnergy: 0.78
    };
  }

  if (role === 'keyReferee') {
    return {
      ...base,
      secondary: 0x38bdf8,
      socks: 0x0f172a,
      numberColor: '#38bdf8',
      animationEnergy: 1.04
    };
  }

  if (base.primary === 0xf8fafc || base.primary === 0xffffff) base.numberColor = '#111827';
  return base;
}

function addEnemyRoleDetails(enemy, role, markerColor) {
  const rig = enemy.userData;
  const accent = new THREE.MeshStandardMaterial({
    color: markerColor,
    emissive: markerColor,
    emissiveIntensity: 0.18,
    roughness: 0.38
  });
  const dark = new THREE.MeshStandardMaterial({ color: 0x020814, roughness: 0.44, metalness: 0.1 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xfacc15, emissiveIntensity: 0.18, roughness: 0.32 });
  rig.animationEnergy = rig.visualAnimationEnergy || rig.animationEnergy || 1;
  const face = rig.face || {};

  function setBrows(leftRotation, rightRotation) {
    if (face.leftBrow) face.leftBrow.rotation.z = leftRotation;
    if (face.rightBrow) face.rightBrow.rotation.z = rightRotation;
  }

  function addEyeGlow(color, scale = 1) {
    const eyeMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.92 });
    const leftBase = face.leftEye?.position || new THREE.Vector3(-0.18, 2.43, 0.56);
    const rightBase = face.rightEye?.position || new THREE.Vector3(0.18, 2.43, 0.56);
    const leftGlow = makePart(new THREE.SphereGeometry(0.034 * scale, 8, 6), eyeMat, leftBase.x, leftBase.y, leftBase.z + 0.018, false);
    leftGlow.scale.set(1.35, 0.82, 0.5);
    const rightGlow = leftGlow.clone();
    rightGlow.position.set(rightBase.x, rightBase.y, rightBase.z + 0.018);
    enemy.add(leftGlow, rightGlow);
  }

  if (role === 'refereeBlocker' || role === 'keyReferee') {
    rig.body.scale.x *= 1.16;
    rig.body.scale.z *= 1.12;
    rig.shoulders.scale.z *= 1.28;
    rig.hips.scale.x *= 1.08;
    rig.animationEnergy = 0.92;
    setBrows(-0.5, 0.5);
    const refereeBadge = makePart(new THREE.PlaneGeometry(0.17, 0.22), gold, 0.21, 1.45, 0.5, false);
    const sleeveTagLeft = makePart(new THREE.CapsuleGeometry(0.018, 0.2, 4, 7), gold, -0.7, 1.39, 0.08, false);
    sleeveTagLeft.rotation.z = Math.PI / 2;
    const sleeveTagRight = sleeveTagLeft.clone();
    sleeveTagRight.position.x = 0.7;
    enemy.add(refereeBadge, sleeveTagLeft, sleeveTagRight);
  }

  if (role === 'marker' || role === 'rivalCaptain' || role === 'rivalBoss' || role === 'boss') {
    rig.body.scale.x *= role === 'marker' ? 1.12 : 1.24;
    rig.body.scale.z *= 1.12;
    rig.shoulders.scale.z *= role === 'rivalBoss' || role === 'boss' ? 1.46 : 1.28;
    rig.leftArm.scale.set(1.1, 1.04, 1.1);
    rig.rightArm.scale.set(1.1, 1.04, 1.1);
    setBrows(0.42, -0.42);
    addEyeGlow(0xef4444, role === 'rivalBoss' || role === 'boss' ? 1.24 : 1);
    const sash = makePart(new THREE.CapsuleGeometry(0.04, 0.96, 6, 12), gold, -0.04, 1.48, 0.47, false);
    sash.rotation.z = -0.55;
    enemy.add(sash);
    const scarf = makePart(new THREE.CapsuleGeometry(0.04, 0.38, 6, 12), accent, 0, 1.95, 0.2, false);
    scarf.rotation.set(Math.PI / 2 - 0.16, 0, Math.PI / 2);
    const hairCrest = makePart(new THREE.CapsuleGeometry(0.055, role === 'rivalBoss' || role === 'boss' ? 0.42 : 0.32, 6, 10), rig.materials.hairMat, 0, 2.61, 0.04);
    hairCrest.rotation.set(1.16, 0, 0);
    hairCrest.scale.set(0.9, 1, 1.2);
    enemy.add(scarf, hairCrest);
  }

  if (role === 'goalkeeper') {
    rig.body.scale.x *= 1.08;
    rig.body.scale.y *= 1.08;
    rig.shoulders.scale.z *= 1.52;
    rig.leftArm.scale.set(1.14, 1.08, 1.14);
    rig.rightArm.scale.set(1.14, 1.08, 1.14);
    setBrows(-0.22, 0.22);
    rig.animationEnergy = 1;
    const gloveMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, emissive: 0x38bdf8, emissiveIntensity: 0.18, roughness: 0.32 });
    [rig.leftArm, rig.rightArm].forEach((arm) => {
      if (!arm?.userData?.hand) return;
      const hand = arm.userData.hand;
      const glove = makePart(new THREE.SphereGeometry(0.28, 10, 8), gloveMat, hand.position.x, hand.position.y, hand.position.z + 0.02);
      glove.scale.set(1.24, 0.82, 1.16);
      arm.add(glove);
    });
    const keeperPatch = makePart(new THREE.CapsuleGeometry(0.035, 0.48, 6, 12), gold, 0, 1.6, 0.48, false);
    keeperPatch.rotation.z = Math.PI / 2;
    const keeperPatch2 = makePart(new THREE.CapsuleGeometry(0.025, 0.34, 6, 12), new THREE.MeshBasicMaterial({ color: 0xf8fafc }), 0, 1.38, 0.49, false);
    keeperPatch2.rotation.z = Math.PI / 2;
    const keeperKneeLeft = makePart(new THREE.SphereGeometry(0.16, 12, 8), dark, -0.28, 0.52, 0.06, false);
    keeperKneeLeft.scale.set(1, 0.42, 0.72);
    const keeperKneeRight = keeperKneeLeft.clone();
    keeperKneeRight.position.x = 0.28;
    enemy.add(keeperPatch, keeperPatch2, keeperKneeLeft, keeperKneeRight);
  }

  if (role === 'bruiser' || role === 'rivalBoss' || role === 'boss') {
    rig.body.scale.x *= 1.18;
    rig.body.scale.z *= 1.12;
    rig.hips.scale.x *= 1.18;
    rig.leftArm.scale.set(1.18, 1.1, 1.18);
    rig.rightArm.scale.set(1.18, 1.1, 1.18);
    setBrows(0.5, -0.5);
    if (role === 'bruiser') addEyeGlow(0xf97316, 0.92);
    const padScale = role === 'bruiser' ? 1 : 1.18;
    const leftPad = makePart(new THREE.SphereGeometry(0.2 * padScale, 14, 8), dark, -0.52, 1.86, 0.01);
    leftPad.scale.set(1.35, 0.44, 1.72);
    const rightPad = makePart(new THREE.SphereGeometry(0.2 * padScale, 14, 8), dark, 0.52, 1.86, 0.01);
    rightPad.scale.set(1.35, 0.44, 1.72);
    leftPad.rotation.z = -0.06;
    rightPad.rotation.z = 0.06;
    const belt = makePart(new THREE.TorusGeometry(0.34, 0.027, 8, 28), gold, 0, 1.03, 0, false);
    belt.rotation.x = Math.PI / 2;
    belt.scale.set(1.36, 0.78, 1);
    enemy.add(leftPad, rightPad, belt);
  }

  if (role === 'refereeBlocker' || role === 'keyReferee') {
    const whistle = makePart(new THREE.TorusGeometry(0.075, 0.018, 6, 14), gold, 0.24, 1.9, 0.48, false);
    whistle.rotation.x = Math.PI / 2;
    const whistleCord = makePart(new THREE.TorusGeometry(0.22, 0.008, 5, 24), new THREE.MeshBasicMaterial({ color: 0xf8fafc }), 0, 1.83, 0.47, false);
    whistleCord.rotation.x = Math.PI / 2;
    whistleCord.scale.set(0.72, 0.42, 1);
    const wristCard = makePart(new THREE.PlaneGeometry(0.16, 0.22), gold, -0.58, 1.36, 0.35, false);
    wristCard.rotation.y = -0.2;
    enemy.add(whistle, whistleCord, wristCard);
  }
}

function addRoleMarker(enemy, color) {
  const marker = new THREE.Mesh(
    new THREE.TorusGeometry(0.38, 0.045, 8, 28),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 })
  );
  marker.position.y = 3.18;
  marker.rotation.x = Math.PI / 2;
  enemy.add(marker);
  const ground = new THREE.Mesh(
    new THREE.TorusGeometry(0.95, 0.045, 8, 42),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.52, depthWrite: false, toneMapped: false })
  );
  ground.position.y = 0.08;
  ground.rotation.x = Math.PI / 2;
  enemy.add(ground);
  const icon = createBillboardSprite(targetIconTexture, 0.46, 3.56, color, 0.96);
  enemy.add(icon);
  enemy.userData.roleMarker = marker;
  enemy.userData.groundMarker = ground;
  enemy.userData.roleIcon = icon;
  enemy.userData.markerBaseColor = color;
}

function createEnemy(kind, x, z, team = null, role = 'marker') {
  const isReferee = kind === 'referee';
  const visual = getEnemyVisualConfig(kind, role, team);
  const group = createCharacter({
    primary: visual.primary,
    secondary: visual.secondary,
    shorts: visual.shorts,
    socks: visual.socks,
    skin: 0xf4c99b,
    referee: isReferee,
    logo: visual.logo,
    number: randomInt(1, 10),
    numberColor: visual.numberColor,
    hairColor: visual.hairColor,
    bootColor: visual.bootColor
  });
  group.userData.visualAnimationEnergy = visual.animationEnergy;
  group.scale.setScalar(isReferee ? 1.02 : 0.96);
  group.position.set(x, 0, z);
  Object.assign(group.userData, { kind, speed: isReferee ? 4.3 : 3.2, home: new THREE.Vector3(x, 0, z), stun: 0 });
  return group;
}

const enemyRoleConfig = {
  marker: { kind: 'rival', speed: 4.65, scale: 0.98, collisionRadius: 1.08, markerColor: 0xef4444, alertRadius: 19 },
  refereeBlocker: { kind: 'referee', speed: 2.35, scale: 1.05, collisionRadius: 1.28, markerColor: 0xfacc15, alertRadius: 7 },
  goalkeeper: { kind: 'rival', speed: 3.15, scale: 1.12, collisionRadius: 1.3, markerColor: 0x38bdf8, alertRadius: 11 },
  bruiser: { kind: 'rival', speed: 2.45, scale: 1.22, collisionRadius: 1.48, markerColor: 0xa78bfa, alertRadius: 15 },
  keyReferee: { kind: 'referee', speed: 3.1, scale: 1.02, collisionRadius: 1.18, markerColor: 0x38bdf8, alertRadius: 10 },
  rivalCaptain: { kind: 'rival', speed: 3.35, scale: 1.12, collisionRadius: 1.34, markerColor: 0xf97316, alertRadius: 17, recurring: true },
  rivalBoss: { kind: 'rival', speed: 3.25, scale: 1.38, collisionRadius: 1.7, markerColor: 0xdc2626, alertRadius: 24, recurring: true },
  boss: { kind: 'rival', speed: 3.2, scale: 1.3, collisionRadius: 1.62, markerColor: 0xdc2626, alertRadius: 22 }
};

function spawnEnemyRole(role, x, z, index = 0) {
  const config = enemyRoleConfig[role] || enemyRoleConfig.marker;
  const team = config.kind === 'referee' ? null : config.recurring ? recurringRival.team : getRivalTeam(index, state.level);
  const enemy = createEnemy(config.kind, x, z, team, role);
  enemy.scale.setScalar(config.scale);
  Object.assign(enemy.userData, {
    role,
    behavior: role,
    speed: config.speed * getAdaptiveEnemyMultiplier(),
    baseSpeed: config.speed * getAdaptiveEnemyMultiplier(),
    collisionRadius: config.collisionRadius,
    alertRadius: config.alertRadius,
    patrolSeed: index * 1.7 + state.level,
    home: new THREE.Vector3(x, 0, z),
    hasKey: role === 'keyReferee',
    isRecurringRival: Boolean(config.recurring),
    rivalName: config.recurring ? recurringRival.name : null
  });
  if (config.recurring) state.rival = enemy;
  addEnemyRoleDetails(enemy, role, config.markerColor);
  addRoleMarker(enemy, config.markerColor);
  if (role === 'keyReferee') {
    const key = createKey(0, 0);
    key.scale.setScalar(0.55);
    key.position.set(0, 0.58, -0.72);
    key.userData.attachedKey = true;
    enemy.add(key);
    enemy.userData.keyVisual = key;
    state.keyHolder = enemy;
  }
  scene.add(enemy);
  state.enemies.push(enemy);
  return enemy;
}

function getEnemyPlan(level, missionType) {
  if (level === 1) {
    return [
      { role: 'rivalCaptain', x: -16, z: -16 }
    ];
  }
  if (level === 2) {
    return [
      { role: 'keyReferee', x: 0, z: -10 },
      { role: 'bruiser', x: -17, z: -18 },
      { role: 'refereeBlocker', x: 15, z: -8 }
    ];
  }
  if (level === 3) {
    return [
      { role: 'marker', x: -18, z: -22 },
      { role: 'marker', x: 18, z: -22 },
      { role: 'refereeBlocker', x: 0, z: -4 },
      { role: 'rivalCaptain', x: 0, z: -23 }
    ];
  }
  if (level === 4) {
    return [
      { role: 'goalkeeper', x: 0, z: -20 },
      { role: 'marker', x: -18, z: -21 },
      { role: 'marker', x: 18, z: -14 },
      { role: 'refereeBlocker', x: -12, z: -3 },
      { role: 'refereeBlocker', x: 12, z: 8 },
      { role: 'bruiser', x: -18, z: 15 }
    ];
  }
  return [
    { role: 'rivalBoss', x: 0, z: -15 },
    { role: 'goalkeeper', x: 0, z: -22 },
    { role: 'marker', x: -18, z: -20 },
    { role: 'marker', x: 18, z: -18 },
    { role: 'refereeBlocker', x: -13, z: 0 },
    { role: 'refereeBlocker', x: 13, z: 4 },
    { role: 'bruiser', x: -17, z: 15 }
  ];
}

function createObstacle(x, z, w, d) {
  const group = new THREE.Group();
  const cone = new THREE.Mesh(
    new THREE.CylinderGeometry(0.28, 0.62, 1.15, 4),
    new THREE.MeshStandardMaterial({ color: 0xf97316, emissive: 0x7c2d12, emissiveIntensity: 0.12, roughness: 0.48 })
  );
  cone.position.y = 0.72;
  cone.rotation.y = Math.PI / 4;
  cone.castShadow = true;
  const band = new THREE.Mesh(
    new THREE.TorusGeometry(0.36, 0.035, 6, 24),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
  );
  band.position.y = 0.72;
  band.rotation.x = Math.PI / 2;
  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(0.72, 0.82, 0.14, 4),
    new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.52 })
  );
  base.position.y = 0.13;
  base.rotation.y = Math.PI / 4;
  base.castShadow = true;
  group.add(base, cone, band);
  if (Math.random() > 0.38) {
    const ball = createBillboardSprite(soccerBallTexture, 0.82, 0.64, 0xffffff, 0.96);
    ball.position.x = THREE.MathUtils.randFloat(-0.72, 0.72);
    ball.position.z = THREE.MathUtils.randFloat(-0.72, 0.72);
    group.add(ball);
  }
  group.position.set(x, 0, z);
  group.userData = { radius: Math.max(w, d) };
  arena.add(group);
  return group;
}

function populateTeams() {
  teams.forEach((team, index) => {
    const card = document.createElement('button');
    card.className = `team-card${index === 0 ? ' selected' : ''}`;
    card.innerHTML = `<img class="team-logo" src="${team.logo}" alt="${team.name}"><span>${team.name}</span>`;
    card.addEventListener('click', () => {
      state.selectedTeam = team;
      updateStadiumTeamColors(team);
      updateHomeDashboard();
      document.querySelectorAll('.team-card').forEach((item) => item.classList.remove('selected'));
      card.classList.add('selected');
    });
    teamGrid.appendChild(card);
  });
}

function resetTouchControls() {
  state.touch.moveX = 0;
  state.touch.moveZ = 0;
  state.touch.sprint = false;
  state.touch.joystickPointerId = null;
  touchJoystickKnob?.style.setProperty('transform', 'translate(-50%, -50%)');
  touchTurboButton?.classList.remove('is-pressed');
  touchMapButton?.classList.remove('is-pressed');
}

function setTouchControlsVisible(visible) {
  touchControls?.classList.toggle('hidden', !visible);
  mobileSystemActions?.classList.toggle('hidden', !(visible && isMobileRuntime()));
  if (!visible) resetTouchControls();
}

function showScreen(screen) {
  [menuScreen, howScreen, levelScreen, achievementsScreen, dailyScreen, rankingScreen, editorScreen, shopScreen, teamScreen, pauseScreen, levelCompleteScreen, gameOverScreen].forEach((item) => item.classList.add('hidden'));
  hideCutscene();
  if (screen === menuScreen) updateHomeDashboard();
  screen.classList.remove('hidden');
  hud.classList.add('hidden');
  pauseButton.classList.add('hidden');
  minimap.classList.add('hidden');
  abilityDock?.classList.add('hidden');
  setTouchControlsVisible(false);
  app.classList.remove('game-live');
  message.classList.add('hidden');
  hideNarration();
  state.paused = false;
  stopCrowdSound();
}

function unlockLevel(level) {
  const nextUnlocked = Math.min(5, Math.max(state.unlockedLevel, level));
  if (nextUnlocked !== state.unlockedLevel) {
    state.unlockedLevel = nextUnlocked;
    localStorage.setItem('copaEscapeUnlockedLevel', String(nextUnlocked));
    renderLevelSelect();
  }
}

function renderLevelSelect() {
  levelGrid.innerHTML = '';
  for (let level = 1; level <= 5; level += 1) {
    const mission = getMission(level);
    const stars = Number(profile.stars[level] || 0);
    const button = document.createElement('button');
    button.className = `level-card${state.selectedLevel === level ? ' selected' : ''}`;
    button.disabled = level > state.unlockedLevel;
    button.innerHTML = `<strong>${getStageName(level)}</strong><span>${level <= state.unlockedLevel ? mission.label : 'Bloqueada'}</span><em>${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</em>`;
    button.addEventListener('click', () => {
      state.selectedLevel = level;
      renderLevelSelect();
      showScreen(teamScreen);
    });
    levelGrid.appendChild(button);
  }
}

function getCupPosition(index, total, level) {
  const layouts = [
    [[-13, -17], [13, -17], [0, -5], [-12, 8], [12, 8], [-5, 17], [5, 17]],
    [[-16, -20], [0, -20], [16, -20], [-10, -6], [10, -6], [-14, 10], [14, 10]],
    [[0, -22], [-15, -12], [15, -12], [-7, 1], [7, 1], [-15, 14], [15, 14]],
    [[-17, -19], [17, -19], [-17, -3], [17, -3], [0, 7], [-9, 17], [9, 17]],
    [[-16, -22], [16, -22], [0, -13], [-14, -1], [14, -1], [-8, 12], [8, 12]]
  ];
  const layout = layouts[(level - 1) % layouts.length];
  return layout[index % layout.length];
}

function proceduralOffset(index, amount = 2.2) {
  const seed = state.proceduralSeed + index * 12.9898;
  return [
    Math.sin(seed) * amount,
    Math.cos(seed * 1.37) * amount
  ];
}

function getProceduralPosition(x, z, index, amount = 2.2) {
  const [dx, dz] = proceduralOffset(index, amount);
  return [
    THREE.MathUtils.clamp(x + dx, -19, 19),
    THREE.MathUtils.clamp(z + dz, -24, 22)
  ];
}

function getProceduralExitPosition(kind = 'main') {
  if (kind === 'fast') {
    const [x, z] = getProceduralPosition(-6, -23.4, 72, 1.5);
    return new THREE.Vector3(x, 0, z);
  }
  if (kind === 'reward') {
    const side = Math.sin(state.proceduralSeed) > 0 ? 1 : -1;
    const [x, z] = getProceduralPosition(side * 16, -8, 91, 2.4);
    return new THREE.Vector3(x, 0, z);
  }
  const [x, z] = getProceduralPosition(0, state.missionType === 'tunnel' ? -24.2 : -23.4, 55, state.level >= 3 ? 3.2 : 1.2);
  return new THREE.Vector3(x, 0, z);
}

function getMission(level) {
  const missions = [
    { type: 'cup', label: 'Tacas', count: 3, intro: 'Fase de treino: colete 3 tacas e aprenda a fugir.' },
    { type: 'stealKey', label: 'Chave do juiz', count: 1, intro: 'Roube a chave do juiz e use os power-ups para escapar.' },
    { type: 'switch', label: '3 alavancas', count: 3, intro: 'Ative 3 alavancas enquanto marcadores rapidos perseguem voce.' },
    { type: 'tunnel', label: 'Tunel', count: 1, intro: 'Ache o tunel no fundo do campo e evite as areas perigosas.' },
    { type: 'protect', label: 'Proteger taca', count: 28, intro: 'Final: proteja a taca por tempo suficiente e escape do chefe.' }
  ];
  return missions[THREE.MathUtils.clamp(level, 1, 5) - 1];
}

function getObjectiveProgressText() {
  if (state.missionType === 'protect') return `${Math.floor(state.protectTimer)}/${state.protectDuration}s`;
  if (state.missionType === 'tunnel') return state.exitOpen ? 'Tunel aberto' : '0/1';
  return `${state.cupsCollected}/${state.cupsNeeded}`;
}

function getScoreboardObjectiveText() {
  if (state.exitOpen) return state.missionType === 'tunnel' ? 'ENTRE NO TUNEL' : 'CORRA PARA A SAIDA';
  return `${state.missionLabel.toUpperCase()} ${getObjectiveProgressText()}`;
}

function getHudObjectiveText() {
  if (state.exitOpen) return state.missionType === 'tunnel' ? 'Entre no tunel' : 'Corra para a saida';
  if (state.missionType === 'stealKey') return 'Roube a chave do juiz';
  if (state.missionType === 'switch') return 'Ative 3 alavancas';
  if (state.missionType === 'tunnel') return 'Encontre o tunel';
  if (state.missionType === 'protect') return 'Proteja a taca';
  return 'Colete todas as tacas';
}

function getEnemySpawn(index, total, level) {
  if (level >= 3) {
    const safeSpawns = [
      [-18, -23],
      [18, -23],
      [-18, -10],
      [18, -10],
      [0, -24],
      [-14, 4],
      [14, 4],
      [-20, 7],
      [20, 7]
    ];
    return safeSpawns[index % safeSpawns.length];
  }
  const angle = (index / total) * Math.PI * 2;
  return [Math.cos(angle) * 15, Math.sin(angle) * 18 - 4];
}

function getRivalTeam(index, level) {
  const rivals = teams.filter((team) => team.name !== state.selectedTeam.name);
  return rivals[(index + level + randomInt(0, rivals.length - 1)) % rivals.length];
}

function isClearFieldSpot(x, z, minDistance = 3) {
  if (new THREE.Vector3(x, 0, z).distanceTo(player.position) < 7) return false;
  const objects = [...state.cups, ...state.powerUps, ...state.dangerZones, state.protectedCup, state.exitGate].filter(Boolean);
  return objects.every((object) => object.position.distanceTo(new THREE.Vector3(x, 0, z)) > minDistance);
}

function clearObjects() {
  endActiveEvent();
  [
    ...state.enemies,
    ...state.cups,
    ...state.powerUps,
    ...state.obstacles,
    ...state.dangerZones,
    ...state.shadowZones,
    ...state.eventObjects,
    ...state.cosmeticParticles,
    state.distraction,
    state.exitGate,
    ...state.exitChoices,
    state.protectedCup,
    state.rainSystem
  ].filter(Boolean).forEach((object) => object.parent?.remove(object));
  state.enemies = [];
  state.cups = [];
  state.powerUps = [];
  state.obstacles = [];
  state.dangerZones = [];
  state.shadowZones = [];
  state.eventObjects = [];
  state.cosmeticParticles = [];
  state.distraction = null;
  state.exitGate = null;
  state.exitChoices = [];
  state.selectedExitChoice = null;
  state.choiceRewardBonus = 0;
  state.protectedCup = null;
  state.keyHolder = null;
  state.rainSystem = null;
  state.activeEvent = null;
  state.trailCooldown = 0;
}

function startLevel(level = 1) {
  clearObjects();
  updateStadiumTeamColors(state.selectedTeam);
  const customLevel = state.customLevelActive ? profile.customLevel : null;
  const stadiumTheme = applyStadiumTheme(level, customLevel?.theme);
  state.level = level;
  const mission = customLevel
    ? {
      type: customLevel.mission,
      label: customLevel.mission === 'switch' ? 'Alavancas' : customLevel.mission === 'tunnel' ? 'Tunel criado' : customLevel.mission === 'protect' ? 'Proteger taca' : 'Tacas criadas',
      count: customLevel.mission === 'protect' ? Math.max(18, customLevel.objectives * 8) : customLevel.mission === 'tunnel' ? 1 : customLevel.objectives,
      intro: 'Fase criada no editor: teste seu proprio desafio.'
    }
    : getMission(level);
  state.missionType = mission.type;
  state.missionLabel = mission.label;
  state.proceduralSeed = Math.random() * 10000 + level * 101;
  state.cupsCollected = 0;
  state.cupsNeeded = mission.count;
  state.protectTimer = 0;
  state.protectDuration = mission.type === 'protect' ? mission.count : 0;
  state.exitOpen = false;
  state.exitChoices = [];
  state.selectedExitChoice = null;
  state.choiceRewardBonus = 0;
  state.boostTimer = 0;
  state.shield = false;
  state.levelStartTime = performance.now();
  state.elapsedTime = 0;
  state.capturesAvoided = 0;
  state.shieldUsesThisLevel = 0;
  state.trophiesCollectedThisLevel = 0;
  state.lastReward = null;
  state.nearDangerTimer = 0;
  state.tutorialStep = 0;
  state.tutorialTimer = 0;
  state.activeEvent = null;
  state.eventCooldown = level === 1 ? 999 : THREE.MathUtils.randFloat(9, 15);
  state.rareEventTriggered = false;
  state.crowdReactCooldown = 0;
  state.heroicTimer = 0;
  state.heroicCooldown = 0;
  state.heroicReason = '';
  state.replayEvents = [];
  state.lastCaptureAvoided = null;
  state.rival = null;
  state.rivalMomentDone = false;
  state.rivalStealDone = false;
  state.narratorCooldown = 0;
  hideNarration();
  state.stamina = Math.max(55, 105 - level * 5);
  player.position.set(0, 0, 13.5);
  player.rotation.y = Math.PI;
  scene.remove(player);
  const newPlayer = createPlayer(state.selectedTeam);
  newPlayer.position.copy(player.position);
  newPlayer.rotation.copy(player.rotation);
  while (player.children.length) player.remove(player.children[0]);
  while (newPlayer.children.length) player.add(newPlayer.children[0]);
  player.userData = newPlayer.userData;
  scene.add(player);
  state.player2.active = state.coop;
  player2.visible = state.coop;
  if (state.coop) {
    player2.position.set(2.2, 0, 13.5);
    player2.rotation.y = Math.PI;
    const newPlayer2 = createPlayer(state.selectedTeam);
    newPlayer2.scale.setScalar(0.94);
    while (player2.children.length) player2.remove(player2.children[0]);
    while (newPlayer2.children.length) player2.add(newPlayer2.children[0]);
    player2.userData = newPlayer2.userData;
    state.player2.stamina = 100;
    state.player2.boostTimer = 0;
    state.player2.shield = false;
    state.player2.hidden = false;
    state.player2.distractionCooldown = 0;
  }

  if (mission.type === 'cup' || mission.type === 'switch') {
    for (let i = 0; i < state.cupsNeeded; i += 1) {
      let [x, z] = getCupPosition(i, state.cupsNeeded, level);
      [x, z] = getProceduralPosition(x, z, i, level >= 2 ? 2.35 : 0.85);
      const cup = createObjectiveItem(mission.type, x, z);
      scene.add(cup);
      state.cups.push(cup);
    }
  } else if (mission.type === 'protect') {
    state.protectedCup = createCup(0, 0);
    state.protectedCup.scale.setScalar(1.18);
    scene.add(state.protectedCup);
  }

  getEnemyPlan(customLevel ? Math.max(2, Math.min(5, customLevel.objectives)) : level, mission.type).forEach((item, index) => {
    const [enemyX, enemyZ] = getProceduralPosition(item.x, item.z, index + 30, level >= 3 ? 1.9 : 1.1);
    const enemy = spawnEnemyRole(item.role, enemyX, enemyZ, index);
    if (item.role === 'boss' || item.role === 'rivalBoss') enemy.userData.bossName = item.role === 'rivalBoss' ? recurringRival.name : stadiumTheme.boss;
  });
  if (level >= 5) {
    const bossName = state.rival?.userData.role === 'rivalBoss' ? recurringRival.name : stadiumTheme.boss;
    setTimeout(() => {
      if (state.running && state.level === level) showMessage(bossName, 'Chefe da arena: defenda a taca e encontre a brecha para fugir.');
    }, 900);
  }
  if (state.running && state.rival) {
    if (level === 1) {
      showNarration(`${recurringRival.name} entrou no torneio de olho na sua taca.`, true);
      addReplayEvent(`${recurringRival.name} apareceu pela primeira vez`);
    } else if (level === 3) {
      showNarration(`${recurringRival.name}: hoje voce nao passa das alavancas!`, true);
      addReplayEvent(`${recurringRival.name} provocou sua selecao`);
    } else if (level >= 5) {
      showNarration(`${recurringRival.name} roubou a taca. Recupere o controle!`, true);
      addReplayEvent(`${recurringRival.name} roubou a taca na final`);
    }
  }

  if (mission.type === 'tunnel') {
    openExitGate();
  }

  const powerPositions = [
    [-15, 19],
    [15, 18],
    [0, 10],
    [-17, -4],
    [17, -4]
  ];
  const powerCount = Math.min(5, (level === 1 ? 1 : level === 2 ? 3 : Math.min(4, 1 + Math.ceil(level / 2))) + getAdaptivePowerBonus());
  for (let i = 0; i < powerCount; i += 1) {
    let [x, z] = powerPositions[(i + level) % powerPositions.length];
    [x, z] = getProceduralPosition(x, z, i + 100, level >= 2 ? 1.8 : 0.6);
    const power = createPowerUp(i % 2 === 0 ? 'boost' : 'shield', x, z);
    scene.add(power);
    state.powerUps.push(power);
  }

  if (level >= 4) {
    const dangerSpots = level === 4 ? [[-9, -9, 3.4], [10, 3, 3.8], [-13, 13, 3.2]] : [[-9, -10, 3.5], [10, -2, 3.4], [-12, 12, 3.2], [12, 14, 3.2]];
    dangerSpots.forEach(([x, z, radius]) => {
      const zone = createDangerZone(x, z, radius);
      scene.add(zone);
      state.dangerZones.push(zone);
    });
  }

  if (level >= 2) {
    const shadowSpots = [
      [-17, -6, 3.3],
      [17, 10, 3.2],
      [-12, 20, 2.8],
      [12, -18, 2.8]
    ];
    shadowSpots.slice(0, Math.min(shadowSpots.length, level)).forEach(([x, z, radius]) => {
      const shadow = createShadowZone(x, z, radius);
      scene.add(shadow);
      state.shadowZones.push(shadow);
    });
  }

  const obstacleCount = customLevel ? customLevel.obstacles : level === 1 ? 3 : 4 + level;
  for (let i = 0; i < obstacleCount; i += 1) {
    let x = 0;
    let z = 0;
    let attempts = 0;
    do {
      const spread = customLevel?.map === 'wide' ? 19 : customLevel?.map === 'maze' ? 14 : 17.5;
      x = THREE.MathUtils.randFloat(-spread, spread);
      z = THREE.MathUtils.randFloat(-21, 18);
      attempts += 1;
    } while (!isClearFieldSpot(x, z, 3) && attempts < 24);
    state.obstacles.push(createObstacle(x, z, 1.3, 1.3));
  }
  updateCamera(true);
  drawMiniMap();
  updateHud();
}

function beginGame(level = state.selectedLevel) {
  ensureAudio();
  startCrowdSound();
  teamScreen.classList.add('hidden');
  gameOverScreen.classList.add('hidden');
  levelCompleteScreen.classList.add('hidden');
  pauseScreen.classList.add('hidden');
  hud.classList.remove('hidden');
  pauseButton.classList.remove('hidden');
  minimap.classList.remove('hidden');
  abilityDock?.classList.remove('hidden');
  setTouchControlsVisible(true);
  state.touch.mapVisible = true;
  touchMapButton?.classList.add('is-pressed');
  app.classList.add('game-live');
  state.running = true;
  state.paused = false;
  updatePauseButtonLabel();
  state.mode = state.pendingMode || 'normal';
  state.coop = state.mode === 'coop';
  if (state.mode === 'speedrun') {
    level = 1;
    state.speedrunStartTime = performance.now();
    state.speedrunElapsed = 0;
  } else {
    state.speedrunStartTime = 0;
    state.speedrunElapsed = 0;
  }
  state.selectedLevel = level;
  state.clock.getDelta();
  startLevel(level);
  const story = getStoryChapter(level);
  const stageName = state.customLevelActive ? 'Fase criada' : getStageName(level);
  showMessage(`${stageName}: ${story.title}`, state.customLevelActive ? getMission(level).intro : story.intro);
  if (!state.customLevelActive) {
    showNarration(story.intro, true);
    addReplayEvent(`${stageName}: ${story.title}`);
  }
  showEntranceCutscene(level);
  playSound('whistle');
}

function endGame(won) {
  state.running = false;
  state.paused = false;
  const reward = won ? null : awardParticipationProgress();
  stopCrowdSound();
  hud.classList.add('hidden');
  pauseButton.classList.add('hidden');
  minimap.classList.add('hidden');
  abilityDock?.classList.add('hidden');
  setTouchControlsVisible(false);
  pauseScreen.classList.add('hidden');
  hideNarration();
  gameOverScreen.classList.remove('hidden');
  app.classList.remove('game-live');
  endKicker.textContent = won ? 'Campeao do mundo' : 'Eliminado da Copa';
  endTitle.textContent = won ? 'Voce escapou com a taca' : `${state.selectedTeam.name} caiu em ${getStageName(state.level)}`;
  endCopy.textContent = won ? 'Sua selecao sobreviveu aos rivais, juizes e armadilhas do torneio.' : `Os perseguidores cercaram voce. A campanha acabou, mas a partida rendeu +${reward.xpGained} XP e +${reward.coinsGained} moedas.`;
}

function updatePauseButtonLabel() {
  if (!pauseButton) return;
  pauseButton.innerHTML = `
    <span class="pause-icon"></span>
    <strong>${state.paused ? 'Continuar' : 'Pausar'}</strong>
    <em>${state.paused ? 'P' : 'ESC'}</em>
  `;
}

function setPaused(paused) {
  if (!state.running) return;
  state.paused = paused;
  pauseScreen.classList.toggle('hidden', !paused);
  message.classList.toggle('hidden', paused || state.messageTimer <= 0);
  narrator?.classList.toggle('hidden', paused || state.narratorTimer <= 0);
  updatePauseButtonLabel();
  if (!paused) state.clock.getDelta();
}

function togglePause() {
  setPaused(!state.paused);
}

function isStandaloneApp() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

let deferredInstallPrompt = null;
const installButtons = [installAppButton, menuInstallButton].filter(Boolean);
function updateInstallButtons() {
  const canShowInstall = !isStandaloneApp() && (Boolean(deferredInstallPrompt) || isMobileRuntime());
  installButtons.forEach((button) => button.classList.toggle('hidden', !canShowInstall));
}

async function requestAppInstall() {
  ensureAudio();
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice.catch(() => null);
    deferredInstallPrompt = null;
    updateInstallButtons();
    return;
  }
  showMessage('Instalar app', 'No celular, abra o menu do navegador e escolha Adicionar a tela inicial.');
}

async function requestFullscreenMode() {
  ensureAudio();
  const target = document.documentElement;
  try {
    if (!document.fullscreenElement && target.requestFullscreen) {
      await target.requestFullscreen({ navigationUI: 'hide' });
    }
  } catch {
    showMessage('Tela cheia', 'Seu navegador bloqueou o modo tela cheia nesta tentativa.');
  }

  try {
    if (screen.orientation?.lock) await screen.orientation.lock('landscape');
  } catch {
    showMessage('Modo paisagem', 'Se o celular nao girar sozinho, deixe a rotacao liberada e vire o aparelho.');
  }
}

function updateJoystickFromPointer(event) {
  if (!touchJoystick || !touchJoystickKnob) return;
  const rect = touchJoystick.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const radius = Math.max(42, Math.min(rect.width, rect.height) * 0.34);
  const rawX = event.clientX - centerX;
  const rawY = event.clientY - centerY;
  const distance = Math.hypot(rawX, rawY);
  const deadZone = radius * 0.16;
  const scale = distance > radius ? radius / distance : 1;
  const knobX = distance < deadZone ? 0 : rawX * scale;
  const knobY = distance < deadZone ? 0 : rawY * scale;
  state.touch.moveX = knobX / radius;
  state.touch.moveZ = knobY / radius;
  touchJoystickKnob.style.transform = `translate(-50%, -50%) translate(${knobX}px, ${knobY}px)`;
}

function releaseJoystick() {
  state.touch.moveX = 0;
  state.touch.moveZ = 0;
  state.touch.joystickPointerId = null;
  touchJoystickKnob?.style.setProperty('transform', 'translate(-50%, -50%)');
}

function setTouchSprint(active) {
  state.touch.sprint = Boolean(active);
  touchTurboButton?.classList.toggle('is-pressed', state.touch.sprint);
}

function toggleTouchMap() {
  if (!state.running) return;
  state.touch.mapVisible = !state.touch.mapVisible;
  minimap.classList.toggle('hidden', !state.touch.mapVisible);
  touchMapButton?.classList.toggle('is-pressed', state.touch.mapVisible);
}

function getBestTime(level) {
  return Number(localStorage.getItem(`copaEscapeBestTime:${level}`) || 0);
}

function setBestTime(level, seconds) {
  const current = getBestTime(level);
  if (!current || seconds < current) {
    localStorage.setItem(`copaEscapeBestTime:${level}`, String(seconds));
    return true;
  }
  return false;
}

function showLevelComplete() {
  state.running = false;
  state.paused = false;
  stopCrowdSound();
  hud.classList.add('hidden');
  pauseButton.classList.add('hidden');
  minimap.classList.add('hidden');
  abilityDock?.classList.add('hidden');
  setTouchControlsVisible(false);
  message.classList.add('hidden');
  hideNarration();
  const seconds = state.elapsedTime || (performance.now() - state.levelStartTime) / 1000;
  const wasBest = setBestTime(state.level, seconds);
  const best = getBestTime(state.level);
  const stars = calculateStars(seconds);
  state.lastStars = stars;
  if (!state.customLevelActive) saveStars(state.level, stars);
  if (state.mode === 'speedrun' && state.speedrunStartTime) {
    state.speedrunElapsed = (performance.now() - state.speedrunStartTime) / 1000;
    if (state.level >= 5 && (!profile.bestSpeedrun || state.speedrunElapsed < profile.bestSpeedrun)) {
      profile.bestSpeedrun = state.speedrunElapsed;
      saveProfile();
    }
  }
  const reward = awardMatchProgress(seconds);
  recordRanking(seconds, reward.coinsGained);
  const dailyCompleted = evaluateDailyChallenges({
    level: state.level,
    seconds,
    stars,
    shieldUses: state.shieldUsesThisLevel,
    trophiesCollected: state.trophiesCollectedThisLevel
  });
  const rewardHighlights = [];
  if (reward.levelUps.length) rewardHighlights.push(`Nivel ${reward.levelUps[reward.levelUps.length - 1]}`);
  if (reward.unlockedNames.length) rewardHighlights.push(reward.unlockedNames[0]);
  if (dailyCompleted.length) rewardHighlights.push(dailyCompleted[0]);
  resultKicker.textContent = rewardHighlights[0] || (wasBest ? 'Novo recorde' : 'Fase vencida');
  resultTitle.textContent = state.mode === 'speedrun' ? `${getStageName(state.level)} concluida` : state.level >= 5 ? 'Voce venceu a Copa' : `Classificado para ${getStageName(state.level + 1)}`;
  nextLevelButton.textContent = state.level >= 5 ? 'Voltar ao menu' : 'Continuar';
  statTime.textContent = formatTime(seconds);
  statObjectives.textContent = getObjectiveProgressText();
  statSaves.textContent = state.capturesAvoided;
  statBest.textContent = formatTime(best);
  statReward.textContent = `+${reward.xpGained} XP / +${reward.coinsGained} moedas${dailyCompleted.length ? ' + diario' : ''}`;
  statStars.textContent = `${'★'.repeat(stars)}${'☆'.repeat(3 - stars)} (${getTotalStars()}/15)`;
  statRank.textContent = state.mode === 'speedrun' ? `${getSpeedrunRank(state.speedrunElapsed)} ${formatTime(state.speedrunElapsed)}` : '--';
  state.pendingNextLevel = state.customLevelActive ? 6 : state.level + 1;
  addReplayEvent('Torcida comemorou a classificacao');
  reactCrowd('win', true);
  renderReplay();
  triggerCelebration();
  showTrophyCeremonyCutscene(seconds, stars);
  levelCompleteScreen.classList.remove('hidden');
  app.classList.remove('game-live');
  playSound('win');
}

function showMessage(title, body) {
  messageTitle.textContent = title;
  messageBody.textContent = body;
  message.classList.remove('hidden');
  state.messageTimer = 2.4;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatNarrationText(text) {
  const safe = escapeHtml(text);
  return safe.replace(
    /\b(Copa|taca|Taca|classificacao|captura|perigo|rival|El Matador|portal|final|golpe|Brasil|Argentina|Franca|Alemanha|Espanha|Portugal|Inglaterra|Japao)\b/g,
    '<mark>$1</mark>'
  );
}

function showNarration(text, important = false) {
  if (!narrator || !narratorLine) return;
  narratorLine.innerHTML = formatNarrationText(text);
  narrator.classList.remove('hidden');
  state.narratorTimer = important ? 4 : 2.8;
  state.narratorCooldown = important ? 2.6 : 1.4;
}

function hideNarration() {
  narrator?.classList.add('hidden');
  state.narratorTimer = 0;
}

function updateNarrator(dt) {
  state.narratorCooldown = Math.max(0, state.narratorCooldown - dt);
  if (state.narratorTimer <= 0) return;
  state.narratorTimer -= dt;
  if (state.narratorTimer <= 0) hideNarration();
}

function getFeaturedRivalTeam() {
  if (state.rival?.userData?.isRecurringRival) return recurringRival.team;
  const rival = teams.find((team) => team.name !== state.selectedTeam.name);
  return rival || teams[1] || teams[0];
}

function hideCutscene() {
  cutscene?.classList.add('hidden');
  state.cutsceneTimer = 0;
  state.cutsceneMax = 0;
  if (state.cutsceneFallbackTimer) {
    clearTimeout(state.cutsceneFallbackTimer);
    state.cutsceneFallbackTimer = null;
  }
}

function showCutscene({ kicker, title, copy, duration = 2.35, rivalTeam = null, sound = 'whistle' }) {
  if (!cutscene) return;
  const rival = rivalTeam || getFeaturedRivalTeam();
  cutsceneKicker.textContent = kicker;
  cutsceneTitle.textContent = title;
  cutsceneCopy.textContent = copy;
  cutsceneTeamLogo.src = state.selectedTeam.logo;
  cutsceneTeamName.textContent = state.selectedTeam.name;
  cutsceneRivalLogo.src = rival.logo || state.selectedTeam.logo;
  cutsceneRivalName.textContent = rival.name || 'Rival';
  cutscene.classList.remove('hidden');
  if (cutsceneProgress) {
    cutsceneProgress.style.animation = 'none';
    cutsceneProgress.offsetHeight;
    cutsceneProgress.style.animation = `cutsceneProgress ${duration}s linear both`;
  }
  state.cutsceneTimer = duration;
  state.cutsceneMax = duration;
  if (state.cutsceneFallbackTimer) clearTimeout(state.cutsceneFallbackTimer);
  state.cutsceneFallbackTimer = setTimeout(() => {
    if (state.cutsceneTimer > 0) hideCutscene();
  }, (duration + 0.45) * 1000);
  if (sound) playSound(sound);
}

function showEntranceCutscene(level) {
  const stage = state.customLevelActive ? 'Fase criada' : getStageName(level);
  const rival = getFeaturedRivalTeam();
  showCutscene({
    kicker: 'Entrada das selecoes',
    title: `${stage}`,
    copy: `${state.selectedTeam.name} entra em campo contra ${rival.name}. A torcida esta pronta para empurrar a campanha.`,
    duration: 2.35,
    rivalTeam: rival,
    sound: 'whistle'
  });
}

function showTrophyCeremonyCutscene(seconds, stars) {
  const finalWin = state.level >= 5 && !state.customLevelActive;
  showCutscene({
    kicker: finalWin ? 'Cerimonia da taca' : 'Cerimonia da classificacao',
    title: finalWin ? 'Taca erguida' : 'Rumo a proxima fase',
    copy: `${state.selectedTeam.name} concluiu em ${formatTime(seconds)} com ${stars}/3 estrelas. Replay dos melhores momentos liberado.`,
    duration: finalWin ? 3.05 : 2.55,
    rivalTeam: getFeaturedRivalTeam(),
    sound: finalWin ? 'win' : 'collect'
  });
}

function updateCutscene(dt) {
  if (state.cutsceneTimer <= 0) return;
  state.cutsceneTimer -= dt;
  if (state.cutsceneTimer <= 0) hideCutscene();
}

function reactCrowd(kind, force = false) {
  if (!force && (!state.running || state.crowdReactCooldown > 0)) return;
  state.crowdReactCooldown = kind === 'danger' ? 4.5 : 3.2;
  const lines = {
    good: `${state.selectedTeam.name}! ${state.selectedTeam.name}! A torcida empurra a campanha!`,
    danger: 'Gritos de susto nas arquibancadas. A captura passou perto!',
    win: 'Fogos no estadio. A classificacao virou festa!'
  };
  stadiumFans.forEach((fan, index) => {
    if (index % (kind === 'win' ? 2 : 4) === 0) fan.userData.phase += kind === 'danger' ? 0.9 : Math.PI;
  });
  if (kind === 'win') {
    for (let i = 0; i < 18; i += 1) {
      const side = i % 2 ? -1 : 1;
      const position = new THREE.Vector3(side * THREE.MathUtils.randFloat(17, 24), THREE.MathUtils.randFloat(4, 8), THREE.MathUtils.randFloat(-24, 24));
      const velocity = new THREE.Vector3(THREE.MathUtils.randFloatSpread(1.2), THREE.MathUtils.randFloat(0.4, 1.5), THREE.MathUtils.randFloatSpread(1.2));
      spawnCosmeticParticle(position, [0xfacc15, 0x38bdf8, 0x22c55e, 0xef4444][i % 4], 1.2, 0.1, velocity);
    }
  }
  if (state.running && lines[kind]) showNarration(lines[kind], kind === 'win');
  pulseCrowdSound(kind);
  playSound(kind === 'danger' ? 'danger' : kind === 'win' ? 'win' : 'collect');
}

function triggerHeroicMoment(reason) {
  if (!state.running || state.heroicTimer > 0 || state.heroicCooldown > 0) return;
  state.heroicTimer = 3.4;
  state.heroicCooldown = 12;
  state.heroicReason = reason;
  const lines = {
    lastCup: ['Momento heroico', 'Ultima taca. Tudo ou nada pela classificacao.'],
    danger: ['No limite', 'A captura passou perto. O tempo parece desacelerar.'],
    boss: ['Duelo final', `${recurringRival.name} esta perto da taca. Agora e decisivo.`]
  };
  const [title, copy] = lines[reason] || lines.danger;
  showMessage(title, copy);
  showNarration(copy, true);
  addReplayEvent(`${title}: ${copy}`);
  flashFeedback('power');
  for (let i = 0; i < 22; i += 1) {
    const angle = (i / 22) * Math.PI * 2;
    const position = player.position.clone().add(new THREE.Vector3(Math.cos(angle) * 1.6, 0.65, Math.sin(angle) * 1.6));
    const velocity = new THREE.Vector3(Math.cos(angle) * 0.8, 0.75, Math.sin(angle) * 0.8);
    spawnCosmeticParticle(position, i % 2 ? 0xfacc15 : 0x38bdf8, 0.9, 0.11, velocity);
  }
  playSound('power');
}

function updateHeroicMoment(dt) {
  state.crowdReactCooldown = Math.max(0, state.crowdReactCooldown - dt);
  state.heroicCooldown = Math.max(0, state.heroicCooldown - dt);
  if (state.heroicTimer > 0) {
    state.heroicTimer = Math.max(0, state.heroicTimer - dt);
    app.classList.add('heroic-mode');
    return;
  }
  app.classList.remove('heroic-mode');
}

function addReplayEvent(text) {
  const seconds = state.running ? (performance.now() - state.levelStartTime) / 1000 : state.elapsedTime || 0;
  state.replayEvents.push({ time: Math.max(0, seconds), text });
  if (state.replayEvents.length > 10) state.replayEvents.shift();
}

function renderReplay() {
  if (!replayList) return;
  replayList.innerHTML = '';
  const events = state.replayEvents.slice(-5);
  if (!events.length) {
    const empty = document.createElement('p');
    empty.textContent = 'Nenhum lance registrado nesta fase.';
    replayList.appendChild(empty);
    return;
  }
  events.forEach((event, index) => {
    const item = document.createElement('article');
    item.className = 'replay-item';
    const badge = document.createElement('b');
    badge.textContent = String(index + 1).padStart(2, '0');
    const time = document.createElement('strong');
    time.textContent = formatTime(event.time);
    const copy = document.createElement('span');
    copy.textContent = event.text;
    item.append(badge, time, copy);
    replayList.appendChild(item);
  });
}

function updateHud() {
  state.elapsedTime = (performance.now() - state.levelStartTime) / 1000;
  if (state.mode === 'speedrun' && state.speedrunStartTime) {
    state.speedrunElapsed = (performance.now() - state.speedrunStartTime) / 1000;
  }
  if (hudTeamLogo) hudTeamLogo.src = state.selectedTeam.logo;
  hudTeam.textContent = state.selectedTeam.name;
  hudLevel.textContent = state.mode === 'speedrun' ? `${state.level}/5 ${formatTime(state.speedrunElapsed)}` : `${state.level}/5`;
  hudCups.textContent = getObjectiveProgressText();
  hudObjective.textContent = getHudObjectiveText();
  const p1Power = state.shield ? 'Escudo' : state.boostTimer > 0 ? `Turbo ${Math.ceil(state.boostTimer)}s` : 'Nenhum';
  const p2Power = state.player2.shield ? 'Escudo' : state.player2.boostTimer > 0 ? `Turbo ${Math.ceil(state.player2.boostTimer)}s` : 'Nenhum';
  hudPower.textContent = String(state.choiceRewardBonus || 0);
  const staminaValue = state.coop ? Math.min(state.stamina, state.player2.stamina) : state.stamina;
  hudStamina.textContent = state.coop ? `${Math.max(0, Math.round(staminaValue))}%` : `${Math.max(0, Math.round(state.stamina))}%`;
  if (hudStaminaFill) hudStaminaFill.style.width = `${THREE.MathUtils.clamp(staminaValue, 0, 100)}%`;
  if (hudBoostStatus) {
    const boostOnField = state.powerUps.some((power) => power.userData.type === 'boost');
    hudBoostStatus.textContent = state.boostTimer > 0 ? `${Math.ceil(state.boostTimer)}s` : boostOnField ? 'No campo' : 'Aguardando';
  }
  if (hudShieldStatus) {
    const shieldOnField = state.powerUps.some((power) => power.userData.type === 'shield');
    hudShieldStatus.textContent = state.shield ? 'Ativo' : shieldOnField ? 'No campo' : 'Indisponivel';
  }
  if (hudHeroicStatus) {
    hudHeroicStatus.textContent = state.heroicTimer > 0 ? 'Momento ativo' : state.heroicCooldown > 0 ? `Recarga ${Math.ceil(state.heroicCooldown)}s` : 'Pronto no limite';
  }
  updateScoreboard();
}

function animateCharacter(character, moving, dt, pace = 8) {
  const rig = character.userData;
  if (!rig.leftLeg || !rig.rightLeg || !rig.leftArm || !rig.rightArm) return;
  const celebrateTime = rig.celebrateTimer || 0;
  const celebrateMax = rig.celebrateMax || 0.68;
  const celebrating = celebrateTime > 0;
  if (celebrating) rig.celebrateTimer = Math.max(0, celebrateTime - dt);
  const celebrateAlpha = celebrating ? THREE.MathUtils.clamp(celebrateTime / celebrateMax, 0, 1) : 0;
  const hitTime = rig.hitTimer || 0;
  const hitMax = rig.hitMax || 0.46;
  const hitReacting = hitTime > 0;
  if (hitReacting) rig.hitTimer = Math.max(0, hitTime - dt);
  const hitAlpha = hitReacting ? THREE.MathUtils.clamp(hitTime / hitMax, 0, 1) : 0;
  const role = rig.role;
  const turbo = Boolean(rig.turboActive);
  const aggressive = role === 'marker' || role === 'rivalCaptain' || role === 'rivalBoss' || role === 'boss';
  const goalkeeper = role === 'goalkeeper';
  const energy = moving ? (rig.animationEnergy || 1) * (turbo ? 1.18 : 1) * (aggressive ? 1.08 : 1) : 1;
  rig.phase += dt * (moving ? pace : 2.2);
  const stride = moving ? Math.sin(rig.phase) : Math.sin(rig.phase) * 0.08;
  const counter = moving ? Math.cos(rig.phase) : 0;
  const bounce = moving ? Math.abs(counter) : 0;
  const legSwing = stride * (moving ? 0.95 * energy : goalkeeper ? 0.04 : 0.08);
  const armSwing = stride * (moving ? 1.18 * energy : goalkeeper ? 0.04 : 0.07);
  rig.leftLeg.rotation.x = legSwing;
  rig.rightLeg.rotation.x = -legSwing;
  rig.leftLeg.rotation.y = moving ? -counter * 0.035 : 0;
  rig.rightLeg.rotation.y = moving ? counter * 0.035 : 0;
  rig.leftLeg.rotation.z = moving ? -0.025 - counter * 0.028 : -0.02;
  rig.rightLeg.rotation.z = moving ? 0.025 - counter * 0.028 : 0.02;
  rig.leftArm.rotation.x = -armSwing;
  rig.rightArm.rotation.x = armSwing;
  rig.leftArm.rotation.y = moving ? counter * 0.04 : 0;
  rig.rightArm.rotation.y = moving ? counter * 0.04 : 0;
  rig.leftArm.rotation.z = moving ? -0.42 + counter * 0.08 : -0.24;
  rig.rightArm.rotation.z = moving ? 0.42 + counter * 0.08 : 0.24;
  if (rig.leftArm.userData?.forearm) {
    rig.leftArm.userData.forearm.rotation.x = moving ? 0.22 + Math.max(0, stride) * 0.32 : 0.04;
    rig.rightArm.userData.forearm.rotation.x = moving ? 0.22 + Math.max(0, -stride) * 0.32 : 0.04;
  }
  rig.body.rotation.x = moving ? -0.105 * energy - (turbo ? 0.07 : 0) + counter * 0.052 : 0;
  rig.body.rotation.z = moving ? stride * 0.046 * energy : Math.sin(rig.phase * 0.45) * 0.012;
  if (rig.shoulders) {
    rig.shoulders.rotation.x = moving ? -0.05 + counter * 0.038 : -0.03;
    rig.shoulders.rotation.z = moving ? -stride * 0.04 * energy : 0;
  }
  if (rig.chest) {
    rig.chest.rotation.x = moving ? -0.055 + counter * 0.03 : -0.04;
    rig.chest.rotation.z = moving ? stride * 0.032 * energy : 0;
  }
  rig.hips.rotation.x = moving ? -counter * 0.08 : 0;
  rig.hips.rotation.z = moving ? -stride * 0.046 * energy : 0;
  if (rig.leftLeg.userData?.boot) {
    rig.leftLeg.userData.boot.rotation.x = moving ? Math.max(0, -stride) * 0.44 : 0;
    rig.leftLeg.userData.boot.rotation.z = moving ? -counter * 0.07 : 0;
  }
  if (rig.rightLeg.userData?.boot) {
    rig.rightLeg.userData.boot.rotation.x = moving ? Math.max(0, stride) * 0.44 : 0;
    rig.rightLeg.userData.boot.rotation.z = moving ? -counter * 0.07 : 0;
  }
  let extraBounce = 0;
  if (celebrating) {
    const cheer = Math.sin((1 - celebrateAlpha) * Math.PI * 5);
    extraBounce = Math.max(0, cheer) * 0.12;
    rig.leftArm.rotation.x = -1.92;
    rig.rightArm.rotation.x = -1.92;
    rig.leftArm.rotation.z = -0.82 + cheer * 0.16;
    rig.rightArm.rotation.z = 0.82 - cheer * 0.16;
    rig.leftLeg.rotation.x = -0.22 + cheer * 0.08;
    rig.rightLeg.rotation.x = 0.22 - cheer * 0.08;
    rig.body.rotation.x = -0.08;
    rig.body.rotation.z = cheer * 0.07;
    if (rig.shoulders) rig.shoulders.rotation.z = -cheer * 0.06;
    if (rig.chest) rig.chest.rotation.z = cheer * 0.04;
  }
  if (hitReacting) {
    const side = rig.hitSide || 1;
    const shove = Math.sin(hitAlpha * Math.PI * 4) * hitAlpha;
    character.rotation.z = shove * 0.1 * side;
    rig.body.rotation.x += hitAlpha * 0.16;
    rig.shoulders.rotation.z += shove * 0.08 * side;
  } else {
    character.rotation.z = 0;
  }
  if (goalkeeper && !moving && !celebrating && !hitReacting) {
    rig.leftArm.rotation.x = -0.28 + Math.sin(rig.phase * 1.3) * 0.08;
    rig.rightArm.rotation.x = -0.28 - Math.sin(rig.phase * 1.3) * 0.08;
    rig.leftArm.rotation.z = -1.05;
    rig.rightArm.rotation.z = 1.05;
    rig.leftLeg.rotation.z = -0.16;
    rig.rightLeg.rotation.z = 0.16;
    rig.body.rotation.x = -0.08;
    if (rig.shoulders) rig.shoulders.rotation.x = -0.08;
  }
  rig.body.position.y = rig.baseBodyY + bounce * 0.075 * energy + extraBounce;
  if (rig.shoulders) rig.shoulders.position.y = rig.baseShouldersY + bounce * 0.066 * energy + extraBounce;
  if (rig.chest) rig.chest.position.y = rig.baseChestY + bounce * 0.066 * energy + extraBounce;
  rig.hips.position.y = rig.baseHipsY + bounce * 0.052 * energy + extraBounce * 0.45;
  if (rig.headParts) {
    rig.headParts.forEach(({ part, baseY }) => {
      part.position.y = baseY + bounce * 0.05 * energy + extraBounce * 1.12;
      part.rotation.z = part === rig.head ? moving ? -stride * 0.034 * energy : 0 : part.rotation.z;
    });
  } else if (rig.head) {
    rig.head.position.y = rig.baseHeadY + bounce * 0.05 * energy + extraBounce * 1.12;
    rig.head.rotation.z = moving ? -stride * 0.034 * energy : 0;
  }
}

function isPlayerInShadow() {
  return state.shadowZones.some((zone) => player.position.distanceTo(zone.position) < zone.userData.radius);
}

function isPlayerBehindCover() {
  return state.obstacles.some((obstacle) => player.position.distanceTo(obstacle.position) < 2.1);
}

function getActivePlayers() {
  return state.player2.active ? [player, player2] : [player];
}

function getNearestPlayerInfo(position) {
  let best = { object: player, isPlayer2: false, distance: position.distanceTo(player.position) };
  if (state.player2.active) {
    const distance = position.distanceTo(player2.position);
    if (distance < best.distance) best = { object: player2, isPlayer2: true, distance };
  }
  return best;
}

function isActorHidden(actor) {
  if (actor === player2) return state.player2.hidden;
  return state.hidden;
}

function hasActorShield(actor) {
  return actor === player2 ? state.player2.shield : state.shield;
}

function consumeActorShield(actor) {
  if (actor === player2) state.player2.shield = false;
  else state.shield = false;
}

function applyActorPower(actor, type) {
  if (actor === player2) {
    if (type === 'boost') {
      state.player2.boostTimer = 7;
      state.player2.stamina = 100;
    } else {
      state.player2.shield = true;
    }
    return;
  }
  if (type === 'boost') {
    state.boostTimer = 7;
    state.stamina = 100;
  } else {
    state.shield = true;
  }
}

function triggerActorCelebration(actor, intensity = 1) {
  if (!actor?.userData) return;
  actor.userData.celebrateMax = THREE.MathUtils.lerp(0.48, 0.82, THREE.MathUtils.clamp(intensity, 0, 1));
  actor.userData.celebrateTimer = actor.userData.celebrateMax;
}

function triggerHitReaction(actor, sourcePosition = null, screenFlash = true) {
  if (!actor?.userData) return;
  const sourceX = sourcePosition?.x ?? actor.position.x - 1;
  actor.userData.hitMax = 0.46;
  actor.userData.hitTimer = actor.userData.hitMax;
  actor.userData.hitSide = actor.position.x >= sourceX ? 1 : -1;
  emitGameplayBurst(actor.position.clone().add(new THREE.Vector3(0, 0.7, 0)), [0xef4444, 0xfacc15, 0xf8fafc], 10);
  if (screenFlash) {
    flashFeedback('hit');
    playSound('hit');
  }
}

function isActorInShadow(actor) {
  return state.shadowZones.some((zone) => actor.position.distanceTo(zone.position) < zone.userData.radius);
}

function isActorBehindCover(actor) {
  return state.obstacles.some((obstacle) => actor.position.distanceTo(obstacle.position) < 2.1);
}

function updatePlayer(dt) {
  const direction = new THREE.Vector3();
  if (state.keys.has('KeyW') || !state.player2.active && state.keys.has('ArrowUp')) direction.z -= 1;
  if (state.keys.has('KeyS') || !state.player2.active && state.keys.has('ArrowDown')) direction.z += 1;
  if (state.keys.has('KeyA') || !state.player2.active && state.keys.has('ArrowLeft')) direction.x -= 1;
  if (state.keys.has('KeyD') || !state.player2.active && state.keys.has('ArrowRight')) direction.x += 1;
  if (Math.abs(state.touch.moveX) > 0.03 || Math.abs(state.touch.moveZ) > 0.03) {
    direction.x += state.touch.moveX;
    direction.z += state.touch.moveZ;
  }
  const sprinting = state.touch.sprint || state.keys.has('ShiftLeft') || !state.player2.active && state.keys.has('ShiftRight');
  const moving = direction.lengthSq() > 0;
  const canSprint = sprinting && state.stamina > 4 && moving;
  const eventSpeedMultiplier = state.activeEvent?.type === 'rain' ? 0.88 : state.activeEvent?.type === 'blackout' ? 0.95 : 1;
  const tiredMultiplier = state.stamina <= 1 && moving ? 0.72 : 1;
  const speed = ((canSprint ? 8.2 : 5.6) + (state.boostTimer > 0 ? 2.4 : 0)) * eventSpeedMultiplier * tiredMultiplier;
  if (canSprint) state.stamina -= dt * 18;
  else if (!moving) state.stamina = Math.min(100, state.stamina + dt * 16);
  else state.stamina = Math.min(100, state.stamina + dt * 1.2);
  state.boostTimer = Math.max(0, state.boostTimer - dt);
  state.distractionCooldown = Math.max(0, state.distractionCooldown - dt);
  if (moving) {
    direction.normalize();
    const next = player.position.clone().addScaledVector(direction, speed * dt);
    next.x = THREE.MathUtils.clamp(next.x, -19.5, 19.5);
    next.z = THREE.MathUtils.clamp(next.z, -26, 26);
    for (const obstacle of [...state.obstacles, ...state.eventObjects]) {
      const obstaclePoint = new THREE.Vector3(obstacle.position.x, 0, obstacle.position.z);
      if (next.distanceTo(obstaclePoint) < (obstacle.userData.radius || 1.25)) {
        next.addScaledVector(direction, -speed * dt * 1.4);
        state.stamina = Math.max(0, state.stamina - dt * 7);
      }
    }
    player.position.copy(next);
    player.rotation.y = Math.atan2(direction.x, direction.z);
  }
  state.playerMoving = moving;
  state.playerSprinting = canSprint;
  state.hidden = !canSprint && (isPlayerInShadow() || !moving && isPlayerBehindCover());
  player.userData.turboActive = state.boostTimer > 0;
  player.userData.sprinting = canSprint;
  animateCharacter(player, moving, dt, canSprint ? 13 : 9);
  emitTrailParticle(dt, moving);
}

function updatePlayer2(dt) {
  if (!state.player2.active) return;
  const direction = new THREE.Vector3();
  if (state.keys.has('ArrowUp')) direction.z -= 1;
  if (state.keys.has('ArrowDown')) direction.z += 1;
  if (state.keys.has('ArrowLeft')) direction.x -= 1;
  if (state.keys.has('ArrowRight')) direction.x += 1;
  const moving = direction.lengthSq() > 0;
  const canSprint = state.keys.has('ShiftRight') && state.player2.stamina > 4 && moving;
  const eventSpeedMultiplier = state.activeEvent?.type === 'rain' ? 0.88 : state.activeEvent?.type === 'blackout' ? 0.95 : 1;
  const tiredMultiplier = state.player2.stamina <= 1 && moving ? 0.72 : 1;
  const speed = ((canSprint ? 8 : 5.4) + (state.player2.boostTimer > 0 ? 2.3 : 0)) * eventSpeedMultiplier * tiredMultiplier;
  if (canSprint) state.player2.stamina -= dt * 18;
  else if (!moving) state.player2.stamina = Math.min(100, state.player2.stamina + dt * 16);
  else state.player2.stamina = Math.min(100, state.player2.stamina + dt * 1.2);
  state.player2.boostTimer = Math.max(0, state.player2.boostTimer - dt);
  state.player2.distractionCooldown = Math.max(0, state.player2.distractionCooldown - dt);
  if (moving) {
    direction.normalize();
    const next = player2.position.clone().addScaledVector(direction, speed * dt);
    next.x = THREE.MathUtils.clamp(next.x, -19.5, 19.5);
    next.z = THREE.MathUtils.clamp(next.z, -26, 26);
    for (const obstacle of [...state.obstacles, ...state.eventObjects]) {
      const obstaclePoint = new THREE.Vector3(obstacle.position.x, 0, obstacle.position.z);
      if (next.distanceTo(obstaclePoint) < (obstacle.userData.radius || 1.25)) {
        next.addScaledVector(direction, -speed * dt * 1.4);
        state.player2.stamina = Math.max(0, state.player2.stamina - dt * 7);
      }
    }
    player2.position.copy(next);
    player2.rotation.y = Math.atan2(direction.x, direction.z);
  }
  state.player2.moving = moving;
  state.player2.sprinting = canSprint;
  state.player2.hidden = !canSprint && (isActorInShadow(player2) || !moving && isActorBehindCover(player2));
  player2.userData.turboActive = state.player2.boostTimer > 0;
  animateCharacter(player2, moving, dt, canSprint ? 13 : 9);
  emitTrailParticle(dt, moving, player2, state.player2.boostTimer > 0);
}

function updateEnemies(dt) {
  let nearest = Infinity;
  for (const enemy of state.enemies) {
    const toPlayer = player.position.clone().sub(enemy.position);
    const distance = toPlayer.length();
    nearest = Math.min(nearest, distance);
    const behavior = enemy.userData.behavior;
    const alertRadius = behavior === 'patrol' ? 13 + state.level : behavior === 'ambush' ? 15 + state.cupsCollected : 18 + state.level * 2;
    const chase = distance < alertRadius || state.exitOpen && behavior !== 'patrol';
    const patrolTarget = enemy.userData.home.clone().add(new THREE.Vector3(Math.sin(performance.now() * 0.001 + enemy.userData.patrolSeed) * 5, 0, Math.cos(performance.now() * 0.0012 + enemy.userData.patrolSeed) * 5));
    const target = chase ? player.position : behavior === 'patrol' ? patrolTarget : enemy.userData.home;
    const move = target.clone().sub(enemy.position);
    let moving = false;
    if (move.lengthSq() > 0.04) {
      move.normalize();
      const speed = enemy.userData.speed + state.level * 0.22 + (state.exitOpen ? 0.55 : 0);
      enemy.position.addScaledVector(move, speed * dt);
      enemy.rotation.y = Math.atan2(move.x, move.z);
      moving = true;
    }
    animateCharacter(enemy, moving, dt, enemy.userData.kind === 'referee' ? 11 : 9);
    if (distance < 1.15) {
      if (state.shield) {
        state.shield = false;
        state.capturesAvoided += 1;
        triggerHitReaction(player, enemy.position.clone(), false);
        enemy.position.copy(enemy.userData.home);
        showMessage('Escudo usado', 'Você escapou do carrinho. Continue correndo.');
        flashFeedback('shield');
        playSound('power');
      } else {
        endGame(false);
      }
    }
  }
  if (nearest < 3.4) {
    state.nearDangerTimer -= dt;
    if (state.nearDangerTimer <= 0) {
      state.nearDangerTimer = 0.8;
      flashFeedback('danger');
      playSound('danger');
    }
  }
}

function stealKeyFromReferee(enemy) {
  if (!enemy.userData.hasKey) return;
  enemy.userData.hasKey = false;
  enemy.userData.stun = 2.6;
  enemy.userData.keyVisual?.parent?.remove(enemy.userData.keyVisual);
  state.cupsCollected = 1;
  showMessage('Chave roubada', 'A saida foi destravada. Fuja antes que o juiz volte.');
  showNarration('O arbitro percebeu a invasao!', true);
  addReplayEvent('Chave roubada do juiz');
  emitCollectRewardFeedback(enemy.position.clone(), getNearestPlayerInfo(enemy.position).object, 'key');
  openExitGate();
}

function useDistraction(actor = player) {
  const actorCooldown = actor === player2 ? state.player2.distractionCooldown : state.distractionCooldown;
  if (!state.running || state.paused || actorCooldown > 0) return;
  state.distraction?.parent?.remove(state.distraction);
  const forward = new THREE.Vector3(Math.sin(actor.rotation.y), 0, Math.cos(actor.rotation.y));
  const position = actor.position.clone().addScaledVector(forward, 4.2);
  position.x = THREE.MathUtils.clamp(position.x, -18.5, 18.5);
  position.z = THREE.MathUtils.clamp(position.z, -24.5, 24.5);
  state.distraction = createDistraction(position);
  scene.add(state.distraction);
  if (actor === player2) state.player2.distractionCooldown = 10;
  else state.distractionCooldown = 10;
  showMessage('Distracao lancada', 'Inimigos proximos vao investigar o barulho.');
  addReplayEvent(actor === player2 ? 'P2 lancou uma distracao' : 'P1 lancou uma distracao');
  playSound('power');
}

function updateDistraction(dt) {
  if (!state.distraction) return;
  state.distraction.userData.timer -= dt;
  state.distraction.rotation.y += dt * 2.5;
  state.distraction.userData.marker.material.opacity = Math.max(0, state.distraction.userData.timer / 5.5);
  if (state.distraction.userData.timer <= 0) {
    state.distraction.parent?.remove(state.distraction);
    state.distraction = null;
  }
}

function isBossRole(role) {
  return role === 'boss' || role === 'rivalBoss';
}

function getEnemyTargetV2(enemy, distance, targetActor = player) {
  const role = enemy.userData.role || enemy.userData.behavior;
  const time = performance.now() * 0.001;
  const patrolTarget = enemy.userData.home.clone().add(new THREE.Vector3(
    Math.sin(time + enemy.userData.patrolSeed) * 5,
    0,
    Math.cos(time * 1.15 + enemy.userData.patrolSeed) * 5
  ));
  const alertRadius = enemy.userData.alertRadius || 12;
  const distractionDistance = state.distraction ? enemy.position.distanceTo(state.distraction.position) : Infinity;
  if (state.distraction && state.distraction.userData.timer > 0 && distractionDistance < 16 && role !== 'goalkeeper' && !isBossRole(role)) {
    enemy.userData.aiState = 'investigacao';
    return state.distraction.position;
  }
  if (isActorHidden(targetActor) && distance > 4.2 && !isBossRole(role)) {
    if (enemy.userData.aiState === 'perseguicao') {
      enemy.userData.searchTimer = 3;
      enemy.userData.lastKnown = targetActor.position.clone();
    }
    if (enemy.userData.searchTimer > 0) {
      enemy.userData.aiState = 'busca';
      return enemy.userData.lastKnown || patrolTarget;
    }
    enemy.userData.aiState = distance < alertRadius ? 'suspeita' : 'patrulha';
    return distance < alertRadius ? (enemy.userData.lastKnown || patrolTarget) : patrolTarget;
  }
  enemy.userData.aiState = distance < alertRadius || state.exitOpen ? 'perseguicao' : 'patrulha';
  if (enemy.userData.aiState === 'perseguicao') enemy.userData.lastKnown = targetActor.position.clone();

  if (role === 'keyReferee') {
    if (distance < enemy.userData.alertRadius) {
      const away = enemy.position.clone().sub(targetActor.position).setY(0);
      if (away.lengthSq() < 0.01) away.set(1, 0, 0);
      return enemy.position.clone().addScaledVector(away.normalize(), 6);
    }
    return patrolTarget;
  }

  if (role === 'refereeBlocker') {
    const blockTarget = enemy.userData.home.clone().add(new THREE.Vector3(
      Math.sin(time * 1.3 + enemy.userData.patrolSeed) * 2.5,
      0,
      Math.cos(time * 1.1 + enemy.userData.patrolSeed) * 2.5
    ));
    return distance < enemy.userData.alertRadius ? targetActor.position : blockTarget;
  }

  if (role === 'goalkeeper') {
    const portal = state.exitGate?.position || new THREE.Vector3(0, 0, -23.4);
    const keeperTarget = portal.clone().add(new THREE.Vector3(Math.sin(time * 1.6) * 5.2, 0, 2.6 + Math.cos(time) * 1.2));
    return distance < enemy.userData.alertRadius || state.exitOpen ? targetActor.position : keeperTarget;
  }

  if (isBossRole(role)) {
    if (!state.exitOpen && state.protectedCup && distance > 4) return state.protectedCup.position;
    return targetActor.position;
  }

  if (role === 'bruiser') {
    return distance < enemy.userData.alertRadius || state.exitOpen ? targetActor.position : enemy.userData.home;
  }

  return distance < enemy.userData.alertRadius || state.exitOpen ? targetActor.position : patrolTarget;
}

function updateEnemiesV2(dt) {
  let nearest = Infinity;
  for (const enemy of state.enemies) {
    const focus = getNearestPlayerInfo(enemy.position);
    const distance = focus.distance;
    nearest = Math.min(nearest, distance);
    enemy.userData.searchTimer = Math.max(0, (enemy.userData.searchTimer || 0) - dt);

    if (state.missionType === 'stealKey' && enemy.userData.hasKey && distance < 1.55) {
      stealKeyFromReferee(enemy);
      continue;
    }

    if (enemy.userData.stun > 0) {
      enemy.userData.stun -= dt;
      animateCharacter(enemy, false, dt, 4);
      continue;
    }

    const target = getEnemyTargetV2(enemy, distance, focus.object);
    const move = target.clone().sub(enemy.position);
    let moving = false;
    if (move.lengthSq() > 0.04) {
      move.normalize();
      let speed = enemy.userData.baseSpeed + Math.max(0, state.level - 1) * 0.12 + (state.exitOpen ? 0.4 : 0);
      if (state.activeEvent?.type === 'extraTime') speed *= 1.22;
      if (state.activeEvent?.type === 'rain') speed *= 0.92;
      if (state.activeEvent?.type === 'blackout') speed *= 0.86;
      enemy.position.addScaledVector(move, speed * dt);
      enemy.position.x = THREE.MathUtils.clamp(enemy.position.x, -20, 20);
      enemy.position.z = THREE.MathUtils.clamp(enemy.position.z, -26, 26);
      enemy.rotation.y = Math.atan2(move.x, move.z);
      moving = true;
    }
    animateCharacter(enemy, moving, dt, enemy.userData.kind === 'referee' ? 11 : 9);
    if (enemy.userData.roleMarker) {
      const aiColors = {
        patrulha: 0x38bdf8,
        suspeita: 0xfacc15,
        investigacao: 0xa78bfa,
        busca: 0xf97316,
        perseguicao: 0xef4444
      };
      const markerColor = aiColors[enemy.userData.aiState] || enemy.userData.markerBaseColor || 0xf8fafc;
      const pulse = 1 + Math.sin(performance.now() * 0.007 + enemy.userData.patrolSeed) * 0.12;
      enemy.userData.roleMarker.material.color.setHex(markerColor);
      enemy.userData.roleMarker.scale.setScalar(enemy.userData.aiState === 'perseguicao' ? 1.18 + pulse * 0.08 : 1);
      if (enemy.userData.groundMarker) {
        enemy.userData.groundMarker.material.color.setHex(markerColor);
        enemy.userData.groundMarker.material.opacity = enemy.userData.aiState === 'perseguicao' ? 0.72 : 0.42;
        enemy.userData.groundMarker.scale.setScalar(enemy.userData.aiState === 'perseguicao' ? 1.08 + pulse * 0.18 : 0.92 + pulse * 0.08);
      }
      if (enemy.userData.roleIcon) {
        enemy.userData.roleIcon.material.color.setHex(markerColor);
        enemy.userData.roleIcon.scale.setScalar(enemy.userData.aiState === 'perseguicao' ? 0.58 : 0.46);
      }
    }

    const captureRadius = enemy.userData.collisionRadius || 1.15;
    const capture = getNearestPlayerInfo(enemy.position);
    if (capture.distance < captureRadius) {
      if (hasActorShield(capture.object)) {
        consumeActorShield(capture.object);
        state.capturesAvoided += 1;
        state.shieldUsesThisLevel += 1;
        enemy.userData.stun = isBossRole(enemy.userData.role) ? 1.4 : 2.8;
        triggerHitReaction(capture.object, enemy.position.clone(), false);
        enemy.position.copy(enemy.userData.home);
        showMessage('Escudo usado', 'Voce escapou da captura. Continue correndo.');
        const actorLabel = capture.object === player2 ? 'P2' : 'P1';
        const replayText = enemy.userData.isRecurringRival ? `${actorLabel} escapou de ${recurringRival.name}` : `${actorLabel} evitou uma captura`;
        state.lastCaptureAvoided = replayText;
        addReplayEvent(replayText);
        showNarration(enemy.userData.isRecurringRival ? `${recurringRival.name} perdeu a dividida!` : 'Ultima captura evitada!', enemy.userData.isRecurringRival);
        flashFeedback('shield');
        playSound('power');
      } else {
        endGame(false);
      }
    }
  }
  if (nearest < 3.4) {
    state.nearDangerTimer -= dt;
    if (state.nearDangerTimer <= 0) {
      state.nearDangerTimer = 0.8;
      flashFeedback('danger');
      playSound('danger');
      reactCrowd('danger');
      if (nearest < 2.25 && (state.stamina < 24 || state.cupsCollected >= Math.max(1, state.cupsNeeded - 1))) triggerHeroicMoment('danger');
      if (state.narratorCooldown <= 0) {
        showNarration('O estadio inteiro esta contra voce!');
        state.narratorCooldown = 8;
      }
    }
  }
}

function updateObjectives(dt) {
  for (let i = state.cups.length - 1; i >= 0; i -= 1) {
    const item = state.cups[i];
    item.rotation.y += dt * (item.userData.type === 'switch' ? 0.7 : 2.2);
    item.position.y = Math.sin(performance.now() * 0.003 + i) * 0.1;
    const collector = getNearestPlayerInfo(item.position);
    if (collector.distance < 1.25 && !item.userData.active) {
      item.userData.active = true;
      state.cupsCollected += 1;
      if (item.userData.type === 'switch') {
        item.userData.lever.rotation.z = 0.45;
        item.userData.light.color.setHex(0x22c55e);
        emitCollectRewardFeedback(item.position.clone(), collector.object, 'switch');
        showMessage('Alavanca ativada', 'Continue ligando as outras para abrir a saída.');
        showNarration('Alavanca ativada. O estadio sentiu a pressao!');
        addReplayEvent(`Alavanca ${state.cupsCollected}/${state.cupsNeeded} ativada`);
      } else {
        const feedbackPosition = item.position.clone();
        item.parent.remove(item);
        state.cups.splice(i, 1);
        if (item.userData.type === 'cup') state.trophiesCollectedThisLevel += 1;
        emitCollectRewardFeedback(feedbackPosition, collector.object, item.userData.type);
        showMessage(item.userData.type === 'key' ? 'Chave coletada' : 'Taça coletada', `${state.missionLabel}: ${state.cupsCollected}/${state.cupsNeeded}`);
        if (item.userData.type === 'cup') {
          showNarration('A taca foi recuperada!');
          addReplayEvent(`Taca ${state.cupsCollected}/${state.cupsNeeded} recuperada`);
        } else {
          addReplayEvent('Chave coletada no campo');
        }
      }
      reactCrowd('good');
      if (state.cupsNeeded - state.cupsCollected === 1) triggerHeroicMoment('lastCup');
      if (state.cupsCollected >= state.cupsNeeded) {
        openExitGate();
      }
    }
  }
}

function updateProtectMission(dt) {
  if (state.missionType !== 'protect' || !state.protectedCup || state.exitOpen) return;
  state.protectedCup.rotation.y += dt * 1.4;
  state.protectedCup.position.y = Math.sin(performance.now() * 0.003) * 0.08;
  const playerNear = getActivePlayers().some((actor) => actor.position.distanceTo(state.protectedCup.position) < 5.2);
  const enemyNear = state.enemies.some((enemy) => enemy.position.distanceTo(state.protectedCup.position) < 2.7);
  const rivalNear = state.rival?.parent && state.rival.position.distanceTo(state.protectedCup.position) < 3.2;
  if (rivalNear && !state.rivalStealDone) {
    state.rivalStealDone = true;
    showNarration(`${recurringRival.name} roubou a taca por alguns segundos!`, true);
    addReplayEvent(`${recurringRival.name} tentou fugir com a taca`);
    triggerHeroicMoment('boss');
  }
  if (playerNear && !enemyNear) {
    state.protectTimer = Math.min(state.protectDuration, state.protectTimer + dt);
  } else if (enemyNear) {
    state.protectTimer = Math.max(0, state.protectTimer - dt * (rivalNear ? 1.25 : 0.75));
    if (state.messageTimer <= 0) showMessage('Defenda a taca', 'Afaste os rivais da taca para o tempo voltar a subir.');
    flashFeedback('danger');
  }
  state.cupsCollected = Math.floor(state.protectTimer);
  if (state.protectTimer >= state.protectDuration) {
    if (state.rival?.userData.role === 'rivalBoss') {
      showNarration(`Golpe final em ${recurringRival.name}!`, true);
      addReplayEvent(`Golpe final em ${recurringRival.name}`);
    }
    openExitGate();
  }
}

function updateDangerZones(dt) {
  for (const zone of state.dangerZones) {
    const pulse = 0.7 + Math.sin(performance.now() * 0.004 + zone.userData.pulse) * 0.18;
    zone.children.forEach((child) => {
      if (child.material?.opacity) child.material.opacity = child.geometry.type === 'CircleGeometry' ? 0.16 + pulse * 0.08 : 0.66 + pulse * 0.2;
    });
    const victim = getNearestPlayerInfo(zone.position);
    if (victim.distance < zone.userData.radius) {
      if (victim.object === player2) state.player2.stamina = Math.max(0, state.player2.stamina - dt * 22);
      else state.stamina = Math.max(0, state.stamina - dt * 22);
      flashFeedback('danger');
      if ((victim.object === player2 ? state.player2.stamina : state.stamina) <= 0) endGame(false);
    }
  }
}

function updatePowerUps(dt) {
  for (let i = state.powerUps.length - 1; i >= 0; i -= 1) {
    const power = state.powerUps[i];
    power.rotation.y += dt * 2.8;
    if (power.userData.outerRing) power.userData.outerRing.rotation.z -= dt * 3.6;
    power.position.y = Math.sin(performance.now() * 0.004 + i) * 0.12;
    const collector = getNearestPlayerInfo(power.position);
    if (collector.distance < 1.2) {
      power.parent.remove(power);
      state.powerUps.splice(i, 1);
      applyActorPower(collector.object, power.userData.type);
      emitGameplayBurst(power.position, power.userData.type === 'boost' ? [0x38bdf8, 0xffffff, 0xfacc15] : [0x22c55e, 0xffffff, 0x38bdf8], 20);
      if (power.userData.type === 'boost') {
        showMessage('Turbo ativado', 'Você ganhou velocidade por alguns segundos.');
        showNarration('Turbo ativado. A fuga ganhou velocidade!');
        addReplayEvent('Turbo coletado');
      } else {
        showMessage('Escudo ativado', 'A próxima captura será bloqueada.');
        showNarration('Escudo pronto. A proxima captura pode ser bloqueada!');
        addReplayEvent('Escudo coletado');
      }
      flashFeedback(power.userData.type === 'shield' ? 'shield' : 'power');
      playSound('power');
    }
  }
}

function spawnCosmeticParticle(position, color, life = 0.8, size = 0.12, velocity = new THREE.Vector3()) {
  const particleLimit = state.quality.lowPower ? 52 : 140;
  if (state.cosmeticParticles.length > particleLimit) return;
  const particle = new THREE.Mesh(
    sharedParticleGeometry,
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9 })
  );
  particle.position.copy(position);
  particle.scale.setScalar(size);
  particle.userData = { life, maxLife: life, velocity, baseSize: size, effectType: 'particle' };
  scene.add(particle);
  state.cosmeticParticles.push(particle);
}

function spawnCollectRing(position, color, life = 0.55, size = 0.85) {
  const particleLimit = state.quality.lowPower ? 52 : 140;
  if (state.cosmeticParticles.length > particleLimit) return;
  const ring = new THREE.Mesh(
    sharedCollectRingGeometry,
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.78, depthWrite: false, toneMapped: false })
  );
  ring.position.copy(position).add(new THREE.Vector3(0, 0.42, 0));
  ring.rotation.x = Math.PI / 2;
  ring.scale.setScalar(size);
  ring.userData = { life, maxLife: life, velocity: new THREE.Vector3(), baseSize: size, effectType: 'ring' };
  scene.add(ring);
  state.cosmeticParticles.push(ring);
}

function spawnFloatingText(position, text, color = '#ffd700') {
  if (state.quality.lowPower && state.cosmeticParticles.length > 44) return;
  const sprite = createFloatingTextSprite(text, color);
  sprite.position.copy(position).add(new THREE.Vector3(0, 2.45, 0));
  sprite.scale.set(2.45, 0.8, 1);
  sprite.userData = {
    ...sprite.userData,
    life: 1.05,
    maxLife: 1.05,
    velocity: new THREE.Vector3(0, 1.25, 0),
    baseScale: new THREE.Vector3(2.45, 0.8, 1),
    effectType: 'text'
  };
  scene.add(sprite);
  state.cosmeticParticles.push(sprite);
}

function emitGameplayBurst(position, colors = [0xfacc15], count = 18) {
  const burstCount = Math.min(count, state.quality.lowPower ? 6 : isMobileRuntime() ? 8 : 14);
  spawnCollectRing(position, colors[0], 0.62, 0.62);
  spawnCollectRing(position.clone().add(new THREE.Vector3(0, 0.18, 0)), colors[1] || colors[0], 0.48, 0.38);
  for (let i = 0; i < burstCount; i += 1) {
    const angle = (i / burstCount) * Math.PI * 2;
    const speed = THREE.MathUtils.randFloat(1.2, 3.8);
    const velocity = new THREE.Vector3(
      Math.cos(angle) * speed,
      THREE.MathUtils.randFloat(0.8, 2.8),
      Math.sin(angle) * speed
    );
    const offset = new THREE.Vector3(THREE.MathUtils.randFloatSpread(0.35), 0.65, THREE.MathUtils.randFloatSpread(0.35));
    spawnCosmeticParticle(position.clone().add(offset), colors[i % colors.length], THREE.MathUtils.randFloat(0.42, 0.74), THREE.MathUtils.randFloat(0.075, 0.13), velocity);
  }
}

function emitCollectRewardFeedback(position, actor, type = 'cup') {
  const isCup = type === 'cup';
  const isKey = type === 'key';
  const palette = isCup
    ? [0xfacc15, 0xffffff, 0x22c55e, 0x38bdf8]
    : isKey
      ? [0x38bdf8, 0xf8fafc, 0xfacc15]
      : [0xa78bfa, 0x22c55e, 0xfacc15];
  emitGameplayBurst(position, palette, isCup ? 30 : 20);
  spawnCollectRing(position.clone().add(new THREE.Vector3(0, 0.12, 0)), palette[0], isCup ? 0.85 : 0.62, isCup ? 1.05 : 0.74);
  spawnFloatingText(position, isCup ? 'TACA +1' : isKey ? 'CHAVE!' : 'ATIVADO!', isCup ? '#ffd700' : isKey ? '#7dd3fc' : '#86efac');
  triggerActorCelebration(actor, isCup ? 1 : 0.62);
  flashFeedback(isCup ? 'collect' : 'power');
  playSound(isCup ? 'trophy' : 'collect');
  pulseCrowdSound('good');
}

function emitTrailParticle(dt, moving, actor = player, turboActive = state.boostTimer > 0) {
  const trail = getEquippedItem('trail');
  if (!moving && !turboActive) return;
  if ((!trail || trail.id === 'trail_none') && !turboActive) return;
  actor.userData.trailCooldown = Math.max(0, (actor.userData.trailCooldown || 0) - dt);
  if (actor.userData.trailCooldown > 0) return;
  actor.userData.trailCooldown = isMobileRuntime()
    ? turboActive ? 0.06 : trail.id === 'trail_confetti' ? 0.085 : 0.12
    : turboActive ? 0.022 : trail.id === 'trail_confetti' ? 0.035 : 0.055;
  const colors = turboActive
    ? [0xfacc15, 0x38bdf8, 0xffffff]
    : trail.id === 'trail_confetti'
      ? [0xfacc15, 0x38bdf8, 0x22c55e, 0xef4444]
      : [trail.color];
  const color = colors[randomInt(0, colors.length - 1)];
  const back = new THREE.Vector3(Math.sin(actor.rotation.y), 0, Math.cos(actor.rotation.y)).multiplyScalar(turboActive ? -0.95 : -0.72);
  const position = actor.position.clone().add(back).add(new THREE.Vector3(THREE.MathUtils.randFloatSpread(0.42), 0.3, THREE.MathUtils.randFloatSpread(0.42)));
  const velocity = new THREE.Vector3(THREE.MathUtils.randFloatSpread(0.75), turboActive ? 1.0 : 0.7, THREE.MathUtils.randFloatSpread(0.75));
  spawnCosmeticParticle(position, color, turboActive ? 0.72 : 0.6, turboActive ? 0.15 : trail.id === 'trail_confetti' ? 0.09 : 0.12, velocity);
}

function triggerCelebration() {
  const celebration = getEquippedItem('celebration');
  const id = celebration?.id || 'celebration_basic';
  if (id === 'celebration_wave') {
    stadiumFans.forEach((fan, index) => {
      if (index % 3 === 0) fan.userData.phase += Math.PI;
    });
  }
  const count = id === 'celebration_fireworks' ? 58 : id === 'celebration_spin' ? 34 : id === 'celebration_wave' ? 42 : 18;
  const particleCount = state.quality.lowPower ? Math.min(count, 18) : count;
  const palette = id === 'celebration_fireworks'
    ? [0xfacc15, 0x38bdf8, 0x22c55e, 0xef4444, 0xf8fafc]
    : id === 'celebration_wave'
      ? [state.selectedTeam.colors[0], state.selectedTeam.colors[1], 0xfacc15]
      : [0xfacc15, 0xf8fafc];
  for (let i = 0; i < particleCount; i += 1) {
    const angle = (i / particleCount) * Math.PI * 2;
    const speed = id === 'celebration_spin' ? 2.8 : THREE.MathUtils.randFloat(1.4, 4.8);
    const velocity = new THREE.Vector3(Math.cos(angle) * speed, THREE.MathUtils.randFloat(1.2, 4.2), Math.sin(angle) * speed);
    const position = player.position.clone().add(new THREE.Vector3(0, 1.1, 0));
    spawnCosmeticParticle(position, palette[i % palette.length], id === 'celebration_fireworks' ? 1.3 : 1, id === 'celebration_basic' ? 0.1 : 0.13, velocity);
  }
}

function updateCosmeticParticles(dt) {
  for (let i = state.cosmeticParticles.length - 1; i >= 0; i -= 1) {
    const particle = state.cosmeticParticles[i];
    particle.userData.life -= dt;
    particle.position.addScaledVector(particle.userData.velocity, dt);
    particle.userData.velocity.y -= particle.userData.effectType === 'text' ? dt * 0.15 : dt * 2.2;
    const alpha = Math.max(0, particle.userData.life / particle.userData.maxLife);
    if (particle.userData.effectType === 'ring') {
      particle.material.opacity = alpha * 0.72;
      particle.scale.setScalar(particle.userData.baseSize * (1.1 + (1 - alpha) * 2.4));
      particle.rotation.z += dt * 2.4;
    } else if (particle.userData.effectType === 'text') {
      particle.material.opacity = alpha;
      const scaleBoost = 1 + (1 - alpha) * 0.18;
      particle.scale.set(
        particle.userData.baseScale.x * scaleBoost,
        particle.userData.baseScale.y * scaleBoost,
        particle.userData.baseScale.z
      );
    } else {
      particle.material.opacity = alpha * 0.9;
      particle.scale.setScalar(particle.userData.baseSize * (0.75 + alpha * 1.6));
    }
    if (particle.userData.life <= 0) {
      particle.parent?.remove(particle);
      particle.material.map?.dispose();
      particle.material.dispose();
      state.cosmeticParticles.splice(i, 1);
    }
  }
}

function openExitGate() {
  if (state.exitOpen) return;
  state.exitOpen = true;
  const canChooseRoute = state.level >= 2 && state.missionType !== 'tunnel' && !state.customLevelActive;
  if (canChooseRoute) {
    const fastGate = styleExitGate(createExitGate(), 0x38bdf8, 'fast', 'Portal A');
    const rewardGate = styleExitGate(createExitGate(), 0x22c55e, 'reward', 'Portal B');
    fastGate.position.copy(getProceduralExitPosition('fast'));
    rewardGate.position.copy(getProceduralExitPosition('reward'));
    rewardGate.scale.setScalar(0.92);
    state.exitGate = fastGate;
    state.exitChoices = [fastGate, rewardGate];
    state.exitChoices.forEach((gate) => scene.add(gate));

    const pressureSpots = [
      fastGate.position.clone().add(new THREE.Vector3(-4, 0, 4)),
      fastGate.position.clone().add(new THREE.Vector3(4, 0, 5))
    ];
    pressureSpots.slice(0, Math.min(2, state.level - 1)).forEach((spot, index) => {
      const enemy = spawnEnemyRole(index === 0 ? 'marker' : 'goalkeeper', THREE.MathUtils.clamp(spot.x, -18, 18), THREE.MathUtils.clamp(spot.z, -22, -12), state.enemies.length + index + 1);
      enemy.userData.home.copy(enemy.position);
      enemy.userData.alertRadius += 2;
    });
  } else {
    state.exitGate = state.missionType === 'tunnel' ? createTunnelGate() : createExitGate();
    state.exitGate.position.copy(getProceduralExitPosition('main'));
    scene.add(state.exitGate);
  }
  const title = state.missionType === 'tunnel' ? 'Tunel encontrado' : canChooseRoute ? 'Escolha sua rota' : 'Saida aberta';
  const copy = state.missionType === 'tunnel'
    ? 'Entre no tunel azul antes dos rivais fecharem o caminho.'
    : canChooseRoute
      ? 'Portal azul: rapido e perigoso. Portal verde: rota maior com bonus de moedas.'
      : 'Corra ate o portal dourado no fundo do campo.';
  showMessage(title, copy);
  if (state.running) {
    addReplayEvent(state.missionType === 'tunnel' ? 'Tunel de fuga aberto' : canChooseRoute ? 'Dois portais de classificacao abriram' : 'Portal de classificacao aberto');
    showNarration(`${state.selectedTeam.name} esta a segundos da classificacao!`, true);
  }
  flashFeedback('power');
  playSound('portal');
}

function completeThroughExit(gate) {
  const exitKind = gate.userData.exitKind || (state.missionType === 'tunnel' ? 'tunnel' : 'main');
  state.selectedExitChoice = exitKind;
  if (exitKind === 'reward') {
    state.choiceRewardBonus = 45 + state.level * 10;
    addReplayEvent(`Escolheu o Portal B e ganhou +${state.choiceRewardBonus} moedas`);
  } else if (exitKind === 'fast') {
    addReplayEvent('Escolheu o Portal A sob pressao');
  } else {
    addReplayEvent(state.missionType === 'tunnel' ? 'Escapou pelo tunel' : 'Entrou no portal');
  }
  unlockLevel(state.level + 1);
  showLevelComplete();
}

function updateExitGate(dt) {
  const gates = state.exitChoices.length ? state.exitChoices : [state.exitGate].filter(Boolean);
  if (!gates.length) return;
  for (const gate of gates) {
    gate.rotation.y += dt * 1.5;
    gate.position.y = Math.sin(performance.now() * 0.003 + (gate.userData.exitKind === 'reward' ? 1.4 : 0)) * 0.08;
    if (getNearestPlayerInfo(gate.position).distance < 2.1) {
      completeThroughExit(gate);
      break;
    }
  }
}

function restoreLighting() {
  sun.intensity = 1.18;
  hemisphere.intensity = 0.42;
  stadiumPointLights.forEach((light) => {
    light.intensity = light.userData.baseIntensity;
  });
  stadiumSpotLights.forEach((light) => {
    light.intensity = light.userData.baseIntensity;
  });
  applySceneQuality();
}

function endActiveEvent() {
  if (state.activeEvent?.spawnedEnemy) {
    const spawned = state.activeEvent.spawnedEnemy;
    spawned.parent?.remove(spawned);
    state.enemies = state.enemies.filter((enemy) => enemy !== spawned);
  }
  if (state.activeEvent?.type === 'blackout') restoreLighting();
  state.eventObjects.forEach((object) => object.parent?.remove(object));
  state.eventObjects = [];
  state.rainSystem?.parent?.remove(state.rainSystem);
  state.rainSystem = null;
  state.activeEvent = null;
}

function startRainEvent() {
  state.activeEvent = { type: 'rain', duration: 11 };
  state.rainSystem = createRainSystem();
  scene.add(state.rainSystem);
  showMessage('Chuva', 'O campo ficou pesado. Controle melhor a arrancada.');
  showNarration('Chuva forte no estadio. Cada arrancada ficou mais cara!');
  addReplayEvent('Chuva mudou o ritmo da partida');
  playSound('whistle');
}

function startCrowdInvasionEvent() {
  state.activeEvent = { type: 'crowdInvasion', duration: 10 };
  for (let i = 0; i < 7; i += 1) {
    const invader = createCrowdInvader(i);
    scene.add(invader);
    state.eventObjects.push(invader);
  }
  showMessage('Torcida invadiu', 'Desvie dos torcedores cruzando o campo.');
  showNarration('O arbitro percebeu a invasao!', true);
  addReplayEvent('Torcida invadiu o gramado');
  playSound('danger');
}

function startBlackoutEvent() {
  state.activeEvent = { type: 'blackout', duration: 8 };
  sun.intensity = 0.35;
  hemisphere.intensity = 0.2;
  stadiumPointLights.forEach((light) => {
    light.intensity = 5;
  });
  stadiumSpotLights.forEach((light) => {
    light.intensity = 3.5;
  });
  showMessage('Apagao parcial', 'Parte dos refletores caiu. Use o mini-mapa.');
  showNarration('O estadio inteiro esta contra voce!', true);
  addReplayEvent('Apagao parcial no estadio');
  playSound('danger');
}

function startRedCardEvent() {
  const candidates = state.enemies.filter((enemy) => !isBossRole(enemy.userData.role) && !enemy.userData.hasKey);
  const enemy = candidates[randomInt(0, Math.max(0, candidates.length - 1))];
  if (enemy) {
    enemy.userData.stun = 5.5;
    showMessage('Cartao vermelho', 'Um rival ficou paralisado por alguns segundos.');
    showNarration('Cartao vermelho! Uma brecha apareceu!');
    addReplayEvent('Cartao vermelho abriu espaco');
    flashFeedback('power');
    playSound('whistle');
  }
}

function startExtraTimeEvent() {
  state.activeEvent = { type: 'extraTime', duration: 9 };
  const side = randomInt(0, 1) ? -1 : 1;
  state.activeEvent.spawnedEnemy = spawnEnemyRole('marker', side * 18, -22, state.enemies.length + 3);
  showMessage('Prorrogacao', 'Mais um marcador entrou e todos aceleraram.');
  showNarration('Prorrogacao! Os rivais subiram a marcacao!');
  addReplayEvent('Prorrogacao aumentou a pressao');
  playSound('danger');
}

function startRareEvent() {
  const rareTypes = ['alienInvasion', 'dinosaurRun', 'trophyRain', 'giantReferee'];
  const rareType = rareTypes[randomInt(0, rareTypes.length - 1)];
  state.rareEventTriggered = true;
  state.activeEvent = { type: 'rare', rareType, duration: 10 };
  if (rareType === 'alienInvasion') {
    for (let i = 0; i < 3; i += 1) {
      const ship = createAlienShip(i);
      scene.add(ship);
      state.eventObjects.push(ship);
    }
    showMessage('Evento rarissimo', 'Uma invasao alienigena iluminou o estadio.');
    showNarration('O estadio parou. Ate os rivais olharam para o ceu!', true);
    addReplayEvent('Evento raro: invasao alienigena');
    playSound('portal');
    return;
  }
  if (rareType === 'dinosaurRun') {
    const runner = createDinosaurRunner();
    scene.add(runner);
    state.eventObjects.push(runner);
    showMessage('Evento rarissimo', 'Um dinossauro cruzou o gramado. Desvie!');
    showNarration('Isso nao estava no regulamento da Copa!', true);
    addReplayEvent('Evento raro: dinossauro no gramado');
    playSound('danger');
    return;
  }
  if (rareType === 'trophyRain') {
    for (let i = 0; i < 14; i += 1) {
      const drop = createRareTrophyDrop(i);
      drop.userData.life = THREE.MathUtils.randFloat(6, 9);
      scene.add(drop);
      state.eventObjects.push(drop);
    }
    showMessage('Evento rarissimo', 'Chuva de tacas caiu no campo.');
    showNarration('A arquibancada nao acredita no que esta vendo!', true);
    addReplayEvent('Evento raro: chuva de tacas');
    playSound('win');
    return;
  }
  const giant = spawnEnemyRole('refereeBlocker', 0, -18, state.enemies.length + 10);
  giant.scale.setScalar(2.4);
  giant.userData.baseSpeed *= 0.72;
  giant.userData.speed = giant.userData.baseSpeed;
  giant.userData.collisionRadius = 2.6;
  giant.userData.alertRadius = 26;
  state.activeEvent.spawnedEnemy = giant;
  showMessage('Evento rarissimo', 'O arbitro gigante entrou para bloquear a area.');
  showNarration('O arbitro percebeu a invasao e cresceu no jogo!', true);
  addReplayEvent('Evento raro: arbitro gigante');
  playSound('danger');
}

function triggerRandomEvent() {
  if (state.level < 2 || state.activeEvent) return;
  if (!state.rareEventTriggered && Math.random() < 0.01) {
    startRareEvent();
    state.eventCooldown = THREE.MathUtils.randFloat(18, 28);
    return;
  }
  const options = state.level >= 4
    ? ['crowdInvasion', 'rain', 'blackout', 'redCard', 'extraTime']
    : state.level >= 3
      ? ['crowdInvasion', 'rain', 'redCard', 'extraTime']
      : ['rain', 'redCard'];
  const type = options[randomInt(0, options.length - 1)];
  if (type === 'rain') startRainEvent();
  else if (type === 'crowdInvasion') startCrowdInvasionEvent();
  else if (type === 'blackout') startBlackoutEvent();
  else if (type === 'redCard') startRedCardEvent();
  else startExtraTimeEvent();
  state.eventCooldown = THREE.MathUtils.randFloat(14, 22);
}

function updateRain(dt) {
  if (!state.rainSystem) return;
  const positions = state.rainSystem.geometry.attributes.position.array;
  for (let i = 0; i < state.rainSystem.userData.count; i += 1) {
    positions[i * 3 + 1] -= dt * 16;
    positions[i * 3] += dt * 1.4;
    if (positions[i * 3 + 1] < 0.2) {
      positions[i * 3] = THREE.MathUtils.randFloatSpread(48);
      positions[i * 3 + 1] = THREE.MathUtils.randFloat(10, 18);
      positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(62);
    }
  }
  state.rainSystem.geometry.attributes.position.needsUpdate = true;
}

function updateEventObjects(dt) {
  for (let i = state.eventObjects.length - 1; i >= 0; i -= 1) {
    const object = state.eventObjects[i];
    if (object.userData.gravity) {
      object.userData.velocity.y -= dt * 4.8;
      object.userData.life = Math.max(0, (object.userData.life || 0) - dt);
    }
    object.position.addScaledVector(object.userData.velocity, dt);
    object.rotation.y += dt * (object.userData.spin || 0);
    if (!object.userData.spin) object.rotation.y = Math.atan2(object.userData.velocity.x, object.userData.velocity.z);
    if (object.userData.gravity && object.position.y < 0.4) {
      object.position.y = 0.4;
      object.userData.velocity.y *= -0.22;
      object.userData.velocity.x *= 0.82;
      object.userData.velocity.z *= 0.82;
    }
    if (object.userData.life === 0 || Math.abs(object.position.x) > 25 || Math.abs(object.position.z) > 29) {
      object.parent?.remove(object);
      state.eventObjects.splice(i, 1);
    }
  }
}

function updateRandomEvents(dt) {
  if (state.level < 2) return;
  if (state.activeEvent) {
    state.activeEvent.duration -= dt;
    updateRain(dt);
    updateEventObjects(dt);
    if (state.activeEvent.duration <= 0) {
      endActiveEvent();
      state.eventCooldown = THREE.MathUtils.randFloat(13, 20);
    }
    return;
  }
  state.eventCooldown -= dt;
  if (state.eventCooldown <= 0) triggerRandomEvent();
}

function updateStadium(dt) {
  if (state.quality.lowPower) {
    state.quality.stadiumUpdateCooldown -= dt;
    if (state.quality.stadiumUpdateCooldown > 0) return;
    state.quality.stadiumUpdateCooldown = 0.14;
  }
  const time = performance.now() * 0.004;
  const fanStride = state.quality.lowPower ? 3 : 1;
  for (let i = 0; i < stadiumFans.length; i += fanStride) {
    const fan = stadiumFans[i];
    if (i % 5 !== 0) {
      fan.position.y = fan.userData.baseY + Math.sin(time * 0.65 + fan.userData.phase) * 0.025;
      continue;
    }
    fan.position.y = fan.userData.baseY + Math.sin(time + fan.userData.phase) * 0.12;
    fan.userData.leftArm.rotation.z = -0.82 + Math.sin(time * 1.4 + fan.userData.phase) * 0.18;
    fan.userData.rightArm.rotation.z = 0.82 - Math.sin(time * 1.4 + fan.userData.phase) * 0.18;
  }
  if (stadiumConfetti) {
    const positions = stadiumConfetti.geometry.attributes.position.array;
    for (let i = 0; i < stadiumConfetti.userData.count; i += 1) {
      positions[i * 3 + 1] -= dt * 0.32;
      positions[i * 3] += Math.sin(time * 0.3 + i) * dt * 0.08;
      if (positions[i * 3 + 1] < 4.8) {
        positions[i * 3 + 1] = THREE.MathUtils.randFloat(10, 14);
        positions[i * 3] = THREE.MathUtils.randFloatSpread(58);
        positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(72);
      }
    }
    stadiumConfetti.geometry.attributes.position.needsUpdate = true;
  }
  if (stadiumCrowdSparkles) {
    stadiumCrowdSparkles.material.opacity = 0.58 + Math.sin(time * 0.7) * 0.08;
  }
}

function drawMiniMap() {
  const width = minimap.width;
  const height = minimap.height;
  const mapX = (x) => ((x + 21) / 42) * width;
  const mapZ = (z) => ((z + 28) / 56) * height;
  minimapContext.clearRect(0, 0, width, height);
  minimapContext.save();
  minimapContext.beginPath();
  minimapContext.arc(width / 2, height / 2, Math.min(width, height) / 2 - 2, 0, Math.PI * 2);
  minimapContext.clip();
  const mapGradient = minimapContext.createLinearGradient(0, 0, width, height);
  mapGradient.addColorStop(0, 'rgba(2, 8, 20, 0.96)');
  mapGradient.addColorStop(0.55, 'rgba(6, 17, 38, 0.92)');
  mapGradient.addColorStop(1, 'rgba(10, 79, 255, 0.52)');
  minimapContext.fillStyle = mapGradient;
  minimapContext.fillRect(0, 0, width, height);
  minimapContext.fillStyle = 'rgba(21, 128, 61, 0.88)';
  minimapContext.fillRect(12, 12, width - 24, height - 24);
  minimapContext.strokeStyle = 'rgba(56, 189, 248, 0.22)';
  minimapContext.lineWidth = 1;
  for (let x = 24; x < width - 16; x += 24) {
    minimapContext.beginPath();
    minimapContext.moveTo(x, 12);
    minimapContext.lineTo(x, height - 12);
    minimapContext.stroke();
  }
  for (let y = 28; y < height - 12; y += 24) {
    minimapContext.beginPath();
    minimapContext.moveTo(12, y);
    minimapContext.lineTo(width - 12, y);
    minimapContext.stroke();
  }
  minimapContext.strokeStyle = 'rgba(248, 250, 252, 0.82)';
  minimapContext.lineWidth = 2;
  minimapContext.strokeRect(20, 14, width - 40, height - 28);
  minimapContext.beginPath();
  minimapContext.moveTo(20, height / 2);
  minimapContext.lineTo(width - 20, height / 2);
  minimapContext.stroke();
  minimapContext.fillStyle = '#ffffff';
  minimapContext.font = '1000 15px Arial, sans-serif';
  minimapContext.textAlign = 'center';
  minimapContext.fillText('N', width / 2, 18);

  function dot(object, color, radius = 4) {
    minimapContext.shadowColor = color;
    minimapContext.shadowBlur = 8;
    minimapContext.fillStyle = color;
    minimapContext.beginPath();
    minimapContext.arc(mapX(object.position.x), mapZ(object.position.z), radius, 0, Math.PI * 2);
    minimapContext.fill();
    minimapContext.shadowBlur = 0;
  }

  function zone(object, color) {
    const radius = (object.userData.radius / 42) * width;
    minimapContext.strokeStyle = color;
    minimapContext.lineWidth = 1.5;
    minimapContext.beginPath();
    minimapContext.arc(mapX(object.position.x), mapZ(object.position.z), radius, 0, Math.PI * 2);
    minimapContext.stroke();
  }

  state.obstacles.forEach((object) => dot(object, '#f97316', 2.5));
  state.dangerZones.forEach((object) => zone(object, '#ef4444'));
  state.shadowZones.forEach((object) => zone(object, '#38bdf8'));
  if (state.distraction) dot(state.distraction, '#facc15', 4.2);
  state.eventObjects.forEach((object) => dot(object, '#22c55e', 2.8));
  state.cups.forEach((object) => {
    if (!object.userData.active) dot(object, state.missionType === 'stealKey' ? '#38bdf8' : state.missionType === 'switch' ? '#a78bfa' : '#facc15', 3.5);
  });
  if (state.protectedCup) dot(state.protectedCup, '#facc15', 5.2);
  if (state.keyHolder?.userData.hasKey) dot(state.keyHolder, '#38bdf8', 5);
  state.powerUps.forEach((object) => dot(object, object.userData.type === 'boost' ? '#38bdf8' : '#22c55e', 3.2));
  const roleColors = {
    marker: '#ef4444',
    refereeBlocker: '#facc15',
    goalkeeper: '#38bdf8',
    bruiser: '#a78bfa',
    keyReferee: '#22d3ee',
    boss: '#dc2626'
  };
  state.enemies.forEach((object) => dot(object, roleColors[object.userData.role] || (object.userData.kind === 'referee' ? '#f8fafc' : '#ef4444'), object.userData.role === 'boss' ? 4.8 : 3.2));
  if (state.exitChoices.length) {
    state.exitChoices.forEach((gate) => dot(gate, gate.userData.exitKind === 'reward' ? '#22c55e' : '#38bdf8', 5));
  } else if (state.exitGate) dot(state.exitGate, state.missionType === 'tunnel' ? '#38bdf8' : '#fde047', 5);
  dot(player, '#22c55e', 5);
  if (state.player2.active) dot(player2, '#38bdf8', 5);
  minimapContext.restore();
}

function updateTutorial(dt) {
  if (state.level !== 1 || state.exitOpen) return;
  state.tutorialTimer += dt;
  const steps = [
    { at: 1.2, title: 'Movimento', body: 'Use WASD ou as setas para correr pelo campo.' },
    { at: 5.2, title: 'Arrancada', body: 'Segure Shift para correr, mas cuide do fôlego.' },
    { at: 9.5, title: 'Objetivo', body: 'Complete o objetivo da fase para abrir a saída dourada.' },
    { at: 14, title: 'Bônus', body: 'Pegue turbo e escudo para escapar dos rivais.' }
  ];
  const next = steps[state.tutorialStep];
  if (next && state.tutorialTimer >= next.at) {
    showMessage(next.title, next.body);
    state.tutorialStep += 1;
  }
}

function getSafeCameraPosition(target) {
  const cinematicLean = Math.sin(player.rotation.y) * 1.75;
  const offset = new THREE.Vector3(THREE.MathUtils.clamp(cinematicLean, -1.75, 1.75), 6.45, 9.55);
  const desired = target.clone().add(offset);
  desired.x = THREE.MathUtils.clamp(desired.x, -18.2, 18.2);
  desired.z = THREE.MathUtils.clamp(desired.z, -23.5, 24.8);
  desired.y = THREE.MathUtils.clamp(desired.y, 5.75, 7.25);
  return desired;
}

function updateCamera(immediate = false) {
  const target = new THREE.Vector3(player.position.x, 1.25, player.position.z);
  const desired = getSafeCameraPosition(target);
  if (immediate) camera.position.copy(desired);
  else camera.position.lerp(desired, state.heroicTimer > 0 ? 0.12 : 0.09);
  camera.lookAt(target.x, target.y + 0.86, target.z - 2.15);
}

function resize() {
  const { innerWidth, innerHeight } = window;
  applyRuntimeQuality();
  applySceneQuality();
  mobileSystemActions?.classList.toggle('hidden', !(state.running && isMobileRuntime()));
  renderer.setSize(innerWidth, innerHeight, false);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
}

function animate() {
  requestAnimationFrame(animate);
  const frameDt = Math.min(0.033, state.clock.getDelta());
  updateCutscene(frameDt);
  updateHeroicMoment(frameDt);
  const dt = state.heroicTimer > 0 ? frameDt * 0.48 : frameDt;
  if (state.running && !state.paused && state.cutsceneTimer <= 0) {
    updatePlayer(dt);
    updatePlayer2(dt);
    updateEnemiesV2(dt);
    updateObjectives(dt);
    updateProtectMission(dt);
    updatePowerUps(dt);
    updateDangerZones(dt);
    updateExitGate(dt);
    updateRandomEvents(dt);
    updateDistraction(dt);
    updateStadium(dt);
    updateTutorial(dt);
    updateCamera();
    state.minimapCooldown -= frameDt;
    if (state.minimapCooldown <= 0) {
      state.minimapCooldown = isMobileRuntime() ? 0.24 : 0.12;
      drawMiniMap();
    }
    updateHud();
    if (state.messageTimer > 0) {
      state.messageTimer -= frameDt;
      if (state.messageTimer <= 0) message.classList.add('hidden');
    }
  }
  updateNarrator(frameDt);
  updateCosmeticParticles(frameDt);
  renderer.render(scene, camera);
}

populateTeams();
renderLevelSelect();
renderAchievements();
renderDailyChallenges();
renderRanking();
renderShop();
updateProfileUi();
resize();
startLevel(1);
hud.classList.add('hidden');
abilityDock?.classList.add('hidden');
updateInstallButtons();
if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => null);
  });
}
if (new URLSearchParams(window.location.search).get('play') === '1') {
  state.selectedLevel = Math.min(state.unlockedLevel, 1);
  state.pendingMode = 'normal';
  state.customLevelActive = false;
  showScreen(teamScreen);
  window.history.replaceState({}, document.title, window.location.pathname);
}
window.addEventListener('resize', resize);
mobileRuntimeQuery.addEventListener?.('change', resize);
window.addEventListener('orientationchange', () => setTimeout(resize, 120));
window.addEventListener('keydown', (event) => {
  if (event.code === 'KeyP' || event.code === 'Escape') {
    event.preventDefault();
    togglePause();
    return;
  }
  if (event.code === 'KeyE') {
    event.preventDefault();
    useDistraction();
    return;
  }
  if (event.code === 'Enter' && state.player2.active) {
    event.preventDefault();
    useDistraction(player2);
    return;
  }
  if (!state.paused) state.keys.add(event.code);
});
window.addEventListener('keyup', (event) => state.keys.delete(event.code));
touchJoystick?.addEventListener('pointerdown', (event) => {
  if (!state.running || state.paused) return;
  event.preventDefault();
  state.touch.joystickPointerId = event.pointerId;
  touchJoystick.setPointerCapture?.(event.pointerId);
  updateJoystickFromPointer(event);
}, { passive: false });
touchJoystick?.addEventListener('pointermove', (event) => {
  if (state.touch.joystickPointerId !== event.pointerId) return;
  event.preventDefault();
  updateJoystickFromPointer(event);
}, { passive: false });
['pointerup', 'pointercancel', 'lostpointercapture'].forEach((eventName) => {
  touchJoystick?.addEventListener(eventName, (event) => {
    if (eventName !== 'lostpointercapture' && state.touch.joystickPointerId !== event.pointerId) return;
    event.preventDefault?.();
    releaseJoystick();
  }, { passive: false });
});
touchTurboButton?.addEventListener('pointerdown', (event) => {
  if (!state.running || state.paused) return;
  event.preventDefault();
  ensureAudio();
  setTouchSprint(true);
}, { passive: false });
['pointerup', 'pointercancel', 'pointerleave'].forEach((eventName) => {
  touchTurboButton?.addEventListener(eventName, (event) => {
    event.preventDefault?.();
    setTouchSprint(false);
  }, { passive: false });
});
touchShieldButton?.addEventListener('pointerdown', (event) => {
  if (!state.running || state.paused) return;
  event.preventDefault();
  ensureAudio();
  touchShieldButton.classList.add('is-pressed');
  useDistraction();
  setTimeout(() => touchShieldButton?.classList.remove('is-pressed'), 140);
}, { passive: false });
touchMapButton?.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  toggleTouchMap();
}, { passive: false });
fullscreenButton?.addEventListener('click', requestFullscreenMode);
menuFullscreenButton?.addEventListener('click', requestFullscreenMode);
installAppButton?.addEventListener('click', requestAppInstall);
menuInstallButton?.addEventListener('click', requestAppInstall);
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  updateInstallButtons();
});
window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  updateInstallButtons();
});
window.matchMedia('(display-mode: standalone)').addEventListener?.('change', updateInstallButtons);
mobileRuntimeQuery.addEventListener?.('change', updateInstallButtons);
playButton.addEventListener('click', () => {
  state.selectedLevel = 1;
  state.pendingMode = 'normal';
  state.customLevelActive = false;
  showScreen(teamScreen);
});
howButton.addEventListener('click', () => showScreen(howScreen));
levelsButton.addEventListener('click', () => {
  state.pendingMode = 'normal';
  state.customLevelActive = false;
  renderLevelSelect();
  showScreen(levelScreen);
});
dailyButton.addEventListener('click', () => {
  renderDailyChallenges();
  showScreen(dailyScreen);
});
rankingButton.addEventListener('click', () => {
  renderRanking();
  showScreen(rankingScreen);
});
editorButton.addEventListener('click', () => {
  loadEditorFromProfile();
  showScreen(editorScreen);
});
speedrunButton.addEventListener('click', () => {
  state.pendingMode = 'speedrun';
  state.customLevelActive = false;
  state.selectedLevel = 1;
  showScreen(teamScreen);
});
coopButton.addEventListener('click', () => {
  state.pendingMode = 'coop';
  state.customLevelActive = false;
  state.selectedLevel = 1;
  showScreen(teamScreen);
});
achievementsButton.addEventListener('click', () => {
  renderAchievements();
  showScreen(achievementsScreen);
});
shopButton.addEventListener('click', () => {
  renderShop();
  updateProfileUi();
  showScreen(shopScreen);
});
document.querySelectorAll('.shop-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    currentShopCategory = tab.dataset.shopCategory;
    renderShop();
  });
});
howBackButton.addEventListener('click', () => showScreen(menuScreen));
levelBackButton.addEventListener('click', () => showScreen(menuScreen));
achievementsBackButton.addEventListener('click', () => showScreen(menuScreen));
dailyBackButton.addEventListener('click', () => showScreen(menuScreen));
rankingBackButton.addEventListener('click', () => showScreen(menuScreen));
editorBackButton.addEventListener('click', () => showScreen(menuScreen));
editorSaveButton.addEventListener('click', saveEditorLevel);
editorPlayButton.addEventListener('click', () => {
  saveEditorLevel();
  state.pendingMode = 'normal';
  state.customLevelActive = true;
  state.selectedLevel = 1;
  showScreen(teamScreen);
});
shopBackButton.addEventListener('click', () => showScreen(menuScreen));
settingsButton?.addEventListener('click', () => showScreen(howScreen));
profileButton?.addEventListener('click', () => {
  renderAchievements();
  showScreen(achievementsScreen);
});
dailyRewardButton?.addEventListener('click', () => {
  if (!canClaimDailyReward()) return;
  localStorage.setItem(getDailyRewardKey(), 'claimed');
  profile.coins += 100;
  saveProfile();
  updateProfileUi();
  playSound('collect');
});
startButton.addEventListener('click', () => beginGame(state.selectedLevel));
pauseButton.addEventListener('click', togglePause);
resumeButton.addEventListener('click', () => setPaused(false));
pauseMenuButton.addEventListener('click', () => {
  state.running = false;
  state.paused = false;
  state.keys.clear();
  state.mode = 'normal';
  state.pendingMode = 'normal';
  state.customLevelActive = false;
  state.speedrunStartTime = 0;
  minimap.classList.add('hidden');
  abilityDock?.classList.add('hidden');
  setTouchControlsVisible(false);
  stopCrowdSound();
  renderLevelSelect();
  showScreen(menuScreen);
});
nextLevelButton.addEventListener('click', () => {
  if (state.pendingNextLevel > 5) {
    state.mode = 'normal';
    state.pendingMode = 'normal';
    state.customLevelActive = false;
    state.speedrunStartTime = 0;
    showScreen(menuScreen);
    return;
  }
  ensureAudio();
  startCrowdSound();
  levelCompleteScreen.classList.add('hidden');
  hud.classList.remove('hidden');
  pauseButton.classList.remove('hidden');
  minimap.classList.remove('hidden');
  abilityDock?.classList.remove('hidden');
  setTouchControlsVisible(true);
  state.touch.mapVisible = true;
  touchMapButton?.classList.add('is-pressed');
  app.classList.add('game-live');
  state.running = true;
  state.paused = false;
  updatePauseButtonLabel();
  state.clock.getDelta();
  startLevel(state.pendingNextLevel);
  const story = getStoryChapter(state.pendingNextLevel);
  const stageName = state.customLevelActive ? 'Fase criada' : getStageName(state.pendingNextLevel);
  showMessage(`${stageName}: ${story.title}`, state.customLevelActive ? getMission(state.pendingNextLevel).intro : story.intro);
  if (!state.customLevelActive) {
    showNarration(story.intro, true);
    addReplayEvent(`${stageName}: ${story.title}`);
  }
  showEntranceCutscene(state.pendingNextLevel);
  playSound('whistle');
});
resultMenuButton.addEventListener('click', () => {
  state.keys.clear();
  state.mode = 'normal';
  state.pendingMode = 'normal';
  state.customLevelActive = false;
  state.speedrunStartTime = 0;
  renderLevelSelect();
  showScreen(menuScreen);
});
restartButton.addEventListener('click', () => {
  gameOverScreen.classList.add('hidden');
  renderLevelSelect();
  showScreen(menuScreen);
});

document.querySelectorAll('.home-screen button, .shop-tab').forEach((button) => {
  button.addEventListener('pointerenter', () => {
    if (audioContext) playTone(640, 0.045, 'triangle', 0.025);
  });
  button.addEventListener('click', () => {
    ensureAudio();
    playTone(860, 0.055, 'triangle', 0.035);
  });
});
animate();
