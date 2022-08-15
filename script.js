// fetch('https://www.cbr-xml-daily.ru/daily_json.js')

const tabs = document.querySelectorAll('.tab-item')
const tabsContent = document.querySelectorAll('.tabs-panel')
const tabsParent = document.querySelector('.tabs')

function hideContent() {
    tabsContent.forEach((item) => {
        item.style.display = 'none'
        item.classList.remove('tabs-panel_active')
    })
    tabs.forEach((item) => {
        item.classList.remove('tab-item_active')
    })
}

function showContent(i = 0) {
        tabsContent[i].style.display = 'block'
        tabsContent[i].classList.add('tabs-panel_active')
        tabs[i].classList.add('tab-item_active')
}

tabsParent.addEventListener('click', (e) => {
    const event = e.target
    console.log(event)
    if(event.classList.contains('tab-item')) {
        console.log('e')
        hideContent()
        tabs.forEach((item, index) => {
            if(event == item) {
                showContent(index)
            }
        })
    }
})
