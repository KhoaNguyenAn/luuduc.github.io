
async function myFunction(value) {
  $("#img").css("display", "none");
  return;
}
async function go() {
  let delayInMilliseconds = 2000;
  await myFunction();
  // setTimeout(function() {
  //   $("#img").css("display", "none");
  // }, delayInMilliseconds);

  // let myPromise = new Promise(function(myResolve, myReject) {
  //   // "Producing Code" (May take some time)
  //     $("#img").css("display", "none");
  //     myResolve(); // when successful
  //     myReject();  // when error
  //   });
  // setTimeout(function() { myFunction("I love You !!!"); }, 1000);

  let p = 23;
  let g = 5;
  let secretA = prompt("Input secret key of person A");
  let secretB = prompt("Input secret key of person B");
  document.getElementById("secretA").innerHTML = `<p> Secret A: ${secretA} </p>`;
  document.getElementById("secretB").innerHTML = `<p> Secret B: ${secretB} </p>`;

  let nA = Math.pow(g,secretA) % p;
  alert(`Step 1:`);
  alert(`Person A calculates this formular: (g ^ secretA) % p = ${nA}`);
  alert(`After person A have the result, send this value to B`);
  


  setTimeout(function() {
    document.getElementById("b1").innerHTML = `<p> B receives from A the value : ${nA} </p> `;
    step2(secretA,secretB,nA);
  }, delayInMilliseconds);
}

function step2(secretA,secretB,nA) {
  let p = 23;
  let g = 5;
  let nB = Math.pow(g,secretB) % p;
  delayInMilliseconds = 3000;
  setTimeout(function() {
    alert(`Step 2:`);
    alert(`Person B calculates this formular: (g ^ secretB) % p = ${nB}`);
    alert(`After person B have the result, send this value to A`);
  }, delayInMilliseconds);
  setTimeout(function() {
    document.getElementById("a1").innerHTML = `<p> A receives from B the value : ${nB} </p> `;
    step3(secretA,secretB,nB,nA);
  }, delayInMilliseconds);
}

function step3(secretA,secretB,nB,nA) {
  let p = 23;
  let g = 5;
  delayInMilliseconds = 3000;
  let final = 0;
  setTimeout(function() {
    alert(`Person A will calculate this formular: ${nB} ^ secretA.`)
    final = Math.pow(nB, secretA) % p;
    document.getElementById("a2").innerHTML = `<p> Final secret key that A has: ${final} </p> `;
  }, delayInMilliseconds);
  setTimeout(function() {
    let final2 = Math.pow(nA, secretB) % p;
    alert(`Person B will calculate this formular: ${nA} ^ secretB.`)
    document.getElementById("b2").innerHTML = `<p> Final secret key that B has: ${final2} </p> `;
  }, delayInMilliseconds);

  setTimeout(function(){
    window.confirm(`Finally, both A and B share the same secret key : ${final} !!! `)
  }, delayInMilliseconds);
}