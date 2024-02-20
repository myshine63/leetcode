var permute = function (nums) {
  let res = [];
  const f1 = (arr)=>{
    for(let i =0;i<nums.length;i++){
      if(arr.includes(nums[i])){
        continue;
      }
      let a = [...arr,nums[i]];
      if(a.length === nums.length){
        res.push(a)
      }else{
        f1(a)
      }
    }
  }
  f1([])
  return res
};