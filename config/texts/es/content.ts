import { Content } from '../types';

export const CONTENT_ES: Content = {
  metadata: {
    title: 'Portafolio Profesional - Desarrollador Full Stack',
    description: 'Portafolio profesional de desarrollador con estética hacker',
  },
  nav: {
    about: 'Acerca de',
    techSkills: 'Habilidades Técnicas',
    softSkills: 'Habilidades Blandas',
    certifications: 'Certificaciones',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  hero: {
    title: 'Desarrollador Full Stack',
    subtitle: 'Construyendo el futuro con código',
    description:
      'Especializado en crear soluciones tecnológicas innovadoras con más de 5 años de experiencia en desarrollo web y móvil.',
    typewriterPhrases: [
      'console.log("Hola Mundo");',
      'npm start',
      'git push origin main',
    ],
  },
  about: {
    title: 'Acerca de Mí',
    content:
      'Soy un desarrollador apasionado por la tecnología y la innovación. Me especializo en crear aplicaciones web y móviles robustas y escalables. Mi enfoque está en escribir código limpio, mantenible y eficiente.',
  },
  techSkills: {
    title: 'Habilidades Técnicas',
    all: 'Todas',
  },
  softSkills: {
    title: 'Habilidades Blandas',
    all: 'Todas',
  },
  certifications: {
    title: 'Certificaciones',
    all: 'Todas',
  },
  projects: {
    title: 'Proyectos',
  },
  contact: {
    title: 'Contacto',
    email: 'email@ejemplo.com',
    phone: '+1 234 567 890',
    phoneLabel: 'Teléfono',
    location: 'Ciudad, País',
    locationLabel: 'Ubicación',
  },
  filters: {
    all: 'Todas',
  },
  footer: {
    description: 'Hecho con ❤️ y mucho ☕',
  },
  contactModal: {
    title: 'Enviar Mensaje',
    description:
      'Completa el formulario y me pondré en contacto contigo pronto.',
    firstName: 'Nombre',
    lastName: 'Apellido',
    email: 'Correo Electrónico',
    send: 'Enviar Mensaje',
    cancel: 'Cancelar',
    sending: 'Enviando...',
    success: '¡Mensaje Enviado!',
    successMessage:
      'Tu mensaje ha sido enviado correctamente. Te responderé pronto.',
    error: 'Error al Enviar',
    errorMessage: 'Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.',
    required: 'Este campo es obligatorio',
    invalidEmail: 'Ingresa un correo electrónico válido',
    tryAgain: 'Intentar de nuevo',
    autoCloseMessage: 'Este modal se cerrará automáticamente...',
  },
};
