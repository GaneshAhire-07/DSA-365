function max(A){
  let max=A[0];
  for(let i=1;i<A.length;i++){
    if(max<A[i]){
      max=A[i];
    }
  }
  return max;
}
function min(A){
  let min=A[0];
  for(let i=1;i<A.length;i++){
    if(min>A[i]){
      min=A[i];
    }
  }
  return min;
}
function main(){
  const A=[10,23,45,78,99,4,0]
  console.log("max elt "+max(A));
  console.log("min elt "+min(A));
}
main();