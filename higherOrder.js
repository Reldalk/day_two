function repeat(fn, n){
    for(let i = 0; i < n; i++){
        fn("!");
    }
}

repeat(function hello(test){console.log("Hello World" + test)}, 5);
repeat(function goodbye(test){console.log("Goodbye World" + test)}, 5);