document.getElementById('myLink').addEventListener('click', function() {
    alert('You clicked the link!');
});
document.querySelectorAll('.mobile-image').forEach(function(img) {
    img.addEventListener('click', function() {
        alert('You clicked on the image!');
    });
});
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
var img = document.getElementById('myImage');

img.addEventListener('mouseover', function() {
    img.src = 'secondImage.jpg';
});

img.addEventListener('mouseout', function() {
    img.src = 'firstImage.jpg';
});
var counter = 0;
var counterDisplay = document.getElementById('counter');

function increaseCounter() {
    counter++;
    counterDisplay.textContent = counter;
}

function decreaseCounter() {
    counter--;
    counterDisplay.textContent = counter;
}
//49 to 52 awnser
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var formDataString = '';
    for (var [key, value] of formData.entries()) {
        formDataString += key + ': ' + value + '<br>';
    }
    document.getElementById('formData').innerHTML = formDataString;
});
function showFullDetails() {
    var fullDetails = document.getElementById('fullDetails');
    if (fullDetails.style.display === 'none') {
        fullDetails.style.display = 'inline';
    } else {
        fullDetails.style.display = 'none';
    }
}
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var studentData = {};
    for (var [key, value] of formData.entries()) {
        studentData[key] = value;
    }
    addStudentToTable(studentData);
    this.reset();
});

function addStudentToTable(data) {
    var table = document.getElementById('studentTable');
    var row = table.insertRow();
    row.insertCell(0).textContent = data.name;
    row.insertCell(1).textContent = data.age;
    row.insertCell(2).textContent = data.grade;
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        table.deleteRow(row.rowIndex);
    };
    row.insertCell(3).appendChild(deleteBtn);
}
