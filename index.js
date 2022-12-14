import {blogData} from "./data.js"
import {aboutMe} from "/about.js"

//EVENT LISTENERS
document.addEventListener("click", function(e){
    if (e.target.id === "home"){
        renderBlogList()
    } 
    else if (e.target.id === "about"){
        about()
    }
    else if(e.target.id === "view-more"){
        viewMore()
    }
    else if(e.target.id === "view-less"){
        viewLess()
    }
    else if(e.target.dataset.blog){
        renderBlog(e.target.dataset.blog)
    } 
    else if(e.target.dataset.hero){
        renderHero(e.target.dataset.hero)
    }
})



//CLEAR START PAGE TO SHOW FULL BLOG
function clearStart(){
    document.getElementById("heroImg").classList.add("hidden")
    document.getElementById("blog-info-hero").classList.add("hidden")
    document.getElementById("recent").classList.remove("hidden")
    document.getElementById("about-me").classList.add("hidden")
    document.getElementById("blog-full").classList.remove("hidden")
}

//HIDE ABOUT ME & RECENT HEADING SECTION
function hideRecentandAbout(){
    document.getElementById("about-me").classList.add("hidden")
    document.getElementById("recent").classList.add("hidden")
}

//HIDE OPTION TO VIEW MORE
function hideViewMore(){
    document.getElementById("view-more").classList.add("hidden")
}

//SHOW OPTION TO VIEW MORE
function showViewMore(){
    document.getElementById("view-more").classList.remove("hidden")
}

//HIDE FULL BLOG
function hideFullBlog(){
    document.getElementById("blog-full").classList.add("hidden")
}

//

//RENDER HERO SECTION
function hero(){
    hideRecentandAbout()
    
    let header = ''
     blogData.forEach(post =>{
         if(post.hero){
             header +=  `
                <img id="heroImg" class="heroimg" src="${post.blogImg}" alt="blog image" data-hero=${post.id}>
                <div class="blog-info-hero" id="blog-info-hero" data-hero=${post.id}>
                    <h3 class="date" data-hero=${post.id}>${post.blogDate}</h3>
                    <h2 class="blog-num" data-hero=${post.id}>${post.blogTitle}</h3>
                    <p class="blog-text-hero" data-hero=${post.id}>${post.blogFirstSection}..</p>
                </div>`
         }
     })
     document.getElementById('hero').innerHTML = header
}

//RENDER FULL HERO SECTION
function renderHero(heroId){
    clearStart()
    
    let blogger = ''
    let paragraphOne = ''
    let paragraphTwo = ''
    
    blogData.forEach(hero => {
        if (hero.hero){
        hero.blogSecondSection.forEach(para => {
            paragraphOne += `<p class="paragraph">${para}</p>`
        })}
    })

    blogData.forEach(hero => {
         if (hero.hero){
        hero.blogThirdSection.forEach(para => {
            paragraphTwo += `<p class="paragraph">${para}</p>`
        })}
    })
            
    blogData.forEach(hero => { 
        if (hero.hero){
        blogger += `
            <div>
                <h3 class="date-full">${hero.blogDate}</h3>
                <h2 class="blog-num-full">${hero.blogTitle}</h2>
                <p class="blog-text-full">${hero.blogFirstSection}</p>
            </div>
            <img class="blog-img-full" src=${hero.blogImg}>
            <h4 class="small-title-full">${hero.blogHeadingOne}</h4>
            ${paragraphOne}
            <h4 class="small-title-full">${hero.blogHeadingTwo}</h4>
            ${paragraphTwo}
        `
        }
        })    

    document.getElementById('blog-full').innerHTML = blogger
    window.scrollTo(0,0)
}


//RENDER THE START PAGE BLOGS
function renderBlogList(){
    hideRecentandAbout()
    showViewMore()
    hideFullBlog()

    let blog = ""
    blogData.forEach(post =>{
        if (post.id <= 3){
        blog += `
            <div class="blog-box">
            <img class="blog-img" src=${post.blogImg} data-blog=${post.id}>
                <div class="blog-info">
                    <h3 class="date" data-blog=${post.id}>${post.blogDate}</h3>
                    <h2 class="blog-num" data-blog=${post.id}>${post.blogTitle}</h2>
                    <p class="blog-text" data-blog=${post.id}>${post.blogText}</p>
                </div>
            </div>
        `
        return blog
        }
    })
    document.getElementById('blogPosts').innerHTML = blog
    hero()
}
renderBlogList()

