export function isSshPublicKey(publicKey: string) {
  const sshPublicKeyRegex =
    /ssh-(ed25519|rsa|dss|ecdsa) AAAA(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{4})( [^@]+@[^@]+)?/;

  return sshPublicKeyRegex.test(publicKey);
}
