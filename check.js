for (let j = 0; j < arr.length; j++) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr2[0] || arr[i] == arr2[1]) {
      console.log("This one was a match " + arr[i]);
    } else {
      console.log("This is not a match");
    }
  }
}
