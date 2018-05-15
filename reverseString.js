export const reverseString = (str) => {
    return str.split('').reduce((reversed, char) => {
        return char + reversed;
    } , '');
}
