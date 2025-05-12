const DATA = [
    {
        "first name": "Олексій",
        "last name": "Петров",
        photo: "./img/trainers/trainer-m1.jpg",
        specialization: "Басейн",
        category: "майстер",
        experience: "8 років",
        description:
            "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
    },
    {
        "first name": "Марина",
        "last name": "Іванова",
        photo: "./img/trainers/trainer-f1.png",
        specialization: "Тренажерний зал",
        category: "спеціаліст",
        experience: "2 роки",
        description:
            "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
    },
    {
        "first name": "Ігор",
        "last name": "Сидоренко",
        photo: "./img/trainers/trainer-m2.jpg",
        specialization: "Дитячий клуб",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
    },
    {
        "first name": "Тетяна",
        "last name": "Мороз",
        photo: "./img/trainers/trainer-f2.jpg",
        specialization: "Бійцівський клуб",
        category: "майстер",
        experience: "10 років",
        description:
            "Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
    },
    {
        "first name": "Сергій",
        "last name": "Коваленко",
        photo: "./img/trainers/trainer-m3.jpg",
        specialization: "Тренажерний зал",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
    },
    {
        "first name": "Олена",
        "last name": "Лисенко",
        photo: "./img/trainers/trainer-f3.jpg",
        specialization: "Басейн",
        category: "спеціаліст",
        experience: "4 роки",
        description:
            "Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
    },
    {
        "first name": "Андрій",
        "last name": "Волков",
        photo: "./img/trainers/trainer-m4.jpg",
        specialization: "Бійцівський клуб",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
    },
    {
        "first name": "Наталія",
        "last name": "Романенко",
        photo: "./img/trainers/trainer-f4.jpg",
        specialization: "Дитячий клуб",
        category: "спеціаліст",
        experience: "3 роки",
        description:
            "Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
    },
    {
        "first name": "Віталій",
        "last name": "Козлов",
        photo: "./img/trainers/trainer-m5.jpg",
        specialization: "Тренажерний зал",
        category: "майстер",
        experience: "10 років",
        description:
            "Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
    },
    {
        "first name": "Юлія",
        "last name": "Кравченко",
        photo: "./img/trainers/trainer-f5.jpg",
        specialization: "Басейн",
        category: "спеціаліст",
        experience: "4 роки",
        description:
            "Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
    },
    {
        "first name": "Олег",
        "last name": "Мельник",
        photo: "./img/trainers/trainer-m6.jpg",
        specialization: "Бійцівський клуб",
        category: "майстер",
        experience: "12 років",
        description:
            "Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
    },
    {
        "first name": "Лідія",
        "last name": "Попова",
        photo: "./img/trainers/trainer-f6.jpg",
        specialization: "Дитячий клуб",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
    },
    {
        "first name": "Роман",
        "last name": "Семенов",
        photo: "./img/trainers/trainer-m7.jpg",
        specialization: "Тренажерний зал",
        category: "спеціаліст",
        experience: "2 роки",
        description:
            "Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
    },
    {
        "first name": "Анастасія",
        "last name": "Гончарова",
        photo: "./img/trainers/trainer-f7.jpg",
        specialization: "Басейн",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
    },
    {
        "first name": "Валентин",
        "last name": "Ткаченко",
        photo: "./img/trainers/trainer-m8.jpg",
        specialization: "Бійцівський клуб",
        category: "спеціаліст",
        experience: "2 роки",
        description:
            "Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
    },
    {
        "first name": "Лариса",
        "last name": "Петренко",
        photo: "./img/trainers/trainer-f8.jpg",
        specialization: "Дитячий клуб",
        category: "майстер",
        experience: "7 років",
        description:
            "Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
    },
    {
        "first name": "Олексій",
        "last name": "Петров",
        photo: "./img/trainers/trainer-m9.jpg",
        specialization: "Басейн",
        category: "майстер",
        experience: "11 років",
        description:
            "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
    },
    {
        "first name": "Марина",
        "last name": "Іванова",
        photo: "./img/trainers/trainer-f9.jpg",
        specialization: "Тренажерний зал",
        category: "спеціаліст",
        experience: "2 роки",
        description:
            "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
    },
    {
        "first name": "Ігор",
        "last name": "Сидоренко",
        photo: "./img/trainers/trainer-m10.jpg",
        specialization: "Дитячий клуб",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
    },
    {
        "first name": "Наталія",
        "last name": "Бондаренко",
        photo: "./img/trainers/trainer-f10.jpg",
        specialization: "Бійцівський клуб",
        category: "майстер",
        experience: "8 років",
        description:
            "Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
    },
    {
        "first name": "Андрій",
        "last name": "Семенов",
        photo: "./img/trainers/trainer-m11.jpg",
        specialization: "Тренажерний зал",
        category: "інструктор",
        experience: "1 рік",
        description:
            "Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
    },
    {
        "first name": "Софія",
        "last name": "Мельник",
        photo: "./img/trainers/trainer-f11.jpg",
        specialization: "Басейн",
        category: "спеціаліст",
        experience: "6 років",
        description:
            "Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
    },
    {
        "first name": "Дмитро",
        "last name": "Ковальчук",
        photo: "./img/trainers/trainer-m12.png",
        specialization: "Дитячий клуб",
        category: "майстер",
        experience: "10 років",
        description:
            "Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
    },
    {
        "first name": "Олена",
        "last name": "Ткаченко",
        photo: "./img/trainers/trainer-f12.jpg",
        specialization: "Бійцівський клуб",
        category: "спеціаліст",
        experience: "5 років",
        description:
            "Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
    },
];


