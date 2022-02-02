function enterNumber(number) {
    situateSavedValues();
    display(number);
}

function display(entry) {
    var $screen = $('#Screen');

    $screen.val($screen.val() + entry);
}

function operation(operation) {
    var $operation = $('#Operation');

    if ($operation && $operation.val().length > 0)
        calculate();

    $('#Operation').val(operation);
}

function calculate() {
    var storedValue = $('#StoredValue').val();
    var screen = $('#Screen').val();
    var operation = $('#Operation').val();

    if(operation !== 'Equals')
        $.post("/Home/" + operation, { value1: storedValue, value2: screen })
            .then(displayCalculatedValue);
}

function displayCalculatedValue(json) {
    if (json && json.result !== undefined) {
        $('#Screen').val(json.result)
        $('#StoredValue').val('');
    }
}

function clearAll() {
    clearScreen();
    $('#Operation, #StoredValue').val('');
}

function clearScreen() {
    $('#Screen').val('');
}

function negative() {
    situateSavedValues();

    var $screen = $('#Screen');
    var value = $screen.val();

    if ($screen && value.indexOf('-') === -1) {
        clearScreen();
        display('-' + value);
    }
}

function decimalPlace() {
    situateSavedValues();

    var $screen = $('#Screen');
    var value = $screen.val();    

    if (value === '')
        display('0.');
    else if ($screen && value.indexOf('.') === -1)
        display('.');
}

function situateSavedValues() {
    var $operation = $('#Operation');
    var operator = $operation.val();
    var $storedValue = $('#StoredValue');

    if ($operation && operator === 'Equals')
        clearAll();
    else if ($operation && operator.length > 0 && $storedValue && $storedValue.val().length == 0) {
        $storedValue.val($('#Screen').val());
        clearScreen();
    }
}
