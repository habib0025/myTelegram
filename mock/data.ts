// Centralized mock data for the Telegram-like prototype - All Senegalese Data

export type User = {
  id: string;
  name: string;
  avatar: string;
  isOnline?: boolean;
};

export type Message = {
  id: string;
  chatId: string;
  senderId: string;
  text: string;
  timestamp: string; // ISO string
  isRead?: boolean;
};

export type Chat = {
  id: string;
  type: 'private' | 'group' | 'channel';
  title: string;
  avatar: string;
  members?: string[]; // user ids
  unreadCount?: number;
};

export type CallItem = {
  id: string;
  userId: string;
  type: 'voice' | 'video';
  direction: 'incoming' | 'outgoing' | 'missed';
  timestamp: string;
};

export const users: User[] = [
  { id: 'u1', name: 'Aminata Diop', avatar: 'https://i.pravatar.cc/100?img=1', isOnline: true },
  { id: 'u2', name: 'Moussa Fall', avatar: 'https://i.pravatar.cc/100?img=2', isOnline: false },
  { id: 'u3', name: 'Fatou Sow', avatar: 'https://i.pravatar.cc/100?img=3', isOnline: true },
  { id: 'u4', name: 'Ibrahima Ba', avatar: 'https://i.pravatar.cc/100?img=4', isOnline: true },
  { id: 'u5', name: 'Aissatou Ndiaye', avatar: 'https://i.pravatar.cc/100?img=5', isOnline: false },
  { id: 'u6', name: 'Cheikh Mbaye', avatar: 'https://i.pravatar.cc/100?img=6', isOnline: true },
  { id: 'u7', name: 'Mariama Diouf', avatar: 'https://i.pravatar.cc/100?img=7', isOnline: false },
  { id: 'u8', name: 'Ousmane Sarr', avatar: 'https://i.pravatar.cc/100?img=8', isOnline: true },
  { id: 'u9', name: 'Khady Kane', avatar: 'https://i.pravatar.cc/100?img=9', isOnline: true },
  { id: 'u10', name: 'Amadou Thiam', avatar: 'https://i.pravatar.cc/100?img=10', isOnline: false },
  { id: 'u11', name: 'Rokhaya Seck', avatar: 'https://i.pravatar.cc/100?img=11', isOnline: true },
  { id: 'u12', name: 'Papa Sy', avatar: 'https://i.pravatar.cc/100?img=12', isOnline: false },
  { id: 'u13', name: 'Awa Traoré', avatar: 'https://i.pravatar.cc/100?img=13', isOnline: true },
  { id: 'u14', name: 'Mamadou Diallo', avatar: 'https://i.pravatar.cc/100?img=14', isOnline: false },
  { id: 'u15', name: 'Ndeye Faye', avatar: 'https://i.pravatar.cc/100?img=15', isOnline: true },
  { id: 'u16', name: 'Youssou Ndoye', avatar: 'https://i.pravatar.cc/100?img=16', isOnline: true },
  { id: 'u17', name: 'Aïssatou Diaw', avatar: 'https://i.pravatar.cc/100?img=17', isOnline: false },
  { id: 'u18', name: 'Serigne Gueye', avatar: 'https://i.pravatar.cc/100?img=18', isOnline: true },
  { id: 'u19', name: 'Adja Ba', avatar: 'https://i.pravatar.cc/100?img=19', isOnline: false },
  { id: 'u20', name: 'Modou Dieng', avatar: 'https://i.pravatar.cc/100?img=20', isOnline: true },
];

