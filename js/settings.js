window.onload = () => {
    document.querySelector('.editor>textarea').value = localStorage.getItem('msg')
    document.querySelector('.button>button').addEventListener('click', save)
}


function save() {
    localStorage.setItem('msg', document.querySelector('.editor>textarea').value)
    chrome.tabs.create({})
    chrome.tabs.getCurrent(tab => {
        chrome.tabs.remove(tab.id)
    })
}