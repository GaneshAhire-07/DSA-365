function nextPermutation(A) {
  let ind1 = -1,
    ind2 = -1;

  // Step 1: Right पासून पहिला decreasing element शोध
  for (let i = A.length - 2; i >= 0; i--) {
    if (A[i] < A[i + 1]) {
      ind1 = i;
      break;
    }
  }

  // जर ind1 सापडला नाही → reverse करून smallest permutation परत कर
  if (ind1 == -1) {
    reverse(A, 0);
    return A;
  }

  // Step 2: Right पासून पहिला element शोध जो A[ind1] पेक्षा मोठा आहे
  for (let i = A.length - 1; i > ind1; i--) {
    if (A[i] > A[ind1]) {
      ind2 = i;
      break;
    }
  }

  // Step 3: Swap ind1 आणि ind2
  swap(A, ind1, ind2);

  // Step 4: ind1+1 पासून शेवटपर्यंत reverse करा
  reverse(A, ind1 + 1);

  return A;
}

function reverse(A, start) {
  let i = start,
    j = A.length - 1;
  while (i < j) {
    swap(A, i, j);
    i++;
    j--;
  }
}

function swap(A, i, j) {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

function main() {
  let A = [1, 2, 3];
  console.log(nextPermutation(A)); // [1, 3, 2]

  A = [3, 2, 1];
  console.log(nextPermutation(A)); // [1, 2, 3]

  A = [1, 1, 5];
  console.log(nextPermutation(A)); // [1, 5, 1]
}
main();
