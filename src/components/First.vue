<template>
    <div>
        <div>
            <div class="header">
                <div class="header-info">
                    <h2 class="header-heading">
                        Свяжитесь с нами
                    </h2>

                    <p class="header-contacts">
                        <a class="header-link" href="tel:+38(066)7457944">+38 (066) 745 79 44</a>
                        <a class="header-link" href="tel:+38(050)3832774">+38 (050) 383 27 74</a>
                        <a class="header-link" href="tel:+38(067)5032474">+38 (067) 503 24 74</a>
                    </p>
                </div>
            </div>
            <div class="calculator">
                <div class="scrim"></div>
                <div class="calculator-info">
                    <h1 class="calculator-heading">
                        РАЗРАБОТАЕМ ДИЗАЙН-ПРОЕКТ
                        <br>
                        СДЕЛАЕМ КАЧЕСТВЕННЫЙ РЕМОНТ ПОД КЛЮЧ
                        <br>
                        ПОСТРОИМ ДОМ
                        <br>
                        ФИКСИРОВАННАЯ ЦЕНА И СРОКИ
                    </h1>

                    <Banner />

                    <p class="calculator-text">
                        Более 10 лет специализируемся на комплексном ремонте и строительстве в Киеве и области
                    </p>

                    <Form/>
                </div>
            </div>

            <div class="examples">
                <div class="white-scrim"></div>
                <div class="examples-photo">
                    <lezy-examples v-if="examples" />
                </div>
            </div>
            <div class="info">
                <div class="scrim"></div>
                <div class="info-container">
                    <v-expansion-panels flat v-model="panel" multiple>
                        <v-expansion-panel :style="{backgroundColor: 'transparent'}">
                            <v-expansion-panel-header>
                                <template v-slot:actions>
                                    <v-icon :style="{opacity: 0}" color="colorWhite">
                                        $expand
                                    </v-icon>
                                </template>
                                <h3 class="info-heading">
                                    Этапы проектирования и ремонта
                                    <v-icon color="colorWhite" :class="{'active-panel': panel.length > 0 }">
                                        $expand
                                    </v-icon>
                                </h3>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <ul class="info-list list">
                                    <li class="list-item">1. Выезды специалиста на объект или подбор материалов</li>
                                    <li class="list-item">2. Консультация специалиста по выбору стилистического решения</li>
                                    <li class="list-item">3. Обмерочный чертеж с привязкой инженерных коммуникаций</li>
                                    <li class="list-item">4. Планировочные решеия (1-2 варианта)</li>
                                    <li class="list-item">5. План расстановки мебели (2-3 варианта)</li>
                                    <li class="list-item">6. План демонтаж перегородок</li>
                                    <li class="list-item">7. План монтаж перегородок</li>
                                    <li class="list-item">8. План помещения после перепланировки с размерами</li>
                                    <li class="list-item">9. План расстановки мебели с размерами</li>
                                    <li class="list-item">10. План пола с указанием типа используемого материала</li>
                                    <li class="list-item">11. План размещения осветительных приборов и их спецификация</li>
                                    <li class="list-item">12. План размещения выключателей и их спецификация</li>
                                    <li class="list-item">13. План размещения размещения розеток и их спецификация</li>
                                    <li class="list-item">14. План размещения сан-тех приборов и их спецификация</li>
                                    <li class="list-item">15. План размещения приборов отопления и кондиционирования и их спецификация</li>
                                    <li class="list-item">16. План размещения кухонной мебели и оборудования</li>
                                    <li class="list-item">17. Развертка стен по всем помещениям</li>
                                    <li class="list-item">18. Чертежи декоративных элементов и перегородок</li>
                                    <li class="list-item">19. По  необходимости 3D визуализации помещений</li>
                                    <li class="list-item">20. Авторский надзор объекта на протяжении всего ремонта</li>
                                    <li class="list-item">21. Ремонт под ключ</li>
                                    <li class="list-item">22. Подбор мебели и оборудования</li>
                                    <li class="list-item">23. Вывоз строй мусора</li>
                                    <li class="list-item">24. Уборка помещения после ремонта</li>
                                </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>

                    <div class="benefits">
                        <div>
                            <h3 class="benefits-heading">НАШИ ПРЕИМУЩЕСТВА</h3>
                            <ul class="benefits-list">
                                <li class="benefits-item">
                                    <Money />
                                    <span class="benefits-text">Всегда придерживаемся согласованного бюджета</span>
                                </li>
                                <li class="benefits-item">
                                    <Hand />
                                    <span class="benefits-text">Только высокое качество работы</span>
                                </li>
                                <li class="benefits-item">
                                    <Time />
                                    <span class="benefits-text">Скорость. Успеем сделать на вчера</span>
                                </li>
                                <li class="benefits-item">
                                    <Car />
                                    <span class="benefits-text">
                                Закупка и доставка материала а также вывоз строй мусора на протяжении всего ремонта
                            </span>
                                </li>
                                <li class="benefits-item">
                                    <Wallet />
                                    <span class="benefits-text">Адекватная цена</span>
                                </li>
                            </ul>
                        </div>
                        <div class="choice">
                            <div style="position: relative">
                                <VectorSix />
                                <p class="choice-center">ЭТАПЫ<br> РАБОТЫ</p>
                                <p class="choice-first step">
                                    1. Знакомство, выбор
                                    дизайн интерьера,
                                    который
                                    вам нравится
                                </p>
                                <p class="choice-second step">
                                    2. Утверждение
                                    технического
                                    задания
                                </p>
                                <p class="choice-third step">
                                    3. Разработка
                                    нескольких
                                    эскизных
                                    вариантов
                                    интерьера
                                </p>
                                <p class="choice-four step">
                                    4. Создание
                                    дизайн
                                    проекта
                                    интерьера
                                </p>
                                <p class="choice-fifth step">
                                    5. Согласование
                                    и внесение<br>
                                    правок
                                </p>
                                <p class="choice-sixth step">
                                    6. Авторский
                                    надзор
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="slogan">
                        <span>РАЗРАБОТАЕМ ДИЗАЙН-ПРОЕКТ / РЕМОНТ ПОД КЛЮЧ / СТРОИТЕЛЬСТВО</span>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="footer-contacts">
                    <p>КОНТАКТЫ:</p>
                    <a class="footer-tel" href="tel:+38(066)7457944">+38 (066) 745 79 44</a>
                    <a class="footer-tel" href="tel:+38(050)3832774">+38 (050) 383 27 74</a>
                    <a class="footer-tel" href="tel:+38(067)5032474">+38 (067) 503 24 74</a>
                    <a class="footer-email" href = "mailto: kievprofstroi@gmail.com">Е-mail: kievprofstroi@gmail.com</a>
                </div>
                <div class="footer-schedule">
                    <p>График работы:</p>
                    <p>Пн.-Вс. с 09:00 по 21:00</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Car from "@/icons/Car";
