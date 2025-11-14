import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { channels as channelData } from '@/mock/data';
import { Image } from 'expo-image';
import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function ChannelsScreen() {
  const colorScheme = useColorScheme();
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return channelData;
    return channelData.filter(c => c.title.toLowerCase().includes(q));
  }, [searchQuery]);

  const ChannelItem = ({ channel }: { channel: typeof filtered[0] }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={{ uri: channel.avatar }} style={styles.avatar} />
      <View style={styles.content}>
        <ThemedText type="defaultSemiBold" style={styles.title}>
          {channel.title}
        </ThemedText>
        <ThemedText style={styles.subtitle} numberOfLines={1}>
          Latest posts and updates
        </ThemedText>
      </View>
      <IconSymbol name="chevron.right" size={16} color="#8e8e93" />
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>
          Channels
        </ThemedText>
        <View style={[
          styles.search,
          { backgroundColor: colorScheme === 'dark' ? '#2c2c2e' : '#f2f2f7' }
        ]}>
          <IconSymbol name="magnifyingglass" size={16} color="#8e8e93" />
          <TextInput
            style={[
              styles.searchInput,
              { color: colorScheme === 'dark' ? '#ffffff' : '#000000' }
            ]}
            placeholder="Search channels"
            placeholderTextColor="#8e8e93"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </ThemedView>
      
      <ScrollView style={styles.scrollView}>
        {filtered.map(channel => (
          <ChannelItem key={channel.id} channel={channel} />
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
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  search: {
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
  scrollView: {
    flex: 1,
  },
  item: {
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
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.6,
    marginTop: 2,
  },
});

