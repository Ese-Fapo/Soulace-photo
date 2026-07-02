import baby1 from './image/baby1.jpg'
import baby2 from './image/baby2.jpg'
import baby3 from './image/baby3.jpg'
import baby4 from './image/baby4.jpg'
import baby5 from './image/baby5.jpg'
import baby6 from './image/baby6.jpg'
import baby7 from './image/baby7.jpg'
import baby8 from './image/baby8.jpg'
import baby9 from './image/baby9.jpg'
import babybum from './image/babybum.jpg'
import braid1 from './image/braid-1.jpg'
import bride from './image/bride.jpg'
import coupleKiss from './image/couple-kiss.jpg'
import coupleWithTrains from './image/couple-with-trains.webp'
import couple from './image/couple.jpeg'
import coupleJpg from './image/couple.jpg'
import event01 from './image/event-01.webp'
import event2 from './image/event-2.jpg'
import event3 from './image/event-3.jpg'
import event4 from './image/event-4.avif'
import family4 from './image/family-4.jpeg'
import fashion2 from './image/fashion-2.jpg'
import fashion from './image/fashion.jpg'
import kidPotraite from './image/kid-potraite.jpg'
import littleBrideGroom from './image/little-bride&groom.jpeg'
import littleGirl from './image/littlebriade.jpeg'
import model from './image/model.jpg'
import model2 from './image/model2.jpg'
import model3 from './image/model3.jpg'
import model4 from './image/model4.jpg'
import model6 from './image/model6.jpg'
import portrait from './image/portrait.jpg'
import portraitMale from './image/portrait-male.avif'
import portait from './image/portait.jpg'
import potrait001 from './image/potrait-001.jpg'
import potrait002 from './image/potrait-002.jpg'
import potraitGuy from './image/potrait.guy.jpg'
import potraitMale from './image/potrait-male.avif'
import pregnantChild from './image/pregnant-child.jpg'
import productPhoto2 from './image/product-photo-2.avif'
import productPhoto from './image/product-photo.jpg'
import product from './image/product.jpeg'
import realEstate1 from './image/real-estate-1.jpeg'
import realEstate2 from './image/real-estate2.jpeg'
import realEstate from './image/real-estate.jpeg'
import realestate2 from './image/realestate-2.avif'
import realestate from './image/realestate.jpg'
import receptionFood from './image/reception-food.jpeg'
import reception from './image/reception.jpeg'
import receptionJpg from './image/reception.jpg'
import weddingCouple from './image/wedding couple.jpg'
import weddingFood from './image/wedding-food.jpeg'
import weddingLadies from './image/wedding-ladies.jpg'

const images = {
  baby1,
  baby2,
  baby3,
  baby4,
  baby5,
  baby6,
  baby7,
  baby8,
  baby9,
  babybum,
  braid1,
  bride,
  coupleKiss,
  coupleWithTrains,
  couple,
  coupleJpg,
  event01,
  event2,
  event3,
  event4,
  family4,
  fashion,
  fashion2,
  kidPotraite,
  littleBrideGroom,
  littleGirl,
  model,
  model2,
  model3,
  model4,
  model6,
  portrait,
  portraitMale,
  portait,
  potrait001,
  potrait002,
  potraitGuy,
  potraitMale,
  pregnantChild,
  product,
  productPhoto,
  productPhoto2,
  realEstate,
  realEstate1,
  realEstate2,
  realestate,
  realestate2,
  receptionFood,
  reception,
  receptionJpg,
  weddingCouple,
  weddingFood,
  weddingLadies,
}
import {
    FaCamera,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaWhatsapp,
} from 'react-icons/fa'

export const assets = {
    bgImg: images.event3,
    aboutImg: images.bride,
}

export const navLinks = [
    { id: 'Home', href: '#home' },
    { id: 'About', href: '#about' },
    { id: 'Portfolio', href: '#portfolio' },
     { id: 'Services', href: '#services' },
    { id: 'FAQs', href: '#faqs' },
    { id: 'Contact', href: '#contact' },
]

export const navLink = navLinks;

export const whatsappMessage = encodeURIComponent("Hello SoulAce-Foto, I would like to book a photography session.")
export const whatsappHref = `https://wa.me/2349025246915?text=${whatsappMessage}`

