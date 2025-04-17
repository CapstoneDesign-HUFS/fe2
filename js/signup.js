document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.querySelector('.submit-button');
    const checkbox = document.querySelector('.custom-checkbox');
  
    // 모달 구성
    const modal = document.createElement('div');
    modal.id = 'signupModal';
    modal.className = 'modal hidden';
    modal.innerHTML = `
      <div class="modal-content">
        <p class="modal-message"></p>
        <button id="closeModalBtn" class="btn">확인</button>
      </div>
    `;
    document.body.appendChild(modal);
    const modalMessage = modal.querySelector('.modal-message');
    const closeModalBtn = modal.querySelector('#closeModalBtn');
    closeModalBtn.addEventListener('click', () => modal.classList.add('hidden'));
  
    function showModal(message) {
      modalMessage.textContent = message;
      modal.classList.remove('hidden');
    }
  
    submitBtn.addEventListener('click', function (e) {
      e.preventDefault();
  
      const idInput = document.querySelector('input[placeholder="아이디"]');
      const pwInput = document.querySelector('input[placeholder="비밀번호"]');
      const pwConfirmInput = document.querySelector('input[placeholder="비밀번호 확인"]');
      const nameInput = document.querySelector('input[placeholder="이름"]');
      const birthYearSelect = document.getElementById('birth-year');
      const genderSelect = document.querySelectorAll('select.input-field')[1];
  
      if (!idInput.value.trim() || !pwInput.value.trim() || !pwConfirmInput.value.trim() ||
          !nameInput.value.trim() || !birthYearSelect.value || !genderSelect.value) {
        showModal('모든 입력란을 기입해주세요.');
        return;
      }
  
      if (pwInput.value !== pwConfirmInput.value) {
        showModal('비밀번호를 다시 확인해주세요.');
        return;
      }
  
      if (!checkbox.classList.contains('checked')) {
        showModal('개인정보약관에 동의해주셔야 회원가입이 가능합니다.');
        return;
      }
  
      window.location.href = 'mypage.html';
    });
  });
  