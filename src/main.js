import "./style.css";

const SelectAccordians = document.querySelectorAll(".accordian");

SelectAccordians.forEach((accordian) => {
  accordian.addEventListener("click", () => {
    SelectAccordians.forEach((tab) => {
      tab.classList.remove("show");
    });
    accordian.classList.add("show");
  });
});
