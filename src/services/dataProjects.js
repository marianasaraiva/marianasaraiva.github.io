import Pixel from '../images/pixel.png';
import Trybewarts from '../images/trybewarts.png';
import ShoppingCart from '../images/shoppingCart.png';
import SonhandoEmCordas from '../images/sonhandoEmCordas.png';
import Trivia from '../images/trivia.png';
import AppRecipe from '../images/appRecipe.png';
import TrybeWallet from '../images/trybeWallet.png';
import TalkerManager from '../images/talkerManager.png';
import Portfolio from '../images/portfolio.png';
import TechHotel from '../images/techHotel.png';
// import SolarSistem from '../images/solarSistem.png';
// import OneForAll from '../images/oneForAll.png';

export const dataProjects = [
  {
    name: 'Tech Hotel',
    image: TechHotel,
    collaborative: ['Jonatas Passos', 'Nathália Miranda'],
    tecnologies: ['html', 'css', 'javascript', 'react', 'nodejs', 'github'],
    url: "https://github.com/marianasaraiva/trybe-project-trybewarts",
    description: 'Aplicação Full Stack, simulando a reservas de hotel, consumindo API a própria!',
  },
  {
    name: 'Sonhando em Cordas',
    image: SonhandoEmCordas,
    collaborative: [],
    tecnologies: ['react', 'css', 'github'],
    url: "https://github.com/marianasaraiva/sonhando-em-cordas",
    description: 'Jogo educacional em React para violão direcionado à crianças!',
  },
  {
    name: 'Trybewarts',
    image: Trybewarts,
    collaborative: ['Juliana Miranda'],
    tecnologies: ['html', 'css', 'javascript', 'github'],
    url: "https://github.com/marianasaraiva/trybe-project-trybewarts",
    description: 'Página para desenvolver habilidades de posicionamento de elementos.',
  },
  {
    name: 'TrybeWallet',
    image: TrybeWallet,
    collaborative: [],
    tecnologies: ['react', 'redux', 'css', 'github'],
    url: "https://github.com/marianasaraiva/trybe-project-trybewallet",
    description: 'Aplicação React, simulando uma carteira de conversão de moedas.',
  },
  {
    name: 'Portfolio',
    image: Portfolio,
    collaborative: [],
    tecnologies: ['react', 'contextapi', 'hooks', 'tailwind', 'styledcomponent', 'github'],
    url: "https://github.com/marianasaraiva/tech-hotel",
    description: 'Aplicação React, utilizando styled components e tailwind CSS juntos!',
  },
  {
    name: 'Trivia',
    image: Trivia,
    collaborative: ['Alissandra Lima', 'Ruan Cunha', 'Samuel Gonçalves'],
    tecnologies: ['react', 'redux', 'css', 'github'],
    url: "https://github.com/marianasaraiva/trybe-project-trivia",
    description: 'Jogo de perguntas e respostas, consumindo API externa.',
  },
  {
    name: "Gramadma's Flavor",
    image: AppRecipe,
    collaborative: ['Airton Lopes', 'Bruno Faria', 'Renata Domingues'],
    tecnologies: ['react', 'contextapi', 'hooks', 'github'],
    url: "https://github.com/marianasaraiva/trybe-project-app-recipe",
    description: "Aplicação mobile em Front-end para os amantes da culinária!",
  },
  {
    name: 'Shopping Cart',
    image: ShoppingCart,
    collaborative: [],
    tecnologies: ['html', 'css', 'javascript', 'jest', 'github'],
    url: "https://github.com/marianasaraiva/trybe-project-shopping-cart",
    description: 'Aplicação consumindo API do mercado livre, e implementação de testes unitários.',
  },
  {
    name: 'Talker Manager',
    image: TalkerManager,
    collaborative: [],
    tecnologies: ['nodejs', 'css', 'javascript', 'github'],
    url: "https://github.com/marianasaraiva/trybe-project-talker-manager",
    description: 'Aplicação Back-end, realizando um CRUD e estruturando através de ORM.',
  },
  {
    name: 'Pixel Arts',
    image: Pixel,
    collaborative: [],
    tecnologies: ['html', 'css', 'javascript', 'github'],
    url: "https://github.com/marianasaraiva/trybe-project-pixels-art",
    description: 'Jogo de colorir em pixels. Primeiros passos no desenvolvimento web.',
  },
  // {
  //   name: 'One For All',
  //   image: OneForAll,
  //   collaborative: [],
  //   tecnologies: ['mysql', 'javascript', 'github'],
  //   url: "https://github.com/marianasaraiva/trybe-project-one-for-all ",
  //   description: 'Aplicação Back-end, realizado modelagem de dados e aplicação de querys!',
  // },
  // {
  //   name: 'Solar System',
  //   image: SolarSistem,
  //   collaborative: [],
  //   tecnologies: ['react', 'css', 'github'],
  //   url: "https://github.com/marianasaraiva/trybe-project-solar-system",
  // },
];
export const dataTechnologies = [
  {
    name: 'HTML',
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: 'CSS',
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  },
  {
    name: 'JavaScript',
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: 'GitHub',
    image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
  {
    name: 'Jest',
    image: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
  },
  {
    name: 'React',
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: 'Tailwind',
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: 'Redux',
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  },
  {
    name: 'Docker',
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  },
  {
    name: 'MySQL',
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: 'NodeJS',
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
];