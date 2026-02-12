// Referencias del DOM
const welcomeScreen = document.getElementById('welcomeScreen');
const startBtn = document.getElementById('startBtn');
const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxDescription = document.getElementById('lightbox-description');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const lightboxCounter = document.getElementById('lightbox-counter');
const musicControl = document.getElementById('musicControl');
const backgroundMusic = document.getElementById('backgroundMusic');
const themeToggle = document.getElementById('themeToggle');
const floatingHearts = document.getElementById('floatingHearts');

let currentIndex = 0;
let galleryItems = [];

// ==================== FECHA DE INICIO DE LA RELACIÓN ====================
// CAMBIA ESTA FECHA POR LA FECHA REAL DE INICIO DE SU RELACIÓN
const relationshipStartDate = new Date('2025-06-21'); // Formato: YYYY-MM-DD

// ==================== DESCRIPCIONES PERSONALIZADAS ====================
// Puedes personalizar cada descripción para cada foto/video
const mediaDescriptions = [
    "TE AMO INFINITAMENTE",
    // Agrega más descripciones personalizadas aquí...
];

// ==================== RAZONES POR LAS QUE TE AMO ====================
const reasons = [
    "Por tu hermosa sonrisa que ilumina mis días",
    "Por tu mirada que solamente ilumina mi camino",
    "Por ser la mejor artista de el mundo mundial",
    "Por tu carita tan preciosa que muchos envidian",
    "Por cómo me apoyas en todo lo que hago",
    "Por gran amor a los animalitos",
    "Por tu bondad y tu gran corazón",
    "Por cómo me miras y me haces sentir especial",
    "Por ser tú misma, auténtica y maravillosa",
    "Por compartir tus sueños conmigo",
    "Por tu fuerza y valentía",
    "Por los pequeños detalles que tienes conmigo",
    "Por cómo cuidas de mí",
    "Por tu hermosa voz que adoro escuchar",
    "Por tu pasión por las cosas que amas",
    "Por cómo me inspiras a ser mejor persona",
    "Por tu sentido del humor único",
    "Por estar siempre ahí cuando te necesito",
    "Por cómo me entiendes sin necesidad de palabras",
    "Por tu creatividad e imaginación",
    "Por hacerme sentir amado cada día",
    "Por tus manos que encajan perfectas con las mías",
    "Por tu risa contagiosa que amo provocar",
    "Por simplemente ser la persona más increíble que conozco"
];

// ==================== CARTAS DE AMOR ====================
const loveLetters = {
    1: {
        title: "Para Mi Amor Eterno",
        content: `
            <h2>Mi Amor,</h2>
            <p>No encuentro palabras suficientes para expresar lo mucho que significas para mí. Desde el momento en que entraste en mi vida, todo cambió para mejor.</p>
            <p>Eres la razón por la que me despierto con una sonrisa cada mañana. Tu amor me ha enseñado que la felicidad verdadera existe y que se encuentra en los momentos más simples compartidos contigo.</p>
            <p>Gracias por ser mi compañera, mi confidente, mi mejor amiga y el amor de mi vida. Cada día a tu lado es un regalo que atesoro.</p>
            <p>Te amo más de lo que las palabras pueden expresar, y te amaré por siempre.</p>
            <p class="letter-signature">Con todo mi corazón, siempre tuyo ❤️</p>
        `
    },
    2: {
        title: "Mi Razón de Ser",
        content: `
            <h2>Mi Princesa,</h2>
            <p>Escribo esta carta para recordarte lo increíblemente especial que eres. En un mundo lleno de miles de millones de personas, encontrarte a ti fue como encontrar una estrella en medio de la oscuridad.</p>
            <p>Tu presencia en mi vida ha llenado de color incluso los días más oscuros. Me has enseñado el verdadero significado del amor incondicional y la felicidad compartida.</p>
            <p>Quiero que sepas que cada momento contigo es un tesoro que guardo en mi corazón. Tu risa es mi melodía favorita, y tus ojos son el hogar donde mi alma encuentra paz.</p>
            <p>Prometo amarte, cuidarte y valorarte cada día de mi vida.</p>
            <p class="letter-signature">Por siempre enamorado de ti 💕</p>
        `
    },
    3: {
        title: "Eres Mi Todo",
        content: `
            <h2>Mi Vida,</h2>
            <p>Hay tantas cosas que quiero decirte, pero lo más importante es esto: eres mi todo. No es solo que te amo, es que no puedo imaginar mi vida sin ti.</p>
            <p>Contigo he descubierto que el amor verdadero no solo existe en las películas o en los cuentos de hadas. Es real, es hermoso, y lo encontré contigo.</p>
            <p>Cada risa que compartimos, cada lágrima que has secado, cada sueño que hemos construido juntos... todo eso ha creado el vínculo más fuerte que podría existir entre dos personas.</p>
            <p>Gracias por amarme tal como soy, con mis defectos y virtudes. Gracias por elegirme cada día. Yo también te elijo, hoy y siempre.</p>
            <p class="letter-signature">Tu amor eterno 💖</p>
        `
    },
};

