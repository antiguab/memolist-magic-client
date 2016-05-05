'use strict';

describe('memolistMagic.version module', function() {
  beforeEach(module('memolistMagic.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
