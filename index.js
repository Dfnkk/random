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

random.will = (array, lenOfWill) => {
    lenOfWill = lenOfWill - 1;
    let choice = random.int(array.length) - 1;
    if ((choice - 1) === lenOfWill || choice === lenOfWill || (choice + 1) === lenOfWill) {
        let rand = random.int(2);
        if (rand === 1) {
            return array[lenOfWill];
        } else {
            return array[choice];
        }
    } else {
        return array[choice];
    }
};

random.int0 = (max) => {
    return (Math.floor(Math.random() * max));
};


module.exports.random = random;