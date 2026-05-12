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

const TASKS_STORAGE_KEY = 'crc_control_workflow_tasks_v1';

const DEFAULT_TASKS = [
  ['T-01-001','01-cadrage','Recenser les pièces de cadrage disponibles','vérificateur','Liste des pièces disponibles et manquantes','haute','à faire','',''],
  ['T-01-002','01-cadrage','Préparer la fiche d’identité de l’organisme','vérificateur','Tableau identité organisme','normale','à faire','',''],
  ['T-01-003','01-cadrage','Extraire les éléments du précédent contrôle','vérificateur','Tableau recommandations / suites apparentes','normale','à faire','',''],
  ['T-01-004','01-cadrage','Préparer les premiers agrégats financiers','vérificateur','Tableau synthétique BP/BA sur la période','haute','à faire','',''],
  ['T-02-001','02-questionnaires','Transformer les lacunes documentaires en demandes de pièces','vérificateur','Tableau demandes de pièces','haute','à faire','',''],
  ['T-02-005','02-questionnaires','Contrôler la complétude des réponses reçues','vérificateur','Tableau complétude / relances','haute','à faire','',''],
  ['T-03-001','03-instruction-rag','Classer les sources reçues','vérificateur','Registre des sources SRC','haute','à faire','',''],
  ['T-03-003','03-instruction-rag','Extraire les montants significatifs','vérificateur','Registre des montants','haute','à faire','',''],
  ['T-03-005','03-instruction-rag','Produire les premiers atomes factuels','vérificateur','Table ATOM initiale','haute','à faire','',''],
  ['T-04-002','04-documents-maitres','Produire les tableaux financiers de base','vérificateur','Tableaux BP/BA/consolidé','haute','à faire','',''],
  ['T-04-004','04-documents-maitres','Lister les pièces manquantes par DM','vérificateur','Liste des pièces manquantes','haute','à faire','',''],
  ['T-05-002','05-constats-arbitrage','Vérifier les preuves principales de chaque piste','vérificateur','Tableau pistes / preuves','haute','à faire','',''],
  ['T-05-003','05-constats-arbitrage','Proposer les illustrations disponibles','vérificateur','Liste chiffres, exemples, tableaux, dates','haute','à faire','',''],
  ['T-06-001','06-integration-prompt-engine','Préparer les paquets de rédaction par partie','vérificateur','Paquets de rédaction préremplis','haute','à faire','',''],
  ['T-07-001','07-qualite-delibere','Contrôler la présence des preuves dans le DLRé','vérificateur','Tableau OBS / pièce DLRé','haute','à faire','',''],
  ['T-07-004','07-qualite-delibere','Contrôler les recommandations','vérificateur','Tableau recommandation / constat / preuve','haute','à faire','',''],
  ['T-08-004','08-contradiction-riod','Préparer la matrice de contradiction','vérificateur','Matrice préremplie','haute','à faire','',''],
  ['T-09-004','09-capitalisation','Mettre à jour la liste des erreurs fréquentes','vérificateur','Fiche retour d’expérience','normale','à faire','','']
];

function taskFromArray(row) {
  return {
    id: row[0], module: row[1], title: row[2], owner: row[3], deliverable: row[4],
    priority: row[5], status: row[6], due: row[7], comment: row[8]
  };
}

function loadTasks() {
  const raw = localStorage.getItem(TASKS_STORAGE_KEY);
  if (!raw) return DEFAULT_TASKS.map(taskFromArray);
  try { return JSON.parse(raw); } catch { return DEFAULT_TASKS.map(taskFromArray); }
}

