/* contact.js — Contact form handler */
(function () {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim() || 'Website Contact Form Submission';
    const message = form.message.value.trim();

    const bodyLines = [
      `Name: ${firstName} ${lastName}`.trim(),
      `Email: ${email}`,
      `Subject: ${subject}`,
      '',
      'Message:',
      message
    ];

    const mailto = `mailto:digital.statestreet@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailto;

    setTimeout(() => {
      form.style.display = 'none';
      if (successMsg) {
        successMsg.style.display = 'block';
      }
    }, 600);
  });
})();
