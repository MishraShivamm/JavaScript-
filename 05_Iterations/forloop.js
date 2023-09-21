// FOr loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 6) {
        console.log(" 6 is a greate number");
    }
    console.log(element);
    
}


for (let i = 0; i <=10 ; i++) {
    //console.log('Outer loop value  : ${i}');
    for (let j = 0; j <= 10 ; j++) {
        //console.log("inner loop : ${j}");
        console.log(i + " * "+j + " = " + i * j );
        
    }
}

/* let array = [ "King", "Queen", "Jack", "thief"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}  */


// Break and continue

/*for (let s = 0; s <=20; s++) {
    if(s == 5){
        console.log(" 5 is detected");
        break
    }
    console.log(s);
    
} */
for (let s = 0; s <=20; s++) {
    if(s == 5){
        console.log(" 5 is detected");
        continue
    }
    console.log(s);
    
}