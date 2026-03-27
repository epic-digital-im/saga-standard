// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 Epic Digital Interactive Media LLC

import React from 'react'
import { render } from '@testing-library/react-native'

// Mock the navigation entirely — native navigators don't work in Jest
jest.mock('../src/navigation', () => ({
  RootNavigator: () => null,
}))

import App from '../src/App'

test('renders without crashing', () => {
  const { toJSON } = render(<App />)
  expect(toJSON()).toBeTruthy()
})
