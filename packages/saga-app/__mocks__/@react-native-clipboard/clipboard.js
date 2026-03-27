// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 Epic Digital Interactive Media LLC

/* global jest */

module.exports = {
  setString: jest.fn(),
  getString: jest.fn().mockResolvedValue(''),
}
