const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')


const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout (getData, 2500)

function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"> '
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, inventore!'
    profile_img.innerHTML = '<img src="https://avatars.githubusercontent.com/u/28893186?s=400&u=17b87936f98e788af4df9673f2603dede30d6831&v=4" alt="dp">'
    name.innerHTML = 'Rahul Neupane'
    date.innerHTML = 'Aug 15, 2022'

    animated_bgs.forEach((bg)=>{
        bg.classList.remove('animated-bg')
    })
    animated_bg_texts.forEach((bg)=>{
        bg.classList.remove('animated-bg-text')
    })
}