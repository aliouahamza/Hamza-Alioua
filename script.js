// =================================================================
// CONFIGURATION ET VARIABLES GLOBALES
// =================================================================

// Configuration des particules d'arrière-plan
const CONFIG = {
    particles: {
        number: { 
            value: 80, // Nombre de particules à afficher
            density: { 
                enable: true, // Active la densité adaptative
                value_area: 800 // Zone de densité pour répartition uniforme
            } 
        },
        color: { value: "#ffffff" }, // Couleur des particules (blanc par défaut)
        shape: { type: "circle" }, // Forme circulaire des particules
        opacity: { 
            value: 0.5, // Opacité par défaut
            random: false // Opacité uniforme pour toutes les particules
        },
        size: { 
            value: 3, // Taille des particules
            random: true // Tailles variables pour effet naturel
        },
        line_linked: { 
            enable: true, // Active les lignes entre particules
            distance: 150, // Distance maximale pour connecter les particules
            color: "#ffffff", // Couleur des lignes de connexion
            opacity: 0.4, // Opacité des lignes
            width: 1 // Épaisseur des lignes
        },
        move: { 
            enable: true, // Active le mouvement des particules
            speed: 6, // Vitesse de déplacement
            direction: "none", // Direction aléatoire
            random: false, // Mouvement uniforme
            straight: false, // Trajectoire non linéaire
            out_mode: "out", // Comportement en sortie d'écran
            bounce: false // Pas de rebond sur les bords
        }
    },
    interactivity: {
        detect_on: "canvas", // Détection sur le canvas entier
        events: { 
            onhover: { 
                enable: true, // Active l'interaction au survol
                mode: "repulse" // Mode de répulsion au survol
            }, 
            onclick: { 
                enable: true, // Active l'interaction au clic
                mode: "push" // Ajoute des particules au clic
            }, 
            resize: true // Adapte aux changements de taille d'écran
        },
        modes: { 
            repulse: { 
                distance: 100, // Distance de répulsion
                duration: 0.4 // Durée de l'effet
            }, 
            push: { 
                particles_nb: 4 // Nombre de particules ajoutées au clic
            } 
        }
    },
    retina_detect: true // Détection des écrans haute résolution
};

