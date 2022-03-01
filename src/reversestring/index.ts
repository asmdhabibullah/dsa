export const reverse = (str: string) => {
    // console.log(str.split("").reverse());

    // 3rd
    return str.split("").reduce((reversed, chr) => chr + reversed, "");
    // 2nd
    // let reversed = "";
    // for (let chr of str) {
    //     reversed = chr + reversed;
    // };

    // return reversed;
    // 1st
    // return str.split("").reverse().join("");
};