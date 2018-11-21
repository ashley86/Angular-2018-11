import { Client } from '../../shared/models/client.model';

export const fakeClients: Client[] = [
  new Client({
    id: '1',
    nom: 'Tata Toto',
    email: 'toto@toto.com',
  }),
  new Client({
    id: '2',
    nom: 'Tata Tutu',
    email: 'tutu@tutu.com',
  }),
];
