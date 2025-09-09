// =================================================================
// Configuration et variables globales
// =================================================================
const CONFIG = {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
};

// Traductions multilingues
const translations = {
    ar: {
        name: 'حمزة عليوة',
        greeting: 'مرحباً، أنا حمزة عليوة',
        title: 'طالب فيزياء الطاقة العالية والفيزياء الفلكية',
        contact: 'تواصل معي',
        about: 'نبذة عني',
        'download-cv': 'تحميل السيرة الذاتية',
        'about-desc': 'طالب متخصص في فيزياء الطاقة العالية والفيزياء الفلكية وعلوم الفضاء بجامعة القاضي عياض. شغوف بالعلوم الفيزيائية الحديثة والبحث العلمي، مع خبرة في التدريس الخصوصي للفيزياء والرياضيات.',
        'years-study': 'سنوات الدراسة',
        'languages': 'اللغات',
        'programming-langs': 'لغات البرمجة',
        'languages-title': 'اللغات',
        'amazigh': 'الأمازيغية (اللغة الأم)',
        'arabic': 'العربية',
        'english': 'الإنجليزية',
        'french': 'الفرنسية',
        'space-research': 'البحث الفضائي والفيزياء الفلكية',
        'education': 'التعليم',
        'master-title': 'ماستر في فيزياء الطاقة العالية والفيزياء الفلكية وعلوم الفضاء',
        'university': 'جامعة القاضي عياض - كلية العلوم السملالية، مراكش',
        'first-rank': 'الأول في الدفعة - السنة الأولى',
        'show-details': 'عرض المقررات الدراسية',
        'hide-details': 'إخفاء المقررات',
        'first-year': 'السنة الأولى - مكتملة بامتياز',
        'second-year': 'السنة الثانية - قيد الدراسة',
        'semester1': 'الفصل الأول',
        'semester2': 'الفصل الثاني',
        'quantum-mechanics': 'الميكانيك الكمي المتقدم',
        'relativity': 'النسبية العامة والكوسمولوجيا',
        'programming': 'البرمجة والفيزياء الحاسوبية',
        'imaging': 'التصوير ومعالجة الإشارة',
        'statistics': 'الطرق الإحصائية',
        'soft-skills': 'المهارات الناعمة',
        'astrophysics': 'الفيزياء الفلكية',
        'quantum-field': 'نظرية المجال الكمي',
        'stellar': 'الفيزياء النجمية',
        'astronomy': 'علم الفلك',
        'ai-ml': 'الذكاء الاصطناعي للفيزياء الفلكية',
        'license-title': 'إجازة الدراسات الأساسية - علوم المادة الفيزيائية',
        'license-option': 'تخصص: الفيزياء الحديثة',
        'deug-title': 'دبلوم الدراسات الجامعية العامة',
        'deug-field': 'علوم المادة الفيزيائية',
        'bac-title': 'شهادة البكالوريا',
        'bac-branch': 'العلوم التجريبية - المسلك الدولي للعلوم الفيزيائية (خيار فرنسية)',
        'skills': 'المهارات والخبرات',
        'search-placeholder': 'البحث في المهارات...',
        'programming-skills': 'البرمجة والحاسوب',
        'math-skills': 'الرياضيات',
        'physics-skills': 'الفيزياء النظرية',
        'astro-skills': 'علم الفلك والفضاء',
        'teaching-skills': 'التدريس والتكوين',
        'analysis': 'التحليل الرياضي',
        'linear-algebra': 'الجبر الخطي',
        'differential-equations': 'المعادلات التفاضلية',
        'statistics-math': 'الإحصاء',
        'quantum-physics': 'الميكانيك الكمي',
        'relativity-physics': 'النسبية العامة والخاصة',
        'particle-physics': 'فيزياء الجسيمات',
        'nuclear-physics': 'الفيزياء النووية',
        'high-energy': 'فيزياء الطاقة العالية',
        'space-science': 'علوم الفضاء',
        'cosmology': 'الكوسمولوجيا',
        'stellar-physics': 'الفيزياء النجمية',
        'physics-teaching': 'تدريس الفيزياء',
        'math-teaching': 'تدريس الرياضيات',
        'tutoring': 'الدعم التربوي',
        'academic-support': 'الدعم الأكاديمي',
        'experience': 'الخبرة العملية',
        'tutor-title': 'أستاذ الدعم التربوي',
        'freelance': 'عمل حر - تدريس خصوصي',
        'tutor-subjects': 'المواد: الفيزياء والرياضيات',
        'tutor-desc': 'تقديم دروس الدعم والتقوية للطلاب في مادتي الفيزياء والرياضيات لمختلف المستويات الدراسية، مع التركيز على فهم المفاهيم الأساسية وحل المسائل العملية.',
        'achievements': 'الإنجازات:',
        'achievement1': 'مساعدة أكثر من 50 طالب في تحسين درجاتهم',
        'achievement2': 'تطوير طرق تدريس مبتكرة للمفاهيم الفيزيائية المعقدة',
        'achievement3': 'إعداد مواد تعليمية مخصصة لكل طالب',
        'get-in-touch': 'ابق على تواصل',
        'contact-desc': 'لا تتردد في التواصل معي للمناقشات الأكاديمية أو الفرص المهنية',
        'phone': 'الهاتف',
        'whatsapp': 'واتساب',
        'academic-email': 'البريد الأكاديمي',
        'personal-email': 'البريد الشخصي',
        'social-media': 'وسائل التواصل الاجتماعي',
        'facebook-desc': 'تابعني على فيسبوك',
        'instagram-desc': 'صور ومشاركات يومية',
        'youtube-desc': 'محتوى تعليمي وثقافي',
        'whatsapp-desc': 'تواصل مباشر',
        'footer-desc': 'طالب فيزياء الطاقة العالية والفيزياء الفلكية',
        'quick-links': 'روابط سريعة',
        'contact-info': 'معلومات التواصل',
        'footer-copyright': '&copy; 2024 حمزة عليوة. جميع الحقوق محفوظة.',
        'loading': 'جاري التحميل...'
    },
    
    en: {
        name: 'Hamza Alioua',
        greeting: 'Hello, I am Hamza Alioua',
        title: 'High Energy Physics and Astrophysics Student',
        contact: 'Contact Me',
        about: 'About Me',
        'download-cv': 'Download CV',
        'about-desc': 'A specialized student in high energy physics, astrophysics and space sciences at Cadi Ayyad University. Passionate about modern physical sciences and scientific research, with experience in private tutoring of physics and mathematics.',
        'years-study': 'Years of Study',
        'languages': 'Languages',
        'programming-langs': 'Programming Languages',
        'languages-title': 'Languages',
        'amazigh': 'Amazigh (Native)',
        'arabic': 'Arabic',
        'english': 'English',
        'french': 'French',
        'space-research': 'Space Research and Astrophysics',
        'education': 'Education',
        'master-title': 'Master in High Energy Physics, Astrophysics and Space Sciences',
        'university': 'Cadi Ayyad University - Faculty of Sciences Semlalia, Marrakech',
        'first-rank': 'First in Class - First Year',
        'show-details': 'Show Curriculum',
        'hide-details': 'Hide Curriculum',
        'first-year': 'First Year - Completed with Excellence',
        'second-year': 'Second Year - In Progress',
        'semester1': 'First Semester',
        'semester2': 'Second Semester',
        'quantum-mechanics': 'Advanced Quantum Mechanics',
        'relativity': 'General Relativity & Cosmology',
        'programming': 'Programming & Computational Physics',
        'imaging': 'Imaging & Signal Processing',
        'statistics': 'Statistical Methods',
        'soft-skills': 'Soft Skills',
        'astrophysics': 'Astrophysics',
        'quantum-field': 'Quantum Field Theory',
        'stellar': 'Stellar Physics',
        'astronomy': 'Astronomy',
        'ai-ml': 'AI & Machine Learning for Astrophysics',
        'license-title': 'Bachelor of Fundamental Studies - Physical Sciences',
        'license-option': 'Specialization: Modern Physics',
        'deug-title': 'Diploma of General University Studies',
        'deug-field': 'Physical Sciences',
        'bac-title': 'Baccalaureate',
        'bac-branch': 'Experimental Sciences - International Track in Physical Sciences (French Option)',
        'skills': 'Skills & Expertise',
        'search-placeholder': 'Search skills...',
        'programming-skills': 'Programming & Computing',
        'math-skills': 'Mathematics',
        'physics-skills': 'Theoretical Physics',
        'astro-skills': 'Astronomy & Space',
        'teaching-skills': 'Teaching & Training',
        'analysis': 'Mathematical Analysis',
        'linear-algebra': 'Linear Algebra',
        'differential-equations': 'Differential Equations',
        'statistics-math': 'Statistics',
        'quantum-physics': 'Quantum Mechanics',
        'relativity-physics': 'General & Special Relativity',
        'particle-physics': 'Particle Physics',
        'nuclear-physics': 'Nuclear Physics',
        'high-energy': 'High Energy Physics',
        'space-science': 'Space Sciences',
        'cosmology': 'Cosmology',
        'stellar-physics': 'Stellar Physics',
        'physics-teaching': 'Physics Teaching',
        'math-teaching': 'Mathematics Teaching',
        'tutoring': 'Academic Support',
        'academic-support': 'Academic Support',
        'experience': 'Work Experience',
        'tutor-title': 'Academic Support Teacher',
        'freelance': 'Freelance - Private Tutoring',
        'tutor-subjects': 'Subjects: Physics and Mathematics',
        'tutor-desc': 'Providing support and reinforcement lessons for students in physics and mathematics for various academic levels, focusing on understanding fundamental concepts and solving practical problems.',
        'achievements': 'Achievements:',
        'achievement1': 'Helped over 50 students improve their grades',
        'achievement2': 'Developed innovative teaching methods for complex physics concepts',
        'achievement3': 'Created customized educational materials for each student',
        'get-in-touch': 'Get In Touch',
        'contact-desc': 'Feel free to contact me for academic discussions or professional opportunities',
        'phone': 'Phone',
        'whatsapp': 'WhatsApp',
        'academic-email': 'Academic Email',
        'personal-email': 'Personal Email',
        'social-media': 'Social Media',
        'facebook-desc': 'Follow me on Facebook',
        'instagram-desc': 'Daily photos and posts',
        'youtube-desc': 'Educational and cultural content',
        'whatsapp-desc': 'Direct contact',
        'footer-desc': 'High Energy Physics and Astrophysics Student',
        'quick-links': 'Quick Links',
        'contact-info': 'Contact Information',
        'footer-copyright': '&copy; 2024 Hamza Alioua. All rights reserved.',
        'loading': 'Loading...'
    },
    
    fr: {
        name: 'Hamza Alioua',
        greeting: 'Bonjour, je suis Hamza Alioua',
        title: 'Étudiant en Physique des Hautes Énergies et Astrophysique',
        contact: 'Me Contacter',
        about: 'À Propos',
        'download-cv': 'Télécharger CV',
        'about-desc': 'Étudiant spécialisé en physique des hautes énergies, astrophysique et sciences spatiales à l\'Université Cadi Ayyad. Passionné par les sciences physiques modernes et la recherche scientifique, avec une expérience dans l\'enseignement privé de la physique et des mathématiques.',
        'years-study': 'Années d\'Étude',
        'languages': 'Langues',
        'programming-langs': 'Langages de Programmation',
        'languages-title': 'Langues',
        'amazigh': 'Amazighe (Langue maternelle)',
        'arabic': 'Arabe',
        'english': 'Anglais',
        'french': 'Français',
        'space-research': 'Recherche Spatiale et Astrophysique',
        'education': 'Formation',
        'master-title': 'Master en Physique des Hautes Énergies, Astrophysique et Sciences Spatiales',
        'university': 'Université Cadi Ayyad - Faculté des Sciences Semlalia, Marrakech',
        'first-rank': 'Premier de Promotion - Première Année',
        'show-details': 'Afficher le Cursus',
        'hide-details': 'Masquer le Cursus',
        'first-year': 'Première Année - Complétée avec Excellence',
        'second-year': 'Deuxième Année - En Cours',
        'semester1': 'Premier Semestre',
        'semester2': 'Deuxième Semestre',
        'quantum-mechanics': 'Mécanique Quantique Avancée',
        'relativity': 'Relativité Générale et Cosmologie',
        'programming': 'Programmation et Physique Computationnelle',
        'imaging': 'Imagerie et Traitement du Signal',
        'statistics': 'Méthodes Statistiques',
        'soft-skills': 'Compétences Transversales',
        'astrophysics': 'Astrophysique',
        'quantum-field': 'Théorie Quantique des Champs',
        'stellar': 'Physique Stellaire',
        'astronomy': 'Astronomie',
        'ai-ml': 'IA et Apprentissage Automatique pour l\'Astrophysique',
        'license-title': 'Licence d\'Études Fondamentales - Sciences Physiques',
        'license-option': 'Option : Physique Moderne',
        'deug-title': 'Diplôme d\'Études Universitaires Générales',
        'deug-field': 'Sciences Physiques',
        'bac-title': 'Baccalauréat',
        'bac-branch': 'Sciences Expérimentales - Filière Internationale Sciences Physiques (Option Français)',
        'skills': 'Compétences et Expertise',
        'search-placeholder': 'Rechercher des compétences...',
        'programming-skills': 'Programmation et Informatique',
        'math-skills': 'Mathématiques',
        'physics-skills': 'Physique Théorique',
        'astro-skills': 'Astronomie et Espace',
        'teaching-skills': 'Enseignement et Formation',
        'analysis': 'Analyse Mathématique',
        'linear-algebra': 'Algèbre Linéaire',
        'differential-equations': 'Équations Différentielles',
        'statistics-math': 'Statistiques',
        'quantum-physics': 'Mécanique Quantique',
        'relativity-physics': 'Relativité Générale et Restreinte',
        'particle-physics': 'Physique des Particules',
        'nuclear-physics': 'Physique Nucléaire',
        'high-energy': 'Physique des Hautes Énergies',
        'space-science': 'Sciences Spatiales',
        'cosmology': 'Cosmologie',
        'stellar-physics': 'Physique Stellaire',
        'physics-teaching': 'Enseignement de la Physique',
        'math-teaching': 'Enseignement des Mathématiques',
        'tutoring': 'Soutien Pédagogique',
        'academic-support': 'Soutien Académique',
        'experience': 'Expérience Professionnelle',
        'tutor-title': 'Professeur de Soutien Pédagogique',
        'freelance': 'Freelance - Cours Particuliers',
        'tutor-subjects': 'Matières : Physique et Mathématiques',
        'tutor-desc': 'Dispensation de cours de soutien et de renforcement pour étudiants en physique et mathématiques pour différents niveaux académiques, en mettant l\'accent sur la compréhension des concepts fondamentaux et la résolution de problèmes pratiques.',
        'achievements': 'Réalisations :',
        'achievement1': 'Aidé plus de 50 étudiants à améliorer leurs notes',
        'achievement2': 'Développé des méthodes d\'enseignement innovantes pour les concepts physiques complexes',
        'achievement3': 'Créé du matériel éducatif personnalisé pour chaque étudiant',
        'get-in-touch': 'Restons en Contact',
        'contact-desc': 'N\'hésitez pas à me contacter pour des discussions académiques ou des opportunités professionnelles',
        'phone': 'Téléphone',
        'whatsapp': 'WhatsApp',
        'academic-email': 'Email Académique',
        'personal-email': 'Email Personnel',
        'social-media': 'Réseaux Sociaux',
        'facebook-desc': 'Suivez-moi sur Facebook',
        'instagram-desc': 'Photos et publications quotidiennes',
        'youtube-desc': 'Contenu éducatif et culturel',
        'whatsapp-desc': 'Contact direct',
        'footer-desc': 'Étudiant en Physique des Hautes Énergies et Astrophysique',
        'quick-links': 'Liens Rapides',
        'contact-info': 'Informations de Contact',
        'footer-copyright': '&copy; 2024 Hamza Alioua. Tous droits réservés.',
        'loading': 'Chargement...'
    }
};

