import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { users } from '@/mock/data';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function ContactsScreen() {
  const colorScheme = useColorScheme();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ThemedView style={styles.header}>
          <ThemedText type="title">Contacts</ThemedText>
          <View style={[styles.search, { backgroundColor: colorScheme === 'dark' ? '#2c2c2e' : '#f2f2f7' }]}>
            <IconSymbol name="magnifyingglass" size={16} color="#8e8e93" />
            <TextInput
              style={[styles.searchInput, { color: colorScheme === 'dark' ? '#ffffff' : '#000000' }]}
              placeholder="Search contacts"
              placeholderTextColor="#8e8e93"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </ThemedView>

        {filteredUsers.map(user => (
          <TouchableOpacity key={user.id} style={styles.contactItem}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <View style={styles.contactContent}>
              <ThemedText type="defaultSemiBold">{user.name}</ThemedText>
              <View style={styles.statusRow}>
                <ThemedText style={styles.statusText}>
                  {user.isOnline ? 'Online' : 'Offline'}
                </ThemedText>
                {user.isOnline && <View style={styles.onlineIndicator} />}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 10,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    gap: 8,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 4,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contactContent: {
    flex: 1,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  statusText: {
    fontSize: 14,
    opacity: 0.6,
  },
  onlineIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#34C759',
  },
});