export const contactInfo = [
    {
        id: 1,
        icon: FaPhoneAlt,
        label: "Telefone",
        value: "+55 (11) 99999-9999",
        href: "tel:+5511999999999"
    },
    {
        id: 2,
        icon: FaEnvelope,
        label: "Email",
        value: "contato@photostudio.com",
        href: "mailto:contato@photostudio.com"
    },
    {
        id: 3,
        icon: FaWhatsapp,
        label: "WhatsApp",
        value: "+234 902 524 6915",
        href: whatsappHref
    },
    {
        id: 4,
        icon: FaMapMarkerAlt,
        label: "Endereço",
        value: "São Paulo, SP",
        href: "https://maps.google.com/?q=S%C3%A3o+Paulo+SP"
    }
];

export const serviceLinks = [
    { id: 1, label: "Casamentos", href: "#gallery?category=Weddings" },
    { id: 2, label: "Retratos", href: "#gallery?category=Portraits" },
    { id: 3, label: "Eventos", href: "#gallery?category=Events" },
    { id: 4, label: "Fotografia de produto", href: "#gallery?category=Product%20Photography" },
    { id: 5, label: "Fotografia gastronômica", href: "#gallery?category=Food%20Photography" },
    { id: 6, label: "Fotografia imobiliária", href: "#gallery?category=Real%20Estate%20Photography" },
];

export const serviceLink = serviceLinks;

export const socialLinks = [
    {
        id: 1,
        icon: FaInstagram,
        label: "Instagram",
        href: "https://www.instagram.com/soulaceimagery/"
    },
    {
        id: 2,
        icon: FaFacebookF,
        label: "Facebook",
        href: "https://www.facebook.com/soulace.soulace.9"
    },
    {
        id: 3,
        icon: FaLinkedinIn,
        label: "LinkedIn",
        href: "https://linkedin.com/"
    },
    {
        id: 4,
        icon: FaWhatsapp,
        label: "WhatsApp",
        href: whatsappHref
    }
];

export const socialLink = socialLinks;

export const quickLinks = [
    { id: 1, label: "Início", href: "#home" },
    { id: 2, label: "Sobre", href: "#about" },
    { id: 3, label: "Portfólio", href: "#portfolio" },
    { id: 4, label: "Serviços", href: "#services" },
    { id: 5, label: "Perguntas frequentes", href: "#faqs" },
    { id: 6, label: "Contato", href: "#contact" },
];

export const quickLink = quickLinks;

export const stats =[
    {number: '15+', title: 'Years of Experience'},
    {number: '150+', title: 'Happy Clients'},
    {number: '300+', title: 'Projects Completed'},
    {number: '50+', title: 'Awards Won'},
];

export const portfolioCategories = [
    {
        name: 'People & Events',
        items: ['Weddings', 'Portraits', 'Maternity & Babies', 'Events', 'Fashion']
    },
    {
        name: 'Business & Commercial',
        items: ['Product Photography', 'Food Photography', 'Real Estate Photography']
    },
    {
        name: 'Outdoor & Adventure',
        items: ['Travel Photography']
    }
];

