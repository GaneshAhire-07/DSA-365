function maxArray(A){
  let sum=0,max=A[0];
  for(let i=0;i<A.length;i++){
    sum+=A[i];
    if(sum>max){
      max=sum;
    }
    if(sum<0){
      sum=0;
    }
  }
  return sum;
}
function main(){
let A=[-1,2,3,-4,5,-6,7,-8,9,10];
console.log(maxArray(A));
}
main();