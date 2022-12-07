const titleList = document.getElementById("parentlist");
function addTitles(posts){
    let listElement=document.getElementById("li")
    listElement.innerText=posts.title
    titleList.appendChild(listElement)
}
