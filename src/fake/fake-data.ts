import { Client, Message, Plan } from '@/chat/interfaces/chat.interface';
import { sleep } from '@/lib/sleep';

// ! Auth
export const loginUser = async () => {
  await sleep(1200);
  return {
    id: 'U1-12345',
    name: 'Fernando Herrera',
    email: 'fherrera@gmail.com',
    token: 'token-1234567890',
  };
};

export const checkAuth = async (token: string) => {
  await sleep(500);

  if (token !== 'token-1234567890') {
    throw new Error('Invalid token');
  }

  console.log('checkAuth', token);

  return {
    id: 'U1-12345',
    name: 'Fernando Herrera',
  };
};

//! ====== Clientes ======
const fakeClients = {
  records: {} as Record<string, Client>,
  getClient: (id: string) => fakeClients.records[id],
  getClients: () => {
    return Object.values(fakeClients.records).sort(
      (a, b) => b.memberSince.getTime() - a.memberSince.getTime()
    );
  },
  createEmptyClient: () => {
    const client: Client = {
      id: `C1-${Math.floor(10000 + Math.random() * 90000)}`, // Generates C1-XXXXX format
      name: '',
      email: '',
      phone: '',
      address: '',
      memberSince: new Date(),
      currentPlan: Plan.BASIC,
    };

    fakeClients.setClient(client);

    return client;
  },
  setClient: (client: Client) => {
    fakeClients.records[client.id] = client;
  },
};

export const getClients = async (): Promise<Client[]> => {
  await sleep(500);
  return fakeClients.getClients();
};

export const getClient = async (id: string): Promise<Client> => {
  await sleep(500);
  return fakeClients.getClient(id);
};

//! ====== Mensajes ======
const fakeMessages = {
  records: {} as Record<string, Message[]>,
  getMessages: (clientId: string) => fakeMessages.records[clientId] || [],
  getAllMessages: () => {
    return Object.values(fakeMessages.records)
      .flat()
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  },
  addMessage: (message: Message) => {
    if (!fakeMessages.records[message.clientId]) {
      fakeMessages.records[message.clientId] = [];
    }
    fakeMessages.records[message.clientId].push(message);
  },
};

export const getClientMessages = async (
  clientId: string
): Promise<Message[]> => {
  await sleep(300);
  return fakeMessages.getMessages(clientId);
};

export const getAllMessages = async (): Promise<Message[]> => {
  await sleep(500);
  return fakeMessages.getAllMessages();
};

export const sendMessage = async (message: Omit<Message, 'id' | 'like'>) => {
  await sleep(300);
  const newMessage: Message = {
    ...message,
    id: `M1-${Math.floor(10000 + Math.random() * 90000)}`,
    like: 'neutral',
  };
  fakeMessages.addMessage(newMessage);
  return newMessage;
};

//! ====== Llenar datos ficticios ======
const clients: Client[] = [
  {
    id: 'C1-74999',
    name: 'Juan Rodríguez',
    email: 'jrodriguez@gmail.com',
    phone: '+506 7952-6056',
    address: 'Calle Principal, San Pedro, San José',
    memberSince: new Date('2023-02-23'),
    currentPlan: Plan.BASIC,
  },
  {
    id: 'C1-81678',
    name: 'María Vargas',
    email: 'mfvargas@outlook.com',
    phone: '+506 6181-6404',
    address: 'Avenida Central, Escazú, San José',
    memberSince: new Date('2022-10-20'),
    currentPlan: Plan.BASIC,
  },
  {
    id: 'C1-60078',
    name: 'José Hernández',
    email: 'jphernandez@yahoo.com',
    phone: '+506 6853-4931',
    address: '200m Este del Parque Central, Alajuela',
    memberSince: new Date('2024-01-17'),
    currentPlan: Plan.PRO,
  },
  {
    id: 'C1-68195',
    name: 'Ana Campos',
    email: 'alcampos@hotmail.com',
    phone: '+506 7839-6163',
    address: 'Residencial Los Arcos, Casa 15, Heredia',
    memberSince: new Date('2024-10-17'),
    currentPlan: Plan.PRO,
  },
  {
    id: 'C1-72336',
    name: 'Carlos Mora',
    email: 'camora85@gmail.com',
    phone: '+506 6029-7816',
    address: 'Condominio Valle del Sol, Cartago',
    memberSince: new Date('2024-03-30'),
    currentPlan: Plan.BASIC,
  },
  {
    id: 'C1-91234',
    name: 'Isabel Castro',
    email: 'ijimenez@empresa.co.cr',
    phone: '+506 7102-3987',
    address: 'Barrio Los Yoses, San José',
    memberSince: new Date('2023-06-15'),
    currentPlan: Plan.PREMIUM,
  },
  {
    id: 'C1-56789',
    name: 'Roberto Quirós',
    email: 'rsolano@corporacion.com',
    phone: '+506 6554-7852',
    address: 'Curridabat, 300m Sur del Walmart',
    memberSince: new Date('2022-12-05'),
    currentPlan: Plan.ENTERPRISE,
  },
  {
    id: 'C1-33456',
    name: 'Patricia Wong',
    email: 'pmendez@consultora.net',
    phone: '+506 6883-6594',
    address: 'Residencial Monterán, Santa Ana',
    memberSince: new Date('2023-08-22'),
    currentPlan: Plan.PRO,
  },
  {
    id: 'C1-12987',
    name: 'Diego Chen',
    email: 'dalvarado@tech.cr',
    phone: '+506 6999-5214',
    address: 'Condominio Avalon, Tres Ríos',
    memberSince: new Date('2024-02-10'),
    currentPlan: Plan.PREMIUM,
  },
  {
    id: 'C1-65432',
    name: 'Sofía Blanco',
    email: 'sramirez@grupo.com',
    phone: '+506 7254-8473',
    address: 'Pinares de Curridabat, Casa 78',
    memberSince: new Date('2023-04-28'),
    currentPlan: Plan.ENTERPRISE,
  },
];