// Traductions multilingues pour l'internationalisation
const translations = {
    // Traductions en arabe
    ar: {
        name: 'حمزة عليوة', // Nom en arabe
        greeting: 'مرحباً، أنا حمزة عليوة', // Salutation
        title: 'طالب فيزياء الطاقة العالية والفيزياء الفلكية', // Titre professionnel
        contact: 'تواصل معي', // Bouton contact
        about: 'نبذة عني', // Section à propos
        'download-cv': 'تحميل السيرة الذاتية', // Télécharger CV
        'about-desc': 'طالب متخصص في فيزياء الطاقة العالية والفيزياء الفلكية وعلوم الفضاء بجامعة القاضي عياض. شغوف بالعلوم الفيزيائية الحديثة والبحث العلمي، مع خبرة في التدريس الخصوصي للفيزياء والرياضيات.', // Description
        'years-study': 'سنوات الدراسة', // Années d'étude
        'languages': 'اللغات', // Langues
        'programming-langs': 'لغات البرمجة', // Langages de programmation
        'languages-title': 'اللغات', // Titre section langues
        'amazigh': 'الأمازيغية (اللغة الأم)', // Langue amazighe
        'arabic': 'العربية', // Langue arabe
        'english': 'الإنجليزية', // Langue anglaise
        'french': 'الفرنسية', // Langue française
        'space-research': 'البحث الفضائي والفيزياء الفلكية', // Recherche spatiale
        'education': 'التعليم', // Section éducation
        'master-title': 'ماستر في فيزياء الطاقة العالية والفيزياء الفلكية وعلوم الفضاء', // Titre master
        'university': 'جامعة القاضي عياض - كلية العلوم السملالية، مراكش', // Université
        'first-rank': 'الأول في الدفعة - السنة الأولى', // Premier de promotion
        'show-details': 'عرض المقررات الدراسية', // Afficher détails
        'hide-details': 'إخفاء المقررات', // Masquer détails
        'first-year': 'السنة الأولى - مكتملة بامتياز', // Première année
        'second-year': 'السنة الثانية - قيد الدراسة', // Deuxième année
        'semester1': 'الفصل الأول', // Premier semestre
        'semester2': 'الفصل الثاني', // Deuxième semestre
        'quantum-mechanics': 'الميكانيك الكمي المتقدم', // Mécanique quantique
        'relativity': 'النسبية العامة والكوسمولوجيا', // Relativité
        'programming': 'البرمجة والفيزياء الحاسوبية', // Programmation
        'imaging': 'التصوير ومعالجة الإشارة', // Imagerie
        'statistics': 'الطرق الإحصائية', // Statistiques
        'soft-skills': 'المهارات الناعمة', // Compétences transversales
        'astrophysics': 'الفيزياء الفلكية', // Astrophysique
        'quantum-field': 'نظرية المجال الكمي', // Théorie des champs
        'stellar': 'الفيزياء النجمية', // Physique stellaire
        'astronomy': 'علم الفلك', // Astronomie
        'ai-ml': 'الذكاء الاصطناعي للفيزياء الفلكية', // IA pour astrophysique
        'license-title': 'إجازة الدراسات الأساسية - علوم المادة الفيزيائية', // Licence
        'license-option': 'تخصص: الفيزياء الحديثة', // Spécialisation
        'deug-title': 'دبلوم الدراسات الجامعية العامة', // DEUG
        'deug-field': 'علوم المادة الفيزيائية', // Domaine DEUG
        'bac-title': 'شهادة البكالوريا', // Baccalauréat
        'bac-branch': 'العلوم التجريبية - المسلك الدولي للعلوم الفيزيائية (خيار فرنسية)', // Filière bac
        'skills': 'المهارات والخبرات', // Compétences
        'search-placeholder': 'البحث في المهارات...', // Placeholder recherche
        'programming-skills': 'البرمجة والحاسوب', // Compétences programmation
        'math-skills': 'الرياضيات', // Mathématiques
        'physics-skills': 'الفيزياء النظرية', // Physique théorique
        'astro-skills': 'علم الفلك والفضاء', // Astronomie et espace
        'teaching-skills': 'التدريس والتكوين', // Enseignement
        'analysis': 'التحليل الرياضي', // Analyse mathématique
        'linear-algebra': 'الجبر الخطي', // Algèbre linéaire
        'differential-equations': 'المعادلات التفاضلية', // Équations différentielles
        'statistics-math': 'الإحصاء', // Statistiques
        'quantum-physics': 'الميكانيك الكمي', // Physique quantique
        'relativity-physics': 'النسبية العامة والخاصة', // Relativité
        'particle-physics': 'فيزياء الجسيمات', // Physique des particules
        'nuclear-physics': 'الفيزياء النووية', // Physique nucléaire
        'high-energy': 'فيزياء الطاقة العالية', // Physique haute énergie
        'space-science': 'علوم الفضاء', // Sciences spatiales
        'cosmology': 'الكوسمولوجيا', // Cosmologie
        'stellar-physics': 'الفيزياء النجمية', // Physique stellaire
        'physics-teaching': 'تدريس الفيزياء', // Enseignement physique
        'math-teaching': 'تدريس الرياضيات', // Enseignement mathématiques
        'tutoring': 'الدعم التربوي', // Tutorat
        'academic-support': 'الدعم الأكاديمي', // Support académique
        'experience': 'الخبرة العملية', // Expérience professionnelle
        'tutor-title': 'أستاذ الدعم التربوي', // Titre tuteur
        'freelance': 'عمل حر - تدريس خصوصي', // Freelance
        'tutor-subjects': 'المواد: الفيزياء والرياضيات', // Matières enseignées
        'tutor-desc': 'تقديم دروس الدعم والتقوية للطلاب في مادتي الفيزياء والرياضيات لمختلف المستويات الدراسية، مع التركيز على فهم المفاهيم الأساسية وحل المسائل العملية.', // Description tuteur
        'achievements': 'الإنجازات:', // Réalisations
        'achievement1': 'مساعدة أكثر من 50 طالب في تحسين درجاتهم', // Réalisation 1
        'achievement2': 'تطوير طرق تدريس مبتكرة للمفاهيم الفيزيائية المعقدة', // Réalisation 2
        'achievement3': 'إعداد مواد تعليمية مخصصة لكل طالب', // Réalisation 3
        'get-in-touch': 'ابق على تواصل', // Titre contact
        'contact-desc': 'لا تتردد في التواصل معي للمناقشات الأكاديمية أو الفرص المهنية', // Description contact
        'phone': 'الهاتف', // Téléphone
        'whatsapp': 'واتساب', // WhatsApp
        'academic-email': 'البريد الأكاديمي', // Email académique
        'personal-email': 'البريد الشخصي', // Email personnel
        'social-media': 'وسائل التواصل الاجتماعي', // Réseaux sociaux
        'facebook-desc': 'تابعني على فيسبوك', // Description Facebook
        'instagram-desc': 'صور ومشاركات يومية', // Description Instagram
        'youtube-desc': 'محتوى تعليمي وثقافي', // Description YouTube
        'whatsapp-desc': 'تواصل مباشر', // Description WhatsApp
        'footer-desc': 'طالب فيزياء الطاقة العالية والفيزياء الفلكية', // Description footer
        'quick-links': 'روابط سريعة', // Liens rapides
        'contact-info': 'معلومات التواصل', // Informations contact
        'footer-copyright': '&copy; 2024 حمزة عليوة. جميع الحقوق محفوظة.', // Copyright
        'loading': 'جاري التحميل...', // Chargement
        'view-education': 'التعليم والمهارات', // Voir éducation
        'nav-education': 'التعليم', // Navigation éducation
        'nav-skills': 'المهارات', // Navigation compétences
        'nav-experience': 'الخبرة', // Navigation expérience
        'location': 'مراكش، المغرب', // Localisation
    },
    
    // Traductions en anglais
    en: {
        name: 'Hamza Alioua', // Nom en anglais
        greeting: 'Hello, I am Hamza Alioua', // Salutation
        title: 'High Energy Physics and Astrophysics Student', // Titre professionnel
        contact: 'Contact Me', // Bouton contact
        about: 'About Me', // Section à propos
        'download-cv': 'Download CV', // Télécharger CV
        'about-desc': 'A specialized student in high energy physics, astrophysics and space sciences at Cadi Ayyad University. Passionate about modern physical sciences and scientific research, with experience in private tutoring of physics and mathematics.', // Description
        'years-study': 'Years of Study', // Années d'étude
        'languages': 'Languages', // Langues
        'programming-langs': 'Programming Languages', // Langages de programmation
        'languages-title': 'Languages', // Titre section langues
        'amazigh': 'Amazigh (Native)', // Langue amazighe
        'arabic': 'Arabic', // Langue arabe
        'english': 'English', // Langue anglaise
        'french': 'French', // Langue française
        'space-research': 'Space Research and Astrophysics', // Recherche spatiale
        'education': 'Education', // Section éducation
        'master-title': 'Master in High Energy Physics, Astrophysics and Space Sciences', // Titre master
        'university': 'Cadi Ayyad University - Faculty of Sciences Semlalia, Marrakech', // Université
        'first-rank': 'First in Class - First Year', // Premier de promotion
        'show-details': 'Show Curriculum', // Afficher détails
        'hide-details': 'Hide Curriculum', // Masquer détails
        'first-year': 'First Year - Completed with Excellence', // Première année
        'second-year': 'Second Year - In Progress', // Deuxième année
        'semester1': 'First Semester', // Premier semestre
        'semester2': 'Second Semester', // Deuxième semestre
        'quantum-mechanics': 'Advanced Quantum Mechanics', // Mécanique quantique
        'relativity': 'General Relativity & Cosmology', // Relativité
        'programming': 'Programming & Computational Physics', // Programmation
        'imaging': 'Imaging & Signal Processing', // Imagerie
        'statistics': 'Statistical Methods', // Statistiques
        'soft-skills': 'Soft Skills', // Compétences transversales
        'astrophysics': 'Astrophysics', // Astrophysique
        'quantum-field': 'Quantum Field Theory', // Théorie des champs
        'stellar': 'Stellar Physics', // Physique stellaire
        'astronomy': 'Astronomy', // Astronomie
        'ai-ml': 'AI & Machine Learning for Astrophysics', // IA pour astrophysique
        'license-title': 'Bachelor of Fundamental Studies - Physical Sciences', // Licence
        'license-option': 'Specialization: Modern Physics', // Spécialisation
        'deug-title': 'Diploma of General University Studies', // DEUG
        'deug-field': 'Physical Sciences', // Domaine DEUG
        'bac-title': 'Baccalaureate', // Baccalauréat
        'bac-branch': 'Experimental Sciences - International Track in Physical Sciences (French Option)', // Filière bac
        'skills': 'Skills & Expertise', // Compétences
        'search-placeholder': 'Search skills...', // Placeholder recherche
        'programming-skills': 'Programming & Computing', // Compétences programmation
        'math-skills': 'Mathematics', // Mathématiques
        'physics-skills': 'Theoretical Physics', // Physique théorique
        'astro-skills': 'Astronomy & Space', // Astronomie et espace
        'teaching-skills': 'Teaching & Training', // Enseignement
        'analysis': 'Mathematical Analysis', // Analyse mathématique
        'linear-algebra': 'Linear Algebra', // Algèbre linéaire
        'differential-equations': 'Differential Equations', // Équations différentielles
        'statistics-math': 'Statistics', // Statistiques
        'quantum-physics': 'Quantum Mechanics', // Physique quantique
        'relativity-physics': 'General & Special Relativity', // Relativité
        'particle-physics': 'Particle Physics', // Physique des particules
        'nuclear-physics': 'Nuclear Physics', // Physique nucléaire
        'high-energy': 'High Energy Physics', // Physique haute énergie
        'space-science': 'Space Sciences', // Sciences spatiales
        'cosmology': 'Cosmology', // Cosmologie
        'stellar-physics': 'Stellar Physics', // Physique stellaire
        'physics-teaching': 'Physics Teaching', // Enseignement physique
        'math-teaching': 'Mathematics Teaching', // Enseignement mathématiques
        'tutoring': 'Academic Support', // Tutorat
        'academic-support': 'Academic Support', // Support académique
        'experience': 'Work Experience', // Expérience professionnelle
        'tutor-title': 'Academic Support Teacher', // Titre tuteur
        'freelance': 'Freelance - Private Tutoring', // Freelance
        'tutor-subjects': 'Subjects: Physics and Mathematics', // Matières enseignées
        'tutor-desc': 'Providing support and reinforcement lessons for students in physics and mathematics for various academic levels, focusing on understanding fundamental concepts and solving practical problems.', // Description tuteur
        'achievements': 'Achievements:', // Réalisations
        'achievement1': 'Helped over 50 students improve their grades', // Réalisation 1
        'achievement2': 'Developed innovative teaching methods for complex physics concepts', // Réalisation 2
        'achievement3': 'Created customized educational materials for each student', // Réalisation 3
        'get-in-touch': 'Get In Touch', // Titre contact
        'contact-desc': 'Feel free to contact me for academic discussions or professional opportunities', // Description contact
        'phone': 'Phone', // Téléphone
        'whatsapp': 'WhatsApp', // WhatsApp
        'academic-email': 'Academic Email', // Email académique
        'personal-email': 'Personal Email', // Email personnel
        'social-media': 'Social Media', // Réseaux sociaux
        'facebook-desc': 'Follow me on Facebook', // Description Facebook
        'instagram-desc': 'Daily photos and posts', // Description Instagram
        'youtube-desc': 'Educational and cultural content', // Description YouTube
        'whatsapp-desc': 'Direct contact', // Description WhatsApp
        'footer-desc': 'High Energy Physics and Astrophysics Student', // Description footer
        'quick-links': 'Quick Links', // Liens rapides
        'contact-info': 'Contact Information', // Informations contact
        'footer-copyright': '&copy; 2024 Hamza Alioua. All rights reserved.', // Copyright
        'loading': 'Loading...', // Chargement
        'view-education': 'Education & Skills', // Voir éducation
        'nav-education': 'Education', // Navigation éducation
        'nav-skills': 'Skills', // Navigation compétences
        'nav-experience': 'Experience', // Navigation expérience
        'location': 'Marrakech, Morocco', // Localisation
    },
    
    // Traductions en français
    fr: {
        name: 'Hamza Alioua', // Nom en français
        greeting: 'Bonjour, je suis Hamza Alioua', // Salutation
        title: 'Étudiant en Physique des Hautes Énergies et Astrophysique', // Titre professionnel
        contact: 'Me Contacter', // Bouton contact
        about: 'À Propos', // Section à propos
        'download-cv': 'Télécharger CV', // Télécharger CV
        'about-desc': 'Étudiant spécialisé en physique des hautes énergies, astrophysique et sciences spatiales à l\'Université Cadi Ayyad. Passionné par les sciences physiques modernes et la recherche scientifique, avec une expérience dans l\'enseignement privé de la physique et des mathématiques.', // Description
        'years-study': 'Années d\'Étude', // Années d'étude
        'languages': 'Langues', // Langues
        'programming-langs': 'Langages de Programmation', // Langages de programmation
        'languages-title': 'Langues', // Titre section langues
        'amazigh': 'Amazighe (Langue maternelle)', // Langue amazighe
        'arabic': 'Arabe', // Langue arabe
        'english': 'Anglais', // Langue anglaise
        'french': 'Français', // Langue française
        'space-research': 'Recherche Spatiale et Astrophysique', // Recherche spatiale
        'education': 'Formation', // Section éducation
        'master-title': 'Master en Physique des Hautes Énergies, Astrophysique et Sciences Spatiales', // Titre master
        'university': 'Université Cadi Ayyad - Faculté des Sciences Semlalia, Marrakech', // Université
        'first-rank': 'Premier de Promotion - Première Année', // Premier de promotion
        'show-details': 'Afficher le Cursus', // Afficher détails
        'hide-details': 'Masquer le Cursus', // Masquer détails
        'first-year': 'Première Année - Complétée avec Excellence', // Première année
        'second-year': 'Deuxième Année - En Cours', // Deuxième année
        'semester1': 'Premier Semestre', // Premier semestre
        'semester2': 'Deuxième Semestre', // Deuxième semestre
        'quantum-mechanics': 'Mécanique Quantique Avancée', // Mécanique quantique
        'relativity': 'Relativité Générale et Cosmologie', // Relativité
        'programming': 'Programmation et Physique Computationnelle', // Programmation
        'imaging': 'Imagerie et Traitement du Signal', // Imagerie
        'statistics': 'Méthodes Statistiques', // Statistiques
        'soft-skills': 'Compétences Transversales', // Compétences transversales
        'astrophysics': 'Astrophysique', // Astrophysique
        'quantum-field': 'Théorie Quantique des Champs', // Théorie des champs
        'stellar': 'Physique Stellaire', // Physique stellaire
        'astronomy': 'Astronomie', // Astronomie
        'ai-ml': 'IA et Apprentissage Automatique pour l\'Astrophysique', // IA pour astrophysique
        'license-title': 'Licence d\'Études Fondamentales - Sciences Physiques', // Licence
        'license-option': 'Option : Physique Moderne', // Spécialisation
        'deug-title': 'Diplôme d\'Études Universitaires Générales', // DEUG
        'deug-field': 'Sciences Physiques', // Domaine DEUG
        'bac-title': 'Baccalauréat', // Baccalauréat
        'bac-branch': 'Sciences Expérimentales - Filière Internationale Sciences Physiques (Option Français)', // Filière bac
        'skills': 'Compétences et Expertise', // Compétences
        'search-placeholder': 'Rechercher des compétences...', // Placeholder recherche
        'programming-skills': 'Programmation et Informatique', // Compétences programmation
        'math-skills': 'Mathématiques', // Mathématiques
        'physics-skills': 'Physique Théorique', // Physique théorique
        'astro-skills': 'Astronomie et Espace', // Astronomie et espace
        'teaching-skills': 'Enseignement et Formation', // Enseignement
        'analysis': 'Analyse Mathématique', // Analyse mathématique
        'linear-algebra': 'Algèbre Linéaire', // Algèbre linéaire
        'differential-equations': 'Équations Différentielles', // Équations différentielles
        'statistics-math': 'Statistiques', // Statistiques
        'quantum-physics': 'Mécanique Quantique', // Physique quantique
        'relativity-physics': 'Relativité Générale et Restreinte', // Relativité
        'particle-physics': 'Physique des Particules', // Physique des particules
        'nuclear-physics': 'Physique Nucléaire', // Physique nucléaire
        'high-energy': 'Physique des Hautes Énergies', // Physique haute énergie
        'space-science': 'Sciences Spatiales', // Sciences spatiales
        'cosmology': 'Cosmologie', // Cosmologie
        'stellar-physics': 'Physique Stellaire', // Physique stellaire
        'physics-teaching': 'Enseignement de la Physique', // Enseignement physique
        'math-teaching': 'Enseignement des Mathématiques', // Enseignement mathématiques
        'tutoring': 'Soutien Pédagogique', // Tutorat
        'academic-support': 'Soutien Académique', // Support académique
        'experience': 'Expérience Professionnelle', // Expérience professionnelle
        'tutor-title': 'Professeur de Soutien Pédagogique', // Titre tuteur
        'freelance': 'Freelance - Cours Particuliers', // Freelance
        'tutor-subjects': 'Matières : Physique et Mathématiques', // Matières enseignées
        'tutor-desc': 'Dispensation de cours de soutien et de renforcement pour étudiants en physique et mathématiques pour différents niveaux académiques, en mettant l\'accent sur la compréhension des concepts fondamentaux et la résolution de problèmes pratiques.', // Description tuteur
        'achievements': 'Réalisations :', // Réalisations
        'achievement1': 'Aidé plus de 50 étudiants à améliorer leurs notes', // Réalisation 1
        'achievement2': 'Développé des méthodes d\'enseignement innovantes pour les concepts physiques complexes', // Réalisation 2
        'achievement3': 'Créé du matériel éducatif personnalisé pour chaque étudiant', // Réalisation 3
        'get-in-touch': 'Restons en Contact', // Titre contact
        'contact-desc': 'N\'hésitez pas à me contacter pour des discussions académiques ou des opportunités professionnelles', // Description contact
        'phone': 'Téléphone', // Téléphone
        'whatsapp': 'WhatsApp', // WhatsApp
        'academic-email': 'Email Académique', // Email académique
        'personal-email': 'Email Personnel', // Email personnel
        'social-media': 'Réseaux Sociaux', // Réseaux sociaux
        'facebook-desc': 'Suivez-moi sur Facebook', // Description Facebook
        'instagram-desc': 'Photos et publications quotidiennes', // Description Instagram
        'youtube-desc': 'Contenu éducatif et culturel', // Description YouTube
        'whatsapp-desc': 'Contact direct', // Description WhatsApp
        'footer-desc': 'Étudiant en Physique des Hautes Énergies et Astrophysique', // Description footer
        'quick-links': 'Liens Rapides', // Liens rapides
        'contact-info': 'Informations de Contact', // Informations contact
        'footer-copyright': '&copy; 2024 Hamza Alioua. Tous droits réservés.', // Copyright
        'loading': 'Chargement...', // Chargement
        'view-education': 'Formation et Compétences', // Voir éducation
        'nav-education': 'Formation', // Navigation éducation
        'nav-skills': 'Compétences', // Navigation compétences
        'nav-experience': 'Expérience', // Navigation expérience
        'location': 'Marrakech, Maroc', // Localisation
    }
};

