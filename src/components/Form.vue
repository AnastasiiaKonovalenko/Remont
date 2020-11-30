<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <template v-slot:activator="{ on, attrs }">
                <div
                    class="mt-8 mb-8"
                    v-bind="attrs"
                    v-on="on"
                >
                    <GenericBtn
                        :btn-background="'#7096F5'"
                        :text-color="'#fff'"
                        :text-font-family="'\'Catamaran\', sans-serif'"
                        :btn-type="'calculator'"
                        :btn-heading="'КАЛЬКУЛЯТОР СТОИМОСТИ РЕМОНТА'"
                        :ripple-color="'info'"
                        :text-font-size="textFont(24, 18, 14)"
                    />
                </div>
            </template>
            <v-card>
                <div class="form-container">
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
                            <div class="form-buttons">
                                <button
                                    class="form-cancel form-btn"
                                    @click.prevent="formOff"
                                >
                                    Отменить
                                </button>
                                <button class="form-ok form-btn" @click.prevent="submitForm">Ok</button>
                            </div>
                        </form>
                    </div>
                </div>
                <v-snackbar
                    v-model="snackbar"

                    absolute
                >
                    <div class="notification">
                        {{snackbarText}}
                    </div>

                    <template v-slot:action="{ attrs }">
                        <v-btn
                            color="blue"
                            text
                            v-bind="attrs"
                            @click="closeSnackbar"
                        >
                            Close
                        </v-btn>
                    </template>
                </v-snackbar>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import GenericBtn from "@/components/GenericBtn";
export default {
    name: "Form",
    components: {
        GenericBtn
    },
    data () {
        return {
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
            phoneNum: '',
            name: '',
            errorName: false,
            errorPhoneNum: false,
            authToken: '1418261456:AAHSVdgZLME5t_9YQh0KBdmHwJXCilM4lYY',
            chatID: '-460826271',
            parseMode: 'HTML',
            disableNotif: false,
            success: false,
            snackbar: false,
            snackbarText: '',
            timeout: 1500,
        }
    },
    methods: {
        textFont(a, b, c) {
            if (window.innerWidth >= 1450) {
                return `${a}px`
            } else if (window.innerWidth >= 1364 && window.innerWidth < 1450) {
                return `${b}px`
            } else {
                return `${c}px`
            }
        },
        formOff() {
            this.dialog = false;
            this.name = '';
            this.phoneNum = ''
            this.errorPhoneNum = false;
            this.errorName = false;
        },

        closeSnackbar() {
            this.dialog = false;
            this.name = '';
            this.phoneNum = '';
            this.success = false;
            this.snackbarText = ''
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
                    if (response) {
                        this.snackbarText = 'Спасибо! Наши сотрудники вскоре свяжутся с Вами'
                    }
                    this.success = true;
                    this.name = '';
                    this.phoneNum = '';
                    this.snackbar = true;

                    setTimeout(() => {
                        this.dialog = false;
                        this.name = '';
                        this.phoneNum = '';
                        this.success = false;
                        this.snackbarText = ''
                    }, 2000)
                })
                .catch(error => {
                    this.snackbarText = error
                    throw new Error(error);
                });
        },
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
            return '<b>Новая заявка на сайте</b>'
                + '%0A<b>Имя:</b> '
                + this.name
                + '%0A<b>Номер телефона:</b> '
                + `<a :href="${this.phoneNum}">${this.phoneNum}</a>`
                + '%0A<b>Дата:</b> '
                + new Date().toLocaleString("ru", options)
        }
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
.form-container {
    height: 100vh;
    width: 100vw;
    background: url("../assets/images/back-ground1.webp");
    background-size: cover;
    z-index: 5;
}

.form {
    padding-top: 8%;

    &-heading {
        font-family: 'Catamaran', sans-serif;
        font-weight: 700;
        font-size: 36px;
        text-align: center;
        margin-bottom: 5%;
    }


    &-text {
        font-family: 'Catamaran', sans-serif;
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
        font-family: 'Catamaran', sans-serif;
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
        font-family: 'Catamaran', sans-serif;
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

.white-scrim {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #fff;
    opacity: 0.7;
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

@media screen and (max-width: 553px) {

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
</style>
