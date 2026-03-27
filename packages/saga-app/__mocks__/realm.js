// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 Epic Digital Interactive Media LLC

/* global jest */

const Realm = {
  Object: class RealmObject {},
  open: jest.fn().mockResolvedValue({
    isClosed: false,
    close: jest.fn(),
    write: jest.fn(cb => cb()),
    objects: jest.fn().mockReturnValue([]),
  }),
}

module.exports = Realm
module.exports.default = Realm