// Variables globales pour l'état de l'application
let currentLang = 'en'; // Langue par défaut (anglais)
let currentTheme = 'dark'; // Thème par défaut (sombre)
let isLoaded = false; // État de chargement de l'application

// =================================================================
// INITIALISATION DE L'APPLICATION
// =================================================================

// Événement déclenché quand le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    initializeApp(); // Lance l'initialisation complète
});

/**
 * Fonction principale d'initialisation de l'application
 * Récupère les préférences utilisateur et initialise tous les composants
 */
function initializeApp() {
    // Récupérer les préférences sauvegardées dans le localStorage
    const savedLang = localStorage.getItem('preferred-language') || 'en'; // Langue préférée ou anglais par défaut
    const savedTheme = localStorage.getItem('preferred-theme') || 'dark'; // Thème préféré ou sombre par défaut
    
    // Appliquer les préférences récupérées
    changeLanguage(savedLang); // Change la langue de l'interface
    if (savedTheme !== currentTheme) {
        toggleTheme(); // Change le thème si différent de celui par défaut
    }
    
    // Initialiser tous les composants de l'application
    initializeParticles(); // Démarre l'animation des particules d'arrière-plan
    initializeAnimations(); // Configure les animations au scroll
    initializeEventListeners(); // Attache tous les événements
    initializeSkillLevels(); // Configure l'animation des barres de compétences
    initializeCounters(); // Configure l'animation des compteurs statistiques
    
    // Masquer l'écran de chargement après un délai
    setTimeout(() => {
        hideLoadingScreen(); // Cache l'écran de chargement avec animation
        isLoaded = true; // Marque l'application comme chargée
    }, 1500); // Délai de 1.5 secondes pour une transition fluide
}

