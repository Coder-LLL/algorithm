"use strict";
function lengthOfLongestSubstring(s) {
    // s 为空字符串直接返回 0
    if (s === "")
        return 0;
    let list = s.split("");
    let subStr = "";
    let maxLength = 1;
    let maxStr = "";
    for (let i = 0; i < list.length - 1; i++) {
        subStr = list[i];
        for (let j = i + 1; j < list.length; j++) {
            if (subStr.indexOf(list[j]) < 0) {
                subStr += list[j];
            }
            else {
                break;
            }
        }
        if (subStr.length > maxLength) {
            maxLength = subStr.length;
            maxStr = subStr;
        }
    }
    return maxLength;
}
let str = "pwwkew";
console.log(lengthOfLongestSubstring(str));
