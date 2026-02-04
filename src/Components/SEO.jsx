import { Helmet } from 'react-helmet-async';
import Logo from '../assets/logo.svg';

export default function SEO({ title, description, keywords, image, url }) {
  const siteName = "Grupo Matti Ácaro";
  const defaultImage = Logo; // Coloque a URL real da sua logo/capa aqui

  return (
    <Helmet>
      {/* Padrão */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Facebook / WhatsApp (Open Graph) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Dados Estruturados (JSON-LD) para Negócio Local */}
      <script type='application/ld+json'>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService", // Ou "ProfessionalService"
          "name": "Grupo Matti Ácaro",
          "image": defaultImage,
          "description": "Especialistas em higienização de estofados e manutenção autorizada Rainbow em SP.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Jaime de Caires, 174", // Preencha com o endereço real se tiver
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "addressCountry": "BR"
          },
          "priceRange": "$$",
          "telephone": "+5511921212503", // Seu número real
          "url": "https://www.grupomattiacaro.com.br"
        })}
      </script>
    </Helmet>
  );
}