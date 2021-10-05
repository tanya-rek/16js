let numbers = [];

let sumInput = () => {

    for (;;) {
        let count = prompt ('Please enter a number', '');

        if (!count || isNaN(count)) 
            break;
    
        numbers.push(count);
    }
        
    function compareNumbers(a, b) {
        return a - b;
    }
    numbers.sort(compareNumbers);

    let sum = 0;
    for(let number of numbers) {
        sum += +number;
    }
    alert(`Sorted numbers are: ${numbers}\nThe sum of elements is: ${sum}`);
}