const mainWrapper = document.querySelector('.page-wrapper')
mainWrapper.style.opacity = '0'
mainWrapper.style.visibility = 'hidden'
mainWrapper.style.transition = '0.5s ease-in-out'

const filterBlock = document.querySelector('.sidebar')
filterBlock.style.opacity = '0'
filterBlock.style.transition = '1s ease-in-out'
filterBlock.style.pointerEvents = 'none'

const sortBlock = document.querySelector('.sorting')
sortBlock.style.opacity = '0'
sortBlock.style.transition = '1s ease-in-out'
sortBlock.style.pointerEvents = 'none'

const preLoader = document.querySelector('.loader')
preLoader.style.display = 'none'

const trainerWrapper = document.querySelector('.trainers-cards__container')


function createTrainersCard(arrayData) {
    arrayData.forEach(element => {
        let singleCardWrapper = createElem('li', 'trainer', null, null, trainerWrapper, 'append')
        let singleCardName = createElem('p', 'trainer__name', element['first name'] + ' ' + element['last name'], null, singleCardWrapper, 'append')
        let singleCardPhoto = createElem('img', 'trainer__img', null, element.photo, singleCardWrapper, 'prepend')
        let singleCardBtn = createElem('button', 'trainer__show-more', 'ПОКАЗАТИ', null, singleCardWrapper, 'append')

        singleCardBtn.addEventListener('click', (e) => {
            document.body.style.overflow = 'hidden'
            const modal = createElem('div', 'modal', null, null, document.body, 'append')
            const modalBody = createElem('div', 'modal__body', null, null, modal, 'append')

            const modalImg = createElem('img', 'modal__img', null, element.photo, modalBody, 'append')

            const modalDesc = createElem('div', 'modal__description', null, null, modalImg, 'after')
            const modalName = createElem('p', 'modal__name', element['first name'] + ' ' + element['last name'], null, modalDesc, 'append')
            const modalPointCategory = createElem('p', 'modal__point modal__point--category', 'Категорія: ' + element.category, null, modalDesc, 'append')
            const modalPointExperience = createElem('p', 'modal__point modal__point--experience', 'Досвід: ' + element.experience, null, modalDesc, 'append')
            const modalPointSpecialization = createElem('p', 'modal__point modal__point--specialization', 'Напрям тренера: ' + element.specialization, null, modalDesc, 'append')
            const modalText = createElem('p', 'modal__text', element.description, null, modalDesc, 'append')

            const modalClose = createElem('button', 'modal__close', null, null, modalBody, 'append')
            modalClose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"\n' +
                '                        width="30"\n' +
                '                        height="30"\n' +
                '                        viewBox="0 0 72 72">\n' +
                '                    <path d="M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z"></path>\n' +
                '                </svg>'

            modal.addEventListener('click', (e) => {
                if (e.target === e.currentTarget || e.target === modalClose) {
                    document.body.style.overflow = 'auto'
                    modal.remove()
                }
            })
        })
    })
}