import Hand from "@/icons/Hand";
import Money from "@/icons/Money";
import Time from "@/icons/Time";
import Wallet from "@/icons/Wallet";
import VectorSix from "@/icons/VectorSix";
const lezyExamples = () => import ('../components/Examples.vue');
import Form from "@/components/Form";
import Banner from "@/components/Banner";

export default {
    name: "First",
    components: {
        Car,
        Banner,
        Hand,
        Form,
        Money,
        Time,
        Wallet,
        VectorSix,
        lezyExamples
    },
    data() {
        return {
            isFormActive: false,
            panel: [],
            examples: false
        }
    },

    mounted() {
        setTimeout(() => this.examples = true, 250)
    }
}
</script>

<style scoped lang="scss">
.active-panel {
    transform: scaleY(-1);
}
.white-scrim {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #fff;
    opacity: 0.7;
}

.notification {
    font-family: 'Catamaran-Medium', sans-serif;
    text-align: center;
}
   .error-message {
       font-family: 'Catamaran-Medium', sans-serif;
       color: red;
       position: absolute;
       bottom: -20px;
       right: 0;
   }

   .scrim {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #0f0f37;
    opacity: 0.7;
}

   .header {
       &-info {
           height: 240px;
           background-color: #7096F5;
           box-shadow: 5px 4px 4px 2px rgba(0, 0, 0, 0.18);
       }

       &-heading {
           display: flex;
           align-items: center;
           justify-content: center;
           color: #fff;
           text-transform: uppercase;
           font-family: 'Catamaran-Medium', sans-serif;
           font-weight: 600;
           font-size: 64px;
           width: 100%;
           text-align: center;
           line-height: 18.5px;
           text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
           padding-top: 60px;
           margin-bottom: 50px;
           height: 50px;
       }

       &-contacts {
           display: flex;
           justify-content: space-around;
       }

       &-link {
           color: white;
           font-family: 'Catamaran-Bold', sans-serif;
           text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
           font-size: 48px;
           line-height: 18px;
           text-decoration: none;
       }
   }

   .calculator {
       position: relative;
       background: url("../assets/images/minimalism.webp") no-repeat center;
       background-size: cover;

       &-info {
           display: flex;
           flex-direction: column;
           align-items: center;
           position: relative;
       }

       &-heading {
           font-family: 'Catamaran-Bold', sans-serif;
           font-weight: bold;
           font-size: 56px;
           color: #FFFFFF;
           text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
           text-align: center;
           line-height: 1.35;
           max-width: 1340px;
           margin: 55px 45px 0 45px;
       }

       &-text {
           font-family: 'Catamaran-Bold', sans-serif;
           font-size: 46px;
           line-height: 55px;
           text-align: center;
           color: #FFFFFF;
           text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
       }
   }

   .examples {
       background: url("../assets/images/back-ground1.webp");
       background-size: cover;
       position: relative;

       &-photo {
           position: relative;
           display: flex;
           justify-content: center;
           align-items: center;
       }

       & img {
           width: 65%;
           max-width: 936px;
       }
   }

   .info {
       background: url("../assets/images/minimalism.webp");
       background-size: cover;
       position: relative;

       &-container {
           position: relative;
           padding-bottom: 14px;
           box-sizing: border-box;
       }

       &-heading {
           font-family: 'Catamaran-Bold', sans-serif;
           font-size: 24px;
           line-height: 37px;
           color: #FFFFFF;
           text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
           margin-left: 86px;
           padding-top: 45px;
           margin-bottom: 22px;
       }
   }

   .list {
       margin-left: 68px;
       &-item {
           font-family: 'Catamaran-Bold', sans-serif;
           list-style: none;
           font-weight: bold;
           font-size: 24px;
           line-height: 37px;
           color: #FFFFFF;
           text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
       }
   }

   .benefits {
       display: flex;
       justify-content: space-between;
       margin-top: 35px;
       margin-left: 105px;
       margin-bottom: 72px;
       padding-right: 40px;

       &-heading {
           font-family: 'Mitr-Bold', sans-serif;
           font-size: 24px;
           line-height: 1.75;
           color: #fff;
           margin-left: 102px;
           margin-bottom: 17px;
       }

       &-item {
           font-family: 'Mitr-Medium', sans-serif;
           display: flex;
           color: #fff;
           font-size: 24px;
           margin-bottom: 16px;

           &:last-child {
               margin-bottom: 0;
           }
       }

       &-text {
           font-family: 'Mitr-Medium', sans-serif;
           font-size: 26px;
           margin-left: 25px;
           display: flex;
           align-items: center;
           line-height: 1.15;
       }
   }

   .slogan {
       min-height: 51px;
       padding: 10px 0;
       background-color: #7096F5;
       box-sizing: border-box;
       display: flex;
       justify-content: center;
       align-items: center;
       margin-bottom: 14px;

       & span {
           font-family: 'Catamaran-Bold', sans-serif;
           font-weight: bold;
           font-size: 24px;
           line-height: 37px;
           color: #FFFFFF;
           text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
           text-align: center;
       }
   }

   .footer {
       display: flex;
       justify-content: space-between;
       background-color: #7096F5;
       padding: 50px 0;
       box-sizing: border-box;

       &-contacts {
           display: flex;
           flex-direction: column;
           margin-left: 70px;

           & p {
               margin-left: 10px;
               font-family: 'Catamaran-Bold', sans-serif;
               font-weight: bold;
               font-size: 28px;
               color: #fff;
               text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
           }
       }
       &-tel, &-email, &-schedule {
           font-family: 'Catamaran-Bold', sans-serif;
           font-weight: bold;
           font-size: 28px;
           color: #fff;
           text-decoration: none;
           text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
       }

       &-schedule {
           margin-right: 70px;
       }
   }

   .choice {
       &-center {
           position: absolute;
           top: 205px;
           left: 212px;
           font-family: 'Catamaran-Regular', sans-serif;
           font-weight: bold;
           font-size: 26px;
           color: #fff;
           text-align: center;
           text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
       }

       &-first {
           top: 12px;
           left: 210px;
           width: 130px;
           text-align: center;
       }

       &-second {
           top: 130px;
           left: 320px;
           width: 150px;
           text-align: end;
       }

       &-third {
           top: 285px;
           left: 320px;
           width: 150px;
           text-align: end;
       }
       &-four {
           top: 370px;
           left: 210px;
           width: 120px;
           text-align: center;
       }

       &-fifth {
           top: 290px;
           left: 60px;
           width: 140px;
       }

       &-sixth {
           top: 130px;
           left: 75px;
           width: 140px;
       }
   }

   .step {
       position: absolute;
       font-family: 'Catamaran-Regular', sans-serif;
       font-weight: bold;
       font-size: 17px;
       line-height: 21px;
       color: #FFFFFF;
       text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
   }

  .form-container {
      height: 100vh;
      width: 100vw;
      background: url("../assets/images/back-ground1.webp");
      background-size: cover;
      z-index: 5;
  }