export const portfolioItems = [
    // People & Events - Weddings
    {
        id: 1,
        title: 'Bride Portrait',
        category: 'Weddings',
        mainCategory: 'People & Events',
        image: images.bride,
    },
    {
        id: 2,
        title: 'Couple Kiss',
        category: 'Weddings',
        mainCategory: 'People & Events',
        image: images.coupleKiss,
    },
    {
        id: 3,
        title: 'Couple with Trains',
        category: 'Weddings',
        mainCategory: 'People & Events',
        image: images.coupleWithTrains,
    },
    {
        id: 4,
        title: 'Couple Portrait',
        category: 'Weddings',
        mainCategory: 'People & Events',
        image: images.couple,
    },
    {
        id: 5,
        title: 'Little Bride & Groom',
        category: 'Weddings',
        mainCategory: 'People & Events',
        image: images.littleBrideGroom,
    },
    {
        id: 50,
        title: 'Bride Detail',
        category: 'Weddings',
        mainCategory: 'People & Events',
        image: images.braid1,
    },
    {
        id: 51,
        title: 'Wedding Couple',
        category: 'Weddings',
        mainCategory: 'People & Events',
        image: images.weddingCouple,
    },
    {
        id: 52,
        title: 'Wedding Party Portrait',
        category: 'Weddings',
        mainCategory: 'People & Events',
        image: images.weddingLadies,
    },
    {
        id: 53,
        title: 'Couple Wedding Portrait',
        category: 'Weddings',
        mainCategory: 'People & Events',
        image: images.coupleJpg,
    },
    // People & Events - Portraits
    {
        id: 6,
        title: 'Little Girl Portrait',
        category: 'Portraits',
        mainCategory: 'People & Events',
        image: images.littleGirl,
    },
    {
        id: 7,
        title: 'Family Portraits',
        category: 'Portraits',
        mainCategory: 'People & Events',
        image: images.family4,
    },
    {
        id: 8,
        title: 'Kid Portrait',
        category: 'Portraits',
        mainCategory: 'People & Events',
        image: images.kidPotraite,
    },
    {
        id: 9,
        title: 'Studio Portrait',
        category: 'Portraits',
        mainCategory: 'People & Events',
        image: images.potrait001,
    },
    {
        id: 10,
        title: 'Editorial Portrait',
        category: 'Portraits',
        mainCategory: 'People & Events',
        image: images.potrait002,
    },
    {
        id: 11,
        title: 'Male Portrait',
        category: 'Portraits',
        mainCategory: 'People & Events',
        image: images.potraitMale,
    },
    {
        id: 12,
        title: 'Modern Male Portrait',
        category: 'Portraits',
        mainCategory: 'People & Events',
        image: images.portraitMale,
    },
    {
        id: 31,
        title: 'Classic Portrait',
        category: 'Portraits',
        mainCategory: 'People & Events',
        image: images.portrait,
    },
    {
        id: 32,
        title: 'Outdoor Portrait',
        category: 'Portraits',
        mainCategory: 'People & Events',
        image: images.portait,
    },
    {
        id: 33,
        title: 'Contemporary Male Portrait',
        category: 'Portraits',
        mainCategory: 'People & Events',
        image: images.potraitGuy,
    },
    {
        id: 34,
        title: 'Maternity Portrait',
        category: 'Maternity & Babies',
        mainCategory: 'People & Events',
        image: images.pregnantChild,
    },
    // People & Events - Maternity & Babies
    {
        id: 40,
        title: 'Maternity Glow',
        category: 'Maternity & Babies',
        mainCategory: 'People & Events',
        image: images.babybum,
    },
    {
        id: 41,
        title: 'Newborn Portrait',
        category: 'Maternity & Babies',
        mainCategory: 'People & Events',
        image: images.baby1,
    },
    {
        id: 42,
        title: 'Baby Milestone',
        category: 'Maternity & Babies',
        mainCategory: 'People & Events',
        image: images.baby2,
    },
    {
        id: 43,
        title: 'Baby Studio Portrait',
        category: 'Maternity & Babies',
        mainCategory: 'People & Events',
        image: images.baby3,
    },
    {
        id: 44,
        title: 'Little One Portrait',
        category: 'Maternity & Babies',
        mainCategory: 'People & Events',
        image: images.baby4,
    },
    {
        id: 45,
        title: 'Baby Detail',
        category: 'Maternity & Babies',
        mainCategory: 'People & Events',
        image: images.baby5,
    },
    {
        id: 46,
        title: 'Sweet Baby Moment',
        category: 'Maternity & Babies',
        mainCategory: 'People & Events',
        image: images.baby6,
    },
    {
        id: 47,
        title: 'Baby Session',
        category: 'Maternity & Babies',
        mainCategory: 'People & Events',
        image: images.baby7,
    },
    {
        id: 48,
        title: 'Tiny Portrait',
        category: 'Maternity & Babies',
        mainCategory: 'People & Events',
        image: images.baby8,
    },
    {
        id: 49,
        title: 'Baby Keepsake',
        category: 'Maternity & Babies',
        mainCategory: 'People & Events',
        image: images.baby9,
    },
    // People & Events - Events
    {
        id: 13,
        title: 'Event Celebration',
        category: 'Events',
        mainCategory: 'People & Events',
        image: images.event01,
    },
    {
        id: 14,
        title: 'Grand Event Hall',
        category: 'Events',
        mainCategory: 'People & Events',
        image: images.event2,
    },
    {
        id: 15,
        title: 'Cinematic Event Space',
        category: 'Events',
        mainCategory: 'People & Events',
        image: images.event3,
    },
    {
        id: 16,
        title: 'Evening Event Design',
        category: 'Events',
        mainCategory: 'People & Events',
        image: images.event4,
    },
    {
        id: 17,
        title: 'Reception Venue',
        category: 'Events',
        mainCategory: 'People & Events',
        image: images.reception,
    },
    {
        id: 18,
        title: 'Reception Setup',
        category: 'Events',
        mainCategory: 'People & Events',
        image: images.receptionJpg,
    },
    // People & Events - Fashion
    {
        id: 19,
        title: 'Fashion Editorial',
        category: 'Fashion',
        mainCategory: 'People & Events',
        image: images.fashion,
    },
    {
        id: 20,
        title: 'Fashion Campaign',
        category: 'Fashion',
        mainCategory: 'People & Events',
        image: images.fashion2,
    },
    {
        id: 35,
        title: 'Model Fashion Portrait',
        category: 'Fashion',
        mainCategory: 'People & Events',
        image: images.model,
    },
    {
        id: 36,
        title: 'Model Editorial Look',
        category: 'Fashion',
        mainCategory: 'People & Events',
        image: images.model2,
    },
    {
        id: 37,
        title: 'Studio Model Session',
        category: 'Fashion',
        mainCategory: 'People & Events',
        image: images.model3,
    },
    {
        id: 38,
        title: 'Fashion Model Profile',
        category: 'Fashion',
        mainCategory: 'People & Events',
        image: images.model4,
    },
    {
        id: 39,
        title: 'Model Portfolio Image',
        category: 'Fashion',
        mainCategory: 'People & Events',
        image: images.model6,
    },
    // Business & Commercial - Product Photography
    {
        id: 21,
        title: 'Product Detail',
        category: 'Product Photography',
        mainCategory: 'Business & Commercial',
        image: images.product,
    },
    {
        id: 22,
        title: 'Studio Product Photo',
        category: 'Product Photography',
        mainCategory: 'Business & Commercial',
        image: images.productPhoto,
    },
    {
        id: 23,
        title: 'Commercial Product Photo',
        category: 'Product Photography',
        mainCategory: 'Business & Commercial',
        image: images.productPhoto2,
    },
    // Business & Commercial - Food Photography
    {
        id: 24,
        title: 'Reception Food Display',
        category: 'Food Photography',
        mainCategory: 'Business & Commercial',
        image: images.receptionFood,
    },
    {
        id: 25,
        title: 'Wedding Food Catering',
        category: 'Food Photography',
        mainCategory: 'Business & Commercial',
        image: images.weddingFood,
    },
    // Business & Commercial - Real Estate Photography
    {
        id: 26,
        title: 'Modern Real Estate Interior',
        category: 'Real Estate Photography',
        mainCategory: 'Business & Commercial',
        image: images.realEstate,
    },
    {
        id: 27,
        title: 'Residential Listing',
        category: 'Real Estate Photography',
        mainCategory: 'Business & Commercial',
        image: images.realEstate1,
    },
    {
        id: 28,
        title: 'Property Exterior',
        category: 'Real Estate Photography',
        mainCategory: 'Business & Commercial',
        image: images.realEstate2,
    },
    {
        id: 29,
        title: 'Luxury Property Detail',
        category: 'Real Estate Photography',
        mainCategory: 'Business & Commercial',
        image: images.realestate,
    },
    {
        id: 30,
        title: 'Architectural Real Estate',
        category: 'Real Estate Photography',
        mainCategory: 'Business & Commercial',
        image: images.realestate2,
    },
];

