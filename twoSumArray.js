console.time("timeTaken");
let nums = [15, 1, 2, 3, 4, 9, 1, 4, 7, 12, 0];
nums = [...new Set(nums)];
const target = 12;



// Old approach

// const getIndices = (data, target) => {
//     let indices = [];
//     for (let i = 0; i < data.length; i++) {
//         if(!(data[i] > target)) {
//             for (let j = i + 1; j < data.length; j++) {
//                 if((data[i] + data[j] ) === target){
//                     indices.push(i, j);
//                 }
//             }
//         }
//     }
//     return indices;
// }


const getIndices = (nums, target) => {
        let indices = [];
        const map = new Map;
        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if (map.has(complement)) {
                indices.push(map.get(complement), i);
            }
            map.set(nums[i], i);
        }
        return indices;
}

// expected output:   [3,5,7,8]
console.log(`indices for set of number [${nums}] is [${getIndices(nums, target)}], where target is ${target}`);

console.timeEnd("timeTaken");