// Variables globales
let currentLang = 'en'; // Anglais par défaut
let currentTheme = 'dark'; // Mode sombre par défaut
let isLoaded = false;

// =================================================================
// Initialisation
// =================================================================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Récupérer les préférences sauvegardées
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    const savedTheme = localStorage.getItem('preferred-theme') || 'dark';
    
    // Appliquer les préférences
    changeLanguage(savedLang);
    if (savedTheme !== currentTheme) {
        toggleTheme();
    }
    
    // Initialiser les composants
    initializeParticles();
    initializeAnimations();
    initializeEventListeners();
    initializeSkillLevels();
    initializeCounters();
    
    // Masquer l'écran de chargement
    setTimeout(() => {
        hideLoadingScreen();
        isLoaded = true;
    }, 1500);
}

// =================================================================
// Gestion des langues
// =================================================================
function changeLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLang = lang;
    
    // Mettre à jour les attributs du document
    document.documentElement.lang = lang;
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Mettre à jour tous les éléments traduisibles
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (key.includes('copyright') || key.includes('footer')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Mettre à jour le sélecteur de langue
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.value = lang;
    }
    
    // Sauvegarder la préférence
    localStorage.setItem('preferred-language', lang);
    
    // Réinitialiser les détails du master si nécessaire
    const masterDetails = document.getElementById('masterDetails');
    if (masterDetails && masterDetails.classList.contains('show')) {
        const btn = document.querySelector('.details-btn');
        if (btn) {
            btn.textContent = translations[currentLang]['hide-details'] || 'Hide Details';
        }
    }
}

