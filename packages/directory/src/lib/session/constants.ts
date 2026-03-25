// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 Epic Digital Interactive Media LLC

export const SESSION_COOKIE_NAME = '__session_dir'

export interface SessionData {
  identityId: string
  email: string
  name?: string
  avatarUrl?: string | null
  walletAddress?: string
  handle?: string
  companySlug?: string
  [key: string]: unknown
}
