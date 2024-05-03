import { ListElement } from './app/models/list-element.interface';

export const posts: ListElement[] = [
  {
    sectionName: '🛟 Angular - je veux...',
    elements: [
      {
        title: 'Hello world',
        link: 'https://codesandbox.io/s/demo-jv-click-event-12rze1?file=/src/App.tsx',
        difficulty: 0,
      },
      {
        title: 'I want to use a reactive form',
        link: 'https://stackblitz.com/edit/stackblitz-starters-rf7yii?file=src%2Fapp%2Fapp.module.ts',
        difficulty: 0,
      },
      {
        title: 'Display a hello world message in my application',
        link: 'https://stackblitz-starters-k8lepf.stackblitz.io',
        difficulty: 0,
      },
      {
        title: 'I want to use a Reactive form',
        link: 'https://stackblitz-starters-xjwvpp.stackblitz.io',
        difficulty: 2,
      },
      {
        title: 'Display data in HTML that came from TS',
        link: 'https://stackblitz.com/edit/stackblitz-starters-c9hsvm?file=src%2Fapp%2Fapp.component.ts,src%2Fapp%2Fapp.component.html',
        difficulty: 1,
      },
      {
        title: 'Display a list of person from an array in my application',
        link: 'https://stackblitz-starters-ybw6et.stackblitz.io',
        difficulty: 3,
      },
      {
        title: 'Route vers la page home',
        link: 'https://stackblitz.com/edit/stackblitz-starters-kpn1se?file=src%2Fapp%2Fapp-routing.module.ts',
        difficulty: 1,
      },

      {
        title: "make an input into the application's head",
        link: 'https://stackblitz.com/edit/stackblitz-starters-wnhj6u?file=src%2Fapp%2Fapp.component.html',
        difficulty: 1,
      },
      {
        title: 'I want to react to a click even',
        link: 'https://stackblitz.com/edit/stackblitz-starters-usgxxa',
        difficulty: 0,
      },
    ],
  },
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
