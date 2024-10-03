/** Utitliy section */

function $(id) {
    return document.getElementById(id);
}


/**
 * // get acces btn category by Won way
//-----------------------------------
// async function showCategoryBtn() {
//     const allBtn = $("all_category_btn");
//     const res = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
//     const data = await res.json();
//     const items = data["categories"]
//     items.map((item) => {
//         const div = document.createElement("div")
//         console.log(item)
//         const btn = `
//             <button class="btn">${item.category}</button>
//         `
//         div.innerHTML = btn;
//         allBtn.appendChild(div)
//     })
// }
// showCategoryBtn()
 */

// 1- Fetch, load and show categories on html

// create loadCategories
const loadCategories = () => {
    // fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
}


// create displayCategories
const displayCategories = (data) => {
    const allDisplayBtn = $("all_category_btn");
    data.map((item) => {
        // create button container
        const p = document.createElement("p");
        p.innerHTML = `<button class="btn">${item.category}</button>`;
        // add button to category container
        allDisplayBtn.appendChild(p)
    })
}


loadCategories();

// create load videos
const loadVideos = async () => {
    try {
        const res = await fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        const data = await res.json();
        displayVideos(data.videos)
    }
    catch (error) {
        console.log(error)
    }
}


const card = {
    "category_id": "1001",
    "video_id": "aaab",
    "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
    "title": "Midnight Serenade",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
            "profile_name": "Noah Walker",
            "verified": false
        }
    ],
    "others": {
        "views": "543K",
        "posted_date": ""
    },
    "description": "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
}


function displayVideos(videos) {
    const videosContainer = $("videos_container")
    videos.map((video) => {
        console.log(video)
        const card = document.createElement("div");
        card.classList = "card card-compact shadow-xl"
        card.innerHTML = `
        <figure class="h-[200px]">
            <img class="w-full h-full object-cover"
            src=${video.thumbnail}
            alt="Shoes" />
        </figure>
        <div class="px-0 py-2 flex gap-4">
            <div>
                <img class="w-10 h-10 object-cover rounded-full" src=${video.authors[0]["profile_picture"]} />
            </div>
            <div>
            <h2 class="text-xl font-bold"> ${video.title}</h2>
            <div class="flex gap-2">
                <p> ${video.authors[0]["profile_name"]}</p>
                <img class="w-5 object-cover" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>
            </div>
            <p> ${video.others.views} views</p>
            </div>
        </div>
    `
        // display all videos
        videosContainer.append(card)
    })

}

loadVideos();