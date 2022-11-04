import { shortenAddress } from '../src';

const addr1 = '0xF73999E8995E174625881B2204171d05835C8175';
const addr2 = '0x2a81d91e19A7B9Fcda8D1aDd9a82986ac875867e';
const addr3 = '0x8E02932D45A8d116D9E1A8D3799aAB7c804A3c6E';
const invalidAddress1 = '888E02932D45A8d116D9E1A8D3799aAB7c804A3c6E';
const invalidAddress2 = 'satoshi';
const invalidAddress3 = '';

function getSuccessMessage(prefixNumber = 4, suffixNumber = 4) {
  return `should return the address truncated with ${prefixNumber} characters on the left of the ellipsis (excluding "0x") and ${suffixNumber} on the right`;
}

describe('shortenAddress()', () => {
  describe('given a valid address', () => {
    it(getSuccessMessage(), () => {
      expect(shortenAddress(addr1)).toEqual('0xF739…8175');
      expect(shortenAddress(addr2)).toEqual('0x2a81…867e');
      expect(shortenAddress(addr3)).toEqual('0x8E02…3c6E');
    });

    describe('...and a prefixNumber of 1', () => {
      it(getSuccessMessage(1), () => {
        expect(shortenAddress(addr1, 1)).toEqual('0xF…8175');
        expect(shortenAddress(addr2, 1)).toEqual('0x2…867e');
        expect(shortenAddress(addr3, 1)).toEqual('0x8…3c6E');
      });

      describe('...and a suffixNumber of 10', () => {
        it(getSuccessMessage(1, 10), () => {
          expect(shortenAddress(addr1, 1, 10)).toEqual('0xF…05835C8175');
          expect(shortenAddress(addr2, 1, 10)).toEqual('0x2…6ac875867e');
          expect(shortenAddress(addr3, 1, 10)).toEqual('0x8…7c804A3c6E');
        });
      });
    });
  });

  describe('given an invalid address', () => {
    it('should return the original input', () => {
      expect(shortenAddress(invalidAddress1)).toEqual(invalidAddress1);
      expect(shortenAddress(invalidAddress2)).toEqual(invalidAddress2);
      expect(shortenAddress(invalidAddress3)).toEqual(invalidAddress3);
    });
  });
});
