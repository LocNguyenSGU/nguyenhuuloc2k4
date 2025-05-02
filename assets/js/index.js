document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll(".menu a");

    function highlightMenu() {
        let scrollY = window.pageYOffset;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 200; // Điều chỉnh để tránh header che mất
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                // Reset màu cho tất cả link
                menuLinks.forEach((link) => {
                    link.style.color = "#6b7280"; // Màu xám (text-gray-500)
                });

                // Đổi màu cho link active
                const activeLink = document.querySelector(`.menu a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.style.color = "#9333ea"; // Màu tím (text-purple-600)
                }
            }
        });
    }

    window.addEventListener("scroll", highlightMenu);
    highlightMenu(); // Gọi ngay khi load trang để cập nhật màu
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                scrollToTopBtn.style.opacity = "1";
            } else {
                scrollToTopBtn.style.opacity = "0";
            }
        });

        scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });


        window.addEventListener("load", () => {
            const projectsSection = document.getElementById("my_projects_container");
            const footer = document.getElementById("contact");
        
            if (projectsSection && footer) {
                const height = projectsSection.offsetHeight; 
                console.log("Chiều cao của my_projects:", height); // Debug
                footer.style.marginTop = `${height - 600}px`;
            }
        });


// 
const form = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  fetch("https://script.google.com/macros/s/AKfycbysRCnw7wQBq0G5BOgup94SqfV8nbSgu5wdySVjuOhbT5QQLm_QZYJ7sa8BmsX8fqcD/exec", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(res => res.text())
    .then(text => {
      responseMessage.textContent = "✅ Gửi thành công!";
      responseMessage.className = "mt-4 text-green-600 text-center text-sm";
      form.reset();
    })
    .catch(error => {
      responseMessage.textContent = "❌ Có lỗi xảy ra khi gửi.";
      responseMessage.className = "mt-4 text-red-600 text-center text-sm";
      console.error("Lỗi:", error);
    });
});