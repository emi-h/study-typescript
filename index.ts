const foo = <T extends string | number>(arg: T) => {
    if (typeof arg === "string") {
        return { value: arg.toUpperCase() };
    }
    return { value: arg.toFixed() };
};