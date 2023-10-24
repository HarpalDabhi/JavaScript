console.log("Welcome to Javascript Operator and Expression");

//  Assignment Operator

a=10;
b=5;
console.log("A+B=",a+b);
console.log("A-B=",a-b);
console.log("A*B=",a*b);
console.log("A/B=",a/b);
console.log("A%B=",a%b);
console.log("A**B=",a**b);
console.log("A++",a++); // 10+1
console.log("++A",++a);  //11+1=12
console.log("A++",a++);  //12+1
console.log(a);  //13
console.log("--B : ",--b);
console.log("B-- : ",b--);
console.log("B : ",b);

// Assignment Operator

x=10;
y=3;
z=10;

console.log("X :",x,"Y :",z,"Y : ",y);

console.log("X==Z : ",x==z);
console.log("X=X+Z :",x+=z);
console.log("X=X-Z :",x-=z);
console.log("X=X*Z :",x*=z);
console.log("X=X/Y :",x/=y);
console.log("X=X**Y :",x**=y);
console.log("X=X%Y :",x%=y);

// Comparison Operator

p=15;
r=5;
s=5;

console.log("P : ",p,"R : ",r,"S : ",s);
console.log("P > S",p>s);
console.log("P < S",p<s);
console.log("P >= S",p>=s);
console.log("P != S",p!=s);

i="10";
j=10;

console.log("I : ",i,"J : ",j);
console.log("I==J : ",i==j);
console.log("I!=J : ",i!=j);
console.log("I===J : ",i===j);
console.log("I!==J : ",i!==j);

// Logical Operator. 
m=100;
n=100;

console.log("M : ",m,"N : ",n);
console.log("M>50 && N>50 : ",m>50 && n>150);
console.log("M>50 || N>50 : ",m>50 || n>150);
console.log("M!=50 || M!=50 : ",m!=50 || n!=50);

console.log("\n\n");

console.log("True && True : ",true && true);
console.log("True && False : ",true && false);
console.log("False && False : ",false && false);

console.log("\n\n");

console.log("True || True : ",true || true);
console.log("True || False : ",true || false);
console.log("False || False : ",false || false);

console.log("! True :",!true);
console.log("! False :",!false);