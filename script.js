const tipsContainer = document.querySelector(".tips_container");
const tipButtons = document.querySelectorAll(".tip_btn");
const billInput = document.querySelector(".bill_amount");
const peopleInput = document.querySelector(".people_input");
const resetBtn = document.querySelector(".reset_btn");
const tipAmount = document.querySelector(".tip_amount");
const totalAmount = document.querySelector(".total_amount");
const customTip = document.querySelector(".custom_tip");
const calcButton = document.querySelector(".calc_btn");

let tipValue = 0;

const renderCalc = function () {
  tipsContainer.addEventListener("click", function (e) {
    const clickedElement = e.target.closest(".tip_btn");

    if (!clickedElement) return;

    tipButtons.forEach((tip) => {
      tip.classList.remove("active");
    });
    if (clickedElement.value !== "") {
      clickedElement.classList.add("active");
      tipValue = Number(clickedElement.value);
    }
  });
  calcButton.addEventListener("click", function () {
    if (tipValue === 0) {
      tipValue = Number(customTip.value) / 100;
    }
    const billValue = billInput.value;
    const peopleValue = peopleInput.value;
    if (peopleValue !== "" && billValue !== "" && tipValue !== 0) {
      const tipPerson = ((billValue * tipValue) / peopleValue).toFixed(2);
      tipAmount.textContent = `$${tipPerson}`;
      const totalPerson = (billValue / peopleValue + Number(tipPerson)).toFixed(
        2
      );
      totalAmount.textContent = `$${totalPerson}`;
    }
  });
};

renderCalc();

const resetCalc = function () {
  totalAmount.textContent = `$0.00`;
  tipAmount.textContent = `$0.00`;
  billInput.value = "";
  peopleInput.value = "";
  customTip.value = "";
};

resetBtn.addEventListener("click", resetCalc);
