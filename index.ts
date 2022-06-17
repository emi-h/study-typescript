const getPriority = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
};
const setPriority = <T, K extends keyof T>(obj: T, key: K, value: T[K]) => {
    obj[key] = value;
};

const obj = {
    foo: 1,
    bar: 2,
    baz: 3,
};

// const hoge = getPriority(obj, "baz");
// baz:number

setPriority(obj, "bar", 100);