// =================================================================
// GESTION DES LANGUES ET INTERNATIONALISATION
// =================================================================

/**
 * Change la langue de l'interface utilisateur
 * @param {string} lang - Code de langue (ar, en, fr)
 */
function changeLanguage(lang) {
    // Vérifier que la langue existe dans les traductions
    if (!translations[lang]) return;
    
    currentLang = lang; // Met à jour la langue courante
    
    // Mettre à jour les attributs du document pour l'accessibilité et le SEO
    document.documentElement.lang = lang; // Attribut lang pour les lecteurs d'écran
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr'; // Direction du texte (droite-à-gauche pour l'arabe)
    
    // Mettre à jour tous les éléments traduisibles dans le DOM
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key'); // Clé de traduction
        if (translations[lang] && translations[lang][key]) {
            // Utiliser innerHTML pour les éléments contenant du HTML (comme le copyright)
            if (key.includes('copyright') || key.includes('footer')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key]; // Texte simple pour les autres
            }
        }
    });
    
    // Mettre à jour le sélecteur de langue pour refléter le choix
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.value = lang;
    }
    
    // Mettre à jour le placeholder du champ de recherche
    const searchInput = document.getElementById('skillSearch');
    if (searchInput) {
        searchInput.placeholder = translations[lang]['search-placeholder'] || 'Search...';
    }
    
    // Sauvegarder la préférence dans le localStorage
    localStorage.setItem('preferred-language', lang);
    
    // Réinitialiser le texte du bouton des détails du master si nécessaire
    const masterDetails = document.getElementById('masterDetails');
    if (masterDetails && masterDetails.classList.contains('show')) {
        const btn = document.querySelector('.details-btn');
        if (btn) {
            btn.textContent = translations[currentLang]['hide-details'] || 'Hide Details';
        }
    }
}

// =================================================================
// GESTION DES THÈMES (CLAIR/SOMBRE)
// =================================================================

/**
 * Bascule entre le thème clair et sombre
 */
function toggleTheme() {
    const body = document.body; // Référence au body pour changer les attributs
    const themeToggle = document.querySelector('.theme-toggle i'); // Icône du bouton thème
    
    // Basculer entre les thèmes
    if (currentTheme === 'dark') {
        // Passer au thème clair
        body.setAttribute('data-theme', 'light');
        if (themeToggle) themeToggle.className = 'fas fa-moon'; // Icône lune pour retourner au sombre
        currentTheme = 'light';
    } else {
        // Passer au thème sombre
        body.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.className = 'fas fa-sun'; // Icône soleil pour retourner au clair
        currentTheme = 'dark';
    }
    
    // Sauvegarder la préférence dans le localStorage
    localStorage.setItem('preferred-theme', currentTheme);
    
    // Réinitialiser les particules avec les nouvelles couleurs du thème
    if (window.pJSDom && window.pJSDom[0]) {
        const particlesConfig = {...CONFIG}; // Copie de la configuration
        // Ajuster les couleurs selon le thème
        particlesConfig.particles.color.value = currentTheme === 'dark' ? '#ffffff' : '#2563eb';
        particlesConfig.particles.line_linked.color = currentTheme === 'dark' ? '#ffffff' : '#2563eb';
        
        // Détruire et recréer les particules avec les nouvelles couleurs
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.particlesJS('particles-js', particlesConfig);
    }
}