export const services = [
    // People & Events
    {
        id: 1,
        icon: FaCamera,
        title: "Weddings",
        category: "People & Events",
        description: "From the ceremony to the reception, we capture every moment of your special day with our comprehensive wedding photography services.",
        features: [
            "Pre-ceremony preparations",
            "Ceremony coverage",
            "Reception coverage",
            "High-resolution images",
            "Online gallery access",
            "Customizable packages"
        ],
        color: "gold"
    },
    {
        id: 2,
        icon: FaCamera,
        title: "Portraits",
        category: "People & Events",
        description: "Professional portrait photography for individuals, couples, and families with personalized styling and location selection.",
        features: [
            "Studio or outdoor sessions",
            "Professional styling consultation",
            "Multiple outfit changes",
            "Edited digital images",
            "Print packages available",
            "Fast turnaround time"
        ],
        color: "silver"
    },
    {
        id: 3,
        icon: FaCamera,
        title: "Events",
        category: "People & Events",
        description: "Capture the energy and excitement of your events with our experienced event photography team.",
        features: [
            "Full event coverage",
            "Candid and posed shots",
            "Real-time editing",
            "Quick delivery",
            "Multiple photographers available",
            "Custom albums and prints"
        ],
        color: "blue"
    },
    {
        id: 4,
        icon: FaCamera,
        title: "Fashion",
        category: "People & Events",
        description: "High-fashion photography that showcases style and elegance with professional styling and editing.",
        features: [
            "Professional styling",
            "High-end retouching",
            "Portfolio-ready images",
            "Magazine quality prints",
            "Trend-focused concepts",
            "Social media optimization"
        ],
        color: "purple"
    },
    // Business & Commercial
    {
        id: 5,
        icon: FaCamera,
        title: "Product Photography",
        category: "Business & Commercial",
        description: "Showcase your products in the best light with professional product photography that drives sales.",
        features: [
            "Studio lighting setup",
            "Multiple angles and closeups",
            "Lifestyle product shots",
            "Background options",
            "E-commerce optimization",
            "Fast delivery"
        ],
        color: "orange"
    },
    {
        id: 6,
        icon: FaCamera,
        title: "Food Photography",
        category: "Business & Commercial",
        description: "Appetizing food photography perfect for restaurants, catering, and culinary businesses.",
        features: [
            "Professional styling",
            "Appetizing presentation",
            "Menu-ready images",
            "Restaurant branding",
            "Social media content",
            "Quick turnaround"
        ],
        color: "red"
    },
    {
        id: 7,
        icon: FaCamera,
        title: "Real Estate Photography",
        category: "Business & Commercial",
        description: "Professional real estate photography that highlights property features and attracts buyers.",
        features: [
            "Interior and exterior shots",
            "Professional lighting",
            "Drone photography available",
            "Virtual tours",
            "MLS-ready images",
            "Fast editing"
        ],
        color: "green"
    },
    // Outdoor & Adventure
    {
        id: 10,
        icon: FaCamera,
        title: "Travel Photography",
        category: "Outdoor & Adventure",
        description: "Document your travel adventures with professional photography capturing culture and landscapes.",
        features: [
            "Destination expertise",
            "Cultural sensitivity",
            "Landscape and portrait mix",
            "Travel guide included",
            "Digital and print formats",
            "Story-telling focus"
        ],
        color: "teal"
    }
];

