function receivesAFunction(callback){
    return callback();

}

function returnsANamedFunction(){
    return function callback() {

    }

}

function returnsAnAnonymousFunction(){
    return function() {
        console.log(`returns an anonymous function`);
    } 
    
}