// =================================================================
// PARTICULES D'ARRIÈRE-PLAN - SOLUTION AU PROBLÈME MOBILE
// =================================================================

/**
 * Initialise les particules d'arrière-plan avec protection mobile
 * CORRECTION PRINCIPALE : Désactive les particules sur mobile pour éviter 
 * qu'elles masquent le texte, particulièrement problématique en arabe
 */
function initializeParticles() {
    // Vérifier que la librairie particlesJS est disponible ET que nous ne sommes pas sur mobile
    if (typeof particlesJS !== 'undefined' && window.innerWidth > 768) {
        const particlesConfig = {...CONFIG}; // Copie de la configuration de base
        
        // Adapter les couleurs au thème actuel
        particlesConfig.particles.color.value = currentTheme === 'dark' ? '#ffffff' : '#2563eb';
        particlesConfig.particles.line_linked.color = currentTheme === 'dark' ? '#ffffff' : '#2563eb';
        
        // CORRECTION : Réduire l'opacité sur tablettes pour améliorer la lisibilité
        if (window.innerWidth <= 1024) {
            particlesConfig.particles.opacity.value = 0.2; // Opacité réduite
            particlesConfig.particles.line_linked.opacity = 0.1; // Lignes très subtiles
            particlesConfig.particles.number.value = 40; // Moins de particules
        }
        
        // Créer les particules
        particlesJS('particles-js', particlesConfig);
    } else {
        // CORRECTION MOBILE : Masquer complètement le container des particules sur mobile
        const particlesContainer = document.getElementById('particles-js');
        if (particlesContainer) {
            particlesContainer.style.display = 'none'; // Cache complètement les particules
        }
    }
}

// =================================================================
// ANIMATIONS ET INTERACTIONS VISUELLES
// =================================================================

/**
 * Initialise toutes les animations de la page
 */
function initializeAnimations() {
    // Configuration de l'observateur d'intersection pour les animations au scroll
    const observerOptions = {
        threshold: 0.1, // Se déclenche quand 10% de l'élément est visible
        rootMargin: '0px 0px -50px 0px' // Marge pour déclencher un peu avant que l'élément soit complètement visible
    };
    
    // Créer l'observateur pour animer les éléments lors de leur apparition
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated'); // Ajoute la classe d'animation
            }
        });
    }, observerOptions);
    
    // Observer tous les éléments animables
    const animatedElements = document.querySelectorAll('.skill-card, .timeline-item, .experience-card, .contact-item, .social-card');
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll'); // Prépare l'élément pour l'animation
        observer.observe(el); // Commence à l'observer
    });
    
    // Animation d'écriture pour le titre principal (effet machine à écrire)
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-text h1');
        if (heroTitle && isLoaded) {
            const originalText = heroTitle.textContent;
            typeWriter(heroTitle, originalText, 80); // Démarre l'effet de frappe
        }
    }, 2000); // Délai de 2 secondes après le chargement
}

/**
 * Effet machine à écrire pour animer le texte
 * @param {HTMLElement} element - Élément DOM à animer
 * @param {string} text - Texte à afficher
 * @param {number} speed - Vitesse d'écriture en millisecondes
 */
function typeWriter(element, text, speed = 100) {
    let i = 0; // Index du caractère actuel
    element.innerHTML = ''; // Vide l'élément
    
    // Fonction récursive pour écrire caractère par caractère
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i); // Ajoute le caractère suivant
            i++;
            setTimeout(typing, speed); // Rappelle la fonction avec délai
        }
    }
    typing(); // Démarre l'animation
}

// =================================================================
// ÉVÉNEMENTS ET INTERACTIONS UTILISATEUR
// =================================================================

/**
 * Initialise tous les événements et interactions
 */
function initializeEventListeners() {
    // Gestion du scroll pour la navbar
    window.addEventListener('scroll', handleScroll);
    
    // Bouton retour en haut - apparition/disparition selon le scroll
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible'); // Montre le bouton après 300px de scroll
            } else {
                backToTopBtn.classList.remove('visible'); // Cache le bouton en haut de page
            }
        });
    }
    
    // Indicateur de scroll dans la section hero
    const scrollIndicator = document.querySelector('.scroll-arrow');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            // Scroll fluide vers la section à propos
            document.getElementById('about').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Fonctionnalité de recherche dans les compétences
    const searchInput = document.getElementById('skillSearch');
    if (searchInput) {
        searchInput.addEventListener('input', handleSkillSearch); // Déclenche la recherche à chaque frappe
    }
    
    // Navigation fluide pour tous les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Empêche le comportement par défaut
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth', // Défilement fluide
                    block: 'start' // Aligne en haut de la section
                });
            }
        });
    });
    
    // Raccourcis clavier pour une navigation rapide
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Effets de survol améliorés pour les cartes sociales
    initializeSocialHoverEffects();
}

/**
 * Gère les changements de la navbar lors du scroll
 */
function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        // Ajoute la classe 'scrolled' après 100px de défilement pour réduire la hauteur
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
}

/**
 * Gère la recherche en temps réel dans les compétences
 * @param {Event} e - Événement de saisie
 */
function handleSkillSearch(e) {
    const searchTerm = e.target.value.toLowerCase(); // Terme de recherche en minuscules
    const skillCards = document.querySelectorAll('.skill-card'); // Toutes les cartes de compétences
    
    // Filtrer les cartes selon le terme de recherche
    skillCards.forEach(card => {
        const text = card.textContent.toLowerCase(); // Texte de la carte en minuscules
        const isVisible = text.includes(searchTerm); // Vérifie si le terme est présent
        card.style.display = isVisible ? 'block' : 'none'; // Montre ou cache la carte
        
        // Animation d'apparition pour les cartes visibles
        if (isVisible) {
            card.style.animation = 'fadeInUp 0.3s ease';
        }
    });
    
    // Gestion de l'affichage "aucun résultat"
    const visibleCards = document.querySelectorAll('.skill-card[style="display: block"], .skill-card:not([style*="display: none"])');
    const noResults = document.getElementById('no-results');
    
    if (visibleCards.length === 0 && searchTerm) {
        // Aucun résultat trouvé - affiche un message
        if (!noResults) {
            const message = document.createElement('div');
            message.id = 'no-results';
            message.className = 'no-results';
            // Message selon la langue courante
            message.textContent = currentLang === 'ar' ? 'لا توجد نتائج' : 
                                  currentLang === 'en' ? 'No results found' : 
                                  'Aucun résultat trouvé';
            document.querySelector('.skills-grid').appendChild(message);
        }
    } else if (noResults) {
        // Supprime le message s'il y a des résultats
        noResults.remove();
    }
}

/**
 * Gère les raccourcis clavier pour une utilisation rapide
 * @param {KeyboardEvent} e - Événement clavier
 */