// =================================================================
// Gestion des thèmes
// =================================================================
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        if (themeToggle) themeToggle.className = 'fas fa-moon';
        currentTheme = 'light';
    } else {
        body.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.className = 'fas fa-sun';
        currentTheme = 'dark';
    }
    
    // Sauvegarder la préférence
    localStorage.setItem('preferred-theme', currentTheme);
    
    // Réinitialiser les particules avec la nouvelle couleur
    if (window.pJSDom && window.pJSDom[0]) {
        const particlesConfig = {...CONFIG};
        particlesConfig.particles.color.value = currentTheme === 'dark' ? '#ffffff' : '#2563eb';
        particlesConfig.particles.line_linked.color = currentTheme === 'dark' ? '#ffffff' : '#2563eb';
        
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.particlesJS('particles-js', particlesConfig);
    }
}

// =================================================================
// Particules d'arrière-plan
// =================================================================
function initializeParticles() {
    if (typeof particlesJS !== 'undefined' && window.innerWidth > 768) {
        const particlesConfig = {...CONFIG};
        particlesConfig.particles.color.value = currentTheme === 'dark' ? '#ffffff' : '#2563eb';
        particlesConfig.particles.line_linked.color = currentTheme === 'dark' ? '#ffffff' : '#2563eb';
        
        particlesJS('particles-js', particlesConfig);
    }
}

