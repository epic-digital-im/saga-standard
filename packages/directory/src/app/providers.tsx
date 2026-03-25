// Copyright 2026 Epic Digital Interactive Media LLC
// SPDX-License-Identifier: Apache-2.0

'use client'

import { ChromeProviders } from '@epicdm/chrome'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChromeProviders>{children}</ChromeProviders>
}
