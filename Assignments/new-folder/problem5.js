let n=4;
let count=(n*(n+1)/2);
for(let i=n;i>=1;i--){
     let s="";
    for(let j=1;j<=i;j++){
          process.stdout.write(count + " ");
          count--;
    }
    console.log();
}