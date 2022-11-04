import { shortenAddress } from '../src';

const addr1 = '0xF73999E8995E174625881B2204171d05835C8175';
const addr2 = '0x2a81d91e19A7B9Fcda8D1aDd9a82986ac875867e';
const addr3 = '0x8E02932D45A8d116D9E1A8D3799aAB7c804A3c6E';
const invalidAddress = '888E02932D45A8d116D9E1A8D3799aAB7c804A3c6E';

function getSuccessMessage(numberOfCharacters: number) {
  return `should return the address truncated with ${numberOfCharacters} characters (excluding "0x") on each side of the ellipsis`;
}

describe('shortenAddress()', () => {
  describe('given a valid address', () => {
    it(getSuccessMessage(4), () => {
      expect(shortenAddress(addr1)).toEqual('0xF739…8175');
      expect(shortenAddress(addr2)).toEqual('0x2a81…867e');
      expect(shortenAddress(addr3)).toEqual('0x8E02…3c6E');
    });
  });

  describe('given an invalid address', () => {
    it('should return the original input', () => {
      expect(shortenAddress(invalidAddress)).toEqual(invalidAddress);
    });
  });
});
