import { PartialDeep } from "type-fest";
type User = {
    name: string;
    age: number | null;
    address: {
        country: "US" | "UK" | "JP";
    }
};

type PartialUser = PartialDeep<User>;

const user: PartialUser = {
    name: "emi",
    address: {}
};