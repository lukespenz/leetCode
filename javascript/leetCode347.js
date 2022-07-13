const topKFreq = (nums, k) => {
    const hashMap = {}

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] in hashMap){
            strNum = nums[i].toString()
            hashMap[`${strNum}`] += 1
        } else {
            strNum = nums[i].toString()
            hashMap[`${strNum}`] = 1
        }
    }
    arr = []
    max = []

    for (const [key, value] of Object.entries(hashMap)) {
        arr.push({key, value})
    }
    console.log(arr)

    arr = arr.sort((a,b) => b.value - a.value)

    for (let i = 0; i < k; i++) {
        console.log(arr[i])
        keyArr = Object.values(arr[i])
        max.push(parseInt(keyArr[0]))
    }
    return max
};

nums = [-1,-1,-1,2,2,3]
k = 2
console.log(topKFreq(nums, k))