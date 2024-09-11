"use client";
import Image from "next/image";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        // className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[20px] md:pt-[50px] xl:pb-[60px] xl:pt-[80px] 2xl:pb-[20px] 2xl:pt-[10px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="mx-auto w-full max-w-[800px] px-4 text-center">
            <Image src='/images/main.png'width={1200} height={700} className="relative z-20 mr-10"  alt="main" />
              {/* <p className="mb-2 text-3xl text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-3xl">
              <h1>ART REKM </h1>
              </p> */}
              <div className="space-y-5 text-xl font-extrabold sm:text-3xl md:text-6xl lg:text-7xl">
                {/* <h1>Яркие световые вывески </h1> */}
                <div className="bg-gradient-to-r from-blue-800 bg-clip-text text-transparent lg:text-2xl">
                  <TypewriterComponent
                    options={{
                      strings: [
                        "Изготовление из немецких материалов ",
                        "Изготовление от 3 рабочих дней ",
                        "Слушаем и предлагаем свои идеи",
                        "Работаем по договору",
                        "скидки для постоянных клиентов ",
                        // "Производство",
                        // "Рекламного",
                        // "Материала",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
                
                {/* <div className="mx-auto max-w-[800px] text-center">
              
                <p className="mb-2 text-xl text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                Наши вывески - это
                </p>
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                ИНСТРУМЕНТ
                </h1>
                <div className="mb-12">
                <Link
                    href="/"
                    className="mb-12 rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 для взрывного роста 
                  </Link>
                  </div>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Узнать стоимость
                  </Link>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          {/* <svg
            width="450"
            height="556"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 801.000000 895.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,895.000000) scale(0.100000,-0.100000)"
              fill="rgb(0,136,193)"
              stroke="none"
            >
              <path
                d="M4346 8940 c-33 -5 -968 -288 -2078 -627 l-2019 -618 183 -7 c340
-12 602 -47 895 -118 951 -230 1797 -805 2373 -1611 76 -106 242 -369 252
-400 5 -16 97 26 175 79 307 211 424 606 282 949 -93 222 -306 401 -546 459
-72 18 -257 24 -308 10 -18 -4 -26 -4 -20 2 6 4 280 91 610 191 351 107 627
197 666 217 185 93 333 270 399 479 30 95 38 272 17 372 -34 160 -98 273 -222
398 -73 73 -108 100 -182 138 -150 77 -329 110 -477 87z"
              />
              <path
                d="M7060 4855 c-284 -64 -483 -211 -595 -441 -55 -112 -77 -210 -77
-344 0 -309 162 -570 437 -704 126 -61 173 -71 345 -71 143 0 162 2 245 28
104 33 210 84 277 133 130 96 242 263 289 430 29 101 32 284 6 388 -68 272
-290 498 -562 572 -84 22 -283 28 -365 9z"
              />
              <path
                d="M5226 4280 c-26 -5 -214 -59 -418 -121 l-369 -113 8 -115 c14 -206 8
-661 -11 -821 -28 -234 -103 -602 -146 -714 -6 -16 -9 -30 -7 -32 2 -2 304 89
673 201 452 139 695 218 749 244 193 95 336 269 401 486 35 118 38 288 6 406
-73 270 -282 482 -554 559 -82 24 -254 34 -332 20z"
              />
              <path
                d="M4255 2278 c-69 -212 -235 -578 -356 -784 -250 -425 -594 -823 -981
-1132 -59 -47 -106 -88 -104 -89 2 -2 403 118 892 267 599 183 915 284 969
311 362 176 532 617 382 989 -117 290 -406 489 -709 490 l-76 0 -17 -52z"
              />
            </g>
          </svg> */}

          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          {/* <svg
            width="764"
            height="201"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 724.000000 886.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,886.000000) scale(0.100000,-0.100000)"
              fill="rgb(0,136,193)"
              stroke="none"
            >
              <path
                d="M5105 8469 c-374 -115 -842 -259 -1040 -319 -198 -61 -393 -126 -433
-146 -320 -156 -496 -532 -412 -884 66 -276 294 -505 570 -574 82 -21 219 -30
289 -19 l54 8 76 190 c86 213 160 367 254 532 312 541 733 996 1261 1361 49
34 83 62 75 61 -8 -1 -320 -95 -694 -210z"
              />
              <path
                d="M1925 7486 c-275 -72 -441 -200 -556 -429 -54 -106 -79 -217 -79
-347 0 -141 20 -225 79 -345 98 -198 254 -332 466 -401 64 -21 105 -27 210
-31 116 -4 141 -2 230 21 147 38 285 109 378 196 290 271 339 685 121 1015
-110 169 -287 288 -486 329 -113 23 -254 20 -363 -8z"
              />
              <path
                d="M3895 6454 c-115 -36 -379 -117 -585 -180 -206 -63 -408 -130 -448
-150 -153 -75 -274 -198 -352 -359 -59 -123 -80 -212 -80 -348 0 -297 166
-561 435 -692 50 -24 119 -51 154 -60 84 -21 221 -29 294 -17 32 5 55 6 50 2
-4 -4 -240 -78 -523 -165 -283 -86 -547 -172 -586 -190 -294 -140 -478 -477
-436 -795 45 -332 279 -592 605 -670 98 -24 234 -26 327 -5 48 10 1548 464
1617 490 7 2 -15 60 -62 162 -371 804 -475 1686 -300 2558 27 138 97 407 122
471 8 21 -4 18 -232 -52z"
              />
              <path
                d="M690 3815 c-178 -38 -320 -108 -431 -213 -92 -86 -156 -178 -199
-284 -177 -444 78 -930 550 -1049 71 -18 104 -21 210 -17 105 5 141 11 225 38
209 67 350 172 458 341 141 221 159 508 47 748 -97 206 -290 366 -515 426 -83
23 -263 28 -345 10z"
              />
              <path
                d="M4462 3048 c-49 -120 -65 -213 -60 -347 4 -90 11 -134 32 -196 72
-212 203 -362 401 -460 132 -66 195 -80 357 -80 75 0 136 -1 135 -1 -1 -1
-315 -97 -697 -214 -382 -117 -724 -223 -759 -236 -229 -86 -412 -297 -477
-549 -24 -94 -24 -265 0 -360 24 -96 95 -238 155 -312 172 -210 462 -324 716
-281 112 19 3581 1079 3563 1089 -7 3 -62 9 -123 13 -133 8 -347 38 -510 72
-681 142 -1323 459 -1850 915 -149 129 -396 386 -519 539 -105 131 -228 307
-299 424 l-35 57 -30 -73z"
              />
            </g>
          </svg> */}
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
