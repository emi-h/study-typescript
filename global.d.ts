import { FC } from "react";

declare module "react" {
    type CFC<P = {}> = FC<P & { className?: string }>
};