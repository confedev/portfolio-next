import { Content } from '../types';

export const CONTENT_EN: Content = {
  metadata: {
    title: 'Professional Portfolio - Full Stack Developer',
    description: 'Professional developer portfolio with hacker aesthetic',
  },
  nav: {
    about: 'About',
    techSkills: 'Tech Skills',
    softSkills: 'Soft Skills',
    certifications: 'Certifications',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    title: 'Full Stack Developer',
    subtitle: 'Building the future with code',
    description:
      'Specialized in creating innovative technological solutions with over 5 years of experience in web and mobile development.',
    typewriterPhrases: [
      'console.log("Hello World");',
      'npm start',
      'git push origin main',
    ],
  },
  about: {
    title: 'About Me',
    content:
      "I'm a developer passionate about technology and innovation. I specialize in creating robust and scalable web and mobile applications. My focus is on writing clean, maintainable, and efficient code.",
  },
  techSkills: {
    title: 'Technical Skills',
    all: 'All',
  },
  softSkills: {
    title: 'Soft Skills',
    all: 'All',
  },
  certifications: {
    title: 'Certifications',
    all: 'All',
  },
  projects: {
    title: 'Projects',
  },
  contact: {
    title: 'Contact',
    email: 'email@example.com',
    phone: '+1 234 567 890',
    phoneLabel: 'Phone',
    location: 'City, Country',
    locationLabel: 'Location',
  },
  filters: {
    all: 'All',
  },
  footer: {
    description: 'Made with ❤️ and lots of ☕',
  },
  contactModal: {
    title: 'Send Message',
    description: "Fill out the form and I'll get back to you soon.",
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email Address',
    company: 'Company',
    phone: 'Phone',
    optional: '(optional)',
    send: 'Send Message',
    cancel: 'Cancel',
    sending: 'Sending...',
    success: 'Message Sent!',
    successMessage:
      "Your message has been sent successfully. I'll get back to you soon.",
    error: 'Send Error',
    errorMessage: 'There was a problem sending your message. Please try again.',
    required: 'This field is required',
    invalidEmail: 'Please enter a valid email address',
    tryAgain: 'Try Again',
    autoCloseMessage: 'This modal will close automatically...',
  },
};
