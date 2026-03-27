// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 Epic Digital Interactive Media LLC

const React = require('react')
const { View } = require('react-native')
module.exports = function QRCode(props) {
  return React.createElement(View, { testID: 'qr-code', ...props })
}