clients.forEach((client) => {
  fakeClients.setClient(client);
});

// Mensajes ficticios
const messages: Message[] = [
  // Juan Rodríguez (C1-74999)
  {
    id: 'M1-12345',
    clientId: 'C1-74999',
    content: 'Hola, necesito información sobre cómo actualizar mi plan actual.',
    createdAt: new Date('2024-05-10T09:30:00'),
    sender: 'client',
    like: 'neutral',
  },
  {
    id: 'M1-12346',
    clientId: 'C1-74999',
    content:
      'Buenos días Juan. Con gusto te puedo ayudar con eso. ¿Estás interesado en cambiar de un plan Básico a otro nivel?',
    createdAt: new Date('2024-05-10T09:35:00'),
    sender: 'agent',
    like: 'liked',
  },
  {
    id: 'M1-12347',
    clientId: 'C1-74999',
    content: 'Sí, me gustaría conocer los beneficios del plan Pro.',
    createdAt: new Date('2024-05-10T09:40:00'),
    sender: 'client',
    like: 'neutral',
  },

  // María Vargas (C1-81678)
  {
    id: 'M1-23456',
    clientId: 'C1-81678',
    content:
      'Tengo problemas para acceder a mi cuenta. Me dice credenciales incorrectas.',
    createdAt: new Date('2024-05-12T14:20:00'),
    sender: 'client',
    like: 'neutral',
  },
  {
    id: 'M1-23457',
    clientId: 'C1-81678',
    content:
      'Lamento escuchar eso, María. Vamos a solucionarlo. ¿Has intentado restablecer tu contraseña?',
    createdAt: new Date('2024-05-12T14:25:00'),
    sender: 'agent',
    like: 'neutral',
  },
  {
    id: 'M1-23458',
    clientId: 'C1-81678',
    content: 'Sí, pero no recibo el correo de restablecimiento.',
    createdAt: new Date('2024-05-12T14:30:00'),
    sender: 'client',
    like: 'neutral',
  },
  {
    id: 'M1-23459',
    clientId: 'C1-81678',
    content:
      'Entiendo. Acabo de enviar manualmente un enlace de restablecimiento a tu correo. Por favor revisa también la carpeta de spam.',
    createdAt: new Date('2024-05-12T14:35:00'),
    sender: 'agent',
    like: 'liked',
  },

  // José Hernández (C1-60078)
  {
    id: 'M1-34567',
    clientId: 'C1-60078',
    content:
      '¿Cuáles son las nuevas características del plan Pro que contraté?',
    createdAt: new Date('2024-05-15T11:10:00'),
    sender: 'client',
    like: 'neutral',
  },
  {
    id: 'M1-34568',
    clientId: 'C1-60078',
    content:
      'Hola José. El plan Pro incluye soporte prioritario, acceso a herramientas avanzadas de análisis y 50GB de almacenamiento adicional.',
    createdAt: new Date('2024-05-15T11:15:00'),
    sender: 'agent',
    like: 'liked',
  },

  // Roberto Quirós (C1-56789)
  {
    id: 'M1-45678',
    clientId: 'C1-56789',
    content:
      'Necesitamos agregar 5 usuarios más a nuestra cuenta Enterprise. ¿Cuál es el proceso?',
    createdAt: new Date('2024-05-18T16:45:00'),
    sender: 'client',
    like: 'neutral',
  },
  {
    id: 'M1-45679',
    clientId: 'C1-56789',
    content:
      'Buenas tardes Roberto. Para agregar usuarios adicionales a su plan Enterprise, puede hacerlo directamente desde el panel de administración o puedo asistirle con el proceso.',
    createdAt: new Date('2024-05-18T16:50:00'),
    sender: 'agent',
    like: 'neutral',
  },
  {
    id: 'M1-45680',
    clientId: 'C1-56789',
    content: 'Preferiría que me asista, por favor.',
    createdAt: new Date('2024-05-18T16:55:00'),
    sender: 'client',
    like: 'neutral',
  },
  {
    id: 'M1-45681',
    clientId: 'C1-56789',
    content:
      'Con gusto. Necesitaré los nombres y correos electrónicos de los nuevos usuarios. ¿Los tiene disponibles ahora?',
    createdAt: new Date('2024-05-18T17:00:00'),
    sender: 'agent',
    like: 'liked',
  },

  // Sofía Blanco (C1-65432)
  {
    id: 'M1-56789',
    clientId: 'C1-65432',
    content:
      'Estamos considerando actualizar a un plan con más capacidad. ¿Qué nos recomiendan?',
    createdAt: new Date('2024-05-20T10:15:00'),
    sender: 'client',
    like: 'neutral',
  },
  {
    id: 'M1-56790',
    clientId: 'C1-65432',
    content:
      'Buenos días Sofía. Basado en el uso actual de su cuenta Enterprise, están utilizando eficientemente los recursos. Sin embargo, si planean expandirse en los próximos meses, podríamos discutir opciones personalizadas.',
    createdAt: new Date('2024-05-20T10:20:00'),
    sender: 'agent',
    like: 'liked',
  },
  {
    id: 'M1-56791',
    clientId: 'C1-65432',
    content:
      'Excelente. Tenemos planes de crecer un 30% este trimestre. ¿Podríamos agendar una llamada para discutir opciones?',
    createdAt: new Date('2024-05-20T10:25:00'),
    sender: 'client',
    like: 'liked',
  },

  // Diego Chen (C1-12987)
  {
    id: 'M1-67890',
    clientId: 'C1-12987',
    content:
      'La nueva actualización está causando lentitud en nuestro sistema. ¿Hay alguna solución?',
    createdAt: new Date('2024-05-22T13:40:00'),
    sender: 'client',
    like: 'neutral',
  },
  {
    id: 'M1-67891',
    clientId: 'C1-12987',
    content:
      'Lamento escuchar eso, Diego. Estamos al tanto de algunos problemas de rendimiento con la última actualización. Nuestro equipo técnico está trabajando en una solución que estará disponible en las próximas 24 horas.',
    createdAt: new Date('2024-05-22T13:45:00'),
    sender: 'agent',
    like: 'neutral',
  },
  {
    id: 'M1-67892',
    clientId: 'C1-12987',
    content:
      'Entiendo, pero esto está afectando nuestras operaciones. ¿Hay alguna solución temporal que podamos implementar?',
    createdAt: new Date('2024-05-22T13:50:00'),
    sender: 'client',
    like: 'neutral',
  },
  {
    id: 'M1-67893',
    clientId: 'C1-12987',
    content:
      'Por supuesto. Le recomendaría reiniciar el servicio y limitar el procesamiento en segundo plano temporalmente. Puedo guiarle a través de estos pasos si lo desea.',
    createdAt: new Date('2024-05-22T13:55:00'),
    sender: 'agent',
    like: 'disliked',
  },
  {
    id: 'M1-67894',
    clientId: 'C1-12987',
    content: 'Sí, por favor guíeme a través del proceso.',
    createdAt: new Date('2024-05-22T14:00:00'),
    sender: 'client',
    like: 'neutral',
  },
];

// Agregar mensajes al sistema
messages.forEach((message) => {
  fakeMessages.addMessage(message);
});