function handleKeyboardShortcuts(e) {
    // Vérifier si Ctrl (ou Cmd sur Mac) est pressé
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault(); // Empêche l'action par défaut du navigateur
                changeLanguage('ar'); // Change vers l'arabe
                break;
            case '2':
                e.preventDefault();
                changeLanguage('en'); // Change vers l'anglais
                break;
            case '3':
                e.preventDefault();
                changeLanguage('fr'); // Change vers le français
                break;
            case 'd':
            case 'D':
                e.preventDefault();
                toggleTheme(); // Bascule le thème
                break;
        }
    }
}

/**
 * Initialise les effets de survol pour les cartes de réseaux sociaux
 */
function initializeSocialHoverEffects() {
    document.querySelectorAll('.social-card').forEach(card => {
        // Effet d'entrée de survol
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)'; // Déplacement et agrandissement
        });
        
        // Effet de sortie de survol
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-3px) scale(1)'; // Retour à l'état normal
        });
    });
}

// =================================================================
// FONCTIONNALITÉS SPÉCIFIQUES DU PORTFOLIO
// =================================================================

/**
 * Bascule l'affichage des détails du master
 * Fonction appelée par le bouton "Afficher/Masquer le cursus"
 */
function toggleMasterDetails() {
    const details = document.getElementById('masterDetails'); // Container des détails
    const btn = document.querySelector('.details-btn'); // Bouton de basculement
    
    if (!details || !btn) return; // Sortie si les éléments n'existent pas
    
    if (details.classList.contains('show')) {
        // Masquer les détails
        details.classList.remove('show');
        btn.textContent = translations[currentLang]['show-details'] || 'Show Details';
    } else {
        // Afficher les détails
        details.classList.add('show');
        btn.textContent = translations[currentLang]['hide-details'] || 'Hide Details';
        
        // Animation des barres de progression avec délai
        setTimeout(() => {
            const progressBars = details.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                const width = bar.style.width; // Largeur cible
                bar.style.width = '0%'; // Remet à zéro
                setTimeout(() => {
                    bar.style.width = width; // Anime vers la largeur cible
                }, 100);
            });
        }, 300); // Délai pour laisser le temps au container de s'afficher
    }
}

/**
 * Initialise l'animation des niveaux de compétences
 */
function initializeSkillLevels() {
    // Observateur pour déclencher l'animation quand les compétences deviennent visibles
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Anime les barres de niveau dans la carte de compétence
                const skillLevels = entry.target.querySelectorAll('.skill-level');
                skillLevels.forEach(level => {
                    const targetLevel = level.getAttribute('data-level'); // Niveau cible (pourcentage)
                    if (targetLevel) {
                        setTimeout(() => {
                            level.style.width = targetLevel + '%'; // Anime la largeur
                        }, 500); // Délai pour un effet échelonné
                    }
                });
                observer.unobserve(entry.target); // Arrête d'observer une fois animé
            }
        });
    });
    
    // Observer toutes les cartes de compétences
    document.querySelectorAll('.skill-card').forEach(card => {
        observer.observe(card);
    });
}

/**
 * Initialise l'animation des compteurs statistiques
 */
function initializeCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Anime tous les compteurs dans la grille des statistiques
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target')); // Valeur cible
                    animateCounter(counter, 0, target, 2000); // Anime de 0 à la cible en 2 secondes
                });
                observer.unobserve(entry.target); // Une seule animation
            }
        });
    });
    
    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) {
        observer.observe(statsGrid); // Observer la grille des statistiques
    }
}

/**
 * Anime un compteur numérique de start à end
 * @param {HTMLElement} element - Élément à animer
 * @param {number} start - Valeur de départ
 * @param {number} end - Valeur finale
 * @param {number} duration - Durée en millisecondes
 */
function animateCounter(element, start, end, duration) {
    const increment = (end - start) / (duration / 16); // Incrément par frame (60 FPS)
    let current = start; // Valeur courante
    
    const timer = setInterval(() => {
        current += increment; // Augmente la valeur
        element.textContent = Math.floor(current); // Affiche la partie entière
        
        if (current >= end) {
            element.textContent = end; // Assure la valeur finale exacte
            clearInterval(timer); // Arrête l'animation
        }
    }, 16); // 16ms ≈ 60 FPS
}

/**
 * Scroll fluide vers le haut de la page
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Défilement fluide
    });
}

/**
 * Cache l'écran de chargement avec animation
 */
function hideLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden'); // Déclenche l'animation de disparition
        setTimeout(() => {
            loadingScreen.style.display = 'none'; // Cache complètement après l'animation
        }, 500); // Délai correspondant à la durée de transition CSS
    }
}

/**
 * Simule le téléchargement du CV
 * Dans un vrai projet, cette fonction ouvrirait le fichier PDF
 */
function downloadCV() {
    // Messages selon la langue courante
    const languages = {
        ar: 'تم بدء تحميل السيرة الذاتية...',
        en: 'CV download started...',
        fr: 'Téléchargement du CV commencé...'
    };
    
    alert(languages[currentLang]); // Alerte de confirmation
    
    // Dans un vrai projet, vous ajouteriez ici la logique de téléchargement
    // window.open('path/to/cv.pdf', '_blank');
}

// =================================================================
// FONCTIONS UTILITAIRES POUR L'OPTIMISATION
// =================================================================

/**
 * Fonction debounce pour limiter les appels répétés
 * @param {Function} func - Fonction à débouncer
 * @param {number} wait - Délai d'attente en millisecondes
 * @returns {Function} Fonction debouncée
 */
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

/**
 * Fonction throttle pour limiter la fréquence d'exécution
 * @param {Function} func - Fonction à throttler
 * @param {number} limit - Limite en millisecondes
 * @returns {Function} Fonction throttlée
 */
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
// GESTION D'ERREURS ET LOGGING
// =================================================================

/**
 * Gestionnaire global d'erreurs
 */
window.addEventListener('error', function(e) {
    console.error('Une erreur s\'est produite:', e.error);
    // Dans un environnement de production, vous pourriez envoyer les erreurs à un service de monitoring
    // comme Sentry, LogRocket, etc.
});

/**
 * Gestionnaire des promesses rejetées
 */
window.addEventListener('unhandledrejection', function(e) {
    console.error('Promesse rejetée non gérée:', e.reason);
    e.preventDefault(); // Empêche l'affichage de l'erreur dans la console
});

// =================================================================
// OPTIMISATIONS DE PERFORMANCE
// =================================================================

// Optimisation du gestionnaire de scroll avec throttling
const optimizedScroll = throttle(handleScroll, 16); // 60 FPS maximum
window.removeEventListener('scroll', handleScroll);
window.addEventListener('scroll', optimizedScroll);

/**
 * Précharge les images importantes pour améliorer les performances
 */
function preloadImages() {
    const imageUrls = [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=700&fit=crop',
        'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=80&h=80&fit=crop',
        'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=100&h=100&fit=crop'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url; // Déclenche le téléchargement
    });
}

/**
 * Initialise le lazy loading pour les images
 */
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src; // Charge l'image
                        img.classList.remove('lazy'); // Supprime la classe lazy
                        observer.unobserve(img); // Arrête d'observer cette image
                    }
                }
            });
        });
        
        // Observer toutes les images avec l'attribut data-src
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback pour les navigateurs ne supportant pas IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Initialiser les optimisations au chargement
document.addEventListener('DOMContentLoaded', function() {
    preloadImages(); // Précharge les images importantes
    initializeLazyLoading(); // Configure le lazy loading
});

