// const topKFreq = (nums, k) => {
//     const hashMap = {}

//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] in hashMap){
//             strNum = nums[i].toString()
//             hashMap[`${strNum}`] += 1
//         } else {
//             strNum = nums[i].toString()
//             hashMap[`${strNum}`] = 1
//         }
//     }
//     arr = []
//     max = []

//     for (const [key, value] of Object.entries(hashMap)) {
//         arr.push({key, value})
//     }
//     console.log(arr)

//     arr = arr.sort((a,b) => b.value - a.value)

//     for (let i = 0; i < k; i++) {
//         console.log(arr[i])
//         keyArr = Object.values(arr[i])
//         max.push(parseInt(keyArr[0]))
//     }
//     return max
// };

// nums = [-1,-1,-1,2,2,3]
// k = 2
// console.log(topKFreq(nums, k))

var topKFrequent = function(nums, k) {
    // look up
    // { element: # seen }
    // {1: 3, 2: 2, 3: 1}
    const seen = {}

    for(let num of nums) {
        if(seen[num] === undefined){
            seen[num] = 1
        } else {
            seen[num]++
        }
    }
    // [[], [3], [2], [1]]
    const bucket = []
    for(let i = 0; i <= nums.length; i++){
        bucket.push([])
    }

    for(let key in seen){
        let count = seen[key]
        bucket[count].push(key)
    }
    let res = [];
    for(let i = bucket.length - 1; i>=0; i--){
        if (bucket[i].length === 0){
            continue
        }else{
            res = [...res, ...bucket[i]]
            // [1,2,3]
        }
    }
    return res.slice(0,k)
}