var body = document.querySelector('body');

var bookingBtn = document.querySelector('.booking-btn-top');

var bookingContainer = document.querySelector('.booking-form');

// ��������� ����� ��� ����
body.classList.add('run-js');

// ������� ������
bookingBtn.addEventListener('click', function (event) {
  event.preventDefault();
  bookingContainer.classList.toggle('booking-form-show');
});