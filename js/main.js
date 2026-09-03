(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const year = document.querySelector("#year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a:not(.btn)").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path) {
      link.setAttribute("aria-current", "page");
    }
  });

  const form = document.querySelector("#quote-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const required = form.querySelectorAll("[required]");
      let valid = true;

      required.forEach((field) => {
        if (!String(field.value || "").trim()) {
          valid = false;
          field.classList.add("is-invalid");
        } else {
          field.classList.remove("is-invalid");
        }
      });

      if (!valid) {
        return;
      }

      form.hidden = true;
      const success = document.querySelector("#quote-success");
      if (success) {
        success.hidden = false;
      }
    });
  }

  const fileInput = document.querySelector("#document-upload");
  const dropzoneLabel = document.querySelector(".dropzone__label");

  if (fileInput && dropzoneLabel) {
    fileInput.addEventListener("change", () => {
      const count = fileInput.files ? fileInput.files.length : 0;
      dropzoneLabel.textContent =
        count > 0
          ? `${count} file${count === 1 ? "" : "s"} selected`
          : "Drop files here or click to browse";
    });
  }
})();