// RENDER THE VIEW MORE SECTION
function viewMore(){
    hideViewMore()
    document.getElementById("view-less").classList.remove("hidden")
    
    let moreBlog = ""
    blogData.forEach(post =>{
        if (post.id >= 4 && !post.hero){
        moreBlog += `
            <div class="blog-box">
            <img class="blog-img" src=${post.blogImg} data-blog=${post.id}>
                <div class="blog-info">
                    <h3 class="date" data-blog=${post.id}>${post.blogDate}</h3>
                    <h2 class="blog-num" data-blog=${post.id}>${post.blogTitle}</h2>
                    <p class="blog-text" data-blog=${post.id}>${post.blogText}</p>
                </div>
            </div>
        `
        return moreBlog
        }
    })
    document.getElementById('blogPosts').innerHTML += moreBlog
}

// CLOSE THE VIEW MORE SECTION
function viewLess(){
    document.getElementById("view-less").classList.add("hidden")
    showViewMore()
    renderBlogList()
    window.scrollTo(0,0)
}

//RENDER THE SELECTED BLOG
function renderBlog(blogId){  
    
    clearStart() 
    
    let blogger = ''
    let paragraphOne = ''
    let paragraphTwo = ''
    
    blogData.forEach(blog => {
        if (blog.id == blogId){
        blog.blogSecondSection.forEach(para => {
            paragraphOne += `<p class="paragraph">${para}</p>`
        })}
    })

    blogData.forEach(blog => {
         if (blog.id == blogId){
        blog.blogThirdSection.forEach(para => {
            paragraphTwo += `<p class="paragraph">${para}</p>`
        })}
    })
   
            
    blogData.forEach(blog => { 
        if (blog.id == blogId){
        blogger += `
            <div>
                <h3 class="date-full">${blog.blogDate}</h3>
                <h2 class="blog-num-full">${blog.blogTitle}</h2>
                <p class="blog-text-full">${blog.blogFirstSection}</p>
            </div>
            <img class="blog-img-full" src=${blog.blogImg}>
            <h4 class="small-title-full">${blog.blogHeadingOne}</h4>
            ${paragraphOne}
            <h4 class="small-title-full">${blog.blogHeadingTwo}</h4>
            ${paragraphTwo}
        `
        }
        })    

    document.getElementById('blog-full').innerHTML = blogger
    window.scrollTo(0,0)
}

//RENDER ABOUT ME PAGE
function about(){
    hideViewMore()
    hideFullBlog()
    document.getElementById("heroImg").classList.add("hidden")
    document.getElementById("blog-info-hero").classList.add("hidden")
    document.getElementById("about-me").classList.remove("hidden")
    document.getElementById("recent").classList.remove("hidden")
    
    
    let about = ''
    let paragraphOne = ''
    let paragraphTwo = ''
    
    aboutMe.forEach(blog => {
        blog.blogSecondSection.forEach(para => {
            paragraphOne += `<p class="paragraph">${para}</p>`
        })
    })

    aboutMe.forEach(blog => {
        blog.blogThirdSection.forEach(para => {
            paragraphTwo += `<p class="paragraph">${para}</p>`
        })
    })
    
    aboutMe.forEach(info => {
         about += `
            <div class="about-full">
                <img class="profile-img" src=${info.profileImg}>
                <div class="about-right">
                    <h2 class="intro-about">${info.intro}</h3>
                    <p class="blog-text-about">${info.blogFirstSection}</p>
                </div>
            </div>
            
            <h4 class="small-title-full">${info.blogHeadingOne}</h4>
            ${paragraphOne}
            <h4 class="small-title-full">${info.blogHeadingTwo}</h4>
            ${paragraphTwo}
        `
    })
    document.getElementById('about-me').innerHTML = about   
}

