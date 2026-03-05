function add (a: number, b:number ) : number{
    return a+b;
}

function sub (a: number, b:number ) : number{
    return a-b;
}

function mul (a: number, b:number ) : number{
    return a*b;
}

function div (a: number, b:number ) : number{
    return a/b;
}

let a: number = 2;
let b: number = 3;
console.log(`${a} + ${b} = ${add(a,b)}`)
console.log(`${a} - ${b} = ${sub(a,b)}`)
console.log(`${a} * ${b} = ${mul(a,b)}`)
console.log(`${a} / ${b} = ${div(a,b)}`)