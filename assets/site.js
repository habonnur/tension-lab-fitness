(() => {
  "use strict";

  document.documentElement.classList.add("js");

  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");

  if (header && menuButton && navigation) {
    menuButton.hidden = false;
    const closeMenu = () => {
      header.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "Menu";
    };
    menuButton.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "Close" : "Menu";
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && header.classList.contains("is-open")) {
        closeMenu();
        menuButton.focus();
      }
    });
    document.addEventListener("click", (event) => {
      if (!header.contains(event.target)) closeMenu();
    });
    window.matchMedia("(min-width: 901px)").addEventListener("change", closeMenu);
  }

  const config = window.TENSION_LAB_CONFIG || {};
  const contactEmail = String(config.contactEmail || "hello@example.com").trim();
  const isPlaceholder = config.contactIsPlaceholder !== false
    || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)
    || /@example\.(com|org|net)$/i.test(contactEmail);

  document.querySelectorAll("[data-email-text]").forEach((element) => {
    element.textContent = contactEmail;
  });
  document.querySelectorAll("[data-placeholder-note]").forEach((element) => {
    element.hidden = !isPlaceholder;
  });
  document.querySelectorAll("[data-email-link]").forEach((link) => {
    link.hidden = isPlaceholder;
    link.href = `mailto:${contactEmail}`;
  });

  const form = document.querySelector("#coaching-inquiry");
  if (!form) return;

  const prepareButton = document.querySelector("#prepare-inquiry");
  const status = document.querySelector("#inquiry-status");
  const panel = document.querySelector("#inquiry-draft");
  const draftText = document.querySelector("#draft-text");
  const copyButton = document.querySelector("#copy-inquiry");
  const emailDraftLink = document.querySelector("#email-inquiry");

  if (!prepareButton || !status || !panel || !draftText || !copyButton || !emailDraftLink) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameField = form.elements.namedItem("name");
    const goalsField = form.elements.namedItem("goals");
    nameField.setCustomValidity(nameField.value.trim() ? "" : "Enter your name.");
    goalsField.setCustomValidity(goalsField.value.trim() ? "" : "Tell Sam what you want to work on.");
    if (!form.reportValidity()) {
      form.querySelector(":invalid")?.focus();
      return;
    }

    const values = new FormData(form);
    const value = (name) => String(values.get(name) || "").trim();
    const body = [
      "Hi Sam,",
      "",
      "I am interested in strength coaching.",
      "",
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Training experience: ${value("experience") || "Not specified"}`,
      `Availability: ${value("availability") || "To discuss"}`,
      "",
      "My goals:",
      value("goals")
    ].join("\n");

    draftText.value = body;
    panel.hidden = false;
    emailDraftLink.hidden = isPlaceholder;
    emailDraftLink.href = `mailto:${contactEmail}?subject=${encodeURIComponent("Strength coaching inquiry")}&body=${encodeURIComponent(body)}`;
    status.textContent = isPlaceholder
      ? "Your inquiry is ready to copy. The contact email is a placeholder, so this draft site does not send messages."
      : "Your inquiry is ready. Open your email app to send it to Sam. Nothing has been sent yet.";
  });

  form.addEventListener("input", (event) => {
    if (event.target.id === "inquiry-name" || event.target.id === "inquiry-goals") {
      event.target.setCustomValidity("");
    }
    if (!panel.hidden) {
      panel.hidden = true;
      status.textContent = "Details changed. Prepare your inquiry again to update the draft.";
    }
  });

  copyButton.addEventListener("click", async () => {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(draftText.value);
      status.textContent = "Inquiry copied. Nothing has been sent.";
    } catch {
      draftText.focus();
      draftText.select();
      status.textContent = "Select and copy the inquiry below. Automatic copying is unavailable in this browser.";
    }
  });

  prepareButton.disabled = false;
})();