// ==================== PREGUNTAS DEL QUIZ ====================
const quizQuestions = [
    {
        question: "¿Cuál es mi color favorito?",
        options: ["Azul", "Rojo", "Verde", "Negro"],
        correct: 3 // Índice de la respuesta correcta (cambia según tu respuesta)
    },
    {
        question: "¿Qué comida me encanta?",
        options: ["Pizza", "Hamburguesa", "tu", "Pasta"],
        correct: 2
    },
    {
        question: "¿Cuál es mi película favorita?",
        options: ["FNAF 2", "FNAF 1", "La La Land", "Castillo ambulante"],
        correct: 3
    },
    {
        question: "¿Qué me gusta hacer en mi tiempo libre?",
        options: ["Leer", "Ver jojoS", "Hacer ejercicio", "Jugar Minercraft contigo"],
        correct: 3
    },
    {
        question: "¿Cuál es mi canción favorita de todas?",
        options: ["Love For You", "Perfect", "Messages From The Stars", "Thinking Out Loud"],
        correct: 2
    },
    {
        question: "¿Qué es lo que más amo de ti?",
        options: ["Tu sonrisa", "Tus ojos", "Tu personalidad", "Todo de ti"],
        correct: 3
    },
    {
        question: "¿GEORGE MIRA ESTA BANANA (Hombre de el sombrero amarillo)?",
        options: ["Uh-uh", "Uh-ha", "Uh", "caracoles"],
        correct: 1
    },
    {
        question: "¿Qué te regalaría en un día especial?",
        options: ["Tamalitos", "Un ramo de elotes", "Una carta", "Una chilito especial"],
        correct: 3
    },
    {
        question: "¿Cuál es nuestro plan perfecto para un fin de semana?",
        options: ["Ver películas en casa", "Salir a dar un paseito", "comer taquitos", "todas las anteriores"],
        correct: 3
    },
    {
        question: "¿que significa que quesito diga miau?",
        options: ["mas frijolitos", "pollito porfavor", "chispas", "ola que tal"],
        correct: 1
    }
];

// ==================== INICIALIZACIÓN ====================
let currentQuestionIndex = 0;
let quizScore = 0;
let displayedReasons = 6;

// Botón de inicio
startBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    backgroundMusic.play();
    musicControl.classList.add('playing');
    loadGallery();
    createFloatingHearts();
    updateCounter();
    setInterval(updateCounter, 1000);
    displayReasons();
    
    // Mostrar fecha de inicio
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('startDate').textContent = 
        relationshipStartDate.toLocaleDateString('es-ES', options);
});

// ==================== CORAZONES FLOTANTES ====================
function createFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 10) + 's';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        floatingHearts.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 15000);
    }, 3000);
}

// ==================== MODO OSCURO ====================
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
});

