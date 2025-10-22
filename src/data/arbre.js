export const nodes = [
  { id: '1', type: 'customStep', data: { label: 'Début', instructions: 'Accueil des joueurs' }, position: { x: 250, y: 50 } },
  { id: '2', type: 'customStep', data: { label: 'Étape 1', instructions: 'Donner la consigne 1' }, position: { x: 100, y: 200 } },
  { id: '3', type: 'customStep', data: { label: 'Étape 2', instructions: 'Donner la consigne 2' }, position: { x: 400, y: 200 } },
  { id: '4', type: 'customStep', data: { label: 'Étape 3', instructions: 'Donner la consigne 3' }, position: { x: 250, y: 350 } },
];

export const edges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e3-4', source: '3', target: '4' },
];
