<template>
    <div>
        <div class="form-container" v-if="isFormActive">
            <div class="white-scrim"></div>
            <div style="position: relative">
                <form method="post" class="form" @submit.prevent="submitForm">
                    <h2 class="form-heading">
                        ЗАПОЛНИТЕ ФОРМУ
                        <br> ЧТОБЫ ПОЛУЧИТЬ СТОИМОСТЬ РЕМОНТА
                        <br> НАШИ СОТРУДНИКИ СВЯЖУТЬСЯ С ВАМИ
                    </h2>
                    <div class="form-inputs">
                        <label for="name" class="form-label">
                            <span class="form-text">Ваше имя:</span>
                            <span class="form-div">
                                <input
                                    class="form-input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    v-model="name"
                                >
                            </span>
                            <span v-show="errorName" class="error-message">Заполните поле</span>
                        </label>
                        <label for="tel" class="form-label">
                            <span class="form-text">Номер тел.:</span>
                            <span class="form-div">
                                <input
                                    class="form-input"
                                    type="tel"
                                    id="tel"
                                    name="phone"
                                    v-model="phoneNum"
                                >
                            </span>
                            <span v-show="errorPhoneNum" class="error-message">Заполните поле</span>
                        </label>
                    </div>
                    <div class="notification" v-show="success">Наши сотрудники вскоре свяжутся с Вами</div>
                    <div class="form-buttons">
                        <button class="form-cancel form-btn" @click.prevent="formOff">Отменить</button>
                        <button class="form-ok form-btn" @click.prevent="submitForm">Ok</button>
                    </div>
                </form>
            </div>
        </div>
        <div v-show="!isFormActive">
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

                    <p class="calculator-text">
                        Более 10 лет специализируемся на комплексном ремонте и строительстве в Киеве и области
                    </p>

                    <button class="calculator-btn" @click="formToggler">
                        <span>КАЛЬКУЛЯТОР СТОИМОСТИ РЕМОНТА</span>
                    </button>
                </div>
            </div>
            <div class="examples">
                <div class="white-scrim"></div>
                <div class="examples-photo">
                    <Examples />
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
                            <li class="benefits-item">
                                <Money />
                                <span class="benefits-text">Всегда придерживаемся<br> согласованного бюджета</span>
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
                                Закупка и доставка материала а также вывоз<br> строй мусора на протяжении всего ремонта
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
import Examples from "@/components/Examples";

export default {
    name: "First",
    components: {
        Car,
        Hand,
        Money,
        Time,
        Wallet,
        VectorSix,
        Examples
    },
    data() {
        return {
            isFormActive: false,
            phoneNum: '',
            name: '',
            errorName: false,
            errorPhoneNum: false,
            authToken: '1418261456:AAHSVdgZLME5t_9YQh0KBdmHwJXCilM4lYY',
            chatID: '-460826271',
            parseMode: 'HTML',
            disableNotif: false,
            success: false,
        }
    },
    methods: {
        formToggler(){
            this.isFormActive = true;
        },

        formOff() {
            this.isFormActive = false;
            this.name = '';
            this.phoneNum = ''
            this.errorPhoneNum = false;
            this.errorName = false;
        },

        submitForm() {
            if(!this.phoneNum) {
                this.errorPhoneNum = true;
            }

            if(!this.name) {
                this.errorName = true;
            }

            if(!this.phoneNum || !this.name) {
                return;
            }

            let url = `https://api.telegram.org/bot${this.authToken}/sendMessage?chat_id=${this.chatID}&text=${this.msgText}&parse_mode=${this.parseMode}&disable_notification=${this.disableNotif}`

            fetch(url)
                .then(response => {
                    return response.json();
                })
                .then(response => {
                    this.success = true;
                    this.name = ''
                    this.phoneNum = ''

                    setTimeout(() => {
                        this.isFormActive = false;
                        this.name = '';
                        this.phoneNum = '';
                        this.success = false;
                    }, 2500)
                })
                .catch(error => {
                    console.log();
                    throw new Error(error);
                });
        }
    },
    computed: {
        msgText() {
            let options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                timezone: 'UTC',
                hour: 'numeric',
                minute: 'numeric',
            };
        return '<b>Новая заявка на сайте</b>' + '%0A<b>Имя:</b> ' + this.name + '%0A<b>Номер телефона:</b> ' + `<a :href="${this.phoneNum}">${this.phoneNum}</a>` + '%0A<b>Дата:</b> ' + new Date().toLocaleString("ru", options)
        },
    },
    watch: {
        phoneNum() {
            console.log(this.phoneNum)
            this.phoneNum = this.phoneNum.replace(/\D/g, '')
            if(this.phoneNum) {
                this.errorPhoneNum = false;
            }
        },

        name() {
            if(this.name) {
                this.errorName = false;
            }
        }
    }
}
</script>