export const chats: Chat[] = [
  { id: 'c1', type: 'private', title: 'Aminata Diop', avatar: users[0].avatar, members: ['u1'] },
  { id: 'c2', type: 'private', title: 'Moussa Fall', avatar: users[1].avatar, members: ['u2'] },
  { id: 'c3', type: 'private', title: 'Fatou Sow', avatar: users[2].avatar, members: ['u3'] },
  { id: 'c4', type: 'private', title: 'Ibrahima Ba', avatar: users[3].avatar, members: ['u4'] },
  { id: 'c5', type: 'private', title: 'Aissatou Ndiaye', avatar: users[4].avatar, members: ['u5'] },
  { id: 'c6', type: 'private', title: 'Cheikh Mbaye', avatar: users[5].avatar, members: ['u6'] },
  { id: 'c7', type: 'private', title: 'Mariama Diouf', avatar: users[6].avatar, members: ['u7'] },
  { id: 'c8', type: 'private', title: 'Ousmane Sarr', avatar: users[7].avatar, members: ['u8'] },
  { id: 'c9', type: 'private', title: 'Khady Kane', avatar: users[8].avatar, members: ['u9'] },
  { id: 'c10', type: 'private', title: 'Amadou Thiam', avatar: users[9].avatar, members: ['u10'] },
  { id: 'c11', type: 'private', title: 'Rokhaya Seck', avatar: users[10].avatar, members: ['u11'] },
  { id: 'c12', type: 'private', title: 'Papa Sy', avatar: users[11].avatar, members: ['u12'] },
  { id: 'c13', type: 'private', title: 'Awa Traoré', avatar: users[12].avatar, members: ['u13'] },
  { id: 'c14', type: 'private', title: 'Mamadou Diallo', avatar: users[13].avatar, members: ['u14'] },
  { id: 'c15', type: 'private', title: 'Ndeye Faye', avatar: users[14].avatar, members: ['u15'] },
  { id: 'c16', type: 'group', title: 'Famille Diop', avatar: 'https://i.pravatar.cc/100?img=21', members: ['u1','u3','u6','u11','u15'] },
  { id: 'c17', type: 'group', title: 'Amis Dakar', avatar: 'https://i.pravatar.cc/100?img=22', members: ['u2','u4','u7','u8','u9','u10'] },
  { id: 'c18', type: 'group', title: 'Équipe Travail', avatar: 'https://i.pravatar.cc/100?img=23', members: ['u5','u12','u13','u14','u16','u17'] },
];

export const channels: Chat[] = [
  { id: 'ch1', type: 'channel', title: 'Actualités Sénégal', avatar: 'https://picsum.photos/seed/senegal/100' },
  { id: 'ch2', type: 'channel', title: 'Musique Sénégalaise', avatar: 'https://picsum.photos/seed/music/100' },
  { id: 'ch3', type: 'channel', title: 'Sport Teranga', avatar: 'https://picsum.photos/seed/sport/100' },
  { id: 'ch4', type: 'channel', title: 'Dakar News', avatar: 'https://picsum.photos/seed/dakar/100' },
  { id: 'ch5', type: 'channel', title: 'Culture Wolof', avatar: 'https://picsum.photos/seed/wolof/100' },
  { id: 'ch6', type: 'channel', title: 'Cuisine Sénégalaise', avatar: 'https://picsum.photos/seed/food/100' },
  { id: 'ch7', type: 'channel', title: 'Tech Sénégal', avatar: 'https://picsum.photos/seed/tech/100' },
  { id: 'ch8', type: 'channel', title: 'Voyage Sénégal', avatar: 'https://picsum.photos/seed/travel/100' },
  { id: 'ch9', type: 'channel', title: 'Business Dakar', avatar: 'https://picsum.photos/seed/business/100' },
  { id: 'ch10', type: 'channel', title: 'Éducation Sénégal', avatar: 'https://picsum.photos/seed/education/100' },
  { id: 'ch11', type: 'channel', title: 'Santé & Bien-être', avatar: 'https://picsum.photos/seed/health/100' },
  { id: 'ch12', type: 'channel', title: 'Mode Sénégalaise', avatar: 'https://picsum.photos/seed/fashion/100' },
  { id: 'ch13', type: 'channel', title: 'Cinéma Sénégalais', avatar: 'https://picsum.photos/seed/cinema/100' },
];

// Generate messages with Senegalese context
const now = new Date();
const getTimestamp = (hoursAgo: number) => {
  const date = new Date(now);
  date.setHours(date.getHours() - hoursAgo);
  return date.toISOString();
};

