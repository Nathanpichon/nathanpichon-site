var answers = {};

var results = {
  auto: {
    badge: 'Programme personnalisé',
    title: 'Le Programme 3 mois',
    desc: 'Un programme d\'entraînement et une structure alimentaire créés pour toi, sur 3 mois. Tu avances en autonomie complète — avec un plan béton en main.',
    price: '149€',
    priceSub: 'Paiement unique — accès à vie',
    features: [
      'Programme 3 mois 100% personnalisé',
      'Structure alimentaire individualisée',
      'Progression automatique mois par mois',
      'Accès à vie au programme',
      'Support vidéo via la chaîne YouTube'
    ],
    // Remplacer par le vrai lien Stripe
    cta: '#'
  },
  essentiel: {
    badge: 'Coaching Harmonie — Essentiel',
    title: 'Formule Essentiel',
    desc: 'La porte d\'entrée du coaching individualisé. Programme sur mesure, structure alimentaire, suivi mensuel et WhatsApp direct. Idéal pour démarrer avec un vrai accompagnement.',
    price: '98€',
    priceSub: 'Par mois — sans engagement minimum',
    features: [
      'Programme d\'entraînement 4 semaines personnalisé',
      'Structure alimentaire individualisée',
      'Messagerie privée WhatsApp',
      'Suivi mensuel des performances',
      'Suivi mensuel évolution physique',
      'Réadaptation mensuelle'
    ],
    cta: '#'
  },
  equilibre: {
    badge: 'Coaching Harmonie — Équilibre',
    title: 'Formule Équilibre',
    desc: 'Le meilleur rapport suivi/prix. Correction technique chaque semaine, suivi hebdomadaire de tes performances, alimentation et récupération. Le plus choisi.',
    price: '150€',
    priceSub: 'Par mois — sans engagement minimum',
    features: [
      'Tout du pack Essentiel',
      'Correction technique (1 fois/semaine)',
      'Suivi hebdo performances & NEAT',
      'Suivi hebdo gestion stress & récupération',
      'Suivi hebdomadaire alimentation',
      'Réadaptation hebdomadaire'
    ],
    cta: '#'
  },
  harmonie: {
    badge: 'Coaching Harmonie — Harmonie',
    title: 'Formule Harmonie',
    desc: 'Le suivi total. Chaque jour, chaque détail est ajusté — performances, alimentation, récupération. Pour ceux qui veulent aller au maximum de leur potentiel.',
    price: '300€',
    priceSub: 'Par mois — sans engagement minimum',
    features: [
      'Tout des packs précédents',
      'Correction technique tous les jours',
      'Suivi journalier performances & NEAT',
      'Suivi journalier alimentation',
      'Réadaptation au jour le jour',
      'Appel mensuel 15-20 min'
    ],
    cta: '#'
  }
};

function answer(question, value) {
  answers[question] = value;

  if (question === 1) {
    goToStep(2);
  } else if (question === 2) {
    goToStep(3);
  } else if (question === 3) {
    if (value === 'auto') {
      showResult('auto');
    } else {
      goToStep(4);
    }
  } else if (question === 4) {
    showResult(value);
  }
}

function goToStep(stepNum) {
  document.querySelectorAll('.quiz-step').forEach(function(el) {
    el.classList.remove('active');
  });
  document.getElementById('quiz-result').classList.remove('active');

  var step = document.getElementById('step-' + stepNum);
  if (step) step.classList.add('active');

  updateDots(stepNum);

  document.getElementById('quiz-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateDots(activeStep) {
  for (var i = 1; i <= 4; i++) {
    var dot = document.getElementById('dot-' + i);
    if (dot) {
      dot.classList.toggle('active', i <= activeStep);
    }
  }
}

function showResult(key) {
  var r = results[key];

  document.querySelectorAll('.quiz-step').forEach(function(el) {
    el.classList.remove('active');
  });

  document.getElementById('result-badge').textContent = r.badge;
  document.getElementById('result-title').textContent = r.title;
  document.getElementById('result-desc').textContent = r.desc;
  document.getElementById('result-price').textContent = r.price;
  document.getElementById('result-price-sub').textContent = r.priceSub;

  var featList = document.getElementById('result-features');
  featList.innerHTML = '';
  r.features.forEach(function(f) {
    var li = document.createElement('li');
    li.textContent = f;
    featList.appendChild(li);
  });

  document.getElementById('result-cta').href = r.cta;

  document.getElementById('quiz-progress').style.display = 'none';
  document.getElementById('quiz-result').classList.add('active');

  document.getElementById('quiz-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartQuiz() {
  answers = {};
  document.getElementById('quiz-result').classList.remove('active');
  document.getElementById('quiz-progress').style.display = 'flex';

  document.querySelectorAll('.quiz-step').forEach(function(el) {
    el.classList.remove('active');
  });
  document.getElementById('step-1').classList.add('active');
  updateDots(1);
}
