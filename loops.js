function forLoop(arr) {
  for(let i=0; i<25; i++) {
    if(i == 0)
      arr.push("I am 1 strange loop.")
    else
      arr.push(`i am ${i} strange loops.`)
  }
}