export const testimonials = [
    {
        id: 1,
        name: "Marina Silva",
        date: "Maio 2024",
        role: "Noiva",
        image: images.bride,
        quote: "Adorei trabalhar com a equipe! Foram incríveis capturando cada momento especial do meu casamento. As fotos são absolutamente lindas e profissionais.",
        rating: 5
    },
    {
        id: 2,
        name: "João Paulo",
        date: "Abril 2024",
        role: "Empresário",
        image: images.couple,
        quote: "Excelente trabalho em nosso evento corporativo! Profissionalismo de ponta, ótima comunicação e resultados que superaram minhas expectativas.",
        rating: 5
    },
    {
        id: 3,
        name: "Ana Carolina",
        date: "Março 2024",
        role: "Mãe",
        image: images.family4,
        quote: "As fotos da família saíram perfeitas! O fotógrafo soube colocar todos à vontade e capturou momentos genuínos e emocionantes. Super recomendo!",
        rating: 5
    },
    {
        id: 4,
        name: "Carlos Mendes",
        date: "Fevereiro 2024",
        role: "Restaurateur",
        image: images.receptionFood,
        quote: "Fantástico trabalho na fotografia de produtos! As imagens do nosso cardápio ficaram incríveis e aumentaram muito o interesse dos clientes.",
        rating: 5
    },
    {
        id: 5,
        name: "Fernanda Costa",
        date: "Janeiro 2024",
        role: "Noiva",
        image: images.littleBrideGroom,
        quote: "Não temos palavras para descrever o quanto amamos o trabalho de vocês! Cada foto é uma obra de arte. Obrigada por tornar nosso dia ainda mais especial.",
        rating: 5
    },
    {
        id: 6,
        name: "Roberto Oliveira",
        date: "Dezembro 2023",
        role: "Agente Imobiliário",
        image: images.reception,
        quote: "As fotos dos imóveis ficaram de tirar o fôlego! Aumentou bastante as visualizações dos anúncios. Profissionalismo impecável!",
        rating: 5
    },
    {
        id: 7,
        name: "Juliana Pereira",
        date: "Novembro 2023",
        role: "Modelo",
        image: images.littleGirl,
        quote: "Que experiência incrível! O fotógrafo tem um talento natural para capturar a essência das pessoas. Portfolio impecável, muito satisfeita!",
        rating: 5
    },
    {
        id: 8,
        name: "Felipe Santos",
        date: "Outubro 2023",
        role: "Eventos",
        image: images.coupleKiss,
        quote: "Professionalismo absoluto! Sua equipe capturou todos os destaques da festa. Excelente qualidade de imagem e entrega no prazo combinado.",
        rating: 5
    },
    // 2026 Testimonials
    {
        id: 9,
        name: "Camila Rodrigues",
        date: "Junho 2026",
        role: "Noiva",
        image: images.bride,
        quote: "Simplesmente perfeito! O fotografo foi muito atencioso e conseguiu capturar a emoção de cada momento. As fotos do meu casamento são incríveis!",
        rating: 5
    },
    {
        id: 10,
        name: "Lucas Ferreira",
        date: "Maio 2026",
        role: "Diretor de Marketing",
        image: images.receptionFood,
        quote: "Contratamos para fotos de produto e ficamos impressionados com o resultado. As imagens aumentaram nossas vendas em 40%. Muito obrigado!",
        rating: 5
    },
    {
        id: 11,
        name: "Beatriz Alves",
        date: "Abril 2026",
        role: "Gestora de Eventos",
        image: images.reception,
        quote: "Trabalhamos com diversos fotógrafos, mas este foi o melhor! Criatividade, pontualidade e qualidade impecável. Recomendo muito!",
        rating: 5
    },
    {
        id: 12,
        name: "Thiago Gomes",
        date: "Março 2026",
        role: "Empresário",
        image: images.coupleWithTrains,
        quote: "Contratei para fazer o book de minha empresa. O resultado foi profissional e elegante. Muito satisfeito com a qualidade das imagens.",
        rating: 5
    },
    {
        id: 13,
        name: "Gabriela Lima",
        date: "Fevereiro 2026",
        role: "Mãe",
        image: images.family4,
        quote: "Fotos de família nunca foram tão bonitas! O fotógrafo fez todo mundo se sentir confortável. Vamos fazer novamente ano que vem!",
        rating: 5
    },
    {
        id: 14,
        name: "Ricardo Barbosa",
        date: "Janeiro 2026",
        role: "Corretor Imobiliário",
        image: images.reception,
        quote: "As fotos em drone dos imóveis ficaram extraordinárias! Fechei 3 vendas em 2 semanas. Investimento que realmente compensa!",
        rating: 5
    },
    {
        id: 15,
        name: "Sophia Martins",
        date: "Junho 2026",
        role: "Proprietária de Restaurante",
        image: images.weddingFood,
        quote: "Perfeito para o cardápio do nosso restaurante! As fotos dos pratos ficaram tão apetitosas que aumentou bastante os pedidos. Excelente!",
        rating: 5
    },
    {
        id: 16,
        name: "Gustavo Perez",
        date: "Maio 2026",
        role: "Produtor de Moda",
        image: images.littleGirl,
        quote: "Fotos de moda que realmente impressionam! Portfolio profissional, retoque impecável e entrega rápida. Conseguiu capturar a essência da coleção!",
        rating: 5
    }
];

