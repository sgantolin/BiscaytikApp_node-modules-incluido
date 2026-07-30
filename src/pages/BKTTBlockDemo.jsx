import BKTTBlock from '../shared/components/BKTTBlock';

import playa from '../assets/themes/default/media/playa.png';
import barca from '../assets/themes/default/media/barca.jpg';
import canoa from '../assets/themes/default/media/canoa.jpg';
import summerFest from '../assets/themes/default/media/summerFest.jpg';
import iglesia from '../assets/themes/default/media/iglesia.jpg';
import rio from '../assets/themes/default/media/rio.jpg';
import patrimonioArbolConexiones
  from '../assets/themes/default/media/patrimonio/patrimonio-arbol-conexiones.png';
import patrimonioEntradasGrupos
  from '../assets/themes/default/media/patrimonio/patrimonio-entradas-grupos.png';
import patrimonioVisitasGuiadas
  from '../assets/themes/default/media/patrimonio/patrimonio-visitas-guiadas.png';
import patrimonioExposicionTextura
  from '../assets/themes/default/media/patrimonio/patrimonio-exposicion-textura.jpg';

const Section = ({ label, children }) => (
  <section style={{ marginBottom: '3rem' }}>
    <div className="container" style={{ marginBottom: '0.75rem' }}>
      <h2 style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#888', margin: 0 }}>
        {label}
      </h2>
    </div>
    {children}
  </section>
);

