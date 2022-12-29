var quotes = [
  "Such, Polly, are your sex - part truth, part fiction; Some thought, much whim, and all contradiction.",
  "Nobody who is somebody looks down on anybody.",
  "Trust your gut.",
  "France, freed from that monster, Bonaparte, must again become the most agreeable country on earth. It would be the second choice of all whose ties of family and fortune give a preference to some other one, and the first choice of all not under those ties.",
  "Ah! the clock is always slow; it is later than you think.",
  "If you strike a thorn or rose, Keep a-goin! If it hails or if it snows, Keep a-goin! 'Tain't no use to sit and whine 'Cause the fish ain't on your line; Bait your hook an' keep on tryin'. Keep a-goin!",
  "A life of reaction is a life of slavery, intellectually and spiritually. One must fight for a life of action, not reaction.",
  "Independence may be found in comparative as well as in absolute abundance; I mean where a person contracts his desires within the limits of his fortune.",
  "I dreamt that I dwelt in marble halls, With vassals and serfs at my side.",
  "Hope is a satisfaction unto itself, and need not be fulfilled to be appreciated.",
  "It makes all the difference in the world whether we put truth in the first place, or in the second place.",
  "His speech flowed from his tongue sweeter than honey."
];

var authors = [
  "- Richard Savage",
  "- Margaret Deland",
  "- Barbara Walters",
  "- Thomas Jefferson",
  "- Robert W. Service",
  "- Frank L. Stanton",
  "- Rita Mae Brown",
  "- William Shenstone",
  "- Alfred Bunn",
  "- Dr. Fred O. Henker",
  "- John Morley",
  "- Homer"
];

for(var i = 0;i<authors.length;i++) {
  var index = i+1;
  var nextIndex = i+2;
  var str = 'carousel-item ' +'item' + nextIndex;
  $(`.item${index}`).after(`<div class= "${str}">
    <h2>${quotes[i]}</h2>
    <h3>${authors[i]}</h3>
  </div>`);
}