@media screen and (max-width: 1364px) {
       .header {
           &-info {
               height: 340px;
           }

           &-heading {
               font-size: 48px;
           }

           &-contacts {
               flex-direction: column;
           }

           &-link {
               margin-bottom: 35px;
               text-align: center;
               font-size: 32px;
           }
       }
       .calculator {
           &-heading {
               font-size: 32px;
           }

           &-text {
               font-size: 28px;
               padding: 0 80px;
           }
       }
       .list {
           margin-left: 68px;
           &-item {
               font-size: 18px;
           }
       }
       .benefits {
           margin-left: 40px;
           padding-right: 0;

           &-heading {
               font-size: 24px;
           }

           &-item {
               font-size: 18px;
           }

           &-text {
               font-family: 'Mitr-Medium', sans-serif;
               font-size: 26px;
               margin-left: 25px;
               display: flex;
               align-items: center;
               line-height: 1.15;
           }
       }
       .choice {
           transform: scale(0.75);
           display: flex;
           justify-content: center;
           padding-bottom: 50px;
       }
   }
@media screen and (max-width: 1000px) {
    .benefits {
        padding: 0 20px;
        margin-left: 0;
        flex-direction: column;
        justify-content: center;
    }
    .choice {
        transform: scale(1);
        margin-top: 40px;
    }
}

