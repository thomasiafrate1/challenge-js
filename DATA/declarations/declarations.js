const escapeStr = "\` \, \/ \" \'";

const arr = [4, '2'];

const object = {
    str: "1",
    num: 2,
    bool: true,
    undef : "",
};



const nested = {
    arr: [4,"undefined", '2'],
    obj: {
        str: "1",
        num: 2,
        bool: true,
    },
};

Object.freeze(obj);
Object.freeze(nested);
Object.freeze(arr);
