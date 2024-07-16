const quotes = [
    {
        quote: `"Get it down. Take chances. It may be bad, but it's the only way you can do anything really good."`,
        writer: `- William Faulkner`
    },
    {
        quote: `"The first draft is just you telling yourself the story."`,
        writer: `- Terry Pratchett`
    },
    {
        quote: `"The most valuable of all talents is that of never using two words when one will do."`,
        writer: `- Thomas Jefferson`
    },
    {
        quote: `"Start before you're ready."`,
        writer: `- Steven Pressfield`
    },
    {
        quote: `"You can always edit a bad page. You can't edit a blank page"`,
        writer: `- Jodi Picoult`
    },
    {
        quote: ` "You can't wait for inspiration. You have to go after it with a club." `,
        writer: `- Jack London`
    },
    {
        quote: `"I have never started a poem yet whose end I knew. Writing a poem is discovering."`,
        writer: `- Robert Frost`
    },
    {
        quote: `"If there's a book that you want to read, but it hasn't been written yet, then you must write it."`,
        writer: `- Toni Morrison`
    },
    {
        quote: `"I'm writing a first draft and reminding myself that I'm simply shoveling sand into a box so that later I can build castles."`,
        writer: `- Shannon Hale`
    },
    {
        quote: `"Description begins in the writer's imagination but should finish in the reader's."`,
        writer: `- Stephen King`
    },]


let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;

}

)
