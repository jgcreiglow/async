
const axios = require('axios'); 
function getCoffee() {
  console.log("oh man, this presentation is exhausting. I need some coffee!");
  //this function returns a Promise  
  return new Promise(resolve => {
    setTimeout(() => resolve('☕☕☕☕☕☕☕☕☕☕☕☕☕'), 10000); // 
  });
}
//Take a simple function and add async to the beginning:
async function go() {
  try {

    const coffee = await getCoffee();
    console.log(coffee);
    console.log("ahh! that's better! let's look people up on github and look at some comics!")  

    const jess = await axios('https://api.github.com/users/jgcreiglow');
    
      setTimeout(() =>   console.log(jess.data.name +  " hmmm....she seems pretty good at this"), 10000);

        const firstPromise = axios('https://xkcd.com/1481/info.0.json');
        const secondPromise = axios('https://xkcd.com/1781/info.0.json');
        const thirdPromise = axios('https://xkcd.com/181/info.0.json');
        const fourthPromise = axios('https://xkcd.com/1/info.0.json');
        const fifthPromise = axios('https://xkcd.com/321/info.0.json');
        const sixthPromise = axios('https://xkcd.com/141/info.0.json');
        const seventhPromise = axios('https://xkcd.com/148/info.0.json');


    const [first, second, third, fourth, fifth, sixth, seventh, ] = await Promise.all([firstPromise, secondPromise, thirdPromise, fourthPromise, fifthPromise, sixthPromise, seventhPromise]);


      setTimeout(() =>
      console.log(first.data.title, first.data.transcript, first.data.img, second.data.title, second.data.transcript, second.data.img,  third.data.title, third.data.transcript, third.data.img, fourth. data.title, fourth.data.transcript, fourth.data.img, fifth.data.title, fifth.data.transcript, fifth.data.img, sixth.data.title, sixth.data.transcript, sixth.data.img, seventh.data.title, seventh.data.transcript, seventh.data.img,   ), 15000); 
  } catch (e) {
    console.log(e); 
    }
}

go();

