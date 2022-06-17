type Props = {
    id: string;
    name: string;
    age: number;
};
// stringだけ取り出したい時にconditionalを使う
type Filter<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

type stringKeys = Filter<Props, string>;
type numberKeys = Filter<Props, number>;
type booleanKeys = Filter<Props, boolean>;