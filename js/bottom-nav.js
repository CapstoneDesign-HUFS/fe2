function activateTab() {
  const tabs = document.querySelectorAll('.nav-item');
  const currentPage = document.body.getAttribute('data-page');

  tabs.forEach(tab => {
    tab.classList.remove('active');
    const paths = tab.querySelectorAll('svg path, svg polyline, svg circle');
    paths.forEach(path => path.setAttribute('stroke', '#888888'));
    tab.querySelector('.nav-label').style.color = '#888888';

    const tabId = tab.id;
    if (
      (tabId === 'home-tab' && currentPage === 'home') ||
      (tabId === 'report-tab' && currentPage === 'report') ||
      (tabId === 'my-tab' && currentPage === 'mypage')
    ) {
      tab.classList.add('active');
      paths.forEach(path => path.setAttribute('stroke', '#38c16f'));
      tab.querySelector('.nav-label').style.color = '#38c16f';
    }
  });
}

// 바로 실행!
activateTab();
