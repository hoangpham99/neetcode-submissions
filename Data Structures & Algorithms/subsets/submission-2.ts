class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res: number[][] = []
        const subset: number[] = []
        
        const dfs = (i: number) => {
            if(i >= nums.length) {
                res.push([...subset])
                return
            }

            subset.push(nums[i])
            dfs(i + 1)

            subset.pop()
            dfs(i + 1)
        }

        dfs(0)
        return res
    }
}
