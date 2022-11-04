type Params = {
  nPrefix?: number;
  nSuffix?: number;
};

export function shortenAddress(
  address: string,
  { nPrefix, nSuffix }: Params = {}
) {
  const match = address.match(/^(0x[a-zA-Z0-9])[a-zA-Z0-9]+([a-zA-Z0-9])$/);
  const nTotalIsLongerThanAddress =
    (nPrefix || 0) + (nSuffix || 0) > address.length;

  return match && !nTotalIsLongerThanAddress
    ? `0x${address.slice(2, 2 + (nPrefix || 4))}…${address.slice(
        address.length - (nSuffix || 4)
      )}`
    : address;
}
