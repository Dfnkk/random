let random = {};

random.int = (max) => {
    return (Math.floor(Math.random() * max)) + 1;
};

random.gen = () => {
    let num = random.int(2);
    if (num === 2) {
        return 'female';
    } else {
        return 'male';
    }
};

random.choice = (array) => {
    let len = array.length;
    let place = random.int(len);
    return array[place - 1];
};

random.float3 = (max) => {
    let x = Math.random() * max;    
    x = Math.round(x*1000)/1000
    return x;
};

console.log(random.float3(1))

module.exports.makeitred = random;