export const messages: Message[] = [
  // Chat 1 - Aminata Diop
  { id: 'm1', chatId: 'c1', senderId: 'u1', text: 'Hello! How are you?', timestamp: getTimestamp(2), isRead: true },
  { id: 'm2', chatId: 'c1', senderId: 'me', text: 'I\'m doing well, thanks. How about you?', timestamp: getTimestamp(1.8), isRead: true },
  { id: 'm3', chatId: 'c1', senderId: 'u1', text: 'I\'m fine. How is your work going?', timestamp: getTimestamp(1.5), isRead: true },
  
  // Chat 2 - Moussa Fall
  { id: 'm4', chatId: 'c2', senderId: 'u2', text: 'Hey, are we still meeting tomorrow?', timestamp: getTimestamp(5), isRead: false },
  { id: 'm5', chatId: 'c2', senderId: 'me', text: 'Yes, I got it. I\'ll meet you there.', timestamp: getTimestamp(4.5), isRead: true },
  
  // Chat 3 - Fatou Sow
  { id: 'm6', chatId: 'c3', senderId: 'u3', text: 'See you tomorrow at three.', timestamp: getTimestamp(0.5), isRead: true },
  { id: 'm7', chatId: 'c3', senderId: 'me', text: 'Perfect! I\'ll see you there.', timestamp: getTimestamp(0.3), isRead: true },
  
  // Chat 4 - Ibrahima Ba
  { id: 'm8', chatId: 'c4', senderId: 'me', text: 'Thanks for your help yesterday!', timestamp: getTimestamp(12), isRead: true },
  { id: 'm9', chatId: 'c4', senderId: 'u4', text: 'No problem. Anytime!', timestamp: getTimestamp(11), isRead: true },
  
  // Chat 5 - Aissatou Ndiaye
  { id: 'm10', chatId: 'c5', senderId: 'u5', text: 'Are you free this weekend? I have some work.', timestamp: getTimestamp(8), isRead: false },
  
  // Chat 6 - Cheikh Mbaye
  { id: 'm11', chatId: 'c6', senderId: 'me', text: 'Can we meet somewhere tomorrow?', timestamp: getTimestamp(15), isRead: true },
  { id: 'm12', chatId: 'c6', senderId: 'u6', text: 'Yes, we\'re meeting. Do you have any friends there?', timestamp: getTimestamp(14), isRead: true },
  { id: 'm13', chatId: 'c6', senderId: 'me', text: 'Yes, I have some friends there. Thanks for the update!', timestamp: getTimestamp(13), isRead: true },
  
  // Chat 7 - Mariama Diouf
  { id: 'm14', chatId: 'c7', senderId: 'u7', text: 'I\'ll see you tomorrow at the meeting.', timestamp: getTimestamp(24), isRead: false },
  
  // Chat 8 - Ousmane Sarr
  { id: 'm15', chatId: 'c8', senderId: 'u8', text: 'Hello! How is your work going?', timestamp: getTimestamp(3), isRead: true },
  { id: 'm16', chatId: 'c8', senderId: 'me', text: 'Hello. I\'m at the meeting. How about you?', timestamp: getTimestamp(2.5), isRead: true },
  { id: 'm17', chatId: 'c8', senderId: 'u8', text: 'I\'m here. Thanks for your message.', timestamp: getTimestamp(2), isRead: true },
  
  // Chat 9 - Khady Kane
  { id: 'm18', chatId: 'c9', senderId: 'u9', text: 'See you tomorrow at three.', timestamp: getTimestamp(6), isRead: true },
  { id: 'm19', chatId: 'c9', senderId: 'me', text: 'Perfect! I\'ll see you there.', timestamp: getTimestamp(5.5), isRead: true },
  
  // Chat 10 - Amadou Thiam
  { id: 'm20', chatId: 'c10', senderId: 'u10', text: 'Are you free? I have some work.', timestamp: getTimestamp(20), isRead: false },
  
  // Chat 11 - Rokhaya Seck
  { id: 'm21', chatId: 'c11', senderId: 'u11', text: 'Hello! How are you doing?', timestamp: getTimestamp(1), isRead: true },
  { id: 'm22', chatId: 'c11', senderId: 'me', text: 'Hello. I\'m doing well. How about you?', timestamp: getTimestamp(0.5), isRead: true },
  
  // Chat 12 - Papa Sy
  { id: 'm23', chatId: 'c12', senderId: 'me', text: 'Hey, are we still meeting tomorrow?', timestamp: getTimestamp(10), isRead: false },
  
  // Chat 13 - Awa Traoré
  { id: 'm24', chatId: 'c13', senderId: 'u13', text: 'Thanks for your help yesterday!', timestamp: getTimestamp(4), isRead: true },
  { id: 'm25', chatId: 'c13', senderId: 'me', text: 'No problem. Anytime!', timestamp: getTimestamp(3.5), isRead: true },
  
  // Chat 14 - Mamadou Diallo
  { id: 'm26', chatId: 'c14', senderId: 'u14', text: 'Are you free? I have some work.', timestamp: getTimestamp(18), isRead: false },
  
  // Chat 15 - Ndeye Faye
  { id: 'm27', chatId: 'c15', senderId: 'u15', text: 'Hello! How is your work going?', timestamp: getTimestamp(7), isRead: true },
  { id: 'm28', chatId: 'c15', senderId: 'me', text: 'Hello. I\'m at the meeting. How about you?', timestamp: getTimestamp(6.5), isRead: true },
  
  // Group 16 - Famille Diop
  { id: 'm29', chatId: 'c16', senderId: 'u1', text: 'Hello everyone! Are we all meeting tomorrow?', timestamp: getTimestamp(1), isRead: true },
  { id: 'm30', chatId: 'c16', senderId: 'u3', text: 'Yes, I\'ll be at the meeting.', timestamp: getTimestamp(0.8), isRead: true },
  { id: 'm31', chatId: 'c16', senderId: 'me', text: 'I\'m here. Thanks for the update!', timestamp: getTimestamp(0.5), isRead: true },
  
  // Group 17 - Amis Dakar
  { id: 'm32', chatId: 'c17', senderId: 'u2', text: 'Are you free? I have some work.', timestamp: getTimestamp(3), isRead: true },
  { id: 'm33', chatId: 'c17', senderId: 'u4', text: 'Yes, I got it.', timestamp: getTimestamp(2.5), isRead: true },
  { id: 'm34', chatId: 'c17', senderId: 'me', text: 'I\'ll meet you there.', timestamp: getTimestamp(2), isRead: true },
  
  // Group 18 - Équipe Travail
  { id: 'm35', chatId: 'c18', senderId: 'u5', text: 'Meeting tomorrow at three.', timestamp: getTimestamp(5), isRead: false },
  { id: 'm36', chatId: 'c18', senderId: 'u12', text: 'Yes, I got it.', timestamp: getTimestamp(4.5), isRead: false },
  { id: 'm37', chatId: 'c18', senderId: 'me', text: 'Perfect! I\'ll see you there.', timestamp: getTimestamp(4), isRead: false },
];

