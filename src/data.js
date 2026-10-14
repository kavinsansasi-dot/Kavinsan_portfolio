export const profile = {
  name: 'Kavinsan Sasikumar',
  email: 'kavinsansasi@gmail.com',
  phone: '+94 77 2315614',
  github: 'https://github.com/kavinsansasi-dot',
  linkedin: 'https://linkedin.com/in/kavinsan-sasikumar',
  location: 'Malabe, Colombo, Sri Lanka',
  summary:
    'Full-stack developer specialising in the MERN stack and REST API design. I build multi-role platforms with secure authentication, payments and real-time features, and also make mobile apps with Flutter and Kotlin.',
}

export const currentYear = new Date().getFullYear()

export const projects = [
  {
    title: 'Hotel Booking Platform',
    category: 'Full-stack · Travel',
    number: '01',
    repo: 'Hotel-Booking-Platform',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Cloudinary', 'Nodemailer', 'JWT'],
    description:
      'Customers search, book and pay online; owners and admins manage hotels, rooms and reviews.',
    highlights: [
      'Three roles (customer, hotel owner, admin) with JWT authentication, bcrypt hashing and role-based route authorization.',
      'Stripe Payment Intents with server-side verification, so a booking is confirmed only after payment succeeds and no card data is stored.',
      'REST API across eight modules (auth, hotels, rooms, bookings, payments, reviews, owner, admin) and five data models.',
      'Hotel image upload with Multer and Cloudinary, booking confirmation emails with Nodemailer, an admin approval workflow, and owner review replies.',
      'React frontend with React Router, React Hook Form and Stripe Elements, plus separate dashboards for each role.',
    ],
  },
  {
    title: 'Colombo Quick Bites',
    category: 'Full-stack · Food ordering',
    number: '02',
    repo: 'Colombo-Quick-Bites',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'Tailwind CSS'],
    description:
      'A food ordering system where customers place orders, staff process them with live status updates, and admins manage the menu and inventory.',
    highlights: [
      'MERN platform with admin, staff and customer roles, JWT authentication and bcrypt hashing.',
      'Real-time order tracking with Socket.io rooms.',
      'REST API with seven modules (auth, users, menu, orders, inventory, promotions, feedback), request validation and centralized error handling.',
      'Admin and staff dashboards for menu management with image upload, inventory, promotions, feedback and users.',
      'React frontend using React Router, Context API (auth and cart), React Query and Tailwind CSS.',
    ],
  },
  {
    title: 'Northstar POS',
    category: 'Mobile · Retail',
    number: '03',
    repo: 'Northstar-POS',
    stack: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Riverpod'],
    description:
      'An inventory and billing app for small retail shops, running on web and Android tablets.',
    highlights: [
      'Flutter frontend backed by a Node.js and Express REST API and MongoDB.',
      'JWT authentication with role-based access control (admin and cashier) on API routes and app navigation.',
      'Billing flow with cart, discount, tax, cash/card/UPI payments and automatic stock deduction, using atomic updates with rollback to prevent overselling.',
      'Admin dashboard with daily sales, bill count, top products, low-stock alerts and a weekly sales chart.',
      'Branded A4 and 80mm thermal PDF invoices, and a responsive light/dark UI with Riverpod and go_router.',
    ],
  },
  {
    title: 'UI E-Learn',
    category: 'Full-stack · Education',
    number: '04',
    repo: 'UI-E-Learn-E-Learning-Platform',
    stack: ['React (Vite)', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    description:
      'An e-learning platform where instructors manage courses and assessments, students enrol and submit work, and admins oversee the platform.',
    highlights: [
      'Student, instructor and admin roles with JWT authentication and middleware-protected routes.',
      'Course management, assessments, submissions, marks and a payment-submission flow.',
      'React frontend with separate views per role.',
    ],
  },
  {
    title: 'ImiliPocket',
    category: 'Mobile · Personal finance',
    number: '05',
    repo: 'ImiliPocket',
    stack: ['Kotlin', 'Android', 'Material Design', 'RecyclerView', 'SharedPreferences', 'Gson'],
    description:
      'A native Android personal finance tracker with onboarding, sign-in and sign-up, income and expense tracking by category, and monthly budgets.',
    highlights: [],
  },
  {
    title: 'MGT',
    category: 'Full-stack · Payments',
    number: '06',
    repo: 'MGT-Booking-Payment-Module-',
    stack: ['React', 'Express.js', 'MongoDB'],
    description:
      'A booking payment module with create, view, edit and delete screens backed by a REST API.',
    highlights: [],
  },
]

export const skills = [
  { title: 'Languages', detail: 'JavaScript (ES6+), Dart, Kotlin' },
  {
    title: 'Frontend',
    detail: 'React.js (Vite), React Router, Context API, React Query, React Hook Form, Tailwind CSS, HTML, CSS',
  },
  { title: 'Backend', detail: 'Node.js, Express.js, RESTful APIs, Socket.io, Multer' },
  { title: 'Databases', detail: 'MongoDB, Mongoose' },
  {
    title: 'Auth & security',
    detail: 'JWT, bcrypt, role-based access control, CORS configuration, request validation',
  },
  {
    title: 'Integrations',
    detail: 'Stripe (Payment Intents), Cloudinary, Nodemailer, PDF invoice generation',
  },
  {
    title: 'Mobile',
    detail: 'Flutter, Riverpod, go_router, Android (Kotlin), Material Design',
  },
  { title: 'Tools', detail: 'Git, GitHub, npm, Vite' },
]

export const familiarWith = [
  'Java',
  'Python',
  'PHP',
  'C',
  'C++',
  'Spring Boot',
  'Next.js',
  'React Native',
  'MySQL',
  'PostgreSQL',
  'SQL Server',
  'Docker',
  'Kubernetes',
  'microservices',
  'SOLID',
  'YOLOv8',
  'OpenCV',
]

export const education = [
  {
    degree: 'BSc (Hons) in Information Technology',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    dates: 'Oct 2022 — present',
  },
  {
    degree: 'Assured Diploma in Information Technology (DITEC)',
    institution: 'Esoft Metro Campus',
    dates: 'May 2023 — May 2024',
  },
  {
    degree: 'Board of Secondary Education',
    institution: 'J/Jaffna Hindu College',
    dates: 'Jan 2013 — Feb 2022',
  },
]
