let blogs = []
function addBlog(event){
    event.preventDefault()


    let title = document.getElementById('input-blog-title').value 
    let content = document.getElementById('input-blog-content').value 
    let image = document.getElementById('input-blog-image').files 
    console.log(image);

    image = URL.createObjectURL(image[0])
    console.log(image);

    let blog ={
        title: title,
        content: content,
        image : image,
        author : 'ikram',
        postAt : new Date()
    }

    blogs.push(blog)
    console.log(blogs);

    manipulationHTML()

}




function manipulationHTML(){
    let  contentContainer =document.getElementById('contents')

    contentContainer.innerHTML =''
    
    for (let i = 0; i < blogs.length; i++){
        contentContainer.innerHTML +=`<div id="contents" class="blog-list">
        <!-- dynamic content would be here -->
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].image}" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >${blogs[i].title}</a
              >
            </h1>
            <div class="detail-blog-content">
              ${getFullTime(blogs)[i].postAt} | ${blogs[i].author}
            </div>
            <p>
              ${blogs[i].content}
            </p>
          </div>
        </div>
      </div>
    </div>`
    }
}


let waktu = new Date()

console.log(waktu.getDate());
console.log(waktu.getFullYear());
console.log(waktu.getMonth());
console.log(waktu.getHours());
console.log(waktu.getMinutes());
console.log(waktu.getSeconds());
console.log(waktu);


let month = ['Januari','Febrauari','maret','April','mei','juni', 'juli', 'agustus','september','oktober', 'november', 'desember']

function getFullTime(time){
  
  let date = time.getDate()
  let monthIndex =time.getMonth()
  let year = time.getFullYear()

  let hours = time.getHours()
  let minute = time.getMinute()
  let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minute} WIB `
  let fullTime
}

getFullTime()