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



function informationPopup() {
  const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2',
        cancelButton: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'آیا مطمئن هستید ؟',
      text: "شما میخواهید همه امانت ها را حذف کنید !",
      icon: 'information',
      showCancelButton: true,
      confirmButtonText: 'بله مطمئنم !',
      showLoaderOnConfirm: true,
      cancelButtonText: 'نه ! حذف نکن',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
          window.location.href = "{% url 'main:deletealllends' %}";
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'لغو شد !',
          'لیست امانت ها موجود خواهد بود :)',
          'error'
        )
      }
    })
}

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
updateToast.hide()

const targetUpdateErrorToast = document.getElementById('update-toast-error');

// options object
const updateErrorToastOptions = {
  triggerEl: document.getElementById('update-toast-error'),
  transition: 'transition-opacity',
  duration: 1000,
  timing: 'ease-out',
};

const updateErrorToast = new Dismiss(targetUpdateErrorToast, updateErrorToastOptions);
updateErrorToast.show()