// =================================================================
// Animations et interactions
// =================================================================
function initializeAnimations() {
    // Animation d'apparition au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observer les éléments animables
    const animatedElements = document.querySelectorAll('.skill-card, .timeline-item, .experience-card, .contact-item, .social-card');
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
    
    // Animation de frappe pour le titre
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-text h1');
        if (heroTitle && isLoaded) {
            const originalText = heroTitle.textContent;
            typeWriter(heroTitle, originalText, 80);
        }
    }, 2000);
}

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// =================================================================
// Événements et interactions
// =================================================================
function initializeEventListeners() {
    // Scroll navbar
    window.addEventListener('scroll', handleScroll);
    
    // Bouton retour en haut
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
    }
    
    // Indicateur de scroll
    const scrollIndicator = document.querySelector('.scroll-arrow');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.getElementById('about').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Recherche dans les compétences
    const searchInput = document.getElementById('skillSearch');
    if (searchInput) {
        searchInput.addEventListener('input', handleSkillSearch);
    }
    
    // Navigation fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // Raccourcis clavier
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Effets de survol sur les cartes sociales
    initializeSocialHoverEffects();
}

function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
}

function handleSkillSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const isVisible = text.includes(searchTerm);
        card.style.display = isVisible ? 'block' : 'none';
        
        if (isVisible) {
            card.style.animation = 'fadeInUp 0.3s ease';
        }
    });
    
    // Si aucun résultat
    const visibleCards = document.querySelectorAll('.skill-card[style="display: block"], .skill-card:not([style*="display: none"])');
    const noResults = document.getElementById('no-results');
    
    if (visibleCards.length === 0 && searchTerm) {
        if (!noResults) {
            const message = document.createElement('div');
            message.id = 'no-results';
            message.className = 'no-results';
            message.textContent = currentLang === 'ar' ? 'لا توجد نتائج' : 
                                  currentLang === 'en' ? 'No results found' : 
                                  'Aucun résultat trouvé';
            document.querySelector('.skills-grid').appendChild(message);
        }
    } else if (noResults) {
        noResults.remove();
    }
}