// =================================================================
// SERVICE WORKER POUR PWA (OPTIONNEL)
// =================================================================

/**
 * Enregistre le Service Worker si disponible
 * Permet de créer une Progressive Web App (PWA)
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker enregistré avec succès:', registration);
            })
            .catch(registrationError => {
                console.log('Échec de l\'enregistrement du Service Worker:', registrationError);
            });
    });
}

// =================================================================
// DÉTECTION DE LA TAILLE D'ÉCRAN ET GESTION RESPONSIVE
// =================================================================

/**
 * Gère les changements de taille d'écran
 */
function handleResize() {
    // Réinitialiser les particules selon la nouvelle taille d'écran
    if (window.innerWidth <= 768) {
        // Mobile : masquer complètement les particules
        const particlesContainer = document.getElementById('particles-js');
        if (particlesContainer) {
            particlesContainer.style.display = 'none';
        }
    } else if (window.innerWidth > 768 && typeof particlesJS !== 'undefined') {
        // Desktop/Tablet : réactiver les particules
        const particlesContainer = document.getElementById('particles-js');
        if (particlesContainer) {
            particlesContainer.style.display = 'block';
            // Réinitialiser les particules si elles n'existent pas
            if (!window.pJSDom || !window.pJSDom[0]) {
                initializeParticles();
            }
        }
    }
}

// Écouter les changements de taille avec debounce pour éviter les appels excessifs
window.addEventListener('resize', debounce(handleResize, 250));

// =================================================================
// FONCTIONS ACCESSIBLES GLOBALEMENT
// Ces fonctions doivent être disponibles depuis le HTML (onclick, etc.)
// =================================================================

window.toggleMasterDetails = toggleMasterDetails; // Basculer les détails du master
window.downloadCV = downloadCV; // Télécharger le CV
window.scrollToTop = scrollToTop; // Retour en haut de page
window.changeLanguage = changeLanguage; // Changer la langue (pour le sélecteur)
window.toggleTheme = toggleTheme; // Changer le thème (pour le bouton)

// =================================================================
// AMÉLIORATIONS D'ACCESSIBILITÉ
// =================================================================

/**
 * Améliore l'accessibilité clavier
 */
function enhanceKeyboardAccessibility() {
    // Gérer la navigation au clavier dans les cartes
    document.querySelectorAll('.skill-card, .experience-card, .contact-item').forEach(card => {
        // Rendre les cartes focusables
        if (!card.hasAttribute('tabindex')) {
            card.setAttribute('tabindex', '0');
        }
        
        // Ajouter un effet visuel au focus
        card.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-color)';
            this.style.outlineOffset = '2px';
        });
        
        card.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
}

// Initialiser les améliorations d'accessibilité
document.addEventListener('DOMContentLoaded', enhanceKeyboardAccessibility);

/**
 * Détecte si l'utilisateur préfère les animations réduites
 * et ajuste le comportement en conséquence
 */
function respectMotionPreferences() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Désactiver les particules pour les utilisateurs sensibles au mouvement
        const particlesContainer = document.getElementById('particles-js');
        if (particlesContainer) {
            particlesContainer.style.display = 'none';
        }
        
        // Réduire la durée des animations CSS
        document.documentElement.style.setProperty('--transition', 'all 0.01s ease');
        
        // Désactiver l'animation de typing
        const heroTitle = document.querySelector('.hero-text h1');
        if (heroTitle) {
            heroTitle.style.animation = 'none';
        }
    }
}

// Appliquer les préférences de mouvement au chargement
document.addEventListener('DOMContentLoaded', respectMotionPreferences);

// =================================================================
// GESTION DE L'ÉTAT HORS LIGNE (OPTIONAL)
// =================================================================

/**
 * Détecte les changements d'état de connexion
 */
function handleConnectionChange() {
    if (!navigator.onLine) {
        // Hors ligne : afficher un message discret
        const offlineMessage = document.createElement('div');
        offlineMessage.id = 'offline-message';
        offlineMessage.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: var(--warning-color);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 10001;
            font-size: 14px;
            box-shadow: var(--shadow-lg);
        `;
        
        const message = {
            ar: 'وضع عدم الاتصال',
            en: 'Offline mode',
            fr: 'Mode hors ligne'
        };
        
        offlineMessage.textContent = message[currentLang] || message['en'];
        document.body.appendChild(offlineMessage);
        
        setTimeout(() => offlineMessage.remove(), 5000); // Supprime après 5 secondes
    }
}

// Écouter les changements de connexion
window.addEventListener('online', handleConnectionChange);
window.addEventListener('offline', handleConnectionChange);

// =================================================================
// ANALYTICS ET TRACKING (OPTIONNEL ET RESPECTUEUX DE LA VIE PRIVÉE)
// =================================================================

/**
 * Fonction simple de tracking des interactions importantes
 * Respecte la vie privée en ne collectant que des données anonymes
 */
function trackInteraction(action, category = 'user', label = '') {
    // Vérifier si l'utilisateur a consenti au tracking
    if (localStorage.getItem('analytics-consent') === 'true') {
        // Ici vous pourriez intégrer Google Analytics, Plausible, etc.
        console.log(`Track: ${category} - ${action} - ${label}`);
        
        // Exemple avec une API analytics respectueuse de la vie privée
        // fetch('/api/track', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ action, category, label, timestamp: Date.now() })
        // });
    }
}

/**
 * Demande le consentement pour les analytics (optionnel)
 */
function requestAnalyticsConsent() {
    if (!localStorage.getItem('analytics-consent')) {
        // Créer un banner de consentement simple
        const banner = document.createElement('div');
        banner.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            right: 20px;
            background: var(--bg-color);
            border: 1px solid var(--border-color);
            padding: 20px;
            border-radius: 10px;
            z-index: 10000;
            box-shadow: var(--shadow-xl);
            text-align: center;
        `;
        
        const messages = {
            ar: {
                text: 'نستخدم تحليلات مجهولة لتحسين الموقع. هل تسمح بذلك؟',
                accept: 'موافق',
                decline: 'رفض'
            },
            en: {
                text: 'We use anonymous analytics to improve the site. Allow?',
                accept: 'Accept',
                decline: 'Decline'
            },
            fr: {
                text: 'Nous utilisons des analytics anonymes pour améliorer le site. Accepter?',
                accept: 'Accepter',
                decline: 'Refuser'
            }
        };
        
        const msg = messages[currentLang] || messages['en'];
        
        banner.innerHTML = `
            <p style="margin-bottom: 15px; color: var(--text-color);">${msg.text}</p>
            <button id="accept-analytics" style="margin-right: 10px; padding: 8px 16px; background: var(--primary-color); color: white; border: none; border-radius: 5px; cursor: pointer;">${msg.accept}</button>
            <button id="decline-analytics" style="padding: 8px 16px; background: transparent; color: var(--text-color); border: 1px solid var(--border-color); border-radius: 5px; cursor: pointer;">${msg.decline}</button>
        `;
        
        document.body.appendChild(banner);
        
        // Gestionnaires des boutons
        document.getElementById('accept-analytics').onclick = () => {
            localStorage.setItem('analytics-consent', 'true');
            banner.remove();
            trackInteraction('consent_given', 'privacy');
        };
        
        document.getElementById('decline-analytics').onclick = () => {
            localStorage.setItem('analytics-consent', 'false');
            banner.remove();
        };
    }
}

