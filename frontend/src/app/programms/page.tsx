import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
    description: "This is Blog Details Page for Startup Nextjs Template",
    // other metadata
};

const BlogDetailsPage = () => {
    return (
        <>
            <section className="pb-[120px] pt-[150px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                                    Наши языковые программы
                                </h2>
                               
                                <div>
                                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        В современном мире очень важную роль
                                        играет знание иностранных языков, именно
                                        поэтому, мы даем комплексное знание по
                                        мировым языкам: английскому, испанскому,
                                        немецкому. На своих занятиях мы уделяем
                                        внимание не только изучению самого
                                        языка,но и культуре общения на том или
                                        ином языке, этических представлений,
                                        истории языка и также обращаем внимание
                                        на историю носителей языка. Каждый
                                        учитель пытается вместе с учениками
                                        открыть что-то новое каждый день. В
                                        связи с этим перед каждым занятием
                                        тщательно продумывается специальная
                                        программа для разных языковых групп. Для
                                        самых маленьких детей обучение языка
                                        проходит в форме развивающих игр,
                                        веселых песен, чтобы с самого раннего
                                        возраста вовлечь ребенка в изучаемый
                                        язык. Данные методы, безусловно,приносят
                                        соответствующие результаты и ребенок со
                                        счастливым блеском в глазах ходит каждый
                                        раз на занятие.
                                    </p>
                                    <div className="mb-10 w-full overflow-hidden rounded">
                                        <div className="relative flex aspect-[97/60] items-start  sm:aspect-[97/44]">
                                            <Image
                                                src="/images/hero/hero-main.webp"
                                                alt="image"
                                                className="object-cover object-center"
                                                width={700}
                                                height={400}
                                            />
                                            
                                        </div>
                                    </div>

                                    {/* <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        Popular Tags :
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="Design" />
                        <TagButton text="Development" />
                        <TagButton text="Info" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                        Share this post :
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetailsPage;
