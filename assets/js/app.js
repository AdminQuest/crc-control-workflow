function copyText(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const text = el.value || el.innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector(`[data-copy='${id}']`);
    if (btn) {
      const old = btn.innerText;
      btn.innerText = 'Copié';
      setTimeout(() => btn.innerText = old, 1200);
    }
  });
}

function buildPrompt(parts) {
  return parts.filter(Boolean).join('\n\n---\n\n');
}

function generateT01() {
  const input = document.getElementById('t01-input')?.value || '';
  const step = document.getElementById('t01-step')?.value || 'risques';
  let instruction = '';

  if (step === 'risques') {
    instruction = document.getElementById('prompt-risques')?.innerText || '';
  } else if (step === 'qc') {
    instruction = document.getElementById('prompt-qc')?.innerText || '';
  } else if (step === 'cadrage') {
    instruction = document.getElementById('prompt-cadrage')?.innerText || '';
  } else if (step === 'q1') {
    instruction = document.getElementById('prompt-q1')?.innerText || '';
  }

  const result = buildPrompt([
    instruction,
    '## Entrée utilisateur',
    input
  ]);

  const output = document.getElementById('t01-output');
  if (output) output.value = result;
}