<style scoped lang="scss">
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
           outline: none;

           & span {
               font-family: 'Catamaran-Bold', sans-serif;
               font-size: 24px;
               line-height: 37px;
               color: #FFFFFF;
               text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
           }
       }
   }

   .white-scrim {
       position: absolute;
       height: 100%;
       width: 100%;
       background-color: #fff;
       opacity: 0.7;
   }

   .examples {
       background: url("../assets/images/back-ground1.jpg");
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

   .choice {
       position: absolute;
       top: 720px;
       right: 80px;

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
           width: 120px;
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
      background: url("../assets/images/back-ground1.jpg");
      background-size: cover;
      z-index: 5;
  }

  .form {
      padding-top: 8%;

      &-heading {
          font-family: 'Catamaran-Regular', sans-serif;
          font-weight: 700;
          font-size: 36px;
          text-align: center;
          margin-bottom: 5%;
      }


      &-text {
          font-family: 'Catamaran-Regular', sans-serif;
          min-width: 100px;
          font-weight: 700;
          font-size: 36px;
          display: flex;
          align-items: flex-end;
          line-height: 1;
      }

      &-inputs {
          display: flex;
          justify-content: center;
      }

      &-input {
          background-color: transparent!important;
          border: none;
          outline: none;
          height: 100%;
          width: 100%;
          font-family: 'Catamaran-Regular', sans-serif;
          font-weight: 700;
          font-size: 36px;
          line-height: 1;
      }

      &-div {
          width: 230px;
          height: 85%;
          border-bottom: 3px dashed black;
          margin-left: 10px;
      }

      &-label {
          display: flex;
          position: relative;
          &:first-child {
              margin-right: 104px;
          }
      }

      &-buttons {
          display: flex;
          justify-content: flex-end;
      }

      &-btn {
          background: #7096F5;
          box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.18);
          border-radius: 17px;
          outline: none;
          min-width: 106px;
          height: 86px;
          margin-top: 128px;
          font-family: 'Catamaran-Regular', sans-serif;
          font-weight: 600;
          font-size: 36px;
          padding: 0 10px;
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
          line-height: 1;
          color: #FFFFFF;
      }

      &-cancel {
          margin-right: 40px;
      }

      &-ok {
          margin-right: 188px;
      }
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
           height: 785px;

           &-heading {
               font-size: 32px;
           }

           &-text {
               font-size: 28px;
               padding: 0 80px;
           }

           &-btn {
               width: 390px;
               height: 56px;

               & span {
                   font-size: 18px;
               }
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
           position: relative;
           top: 0;
           left: 0;
           display: flex;
           justify-content: center;
           padding-bottom: 50px;
       }
   }

@media screen and (max-width: 1138px){
    .form {
        padding-top: 8%;

        &-heading {
            font-size: 26px;
        }


        &-text {
            font-size: 26px;
        }

        &-input {
            font-size: 26px;
        }

        &-label {
            display: flex;
            &:first-child {
                margin-right: 104px;
            }
        }


        &-btn {
            font-size: 26px;
        }

        &-ok {
            margin-right: 100px;
        }
    }
}

@media screen and (max-width: 982px) {
    .form {
        &-inputs {
            margin: 40px;
            flex-direction: column;
        }

        &-div {
            display: flex;
            flex-grow: 1;
        }

        &-label:first-child {
            margin-right: 0;
            margin-bottom: 20px;
        }
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
        height: 600px;

        &-heading {
            font-size: 20px;
            margin-bottom: 20px;
        }

        &-text {
            padding: 0 40px;
            font-size: 18px;
        }

        &-btn {
            width: 250px;
            height: 56px;

            & span {
                font-size: 14px;
                line-height: 1.25;
                text-align: center;
            }
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
        margin-left: 20px;
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

    .form {
        &-heading {
            font-size: 18px;
        }

        &-text {
            font-size: 18px;
        }

        &-input {
            font-size: 18px;
        }

        &-btn {
            min-width: 75px;
            height: 65px;
            margin-top: 128px;
            font-size: 18px;
        }

        &-cancel {
            margin-right: 30px;
        }

        &-ok {
            margin-right: 30px;
        }

    }
}

@media screen and (max-width: 349px) {
    .calculator {
        height: 750px;
    }

    .choice div {
        transform: scale(0.55);
    }
}
</style>