function handleKeyboardShortcuts(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                changeLanguage('ar');
                break;
            case '2':
                e.preventDefault();
                changeLanguage('en');
                break;
            case '3':
                e.preventDefault();
                changeLanguage('fr');
                break;
            case 'd':
            case 'D':
                e.preventDefault();
                toggleTheme();
                break;
        }
    }
}

function initializeSocialHoverEffects() {
    document.querySelectorAll('.social-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-3px) scale(1)';
        });
    });
}

// =================================================================
// Fonctionnalités spécifiques
// =================================================================
function toggleMasterDetails() {
    const details = document.getElementById('masterDetails');
    const btn = document.querySelector('.details-btn');
    
    if (!details || !btn) return;
    
    if (details.classList.contains('show')) {
        details.classList.remove('show');
        btn.textContent = translations[currentLang]['show-details'] || 'Show Details';
    } else {
        details.classList.add('show');
        btn.textContent = translations[currentLang]['hide-details'] || 'Hide Details';
        
        // Animation des barres de progression
        setTimeout(() => {
            const progressBars = details.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }, 300);
    }
}

function initializeSkillLevels() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevels = entry.target.querySelectorAll('.skill-level');
                skillLevels.forEach(level => {
                    const targetLevel = level.getAttribute('data-level');
                    if (targetLevel) {
                        setTimeout(() => {
                            level.style.width = targetLevel + '%';
                        }, 500);
                    }
                });
                observer.unobserve(entry.target);
            }
        });
    });
    
    document.querySelectorAll('.skill-card').forEach(card => {
        observer.observe(card);
    });
}

function initializeCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, 0, target, 2000);
                });
                observer.unobserve(entry.target);
            }
        });
    });
    
    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) {
        observer.observe(statsGrid);
    }
}

function animateCounter(element, start, end, duration) {
    const increment = (end - start) / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        
        if (current >= end) {
            element.textContent = end;
            clearInterval(timer);
        }
    }, 16);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function hideLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}

function downloadCV() {
    // Simulation de téléchargement de CV
    const languages = {
        ar: 'تم بدء تحميل السيرة الذاتية...',
        en: 'CV download started...',
        fr: 'Téléchargement du CV commencé...'
    };
    
    alert(languages[currentLang]);
    
    // Dans un vrai projet, vous ajouteriez ici la logique de téléchargement
    // window.open('path/to/cv.pdf', '_blank');
}

// =================================================================
// Fonctions utilitaires
// =================================================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// =================================================================
// Gestion d'erreurs
// =================================================================
window.addEventListener('error', function(e) {
    console.error('Une erreur s\'est produite:', e.error);
    // Optionnel: envoyer les erreurs à un service de logging
});

// =================================================================
// Performance et optimisations
// =================================================================
// Optimisation du scroll
const optimizedScroll = throttle(handleScroll, 16);
window.removeEventListener('scroll', handleScroll);
window.addEventListener('scroll', optimizedScroll);

// Préchargement des images importantes
function preloadImages() {
    const imageUrls = [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=700&fit=crop',
        'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=80&h=80&fit=crop',
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=100&h=100&fit=crop'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Lazy loading pour les images
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialiser le lazy loading
document.addEventListener('DOMContentLoaded', function() {
    preloadImages();
    initializeLazyLoading();
});

// =================================================================
// Service Worker (optionnel pour PWA)
// =================================================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW enregistré:', registration);
            })
            .catch(registrationError => {
                console.log('Échec enregistrement SW:', registrationError);
            });
    });
}

// =================================================================
// Fonctions accessibles globalement
// =================================================================
window.toggleMasterDetails = toggleMasterDetails;
window.downloadCV = downloadCV;
window.scrollToTop = scrollToTop;