export const calls: CallItem[] = [
  { id: 'call1', userId: 'u1', type: 'voice', direction: 'incoming', timestamp: getTimestamp(2) },
  { id: 'call2', userId: 'u2', type: 'video', direction: 'missed', timestamp: getTimestamp(5) },
  { id: 'call3', userId: 'u3', type: 'voice', direction: 'outgoing', timestamp: getTimestamp(0.5) },
  { id: 'call4', userId: 'u4', type: 'voice', direction: 'incoming', timestamp: getTimestamp(12) },
  { id: 'call5', userId: 'u5', type: 'video', direction: 'outgoing', timestamp: getTimestamp(8) },
  { id: 'call6', userId: 'u6', type: 'voice', direction: 'missed', timestamp: getTimestamp(15) },
  { id: 'call7', userId: 'u7', type: 'voice', direction: 'incoming', timestamp: getTimestamp(24) },
  { id: 'call8', userId: 'u8', type: 'video', direction: 'outgoing', timestamp: getTimestamp(3) },
  { id: 'call9', userId: 'u9', type: 'voice', direction: 'missed', timestamp: getTimestamp(6) },
  { id: 'call10', userId: 'u10', type: 'voice', direction: 'incoming', timestamp: getTimestamp(20) },
  { id: 'call11', userId: 'u11', type: 'video', direction: 'outgoing', timestamp: getTimestamp(1) },
  { id: 'call12', userId: 'u12', type: 'voice', direction: 'missed', timestamp: getTimestamp(10) },
  { id: 'call13', userId: 'u13', type: 'voice', direction: 'incoming', timestamp: getTimestamp(4) },
  { id: 'call14', userId: 'u14', type: 'video', direction: 'outgoing', timestamp: getTimestamp(18) },
  { id: 'call15', userId: 'u15', type: 'voice', direction: 'incoming', timestamp: getTimestamp(7) },
  { id: 'call16', userId: 'u16', type: 'voice', direction: 'missed', timestamp: getTimestamp(11) },
  { id: 'call17', userId: 'u17', type: 'video', direction: 'incoming', timestamp: getTimestamp(9) },
  { id: 'call18', userId: 'u18', type: 'voice', direction: 'outgoing', timestamp: getTimestamp(13) },
  { id: 'call19', userId: 'u19', type: 'voice', direction: 'missed', timestamp: getTimestamp(16) },
  { id: 'call20', userId: 'u20', type: 'video', direction: 'incoming', timestamp: getTimestamp(14) },
];

export const settings = {
  notifications: true,
  theme: 'system' as 'light' | 'dark' | 'system',
  privacy: {
    lastSeen: 'Contacts',
    profilePhoto: 'Everyone',
    forwardedMessages: 'Nobody',
  },
};

export function getMessagesForChat(chatId: string): Message[] {
  return messages
    .filter(m => m.chatId === chatId)
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
}

export function getLastMessageForChat(chatId: string): Message | undefined {
  const list = messages.filter(m => m.chatId === chatId);
  return list.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())[0];
}

export function getUnreadCount(chatId: string): number {
  return messages.filter(m => m.chatId === chatId && m.isRead === false).length;
}

export function formatTime(ts: string): string {
  const date = new Date(ts);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

