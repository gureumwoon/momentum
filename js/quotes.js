const quotes = [
    {
        quote: "이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라. ",
        author: "-탈무드",
    },
    {
        quote: " 삶이 있는 한 희망은 있다. ",
        author: "-키케로",
    },
    {
        quote: " 이룰수 없는 꿈을 꾸고 이길수 없는 적과 싸우며, 이룰수 없는 사랑을 하고 견딜 수 없는 고통을 견디고,잡을수 없는 저 하늘의 별도 잡자",
        author: "-세르반테스",
    },
    {
        quote: " 당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다 ",
        author: "-헨리 포드",
    },
    {
        quote: " 단순하게 살라. 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가? ",
        author: "-이드리스 샤흐",
    },
    {
        quote: " 문제는 목적지에 얼마나 빨리 가느내가 아니라 그 목적지가 어디냐는 것이다. ",
        author: "-메이벨 뉴컴버",
    },
    {
        quote: " 한 번 실패와 영원한 실패를 혼동하지 마라. ",
        author: "-F.스콧 핏제랄드",
    },
    {
        quote: " 삶을 사는 데는 단 두가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는방식이다. ",
        author: "-알베르트 아인슈타인",
    },
    {
        quote: " 네 믿음은 네 생각이 된다 . 네 생각은  네 말이 된다. 네말은 네 행동이 된다 네행동은 네 습관이된다 . 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다. ",
        author: "-간디",
    },
    {
        quote: " 길을 잃는 다는 것은 곧 길을 알게 된다는 것이다. ",
        author: "-동아프리카속담",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;