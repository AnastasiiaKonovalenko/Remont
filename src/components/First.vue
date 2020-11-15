<template>
    <div>
        <div class="header">
            <div class="header-info">
                <h2 class="header-heading">
                    Свяжитесь с нами
                    <img src="../assets/phone-icon.svg">
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

                <p class="calculator-text">
                    Более 10 лет специализируемся на комплексном ремонте и строительстве в Киеве и области
                </p>

                <div class="calculator-btn">
                    <span>КАЛЬКУЛЯТОР СТОИМОСТИ РЕМОНТА</span>
                </div>
            </div>
        </div>
        <div class="examples">
            <div class="examples-scrim"></div>
            <div class="examples-photo">
                <img src="../assets/images/examples.jpg" alt="examples">
            </div>
        </div>
        <div class="info">
            <div class="scrim"></div>
            <div class="info-container">
                <h3 class="info-heading">Этапы проектирования и ремонта</h3>
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
                <div class="benefits">
                    <h3 class="benefits-heading">5 ПРОБЛЕМ ОТ КОТОРЫХ<br> МЫ ВАС ИЗБАВИМ</h3>
                    <ul class="benefits-list">
                        <ul class="benefits-item">
                            <Money />
                            <span class="benefits-text">Всегда придерживаемся<br> согласованного бюджета</span>
                        </ul>
                        <ul class="benefits-item">
                            <Hand />
                            <span class="benefits-text">Только высокое качество работы</span>
                        </ul>
                        <ul class="benefits-item">
                            <Time />
                            <span class="benefits-text">Скорость. Успеем сделать на вчера</span>
                        </ul>
                        <ul class="benefits-item">
                            <Car />
                            <span class="benefits-text">
                                Закупка и доставка материала а также вывоз<br> строй мусора на протяжении всего ремонта
                            </span>
                        </ul>
                        <ul class="benefits-item">
                            <Wallet />
                            <span class="benefits-text">Адекватная цена</span>
                        </ul>
                    </ul>
                </div>
                <div class="slogan">
                    <span>РАЗРАБОТАЕМ / ДИЗАЙН-ПРОЕКТ / РЕМОНТ ПОД КЛЮЧ / СТРОИТЕЛЬСТВО</span>
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
</template>

<script>
import Car from "@/icons/Car";
import Hand from "@/icons/Hand";
import Money from "@/icons/Money";
import Time from "@/icons/Time";
import Wallet from "@/icons/Wallet";

export default {
    name: "First",
    components: {
        Car,
        Hand,
        Money,
        Time,
        Wallet
    }
}
</script>

<style scoped lang="scss">
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
       height: 785px;
       background: url("../assets/images/minimalism.jpg") no-repeat center;
       background-size: cover;

       &-info {
           position: absolute;
           height: 100%;
           width: 100%;
           display: flex;
           flex-direction: column;
           align-items: center;
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
           margin: 55px 45px 90px 45px;
       }

       &-text {
           font-family: 'Catamaran-Bold', sans-serif;
           font-size: 46px;
           line-height: 55px;
           text-align: center;
           color: #FFFFFF;
           text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
       }

       &-btn {
           width: 490px;
           height: 86px;
           background: #7096F5;
           box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.18);
           border-radius: 17px;
           display: flex;
           justify-content: center;
           align-items: center;
           margin-top: 50px;

           & span {
               font-family: 'Catamaran-Bold', sans-serif;
               font-size: 24px;
               line-height: 37px;
               color: #FFFFFF;
               text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
           }
       }
   }

   .examples {
       height: 1024px;
       background: url("../assets/images/back-ground1.jpg");
       background-size: cover;
       position: relative;

       &-scrim {
           position: absolute;
           height: 100%;
           width: 100%;
           background-color: #fff;
           opacity: 0.7;
       }

       &-photo {
           position: absolute;
           height: 100%;
           width: 100%;
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
       background: url("../assets/images/minimalism.jpg");
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
       margin-top: 35px;
       margin-left: 105px;
       margin-bottom: 72px;

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
</style>