function saveTasks(tasks) {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
  const tbody = document.getElementById('tasks-body');
  if (!tbody) return;
  const tasks = loadTasks();
  tbody.innerHTML = '';
  tasks.forEach((task, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input value="${escapeHtml(task.id)}" data-field="id" data-index="${index}"></td>
      <td><input value="${escapeHtml(task.module)}" data-field="module" data-index="${index}"></td>
      <td><input value="${escapeHtml(task.title)}" data-field="title" data-index="${index}"></td>
      <td><select data-field="owner" data-index="${index}">${optionList(['rapporteur','vérificateur','binôme','président de section','ministère public','autre'], task.owner)}</select></td>
      <td><input value="${escapeHtml(task.deliverable)}" data-field="deliverable" data-index="${index}"></td>
      <td><select data-field="priority" data-index="${index}">${optionList(['haute','normale','basse'], task.priority)}</select></td>
      <td><select data-field="status" data-index="${index}">${optionList(['à faire','en cours','à revoir','terminée','abandonnée'], task.status)}</select></td>
      <td><input type="date" value="${escapeHtml(task.due || '')}" data-field="due" data-index="${index}"></td>
      <td><input value="${escapeHtml(task.comment || '')}" data-field="comment" data-index="${index}"></td>
      <td><button class="copy" onclick="deleteTask(${index})">Suppr.</button></td>`;
    tbody.appendChild(tr);
  });
  tbody.querySelectorAll('input, select').forEach(el => el.addEventListener('change', updateTaskField));
}

function optionList(values, current) {
  return values.map(v => `<option value="${escapeHtml(v)}" ${v === current ? 'selected' : ''}>${escapeHtml(v)}</option>`).join('');
}

function updateTaskField(event) {
  const tasks = loadTasks();
  const index = Number(event.target.dataset.index);
  const field = event.target.dataset.field;
  tasks[index][field] = event.target.value;
  saveTasks(tasks);
}

function addTask() {
  const tasks = loadTasks();
  tasks.push({
    id: document.getElementById('new-id')?.value || nextTaskId(tasks),
    module: document.getElementById('new-module')?.value || '01-cadrage',
    title: document.getElementById('new-title')?.value || 'Nouvelle tâche',
    owner: document.getElementById('new-owner')?.value || 'vérificateur',
    deliverable: document.getElementById('new-deliverable')?.value || '',
    priority: document.getElementById('new-priority')?.value || 'normale',
    status: 'à faire',
    due: document.getElementById('new-due')?.value || '',
    comment: document.getElementById('new-comment')?.value || ''
  });
  saveTasks(tasks);
  renderTasks();
}

function nextTaskId(tasks) {
  const max = tasks.reduce((m, t) => {
    const match = String(t.id).match(/T-\d{2}-(\d{3})/);
    return match ? Math.max(m, Number(match[1])) : m;
  }, 0);
  return `T-99-${String(max + 1).padStart(3, '0')}`;
}

function deleteTask(index) {
  const tasks = loadTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
  renderTasks();
}

function resetTasks() {
  if (!confirm('Réinitialiser le suivi local ?')) return;
  localStorage.removeItem(TASKS_STORAGE_KEY);
  renderTasks();
}

function exportTasks(format) {
  const tasks = loadTasks();
  let content = '';
  let filename = '';
  let type = 'text/plain';
  if (format === 'json') {
    content = JSON.stringify(tasks, null, 2);
    filename = 'crc-taches.json';
    type = 'application/json';
  } else if (format === 'csv') {
    const headers = ['id','module','intitule','responsable','livrable','priorite','statut','echeance','commentaire'];
    content = [headers.join(';')].concat(tasks.map(t => [t.id,t.module,t.title,t.owner,t.deliverable,t.priority,t.status,t.due,t.comment].map(csvCell).join(';'))).join('\n');
    filename = 'crc-taches.csv';
    type = 'text/csv';
  } else {
    content = '| ID tâche | Module | Intitulé | Responsable | Livrable attendu | Priorité | Statut | Échéance | Commentaire |\n|---|---|---|---|---|---|---|---|---|\n' +
      tasks.map(t => `| ${t.id} | ${t.module} | ${t.title} | ${t.owner} | ${t.deliverable} | ${t.priority} | ${t.status} | ${t.due || ''} | ${t.comment || ''} |`).join('\n');
    filename = 'crc-taches.md';
  }
  downloadText(filename, content, type);
}

function importTasksFromFile(input) {
  const file = input.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const tasks = JSON.parse(reader.result);
      if (!Array.isArray(tasks)) throw new Error('Format invalide');
      saveTasks(tasks);
      renderTasks();
    } catch (err) {
      alert('Import impossible : le fichier doit être un export JSON du suivi des tâches.');
    }
  };
  reader.readAsText(file);
}

function csvCell(value) {
  const s = String(value || '').replaceAll('"', '""');
  return `"${s}"`;
}

function downloadText(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('tasks-body')) renderTasks();
});
