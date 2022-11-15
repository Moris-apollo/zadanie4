function handleCalculatorForm(form){
    document.getElementById("calcResult").innerHTML = calculate(form);
}

function handlePalindromeForm(form){

    let formValue = form.inputbox2.value;
    document.getElementById("palindromeResult").innerHTML = palindrome(formValue);
}

function calculate(form){
    let values = form.inputbox.value;
    let type = form.inputbox0.value;
    let values2 = values.split(",");
    let result = 0;
    switch (type) {
        case "+":
            values2.forEach(element => {
                result += parseFloat(element);
            });
            break;
        case "-":
            values2.forEach(element => {
                result -= element;
            });
            break;
        case "*":
            result++;
            values2.forEach(element => {
                result *= element;
            });
            break;
        case "/":
            result = values2[0];
            for (let i=1;i<values2.length;i++) {
                if (values2[i] == 0) {
                    alert("You can't divide by 0");
                } else {
                    result /= values2[i];
                }
            };
            break;
        case "log":
            let n = 1;
            if (values2[0]%2!=0){
                result = values2[0]+" can't be divided by 2";
            } else {
                result = 2;
                while (result < values2[0]) {
                    result *= 2;
                    n++;
                }
                result = n;
            }
        case "pow":
            result = values2[0];
            for (let i = 1; i<values2[1]; i++) {
                result*=values2[0];
            }
        case "sqrt":
            for (let i = 1; i<values2[0]; i++) {
                result = i * i;
                if (result == values2[0]) {
                    result = i;
                    i*=i;
                }
            }
            if (result*result != values2[0]) {
                result = "Couldn't find a root for number "+values2[0];
            }

    }
    return result;
}

function palindrome(var1){
    let splitted = var1.split("");
    let check = true;
    let i = 0;
    while (check && i<splitted.length/2+1) {
        if (splitted[i]==splitted[splitted.length-1-i]) {
            check = true;
        } else {
            check = false;
        }
        i++;
    }
    if (check) {
        return var1+" is a palindrome";
    } else {
        return var1+" isn't a palindrome";
    }
}

function handleAnagramForm(form){

    let word1 = form.inputbox3.value;
    let word2 = form.inputbox4.value;
    document.getElementById("anagramResult").innerHTML = anagram(word1, word2);
}

function bubbleSort(arr){
    
    for(var i = 0; i < arr.length; i++){
       
        for(var j = 0; j < ( arr.length - i -1 ); j++){
         
            if(arr[j] > arr[j+1]){           
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

function table(arr) {
    if (typeof(arr[0])==Number) {
        let sorted = bubbleSort(arr);
        let largest = sorted[sorted.length-1];
        for (let i = sorted.length-1; i>0; i--) {
            if (largest==sorted[i]) {
                sorted.pop();
            }
        }
        return "second largest: "+sorted[sorted.length-1];
    } else {
        let lengths = [];
        let theChoosenOne;
        for (let i = 0; i < arr.length; i++) {
            lengths[i] = arr[i].length;
        }
        let sorted = bubbleSort(lengths);
        let largest = sorted[sorted.length-1];
        for (let i = sorted.length-1; i>0; i--) {
            if (largest==sorted[i]) {
                sorted.pop();
            }
        }
        for (let i = 0; i <= lengths.length; i++) {
            if (sorted[sorted.length-1]==arr[i].length) theChoosenOne = arr[i];
        }
        return "second longest: "+theChoosenOne;
    }
}

let n = 0;
let tableN = [];
let current;

function numberString(var1, var2) {
    current = var1 + n;
    if (current < var2) {
        tableN[n] = current;
        n++;
        numberString (var1, var2);
    } else {
        tableN[n] = var2;
    }
    return tableN;
}

function anagram(var1, var2) {
    let word1 = [];
    let word2 = [];
    let flag = true;

    word1ASCII = [];
    word2ASCII = [];

    word1 = var1.split('');
    word2 = var2.split('');

    if(word1.length == word2.length){
        for(let i = 0; i < word1.length; i++){
            word1ASCII[i] = word1[i].charCodeAt(0);
        }

        for(let i = 0; i < word2.length; i++){
            word2ASCII[i] = word2[i].charCodeAt(0);
        }

        word1ASCII = bubbleSort(word1ASCII);
        word2ASCII = bubbleSort(word2ASCII);

        console.log(word1ASCII);
        console.log(word2ASCII);


        for(let i = 0; i < word1ASCII.length; i++){
            if (word1ASCII[i] != word2ASCII[i]){
                flag = false;
                break;
            }
        }
    }
    else {
        return false;
    }
    return flag;
}

console.log(anagram("siema", "siemb"));
console.log("a".charCodeAt(0));
console.log("b".charCodeAt(0));
console.log(table(["aba", "dddddddddd", "aaaaa", "aaa", "eeeebe"]));
console.log(numberString(11, 20));