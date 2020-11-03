var form = document.getElementById("form-post");
var radio = document.getElementsByName("calculation");

function LeaveFirstNumber() {
    var firstNumber = document.getElementById("firstNumber").value;

    var tmp = "Số thứ nhất".italics();

    if (firstNumber.length == 0) {
        warning.innerHTML = tmp + " đang bỏ trống.";
    } else {
        if (isNaN(parseInt(firstNumber))) {
            warning.innerHTML = "Giá trị nhập ở ô " + tmp + " không phải là số.";
        } else {
            warning.innerHTML = "";
        }
    }
}

function LeaveSecondNumber() {
    var secondNumber = document.getElementById("secondNumber").value;

    var tmp = "Số thứ hai".italics();
    if (secondNumber.length == 0) {
        warning.innerHTML = tmp + " đang bỏ trống.";
    } else {
        if (isNaN(secondNumber)) {
            warning.innerHTML = "Giá trị nhập ở ô " + tmp + " không phải là số.";
        } else {
            warning.innerHTML = "";
        }

    }

}

form.onsubmit = function Submit(e) {
    e.preventDefault();
    var isValid = false;
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;
    console.log(firstNumber);
    if (isNaN(parseInt(firstNumber)) && isNaN(parseInt(secondNumber))) {
        var tmp = "Số thứ nhất và ô Số thứ hai".italics();
        warning.innerHTML = tmp + " đang bỏ trống.";
    } else if (isNaN(parseInt(firstNumber))) {
        var tmp = "Số thứ nhất".italics();
        warning.innerHTML = "Giá trị nhập ở ô " + tmp + " không phải là số.";
    } else if (isNaN(parseInt(secondNumber))) {
        var tmp = "Số thứ hai".italics();
        warning.innerHTML = "Giá trị nhập ở ô " + tmp + " không phải là số.";
    } else if (radio[0].checked == false && radio[1].checked == false && radio[2].checked == false && radio[3].checked == false) {
        warning.innerHTML = "Chưa chọn phép tính";
    } else {
        isValid = true;
    }

    if (isValid == true) {
        form.submit();
    }
}