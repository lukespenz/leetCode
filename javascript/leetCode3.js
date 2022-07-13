const longestSubsing = (s) => {
    let l = 0
    let r = 0
    let hashMap = {}
    let longestSubsing = 0
  
    if (s.length == 1) {
      return 1
    }
  
    while (r < s.length) {
      if (s[r] in hashMap) {
        l += 1
        r = l
        hashMap = {}
      } else {
      hashMap[s[r]] = r
      r += 1
      }
      if (Object.keys(hashMap).length > longestSubsing) {
        longestSubsing = Object.keys(hashMap).length
        }
    }
    return longestSubsing
  }
  
  s = "aab"
  console.log(longestSubsing(s))