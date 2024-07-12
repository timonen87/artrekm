"use client"
import ContactList from "./ContactList";
import NewsLatterBox from "./NewsLatterBox";
import { YMaps } from "@pbe/react-yandex-maps";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-10 lg:py-10">
      <div className="container flex flex-row items-center justify-between ">
      <div className="w-full">
        <ContactList />
      </div>
        <div className="-mx-4 flex flex-wrap ">
          <div
            className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[25px] lg:mb-5 lg:px-8 xl:p-[25px]"
            data-wow-delay=".15s
              "
          >
            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Нужна помощь? напишите нам.
            </h2>
            <p className="mb-12 text-base font-medium text-body-color">
              Мы свяжемся с Вами как можно скорее по электронной почте.
            </p>
            <form>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Ваше Имя
                    </label>
                    <input
                      type="text"
                      placeholder="Введите имя"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Введите свой email"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Сообщение
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Напишите свой вопрос"
                      className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                  <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                    Отправить сообщение
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
