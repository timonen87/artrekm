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
            paragraph="Изготовление объемных световых букв представляет собой более трудоемкий процесс, поэтому они являются более дорогостоящими, чем короба. При изготовлении объемных букв применяют разные материалы, типы подсветки и технологии, которые дают возможность создать рекламную конструкцию любой формы и размера. Зачастую данные элементы сочетают с другими видами рекламы, чтобы выполнить оригинальный и неповторимый стиль. Объемные буквы бывают легкими и ажурными, или же массивными и тяжелыми. При их производстве используют акриловое стекло, ПВХ и другие материалы. Различное световое оформление дает возможность создать эффектные зрительные образы. "
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
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
