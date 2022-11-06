import { truncate } from '../src';

const addr1 = '0xF73999E8995E174625881B2204171d05835C8175';
const addr2 = '0x2a81d91e19A7B9Fcda8D1aDd9a82986ac875867e';
const addr3 = '0x8E02932D45A8d116D9E1A8D3799aAB7c804A3c6E';
const invalidAddress1 = '888E02932D45A8d116D9E1A8D3799aAB7c804A3c6E';
const invalidAddress2 = 'satoshi';
const invalidAddress3 = '';

function getSuccessMessage(nPrefix = 4, nSuffix = 4) {
  return `should return the address truncated with ${nPrefix} character${
    nPrefix > 1 ? 's' : ''
  } on the left of the ellipsis (excluding "0x") and ${nSuffix} on the right`;
}

function getErrorMessage() {
  return 'should return the original input';
}

describe('truncate()', () => {
  describe('given a valid address', () => {
    it(getSuccessMessage(), () => {
      expect(truncate(addr1)).toEqual('0xF739…8175');
      expect(truncate(addr2)).toEqual('0x2a81…867e');
      expect(truncate(addr3)).toEqual('0x8E02…3c6E');
    });

    describe('...and a nPrefix of 1', () => {
      it(getSuccessMessage(1), () => {
        expect(truncate(addr1, { nPrefix: 1 })).toEqual('0xF…8175');
        expect(truncate(addr2, { nPrefix: 1 })).toEqual('0x2…867e');
        expect(truncate(addr3, { nPrefix: 1 })).toEqual('0x8…3c6E');
      });
    });

    describe('...and a nSuffix of 10', () => {
      it(getSuccessMessage(4, 10), () => {
        expect(truncate(addr1, { nSuffix: 10 })).toEqual('0xF739…05835C8175');
        expect(truncate(addr2, { nSuffix: 10 })).toEqual('0x2a81…6ac875867e');
        expect(truncate(addr3, { nSuffix: 10 })).toEqual('0x8E02…7c804A3c6E');
      });
    });

    describe('...and both a nPrefix of 6 and a nSuffix of 7', () => {
      it(getSuccessMessage(6, 6), () => {
        expect(truncate(addr1, { nPrefix: 6, nSuffix: 7 })).toEqual('0xF73999…35C8175');
        expect(truncate(addr2, { nPrefix: 6, nSuffix: 7 })).toEqual('0x2a81d9…875867e');
        expect(truncate(addr3, { nPrefix: 6, nSuffix: 7 })).toEqual('0x8E0293…04A3c6E');
      });
    });

    describe('...and an nPrefix and/or nSuffix which is longer than the address', () => {
      it(getErrorMessage(), () => {
        expect(truncate(addr1, { nPrefix: 43, nSuffix: 0 })).toEqual(addr1);
      });
      it(getErrorMessage(), () => {
        expect(truncate(addr2, { nPrefix: 22, nSuffix: 22 })).toEqual(addr2);
      });
      it(getErrorMessage(), () => {
        expect(truncate(addr3, { nPrefix: 0, nSuffix: 43 })).toEqual(addr3);
      });
    });

    describe('...and a separator specified', () => {
      it(`${getSuccessMessage()} with the correct syntax`, () => {
        expect(truncate(addr1, { separator: 'braces' })).toEqual('0xF739{…}8175');
        expect(truncate(addr2, { separator: 'brackets' })).toEqual('0x2a81[…]867e');
        expect(truncate(addr3, { separator: 'parenthesis' })).toEqual('0x8E02(…)3c6E');
      });
    });
  });

  describe('given an invalid address', () => {
    it(getErrorMessage(), () => {
      expect(truncate(invalidAddress1)).toEqual(invalidAddress1);
      expect(truncate(invalidAddress2)).toEqual(invalidAddress2);
      expect(truncate(invalidAddress3)).toEqual(invalidAddress3);
    });
  });
});
