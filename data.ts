
import { Phrase } from './types';

export const PHRASES_DATA: Phrase[] = [
  // Greetings
  { id: 'g1', en: 'Good morning', pt: 'Bom dia', pronunciation: 'bo-ng DEE-ah', examplePt: 'Bom dia, como está?', exampleEn: 'Good morning, how are you?', category: 'Greetings' },
  { id: 'g2', en: 'Good afternoon', pt: 'Boa tarde', pronunciation: 'BOH-ah TAHR-deh', examplePt: 'Boa tarde, tudo bem?', exampleEn: 'Good afternoon, everything okay?', category: 'Greetings' },
  { id: 'g3', en: 'Good night', pt: 'Boa noite', pronunciation: 'BOH-ah NOY-teh', examplePt: 'Boa noite, durma bem.', exampleEn: 'Good night, sleep well.', category: 'Greetings' },
  { id: 'g4', en: 'Hello / Hi', pt: 'Olá', pronunciation: 'oh-LAH', examplePt: 'Olá, eu sou o João.', exampleEn: 'Hi, I am João.', category: 'Greetings' },
  { id: 'g5', en: 'Goodbye', pt: 'Adeus', pronunciation: 'ah-DEWSH', examplePt: 'Adeus e boa viagem!', exampleEn: 'Goodbye and have a good trip!', category: 'Greetings' },
  { id: 'g6', en: 'Please', pt: 'Por favor', pronunciation: 'poor fah-VOHR', examplePt: 'Um café, por favor.', exampleEn: 'A coffee, please.', category: 'Greetings' },
  { id: 'g7', en: 'Thank you (m/f)', pt: 'Obrigado / Obrigada', pronunciation: 'ob-ree-GAH-doo / dah', examplePt: 'Muito obrigado pela ajuda.', exampleEn: 'Thank you very much for the help.', category: 'Greetings' },

  // Introductions
  { id: 'i1', en: "What's your name? (informal)", pt: 'Como te chamas?', pronunciation: 'KOH-moo teh SHAH-mash?', examplePt: 'Olá, como te chamas?', exampleEn: 'Hi, what is your name?', category: 'Introductions' },
  { id: 'i2', en: 'My name is...', pt: 'Chamo-me...', pronunciation: 'SHAH-moo-meh', examplePt: 'Chamo-me Maria.', exampleEn: 'My name is Maria.', category: 'Introductions' },
  { id: 'i3', en: 'Nice to meet you', pt: 'Prazer', pronunciation: 'prah-ZEHR', examplePt: 'Muito prazer em conhecê-lo.', exampleEn: 'Nice to meet you.', category: 'Introductions' },
  { id: 'i4', en: 'Where are you from?', pt: 'De onde és?', pronunciation: 'deh OHN-deh EHSH?', examplePt: 'De onde és? Sou de Londres.', exampleEn: 'Where are you from? I am from London.', category: 'Introductions' },

  // Essentials
  { id: 'e1', en: 'Where is...?', pt: 'Onde fica...?', pronunciation: 'OHN-deh FEE-kah', examplePt: 'Onde fica a estação?', exampleEn: 'Where is the station?', category: 'Essentials' },
  { id: 'e2', en: 'How much is it?', pt: 'Quanto custa?', pronunciation: 'KWAHN-too KOOSH-tah?', examplePt: 'Quanto custa este livro?', exampleEn: 'How much does this book cost?', category: 'Essentials' },
  { id: 'e3', en: 'What time is it?', pt: 'Que horas são?', pronunciation: 'keh OH-rahsh SAH-oong?', examplePt: 'Com licença, que horas são?', exampleEn: 'Excuse me, what time is it?', category: 'Essentials' },
  { id: 'e4', en: 'Can you help me?', pt: 'Pode ajudar-me?', pronunciation: 'POH-deh ah-zhoo-DAHR-meh?', examplePt: 'Estou perdido, pode ajudar-me?', exampleEn: 'I am lost, can you help me?', category: 'Essentials' },

  // Numbers
  { id: 'n1', en: 'One', pt: 'Um', pronunciation: 'OONG', examplePt: 'Um bilhete, por favor.', exampleEn: 'One ticket, please.', category: 'Numbers' },
  { id: 'n2', en: 'Two', pt: 'Dois', pronunciation: 'DOYSH', examplePt: 'Dois cafés, por favor.', exampleEn: 'Two coffees, please.', category: 'Numbers' },
  { id: 'n3', en: 'Three', pt: 'Três', pronunciation: 'TREHSH', examplePt: 'Três amigos.', exampleEn: 'Three friends.', category: 'Numbers' },
  { id: 'n4', en: 'Ten', pt: 'Dez', pronunciation: 'DEHSH', examplePt: 'São dez euros.', exampleEn: 'It is ten euros.', category: 'Numbers' },
  { id: 'n5', en: 'Twenty', pt: 'Vinte', pronunciation: 'VEEN-teh', examplePt: 'Vinte minutos.', exampleEn: 'Twenty minutes.', category: 'Numbers' },

  // Weekdays
  { id: 'w1', en: 'Monday', pt: 'Segunda-feira', pronunciation: 'seh-GOON-dah FAY-rah', examplePt: 'Trabalho na segunda-feira.', exampleEn: 'I work on Monday.', category: 'Weekdays' },
  { id: 'w2', en: 'Saturday', pt: 'Sábado', pronunciation: 'SAH-bah-doo', examplePt: 'Vou à praia no sábado.', exampleEn: 'I go to the beach on Saturday.', category: 'Weekdays' },
  { id: 'w3', en: 'Sunday', pt: 'Domingo', pronunciation: 'doo-MEEN-goo', examplePt: 'O domingo é para descansar.', exampleEn: 'Sunday is for resting.', category: 'Weekdays' },

  // Directions
  { id: 'd1', en: 'Left', pt: 'Esquerda', pronunciation: 'esh-KEHR-dah', examplePt: 'Vire à esquerda.', exampleEn: 'Turn left.', category: 'Directions' },
  { id: 'd2', en: 'Right', pt: 'Direita', pronunciation: 'dee-RAY-tah', examplePt: 'Siga pela direita.', exampleEn: 'Go to the right.', category: 'Directions' },
  { id: 'd3', en: 'Straight ahead', pt: 'Em frente', pronunciation: 'ayng FREHN-teh', examplePt: 'Siga sempre em frente.', exampleEn: 'Go straight ahead.', category: 'Directions' },

  // Restaurant
  { id: 'r1', en: 'Water', pt: 'Água', pronunciation: 'AH-gwah', examplePt: 'Queria uma água fresca.', exampleEn: 'I would like a cold water.', category: 'Restaurant' },
  { id: 'r2', en: 'The bill, please', pt: 'A conta, por favor', pronunciation: 'ah KOHN-tah poor fah-VOHR', examplePt: 'Estava tudo ótimo. A conta, por favor.', exampleEn: 'Everything was great. The bill, please.', category: 'Restaurant' },
  { id: 'r3', en: 'The menu', pt: 'A ementa / O menu', pronunciation: 'ah eh-MEHN-tah', examplePt: 'Pode trazer a ementa?', exampleEn: 'Can you bring the menu?', category: 'Restaurant' },
  { id: 'r4', en: 'Without...', pt: 'Sem...', pronunciation: 'SAYNG', examplePt: 'Um hambúrguer sem cebola.', exampleEn: 'A hamburger without onion.', category: 'Restaurant' },
  { id: 'r5', en: 'I have allergies', pt: 'Tenho alergias', pronunciation: 'TAYNG-nyoo ah-lehr-ZHEE-ahsh', examplePt: 'Tenho alergia a frutos secos.', exampleEn: 'I have an allergy to nuts.', category: 'Restaurant' },

  // Emergency
  { id: 'em1', en: 'I need help', pt: 'Preciso de ajuda', pronunciation: 'preh-SEE-zoo deh ah-ZHOO-dah', examplePt: 'Socorro! Preciso de ajuda!', exampleEn: 'Help! I need help!', category: 'Emergency' },
  { id: 'em2', en: 'Doctor', pt: 'Médico', pronunciation: 'MEH-dee-koo', examplePt: 'Chame um médico, por favor.', exampleEn: 'Call a doctor, please.', category: 'Emergency' },
  { id: 'em3', en: 'Police', pt: 'Polícia', pronunciation: 'poo-LEE-syah', examplePt: 'Onde é a esquadra da polícia?', exampleEn: 'Where is the police station?', category: 'Emergency' },
];
