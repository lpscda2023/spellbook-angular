import { ListElement } from './app/models/list-element.interface';

export const posts: ListElement[] = [
  {
    sectionName: '🛟 Angular - je veux...',
    elements: [
      {
        title: 'réagir à un event click',
        link: 'https://codesandbox.io/s/demo-jv-click-event-12rze1?file=/src/App.tsx',
        difficulty: 0,
      },
      /*{
        title: 'mettre à jour mon composant après un changement de valeur',
        link: 'https://codesandbox.io/s/demo-jv-usestate-rsc1mw',
        difficulty: 0,
      },
      {
        title: "afficher quelque chose en fonction d'une condition",
        link: 'https://codesandbox.io/s/demo-jv-conditionnal-display-u3mhy5',
        difficulty: 0,
      },
      {
        title: "afficher une liste d'éléments basée sur un tableau",
        link: 'https://codesandbox.io/s/demo-jv-display-list-map-m2j5u9?file=/src/App.tsx',
        difficulty: 0,
      },*/
    ],
  },
  /*{
    sectionName: '⚛️ React - initiation',
    elements: [
      {
        title: 'Hello World',
        link: 'https://codesandbox.io/s/demo-hello-world-t0teit',
        difficulty: 1,
      },
      {
        title: 'Add click event to button',
        link: 'https://codesandbox.io/s/demo-button-click-event-l1j2f4',
        difficulty: 1,
      },
      {
        title: 'Méthode map',
        link: 'https://codesandbox.io/s/demo-map-fruitjuice-lebmmc',
        difficulty: 1,
      },
      {
        title: 'Méthode filter',
        link: 'https://codesandbox.io/s/demo-filter-user-ow75tq',
        difficulty: 1,
      },
      {
        title: 'Récupération affichage données',
        link: 'https://codesandbox.io/s/demo-get-data-affichage-53soir',
        difficulty: 1,
      },
      {
        title: 'Barre de recherche + select',
        link: 'https://codesandbox.io/s/demo-select-search-bar-6srss8',
        difficulty: 2,
      },
      {
        title: 'Bootstrap Icon',
        link: 'https://codesandbox.io/s/demo-icon-bootstrap-coeur-70yq9t',
        difficulty: 1,
      },
      {
        title: 'Communication Multi Couche via props',
        link: 'https://codesandbox.io/s/demo-passage-props-multi-couche-8lbwj2',
        difficulty: 2,
      },
    ],
  },
  {
    sectionName: '⚛️ React - avancé',
    elements: [
      {
        title: 'Proteger ses routes (authentification)',
        link: 'https://codesandbox.io/s/demo-auth-context-super-typage-223mv6?file=/src/App.tsx',
        difficulty: 2,
      },
      {
        title: 'Context et toast - gestion centralisée',
        link: 'https://codesandbox.io/s/demo-toast-bootstrap-context-2fkvzy?file=/src/App.tsx',
        difficulty: 2,
      },
    ],
  },
  {
    sectionName: '️️⚛️ React - communication component',
    elements: [
      {
        title: 'Imbrication de composant',
        link: 'https://codesandbox.io/s/demo-component-imbrication-c7j8td',
        difficulty: 1,
      },
      {
        title: 'Communication entre composant',
        link: 'https://codesandbox.io/s/demo-component-communication-16wxrx',
        difficulty: 1,
      },
      {
        title: 'Communication enfant vers parent avec valeur',
        link: 'https://codesandbox.io/s/demo-communication-enfant-vers-parent-jwowow?file=/src/Parent.tsx',
        difficulty: 1,
      },
      {
        title: 'Communication enfant parent button',
        link: 'https://codesandbox.io/s/demo-communication-enfant-parent-button-8ngfqg',
        difficulty: 2,
      },
    ],
  },
  {
    sectionName: '⚛️ React - Hooks',
    elements: [
      {
        title: '(useEffect) Api publique météo ',
        link: 'https://codesandbox.io/s/demo-call-api-meteo-dduhed',
        difficulty: 1,
      },
      {
        title: '(useContext) Système de connexion ',
        link: 'https://codesandbox.io/s/demo-context-box80r',
        difficulty: 1,
      },
      {
        title: '(useContext) Système de connexion super typage',
        link: 'https://codesandbox.io/s/demo-auth-context-super-typage-223mv6?file=/src/App.tsx',
        difficulty: 2,
      },
      {
        title: "(useRef) Récupérer les données d'un form ",
        link: 'https://codesandbox.io/s/demo-useref-form-vl7hv4',
        difficulty: 1,
      },
    ],
  },
  {
    sectionName: '⚛️ React - formulaires',
    elements: [
      {
        title: 'Recup Dynamique value champ',
        link: 'https://codesandbox.io/s/demo-bind-form-input-to-object-6djob8',
        difficulty: 1,
      },
      {
        title: 'MàJ input Object',
        link: 'https://codesandbox.io/s/demo-update-objet-property-input-lkd7xr',
        difficulty: 1,
      },
      {
        title: 'Render counter bad practice + good practice useRef',
        link: 'https://codesandbox.io/s/demo-render-counter-9pfugf',
        difficulty: 1,
      },
      {
        title: 'Controlled vs Uncontrolled forms',
        link: 'https://codesandbox.io/s/demo-controlled-uncontrolled-form-v44o9e',
        difficulty: 1,
      },
      {
        title: 'Simple Form NO HOOK',
        link: 'https://codesandbox.io/s/demo-simple-from-no-hook-rclyif?file=/src/App.tsx',
        difficulty: 1,
      },
      {
        title: 'UseRef',
        link: 'https://codesandbox.io/s/demo-useref-form-vl7hv4',
        difficulty: 1,
      },
    ],
  },
  {
    sectionName: '⚛️ React - TypeScript event',
    elements: [
      {
        title: 'Target vs currentTarget',
        link: 'https://codesandbox.io/s/demo-target-vs-currenttarget-hvlv72',
        difficulty: 1,
      },
    ],
  },
  {
    sectionName: '⚛️ React - Custom Hook',
    elements: [
      {
        title: 'Un hook pour gérer ses calls Api',
        link: 'https://codesandbox.io/s/demo-custom-hook-csnupq?file=/src/App.tsx',
        difficulty: 1,
      },
      {
        title: 'Un hook pour gérer son localStorage',
        link: 'https://codesandbox.io/s/demo-use-localstorage-hook-xlv2hf?file=/src/App.tsx',
        difficulty: 2,
      },
    ],
  },
  {
    sectionName: '⚛️ React - Axios - Call API',
    elements: [
      {
        title: 'Une fonction utils pour gérer ses calls Api',
        link: 'https://codesandbox.io/s/demo-utility-http-common-xj57ut',
        difficulty: 1,
      },
      {
        title: 'Instance unique pour axios',
        link: 'https://codesandbox.io/s/demo-axios-instance-2wetwv?file=/src/App.tsx',
        difficulty: 1,
      },
      {
        title: 'Spinner Loading Async content',
        link: 'https://codesandbox.io/s/demo-loading-content-async-tvfzqv',
        difficulty: 1,
      },
      {
        title: 'Interceptor loading spinner Context',
        link: 'https://codesandbox.io/s/demo-axios-interceptor-loading-4rftv7?file=/src/context/loading-spinner.tsx',
        difficulty: 3,
      },
    ],
  },
  {
    sectionName: '⚛️ React - Router-dom',
    elements: [
      {
        title: 'Router dans son appli react',
        link: 'https://codesandbox.io/s/demo-navbar-navigation-4pwthc',
        difficulty: 2,
      },
      {
        title: 'Proteger ses routes et rediriger (easy)',
        link: 'https://codesandbox.io/s/demo-protected-routes-easy-1lz05l?file=/src/App.tsx',
        difficulty: 1,
      },
      {
        title: 'Proteger ses routes et rediriger',
        link: 'https://codesandbox.io/s/demo-protect-route-redirect-fos4o9?file=/src/App.tsx',
        difficulty: 2,
      },
      {
        title: 'Afficher layou + compo en fonction route',
        link: 'https://codesandbox.io/s/demo-layout-footer-conditionnal-display-5pu41q',
        difficulty: 1,
      },
    ],
  },
  {
    sectionName: 'Javascript - paramètre function',
    elements: [
      {
        title: "Une fonction en paramètre d'une fonction",
        link: 'https://codesandbox.io/s/demo-function-en-parametre-551w5j',
        difficulty: 1,
      },
    ],
  },*/
  {
    sectionName: '🧰 Autre',
    elements: [
      {
        title: 'Template pour créer une nouvelle ressource Stackblitz',
        link: 'https://stackblitz.com/edit/stackblitz-starters-c9hsvm',
        difficulty: 0,
      },
    ],
  },
];
