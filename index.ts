const foo = (id: number, name: string) => {
    return 0;
};

type Return<T> = T extends (...args: [infer U, ...any[]]) => any ? U : never;

type Foo = Return<typeof foo>;
// Only the first argument will be taken:number