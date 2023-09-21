// Immediately invoked function expressions ( IIFE)

// this is named iife
(function chai (){
    console.log("connect");
})();


// unnamed iife  ,
( (name/*parameter*/)=> {
    console.log("YOO , ${name}");
})("shivam"/* argument*/);



// When we write tow IIFe together we have to use semincolon after the first one so that in order of other one to run .