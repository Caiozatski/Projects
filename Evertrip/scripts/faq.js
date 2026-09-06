const faqChoose = document.querySelectorAll(".faq-heading");

faqChoose.forEach((faq) => {
  faq.addEventListener("click", () => {
    console.log(faq);

    const faqContainer = faq.closest(".faq-container");
    const faqContent = faqContainer.querySelector(".faq-content");

    faqContent.classList.toggle("active")
  });
});