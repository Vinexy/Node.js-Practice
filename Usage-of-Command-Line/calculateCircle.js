
const arguments = process.argv.slice(2);

function calculate(radius){

    const circleArea = radius*radius*3.14;
    console.log(circleArea);
}

calculate(arguments[0] * 1);
