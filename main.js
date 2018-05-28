$( document ).ready(function() {
  console.log( 'ready!' );
  $('#quote').hide();
  $('#author').hide();

  $("button").click(function(){
        var div = $('#quote-btn');
        var qoute = $('#quote');
        var author = $('#author');
        var randInt = 0 + Math.floor(Math.random() * 5);

        qoute.text(data[randInt].phrase);
        author.text(data[randInt].author);
        qoute.fadeIn("slow");
        author.fadeIn("slow");
    });

});

var data = {
  "0": {
    "phrase": "No matter what has happened. No matter what you’ve done. No matter what you will do. I will always love you. I swear it.",
    "author": "- C.J. Redwine"
  },
  "1": {
    "phrase": "I wanted to tell you that wherever I am, whatever happens, I’ll always think of you, and the time we spent together, as my happiest time. I’d do it all over again, if I had the choice. No regrets.",
    "author": "- Cynthia Hand"
  },
  "2": {
    "phrase": "And in your smile I see something more beautiful than the stars.",
    "author": "- Beth Revis"
  },
  "3": {
    "phrase": "It’s one thing to fall in love. It’s another to feel someone else fall in love with you, and to feel a responsibility toward that love.",
    "author": "- David Levithan"
  },
  "4": {
    "phrase": "I love you the way a drowning man loves air. And it would destroy me to have you just a little.",
    "author": "- Rae Carson"
  },
  "5": {
    "phrase": "I’m in love with you, and I’m not in the business of denying myself the simple pleasure of saying true things. I’m in love with you, and I know that love is just a shout into the void, and that oblivion is inevitable, and that we’re all doomed and that there will come a day when all our labor has been returned to dust, and I know the sun will swallow the only earth we’ll ever have, and I am in love with you.",
    "author": "- John Green"
  },
  "6": {
    "phrase": "I never loved you any more than I do, right this second. And I’ll never love you any less than I do, right this second.",
    "author": "- Kami Garcia, Margaret Stohl"
  },
  "7": {
    "phrase": "Sometimes I can’t see myself when I’m with you. I can only just see you.",
    "author": "- Jodi Lynn Anderson"
  },
  "8": {
    "phrase": "I am catastrophically in love with you.",
    "author": "- Cassandra Clare"
  },
  "9": {
    "phrase": "I knew the second I met you that there was something about you I needed. Turns out it wasn’t something about you at all. It was just you.",
    "author": "- Jamie McGuire"
  },
  "10": {
    "phrase": "I want everyone to meet you. You’re my favorite person of all time.",
    "author": "- Rainbow Rowell"
  },
  "11": {
    "phrase": "If my love were an ocean, there would be no more land. If my love were a desert, you would see only sand. If my love were a star- late at night, only light. And if my love could grow wings, I’d be soaring in flight.",
    "author": "- Jay Asher"
  },
  "12": {
    "phrase": "I don’t care how hard being together is, nothing is worse than being apart.",
    "author": "- Josephine Angelini"
  },
  "13": {
    "phrase": "But you’ve slipped under my skin, invaded my blood and seized my heart",
    "author": "- Maria V. Snyder"
  },
  "14": {
    "phrase": "No matter where I went, I always knew my way back to you. You are my compass star.",
    "author": "- Diana Peterfreund"
  },
  "15": {
    "phrase": "You. I’ve spent my life waiting for you.",
    "author": "- Melissa Marr"
  },
  "16": {
    "phrase": "Whatever you need, I’ll be. If you need the science geek to give you answers from a textbook, I’m your guy; if you just want a friend to sit by you in bio and help you feel better when you’re sad, I’m still your guy.",
    "author": "- Aprilynne Pike"
  },
  "17": {
    "phrase": "I’m in love with you, and I’m not in the business of denying myself the simple pleasure of saying true things.",
    "author": "- John Green"
  },
  "18": {
    "phrase": "I’ll take care of you. Like you take care of me.",
    "author": "- Kristin Halbrook"
  },
  "19": {
    "phrase": "You made me feel alive again.",
  }
}
