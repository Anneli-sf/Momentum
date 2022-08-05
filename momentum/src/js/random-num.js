export function getRandomNum(min, max) {
    let randomResult;
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1)) + min; //max and min are included
};