// Demander le consentement après un délai
setTimeout(requestAnalyticsConsent, 3000);

// =================================================================
// FONCTIONS DE DÉVELOPPEMENT ET DEBUG
// =================================================================

/**
 * Mode debug pour le développement
 * Affiche des informations utiles dans la console
 */
function initDebugMode() {
    if (window.location.hostname === 'localhost' || window.location.search.includes('debug=true')) {
        console.log('🚀 Mode debug activé');
        console.log('📊 État actuel:', {
            langue: currentLang,
            thème: currentTheme,
            chargé: isLoaded,
            taille_écran: `${window.innerWidth}x${window.innerHeight}`,
            particules_actives: window.pJSDom && window.pJSDom.length > 0
        });
        
        // Ajouter des raccourcis de développement
        window.debug = {
            changeLanguage,
            toggleTheme,
            showParticles: () => {
                const container = document.getElementById('particles-js');
                if (container) container.style.display = 'block';
            },
            hideParticles: () => {
                const container = document.getElementById('particles-js');
                if (container) container.style.display = 'none';
            },
            clearStorage: () => {
                localStorage.clear();
                sessionStorage.clear();
                console.log('🧹 Storage nettoyé');
            }
        };
        
        console.log('🛠️ Fonctions debug disponibles dans window.debug');
    }
}

// Initialiser le mode debug
document.addEventListener('DOMContentLoaded', initDebugMode);

// =================================================================
// GESTION DES ERREURS SPÉCIFIQUES AU PORTFOLIO
// =================================================================

/**
 * Gère les erreurs spécifiques aux particules
 */
function handleParticleErrors() {
    if (typeof particlesJS === 'undefined') {
        console.warn('⚠️ ParticlesJS non chargé - fonctionnalité désactivée');
        // Masquer le container des particules
        const container = document.getElementById('particles-js');
        if (container) {
            container.style.display = 'none';
        }
    }
}

/**
 * Vérifie que tous les éléments critiques sont présents
 */
function validateDOM() {
    const criticalElements = [
        '.navbar',
        '.hero',
        '#about',
        '.skills-grid',
        '.footer'
    ];
    
    const missingElements = criticalElements.filter(selector => !document.querySelector(selector));
    
    if (missingElements.length > 0) {
        console.error('❌ Éléments DOM manquants:', missingElements);
        return false;
    }
    
    return true;
}

// Validation au chargement complet
window.addEventListener('load', () => {
    if (!validateDOM()) {
        console.error('🔧 Problèmes de structure DOM détectés');
    }
    handleParticleErrors();
});

// =================================================================
// AMÉLIORATIONS DE L'EXPÉRIENCE UTILISATEUR
// =================================================================

/**
 * Sauvegarde automatique de la position de scroll
 * pour restaurer la position lors du rechargement
 */
function saveScrollPosition() {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
}

/**
 * Restaure la position de scroll sauvegardée
 */
function restoreScrollPosition() {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
        setTimeout(() => {
            window.scrollTo(0, parseInt(savedPosition));
        }, 100); // Petit délai pour laisser le DOM se charger
    }
}

// Sauvegarder la position avant de quitter
window.addEventListener('beforeunload', saveScrollPosition);

// Restaurer la position au chargement
window.addEventListener('load', restoreScrollPosition);

/**
 * Feedback visuel pour les interactions tactiles
 */
function addTouchFeedback() {
    if ('ontouchstart' in window) {
        // Ajouter une classe CSS pour les appareils tactiles
        document.body.classList.add('touch-device');
        
        // Améliorer le feedback tactile pour les boutons
        document.querySelectorAll('button, .btn, .social-card, .contact-item').forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            }, { passive: true });
            
            element.addEventListener('touchend', function() {
                this.style.transform = '';
            }, { passive: true });
        });
    }
}

// Initialiser le feedback tactile
document.addEventListener('DOMContentLoaded', addTouchFeedback);

// =================================================================
// OPTIMISATIONS FINALES ET NETTOYAGE
// =================================================================

/**
 * Nettoie les ressources inutiles et optimise les performances
 */
function cleanup() {
    // Nettoyer les timers et intervals orphelins
    let highestTimeoutId = setTimeout(function(){}, 1);
    for (let i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
    }
    
    // Supprimer les event listeners temporaires
    window.removeEventListener('load', restoreScrollPosition);
    window.removeEventListener('beforeunload', saveScrollPosition);
    
    console.log('🧹 Nettoyage des ressources terminé');
}

// Nettoyer avant de quitter la page
window.addEventListener('beforeunload', cleanup);

/**
 * Optimise les images en lazy loading avancé
 */
function advancedImageOptimization() {
    // Détecter la qualité de connexion
    if ('connection' in navigator) {
        const connection = navigator.connection;
        const slowConnection = connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
        
        if (slowConnection) {
            // Réduire la qualité des images pour les connexions lentes
            document.querySelectorAll('img[data-src]').forEach(img => {
                const src = img.dataset.src;
                if (src.includes('unsplash.com')) {
                    // Réduire la qualité des images Unsplash
                    img.dataset.src = src.replace(/w=\d+&h=\d+/, 'w=400&h=400&q=60');
                }
            });
        }
    }
}

// Appliquer les optimisations d'images
document.addEventListener('DOMContentLoaded', advancedImageOptimization);

// =================================================================
// MESSAGES DE CONSOLE POUR LE DÉVELOPPEUR
// =================================================================

console.log(`
🌟 Portfolio Hamza Alioua - Version 2.0
👨‍💻 Développé avec passion
🚀 Fonctionnalités activées:
   ✅ Multi-langues (AR/EN/FR)
   ✅ Thèmes clair/sombre
   ✅ Animations fluides
   ✅ Design responsive
   ✅ Particules d'arrière-plan (desktop)
   ✅ Accessibilité améliorée
   ✅ Performance optimisée
   
🔧 Raccourcis clavier:
   Ctrl+1: Arabe
   Ctrl+2: Anglais  
   Ctrl+3: Français
   Ctrl+D: Basculer thème
   
📱 Optimisations mobile:
   ✅ Particules désactivées sur mobile
   ✅ Interface tactile optimisée
   ✅ Navigation simplifiée
   
🌍 Support RTL complet pour l'arabe
`);

// Message spécial pour les développeurs curieux
if (Math.random() < 0.1) { // 10% de chance
    console.log(`
🎯 Message spécial pour le développeur qui regarde le code:
   Merci de prendre le temps d'examiner ce travail !
   Ce portfolio a été développé avec attention aux détails,
   à la performance et à l'accessibilité.
   
   N'hésite pas à me contacter si tu as des questions ! 😊
`);
}

// =================================================================
// FIN DU FICHIER - TOUTES LES FONCTIONNALITÉS SONT PRÊTES
// =================================================================