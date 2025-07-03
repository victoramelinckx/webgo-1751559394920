
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transforma tu negocio con una web lista en un día y soporte 24/7." cta1="Comienza Ahora" />
<How step1Title="Descubre potencial" step1Desc="Evalúa oportunidades de ventas online." step2Title="Aprende digital" step2Desc="Curso online para digitalizar ventas efectivamente." step3Title="Apoyo continuo" step3Desc="Soporte 24/7 para impulsar tus ventas." />
<Aboutus headline="WebGo: Digitaliza tus ventas ya" subheadline="Transformamos tu negocio en línea, sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Ventas Simplificadas" beneficio1="Curso online que elimina barreras digitales." beneficiotitulo2="Gestión Eficiente" beneficio2="Nos encargamos de todo por ti." />
<Services heading="Impulsa Tus Ventas Digitales" description="Conviértete en un experto en ventas online en tiempo récord." services={[{"name":"Diseño Web Rápido","icon":"bolt","description":"Entrega en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headphones","description":"Asistencia constante cuando la necesites."},{"name":"SEO Optimización","icon":"search","description":"Aparece primero en búsquedas."},{"name":"Gestión de Redes","icon":"share-alt","description":"Maximiza tu presencia digital."},{"name":"Campañas Digitales","icon":"chart-line","description":"Aumenta tus ventas con estrategias efectivas."},{"name":"Análisis de Mercado","icon":"chart-pie","description":"Entiende y alcanza mejor a tus clientes."}]} />
<BeforeAndAfter subheadline="Logramos resultados impactantes que transforman tus ideas en realidad." />
<Faq faqs={[{"pregunta":"¿Cómo el Curso de Ventas de WebGo puede ayudarme a digitalizar mi negocio?","respuesta":"El Curso de Ventas de WebGo te enseña paso a paso cómo vender online. Aprenderás desde cero, sin necesidad de experiencia previa, a captar clientes y aumentar tus ventas digitales, eliminando la dependencia de las recomendaciones boca a boca."},{"pregunta":"¿Qué beneficios ofrece el curso online de WebGo para dueños de pequeños negocios?","respuesta":"Nuestro curso online te permite aprender a tu ritmo, en cualquier momento y lugar. Además, está diseñado específicamente para dueños de pequeños negocios, ayudándote a generar ventas online sin necesidad de conocimientos técnicos previos."},{"pregunta":"¿Por qué debería invertir en el Curso de Ventas de WebGo si tengo poco tiempo?","respuesta":"El Curso de Ventas de WebGo está diseñado para ser eficiente y directo. Con lecciones cortas y prácticas, puedes aprender a tu propio ritmo y obtener resultados rápidos, optimizando el poco tiempo que tienes disponible."},{"pregunta":"¿Qué diferencia al Curso de Ventas de WebGo de otras ofertas en el mercado?","respuesta":"A diferencia de otros cursos, WebGo se centra en las necesidades específicas de los dueños de pequeños negocios en Santiago, ofreciendo estrategias prácticas y personalizadas para digitalizar tus ventas de manera efectiva."},{"pregunta":"¿Es necesario tener conocimientos previos para inscribirse en el Curso de Ventas de WebGo?","respuesta":"No, no necesitas tener experiencia previa. Nuestro curso está diseñado para enseñarte desde cero, haciendo que el proceso de aprender a vender online sea fácil y accesible para cualquier dueño de negocio."}]} />
<BookAppointment 
                      heading="Transforma Tus Recomendaciones en Ventas Online" 
                      description="Únete al Curso de Ventas de WebGo y aprende a digitalizar tu negocio. Invierte $1255 para descubrir cómo generar ventas online sin complicaciones."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
