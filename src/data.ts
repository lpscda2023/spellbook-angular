import { ListElement } from './app/models/list-element.interface';

export const posts: ListElement[] = [
  {
    sectionName: '🛟 Angular - je veux...',
    elements: [
      {
        title: 'réagir à un event click',
        link: 'https://codesandbox.io/s/demo-jv-click-event-12rze1?file=/src/App.tsx',
        difficulty: 1,
      },
      {
        title: 'Route vers la page home',
        link: 'https://stackblitz.com/edit/stackblitz-starters-kpn1se?file=src%2Fapp%2Fpage-home%2Fpage-home.component.html',
        difficulty: 1,
      },
      {
        title: 'barre de recherche',
        link: 'https://stackblitz.com/edit/stackblitz-starters-kpn1se?file=src%2Fapp%2Fpage-home%2Fpage-home.component.html',
        difficulty: 2,
      }
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
