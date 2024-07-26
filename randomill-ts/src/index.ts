import cities from './data/cities.json';
import countries from './data/countries.json';
import firstNames from './data/names.json';
import lastNames from './data/lasts.json';
import phoneCodes from './data/phone-codes.json';
import states from './data/us-states.json';

export enum StringType {
    GibberishLetters,
    GibberishNumbers,
    Gibberish,
    FirstName,
    LastName,
    City,
    Country,
    Email,
    USState,
    PhoneNumber
}

function gibberish(length: number) {
    return Array.from({ length }, () => Math.floor(Math.random() * 36).toString(36)).join('');
}
function gibberishLetters(length: number) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    return Array.from({ length }, () => alphabet[Math.floor(Math.random()*alphabet.length)]).join('');
}
function gibberishNumbers(length: number) {
    return Array.from({ length }, () => Math.floor(Math.random() * 10).toString(36)).join('');
}
function randomOption<T>(options: T[]): T {
    return options[Math.floor(Math.random() * options.length)];
}

export function string(type=StringType.Gibberish, gibberishLength=36): string {
    switch (type) {
        case StringType.Gibberish:
            return gibberish(gibberishLength);
        case StringType.GibberishLetters:
            return gibberishLetters(gibberishLength);
        case StringType.GibberishNumbers:
            return gibberishNumbers(gibberishLength);
        case StringType.FirstName:
            return randomOption(firstNames);
        case StringType.LastName:
            return randomOption(lastNames);
        case StringType.City:
            return randomOption(cities);
        case StringType.Country:
            return randomOption(countries);
        case StringType.Email:
            return `${randomOption(firstNames).toLowerCase()}@${randomOption(countries).toLowerCase()}.com`;
        case StringType.USState:
            return randomOption(states);
        case StringType.PhoneNumber:
            return `${randomOption(phoneCodes)}-${gibberishNumbers(3)}-${gibberishNumbers(4)}`;
        default:
            return gibberish(gibberishLength);
    }
}

export function number(min=0, max=1): number {
    return Math.random() * (max - min) + min;
}

export default {
    string,
    number,
    StringType
}