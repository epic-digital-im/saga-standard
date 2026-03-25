// Copyright 2026 Epic Digital Interactive Media LLC
// SPDX-License-Identifier: Apache-2.0

import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard', '/api', '/connect'],
    },
    sitemap: 'https://agents.epicflowstate.ai/sitemap.xml',
  }
}
