let minSpeed = null;
let maxSpeed = null;

function selectOption(element, type, speed) {
  const container = element.parentElement;
  container.querySelectorAll('.speed-option').forEach(option => {
    option.classList.remove('selected');
  });
  element.classList.add('selected');

  if (type === 'min') {
    minSpeed = speed;
  } else {
    maxSpeed = speed;
  }
}

document.getElementById('nextButton').addEventListener('click', function () {
  if (minSpeed === null || maxSpeed === null) {
    showModal("최저속도와 최고속도를 모두 선택해주세요.");
    return;
  }
  if (minSpeed > maxSpeed) {
    showModal('최고속도는 최저속도보다 높아야 합니다.');
    return;
  }

  // ✅ 선택된 속도값을 localStorage에 저장
  localStorage.setItem('minSpeed', minSpeed);
  localStorage.setItem('maxSpeed', maxSpeed);

  // ✅ 다음 페이지로 이동
  window.location.href = '../views/home.html';
});

document.getElementById('closeModalBtn').addEventListener('click', function () {
  document.getElementById('speedWarningModal').classList.add('hidden');
});

function showModal(message) {
  document.getElementById('modalMessage').textContent = message;
  document.getElementById('speedWarningModal').classList.remove('hidden');
}
