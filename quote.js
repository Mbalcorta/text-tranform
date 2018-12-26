const quotes = [
  "I hope you’re doing ok. I hope that, if you celebrate, you are around family...I hope you get to wear whatever you want. I hope everyone is using your pronouns. I hope everyone is celebrating you. I love you.",
  "If you are having a horrible week. I need you to know you’re pretty not necessarily on the outside, maybe that too but you are beautiful and good as a human being.",
  "Its okay to need help. We learn we gotta do it ourself and We gotta grow up really fast and boy its okay to need help. Its okay to reach out on social.",
  "Its okay to feel you like you’re in chaos and youre having a breakdown. You’re a human being. However you are is okay.",
  "Life is hard and being different makes it even harder but being yourself shows resilience and that is beautiful. Continue being you. You are loved",
  "I hope you are taking good care. Take a rest. Take a shower. Make a vow to spend quality time with yourself tomorrow. Take yourself on a date. Read a good book. Be careful with your own heart.",
  "I wanted to tell you that this self-policing is not working. You are fundamentally deep down a good person and you are not aware of that or you were taught to assume you are an awful person. I can’t stress for you enough how important it is that you give that up. That you see yourself from the outside and realize how good and how fundamentally well intentioned and good you are. You deserve to let go and be good.",
  "You give me hope, you as an activist give me hope for the future. For the next things that will be happening in our movement. Who you are as a person gives me hope.  That you see me, that youunderstand how gender work, that you understand how the world works, and that you understand to be nice to other human beings. You give me hope."
]

module.exports = function comment(){
 return quotes[Math.floor(Math.random()*quotes.length)];
}