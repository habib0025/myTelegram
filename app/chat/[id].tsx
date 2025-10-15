import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useLocalSearchParams, router } from 'expo-router';

// Mock messages data
const mockMessages = [
  {
    id: '1',
    text: 'Hey! How are you doing?',
    sender: 'other',
    timestamp: '2:30 PM',
    isRead: true,
  },
  {
    id: '2',
    text: 'I\'m doing great! Just working on some new projects. How about you?',
    sender: 'me',
    timestamp: '2:31 PM',
    isRead: true,
  },
  {
    id: '3',
    text: 'That sounds exciting! I\'ve been learning React Native and building some cool mobile apps.',
    sender: 'other',
    timestamp: '2:32 PM',
    isRead: true,
  },
  {
    id: '4',
    text: 'Wow, that\'s awesome! I\'d love to see what you\'ve built sometime.',
    sender: 'me',
    timestamp: '2:33 PM',
    isRead: false,
  },
];

export default function ChatScreen() {
  const { id } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState(mockMessages);

  const sendMessage = () => {
    if (messageText.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: messageText.trim(),
        sender: 'me' as const,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isRead: false,
      };
      setMessages([...messages, newMessage]);
      setMessageText('');
    }
  };

  const MessageBubble = ({ message }: { message: typeof mockMessages[0] }) => (
    <View style={[
      styles.messageContainer,
      message.sender === 'me' ? styles.myMessageContainer : styles.otherMessageContainer
    ]}>
      <View style={[
        styles.messageBubble,
        message.sender === 'me' 
          ? [styles.myMessageBubble, { backgroundColor: '#007AFF' }]
          : [styles.otherMessageBubble, { backgroundColor: colorScheme === 'dark' ? '#2c2c2e' : '#e5e5e7' }]
      ]}>
        <ThemedText style={[
          styles.messageText,
          message.sender === 'me' && styles.myMessageText
        ]}>
          {message.text}
        </ThemedText>
        <View style={[
          styles.messageTimeContainer,
          message.sender === 'me' ? styles.myMessageTime : styles.otherMessageTime
        ]}>
          <ThemedText style={[
            styles.messageTime,
            message.sender === 'me' && styles.myMessageTimeText
          ]}>
            {message.timestamp}
          </ThemedText>
          {message.sender === 'me' && (
            <IconSymbol 
              name={message.isRead ? "checkmark.circle.fill" : "checkmark.circle"} 
              size={12} 
              color={message.isRead ? "#34C759" : "#ffffff"} 
            />
          )}
        </View>
      </View>
    </View>
  );

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={[
        styles.header,
        { backgroundColor: colorScheme === 'dark' ? '#1c1c1e' : '#ffffff' }
      ]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <IconSymbol name="chevron.left" size={24} color="#007AFF" />
        </TouchableOpacity>
        
        <View style={styles.headerContent}>
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }}
            style={styles.headerAvatar}
          />
          <View style={styles.headerText}>
            <ThemedText type="defaultSemiBold" style={styles.headerName}>
              John Doe
            </ThemedText>
            <ThemedText style={styles.headerStatus}>
              online
            </ThemedText>
          </View>
        </View>
        
        <TouchableOpacity style={styles.headerButton}>
          <IconSymbol name="video" size={24} color="#007AFF" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.headerButton}>
          <IconSymbol name="phone" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <KeyboardAvoidingView 
        style={styles.messagesContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <ScrollView 
          style={styles.messagesList}
          contentContainerStyle={styles.messagesContent}
        >
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
        </ScrollView>

        {/* Message Input */}
        <View style={[
          styles.inputContainer,
          { backgroundColor: colorScheme === 'dark' ? '#1c1c1e' : '#ffffff' }
        ]}>
          <TouchableOpacity style={styles.inputButton}>
            <IconSymbol name="plus" size={24} color="#007AFF" />
          </TouchableOpacity>
          
          <View style={[
            styles.textInputContainer,
            { backgroundColor: colorScheme === 'dark' ? '#2c2c2e' : '#f2f2f7' }
          ]}>
            <TextInput
              style={[
                styles.textInput,
                { color: colorScheme === 'dark' ? '#ffffff' : '#000000' }
              ]}
              placeholder="Message"
              placeholderTextColor="#8e8e93"
              value={messageText}
              onChangeText={setMessageText}
              multiline
              maxLength={1000}
            />
            <TouchableOpacity style={styles.inputButton}>
              <IconSymbol name="paperclip" size={20} color="#8e8e93" />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity 
            style={[
              styles.sendButton,
              { backgroundColor: messageText.trim() ? '#007AFF' : '#8e8e93' }
            ]}
            onPress={sendMessage}
            disabled={!messageText.trim()}
          >
            <IconSymbol 
              name="arrow.up" 
              size={20} 
              color="#ffffff" 
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e5e7',
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    flex: 1,
  },
  headerName: {
    fontSize: 16,
    fontWeight: '600',
  },
  headerStatus: {
    fontSize: 14,
    opacity: 0.6,
    color: '#34C759',
  },
  headerButton: {
    padding: 8,
    marginLeft: 8,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesList: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
    paddingBottom: 8,
  },
  messageContainer: {
    marginBottom: 8,
  },
  myMessageContainer: {
    alignItems: 'flex-end',
  },
  otherMessageContainer: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
  },
  myMessageBubble: {
    borderBottomRightRadius: 4,
  },
  otherMessageBubble: {
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 4,
  },
  myMessageText: {
    color: '#ffffff',
  },
  messageTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  myMessageTime: {
    justifyContent: 'flex-end',
  },
  otherMessageTime: {
    justifyContent: 'flex-start',
  },
  messageTime: {
    fontSize: 12,
    opacity: 0.6,
  },
  myMessageTimeText: {
    color: '#ffffff',
    opacity: 0.8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    borderTopWidth: 0.5,
    borderTopColor: '#e5e5e7',
  },
  inputButton: {
    padding: 8,
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    maxHeight: 100,
    paddingVertical: 4,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
