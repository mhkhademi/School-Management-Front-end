var xStudentsValues = ["دهم", "یازدهم", "دوازدهم"];
var yStudentsValues = [55, 49, 44];
var studentsBarColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797"
];

new Chart("Students", {
    type: "doughnut",
    data: {
        labels: xStudentsValues,
        datasets: [{
        backgroundColor: studentsBarColors,
        data: yStudentsValues
        }]
    },
    options: {
        title: {
        display: true,
        text: "نمودار دانش آموزان"
        }
    }
});

var xTeachersValues = ["دهم", "یازدهم", "دوازدهم"];
var yTeachersValues = [10, 9, 11];
var teachersBarColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797"
];

new Chart("Teachers", {
    type: "doughnut",
    data: {
        labels: xTeachersValues,
        datasets: [{
        backgroundColor: teachersBarColors,
        data: yTeachersValues
        }]
    },
    options: {
        title: {
        display: true,
        text: "نمودار دبیران"
        }
    }
});


// target element that will be dismissed
const targetUpdateToast = document.getElementById('update-toast');

// options object
const updateToastOptions = {
    triggerEl: document.getElementById('update-toast'),
    transition: 'transition-opacity',
    duration: 1000,
    timing: 'ease-out',
};

const updateToast = new Dismiss(targetUpdateToast, updateToastOptions);
updateToast.hide();

const targetUpdateErrorToast = document.getElementById('update-toast-error');

// options object
const updateErrorToastOptions = {
    triggerEl: document.getElementById('update-toast-error'),
    transition: 'transition-opacity',
    duration: 1000,
    timing: 'ease-out',
};


function showToast() {
    document.getElementById("closeRightMenu").click(),
    targetUpdateErrorToast.classList.remove('hidden');
    const updateErrorToast = new Dismiss(targetUpdateErrorToast, updateErrorToastOptions);
}

function pa(sn) {
    studentNumber = sn;
    var pORa = document.getElementsByClassName(studentNumber)[0]
    pORa.parentElement.classList.add('text-black')
    if (pORa.textContent != 'حاضر') {
        pORa.textContent = 'حاضر';
        pORa.parentElement.classList.remove('bg-red-300')
        pORa.parentElement.classList.add('bg-green-300')
    } else if (pORa.textContent == 'حاضر') {
        pORa.textContent = 'غایب';
        pORa.parentElement.classList.remove('bg-green-300')
        pORa.parentElement.classList.add('bg-red-300')
    }
}

function deletePN(sn) {
    studentNumber = sn;
    var positive = document.getElementsByClassName(studentNumber)[1]
    var negative = document.getElementsByClassName(studentNumber)[2]
    positive.textContent = "0";
    negative.textContent = "0";
}

function pn(sn, type) {
    studentNumber = sn;
    if (type == 'p') {
        var positive = document.getElementsByClassName(studentNumber)[1]
        positive.textContent = parseInt(positive.textContent) + 1
    } else if (type == 'n') {
        var negative = document.getElementsByClassName(studentNumber)[2]
        negative.textContent = parseInt(negative.textContent) + 1
    }
}
