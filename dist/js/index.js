const randomButton = document.querySelector(".lotto__button");
const viewNumber = document.querySelectorAll(".lotto-number");
const minNumber = 1; // 로또 최소 숫자
const maxNumber = 45; // 로또 최대 숫자
const targetNumber = []; // 1이상 45이하의 중복되지 않는 6개의 숫자!

randomButton.addEventListener("click", () => {
  // 버튼 재클릭 시 생성된 번호 초기화
  viewNumber.forEach((element) => {
    element.textContent = "";
  });

  targetNumber.length = 0;

  // 중복되지 않는 정수 6개 생성
  while (targetNumber.length < 6) {
    const getRandomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

    if (!targetNumber.includes(getRandomNumber)) {
      targetNumber.push(getRandomNumber);
    }
  }

  // 6개의 숫자 생성 시간 차
  viewNumber.forEach((element, index) => {
    setTimeout(() => {
      element.textContent = targetNumber[index];
    }, index * 500);
  });
});
