function reverse(A){
  let left=0;
  let right=A.length-1;
  while(left<right){
    let temp=A[left];
    A[left]=A[right];
    A[right]=temp;
    left++;
    right--;
  }
  return A;
}
function main(){
  let A=[12,25,43,78,3,65,77,99];
  A=reverse(A);
  console.log("Reverse Array is ")
  console.log(A.join(" "));
}
main();