// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 Epic Digital Interactive Media LLC

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SAGA App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0a0f',
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
  },
})
