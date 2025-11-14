import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useTheme } from '@/contexts/ThemeContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { settings as initialSettings } from '@/mock/data';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen() {
  const [settings, setSettings] = useState(initialSettings);
  const { themeMode, setThemeMode } = useTheme();
  const colorScheme = useColorScheme();

  const toggleTheme = () => {
    if (themeMode === 'light') {
      setThemeMode('dark');
    } else if (themeMode === 'dark') {
      setThemeMode('system');
    } else {
      setThemeMode('light');
    }
  };

  const getThemeDisplayName = () => {
    if (themeMode === 'system') {
      return `System (${colorScheme})`;
    }
    return themeMode.charAt(0).toUpperCase() + themeMode.slice(1);
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ThemedView style={styles.header}>
          <ThemedText type="title">Settings</ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Appearance</ThemedText>
          <TouchableOpacity style={styles.row} onPress={toggleTheme}>
            <ThemedText>Theme</ThemedText>
            <View style={styles.themeSelector}>
              <ThemedText style={styles.themeValue}>{getThemeDisplayName()}</ThemedText>
              <ThemedText style={styles.themeToggle}>Tap to change</ThemedText>
            </View>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">General</ThemedText>
          <View style={styles.row}>
            <ThemedText>Notifications</ThemedText>
            <Switch
              value={settings.notifications}
              onValueChange={(v) => setSettings(s => ({ ...s, notifications: v }))}
            />
          </View>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Privacy</ThemedText>
          <View style={styles.row}><ThemedText>Last Seen</ThemedText><ThemedText>{settings.privacy.lastSeen}</ThemedText></View>
          <View style={styles.row}><ThemedText>Profile Photo</ThemedText><ThemedText>{settings.privacy.profilePhoto}</ThemedText></View>
          <View style={styles.row}><ThemedText>Forwarded Messages</ThemedText><ThemedText>{settings.privacy.forwardedMessages}</ThemedText></View>
        </ThemedView>
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
  section: { paddingHorizontal: 20, paddingVertical: 12, gap: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 },
  themeSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  themeValue: {
    fontWeight: '500',
  },
  themeToggle: {
    fontSize: 12,
    opacity: 0.6,
  },
});
