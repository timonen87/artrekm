import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[600px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              {/* <Image
                src="/images/about/main.png"
                alt="about image"
              
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                width={700} height={450}
              /> */}
             <Image
                src="/images/about/amara-blogs-simple-world-map-of-the.webp"
                alt="about image"
              
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                width={700} height={450}
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Учителя английского языка:
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Туряница Елена Геннадьевна</p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Завалий Анна Валериевна</p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Кудрявцева Мария Сергеевна</p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Учитель русского языка и литературы:
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
               Водолазская Светлана Васильевна</p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Учитель испанского языка:
                </h3>
                <p className="text-base font-medium leading-relaxeыd text-body-color sm:text-lg sm:leading-relaxed">
                Завалий Анна Валериевна  
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Учитель немецкого языка:
                </h3>
                <p className="text-base font-medium leading-relaxeыd text-body-color sm:text-lg sm:leading-relaxed">
                Рыбакова Анна Юрьевна  
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Учитель истории и обществознания:
                </h3>
                <p className="text-base font-medium leading-relaxeыd text-body-color sm:text-lg sm:leading-relaxed">
                Русакова Елена Васильевна 
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Руководитель изо-студии:
                </h3>
                <p className="text-base font-medium leading-relaxeыd text-body-color sm:text-lg sm:leading-relaxed">
                Балабанова Галина Вячеславовна
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Учителя по подготовке к школе:
                </h3>
                <p className="text-base font-medium leading-relaxeыd text-body-color sm:text-lg sm:leading-relaxed">
                Бежина Елена Вячеславовна
                </p>
                <p className="text-base font-medium leading-relaxeыd text-body-color sm:text-lg sm:leading-relaxed">
                Сидоренко Наталья Петровна
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
