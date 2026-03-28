import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

const SEO = ({
  title = "Chiptuningfile.de – Professionelles Chiptuning seit über 14 Jahren",
  description = "Professionelles Chiptuning für PKW, LKW und Nutzfahrzeuge. Stage 1-3 Tuning, DSG Optimierung, Prüfstand-getestete Files.",
  canonical,
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default SEO;
