const blogContainer = document.querySelector(".blog-container");
const hiddenBlog = document.querySelector(".hide-blog");
const readMoreBtn = document.querySelector(".read-more-btn");
const closeBtn = document.querySelector(".close-btn");

function showBlog () {
    hiddenBlog.classList.remove("hide")
    closeBtn.classList.remove("hide")
    readMoreBtn.classList.add("hide")
    console.log("Running the btn")
}
readMoreBtn.addEventListener("click", showBlog)


function wrappedBlog () {
    hiddenBlog.classList.add("hide")
    closeBtn.classList.add("hide")
    readMoreBtn.classList.remove("hide")
    console.log("Running the btn")  
}

closeBtn.addEventListener("click", wrappedBlog)