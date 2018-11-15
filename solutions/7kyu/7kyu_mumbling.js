// This time no story, no theory. The examples below show you how to write function accum:

// accum("abcd"); // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt"); // "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(str) {
        let arr = [...str];
        var arrayWords = arr.map(function(element, index) {
                let words = [];
                for (var i = 0; i < index; i++) {
                        words.push(element.toLowerCase());
                }
                return element.toUpperCase() + words.join("");
        });
        return arrayWords.join("-");
}

//tests
accum("ZpglnRxqenU");
// "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu";
accum("NyffsGeyylB");
// "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb";
accum("MjtkuBovqrU");
// "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu";
accum("EvidjUnokmM");
// "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm";
accum("HbideVbxncC");
// "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc";
