function handleCalculatorForm2(form){
    document.getElementById("calcResult").innerHTML = calculate2(form);
}

function calculate2(form){
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

function binarySearch(list, start, stop, search) {
    if (start>stop) {
        return "Nie ma tego elementu w ciągu";
    }
    let q = parseInt((start+stop)/2);
    console.log(q);
    if (list[q]==search) {
        console.log(search+" is on index "+q);
        return search+" is on index "+q;
    } else if (list[q]<search) {
        binarySearch(list, q+1, stop, search);
    } else {
        binarySearch(list, start, q-1, search);
    }
}

let binaryTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 35];
binarySearch(binaryTable, 0, binaryTable.length-1, 35);