window.onload = function () {
    const startPoint = localStorage.getItem('start') || '출발지';
    const endPoint = localStorage.getItem('end') || '도착지';
    const currentSpeed = parseFloat(localStorage.getItem('currentSpeed') || 1.0);
    const recommendSpeed = parseFloat(localStorage.getItem('recommendSpeed') || 1.2);
  
    document.getElementById('directionHeader').innerHTML = `
        <div class="route-text">
            <span class="from">${startPoint}</span> → <span class="to">${endPoint}</span>
        </div>
        <button class="close-btn" onclick="location.href='../views/home.html'">✕</button>
`;

    let message = '';
    if (currentSpeed < recommendSpeed) {
      message = `<strong class="green">더 빠르게</strong> 이동하면<br>다음 신호 대기 없이<br>건널 수 있어요!`;
    } else if (currentSpeed > recommendSpeed) {
      message = `<strong class="green">현재 속도</strong>는 추천보다 높습니다. 안정적으로 이동하세요.`;
    } else {
      message = `<strong class="green">적절한 속도</strong>로 이동 중입니다! 계속 유지해 주세요.`;
    }
  
    document.getElementById('hintBox').innerHTML = `
      <p>${message}</p>
      <div class="hint-detail">
        추천속도 ${recommendSpeed}m/s<br>현재속도 ${currentSpeed}m/s
      </div>
    `;
  
    // 지도 생성
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
  
          const map = new Tmapv2.Map("map", {
            center: new Tmapv2.LatLng(lat, lon),
            width: "100%",
            height: "100vh",
            zoom: 16,
          });
  
          new Tmapv2.Marker({
            position: new Tmapv2.LatLng(lat, lon),
            map: map,
          });
        },
        function () {
          alert("위치 정보를 가져올 수 없습니다.");
        }
      );
    }
  };
  