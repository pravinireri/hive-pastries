// Product data
const products = [
  {
    id: 1,
    name: 'Honey Croissant',
    category: 'pastries',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Buttery croissant glazed with our signature honey.'
  },
  {
    id: 2,
    name: 'Honeycomb Cake',
    category: 'cakes',
    price: '$6.75',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Light sponge cake with honey buttercream and honeycomb pieces.'
  },
  {
    id: 3,
    name: 'Sourdough Bread',
    category: 'bread',
    price: '$5.25',
    image: 'https://images.unsplash.com/photo-1585478259715-1c434ae5a9f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Traditional sourdough with a perfect crust and soft interior.'
  },
  {
    id: 4,
    name: 'Honey Lavender Scones',
    category: 'pastries',
    price: '$3.95',
    image: 'https://images.unsplash.com/photo-1635342219731-4ae4df0b272e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Delicate scones infused with lavender and honey.'
  },
  {
    id: 5,
    name: 'Honey Almond Tart',
    category: 'honey',
    price: '$5.50',
    image: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Crisp tart filled with honey-almond cream and caramelized almonds.'
  },
  {
    id: 6,
    name: 'Cinnamon Brioche',
    category: 'bread',
    price: '$4.95',
    image: 'https://images.unsplash.com/photo-1648141139885-3716515239fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Soft brioche bread swirled with cinnamon and honey.'
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Emma Thompson',
    role: 'Food Blogger',
    avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
    content: "The honey croissants at Hive Pastries are absolutely divine. The perfect balance of buttery goodness and sweet honey makes them irresistible. I can't start my morning without one!",
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Local Customer',
    avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    content: 'I ordered a birthday cake from Hive Pastries and it exceeded all expectations. Not only was it stunning to look at, but the taste was out of this world. Everyone at the party was impressed!',
    rating: 5
  },
  {
    id: 3,
    name: 'Sarah Kim',
    role: 'Coffee Shop Owner',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    content: 'We source our pastries exclusively from Hive Pastries for our coffee shop. The quality and consistency are unmatched, and our customers absolutely love them. The honey almond tarts are a bestseller!',
    rating: 5
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Food Critic',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
    content: 'In a city full of bakeries, Hive Pastries stands out for their attention to detail and commitment to quality. Their bread has the perfect crust and their pastries are light and flavorful. A true gem!',
    rating: 4
  }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const productsGrid = document.getElementById('products-grid');
const categoryButtons = document.querySelectorAll('.category-tabs button');
const testimonialsSlider = document.getElementById('testimonials-slider');
const testimonialIndicators = document.getElementById('testimonials-indicators');
const prevTestimonialBtn = document.getElementById('prev-testimonial');
const nextTestimonialBtn = document.getElementById('next-testimonial');
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const currentYearSpan = document.getElementById('current-year');

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear();

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  
  // Change hamburger to X
  const spans = mobileMenuBtn.querySelectorAll('span');
  if (mobileMenu.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    const spans = mobileMenuBtn.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  });
});

// Products filtering
function renderProducts(category = 'all') {
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);
  
  productsGrid.innerHTML = '';
  
  filteredProducts.forEach((product, index) => {
    const delay = 0.1 * index;
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.style.animationDelay = `${delay}s`;
    
    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-content">
        <div class="product-header">
          <h3>${product.name}</h3>
          <span class="product-price">${product.price}</span>
        </div>
        <p class="product-description">${product.description}</p>
        <a href="#" class="product-link">Learn more</a>
      </div>
    `;
    
    productsGrid.appendChild(productCard);
  });
}

// Initialize products
renderProducts();

// Category tab switching
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    renderProducts(button.dataset.category);
  });
});

// Testimonials Slider
let activeTestimonialIndex = 0;

function renderTestimonials() {
  testimonialsSlider.innerHTML = '';
  testimonialIndicators.innerHTML = '';
  
  testimonials.forEach((testimonial, index) => {
    // Create testimonial
    const testimonialEl = document.createElement('div');
    testimonialEl.className = `testimonial ${index === activeTestimonialIndex ? 'active' : index < activeTestimonialIndex ? 'prev' : 'next'}`;
    
    // Generate stars
    let stars = '';
    for (let i = 0; i < 5; i++) {
      stars += `<span class="star">${i < testimonial.rating ? '★' : '☆'}</span>`;
    }
    
    testimonialEl.innerHTML = `
      <div class="testimonial-card">
        <div class="testimonial-content">
          <div class="testimonial-avatar">
            <img src="${testimonial.avatar}" alt="${testimonial.name}">
          </div>
          <div class="testimonial-text">
            <div class="testimonial-rating">
              ${stars}
            </div>
            <p class="testimonial-quote">"${testimonial.content}"</p>
            <h4 class="testimonial-author">${testimonial.name}</h4>
            <p class="testimonial-role">${testimonial.role}</p>
          </div>
        </div>
      </div>
    `;
    
    testimonialsSlider.appendChild(testimonialEl);
    
    // Create indicator
    const indicator = document.createElement('button');
    indicator.className = `indicator ${index === activeTestimonialIndex ? 'active' : ''}`;
    indicator.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
    indicator.addEventListener('click', () => changeTestimonial(index));
    
    testimonialIndicators.appendChild(indicator);
  });
}

function changeTestimonial(index) {
  activeTestimonialIndex = index;
  renderTestimonials();
}

function nextTestimonial() {
  activeTestimonialIndex = (activeTestimonialIndex + 1) % testimonials.length;
  renderTestimonials();
}

function prevTestimonial() {
  activeTestimonialIndex = (activeTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonials();
}

// Initialize testimonials
renderTestimonials();

// Testimonial navigation
nextTestimonialBtn.addEventListener('click', nextTestimonial);
prevTestimonialBtn.addEventListener('click', prevTestimonial);

// Auto rotate testimonials
setInterval(nextTestimonial, 8000);

// Contact form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Simulate form submission
  contactForm.style.display = 'none';
  formSuccess.classList.add('visible');
  
  // Reset form
  contactForm.reset();
  
  // After 5 seconds, hide success message and show form again
  setTimeout(() => {
    formSuccess.classList.remove('visible');
    contactForm.style.display = 'block';
  }, 5000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for the fixed navbar
        behavior: 'smooth'
      });
    }
  });
});

// Animate elements on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.section-header, .about-content, .about-image, .location-content, .location-map');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight * 0.85) {
      if (element.classList.contains('section-header')) {
        element.style.animation = 'slideUp 1s ease forwards';
      } else if (element.classList.contains('about-content') || element.classList.contains('location-content')) {
        element.style.animation = 'slideRight 1s ease forwards';
      } else {
        element.style.animation = 'scaleIn 1s ease forwards';
      }
    }
  });
}

// Initialize animation on scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
