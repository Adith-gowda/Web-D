var number = 10;

function increase(number){
    this.number++;
    console.log(this.number);
}

increase(number);
console.log(number);