// ==================== CONTADOR DE TIEMPO ====================
function updateCounter() {
    const now = new Date();
    const diff = now - relationshipStartDate;
    
    const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
    const months = Math.floor((diff % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const days = Math.floor((diff % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
}

// ==================== GALERÍA ====================
function loadGallery() {
    const images = [];
    const videos = [];

    for (let i = 1; i <= 46; i++) {
        images.push(`IMG/IMG${i}.jpg`);
    }

    for (let i = 1; i <= 10; i++) {
        videos.push(`VID/VID${i}.mp4`);
    }

    const allMedia = [...images, ...videos].sort(() => Math.random() - 0.5);

    allMedia.forEach((src, index) => {
        const item = document.createElement('div');
        const isVideo = src.includes('.mp4');
        
        if (isVideo) {
            item.className = 'gallery-item gallery-item-video';
            item.innerHTML = `
                <video autoplay muted loop playsinline>
                    <source src="${src}" type="video/mp4">
                </video>
            `;
        } else {
            item.className = 'gallery-item';
            item.innerHTML = `<img src="${src}" alt="Momento ${index + 1}">`;
        }
        
        // Agregar delay de animación
        item.style.animationDelay = `${index * 0.05}s`;
        
        galleryGrid.appendChild(item);
    });

    galleryItems = document.querySelectorAll('.gallery-item');
    setupLightbox();
}

function setupLightbox() {
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            showLightboxContent(currentIndex);
            updateLightboxCounter();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
}

function showLightboxContent(index) {
    const item = galleryItems[index];
    const video = item.querySelector('video');
    const img = item.querySelector('img');
    
    // Mostrar descripción personalizada
    const description = mediaDescriptions[index % mediaDescriptions.length];
    lightboxDescription.textContent = description;
    
    if (video) {
        const videoSrc = video.querySelector('source').src;
        lightboxImg.style.display = 'none';
        
        let lightboxVideo = document.getElementById('lightbox-video');
        if (!lightboxVideo) {
            lightboxVideo = document.createElement('video');
            lightboxVideo.id = 'lightbox-video';
            lightboxVideo.controls = true;
            lightboxVideo.autoplay = true;
            lightboxVideo.style.width = '100%';
            lightboxVideo.style.height = '100%';
            lightboxVideo.style.maxHeight = '75vh';
            lightboxVideo.style.objectFit = 'contain';
            lightboxVideo.style.borderRadius = '10px';
            document.querySelector('.lightbox-content').appendChild(lightboxVideo);
        }
        
        lightboxVideo.innerHTML = `<source src="${videoSrc}" type="video/mp4">`;
        lightboxVideo.load();
        lightboxVideo.style.display = 'block';
    } else if (img) {
        const imgSrc = img.src;
        lightboxImg.src = imgSrc;
        lightboxImg.style.display = 'block';
        
        const lightboxVideo = document.getElementById('lightbox-video');
        if (lightboxVideo) {
            lightboxVideo.style.display = 'none';
            lightboxVideo.pause();
        }
    }
}

function updateLightboxCounter() {
    lightboxCounter.textContent = `${currentIndex + 1} / ${galleryItems.length}`;
}

// Cerrar lightbox
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
    const lightboxVideo = document.getElementById('lightbox-video');
    if (lightboxVideo) {
        lightboxVideo.pause();
    }
}

// Navegación lightbox
lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showLightboxContent(currentIndex);
    updateLightboxCounter();
});

lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showLightboxContent(currentIndex);
    updateLightboxCounter();
});

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            lightboxPrev.click();
        } else if (e.key === 'ArrowRight') {
            lightboxNext.click();
        }
    }
});

// ==================== RAZONES ====================
function displayReasons() {
    const reasonsGrid = document.getElementById('reasonsGrid');
    reasonsGrid.innerHTML = '';
    
    for (let i = 0; i < Math.min(displayedReasons, reasons.length); i++) {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.style.animationDelay = `${i * 0.1}s`;
        card.innerHTML = `
            <div class="reason-number">${i + 1}</div>
            <div class="reason-text">${reasons[i]}</div>
        `;
        reasonsGrid.appendChild(card);
    }
}

