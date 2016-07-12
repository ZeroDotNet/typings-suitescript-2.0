/// <reference path="encode.d.ts" />

/**
 * Encapsulates a cipher.
 */
interface Cipher {
  /**
   * Description TBA (5/9/2016)
   */
  final(options: FinalOptions): CipherPayload;
  /**
   * Description TBA (5/9/2016)
   */
  update(options: UpdateOptions): void;
}
/**
 * Encapsulates a cipher payload.
 */
interface CipherPayload {
  encoding: string;
  iv: number;
}

interface Decipher {
  /**
   * Description TBA (5/9/2016)
   */
  final(options: FinalOptions): string;
  /**
   * Method used to update decipher data with the specified encoding.
   */
  update(options: UpdateOptions): void;
}

interface Hash {
  /**
   * Calculates the digest of the data to be hashed.
   */
  digest(options: FinalOptions): string;
  /**
   * Method used to update hash data with the encoding specified.
   */
  update(options: UpdateOptions): void;
}

interface Hmac {
  /**
   * Gets the computed digest.
   */
  digest(options: FinalOptions): string;
  /**
   * Method used to update the hmac data with the encoding specified.
   */
  update(options: UpdateOptions): void;
}

interface SecretKey {
  guid: string;
  encoding: string;
}

interface FinalOptions {
  /**
   * The output encoding for a crypto.CipherPayload object.
   */
  outputEncoding: string;
}

interface UpdateOptions {
  /** 
   * The cipher data to be updated.
   */
  input: string;
  /**
   * The input encoding using encode.Encoding enum. Default: UTF_8.
   */
  inputEncoding?: Encoding;
}

interface CreateCipherOptions {
  /**
   * The hash algorithm. Set the value using thecrypto.Hash enum.
   */
  algorithm: HashAlgTypes;
  /**
   * The crypto.SecretKey object.
   */
  key: SecretKey;
  /**
   * The encryption mode for the cipher block.
   */
  blockCipherMode: string;
  /**
   * The padding for the cipher. Set the value using the crypto.Padding enum.
   */
  padding: PaddingTypes;
}

interface CreateDecipherOptions {
  /**
   * The hash algorithm. Set by the crypto.Hash enum.
   */
  algorithm: HashAlgTypes;
  /**
   * The crypto.SecretKey object.
   */
  key: SecretKey;
  /**
   * Description TBA (5/9/2016)
   */
  blockCipherMode: string;
  /**
   * Description TBA (5/9/2016)
   */
  padding: PaddingTypes;
  /**
   * Description TBA (5/9/2016)
   */
  iv: string;
}

interface CreateHashOptions {
  /**
   * The hash algorithm. Set by the crypto.Hash enum.
   */
  algorithm: HashAlgTypes;
}

interface CreateHmacOptions {
  /**
   * The hash algorithm. Set by the crypto.Hash enum.
   */
  algorithm: HashAlgTypes;
  /**
   * The crypto.SecretKey object.
   */
  key: SecretKey;
}

interface CreateSecretKeyOptions {
  guid: string;
  encoding: string;
}

interface EncryptionAlgTypes {
  AES: string;
}

interface HashAlgTypes {
  SHA1: string;
  SHA256: string;
  SHA512: string;
  MD5: string;
}

interface PaddingTypes {
  NoPadding: string;
  PKCS5Padding: string;
}