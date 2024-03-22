export default function dropDownMenu(
  dropdownContainerClass,
  dropdownBtnClass,
  dropdownItemsClass
) {
  let selected = false;
  const dropdownItems = document.querySelectorAll(dropdownItemsClass);
  const dropdownBtn = document.querySelector(dropdownBtnClass);
  dropdownBtn.addEventListener("click", () => {
    if (selected === false) {
      dropdownItems.forEach((item) => {
        item.style.display = "block";
        selected = true;
      });
    } else if (selected === true) {
      dropdownItems.forEach((item) => {
        item.style.display = "none";
        selected = false;
      });
    }
  });

  window.onclick = (event) => {
    if (event.target.matches("dropdownBtn")) {
    }
  };
  window.addEventListener("click", (e) => {
    if (!e.target.classList.contains("dropdown-btn")) {
      if (selected) {
        dropdownItems.forEach((item) => {
          item.style.display = "none";
          selected = false;
        });
      }
    }
  });
}
