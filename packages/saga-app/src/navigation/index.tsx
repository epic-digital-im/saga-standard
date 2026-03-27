// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 Epic Digital Interactive Media LLC

import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../core/theme'
import { DrawerNavigator } from './DrawerNavigator'
import { OnboardingStack } from './OnboardingStack'
import type { RootStackParamList } from './types'

const sagaTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.background,
    card: colors.surface,
    text: colors.textPrimary,
    border: colors.border,
    notification: colors.error,
  },
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function RootNavigator(): React.JSX.Element {
  // TODO: Phase 1 — replace with AuthProvider state (isUnlocked, hasCompletedOnboarding)
  const hasCompletedOnboarding = true

  return (
    <NavigationContainer theme={sagaTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!hasCompletedOnboarding ? (
          <Stack.Screen name="Onboarding" component={OnboardingStack} />
        ) : (
          <Stack.Screen name="Main" component={DrawerNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
