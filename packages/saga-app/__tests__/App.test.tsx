// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 Epic Digital Interactive Media LLC

import React from 'react'
import { render } from '@testing-library/react-native'
import App from '../src/App'

test('renders correctly', () => {
  const { getByText } = render(<App />)
  expect(getByText('SAGA App')).toBeTruthy()
})
