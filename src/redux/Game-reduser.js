const initialState = [[
    "Какой твой самый большой страх?",
    "Кого ты бы хотел встретить из знаменитостей?",
    "Какой самый неловкий момент в твоей жизни?",
    "Какое твое самое странное увлечение?",
    "Какой самый большой секрет ты когда-либо хранил?",
    "Что ты сделал бы, если бы выиграл миллион долларов?",
    "Какой твой самый позорный момент в школе?",
    "Какой самый смелый поступок ты когда-либо совершал?",
    "Кого из своих друзей ты считаешь самым странным?",
    "Какое самое безумное решение ты когда-либо принимал?",
    "Какой твой любимый фильм и почему?",
    "Какой навык ты хотел бы освоить, но еще не научился?",
    "Какой самый смешной сон тебе когда-либо снился?",
    "Какой самый странный подарок ты когда-либо получал?",
    "Какой твой самый любимый момент из детства?",
    "Какой твой самый большой провал?",
    "Что ты всегда хотел попробовать, но боялся?",
    "Какой твой самый любимый музыкальный жанр?",
    "Какой самый странный комплимент ты когда-либо получал?",
    "Какой самый необычный опыт у тебя был в путешествиях?",
    "Какой твой самый большой успех?",
    "Какой твой любимый способ расслабиться?",
    "Какой самый неловкий вопрос тебе когда-либо задавали?",
    "Какой твой любимый способ провести выходные?",
    "Какой твой самый смешной случай на работе?",
    "С кем из известных людей ты бы хотел провести день?",
    "Какой самый интересный факт о тебе?",
    "Какой твой любимый вид спорта?",
    "Какой самый странный закон ты когда-либо слышал?",
    "Какой самый романтичный жест ты когда-либо делал?",
    "Какой твой самый любимый праздник и почему?",
    "Какой самый странный вкус еды ты когда-либо пробовал?",
    "Какой твой самый большой страх в отношениях?",
    "Какой твой самый любимый сериал?",
    "Какой твой самый странный опыт с интернет-знакомствами?",
    "Какой самый необычный подарок ты когда-либо дарил?",
    "Какой самый неловкий момент на свидании у тебя был?",
    "Какой твой самый любимый способ провести вечер?",
    "Какой самый смешной случай из твоей жизни?",
    "Какой твой любимый способ общения с друзьями?",
    "Какой твой самый большой секрет, который ты можешь раскрыть?",
    "Какой самый странный вопрос тебе когда-либо задавали на интервью?",
    "Какой твой самый любимый способ провести отпуск?",
    "Какой самый смешной мем ты когда-либо видел?",
    "Какой твой самый странный опыт с животными?",
    "Какой твой любимый способ поддерживать физическую форму?",
    "Какой самый неловкий момент на семейном празднике у тебя был?",
    "Какой твой самый любимый вид искусства?",
    "Какой самый странный сон тебе когда-либо снился?",
    "Какой твой самый большой успех в учебе?",
    "Какой самый смешной момент в твоей семье?",
    "Какой твой самый любимый вид кухни?",
    "Какой самый странный комплимент ты когда-либо получал?",
    "Какой твой самый любимый способ провести время с семьей?",
    "Какой самый необычный предмет ты когда-либо коллекционировал?",
    "Какой самый смешной случай на вечеринке у тебя был?",
    "Какой твой самый любимый способ самовыражения?",
    "Какой самый странный вопрос ты когда-либо задавал?",
    "Какой твой самый любимый способ отметить день рождения?",
    "Какой самый неловкий момент на свадьбе у тебя был?",
    "Какой твой самый любимый способ путешествовать?",
    "Какой самый смешной случай на отдыхе у тебя был?",
    "Какой твой самый любимый способ провести время на природе?",
    "Какой самый странный опыт с едой у тебя был?",
    "Какой твой самый любимый способ поддерживать связь с друзьями?",
    "Какой самый смешной анекдот ты знаешь?",
    "Какой твой самый большой страх в жизни?",
    "Какой самый странный вопрос ты когда-либо слышал?",
    "Какой твой самый любимый способ отмечать достижения?",
    "Какой самый неловкий момент в твоем детстве?",
    "Какой самый смешной случай на работе у тебя был?",
    "Какой твой самый любимый способ провести время в одиночестве?",
    "Какой самый странный звук ты когда-либо слышал?",
    "Какой твой самый большой успех в карьере?",
    "Какой самый смешной момент на встрече с друзьями у тебя был?",
    "Какой твой самый любимый способ провести время с любимым человеком?",
    "Какой самый странный вопрос ты когда-либо задавал своему другу?",
    "Какой твой самый любимый способ расслабиться после тяжелого дня?",
    "Какой самый неловкий момент на встрече с родителями твоего партнера?",
    "Какой самый смешной случай на празднике у тебя был?",
    "Какой твой самый большой страх перед будущим?",
    "Какой самый странный подарок ты когда-либо дарил?",
    "Какой твой самый любимый способ провести время с детьми?",
    "Какой самый смешной случай на концерте у тебя был?",
    "Какой твой самый любимый способ отметить успехи друзей?",
    "Какой самый странный вопрос ты когда-либо задавал своему учителю?",
    "Какой твой самый любимый способ провести вечер с друзьями?",
    "Какой самый смешной момент в твоем классе?",
    "Какой твой самый большой успех в спорте?",
    "Какой самый странный опыт на работе у тебя был?",
    "Какой твой самый любимый способ провести время на выходных?",
    "Какой самый смешной момент на семейной встрече у тебя был?",
    "Какой твой самый любимый способ выразить благодарность?",
    "Какой самый странный вопрос ты когда-либо задавал себе?",
    "Какой твой самый любимый способ провести время с родителями?",
    "Какой самый смешной случай на учебе у тебя был?",
    "Какой твой самый большой страх в публичных выступлениях?",
],[
    "Выйди на улицу и крикни первому встречному: «Я люблю вас».",
    "Скажи три комплимента человеку слева от тебя.",
    "Говори с высунутым языком в течение 30 секунд.",
    "Сделай смешное лицо и удерживай его в течение 10 секунд.",
    "Прочитай вслух текст из последнего сообщения в своем телефоне.",
    "Спой любимую песню оперным голосом.",
    "Пой песню, которую ты стесняешься.",
    "Скажи что-то, что ты никогда никому не говорил.",
    "Сделай некрасивое селфи и опубликуй его, как фото профиля.",
    "Изобрази животное, пока другие не угадают, что это.",
    "Сделай селфи с самым странным выражением лица.",
    "Скажи, что ты думаешь о каждом участнике игры.",
    "Сделай массаж плеча человеку справа от тебя.",
    "Сними носки зубами.",
    "Надень на руки носки до конца игры.",
    "Напиши свое имя в воздухе языком.",
    "Притворись роботом на следующие три круга.",
    "Станцуй как будто никто не смотрит.",
    "Расскажи несмешную шутку.",
    "Сделай вид, что ты ведешь интервью с кем-то из участников.",
    "До следующего раунда говори очень громко, как будто тебя никто не слышит.",
    "Сделай что-то, что тебя пугает.",
    "Придумай и расскажи короткую историю о том, как ты стал супергероем.",
    "Изобрази своего любимого персонажа из фильма или сериала.",
    "Скажи что-нибудь на иностранном языке.",
    "Спланируй романтическое свидание.",
    "Покажи, как ты выглядел в детстве.",
    "Поцелуй в нос каждого присутствующего в доме. ",
    "Позвони парню/девушке, который тебе нравится.",
    "Сделай вид, что ты ведешь урок танцев.",
    "Позволь кому-то уложить твои волосы и ходи с этой прической до конца дня.",
    "Пей воду и одновременно издавай отталкивающие звуки, будто ты огр или гоблин. ",
    "Скажи, кто твой самый большой кумир и почему.",
    "Сделай комплимент каждому участнику игры.",
    "Издавай неприятные звуки, когда ешь или пьешь.",
    "Изобрази, как ты готовишь свое любимое блюдо.",
    "Выкрикните первое слово, которое придет вам в голову прямо сейчас.",
    "Скажи, что ты хотел бы изменить в своем прошлом.",
    "Сделайте массаж кому-нибудь из присутствующих.",
    "Скажи, что ты думаешь об игре 'Правда или Действие'.",
    "Придумай смешное имя для себя и представься им.",
    "Станцуй, как будто ты на вечеринке в 80-х.",
    "Разговаривай, не закрывая рот.",
    "Скажи, какой у тебя самый странный хобби.",
    "Ведите себя как обезьяна, пока не придет ваша очередь отвечать.",
    "Придумайте название фильма для каждого игрока о его жизни.",
    "Скажи, какой у тебя самый странный опыт.",
    "Веди себя, как животное, выбранное участниками.",
    "Скажи, что ты больше всего любишь в своем городе.",
    "Изобрази своего любимого актера.",
    "Позвольте человеку справа пощекотать вас.",
    "Нарисуй что-то на лице маркером.",
    "Скажи, какой у тебя самый странный талант.",
    "Спародируйте человека слева от вас.",
    "Скажи, что ты думаешь о своих друзьях.",
    "Притворись будто плачешь.",
    "Изобрази, как ты выглядел, когда был ребенком.",
    "До конца игры вы должны кудахтать в начале и в конце каждой своей реплики.",
    "Скажи, какой у тебя самый смешной момент в жизни.",
    "Используй расческу, как микрофон каждый раз, когда говоришь с кем-то.",
    "Скажи, что ты больше всего ценишь в своих друзьях.",
    "Ведите себя как болельщик и изо всех сил подбадривайте следующего игрока.",
    "Изобрази, как ты ведешь свой собственный блог.",
    "Используйте кетчуп или помаду, чтобы поставить себе на лбу знак как у Симбы.",
    "Скажи, что ты больше всего любишь в своей семье.",
    "Покажите другим игрокам 5 последних фотографий в вашей галерее.",
    "Изобрази, как ты выглядел, когда был подростком.",
    "Изобразите любого певца или певицу.",
    "Скажи, что ты думаешь о своих увлечениях.",
    "Съешьте или выпейте что-нибудь, не используя руки.",
    "Скажи, что ты больше всего ценишь в своей жизни.",
    "Сидите на коленях другого игрока до следующего раунда.",
    "Изобрази, как ты ведешь свою собственную программу на телевидении.",
    "Сосите свой большой палец в течение следующих 3 раундов.",
    "Скажи, какой у тебя самый смешной опыт на работе.",
    "Снимите с себя одну вещь.",
    "Скажи, что ты больше всего ценишь в своем образовании.",
    "Изобразите игрока в баскетбол, который забрасывает победный мяч.",
    "Изобрази, как ты выглядел, когда был в детском саду.",
    "Спародируйте лунную походку Майкла Джексона.",
    "Скажи, что ты думаешь о своих мечтах.",
    "Положите обе руки в карманы другого игрока и держите их там в течение 15 минут."
]]

const GameReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default GameReducer;