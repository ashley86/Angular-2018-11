import { Prestation } from '../../shared/models/prestation.model';

export const fakePrestations: Prestation[] = [
  new Prestation({
    id: 'toto',
    typePresta: 'Formation',
    client: 'Modis',
    nbJours: 5,
  }),
  new Prestation({
    id: 'tutu',
    typePresta: 'Coaching',
    client: 'Nemesis',
    nbJours: 12,
  }),
];
