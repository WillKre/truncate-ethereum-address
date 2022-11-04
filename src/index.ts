export function shortenAddress(
  address: string,
  prefixNumber = 4,
  suffixNumber = 4
) {
  const match = address.match(/^(0x[a-zA-Z0-9])[a-zA-Z0-9]+([a-zA-Z0-9])$/);

  return match
    ? `0x${address.slice(2, 2 + prefixNumber)}…${address.slice(
        address.length - suffixNumber
      )}`
    : address;
}
