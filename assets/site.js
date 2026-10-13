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
  const contactEmail = String(config.contactEmail || "").trim();
  const hasEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)
    && !/@example\.(com|org|net)$/i.test(contactEmail);
  const configuredPhone = String(config.contactPhone || "").trim();
  const contactPhone = /^\+[1-9]\d{7,14}$/.test(configuredPhone) ? configuredPhone : "+14082027994";
  document.querySelectorAll("[data-phone-link]").forEach((link) => {
    link.href = `tel:${contactPhone}`;
  });
  document.querySelectorAll("[data-email-link]").forEach((link) => {
    link.hidden = !hasEmail;
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
  const textDraftLink = document.querySelector("#text-inquiry");

  if (!prepareButton || !status || !panel || !draftText || !copyButton || !emailDraftLink || !textDraftLink) return;

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
      ...(value("email") ? [`Email: ${value("email")}`] : []),
      `Training experience: ${value("experience") || "Not specified"}`,
      `Availability: ${value("availability") || "To discuss"}`,
      "",
      "My goals:",
      value("goals")
    ].join("\n");

    draftText.value = body;
    panel.hidden = false;
    emailDraftLink.hidden = !hasEmail;
    emailDraftLink.href = `mailto:${contactEmail}?subject=${encodeURIComponent("Strength coaching inquiry")}&body=${encodeURIComponent(body)}`;
    const smsSeparator = /iPad|iPhone|iPod/.test(navigator.userAgent) ? "&" : "?";
    textDraftLink.href = `sms:${contactPhone}${smsSeparator}body=${encodeURIComponent(body)}`;
    status.textContent = "Your inquiry is ready. Open a text message or copy it to send to Sam. Nothing has been sent yet.";
    draftText.focus();
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
