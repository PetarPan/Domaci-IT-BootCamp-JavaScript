{let n = 5;
string = "";

for(i = 0;i<n;i++) {
  for(j = 0;j<=i;j++){
    string += " "
  }
  for(k = 0;k<2*(n-i)-1;k++){
    string += "*"
  }
  string+= "\n"
}
for (i = 2;i<=n;i++) {
  
  for(j = 0;j<=n-i;j++){
    string += " "
  }
  for(k = 0;k<2*i-1;k++) {
    string += "*"
  }
  string += "\n"
}




console.log(string); 

}





{//d i j a m a n t //
let n = 5; 
let string = "";

for (let i = 1; i <= n; i++) {

  for (let j = n; j > i; j--) {
    string += " ";
  }
  
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}

for (let i = 1; i <= n - 1; i++) {
 
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string); }