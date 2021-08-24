import React from 'react';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';

type LayoutProps = {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps): JSX.Element => Platform.OS === 'ios'
  ? (
    <SafeAreaView style={styles.container}>{children}</SafeAreaView>
  ) : (
    <View style={styles.container}>{children}</View>
  )

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
  },
});
