type UserA = { name: string; lang: "ja" };
type UserB = { name: string; lang: "en" };

const isUserA = (user: UserA | UserB): user is UserA => {
    return user.lang === "ja"
}
const isUserB = (user: UserA | UserB): user is UserB => {
    return user.lang === "en"
}

const users: (UserA | UserB)[] = [
    { name: "たなか", lang: "ja" },
    { name: "山田", lang: "ja" },
    { name: "ジョン", lang: "en" },
];

const Japanese = users.filter(isUserA);
const NotJapanese = users.filter(isUserB);
