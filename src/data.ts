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
