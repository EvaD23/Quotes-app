const QUOTES = [
    {
        "q": "We make a living by what we get, but we make a life by what we give.",
        "a": "Unknown",
        "c": "68",
        "h": "<blockquote>&ldquo;We make a living by what we get, but we make a life by what we give.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
    },
    {
        "q": "Silence is a source of great strength.",
        "a": "Lao Tzu",
        "c": "38",
        "h": "<blockquote>&ldquo;Silence is a source of great strength.&rdquo; &mdash; <footer>Lao Tzu</footer></blockquote>"
    },
    {
        "q": "It isn't what you do, but how you do it.",
        "a": "John Wooden",
        "c": "40",
        "h": "<blockquote>&ldquo;It isn't what you do, but how you do it.&rdquo; &mdash; <footer>John Wooden</footer></blockquote>"
    },
    {
        "q": "Make each day a new horizon.",
        "a": "Christopher McCandless",
        "c": "28",
        "h": "<blockquote>&ldquo;Make each day a new horizon.&rdquo; &mdash; <footer>Christopher McCandless</footer></blockquote>"
    },
    {
        "q": "Respect is earned by effort not age, all things age without effort.",
        "a": "C. Sean McGee",
        "c": "67",
        "h": "<blockquote>&ldquo;Respect is earned by effort not age, all things age without effort.&rdquo; &mdash; <footer>C. Sean McGee</footer></blockquote>"
    },
    {
        "q": "Learning is a weightless treasure you can always carry easily.",
        "a": "Chinese Proverb",
        "c": "62",
        "h": "<blockquote>&ldquo;Learning is a weightless treasure you can always carry easily.&rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>"
    },
    {
        "q": "Some men see things as they are and ask why. Others dream things that never were and ask why not.",
        "a": "George Bernard Shaw",
        "c": "97",
        "h": "<blockquote>&ldquo;Some men see things as they are and ask why. Others dream things that never were and ask why not.&rdquo; &mdash; <footer>George Bernard Shaw</footer></blockquote>"
    },
    {
        "q": "To live is the rarest thing in the world. Most people exist, that is all. ",
        "a": "Oscar Wilde",
        "c": "74",
        "h": "<blockquote>&ldquo;To live is the rarest thing in the world. Most people exist, that is all. &rdquo; &mdash; <footer>Oscar Wilde</footer></blockquote>"
    },
    {
        "q": "Throughout this life, you can never be certain of living long enough to take another breath.",
        "a": "Zen Proverb",
        "c": "92",
        "h": "<blockquote>&ldquo;Throughout this life, you can never be certain of living long enough to take another breath.&rdquo; &mdash; <footer>Zen Proverb</footer></blockquote>"
    },
    {
        "q": "Your life does not get better by chance, it gets better by change.",
        "a": "Jim Rohn",
        "c": "66",
        "h": "<blockquote>&ldquo;Your life does not get better by chance, it gets better by change.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>"
    },
    {
        "q": "Why compare yourself with others? No one in the entire world can do a better job of being you than you.",
        "a": "Unknown",
        "c": "103",
        "h": "<blockquote>&ldquo;Why compare yourself with others? No one in the entire world can do a better job of being you than you.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
    },
    {
        "q": "I hear and I forget. I see and I remember. I do and I understand. ",
        "a": "Confucius",
        "c": "66",
        "h": "<blockquote>&ldquo;I hear and I forget. I see and I remember. I do and I understand. &rdquo; &mdash; <footer>Confucius</footer></blockquote>"
    },
    {
        "q": "If they wrote it to make money, don't read it.",
        "a": "Naval Ravikant",
        "c": "46",
        "h": "<blockquote>&ldquo;If they wrote it to make money, don't read it.&rdquo; &mdash; <footer>Naval Ravikant</footer></blockquote>"
    },
    {
        "q": "Every day do something that will inch you closer to a better tomorrow.",
        "a": "Unknown",
        "c": "70",
        "h": "<blockquote>&ldquo;Every day do something that will inch you closer to a better tomorrow.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
    },
    {
        "q": "Ripe fruit falls by itself - but it doesn't fall in your mouth. ",
        "a": "Chinese Proverb",
        "c": "64",
        "h": "<blockquote>&ldquo;Ripe fruit falls by itself - but it doesn't fall in your mouth. &rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>"
    },
    {
        "q": "The more we have the less we own.",
        "a": "Meister Eckhart",
        "c": "33",
        "h": "<blockquote>&ldquo;The more we have the less we own.&rdquo; &mdash; <footer>Meister Eckhart</footer></blockquote>"
    },
    {
        "q": "The chief danger in life is that you may take too many precautions.",
        "a": "Alfred Adler",
        "c": "67",
        "h": "<blockquote>&ldquo;The chief danger in life is that you may take too many precautions.&rdquo; &mdash; <footer>Alfred Adler</footer></blockquote>"
    },
    {
        "q": "When you have to make a choice and don't make it, that is in itself a choice.",
        "a": "William James",
        "c": "77",
        "h": "<blockquote>&ldquo;When you have to make a choice and don't make it, that is in itself a choice.&rdquo; &mdash; <footer>William James</footer></blockquote>"
    },
    {
        "q": "Realistic people do not accomplish extraordinary things.",
        "a": "John Eliot",
        "c": "56",
        "h": "<blockquote>&ldquo;Realistic people do not accomplish extraordinary things.&rdquo; &mdash; <footer>John Eliot</footer></blockquote>"
    },
    {
        "q": "The journey, not the destination matters.",
        "a": "T.S. Eliot",
        "c": "41",
        "h": "<blockquote>&ldquo;The journey, not the destination matters.&rdquo; &mdash; <footer>T.S. Eliot</footer></blockquote>"
    },
    {
        "q": "Be fascinated instead of frustrated.",
        "a": "Jim Rohn",
        "c": "36",
        "h": "<blockquote>&ldquo;Be fascinated instead of frustrated.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>"
    },
    {
        "q": "All our knowledge has its origins in our perceptions.",
        "a": "Leonardo da Vinci",
        "c": "53",
        "h": "<blockquote>&ldquo;All our knowledge has its origins in our perceptions.&rdquo; &mdash; <footer>Leonardo da Vinci</footer></blockquote>"
    },
    {
        "q": "Yesterday is the past, tomorrow is the future, today is a gift - that's why it's called the present.",
        "a": "George Bernard Shaw",
        "c": "100",
        "h": "<blockquote>&ldquo;Yesterday is the past, tomorrow is the future, today is a gift - that's why it's called the present.&rdquo; &mdash; <footer>George Bernard Shaw</footer></blockquote>"
    },
    {
        "q": "You don't need to be better than anyone else, you just need to be better than you used to be.",
        "a": "Wayne Dyer",
        "c": "93",
        "h": "<blockquote>&ldquo;You don't need to be better than anyone else, you just need to be better than you used to be.&rdquo; &mdash; <footer>Wayne Dyer</footer></blockquote>"
    },
    {
        "q": "Would you rather learn to deal with the truth now than be forced to do so later on?",
        "a": "Celestine Chua",
        "c": "83",
        "h": "<blockquote>&ldquo;Would you rather learn to deal with the truth now than be forced to do so later on?&rdquo; &mdash; <footer>Celestine Chua</footer></blockquote>"
    },
    {
        "q": "The greatest value of a picture is when it forces us to notice what we never expected to see.",
        "a": "John Tukey",
        "c": "93",
        "h": "<blockquote>&ldquo;The greatest value of a picture is when it forces us to notice what we never expected to see.&rdquo; &mdash; <footer>John Tukey</footer></blockquote>"
    },
    {
        "q": "When you know what you want, and want it bad enough, you will find a way to get it.",
        "a": "Jim Rohn",
        "c": "83",
        "h": "<blockquote>&ldquo;When you know what you want, and want it bad enough, you will find a way to get it.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>"
    },
    {
        "q": "Silence is a source of great strength.",
        "a": "Lao Tzu",
        "c": "38",
        "h": "<blockquote>&ldquo;Silence is a source of great strength.&rdquo; &mdash; <footer>Lao Tzu</footer></blockquote>"
    },
    {
        "q": "Some changes look negative on the surface but you will soon realize that space is being created in your life for something new to emerge.",
        "a": "Eckhart Tolle",
        "c": "137",
        "h": "<blockquote>&ldquo;Some changes look negative on the surface but you will soon realize that space is being created in your life for something new to emerge.&rdquo; &mdash; <footer>Eckhart Tolle</footer></blockquote>"
    },
    {
        "q": "Exceptional thinkers ignore their critics and go about their business making history.",
        "a": "John Eliot",
        "c": "85",
        "h": "<blockquote>&ldquo;Exceptional thinkers ignore their critics and go about their business making history.&rdquo; &mdash; <footer>John Eliot</footer></blockquote>"
    },
    {
        "q": "Closing your eyes and listening to silence is self-care.",
        "a": "Maxime Lagace",
        "c": "56",
        "h": "<blockquote>&ldquo;Closing your eyes and listening to silence is self-care.&rdquo; &mdash; <footer>Maxime Lagace</footer></blockquote>"
    },
    {
        "q": "There are no second chances in life, except to feel remorse.",
        "a": "Carlos Ruiz Zafon",
        "c": "60",
        "h": "<blockquote>&ldquo;There are no second chances in life, except to feel remorse.&rdquo; &mdash; <footer>Carlos Ruiz Zafon</footer></blockquote>"
    },
    {
        "q": "In peace, sons bury their fathers. In war, fathers bury their sons. ",
        "a": "Herodotus",
        "c": "68",
        "h": "<blockquote>&ldquo;In peace, sons bury their fathers. In war, fathers bury their sons. &rdquo; &mdash; <footer>Herodotus</footer></blockquote>"
    },
    {
        "q": "You purchase pain with all that joy can give and die of nothing but a rage to live.",
        "a": "Alexander Pope",
        "c": "83",
        "h": "<blockquote>&ldquo;You purchase pain with all that joy can give and die of nothing but a rage to live.&rdquo; &mdash; <footer>Alexander Pope</footer></blockquote>"
    },
    {
        "q": "The fear of death is more to be feared, than death itself.",
        "a": "Publilius Syrus",
        "c": "58",
        "h": "<blockquote>&ldquo;The fear of death is more to be feared, than death itself.&rdquo; &mdash; <footer>Publilius Syrus</footer></blockquote>"
    },
    {
        "q": "The most virtuous are those who content themselves with being virtuous without seeking to appear so.",
        "a": "Plato",
        "c": "100",
        "h": "<blockquote>&ldquo;The most virtuous are those who content themselves with being virtuous without seeking to appear so.&rdquo; &mdash; <footer>Plato</footer></blockquote>"
    },
    {
        "q": "Courage Is a Love Affair with the Unknown",
        "a": "Osho",
        "c": "41",
        "h": "<blockquote>&ldquo;Courage Is a Love Affair with the Unknown&rdquo; &mdash; <footer>Osho</footer></blockquote>"
    },
    {
        "q": "Life is a question and how we live it is our answer.",
        "a": "Gary Keller",
        "c": "52",
        "h": "<blockquote>&ldquo;Life is a question and how we live it is our answer.&rdquo; &mdash; <footer>Gary Keller</footer></blockquote>"
    },
    {
        "q": "You don't need a weatherman to know which way the wind blows.",
        "a": "Bob Dylan",
        "c": "61",
        "h": "<blockquote>&ldquo;You don't need a weatherman to know which way the wind blows.&rdquo; &mdash; <footer>Bob Dylan</footer></blockquote>"
    },
    {
        "q": "Trust in dreams, for in them is the hidden gate to eternity.  ",
        "a": "Kahlil Gibran",
        "c": "62",
        "h": "<blockquote>&ldquo;Trust in dreams, for in them is the hidden gate to eternity.  &rdquo; &mdash; <footer>Kahlil Gibran</footer></blockquote>"
    },
    {
        "q": "You are a function of what the whole universe is doing in the same way that a wave is a function of what the whole ocean is doing.",
        "a": "Alan Watts",
        "c": "130",
        "h": "<blockquote>&ldquo;You are a function of what the whole universe is doing in the same way that a wave is a function of what the whole ocean is doing.&rdquo; &mdash; <footer>Alan Watts</footer></blockquote>"
    },
    {
        "q": "Be true to yourself, help others, make each day your masterpiece",
        "a": "John Wooden",
        "c": "64",
        "h": "<blockquote>&ldquo;Be true to yourself, help others, make each day your masterpiece&rdquo; &mdash; <footer>John Wooden</footer></blockquote>"
    },
    {
        "q": "It does not do to dwell on dreams and forget to live, remember that.",
        "a": "Albus Dumbledore",
        "c": "68",
        "h": "<blockquote>&ldquo;It does not do to dwell on dreams and forget to live, remember that.&rdquo; &mdash; <footer>Albus Dumbledore</footer></blockquote>"
    },
    {
        "q": "The only defense against the world is a thorough knowledge of it.",
        "a": "John Locke",
        "c": "65",
        "h": "<blockquote>&ldquo;The only defense against the world is a thorough knowledge of it.&rdquo; &mdash; <footer>John Locke</footer></blockquote>"
    },
    {
        "q": "Attitude, not aptitude, determines altitude.  ",
        "a": "Zig Ziglar",
        "c": "46",
        "h": "<blockquote>&ldquo;Attitude, not aptitude, determines altitude.  &rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>"
    },
    {
        "q": "Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.",
        "a": "Sun Tzu",
        "c": "110",
        "h": "<blockquote>&ldquo;Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.&rdquo; &mdash; <footer>Sun Tzu</footer></blockquote>"
    },
    {
        "q": "Opportunity often comes disguised in the form of misfortune or temporary defeat.",
        "a": "Napoleon Hill",
        "c": "80",
        "h": "<blockquote>&ldquo;Opportunity often comes disguised in the form of misfortune or temporary defeat.&rdquo; &mdash; <footer>Napoleon Hill</footer></blockquote>"
    },
    {
        "q": "The only real security that a man can have in this world is a reserve of knowledge, experience and ability. ",
        "a": "Henry Ford",
        "c": "108",
        "h": "<blockquote>&ldquo;The only real security that a man can have in this world is a reserve of knowledge, experience and ability. &rdquo; &mdash; <footer>Henry Ford</footer></blockquote>"
    },
    {
        "q": "A real decision is measured by the fact that you've taken a new action. If there's no action, you haven't truly decided.",
        "a": "Tony Robbins",
        "c": "120",
        "h": "<blockquote>&ldquo;A real decision is measured by the fact that you've taken a new action. If there's no action, you haven't truly decided.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
    },
    {
        "q": "Give so much away people insist on paying you.",
        "a": "Jack Butcher",
        "c": "46",
        "h": "<blockquote>&ldquo;Give so much away people insist on paying you.&rdquo; &mdash; <footer>Jack Butcher</footer></blockquote>"
    }
]