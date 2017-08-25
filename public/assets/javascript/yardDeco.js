$(document).ready(function () {
  $('.carousel').carousel({
    interval: 5000,
    keyboard: true,
    pause: 'hover',
    ride: 'carousel',
    wrap: true
  });

  $('input.form-control').on('change', function () {
    var orderEmail = {
      name: $('#formName').val().trim(),
      email: $('#formEmail').val().trim(),
      color: $('#formColor').value,
      phone: $('#formPhone').val(),
      address: $('#formStreet').val().trim() + '' + $('#formStreet2').val().trim() + '' + $('#formCity').val().trim() + '' + $('#formZip').val().trim(),
      instructions: $('#formInstructions').val().trim(),
      date: $('#formDate').val(),
      time: $('#formTime').val()
    }


    $('#formSubmit').on('submit', function (event) {
      event.preventDefault;
      $('#myModal').modal('toggle')
      if ($('#formPolicy')) {
        console.log(orderEmail);
      }
    });
  });
});

// BOOK NOW MODAL

