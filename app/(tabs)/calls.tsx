import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { calls as callData, users } from '@/mock/data';
import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';

export default function CallsScreen() {
  const colorScheme = useColorScheme();
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return callData;
    return callData.filter(c => (users.find(u => u.id === c.userId)?.name || '').toLowerCase().includes(q));
  }, [searchQuery]);

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ThemedView style={styles.header}>
          <ThemedText type="title">Calls</ThemedText>
          <View style={[styles.search, { backgroundColor: colorScheme === 'dark' ? '#2c2c2e' : '#f2f2f7' }]}>
            <IconSymbol name="magnifyingglass" size={16} color="#8e8e93" />
            <TextInput
              style={[styles.searchInput, { color: colorScheme === 'dark' ? '#ffffff' : '#000000' }]}
              placeholder="Search calls"
              placeholderTextColor="#8e8e93"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </ThemedView>

        {filtered.map(call => {
          const user = users.find(u => u.id === call.userId)!;
          const color = call.direction === 'missed' ? '#FF3B30' : '#34C759';
          const icon = call.type === 'video' ? 'video.fill' : 'phone.fill';
          return (
            <View key={call.id} style={styles.callItem}>
              <View style={styles.callAvatar}>
                <ThemedText>{user.name.charAt(0)}</ThemedText>
              </View>
              <View style={styles.callContent}>
                <ThemedText type="defaultSemiBold">{user.name}</ThemedText>
                <ThemedText style={styles.callMeta}>{new Date(call.timestamp).toLocaleString()}</ThemedText>
              </View>
              <IconSymbol name={icon} size={18} color={color} />
            </View>
          );
        })}
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
  search: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10, gap: 8, marginTop: 10 },
  searchInput: { flex: 1, fontSize: 16, paddingVertical: 4 },
  callItem: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12, gap: 12 },
  callAvatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#e5e5e7', justifyContent: 'center', alignItems: 'center' },
  callContent: { flex: 1 },
  callMeta: { fontSize: 14, opacity: 0.6, marginTop: 2 },
});
