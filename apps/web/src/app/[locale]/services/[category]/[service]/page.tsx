import { notFound } from "next/navigation";
import Services from "@/constants/services";
import ServiceLayout from "@/components/marketing/services/service-layout";
import FeatureSection from "@/components/marketing/services/feature-section";
import TestimonialsSection from "@/components/marketing/services/testimonials-section";
import FAQSection from "@/components/marketing/services/faq-section";
import { constructMetadata } from "@/lib/utils/metadata.server";
import { getTranslation } from "@/lib/translations.server";

type Props = {
  params: Promise<{
    category: string;
    service: string;
  }>;
};

function findService(category: string, service: string) {
  const categoryData = Services.find((s) => s.id === category);
  const subService = categoryData?.subServices.find((sub) => sub.id === service);
  return { categoryData, subService };
}

export async function generateMetadata({ params }: Props) {
  const { category, service } = await params;
  const { categoryData, subService } = findService(category, service);

  if (!categoryData || !subService) {
    const { t: tPage } = await getTranslation("app/services/[category]/[service]/page");
    return constructMetadata({
      title: tPage("metadata.not-found.title"),
      description: tPage("metadata.not-found.description"),
      noIndex: true,
    });
  }

  const { t: tCategory } = await getTranslation(`constants/services/${category}`);
  const { t: tService } = await getTranslation(`constants/services/${category}/${service}`);

  const categoryName = tCategory("name");
  const serviceName = tService("name");
  const serviceDescription = tService("description");

  return constructMetadata({
    title: `${serviceName} | ${categoryName}`,
    description: serviceDescription,
  });
}

export default async function ServicePage({ params }: Props) {
  const { category, service } = await params;
  const { categoryData, subService } = findService(category, service);

  if (!categoryData || !subService) {
    notFound();
  }

  const { t: tCategory } = await getTranslation(`constants/services/${category}`);
  const { t: tService } = await getTranslation(`constants/services/${category}/${service}`);
  const { t: tPage } = await getTranslation("app/services/[category]/[service]/page");

  const categoryName = tCategory("name");
  const serviceName = tService("name");
  const serviceNameLower = serviceName.toLowerCase();
  const serviceDescription = tService("description");
  const heroTitle = tService("hero.title");
  const heroDescription = tService("hero.description");

  return (
    <ServiceLayout
      title={`${serviceName} | ${categoryName}`}
      description={serviceDescription}
      heroTitle={heroTitle || serviceName}
      heroDescription={heroDescription || serviceDescription}
    >
      <FeatureSection
        categoryId={category}
        serviceId={service}
        title={tPage("features.title", { service: serviceNameLower })}
        description={tPage("features.description", { service: serviceNameLower })}
        type="features"
      />

      <FeatureSection
        categoryId={category}
        serviceId={service}
        title={tPage("benefits.title", { service: serviceName })}
        description={tPage("benefits.description", { service: serviceNameLower })}
        type="benefits"
        reversed
      />

      <TestimonialsSection
        categoryId={category}
        serviceId={service}
        title={tPage("testimonials.title")}
        description={tPage("testimonials.description", { service: serviceNameLower })}
      />

      <FAQSection
        categoryId={category}
        serviceId={service}
        title={tPage("faq.title")}
        description={tPage("faq.description", { service: serviceNameLower })}
      />

      <FeatureSection
        categoryId={category}
        serviceId={service}
        title={tPage("complementary.title")}
        description={tPage("complementary.description", { service: serviceNameLower })}
        type="complementary"
      />
    </ServiceLayout>
  );
}

export async function generateStaticParams() {
  const paths: { category: string; service: string }[] = [];

  Services.forEach((category) => {
    category.subServices.forEach((service) => {
      paths.push({
        category: category.id,
        service: service.id,
      });
    });
  });

  return paths;
}
