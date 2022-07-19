def two_sum(nums, target):
    l = len(nums) - 1
    while l > 0:
        for r in range(len(nums)-1):
            print(l, r)
            if r != l:
                if nums[r] + nums[l] == target:
                    return [r, l]
        l -= 1


nums = [2, 7, 11, 15]
target = 9
print(two_sum(nums, target))
