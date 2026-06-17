export type OfferStatus = 'active' | 'upcoming' | 'closed';

export interface TrainingItem {
  title: string;
  description: string;
}

export interface OfferPhase {
  id: 'day1' | 'day2' | 'day3';
  label: string;
  title: string;
  description: string;
  priceUsd: number;
  savingsText: string;
  discountLabel: string;
  ctaLabel: string;
  status: OfferStatus;
  startAt?: string;
  endAt?: string;
  countdownTarget?: string;
  ctaHref?: string;
  availabilityNote?: string;
}

export const waitlistLink =
  'https://chat.whatsapp.com/CIhFvZC60A662j6QGuxiNs?mode=gi_t';

const checkoutLink = 'https://pay.hotmart.com/Y103097499K?off=zi9wfqaz';
export const primaryBannerCtaLabel = 'APROVECHAR OFERTA AHORA';
export const primaryOfferCtaLabel = 'Acceder al beneficio exclusivo';
export const primaryOfferBannerText = '🔥 ¡ÚLTIMAS HORAS! 63% DE DESCUENTO DISPONIBLE';

export const trainingItems: TrainingItem[] = [
  {
    title: 'Método de grabación de Samy Gutiérrez',
    description:
      'Con + de 30 clases para que aprendas a crear contenido en camilla.',
  },
  {
    title: 'Clase guiada',
    description:
      'Edición estética de videos en CapCut.',
  },
  {
    title: 'Descargable + Video guiado',
    description:
      'Aprende a configurar tu celular.',
  },
  {
    title: 'Masterclass',
    description:
      'Aprende a armar tu cabina.',
  },
  {
    title: 'Clases bonus especiales',
    description:
      'Cómo crear tu bio link, agenda a tus clientes en Google Calendar y aprende a duplicar tu pantalla.',
  },
  {
    title: 'Descargable con +50 ángulos estéticos para recrear',
    description: 'Una guía práctica para inspirarte y grabar con mayor intención.',
  },
  {
    title: 'eBook con listado de herramientas a comprar',
    description:
      'Todo lo necesario para montar un setup más profesional.',
  },
];

export const totalTrainingValueUsd = 397;

export const launchNarrative = {
  intro: [
    'Si sabes que haces un buen trabajo, pero tus videos no lo demuestran…',
    'Empieza a mostrar tu técnica con contenido que eleve su valor y haga que tu servicio se perciba como una experiencia premium.',
    'Dentro de Impacto Visual tienes el método exacto para lograrlo, atraer más clientes y aumentar tus ventas.',
  ],
  highlight: [
    'Y aunque este programa está valorado en 397 USD, hoy puedes acceder por solo 167 USD.',
    'Una oportunidad real para empezar ahora, sin seguir postergándote.',
  ],
};

// Evergreen single offer at 167 USD (matches launch copy "hoy puedes acceder por
// solo 167 USD"). No startAt/endAt → resolveOfferStatus returns the literal
// status ('active'), and the client-side date re-check falls back to 'active'
// too — so the offer stays permanently open to sell instead of auto-closing on
// the old April phase dates.
const phaseConfigs: OfferPhase[] = [
  {
    id: 'day2',
    label: 'OFERTA ESPECIAL',
    title: 'Acceso oficial',
    description:
      'Tu trabajo merece ser visto, valorado y reconocido. Empieza a mostrarlo como una profesional.',
    priceUsd: 167,
    savingsText: 'Ahorras 230 USD',
    discountLabel: '58% OFF',
    ctaLabel: 'Reservar mi lugar',
    status: 'active',
    ctaHref: 'https://pay.hotmart.com/Y103097499K?off=pd5w67pt',
  },
];

function resolveOfferStatus(phase: OfferPhase, now = new Date()): OfferStatus {
  if (phase.startAt && phase.endAt) {
    const nowTime = now.getTime();
    const startTime = new Date(phase.startAt).getTime();
    const endTime = new Date(phase.endAt).getTime();

    if (nowTime < startTime) {
      return 'upcoming';
    }

    if (nowTime >= endTime) {
      return 'closed';
    }

    return 'active';
  }

  return phase.status;
}

export const offerPhases: OfferPhase[] = phaseConfigs.map((phase) => ({
  ...phase,
  status: resolveOfferStatus(phase),
}));

export const activeOffer =
  offerPhases.find((phase) => phase.status === 'active') ?? null;
export const upcomingOffer =
  offerPhases.find((phase) => phase.status === 'upcoming') ?? null;
export const allOffersClosed = offerPhases.every((phase) => phase.status === 'closed');

export function getHeroBannerText() {
  return primaryOfferBannerText;
}