export const faqs = [
    {
        question: "Com quanta antecedência devo agendar meu ensaio?",
        answer: "Para casamentos e eventos grandes, o ideal é reservar com 2 a 4 meses de antecedência. Para ensaios individuais, familiares ou comerciais, normalmente conseguimos organizar a sessão com 1 a 3 semanas de prazo."
    },
    {
        question: "Vocês ajudam na escolha do local e do horário?",
        answer: "Sim. Indicamos locações que combinam com o estilo das fotos e priorizamos horários com luz mais bonita, como início da manhã ou fim da tarde, quando o ensaio é externo."
    },
    {
        question: "Quantas fotos vou receber?",
        answer: "A quantidade depende do pacote escolhido e do tipo de cobertura. Antes da contratação, alinhamos a estimativa de entrega para que você saiba exatamente o que está incluído."
    },
    {
        question: "As fotos são entregues tratadas?",
        answer: "Sim. Todas as fotos selecionadas passam por edição de cor, luz e acabamento. Retoques mais detalhados podem ser incluídos conforme o pacote ou solicitados separadamente."
    },
    {
        question: "Qual é o prazo de entrega?",
        answer: "Ensaios costumam ser entregues em até 15 dias úteis. Eventos e casamentos podem levar mais tempo, dependendo do volume de imagens e do tipo de edição combinada."
    },
    {
        question: "Como faço para reservar uma data?",
        answer: "Basta entrar em contato, informar o tipo de sessão e a data desejada. Após confirmarmos disponibilidade, enviamos as opções de pacote e concluímos a reserva com o pagamento do sinal."
    },
];

export default images
