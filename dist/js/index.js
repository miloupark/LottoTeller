const minNumber = 1; // 로또 최소 숫자
const maxNumber = 45; // 로또 최대 숫자
const randomButton = document.querySelector(".lotto-view__button");
const lottoGrouptitle = document.querySelector(".lotto-view__group"); // 6개의 조 이름
let lottoGroup = ["E", "D", "C", "B", "A"]; // 로또 A, B, C, D, E조
const targetNumberlist = document.querySelector(".lotto-view__list"); // 6개의 정수 리스트
const targetNumber = []; // 1이상 45이하의 중복되지 않는 6개의 숫자

// 로또 공 자식 요소 추가
const createLottoball = (number) => {
  const element = document.createElement("li");
  element.textContent = number;
  element.className = "lotto-ball";
  element.style.color = "white";
  targetNumberlist.appendChild(element);
  return element;
};

// 로또 조 자식 요소 추가
const createlottoGrouptitle = (text) => {
  const element = document.createElement("span");
  element.textContent = text;
  lottoGrouptitle.appendChild(element);

  return element;
};

// 1이상 45이하의 랜덤한 번호 정수로 반환
const getLottoNumber = () => {
  const randomNumber = Math.random() * (maxNumber - minNumber) + 1;
  const convertedInteger = Math.floor(randomNumber);

  return convertedInteger;
};

// 버튼 클릭 이벤트
randomButton.addEventListener("click", () => {
  // 버튼 클릭 후 6개의 번호 생성되는 동안 버튼 비활성화
  randomButton.disabled = true;

  // 버튼 재클릭 시 기존 조, 번호 초기화
  lottoGrouptitle.innerHTML = "";
  targetNumberlist.innerHTML = "";
  targetNumber.length = 0;

  // 로또 조 초기화
  if (!lottoGroup.length) {
    lottoGroup = ["E", "D", "C", "B", "A"];
  }

  // 중복되지 않는 번호 6개 생성
  while (targetNumber.length < 6) {
    const number = getLottoNumber();
    if (!targetNumber.includes(number)) {
      targetNumber.push(number);
    }
  }

  // 6개의 번호 시간 차 생성
  targetNumber.forEach((number, index) => {
    setTimeout(() => {
      createLottoball(number);
      // 마지막 번호 생성 후 버튼 활성화
      if (index === 5) {
        randomButton.disabled = false;
      }
    }, index * 500);
  });

  const currentGroup = lottoGroup.pop();
  createlottoGrouptitle(currentGroup);
});
