import { PublicKey, Commitment, Finality } from '@solana/web3.js';

/**
 * Basic configuration options for the QRNG client
 */
export interface QrngClientOptions {
  /**
   * Program ID of the QRNG service (defaults to mainnet ID)
   */
  programId?: PublicKey;
  
  /**
   * Token mint address for TSOTCHKE (defaults to mainnet mint)
   */
  tokenMint?: PublicKey;
  
  /**
   * Treasury address (defaults to mainnet treasury)
   */
  treasuryAddress?: PublicKey;
}

/**
 * Options for transaction confirmation
 */
export interface QrngConfirmOptions {
  /**
   * Commitment level for the transaction
   */
  commitment?: Commitment;
  
  /**
   * Maximum time to wait for confirmation (in milliseconds)
   */
  timeout?: number;
}

/**
 * Instruction types for the QRNG program
 */
export enum QrngInstructionType {
  INITIALIZE_PROGRAM = 0,
  GENERATE_RANDOM_U64 = 1,
  GENERATE_RANDOM_DOUBLE = 2,
  GENERATE_RANDOM_BOOLEAN = 3
}
