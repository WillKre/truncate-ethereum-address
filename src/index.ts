export function shortenAddress(address: string) {
  const match = address.match(
    /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/
  );

  return match ? `${match[1]}…${match[2]}` : address;
}
