const randomButton = document.querySelector(".lotto__button");
const viewNumber = document.querySelectorAll(".lotto-number");
const minNumber = 1;
const maxNumber = 45;
const targetNumber = []; // 1이상 45이하의 중복되지 않는 6개의 숫자!

randomButton.addEventListener("click", () => {
  targetNumber.length = 0;

  // 중복되지 않는 정수 6개 생성
  while (targetNumber.length < 6) {
    const getRandomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

    if (!targetNumber.includes(getRandomNumber)) {
      targetNumber.push(getRandomNumber);
    }
  }

  viewNumber.forEach((element, index) => {
    element.textContent = targetNumber[index];
  });
});
