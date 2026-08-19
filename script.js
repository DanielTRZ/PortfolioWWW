

// 1.     Baza tłumaczeń dla wszystkich podstron portfolio (Daniel Trzeciński)
const translations = {
    pl: {
        // --- NAWIGACJA & ELEMENTY WSPÓLNE ---
        navAbout: "Bio / O mnie",
        navSkills: "Umiejętności",
        navExperience: "Doświadczenie",
        navEducation: "Edukacja & Kursy",
        navProjects: "Projekty",
        navHackathons: "Hackatony",
        navPhotos: "Galeria / Zdjęcia",
        navContact: "Kontakt & Referencje",
        sidebarSub: "strona domowa",
        sidebarDesc: "Absolwent Harvard University CS50X, Dyplomowany Specjalista Informatyk, Programista aplikacji internetowych i Mobilnych, Game designer, Technik informatyk.",
        sidebarInstitution: "Europejska Uczelnia Nauk Medycznych i Społecznych, Teb edukacja, Harvard Cs50x",
        footerText: "&copy; 2026 Daniel Trzeciński. Wszystkie prawa zastrzeżone.",
         // ---Podstrona Hackatons Galeria Kontaky --- //
         hackHeading: "Hackatony",
        hackTitle: "Laureat: Hackathon Hack4Girls Inspired by 'Sexify'",
        hackDesc: "Wygrana zespołu podczas prestiżowego hackathonu organizowanego przez Geek Girls Carrots oraz platformę Netflix. Projekt polegał na opracowaniu i pełnej implementacji innowacyjnego rozwiązania technologicznego dedykowanego dla branży IT pod presją czasu.",
        photosHeading: "Galeria & CSS Art",
        photosDesc: ".",
        contactHeading: "Kontakt ",
        contactPhone: "Telefon:",
        refTitle: "Referencje formalne",
        // --- PODSTRONA: BIOGRAFIA / O MNIE (index.html) ---
        bioHeading: "O mnie / Profil zawodowy",
        bioText: "Od kilku lat dynamicznie rozwijam swoją ścieżkę w branży technologicznej, ewoluując od pasjonata hardware'u i administratora systemów, aż po zaawansowane programowanie oraz integrację systemów sztucznej inteligencji (AI). Łączę analityczne myślenie inżyniera sieciowego z kreatywnością developera, wykorzystując potencjał sztucznej inteligencji do maksymalizacji produktywności i automatyzacji procesów deweloperskich.",
        bioSpecTitle: "Kluczowe kompetencje i obszary specjalizacji:",
        bioSpecWeb: "<strong>Programowanie & Web Dev:</strong> Tworzenie responsywnych, nowoczesnych aplikacji i stron WWW (Front-end/Full-Stack), zaawansowana znajomość mechanizmów CSS oraz struktur baz danych SQL. Silne fundamenty algorytmiczne poparte elitarnym certyfikatem Harvard University CS50x.",
        bioSpecAi: "<strong>Nowe Technologie & AI:</strong> Praktyczna wiedza z zakresu inżynierii promptów, wdrażania agentów autonomicznych oraz automatyzacji procesów biznesowych (potwierdzona certyfikatami PFR i AIDEAS). Skuteczna implementacja modeli LLM (GPT-4, Gemini) w codziennej inżynierii oprogramowania.",
        bioSpecGame: "<strong>Interactive Media & Game Dev:</strong> Projektowanie poziomów (Level Design) oraz środowisk (Environment Art) z wykorzystaniem silnika Unreal Engine.",
        bioSpecNet: "<strong>Administracja & Sieci:</strong> Zarządzanie i konfiguracja systemów Windows oraz Linux, optymalizacja wydajności środowisk operacyjnych, a także projektowanie, montaż i zabezpieczanie infrastruktury sieciowej LAN/Wi-Fi.",
        bioSpecHard: "<strong>Hardware & Mobile:</strong> Kompleksowa diagnostyka, serwis i modernizacja komputerów PC/laptopów oraz pełna konfiguracja i zabezpieczanie urządzeń mobilnych Android/iOS.",
        bioSummary: "Nieustannie podnoszę poprzeczkę i rozwijam swoje kwalifikacje – obecnie dążę do uzyskania tytułu inżyniera informatyki, skupiając się na inteligentnej automatyzacji (AI Workflow) i dostarczaniu rozwiązań IT, które przynoszą realną wartość dla biznesu. Otwarty na ambitne projekty i wyzwania w obszarze software developmentu oraz technologii AI.",

        // --- PODSTRONA: DOŚWIADCZENIE (experience.html) ---
        expPageTitle: "Doświadczenie | Daniel Trzeciński",
        expHeading: "Doświadczenie zawodowe",
        
        exp1Date: "Styczeń 2012 – Obecnie",
        exp1Title: "IT Support Specialist & Network Technician (Freelance) — DanCom",
        exp1Sub: "Samozatrudnienie | Zabrze, Woj. Śląskie (Praca hybrydowa)",
        exp1Desc: "Kompleksowa diagnostyka i naprawa sprzętu komputerowego dla klientów indywidualnych oraz biznesowych. Projektowanie, tworzenie i wdrażanie nowoczesnych, responsywnych stron internetowych oraz witryn WWW dopasowanych do indywidualnych potrzeb biznesowych. Instalacja, aktualizacja i zaawansowana konfiguracja systemów operacyjnych (Windows, Linux) oraz oprogramowania ukierunkowanego na wydajność. Usuwanie wirusów, złośliwego oprogramowania, audyt bezpieczeństwa oraz wdrażanie rozwiązań chroniących stacje robocze przed zagrożeniami sieciowymi. Doradztwo techniczne w zakresie optymalizacji sprzętowej, modernizacji podzespołów oraz konfiguracji fundamentów informatycznych.",
        
        exp2Date: "Lipiec 2021 – Obecnie",
        exp2Title: "Warehouse Operator (Wsparcie systemów logistycznych) — Johnson Matthey",
        exp2Desc: "Wsparcie użytkowników w zakresie konfiguracji komputerów, urządzeń mobilnych, instalacji aplikacji oraz zarządzania dostępami i hasłami. Bieżące wsparcie techniczne (1st line support) przed eskalacją do struktur Help Desk. Kontrola poprawności danych, analiza rozbieżności, tworzenie zaawansowanych raportów i zestawień w arkuszu Excel. Obsługa terminali mobilnych oraz podstawowa diagnostyka sprzętu logistycznego.",
        
        exp3Date: "Luty 2026 – Kwiecień 2026",
        exp3Title: "Praktykant - Specjalista ds. IT i Programowania — Centrum Edukacji i Szkoleń",
        exp3Desc: "Realizacja programu praktyk zawodowych w trybie zdalnym, skupiona na technicznych aspektach obsługi systemów informatycznych. Tworzenie i testowanie funkcjonalności aplikacji webowych, dbanie o czystość i jakość kodu. Zarządzanie bazami danych, zapewnianie spójności struktur oraz optymalizacja operacji bazodanowych. Zdalne monitorowanie infrastruktury sieciowej oraz diagnozowanie problemów sprzętowych.",
        
        exp4Date: "Styczeń 2026 – Kwiecień 2026",
        exp4Title: "Dyplomowany Specjalista Informatyk (Praktyka) — DREWTRANS",
        exp4Desc: "Tworzenie i wdrażanie stron internetowych. Konfiguracja, optymalizacja oraz konserwacja laptopów i stacji roboczych. Diagnostyka i rozwiązywanie problemów sprzętowych oraz systemowych. Instalacja i konfiguracja drukarek oraz urządzeń peryferyjnych (w tym wymiana materiałów eksploatacyjnych). Konfiguracja i zabezpieczanie sieci Wi-Fi oraz obsługa urządzeń mobilnych.",
        
        exp5Date: "Czerwiec 2023 – Styczeń 2025",
        exp5Title: "Lead Game Designer / Level Designer — Poisoned Laudanum Studio (Pro Bono)",
        exp5Desc: "Projektowanie i testowanie mechanik gry oraz systemów rozgrywki (Game Design, Gameplay Systems). Tworzenie i projektowanie map oraz poziomów (Level Design, Player Pathing), budowa blockoutów (Level Prototyping). Aranżacja środowisk z użyciem assetów (Environment Design / Level Dressing) w Unreal Engine. Podejmowanie decyzji dotyczących kierunku rozwoju gry (Creative Direction). Zarządzanie kilkunastoosobowym zespołem – planowanie zadań, organizacja spotkań, koordynacja pracy.",
  
        exp1Tags: "Web Development · iOS · Windows · Linux · Bezpieczeństwo sieciowe · Wsparcie techniczne (Helpdesk) · Doradztwo techniczne IT · Optymalizacja sprzętowa · Konfiguracja infrastruktury IT · Diagnostyka sprzętowa · Naprawa PC i laptopów · Modernizacja podzespołów",
        
        // Tagi pojedyncze (jeśli używasz ich też na podstronie skills)//
        tagWebDev: "Web Development",
        tagIos: "iOS",
        tagWindows: "Windows",
        tagLinux: "Linux",
        tagNetSec: "Bezpieczeństwo sieciowe",
        tagSupport: "Wsparcie techniczne (Helpdesk)",
        tagConsulting: "Doradztwo techniczne IT",
        tagHardOpt: "Optymalizacja sprzętowa",
        tagInfraConfig: "Konfiguracja infrastruktury IT",
        tagDiag: "Diagnostyka sprzętowa",
        tagRepair: "Naprawa PC i laptopów",
        tagModernization: "Modernizacja podzespołów",
        
        // --- PODSTRONA: UMIEJĘTNOŚCI (skills.html) ---
        skillsHeading: "Umiejętności i Kompetencje",
        skillsGroup1Title: "Sztuczna Inteligencja & Narzędzia AI",
        skillsGroup1Desc: "Zaawansowane wykorzystanie modeli generatywnych oraz inżynieria promptów w codziennej pracy programistycznej i analitycznej:",
        skillsAiLi1: "<strong>Systemy konwersacyjne & LLM:</strong> ChatGPT, Gemini, LeChat.",
        skillsAiLi2: "<strong>Autonomiczni agenci AI:</strong> Praca z asynchronicznymi agentami (Jules).",
        skillsAiLi3: "<strong>Automatyzacja & Analiza:</strong> Automatyzacja powtarzalnych zadań biznesowych oraz zaawansowana analiza danych z wykorzystaniem AI.",
        skillsGroupSysTitle: "Administracja, Hardware & IoT",
        skillsSysDesc: "Kompleksowe zarządzanie środowiskiem systemowym oraz infrastrukturą sprzętową:",
        skillsSysLi1: "<strong>Administracja OS:</strong> Zarządzanie, optymalizacja i konfiguracja systemów operacyjnych Windows oraz Linux.",
        skillsSysLi2: "<strong>Serwis i Konserwacja:</strong> Diagnozowanie usterek, konserwacja i modernizacja komputerów klasy PC.",
        skillsSysLi3: "<strong>Systemy IoT (Internet of Things):</strong> Projektowanie, tworzenie oraz pełna konfiguracja struktur IoT, instalacja i integracja urządzeń (inteligentne czujniki, kontrolery wykonawcze).",
        skillsGroup3Title: "Inżynieria Sieciowa & Bezpieczeństwo",
        skillsGroup3Desc: "Projektowanie, implementacja fizyczna oraz logiczna infrastruktury sieciowej LAN/WLAN:",
        skillsNetLi1: "<strong>Konfiguracja sieci:</strong> Zarządzanie sieciami przewodowymi i bezprzewodowymi, konfiguracja punktów dostępowych (Access Point) oraz routerów Wi-Fi.",
        skillsNetLi2: "<strong>Instalacja fizyczna (Strukturalna):</strong> Budowa infrastruktury kablowej, profesjonalne zarabianie złączy RJ-45.",
        skillsNetLi3: "<strong>Logika sieci & Subnetting:</strong> Zaawansowana adresacja IP (IPv4/IPv6), planowanie podsieci (subnetting), wdrażanie adresacji statycznej oraz dynamicznej (konfiguracja DHCP, zapór sieciowych/Firewall oraz mechanizmów NAT).",
        skillsNetLi4: "<strong>Narzędzia diagnostyczne i audyt:</strong> Wireshark, nmap, netstat, ping, tracert, ipconfig / ifconfig. Zabezpieczanie systemów sieciowych oraz urządzeń IoT.",
        skillsGroup2Title: "Programowanie & Technologie",
        skillsGroup2Desc: "Tworzenie kodu źródłowego, aplikacji internetowych oraz środowisk interaktywnych:",
        skillsProgLi1: "<strong>Web Development:</strong> HTML, CSS (w tym zaawansowane CSS Art), JavaScript, PHP.",
        skillsProgLi2: "<strong>Interactive & Game Dev:</strong> Projektowanie logiki i poziomów w silnikach Unreal Engine oraz Unity.",
        skillsLangTitle: "Języki",
        skillsLangLi1: "<strong>Polski:</strong> Ojczysty (Native)",
        skillsLangLi2: "<strong>Angielski:</strong> Poziom A1 (Podstawowy, wspierany narzędziowo)",

        // --- PODSTRONA: PROJEKTY (projects.html) ---
        projectsHeading: "Projekty Inżynieryjne",
        projectsDesc: "Wybrane systemy, aplikacje i rozwiązania technologiczne rozwijane autorsko oraz w zespołach deweloperskich.",
        proj1Title: "SID 4.0 — Retail & Warehouse Management System",
        proj1Text: "Autorski, zaawansowany system zarządczo-magazynowy i sprzedażowy. Integracja funkcji POS, systemów automatycznych alertów stanów magazynowych oraz natywna współpraca ze skanerami kodów kreskowych i terminalami logistycznymi. Projekt skupiony na maksymalnej wydajności i optymalizacji procesów retailowych.",
        proj2Title: "Pure CSS Art Portfolio",
        proj2Text: "Zaawansowane eksperymenty programistyczne oparte na czystym kodzie strukturalnym HTML i arkuszach CSS, bez użycia zewnętrznych grafik i skryptów JS. Tworzenie fotorealistycznych odwzorowań interfejsów, ikon oraz nowoczesnych ramek cyfrowych. Pełne portfolio prac dostępne na platformie CodePen.",
        aiWorkspaceHeading: "AI & Productivity Workspace",
        aiWorkspaceDesc: "Praktyczne wdrożenie zaawansowanych systemów sztucznej inteligencji, automatyzacji procesów i inżynierii promptów w codziennej inżynierii oprogramowania.",
        aiWorkspaceTitle: "Framework Produktywności AI i Asystentów Autonomicznych",
        aiWorkspaceText: "W codziennej pracy programistycznej wykorzystuję zintegrowany ekosystem narzędzi AI w celu maksymalnego skrócenia czasu dowożenia funkcji (Time-to-Market) przy zachowaniu najwyższych standardów bezpieczeństwa kodu.",
        aiLi1: "<strong>Prompt Engineering & Kodowanie:</strong> Efektywne i precyzyjne wykorzystanie modeli językowych (GPT-4, Gemini, LeChat) oraz asynchronicznych agentów AI (Jules) do szybkiego prototypowania architektury aplikacji, generowania struktur baz danych i optymalizacji algorytmów.",
        aiLi2: "<strong>Automatyzacja Zadań & Data Science:</strong> Projektowanie i wdrażanie skryptów automatyzujących powtarzalne, mechaniczne zadania programistyczne oraz wykorzystanie zaawansowanych algorytmów AI do strukturyzacji, czyszczenia i głębokiej analizy danych biznesowych.",
        aiLi3: "<strong>Weryfikacja, Audyt & Debugowanie:</strong> Każdy komponent wygenerowany przez modele AI przechodzi przez rygorystyczny proces manualnej weryfikacji, samodzielnego testowania (Unit Testing) oraz debugowania. Gwarantuje to brak luk bezpieczeństwa, podatności sieciowych oraz optymalną wydajność kodu produkcyjnego.",

        // --- PODSTRONA: EDUKACJA & KURSY (education.html) ---
        eduHeading: "Edukacja",
        edu1Title: "Dyplomowany Specjalista Informatyk — Europejska Uczelnia Nauk Medycznych i Społecznych",
        edu1Desc: "Informatyka (studia wyższe, short-cycle) - Uzyskany dyplom dyplomowanego specjalisty informatyka.",
        edu2Title: "CS50's Introduction to Programming with Python — Harvard University",
        edu2Desc: "Undergraduate Course – Ukończone.",
        edu3Title: "CS50: Introduction to Computer Science — Harvard University",
        edu3Desc: "Undergraduate Course – Ukończone.",
        edu4Title: "Game Design (Projektowanie i testowanie gier) — Teb Edukacja Grudziądz",
        edu4Desc: "Studium kształcenia praktycznego - Uzyskany dyplom potwierdzający kwalifikacje zawodowe.",
        edu5Title: "Programowanie aplikacji internetowych i mobilnych — Teb Edukacja Wrocław",
        edu5Desc: "Studium kształcenia praktycznego - Uzyskany dyplom potwierdzający kwalifikacje zawodowe.",
        edu6Title: "Technik Informatyk — Policealna szkoła Teb Edukacja Gliwice",
        edu6Desc: "Ukończone studium z pełnym tytułem zawodowym.",
        
        coursesHeading: "Kursy & Certyfikaty",
        coursesGroup1Title: "Sztuczna Inteligencja & Prompt Engineering",
        c1_1: "<strong>AIDEAS Level UP</strong> — Generator Pomysłów (Wydano: maj 2026)",
        c1_2: "<strong>Generator Pomysłów</strong> — AIDEAS program rozwojowy z kompetencji sztucznej inteligencji",
        c1_3: "<strong>Umiejętność Jutra: AI 2.0</strong> — Google & SGH (2025): Praktyczne zastosowania AI w pracy i projektach: generatywne modele językowe, automatyzacja, produktywność, analiza danych z użyciem narzędzi AI.",
        c1_4: "<strong>Podstawy sztucznej inteligencji</strong> — Ośrodek Przetwarzania Informacji – Państwowy Instytut Badawczy",
        c1_5: "<strong>Agent vs Asystent - Fundamenty</strong> — PFR S.A. (Wydano: maj 2026)",
        c1_6: "<strong>AI dla Liderek i Liderów Biznesu</strong> — PFR S.A. (Wydano: kwiecień 2026)",
        c1_7: "<strong>Use AI for everyday tasks</strong> — Fundacja Academic Partners (Wydano: kwiecień 2026)",
        c1_8: "<strong>AIDEAS Program Rozwoju Kompetencji AI</strong> — Generator Pomysłów (Wydano: marzec 2026)",
        c1_9: "<strong>Kurs AI w Biznesie i Codziennym Życiu</strong> — Fundacja Digital University (Wydano: styczeń 2026)",
        
        coursesGroupNetTitle: "Inżynieria Sieciowa, Administracja & OS",
        c2_1: "<strong>Wprowadzenie do sieci komputerowych</strong> — Wyższa Szkoła Handlowa we Wrocławiu",
        c2_2: "<strong>Cisco Networking Academy:</strong> Introduction to Packet Tracer",
        c2_3: "<strong>Cisco Networking Academy:</strong> NDG Linux Unhatched",
        c2_4: "<strong>Microsoft Virtual Academy:</strong> Wprowadzenie do Active Directory Domain Services",
        c2_5: "<strong>Microsoft Virtual Academy:</strong> Wprowadzenie do Active Directory",
        c2_6: "<strong>Wprowadzenie do Uniwersalnych Aplikacji Windows Store</strong> — Microsoft Virtual Academy",
        
        coursesGroupSecTitle: "Cyberbezpieczeństwo & Ochrona Danych",
        c3_1: "<strong>Techniki zabezpieczania danych w Internecie</strong> — Politechnika Białostocka",
        c3_2: "<strong>Bezpieczeństwo w cyberprzestrzeni</strong> — Warszawski Instytut Bankowości",
        c3_3: "<strong>Cisco Networking Academy:</strong> Wprowadzenie do Cyberbezpieczeństwa",
        c3_4: "<strong>Obsługa i bezpieczeństwo urządzeń mobilnych</strong> — Wyższa Szkoła Gospodarki w Bydgoszczy",
        
        coursesGroup2Title: "Web Development, Software Engineering & QA",
        c4_1: "<strong>Projektowanie witryn internetowych</strong> — Akademia Ekonomiczno-Humanistyczna w Warszawie",
        c4_2: "<strong>Projektowanie Witryn Internetowych</strong> — Uniwersytet VIZJA (Wydano: marzec 2026)",
        c4_3: "<strong>Wprowadzenie do testowania oprogramowania</strong> — Zachodniopomorska Szkoła Biznesu w Szczecinie",
        c4_4: "<strong>Język SQL – wstęp do relacyjnych baz danych</strong> — Comarch (Wydano: maj 2020)",
        c4_5: "<strong>Certyfikat TEB Edukacja:</strong> Praktyczna znajomość języków programowania: HTML, XHTML, CSS, JavaScript.",
        
        coursesGroupGDevTitle: "Game Dev, IoT & Systemy Zarządzania",
        c5_1: "<strong>Certyfikat TEB Edukacja:</strong> Podstawy obsługi silnika Unreal Engine.",
        c5_2: "<strong>Certyfikat TEB Edukacja:</strong> Podstawy obsługi silnika Unity.",
        c5_3: "<strong>Inteligentny dom dla każdego (Systemy IoT)</strong> — Wyższa Szkoła Gospodarki w Bydgoszczy",
        c5_4: "<strong>Myślenie komputacyjne – rozwijanie kompetencji technologicznych</strong> — Uniwersytet Śląski w Katowicach",
        c5_5: "<strong>Szkolenie z PN-EN ISO 50001 (Zarządzanie Energią)</strong> — Quality Assurance Poland"
    },
    en: {
        // --- NAVIGATION & COMMON ELEMENTS ---
        navAbout: "Bio / About Me",
        navSkills: "Skills",
        navExperience: "Experience",
        navEducation: "Education & Courses",
        navProjects: "Projects",
        navHackathons: "Hackathons",
        navPhotos: "Gallery / Photos",
        navContact: "Contact & References",
        sidebarSub: "home page of",
        sidebarDesc: "Harvard University CS50X Graduate, Certified IT Specialist, Web & mobile application programmer, Game Designer, IT Technician.",
        sidebarInstitution: "European University of Medical and Social Sciences, Teb edukacja, Harvard Cs50x",
        footerText: "&copy; 2026 Daniel Trzeciński. All rights reserved.",
           // ---Pafe Hackatons Gallery Contact --- //
           // hackHeading: "Hackathons",
        hackTitle: "Winning Team: Hackathon Hack4Girls Inspired by 'Sexify'",
        hackDesc: "Team win during a prestigious hackathon organized by Geek Girls Carrots and the Netflix platform. The project involved developing and fully implementing an innovative technological solution for the IT industry under time pressure.",
        photosHeading: "Gallery & CSS Art",
        photosDesc: ".",
        contactHeading: "Contact ",
        contactPhone: "Phone:",
        contactLic: ".",
        contactLang: ".",
        refTitle: "Formal References",
        // --- PAGE: BIOGRAPHY / ABOUT ME (index.html) ---
        bioHeading: "About Me / Professional Profile",
        bioText: "For several years, I have been dynamically developing my path in the technology industry, evolving from a hardware enthusiast and systems administrator to advanced programming and the integration of artificial intelligence (AI) systems. I combine the analytical thinking of a network engineer with the creativity of a developer, leveraging the potential of artificial intelligence to maximize productivity and automate development processes.",
        bioSpecTitle: "Key core competencies and areas of specialization:",
        bioSpecWeb: "<strong>Programming & Web Dev:</strong> Building responsive, modern web applications and websites (Front-end/Full-Stack), advanced knowledge of CSS engines, and SQL database structures. Strong algorithmic foundations backed by an elite Harvard University CS50x certification.",
        bioSpecAi: "<strong>New Technologies & AI:</strong> Practical knowledge of prompt engineering, autonomous agent deployment, and business process automation (certified by PFR and AIDEAS). Successful implementation of LLM models (GPT-4, Gemini) within daily software engineering workflows.",
        bioSpecGame: "<strong>Interactive Media & Game Dev:</strong> Level Design and Environment Art utilizing the Unreal Engine ecosystem.",
        bioSpecNet: "<strong>Administration & Networks:</strong> Management and configuration of Windows and Linux systems, operating environment performance optimization, as well as design, deployment, and security of LAN/Wi-Fi network infrastructure.",
        bioSpecHard: "<strong>Hardware & Mobile:</strong> Comprehensive diagnostics, servicing, and modernization of PCs/laptops, along with full configuration and security management of Android/iOS mobile devices.",
        bioSummary: "I am constantly raising the bar and advancing my qualifications – currently pursuing a Computer Science Engineering degree, focusing on intelligent automation (AI Workflow) and delivering IT solutions that generate real business value. Open to ambitious projects and challenges within software development and AI technologies.",

        // --- PAGE: EXPERIENCE (experience.html) ---
        expPageTitle: "Experience | Daniel Trzeciński",
        expHeading: "Professional Experience",
        
        exp1Date: "January 2012 – Present",
        exp1Title: "IT Support Specialist & Network Technician (Freelance) — DanCom",
        exp1Sub: "Self-employed | Zabrze, Silesian Voivodeship (Hybrid work)",
        exp1Desc: "Comprehensive diagnostics and repair of computer hardware for individual and business clients. Designing, building, and deploying modern, responsive websites tailored to specific business needs. Installation, updating, and advanced configuration of operating systems (Windows, Linux) and performance-oriented software. Malware and virus removal, security auditing, and implementing workstation protection systems against network threats. Technical consulting regarding hardware optimization, component upgrades, and core IT infrastructure setup.",
        
        exp2Date: "July 2021 – Present",
        exp2Title: "Warehouse Operator (Logistics Systems Support) — Johnson Matthey",
        exp2Desc: "Assisting users with hardware configuration (PCs, mobile devices), software installation, and access/password management. Providing daily technical troubleshooting (1st line support) prior to Help Desk escalation. Ensuring data integrity, analyzing discrepancies, and generating advanced reports and data summaries using MS Excel. Operating mobile terminals and performing basic diagnostics on logistics hardware.",
        
        exp3Date: "February 2026 – April 2026",
        exp3Title: "IT & Programming Specialist Intern — Center for Education and Training",
        exp3Desc: "Completing a remote professional internship program focused on technical aspects of IT system maintenance. Developing and testing features for web applications while maintaining clean, high-quality code. Managing databases, ensuring structural consistency, and optimizing queries. Remotely monitoring network infrastructure and diagnostic troubleshooting of hardware issues.",
        
        exp4Date: "January 2026 – April 2026",
        exp4Title: "Certified IT Specialist (Internship) — DREWTRANS",
        exp4Desc: "Developing and deploying websites. Configuring, optimizing, and maintaining laptops and workstations. Diagnostic troubleshooting of hardware and system-level issues. Installing and configuring printers and peripherals (including replacing consumables). Configuring and securing Wi-Fi networks and managing corporate mobile devices.",
        
        exp5Date: "June 2023 – January 2025",
        exp5Title: "Lead Game Designer / Level Designer — Poisoned Laudanum Studio (Pro Bono)",
        exp5Desc: "Designing and testing core gameplay mechanics and systems. Creating and architecting game maps and levels (Level Design, Player Pathing) along with blockout development (Level Prototyping). Environment art styling using pre-made assets (Environment Design / Level Dressing) inside Unreal Engine. Directing the game's creative vision. Managing a team of over a dozen developers – planning tasks, organizing milestone meetings, and coordinating cross-functional workflows.",

        exp1Tags: " Web Development · iOS · Windows · Linux · Network Security · Technical Support (Helpdesk) · IT Technical Consulting · Hardware Optimization · IT Infrastructure Configuration · Hardware Diagnostics · PC & Laptop Repair · Component Upgrades",


tagWebDev: "Web Development",
tagIos: "iOS",
tagWindows: "Windows",
tagLinux: "Linux",
tagNetSec: "Network Security",
tagSupport: "Technical Support (Helpdesk)",
tagConsulting: "IT Technical Consulting",
tagHardOpt: "Hardware Optimization",
tagInfraConfig: "IT Infrastructure Configuration",
tagDiag: "Hardware Diagnostics",
tagRepair: "PC & Laptop Repair",
tagModernization: "Component Upgrades",
        
        // --- PAGE: SKILLS (skills.html) ---
        skillsHeading: "Skills & Competencies",
        skillsGroup1Title: "Artificial Intelligence & AI Tools",
        skillsGroup1Desc: "Advanced utilization of generative models and prompt engineering in daily programming and analytical work:",
        skillsAiLi1: "<strong>Conversational Systems & LLMs:</strong> ChatGPT, Gemini, LeChat.",
        skillsAiLi2: "<strong>Autonomous AI Agents:</strong> Working with asynchronous agent frameworks (Jules).",
        skillsAiLi3: "<strong>Automation & Analysis:</strong> Automation of repetitive business tasks and advanced data analysis utilizing AI systems.",
        skillsGroupSysTitle: "Administration, Hardware & IoT",
        skillsSysDesc: "Comprehensive management of system environments and hardware infrastructure:",
        skillsSysLi1: "<strong>OS Administration:</strong> Management, optimization, and configuration of Windows and Linux operating systems.",
        skillsSysLi2: "<strong>Service & Maintenance:</strong> Hardware troubleshooting, maintenance, and modernization of PC class computers.",
        skillsSysLi3: "<strong>IoT Systems (Internet of Things):</strong> Designing, building, and full configuration of IoT structures, installation and integration of endpoints (smart sensors, actuators).",
        skillsGroup3Title: "Network Engineering & Security",
        skillsGroup3Desc: "Design, physical and logical implementation of LAN/WLAN network infrastructure:",
        skillsNetLi1: "<strong>Network Configuration:</strong> Wireline and wireless network management, configuration of Access Points and Wi-Fi routers.",
        skillsNetLi2: "<strong>Physical Installation (Structured):</strong> Deployment of cable infrastructure, professional termination of RJ-45 connectors.",
        skillsNetLi3: "<strong>Network Logic & Subnetting:</strong> Advanced IP addressing (IPv4/IPv6), podnet planning (subnetting), implementing static and dynamic addressing (DHCP setup, Firewalls, and NAT mechanisms).",
        skillsNetLi4: "<strong>Diagnostic Tools & Audit:</strong> Wireshark, nmap, netstat, ping, tracert, ipconfig / ifconfig. Securing network architectures and IoT environments.",
        skillsGroup2Title: "Programming & Technologies",
        skillsGroup2Desc: "Source code authorization, web applications, and interactive environments creation:",
        skillsProgLi1: "<strong>Web Development:</strong> HTML, CSS (including advanced CSS Art frameworks), JavaScript, PHP.",
        skillsProgLi2: "<strong>Interactive & Game Dev:</strong> Logic architecture and level design within Unreal Engine and Unity.",
        skillsLangTitle: "Languages",
        skillsLangLi1: "<strong>Polish:</strong> Native",
        skillsLangLi2: "<strong>English:</strong> A1 Level (Elementary, tools-assisted)",

        // --- PAGE: PROJECTS (projects.html) ---
        projectsHeading: "Engineering Projects",
        projectsDesc: "Selected systems, applications, and technological solutions developed independently and within development teams.",
        proj1Title: "SID 4.0 — Retail & Warehouse Management System",
        proj1Text: "Proprietary, advanced management, warehouse, and sales ecosystem. Seamless integration of POS modules, automated stock alert systems, and native compatibility with barcode scanners and logistical terminals. Project heavily engineered around maximum throughput and retail process optimization.",
        proj2Title: "Pure CSS Art Portfolio",
        proj2Text: "Advanced programming experiments relying entirely on pure structured HTML and CSS style sheets, completely omitting external graphics and JS engines. High-fidelity replication of user interfaces, photorealistic icons, and modern digital frames. Full project deck hosted on the CodePen platform.",
        aiWorkspaceHeading: "AI & Productivity Workspace",
        aiWorkspaceDesc: "Practical implementation of advanced artificial intelligence frameworks, workflow automation, and prompt engineering inside modern software production environments.",
        aiWorkspaceTitle: "AI Productivity & Autonomous Agents Framework",
        aiWorkspaceText: "In my daily programming operations, I leverage an integrated AI tools ecosystem to minimize feature time-to-market while enforcing strict source code security and architectural protocols.",
        aiLi1: "<strong>Prompt Engineering & Coding:</strong> Efficient and highly-precise interaction with Large Language Models (GPT-4, Gemini, LeChat) and asynchronous autonomous agents (Jules) for ultra-fast architectural prototyping, database structure synthesis, and algorithmic optimization.",
        aiLi2: "<strong>Task Automation & Data Science:</strong> Scripting automated routines for repetitive, mechanical software tasks, and deploying specialized AI algorithms for data structuring, sanitization, and deep business intelligence analytics.",
        aiLi3: "<strong>Verification, Audit & Debugging:</strong> Every code component synthesized via AI intelligence undergoes a rigorous pipeline of manual inspection, Unit Testing, and debugging. This structure fully eliminates vulnerabilities, network exploits, and optimizes runtime performance.",

        // --- PAGE: EDUCATION & COURSES (education.html) ---
        eduHeading: "Education",
        edu1Title: "Certified IT Specialist — European University of Medical and Social Sciences",
        edu1Desc: "Computer Science (Higher Education, Short-Cycle) - Earned Professional Degree.",
        edu2Title: "CS50's Introduction to Programming with Python — Harvard University",
        edu2Desc: "Undergraduate Course – Completed.",
        edu3Title: "CS50: Introduction to Computer Science — Harvard University",
        edu3Desc: "Undergraduate Course – Completed.",
        edu4Title: "Game Design (Game Creation & Testing) — Teb Edukacja Grudziądz",
        edu4Desc: "Practical Training Academy - Earned State Professional Qualification Certificate.",
        edu5Title: "Web & Mobile Application Programming — Teb Edukacja Wrocław",
        edu5Desc: "Practical Training Academy - Earned State Professional Qualification Certificate.",
        edu6Title: "IT Technician — Teb Edukacja Gliwice Post-Secondary School",
        edu6Desc: "Completed with Full Professional Vocational Title.",
        
        coursesHeading: "Courses & Certifications",
        coursesGroup1Title: "Artificial Intelligence & Prompt Engineering",
        c1_1: "<strong>AIDEAS Level UP</strong> — Idea Generator (Issued: May 2026)",
        c1_2: "<strong>Idea Generator</strong> — AIDEAS development program in artificial intelligence competencies",
        c1_3: "<strong>Skill of Tomorrow: AI 2.0</strong> — Google & SGH (2025): Practical AI applications in workflows and projects: generative language models, automation, productivity, data analysis via AI suites.",
        c1_4: "<strong>Foundations of Artificial Intelligence</strong> — Information Processing Centre – National Research Institute",
        c1_5: "<strong>Agent vs Assistant - Core Fundamentals</strong> — PFR S.A. (Issued: May 2026)",
        c1_6: "<strong>AI for Business Leaders</strong> — PFR S.A. (Issued: April 2026)",
        c1_7: "<strong>Use AI for everyday tasks</strong> — Academic Partners Foundation (Issued: April 2026)",
        c1_8: "<strong>AIDEAS AI Competence Development Program</strong> — Idea Generator (Issued: March 2026)",
        c1_9: "<strong>AI in Business and Everyday Life Course</strong> — Digital University Foundation (Issued: January 2026)",
        
        coursesGroupNetTitle: "Network Engineering, Administration & OS",
        c2_1: "<strong>Introduction to Computer Networks</strong> — Wroclaw School of Banking / WSH",
        c2_2: "<strong>Cisco Networking Academy:</strong> Introduction to Packet Tracer",
        c2_3: "<strong>Cisco Networking Academy:</strong> NDG Linux Unhatched",
        c2_4: "<strong>Microsoft Virtual Academy:</strong> Introduction to Active Directory Domain Services",
        c2_5: "<strong>Microsoft Virtual Academy:</strong> Introduction to Active Directory",
        c2_6: "<strong>Introduction to Universal Windows Store Applications</strong> — Microsoft Virtual Academy",
        
        coursesGroupSecTitle: "Cybersecurity & Data Protection",
        c3_1: "<strong>Data Security Techniques on the Internet</strong> — Bialystok University of Technology",
        c3_2: "<strong>Security in Cyberspace</strong> — Warsaw Banking Institute",
        c3_3: "<strong>Cisco Networking Academy:</strong> Introduction to Cybersecurity",
        c3_4: "<strong>Operation and Security of Mobile Devices</strong> — University of Economy in Bydgoszcz",
        
        coursesGroup2Title: "Web Development, Software Engineering & QA",
        c4_1: "<strong>Web Design & Architecture</strong> — Academy of Economics and Human Sciences in Warsaw",
        c4_2: "<strong>Web Design</strong> — VIZJA University (Issued: March 2026)",
        c4_3: "<strong>Introduction to Software Testing</strong> — West Pomeranian Business School in Szczecin",
        c4_4: "<strong>SQL Language – Introduction to Relational Databases</strong> — Comarch (Issued: May 2020)",
        c4_5: "<strong>TEB Edukacja Certificate:</strong> Practical command of programming languages: HTML, XHTML, CSS, JavaScript.",
        
        coursesGroupGDevTitle: "Game Dev, IoT & Management Systems",
        c5_1: "<strong>TEB Edukacja Certificate:</strong> Foundations of Unreal Engine Operation.",
        c5_2: "<strong>TEB Edukacja Certificate:</strong> Foundations of Unity Engine Operation.",
        c5_3: "<strong>Smart Home for Everyone (IoT Systems)</strong> — University of Economy in Bydgoszcz",
        c5_4: "<strong>Computational Thinking – Advancing Technology Competencies</strong> — University of Silesia in Katowice",
        c5_5: "<strong>Training in PN-EN ISO 50001 (Energy Management Systems)</strong> — Quality Assurance Poland"
    }
};


