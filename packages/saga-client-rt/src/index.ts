// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 Epic Digital Interactive Media LLC

// ── Types ──
export type {
  Unsubscribe,
  WalletSigner,
  SagaMemoryType,
  SagaMemory,
  MemoryFilter,
  SagaDirectMessageType,
  SagaDirectMessage,
  ConnectedPeer,
  WebSocketLike,
  SagaClientConfig,
  SagaClient,
  SagaKeyRing,
  SagaEncryptedEnvelope,
  StorageBackend,
  MemoryScope,
  CompanyReplicationPolicy,
  PolicyClassification,
  PolicyAuditEntry,
  GovernanceConfig,
} from './types'

// ── Client factory ──
export { createSagaClient } from './client'