@media screen and (max-width: 620px) {
    .header {

        &-heading {
            font-size: 32px;
        }
    }

    .list {
        margin-left: 30px;
        margin-right: 30px;

        &-item {
            font-size: 18px;
        }
    }
    .benefits {

        &-heading {
            font-size: 18px;
        }

        &-item {
            font-size: 18px;
        }

        &-text {
            font-size: 18px;
        }
    }
    .slogan {

        & span {
            font-size: 18px;
        }
    }

    .footer {
        & p {
            font-size: 18px;
        }

        &-tel, &-email, &-schedule {
            font-size: 18px;
        }

        &-contacts {
            margin-left: 40px;
        }

        &-schedule {
            margin-right: 40px;
        }
    }
}

@media screen and (max-width: 553px) {
    .header {
        height: 220px;

        &-heading {
            font-size: 22px;
            margin-bottom: 20px;
            padding-top: 20px;

            & img {
                transform: scale(0.7);
            }
        }

        &-link {
            font-size: 24px;
            margin-bottom: 20px;
        }
    }
    .calculator {
        &-heading {
            font-size: 20px;
        }

        &-text {
            padding: 0 40px;
            font-size: 18px;
        }
    }

    .list {
        &-item {
            font-size: 16px;
            margin-bottom: 10px;
        }
    }
    .info {
        &-heading {
            margin-left: 20px;
            margin-right: 20px;
        }
    }
    .benefits {
        margin-bottom: 40px;
        &-heading {
            font-size: 18px;
            margin-left: 40px;
        }

        &-item {
            font-size: 18px;
            margin-right: 20px;
        }

        &-text {
            font-size: 18px;
        }
    }
    .slogan {

        & span {
            font-size: 14px;
            padding: 0 20px;
        }
    }
    .choice {
        & div {
            transform: scale(0.65);
        }
    }

    .footer {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;



        &-contacts {
            display: flex;
            flex-direction: column;
            margin: 20px;

            & p {
                margin-left: 0;
            }
        }

        &-tel {
            text-align: center;
        }

        &-schedule {
            margin: 20px;
        }
    }
}

@media screen and (max-width: 475px) {
    .benefits {
        text-align: center;

        &-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: 0;
            margin-right: 0;
            margin-top: 30px;
        }

        &-text {
            margin-left: 0;
            margin-top: 20px;
            display: flex;
            justify-content: center;
        }
    }
}

@media screen and (max-width: 349px) {
    .choice div {
        transform: scale(0.55);
    }
}
</style>
