export const reverseInt = (n) => {
    let new_str, rev_str;
    if (n < 0) {
        rev_str = '-';
        new_str = (n * -1).toString();
    } else {
        rev_str = '';
        new_str = n.toString();
    }
    for (let i=new_str.length-1; i>=0; i--) {
        rev_str += new_str[i];
    }
    return parseInt(rev_str);
}
