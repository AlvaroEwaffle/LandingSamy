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

export const launchNarrative =
  'Quiero que este camino sea posible para ti ahora mismo. Por eso, en lugar del precio oficial, diseñé una ventana de beneficios de 3 días. Es mi forma de premiar a quienes toman acción rápido: abrimos con el descuento más grande y el precio irá subiendo poco a poco, así que asegúrate de aprovechar el mejor momento.';

const phaseConfigs: OfferPhase[] = [
  {
    id: 'day1',
    label: 'FASE 1',
    title: 'Beneficio exclusivo',
    description:
      'Un acceso especial creado únicamente para quienes ya son parte de nuestra comunidad, antes de que se abran las puertas al público.',
    priceUsd: 137,
    savingsText: 'Ahorras 260 USD',
    discountLabel: '65% OFF',
    ctaLabel: primaryOfferCtaLabel,
    status: 'upcoming',
    startAt: '2026-04-09T17:00:00-04:00',
    endAt: '2026-04-10T23:59:00-04:00',
    countdownTarget: '2026-04-09T17:00:00-04:00',
    ctaHref: checkoutLink,
    availabilityNote: 'Se activa el 09/04/2026 a las 17:00 y cierra el 10/04/2026 a las 23:59.',
  },
  {
    id: 'day2',
    label: 'FASE 2',
    title: '',
    description:
      'Tu trabajo merece ser visto, valorado y reconocido. Empieza a mostrarlo como una profesional.',
    priceUsd: 167,
    savingsText: 'Ahorras 58%',
    discountLabel: '58% OFF',
    ctaLabel: 'Reservar mi lugar',
    status: 'upcoming',
    startAt: '2026-04-11T00:00:00-04:00',
    endAt: '2026-04-11T23:59:00-04:00',
    countdownTarget: '2026-04-11T00:00:00-04:00',
    ctaHref: 'https://pay.hotmart.com/Y103097499K?off=pd5w67pt',
    availabilityNote: 'Se activa el 11/04/2026 a las 00:00 y cierra el mismo día a las 23:59.',
  },
  {
    id: 'day3',
    label: 'FASE 3',
    title: '',
    description:
      'Una formación diseñada con un valor de 397, a la que hoy puedes acceder por 197.',
    priceUsd: 197,
    savingsText: 'Ahorras 50%',
    discountLabel: '50% OFF',
    ctaLabel: 'Quiero elevar mi contenido',
    status: 'upcoming',
    startAt: '2026-04-12T00:00:00-04:00',
    endAt: '2026-04-13T23:59:00-04:00',
    countdownTarget: '2026-04-12T00:00:00-04:00',
    ctaHref: 'https://pay.hotmart.com/Y103097499K?off=xtunm0a0',
    availabilityNote: 'Se activa el 12/04/2026 a las 00:00 y cierra el 13/04/2026 a las 23:59.',
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
