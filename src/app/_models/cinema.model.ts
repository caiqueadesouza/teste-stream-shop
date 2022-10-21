import { Sala } from './sala.model';

export class Cinema {
  id?: number;
  eventId?: number;
  name?: string;
  address?: string;
  addressComplement?: string;
  rooms?: Sala[];
}

// {
//   "id": "676",
//   "eventId": "23345",
//   "name": "Cinemark Cidade Jardim",
//   "address": "Av. Magalhães de Castro",
//   "addressComplement": "Shopping Cidade Jardim",
//   "rooms": [
//     {
//       "name": "Sala 5",
//       "types": [["VIP", "LEG"]],
//       "sessions": [{ "price": 82.07, "time": "20:10" }]
//     }
//   ]
// },
