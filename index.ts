type User = {
    name: string;
    age: number | null;
    country?: "US" | "UK" | "JP";
}
// TypeScript標準
// 第二引数でほしい方を選択
type OmitUser = Omit<User, "age">;

const user: OmitUser = {
    name: "emi",
    // ageはOmitしているのでエラー
    age: 20,
};