document.getElementById('showMoreReasons').addEventListener('click', () => {
    displayedReasons = Math.min(displayedReasons + 6, reasons.length);
    displayReasons();
    
    if (displayedReasons >= reasons.length) {
        document.getElementById('showMoreReasons').style.display = 'none';
    }
});

// ==================== CARTAS DE AMOR ====================
const letterCards = document.querySelectorAll('.letter-card');
const letterModal = document.getElementById('letterModal');
const letterModalClose = document.getElementById('letterModalClose');
const letterBody = document.getElementById('letterBody');

letterCards.forEach(card => {
    const openBtn = card.querySelector('.open-letter-btn');
    openBtn.addEventListener('click', () => {
        const letterNum = card.dataset.letter;
        const letter = loveLetters[letterNum];
        
        letterBody.innerHTML = letter.content;
        letterModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

letterModalClose.addEventListener('click', () => {
    letterModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

letterModal.addEventListener('click', (e) => {
    if (e.target === letterModal) {
        letterModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ==================== QUIZ ====================
const quizStart = document.getElementById('quizStart');
const quizQuestionsElement = document.getElementById('quizQuestions');
const quizResult = document.getElementById('quizResult');
const startQuizBtn = document.getElementById('startQuizBtn');
const retryQuizBtn = document.getElementById('retryQuizBtn');
const questionContainer = document.getElementById('questionContainer');
const optionsContainer = document.getElementById('optionsContainer');
const quizProgressBar = document.getElementById('quizProgressBar');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');

totalQuestionsSpan.textContent = quizQuestions.length;

startQuizBtn.addEventListener('click', startQuiz);
retryQuizBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    quizScore = 0;
    startQuiz();
});

function startQuiz() {
    quizStart.style.display = 'none';
    quizResult.style.display = 'none';
    quizQuestionsElement.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    questionContainer.textContent = question.question;
    optionsContainer.innerHTML = '';
    
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    quizProgressBar.style.width = progress + '%';
    
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = option;
        btn.addEventListener('click', () => selectAnswer(index, question.correct));
        optionsContainer.appendChild(btn);
    });
}

function selectAnswer(selectedIndex, correctIndex) {
    const options = document.querySelectorAll('.quiz-option');
    
    options[selectedIndex].classList.add('selected');
    
    setTimeout(() => {
        if (selectedIndex === correctIndex) {
            options[selectedIndex].classList.add('correct');
            quizScore++;
        } else {
            options[selectedIndex].classList.add('incorrect');
            options[correctIndex].classList.add('correct');
        }
        
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizQuestions.length) {
                showQuestion();
            } else {
                showResult();
            }
        }, 1500);
    }, 300);
}

function showResult() {
    quizQuestionsElement.style.display = 'none';
    quizResult.style.display = 'block';
    
    const scorePercentage = (quizScore / quizQuestions.length) * 100;
    document.getElementById('finalScore').textContent = quizScore;
    
    let title, message;
    
    if (scorePercentage === 100) {
        title = '¡Perfecto! 🏆';
        message = '¡Me conoces a la perfección! Eres increíble y te amo muchísimo ❤️';
    } else if (scorePercentage >= 70) {
        title = '¡Excelente! 🌟';
        message = '¡Muy bien! Me conoces bastante bien. Te amo mi amor ❤️';
    } else if (scorePercentage >= 50) {
        title = '¡Bien Hecho! 💕';
        message = 'Nada mal, pero todavía hay mucho por descubrir el uno del otro ❤️';
    } else {
        title = '¡Podemos Mejorar! 💖';
        message = 'Tenemos que pasar más tiempo juntos para conocernos mejor. ¡Te amo igual! ❤️';
    }
    
    document.getElementById('resultTitle').textContent = title;
    document.getElementById('resultMessage').textContent = message;
}

// ==================== CONTROL DE MÚSICA ====================
musicControl.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicControl.classList.add('playing');
        musicControl.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        backgroundMusic.pause();
        musicControl.classList.remove('playing');
        musicControl.innerHTML = '<i class="fas fa-pause"></i>';
    }
});

// ==================== SCROLL SUAVE ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

});


