// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 Epic Digital Interactive Media LLC

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, typography } from '../../../core/theme'

export function SendFlow(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Send</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  text: { ...typography.h2, color: colors.textPrimary },
})