const sortBtn = document.querySelectorAll('.sorting__btn')

function filterAndSortTrainersCards(arrayData) {
    const formFilter = document.querySelector('.sidebar__filters')
    const sortWrapper = document.querySelector('.sorting')

    let filteredArray = [...arrayData]
    let defaultFilteredArray = [...arrayData]
    const updateTrainers = () => {
        trainerWrapper.innerHTML = ''
        createTrainersCard(filteredArray)
    }

    updateTrainers()

    formFilter.addEventListener('submit', (e) => {
        e.preventDefault()
        preLoader.style.display = 'block'

        setTimeout(() => {
            const input1 = formFilter.querySelector('input[name="direction"]:checked').value
            const input2 = formFilter.querySelector('input[name="category"]:checked').value

            const specializationMap = {
                'gym': 'Тренажерний зал',
                'fight club': 'Бійцівський клуб',
                'kids club': 'Дитячий клуб',
                'swimming pool': 'Басейн',
            }

            const categoryMap = {
                'master': "майстер",
                'specialist': "спеціаліст",
                'instructor': "інструктор",
            }

            filteredArray = arrayData.filter(trainerCard => {
                if (input1 !== 'all' && trainerCard.specialization !== specializationMap[input1]) {
                    return false
                }
                if (input2 !== 'all' && trainerCard.category !== categoryMap[input2]) {
                    return false
                }
                return true
            })

            defaultFilteredArray = [...filteredArray]

            updateTrainers()
            preLoader.style.display = 'none'
        }, 1000)
    })


    sortWrapper.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget && e.target.type === 'button') {
            preLoader.style.display = 'block'

            setTimeout(() => {
                sortBtn.forEach(button => button.classList.remove('sorting__btn--active'))
                e.target.classList.add('sorting__btn--active')

                if (e.target.id === 'default') {
                    filteredArray = [...defaultFilteredArray]
                }

                if (e.target.id === 'lastName') {
                    filteredArray.sort((a, b) => a['last name'].localeCompare(b['last name'], 'uk', {sensitivity: 'base'}))
                }

                if (e.target.id === 'experience') {
                    filteredArray.sort((a, b) => parseInt(b.experience) - parseInt(a.experience));
                }

                updateTrainers()
                preLoader.style.display = 'none'
            }, 1000)
        }
    })
}


document.addEventListener('DOMContentLoaded', () => {
    const mainTimer = setTimeout(() => {
        mainWrapper.style.opacity = '1'
        mainWrapper.style.visibility = 'visible'

        clearTimeout(mainTimer)
    }, 1000)

    const filterAndSortTimer = setTimeout(() => {
        filterBlock.style.opacity = '1'
        filterBlock.style.pointerEvents = 'auto'

        sortBlock.style.opacity = '1'
        sortBlock.style.pointerEvents = 'auto'

        clearTimeout(filterAndSortTimer)
    }, 1500)

    filterAndSortTrainersCards(DATA)
})

/*todo Функція для створення елементів:*/

function createElem(tag, className, textContent, src, parent, place) {
    let crateTag = document.createElement(tag)
    crateTag.className = className
    crateTag.textContent = textContent
    crateTag.src = src

    switch (place) {
        case 'append':
            parent.append(crateTag)
            break
        case 'prepend':
            parent.prepend(crateTag)
            break
        case 'before':
            parent.before(crateTag)
            break
        case 'after':
            parent.after(crateTag)
            break
    }

    return crateTag
}