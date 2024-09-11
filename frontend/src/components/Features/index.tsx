import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Наши услуги "
            paragraph="Изготовление объемных световых букв представляет собой более трудоемкий процесс, поэтому они являются более дорогостоящими, чем короба. При изготовлении объемных букв применяют разные материалы, типы подсветки и технологии, которые дают возможность создать рекламную конструкцию любой формы и размера.  "
            center
          />

          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
