import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View, TextInput } from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { router } from 'expo-router';

// Mock data for chat list
const mockChats = [
  {
    id: '1',
    name: 'John Doe',
    lastMessage: 'Hey, how are you doing?',
    timestamp: '2:30 PM',
    unreadCount: 2,
    avatar: 'https://via.placeholder.com/50',
    isOnline: true,
  },
  {
    id: '2',
    name: 'Alice Smith',
    lastMessage: 'Can we meet tomorrow?',
    timestamp: '1:45 PM',
    unreadCount: 0,
    avatar: 'https://via.placeholder.com/50',
    isOnline: false,
  },
  {
    id: '3',
    name: 'Tech Group',
    lastMessage: 'Great presentation everyone!',
    timestamp: '12:20 PM',
    unreadCount: 5,
    avatar: 'https://via.placeholder.com/50',
    isOnline: false,
  },
  {
    id: '4',
    name: 'Mom',
    lastMessage: 'Don\'t forget dinner tonight',
    timestamp: '11:30 AM',
    unreadCount: 0,
    avatar: 'https://via.placeholder.com/50',
    isOnline: true,
  },
  {
    id: '5',
    name: 'Work Team',
    lastMessage: 'Meeting at 3 PM',
    timestamp: 'Yesterday',
    unreadCount: 1,
    avatar: 'https://via.placeholder.com/50',
    isOnline: false,
  },
];

export default function ChatsScreen() {
  const colorScheme = useColorScheme();
  const [searchQuery, setSearchQuery] = useState('');

  const ChatItem = ({ chat }: { chat: typeof mockChats[0] }) => (
    <TouchableOpacity 
      style={styles.chatItem}
      onPress={() => router.push(`/chat/${chat.id}`)}
    >
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: chat.avatar }}
          style={styles.avatar}
        />
        {chat.isOnline && <View style={styles.onlineIndicator} />}
      </View>
      
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <ThemedText type="defaultSemiBold" style={styles.chatName}>
            {chat.name}
          </ThemedText>
          <ThemedText style={styles.timestamp}>
            {chat.timestamp}
          </ThemedText>
        </View>
        
        <View style={styles.chatFooter}>
          <ThemedText 
            style={[
              styles.lastMessage,
              chat.unreadCount > 0 && styles.unreadMessage
            ]}
            numberOfLines={1}
          >
            {chat.lastMessage}
          </ThemedText>
          {chat.unreadCount > 0 && (
            <View style={styles.unreadBadge}>
              <ThemedText style={styles.unreadText}>
                {chat.unreadCount > 99 ? '99+' : chat.unreadCount}
              </ThemedText>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <ThemedView style={styles.header}>
        <View style={styles.headerTop}>
          <ThemedText type="title" style={styles.headerTitle}>
            Chats
          </ThemedText>
          <TouchableOpacity style={styles.headerButton}>
            <IconSymbol name="plus" size={24} color="#007AFF" />
          </TouchableOpacity>
        </View>
        
        {/* Search Bar */}
        <View style={[
          styles.searchContainer,
          { backgroundColor: colorScheme === 'dark' ? '#2c2c2e' : '#f2f2f7' }
        ]}>
          <IconSymbol name="magnifyingglass" size={16} color="#8e8e93" />
          <TextInput
            style={[
              styles.searchInput,
              { color: colorScheme === 'dark' ? '#ffffff' : '#000000' }
            ]}
            placeholder="Search"
            placeholderTextColor="#8e8e93"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </ThemedView>

      {/* Chat List */}
      <ScrollView style={styles.chatList}>
        {mockChats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  headerButton: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 4,
  },
  chatList: {
    flex: 1,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 12,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#34C759',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  chatContent: {
    flex: 1,
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
  },
  timestamp: {
    fontSize: 14,
    opacity: 0.6,
  },
  chatFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMessage: {
    fontSize: 14,
    opacity: 0.6,
    flex: 1,
  },
  unreadMessage: {
    opacity: 1,
    fontWeight: '500',
  },
  unreadBadge: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  unreadText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
});
