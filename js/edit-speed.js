function selectOption(element, type) {
    const parent = element.parentElement;
    const options = parent.querySelectorAll('.speed-option');
    options.forEach(option => {
      option.classList.remove('selected');
    });
    element.classList.add('selected');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.getElementById('saveBtn');
    const modal = document.getElementById('speedWarningModal');
    const modalMessage = document.getElementById('modalMessage');
    const closeModalBtn = document.getElementById('closeModalBtn');
  
    saveBtn.addEventListener('click', () => {
      const minSelected = document.querySelector('.min-speed .speed-option.selected');
      const maxSelected = document.querySelector('.max-speed .speed-option.selected');
  
      if (!minSelected || !maxSelected) {
        showModal('최저속도와 최고속도를 모두 선택해주세요.');
        return;
      }
  
      const minSpeed = parseFloat(minSelected.querySelector('.speed-value').textContent);
      const maxSpeed = parseFloat(maxSelected.querySelector('.speed-value').textContent);
  
      if (minSpeed > maxSpeed) {
        showModal('최고속도는 최저속도보다 높아야 합니다.');
        return;
      }
  
      // 정상적인 경우: 마이페이지로 이동
      window.location.href = '../views/mypage.html';
    });
  
    closeModalBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  
    function showModal(message) {
      modalMessage.textContent = message;
      modal.classList.remove('hidden');
    }
  });
  
  
  