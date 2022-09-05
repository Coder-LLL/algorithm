/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let length = s.length;
  if (length == 0) return false;
  let maps = new Map();
  let mapt = new Map();
  for (let i = 0; i < length; i++) {
    if (!maps.has(s[i])) {
      maps.set(s[i], t[i]);
    }
    if (!mapt.has(t[i])) {
      mapt.set(t[i], s[i]);
    }
    if (maps.get(s[i]) !== t[i] || mapt.get(t[i]) !== s[i]) {
      return false;
    }
  }
  return true;
};