function BKTTBlockDemo() {
  return (
    <div style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>

      {/* ── 1. text-image ─────────────────────────────────────────────── */}
      <Section label='layout="text-image" — título + botón + imagen'>
        <BKTTBlock
          layout="text-image"
          backgroundColor="linear-gradient(90deg, #1e5b90 0%, #2f92e5 100%)"
          title="Visita Plentzia en 1, 2 días o quédate aquí"
          button={{ label: 'Planificar viaje', icon: 'fa-light fa-calendar', link: '/listado' }}
          image={playa}
          alt="Playa de Plentzia"
        />
      </Section>

      {/* ── 2. image-text ─────────────────────────────────────────────── */}
      <Section label='layout="image-text" — imagen a la izquierda'>
        <BKTTBlock
          layout="image-text"
          backgroundColor="linear-gradient(90deg, #2f92e5 0%, #1e5b90 100%)"
          title="Descubre la bahía en directo"
          description="Consulta el estado del mar y los eventos en tiempo real desde cualquier dispositivo."
          button={{ label: 'Ver más', endIcon: 'fa-light fa-arrow-right', link: '/listado' }}
          image={barca}
          alt="Barca en la bahía"
        />
      </Section>

      {/* ── 3. text-cards ─────────────────────────────────────────────── */}
      <Section label='layout="text-cards" — título + botón + tarjetas flotantes'>
        <BKTTBlock
          layout="text-cards"
          backgroundColor="linear-gradient(90deg, #1e5b90 0%, #2f92e5 100%)"
          title="Planes para todos los gustos"
          button={{ label: 'Ver agenda', icon: 'fa-light fa-calendar', link: '/listado' }}
          injectedCards={[
            { image: barca,      title: 'Plan cultural de un día' },
            { image: summerFest, title: 'Summer Plentzia' },
            { image: canoa,      title: 'Ruta acuática' },
          ]}
        />
      </Section>

      {/* ── 4. split ──────────────────────────────────────────────────── */}
      <Section label='layout="split" — imagen izquierda + texto derecha (align stretch)'>
        <BKTTBlock
          layout="split"
          backgroundColor="#f8f5ef"
          gap="0"
          align="stretch"
          sections={[
            {
              id: 'split-image',
              image: patrimonioArbolConexiones,
              alt: 'Ilustración del patrimonio de Bizkaia',
            },
            {
              id: 'split-content',
              title: 'Artea y el gran patrimonio de Bizkaia',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              button: {
                label: 'Saber más',
                href: '/patrimonio',
                endIcon: 'fa-light fa-arrow-right',
              },
              extra: { icon: 'fa-light fa-circle-info' },
            },
          ]}
        />
      </Section>

      {/* ── 5. split invertido ────────────────────────────────────────── */}
      <Section label='layout="split" — texto izquierda + imagen derecha'>
        <BKTTBlock
          layout="split"
          backgroundColor="#eef4fb"
          gap="0"
          align="stretch"
          sections={[
            {
              id: 'split-text',
              title: 'Talleres y visitas guiadas',
              description: 'Descubre el patrimonio con nuestros guías especializados. Grupos reducidos y experiencias únicas.',
              button: {
                label: 'Reservar plaza',
                href: '/patrimonio',
                endIcon: 'fa-light fa-arrow-right',
              },
            },
            {
              id: 'split-img',
              image: patrimonioVisitasGuiadas,
              alt: 'Visitas guiadas',
            },
          ]}
        />
      </Section>

      {/* ── 6. cards ──────────────────────────────────────────────────── */}
      <Section label='layout="cards" — columnas de imagen + texto + botón'>
        <div className="container">
          <BKTTBlock
            layout="cards"
            backgroundColor="#ffffff"
            gap="4rem"
            align="start"
            sections={[
              {
                id: 'card-1',
                image: patrimonioEntradasGrupos,
                alt: 'Entradas para grupos',
                title: 'Entradas para grupos',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus aliquet lectus.',
                button: { label: 'Más información', href: '/patrimonio', endIcon: 'fa-light fa-arrow-right' },
              },
              {
                id: 'card-2',
                image: patrimonioVisitasGuiadas,
                alt: 'Visitas guiadas',
                title: 'Talleres y visitas guiadas',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus aliquet lectus.',
                button: { label: 'Más información', href: '/patrimonio', endIcon: 'fa-light fa-arrow-right' },
              },
            ]}
          />
        </div>
      </Section>

      {/* ── 7. cards — 3 columnas ─────────────────────────────────────── */}
      <Section label='layout="cards" — 3 columnas'>
        <div className="container">
          <BKTTBlock
            layout="cards"
            backgroundColor="#f5f5f5"
            gap="2rem"
            align="start"
            sections={[
              {
                id: 'c1',
                image: barca,
                alt: 'Barca',
                title: 'Ruta en barca',
                description: 'Recorre la bahía a bordo de una embarcación tradicional.',
                button: { label: 'Ver ruta', href: '/listado', endIcon: 'fa-light fa-arrow-right' },
              },
              {
                id: 'c2',
                image: iglesia,
                alt: 'Iglesia',
                title: 'Casco histórico',
                description: 'Pasea por las calles del casco histórico y descubre su patrimonio.',
                button: { label: 'Ver ruta', href: '/listado', endIcon: 'fa-light fa-arrow-right' },
              },
              {
                id: 'c3',
                image: rio,
                alt: 'Río',
                title: 'Ruta por el río',
                description: 'Sigue el curso del río Butrón entre bosques y caseríos.',
                button: { label: 'Ver ruta', href: '/listado', endIcon: 'fa-light fa-arrow-right' },
              },
            ]}
          />
        </div>
      </Section>

      {/* ── 8. text-image con backgroundImage + overlay ───────────────── */}
      <Section label='layout="text-image" — backgroundImage + overlayColor'>
        <BKTTBlock
          layout="text-image"
          backgroundImage={patrimonioExposicionTextura}
          overlayColor="rgba(100, 5, 5, 0.90)"
          title='No te pierdas la exposición "Todo está conectado"'
          button={{ label: 'Reserva las entradas', icon: 'fa-light fa-calendar', link: '/listado' }}
        />
      </Section>

      {/* ── 9. split con eyebrow ──────────────────────────────────────── */}
      <Section label='layout="split" — con eyebrow y sin botón'>
        <BKTTBlock
          layout="split"
          backgroundColor="#1a1a2e"
          gap="0"
          align="stretch"
          sections={[
            {
              id: 'dark-img',
              image: summerFest,
              alt: 'SummerFest',
            },
            {
              id: 'dark-text',
              eyebrow: 'Próximamente',
              title: 'SummerFest 2026',
              description: 'Tres días de música, gastronomía y cultura frente al mar. No te lo pierdas.',
              contentClassName: 'BKTT-Block__content--dark',
            },
          ]}
        />
      </Section>

      {/* ── 10. single — una sola columna centrada ────────────────────── */}
      <Section label='layout="single" — bloque centrado de texto'>
        <div className="container">
          <BKTTBlock
            layout="single"
            backgroundColor="#f0f7ff"
            sections={[
              {
                id: 'single',
                eyebrow: 'Bienvenido',
                title: 'Descubre todo lo que Plentzia tiene para ti',
                description: 'Agenda cultural, rutas, alojamientos y mucho más en un solo lugar.',
                button: { label: 'Explorar', link: '/listado', endIcon: 'fa-light fa-arrow-right' },
                className: 'is-centered',
              },
            ]}
          />
        </div>
      </Section>

      {/* ── 11. imageFilter ───────────────────────────────────────────── */}
      <Section label='layout="split" — imageFilter="grayscale(1)"'>
        <BKTTBlock
          layout="split"
          backgroundColor="#fbf8f1"
          gap="0"
          align="stretch"
          imageFilter="grayscale(1)"
          sections={[
            {
              id: 'gs-img',
              image: patrimonioArbolConexiones,
              alt: 'Patrimonio en blanco y negro',
            },
            {
              id: 'gs-text',
              title: 'Patrimonio en blanco y negro',
              description: 'El filtro grayscale se aplica a la imagen mediante la prop imageFilter.',
              button: { label: 'Ver más', href: '/patrimonio', endIcon: 'fa-light fa-arrow-right' },
            },
          ]}
        />
      </Section>

    </div>
  );
}

export default BKTTBlockDemo;
