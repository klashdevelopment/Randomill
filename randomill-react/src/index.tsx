import { string, number, StringType } from "randomill-ts";
import React from "react";

export default function RandomillString({ type, gibberishLength=36 }: { type: StringType, gibberishLength?: number }) {
    return (
        <>
            {string(type, gibberishLength)}
        </>
    )
}
export function RandomillNumber({ min=0, max=1, floor=true }: { min?: number, max?: number, floor?: boolean }) {
    return (
        <>
            {floor ? Math.floor(number(min, max)) : number(min, max)}
        </>
    )
}