// 2. Logika zarządzania językiem witryny
let currentLang = localStorage.getItem('portfolio_lang') || 'pl';

function applyTranslations(lang) {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        
        if (translations[lang] && translations[lang][key]) {
            const translatedValue = translations[lang][key];
            
            // SPRAWDZENIE: Jeśli tłumaczona wartość zawiera tagi lub encje, renderuj jako HTML
            if (translatedValue.includes('&copy;') || translatedValue.includes('<strong') || translatedValue.includes('<b') || translatedValue.includes('<em>')) {
                element.innerHTML = translatedValue;
            } else {
                element.textContent = translatedValue;
            }
        }
    });

    // Aktualizacja przycisku językowego w DOM
    const toggleBtnDesktop = document.getElementById('lang-toggle');
    
    const nextLangText = lang === 'pl' ? 'EN' : 'PL';
    if (toggleBtnDesktop) toggleBtnDesktop.textContent = nextLangText;
    
    document.documentElement.lang = lang;
}

function toggleLanguage() {
    currentLang = currentLang === 'pl' ? 'en' : 'pl';
    localStorage.setItem('portfolio_lang', currentLang);
    applyTranslations(currentLang);
}

// 3. Obsługa akademickiego menu mobilnego
function initMobileMenu() {
    const hamburger = document.getElementById("academic-hamburger-btn");
    const nav = document.querySelector(".sidebar-nav");

    if (hamburger && nav) {
        hamburger.addEventListener("click", function() {
            nav.classList.toggle("active");
        });
    }
}

// 4. Start systemu po załadowaniu drzewa DOM (wszystko w jednym miejscu!)
document.addEventListener('DOMContentLoaded', () => {
    // Odpalenie tłumaczeń
    applyTranslations(currentLang);

    // Podpięcie nasłuchiwania na przycisk zmiany języka
    const toggleBtnDesktop = document.getElementById('lang-toggle');
    if (toggleBtnDesktop) toggleBtnDesktop.addEventListener('click', toggleLanguage);

    // Inicjalizacja menu mobilnego
    initMobileMenu();
});



    // Usuwa wszystko po domenie, zostawiając w pasku czyste danieltrzecinski.eu
    window.history.replaceState({}, document.title, "/");

