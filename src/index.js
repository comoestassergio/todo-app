import './style.css'
import header from './components/header'
import navEl from './components/nav'
import addBtn from './components/addThingBtn'
import grid from './components/toDoGrid'


const indexPage = {

    init: function(){
        this.cacheDom()
        this.addContent(
            header.render(), 
            navEl.render(),
            addBtn.render(),
            grid.render()

        )
    },

    cacheDom: function(){
        this.contentDiv = document.querySelector('#content')
    },

    addContent: function(...content){
        content.forEach(el => {
            indexPage.contentDiv.appendChild(el)
        })
    },

    getContentDiv: function(){
        return this.contentDiv
    }
}

indexPage.init()

export default indexPage