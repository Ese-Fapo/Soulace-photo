import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      language: {
        english: 'English',
        portuguese: 'Portuguese Brazil',
        switchLabel: 'Choose language',
      },
      nav: {
        home: 'Home',
        about: 'About',
        portfolio: 'Portfolio',
        services: 'Services',
        faqs: 'FAQs',
        packages: 'Packages',
        contact: 'Contact',
        book: 'Book a Session',
        close: 'Close navigation menu',
        open: 'Open navigation menu',
        homeLabel: 'SoulAce-Foto home',
      },
      categories: {
        all: 'All',
        peopleEvents: 'People & Events',
        businessCommercial: 'Business & Commercial',
        commercial: 'Commercial',
        outdoorAdventure: 'Outdoor & Adventure',
        outdoor: 'Outdoor',
        weddings: 'Weddings',
        portraits: 'Portraits',
        events: 'Events',
        fashion: 'Fashion',
        products: 'Products',
        productPhotography: 'Product Photography',
        food: 'Food',
        foodPhotography: 'Food Photography',
        realEstate: 'Real Estate',
        realEstatePhotography: 'Real Estate Photography',
      },
      hero: {
        alt: 'Elegant wedding reception venue with warm lighting',
        eyebrow: 'Creative photography studio',
        titleStart: 'Photography that turns',
        titleEnd: 'moments into lasting stories',
        description:
          'SoulAce-Foto creates refined imagery for portraits, events, products, food, real estate, fashion, and meaningful celebrations, with cinematic color and honest emotion.',
        reserve: 'Reserve your date',
        gallery: 'See the gallery',
      },
      stats: {
        items: [
          { title: 'Years of Experience' },
          { title: 'Happy Clients' },
          { title: 'Projects Completed' },
          { title: 'Awards Won' },
        ],
      },
      portfolio: {
        eyebrow: 'Selected work',
        titleStart: 'Our',
        titleHighlight: 'Portfolio',
        description:
          'A curated look at weddings, portraits, events, and commercial photography shaped with warm color, cinematic framing, and careful detail.',
        photoCount: '{{count}} photos',
        viewMore: 'View more',
        categoryCards: {
          all: {
            description:
              'Start with the full collection and wander through every kind of story we photograph.',
            galleryIntro:
              'Explore the complete collection across portraits, weddings, events, fashion, commercial work, food, and real estate.',
          },
          Weddings: {
            description:
              'Elegant, emotional wedding stories preserved from the quiet details to the final celebration.',
            galleryIntro:
              'Browse wedding images filled with intimate portraits, ceremony moments, and celebration details.',
          },
          Portraits: {
            description:
              'Natural portraits for families, children, professionals, and personal milestones.',
            galleryIntro:
              'See portraits shaped with flattering light, relaxed direction, and genuine expression.',
          },
          Events: {
            description:
              'Atmospheric coverage for gatherings, receptions, corporate moments, and special celebrations.',
            galleryIntro:
              'View event photography that captures atmosphere, connection, design, and the moments people remember.',
          },
          Fashion: {
            description:
              'Editorial images with confident styling, polished light, and a strong visual point of view.',
            galleryIntro:
              'Browse fashion work created with editorial framing, refined styling, and polished presentation.',
          },
          'Product Photography': {
            description:
              'Clean, sales-ready product imagery built to make details, texture, and quality stand out.',
            galleryIntro:
              'View product photography designed for launches, catalogs, e-commerce, and brand storytelling.',
          },
          'Food Photography': {
            description:
              'Appetizing images for menus, restaurants, catering, and culinary brands.',
            galleryIntro:
              'Browse food photography focused on appetite, texture, color, and presentation.',
          },
          'Real Estate Photography': {
            description:
              'Bright property images that make rooms feel inviting, spacious, and ready to visit.',
            galleryIntro:
              'See real estate photography that highlights space, light, architecture, and listing appeal.',
          },
        },
        showingMobile: 'Showing {{visible}} of {{total}} {{category}} projects',
        showingDesktop: 'Showing {{total}} {{category}} projects',
        refine: 'Tap a category to refine the gallery.',
        featured: 'Featured project',
        more: 'See more photos',
        empty: 'No projects found for this category.',
        ctaTitle: 'Want a gallery with this kind of feeling?',
        ctaText:
          'Tell us what you are planning and we will recommend the right coverage, timeline, and image style.',
        ctaButton: 'Plan a shoot',
        items: {
          1: 'Bride Portrait',
          2: 'Couple Kiss',
          3: 'Couple with Trains',
          4: 'Couple Portrait',
          5: 'Little Bride & Groom',
          6: 'Little Girl Portrait',
          7: 'Family Portraits',
          8: 'Kid Portrait',
          9: 'Studio Portrait',
          10: 'Editorial Portrait',
          11: 'Male Portrait',
          12: 'Modern Male Portrait',
          13: 'Event Celebration',
          14: 'Grand Event Hall',
          15: 'Cinematic Event Space',
          16: 'Evening Event Design',
          17: 'Reception Venue',
          18: 'Reception Setup',
          19: 'Fashion Editorial',
          20: 'Fashion Campaign',
          21: 'Product Detail',
          22: 'Studio Product Photo',
          23: 'Commercial Product Photo',
          24: 'Reception Food Display',
          25: 'Wedding Food Catering',
          26: 'Modern Real Estate Interior',
          27: 'Residential Listing',
          28: 'Property Exterior',
          29: 'Luxury Property Detail',
          30: 'Architectural Real Estate',
        },
      },
      gallery: {
        back: 'Back to site',
        titleStart: 'Full',
        titleHighlight: 'Gallery',
        description:
          'Browse the complete collection across portraits, weddings, events, fashion, commercial work, food, and real estate.',
        photos: '{{count}} photos',
      },
      about: {
        altMain: 'Bride portrait from SoulAce-Foto',
        altInset: 'Wedding couple photographed in an intimate moment',
        eyebrow: 'About SoulAce-Foto',
        title: 'Thoughtful photography for moments that deserve more than a snapshot.',
        description:
          'We create wedding, portrait, event, and commercial images with a calm process and a refined editorial eye. Every session is shaped around honest connection, flattering light, and final galleries that feel polished without losing the feeling of the day.',
        highlights: [
          { label: 'Years behind the lens' },
          { label: 'Edited galleries delivered' },
          { label: 'Preview turnaround' },
        ],
        processTitle: 'How we work',
        processSteps: [
          'Plan the mood, location, and story before the shoot',
          'Guide natural posing without losing real emotion',
          'Edit every gallery with consistent cinematic color',
        ],
        viewWork: 'View the work',
        startSession: 'Start a session',
      },
      services: {
        eyebrow: 'Services',
        title: 'Photography coverage for every chapter of your story.',
        description:
          'Choose focused coverage for weddings, portraits, events, products, food, real estate, fashion, sports, wildlife, and travel. Each service includes planning, guided direction, color editing, and delivery-ready image files.',
        ask: 'Ask about this',
        links: [
          'Weddings',
          'Portraits',
          'Events',
          'Product Photography',
          'Food Photography',
          'Real Estate Photography',
        ],
        items: {
          1: {
            title: 'Weddings',
            description:
              'From the ceremony to the reception, we capture every moment of your special day with our comprehensive wedding photography services.',
            features: [
              'Pre-ceremony preparations',
              'Ceremony coverage',
              'Reception coverage',
              'High-resolution images',
            ],
          },
          2: {
            title: 'Portraits',
            description:
              'Professional portrait photography for individuals, couples, and families with personalized styling and location selection.',
            features: [
              'Studio or outdoor sessions',
              'Professional styling consultation',
              'Multiple outfit changes',
              'Edited digital images',
            ],
          },
          3: {
            title: 'Events',
            description:
              'Capture the energy and excitement of your events with our experienced event photography team.',
            features: [
              'Full event coverage',
              'Candid and posed shots',
              'Real-time editing',
              'Quick delivery',
            ],
          },
          4: {
            title: 'Fashion',
            description:
              'High-fashion photography that showcases style and elegance with professional styling and editing.',
            features: [
              'Professional styling',
              'High-end retouching',
              'Portfolio-ready images',
              'Magazine quality prints',
            ],
          },
          5: {
            title: 'Product Photography',
            description:
              'Showcase your products in the best light with professional product photography that drives sales.',
            features: [
              'Studio lighting setup',
              'Multiple angles and closeups',
              'Lifestyle product shots',
              'Background options',
            ],
          },
          6: {
            title: 'Food Photography',
            description:
              'Appetizing food photography perfect for restaurants, catering, and culinary businesses.',
            features: [
              'Professional styling',
              'Appetizing presentation',
              'Menu-ready images',
              'Restaurant branding',
            ],
          },
          7: {
            title: 'Real Estate Photography',
            description:
              'Professional real estate photography that highlights property features and attracts buyers.',
            features: [
              'Interior and exterior shots',
              'Professional lighting',
              'Drone photography available',
              'Virtual tours',
            ],
          },
          10: {
            title: 'Travel Photography',
            description:
              'Document your travel adventures with professional photography capturing culture and landscapes.',
            features: [
              'Destination expertise',
              'Cultural sensitivity',
              'Landscape and portrait mix',
              'Travel guide included',
            ],
          },
        },
      },
      testimonials: {
        eyebrow: 'Google reviews',
        title: 'What our clients say',
        based: 'Based on recent Google client reviews.',
        previous: 'Previous testimonial',
        next: 'Next testimonial',
        goTo: 'Go to testimonial {{number}}',
        reviews: {
          1: {
            role: 'Bride',
            date: 'May 2026',
            location: 'Florianopolis, Brazil',
            quote:
              'The team captured every emotional part of our wedding with so much care. The photos feel elegant, natural, and completely us.',
          },
          2: {
            role: 'Business owner',
            date: 'April 2026',
            location: 'Florianopolis, Brazil',
            quote:
              'Excellent work at our corporate event. Communication was clear, the delivery was fast, and the final gallery looked very professional.',
          },
          3: {
            role: 'Mother',
            date: 'March 2026',
            location: 'Campinas, Brazil',
            quote:
              'Our family portraits came out beautiful. Everyone felt comfortable, and the photos captured real smiles instead of stiff poses.',
          },
          4: {
            role: 'Restaurant owner',
            date: 'February 2026',
            location: 'Sao Paulo, Brazil',
            quote:
              'The food photos made our menu look premium. We started using them online immediately and noticed more customer interest.',
          },
          5: {
            role: 'Bride',
            date: 'January 2026',
            location: 'Rio de Janeiro, Brazil',
            quote:
              'We loved every image. The gallery felt refined and emotional, and it made our day feel even more special when we saw it again.',
          },
          6: {
            role: 'Real estate broker',
            date: 'December 2025',
            location: 'Sao Paulo, Brazil',
            quote:
              'The property photos looked bright and spacious. They helped us present the listing with much more confidence.',
          },
          7: {
            role: 'Bride',
            date: 'June 2026',
            location: 'Lagos, Nigeria',
            quote:
              'Our wedding photos were full of joy, color, and real emotion. The team made everyone feel relaxed and captured the celebration beautifully.',
          },
          8: {
            role: 'Event planner',
            date: 'May 2026',
            location: 'Abuja, Nigeria',
            quote:
              'The event coverage was sharp and elegant. Every important guest moment, detail, and reaction was documented with care.',
          },
          9: {
            role: 'Fashion designer',
            date: 'April 2026',
            location: 'Lagos, Nigeria',
            quote:
              'The fashion images looked premium and editorial. They understood the collection quickly and gave us photos we could use everywhere.',
          },
          10: {
            role: 'Restaurant owner',
            date: 'March 2026',
            location: 'Port Harcourt, Nigeria',
            quote:
              'Our menu finally looks as good online as it tastes in person. The food photos are clean, appetizing, and very professional.',
          },
          11: {
            role: 'Mother',
            date: 'February 2026',
            location: 'Enugu, Nigeria',
            quote:
              'The family portraits are warm and natural. The children were comfortable, and the final gallery feels personal and timeless.',
          },
          12: {
            role: 'Property consultant',
            date: 'January 2026',
            location: 'Lekki, Nigeria',
            quote:
              'The property photos helped our listing stand out immediately. The rooms looked bright, spacious, and easy for buyers to imagine.',
          },
        },
      },
      faqs: {
        eyebrow: 'Questions and answers',
        title: 'Everything you may want to know before booking.',
        description:
          'Here are the details clients usually ask about before planning a wedding, portrait, event, or commercial photography session.',
        items: [
          {
            question: 'How far in advance should I book a session?',
            answer:
              'For weddings and large events, booking 2 to 4 months ahead is ideal. Portrait, family, product, food, and real estate sessions can often be planned 1 to 3 weeks ahead, depending on availability.',
          },
          {
            question: 'Do you help with location and timing?',
            answer:
              'Yes. We recommend locations that fit the mood of the shoot and suggest times with flattering light, especially early morning or late afternoon for outdoor sessions.',
          },
          {
            question: 'How many photos will I receive?',
            answer:
              'The final number depends on the type of session and package. Before booking, we explain the expected delivery range so you know exactly what is included.',
          },
          {
            question: 'Are the photos edited?',
            answer:
              'Yes. Selected images receive color correction, light balancing, cropping, and polished finishing. More detailed retouching can be added depending on the package.',
          },
          {
            question: 'How long does delivery take?',
            answer:
              'Portrait and commercial sessions are usually delivered within 10 to 15 business days. Weddings and larger events may take longer depending on the number of images.',
          },
          {
            question: 'Can I request a specific style?',
            answer:
              'Absolutely. You can share references, mood boards, colors, and ideas before the shoot so we can shape the session around the look you want.',
          },
          {
            question: 'Do you photograph outside the studio?',
            answer:
              'Yes. We cover studio, outdoor, event venue, restaurant, business, home, and real estate locations. Travel or location fees may apply depending on distance.',
          },
          {
            question: 'Do you offer product and business photography?',
            answer:
              'Yes. We photograph products, food, real estate, fashion, brand portraits, and corporate events with files prepared for web, social media, and marketing use.',
          },
          {
            question: 'How do I reserve a date?',
            answer:
              'Contact us with your preferred date, location, and session type. Once availability is confirmed, we send package options and reserve the date after the deposit.',
          },
          {
            question: 'Can I order prints or albums?',
            answer:
              'Yes. Digital galleries are included, and prints, albums, wall art, and custom formats can be arranged after the final gallery is delivered.',
          },
        ],
      },
      footer: {
        description:
          'Refined photography for weddings, portraits, events, and commercial stories, crafted with calm direction and cinematic color.',
        explore: 'Explore',
        services: 'Services',
        book: 'Book a session',
        bookText: 'Tell us the date, location, and kind of story you want to preserve.',
        contact: 'Get in touch',
        rights: '© {{year}} SoulAce-Foto. All rights reserved.',
        tagline: 'Photography for elegant, honest stories.',
        credit: 'Website by',
      },
      contact: {
        instagram: 'Open Instagram',
        whatsapp: 'Chat on WhatsApp',
      },
    },
  },
  'pt-BR': {
    translation: {
      language: {
        english: 'Inglês',
        portuguese: 'Português Brasil',
        switchLabel: 'Escolher idioma',
      },
      nav: {
        home: 'Início',
        about: 'Sobre',
        portfolio: 'Portfólio',
        services: 'Serviços',
        faqs: 'Dúvidas',
        packages: 'Pacotes',
        contact: 'Contato',
        book: 'Agendar ensaio',
        close: 'Fechar menu de navegação',
        open: 'Abrir menu de navegação',
        homeLabel: 'Página inicial da SoulAce-Foto',
      },
      categories: {
        all: 'Todos',
        peopleEvents: 'Pessoas e Eventos',
        businessCommercial: 'Comercial e Empresas',
        commercial: 'Comercial',
        outdoorAdventure: 'Viagem e Aventura',
        outdoor: 'Viagem',
        weddings: 'Casamentos',
        portraits: 'Retratos',
        events: 'Eventos',
        fashion: 'Moda',
        products: 'Produtos',
        productPhotography: 'Fotografia de Produto',
        food: 'Gastronomia',
        foodPhotography: 'Fotografia Gastronômica',
        realEstate: 'Imóveis',
        realEstatePhotography: 'Fotografia Imobiliária',
      },
      hero: {
        alt: 'Recepção de casamento elegante com iluminação acolhedora',
        eyebrow: 'Estúdio de fotografia criativa',
        titleStart: 'Fotografia que transforma',
        titleEnd: 'momentos em histórias duradouras',
        description:
          'A SoulAce-Foto cria imagens refinadas para retratos, eventos, produtos, gastronomia, imóveis, moda e celebrações especiais, com cor cinematográfica e emoção verdadeira.',
        reserve: 'Reserve sua data',
        gallery: 'Ver a galeria',
      },
      stats: {
        items: [
          { title: 'Anos de experiência' },
          { title: 'Clientes felizes' },
          { title: 'Projetos concluídos' },
          { title: 'Prêmios conquistados' },
        ],
      },
      portfolio: {
        eyebrow: 'Trabalhos selecionados',
        titleStart: 'Nosso',
        titleHighlight: 'Portfólio',
        description:
          'Uma seleção de casamentos, retratos, eventos e fotografia comercial criada com cores acolhedoras, enquadramento cinematográfico e cuidado nos detalhes.',
        photoCount: '{{count}} fotos',
        viewMore: 'Ver mais',
        categoryCards: {
          all: {
            description:
              'Comece pela coleção completa e explore todos os tipos de histórias que fotografamos.',
            galleryIntro:
              'Explore a coleção completa de retratos, casamentos, eventos, moda, trabalhos comerciais, gastronomia e imóveis.',
          },
          Weddings: {
            description:
              'Histórias de casamento elegantes e emocionantes, dos detalhes silenciosos à celebração final.',
            galleryIntro:
              'Veja imagens de casamento com retratos íntimos, momentos da cerimônia e detalhes da celebração.',
          },
          Portraits: {
            description:
              'Retratos naturais para famílias, crianças, profissionais e marcos pessoais.',
            galleryIntro:
              'Veja retratos criados com luz valorizadora, direção leve e expressão verdadeira.',
          },
          Events: {
            description:
              'Cobertura cheia de atmosfera para encontros, recepções, momentos corporativos e celebrações especiais.',
            galleryIntro:
              'Veja fotografia de eventos que captura atmosfera, conexão, design e os momentos que ficam na memória.',
          },
          Fashion: {
            description:
              'Imagens editoriais com styling confiante, luz refinada e uma direção visual marcante.',
            galleryIntro:
              'Explore trabalhos de moda com enquadramento editorial, styling refinado e apresentação polida.',
          },
          'Product Photography': {
            description:
              'Imagens de produto limpas e prontas para vender, destacando detalhes, textura e qualidade.',
            galleryIntro:
              'Veja fotografia de produto criada para lançamentos, catálogos, e-commerce e narrativa de marca.',
          },
          'Food Photography': {
            description:
              'Imagens apetitosas para cardápios, restaurantes, buffets e marcas gastronômicas.',
            galleryIntro:
              'Explore fotografia gastronômica focada em apetite, textura, cor e apresentação.',
          },
          'Real Estate Photography': {
            description:
              'Imagens imobiliárias claras que fazem os ambientes parecerem convidativos, amplos e prontos para visita.',
            galleryIntro:
              'Veja fotografia imobiliária que destaca espaço, luz, arquitetura e apelo para anúncios.',
          },
        },
        showingMobile: 'Mostrando {{visible}} de {{total}} projetos de {{category}}',
        showingDesktop: 'Mostrando {{total}} projetos de {{category}}',
        refine: 'Toque em uma categoria para filtrar a galeria.',
        featured: 'Projeto em destaque',
        more: 'Ver mais fotos',
        empty: 'Nenhum projeto encontrado nesta categoria.',
        ctaTitle: 'Quer uma galeria com esse tipo de sentimento?',
        ctaText:
          'Conte o que você está planejando e vamos recomendar a cobertura, o cronograma e o estilo de imagem ideais.',
        ctaButton: 'Planejar ensaio',
        items: {
          1: 'Retrato da Noiva',
          2: 'Beijo do Casal',
          3: 'Casal com Cauda do Vestido',
          4: 'Retrato do Casal',
          5: 'Pequenos Noiva e Noivo',
          6: 'Retrato Infantil',
          7: 'Retratos de Família',
          8: 'Retrato de Criança',
          9: 'Retrato em Estúdio',
          10: 'Retrato Editorial',
          11: 'Retrato Masculino',
          12: 'Retrato Masculino Moderno',
          13: 'Celebração de Evento',
          14: 'Grande Salão de Evento',
          15: 'Espaço de Evento Cinematográfico',
          16: 'Design de Evento Noturno',
          17: 'Local da Recepção',
          18: 'Montagem da Recepção',
          19: 'Editorial de Moda',
          20: 'Campanha de Moda',
          21: 'Detalhe de Produto',
          22: 'Foto de Produto em Estúdio',
          23: 'Foto Comercial de Produto',
          24: 'Mesa Gastronômica da Recepção',
          25: 'Buffet de Casamento',
          26: 'Interior Imobiliário Moderno',
          27: 'Anúncio Residencial',
          28: 'Exterior do Imóvel',
          29: 'Detalhe de Imóvel de Luxo',
          30: 'Imóvel Arquitetônico',
        },
      },
      gallery: {
        back: 'Voltar ao site',
        titleStart: 'Galeria',
        titleHighlight: 'Completa',
        description:
          'Explore a coleção completa de retratos, casamentos, eventos, moda, trabalhos comerciais, gastronomia e imóveis.',
        photos: '{{count}} fotos',
      },
      about: {
        altMain: 'Retrato de noiva da SoulAce-Foto',
        altInset: 'Casal de casamento fotografado em um momento íntimo',
        eyebrow: 'Sobre a SoulAce-Foto',
        title: 'Fotografia cuidadosa para momentos que merecem mais que um registro comum.',
        description:
          'Criamos imagens de casamento, retrato, evento e comerciais com um processo tranquilo e um olhar editorial refinado. Cada sessão é pensada a partir de conexão verdadeira, luz valorizadora e galerias finais polidas sem perder a emoção do dia.',
        highlights: [
          { label: 'Anos por trás das lentes' },
          { label: 'Galerias editadas entregues' },
          { label: 'Prévia em até 48h' },
        ],
        processTitle: 'Como trabalhamos',
        processSteps: [
          'Planejamos o clima, o local e a história antes do ensaio',
          'Orientamos poses naturais sem perder a emoção real',
          'Editamos cada galeria com cor cinematográfica consistente',
        ],
        viewWork: 'Ver trabalhos',
        startSession: 'Começar um ensaio',
      },
      services: {
        eyebrow: 'Serviços',
        title: 'Cobertura fotográfica para cada capítulo da sua história.',
        description:
          'Escolha coberturas focadas para casamentos, retratos, eventos, produtos, gastronomia, imóveis, moda, esportes, vida selvagem e viagens. Cada serviço inclui planejamento, direção guiada, edição de cor e arquivos prontos para entrega.',
        ask: 'Perguntar sobre isso',
        links: [
          'Casamentos',
          'Retratos',
          'Eventos',
          'Fotografia de Produto',
          'Fotografia Gastronômica',
          'Fotografia Imobiliária',
        ],
        items: {
          1: {
            title: 'Casamentos',
            description:
              'Da cerimônia à recepção, registramos cada momento do seu dia especial com uma cobertura completa de fotografia de casamento.',
            features: [
              'Preparativos antes da cerimônia',
              'Cobertura da cerimônia',
              'Cobertura da recepção',
              'Imagens em alta resolução',
            ],
          },
          2: {
            title: 'Retratos',
            description:
              'Fotografia profissional de retratos para pessoas, casais e famílias, com styling personalizado e escolha cuidadosa do local.',
            features: [
              'Sessões em estúdio ou externas',
              'Consultoria profissional de styling',
              'Trocas de look',
              'Imagens digitais editadas',
            ],
          },
          3: {
            title: 'Eventos',
            description:
              'Capture a energia e a emoção dos seus eventos com nossa equipe experiente de fotografia.',
            features: [
              'Cobertura completa do evento',
              'Fotos espontâneas e posadas',
              'Edição em tempo real',
              'Entrega rápida',
            ],
          },
          4: {
            title: 'Moda',
            description:
              'Fotografia de moda que valoriza estilo e elegância com styling e edição profissionais.',
            features: [
              'Styling profissional',
              'Retoque de alto padrão',
              'Imagens prontas para portfólio',
              'Impressões com qualidade editorial',
            ],
          },
          5: {
            title: 'Fotografia de Produto',
            description:
              'Mostre seus produtos da melhor forma com fotografia profissional pensada para impulsionar vendas.',
            features: [
              'Iluminação de estúdio',
              'Vários ângulos e detalhes',
              'Fotos lifestyle de produto',
              'Opções de fundo',
            ],
          },
          6: {
            title: 'Fotografia Gastronômica',
            description:
              'Fotografia gastronômica apetitosa para restaurantes, buffets e negócios culinários.',
            features: [
              'Styling profissional',
              'Apresentação apetitosa',
              'Imagens prontas para cardápio',
              'Identidade visual do restaurante',
            ],
          },
          7: {
            title: 'Fotografia Imobiliária',
            description:
              'Fotografia imobiliária profissional que valoriza os ambientes e atrai compradores.',
            features: [
              'Fotos internas e externas',
              'Iluminação profissional',
              'Drone disponível',
              'Tours virtuais',
            ],
          },
          10: {
            title: 'Fotografia de Viagem',
            description:
              'Documente suas viagens com fotografia profissional que captura cultura e paisagens.',
            features: [
              'Conhecimento de destinos',
              'Sensibilidade cultural',
              'Combinação de paisagem e retrato',
              'Guia de viagem incluído',
            ],
          },
        },
      },
      testimonials: {
        eyebrow: 'Avaliações do Google',
        title: 'O que nossos clientes dizem',
        based: 'Com base em avaliações recentes de clientes no Google.',
        reviews: {
          1: {
            role: 'Noiva',
            date: 'Maio de 2026',
            quote:
              'A equipe registrou cada parte emocionante do nosso casamento com muito cuidado. As fotos ficaram elegantes, naturais e totalmente com a nossa cara.',
          },
          2: {
            role: 'Empresário',
            date: 'Abril de 2026',
            quote:
              'Excelente trabalho no nosso evento corporativo. A comunicação foi clara, a entrega foi rápida e a galeria final ficou muito profissional.',
          },
          3: {
            role: 'Mãe',
            date: 'Março de 2026',
            quote:
              'Nossos retratos de família ficaram lindos. Todos se sentiram à vontade, e as fotos capturaram sorrisos reais em vez de poses engessadas.',
          },
          4: {
            role: 'Dono de restaurante',
            date: 'Fevereiro de 2026',
            quote:
              'As fotos dos pratos deixaram nosso cardápio com aparência premium. Começamos a usar online imediatamente e percebemos mais interesse dos clientes.',
          },
          5: {
            role: 'Noiva',
            date: 'Janeiro de 2026',
            quote:
              'Amamos cada imagem. A galeria ficou refinada e emocionante, e nos fez reviver o dia de um jeito ainda mais especial.',
          },
          6: {
            role: 'Corretor imobiliário',
            date: 'Dezembro de 2025',
            quote:
              'As fotos do imóvel ficaram claras e espaçosas. Elas nos ajudaram a apresentar o anúncio com muito mais confiança.',
          },
        },
      },
      faqs: {
        eyebrow: 'Perguntas e respostas',
        title: 'Tudo o que você pode querer saber antes de agendar.',
        description:
          'Aqui estão os detalhes que os clientes normalmente perguntam antes de planejar um casamento, retrato, evento ou sessão comercial.',
        items: [
          {
            question: 'Com quanta antecedência devo agendar uma sessão?',
            answer:
              'Para casamentos e eventos grandes, o ideal é reservar com 2 a 4 meses de antecedência. Ensaios de retrato, família, produto, gastronomia e imóveis geralmente podem ser planejados com 1 a 3 semanas, dependendo da disponibilidade.',
          },
          {
            question: 'Vocês ajudam na escolha do local e horário?',
            answer:
              'Sim. Recomendamos locais que combinem com o clima do ensaio e sugerimos horários com luz mais bonita, especialmente início da manhã ou fim da tarde para sessões externas.',
          },
          {
            question: 'Quantas fotos vou receber?',
            answer:
              'A quantidade final depende do tipo de sessão e do pacote. Antes da reserva, explicamos a faixa de entrega prevista para que você saiba exatamente o que está incluído.',
          },
          {
            question: 'As fotos são editadas?',
            answer:
              'Sim. As imagens selecionadas recebem correção de cor, ajuste de luz, corte e acabamento profissional. Retoques mais detalhados podem ser adicionados conforme o pacote.',
          },
          {
            question: 'Qual é o prazo de entrega?',
            answer:
              'Ensaios de retrato e sessões comerciais normalmente são entregues em 10 a 15 dias úteis. Casamentos e eventos maiores podem levar mais tempo, dependendo do volume de imagens.',
          },
          {
            question: 'Posso pedir um estilo específico?',
            answer:
              'Com certeza. Você pode enviar referências, moodboards, cores e ideias antes da sessão para alinharmos o ensaio ao visual que deseja.',
          },
          {
            question: 'Vocês fotografam fora do estúdio?',
            answer:
              'Sim. Atendemos em estúdio, áreas externas, locais de evento, restaurantes, empresas, casas e imóveis. Taxas de deslocamento podem ser aplicadas dependendo da distância.',
          },
          {
            question: 'Vocês fazem fotografia de produto e negócios?',
            answer:
              'Sim. Fotografamos produtos, gastronomia, imóveis, moda, retratos de marca e eventos corporativos com arquivos preparados para site, redes sociais e marketing.',
          },
          {
            question: 'Como faço para reservar uma data?',
            answer:
              'Entre em contato informando a data desejada, local e tipo de sessão. Após confirmarmos disponibilidade, enviamos as opções de pacote e reservamos a data com o pagamento do sinal.',
          },
          {
            question: 'Posso pedir impressões ou álbuns?',
            answer:
              'Sim. As galerias digitais estão incluídas, e impressões, álbuns, quadros e formatos personalizados podem ser organizados após a entrega da galeria final.',
          },
        ],
      },
      footer: {
        description:
          'Fotografia refinada para casamentos, retratos, eventos e histórias comerciais, criada com direção tranquila e cor cinematográfica.',
        explore: 'Explorar',
        services: 'Serviços',
        book: 'Agendar ensaio',
        bookText: 'Conte a data, o local e o tipo de história que você quer preservar.',
        contact: 'Entrar em contato',
        rights: '© {{year}} SoulAce-Foto. Todos os direitos reservados.',
        tagline: 'Fotografia para histórias elegantes e verdadeiras.',
        credit: 'Site criado por',
      },
      contact: {
        instagram: 'Abrir Instagram',
        whatsapp: 'Conversar no WhatsApp',
      },
    },
  },
}

resources.pt = resources['pt-BR']

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt', 'pt-BR'],
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
