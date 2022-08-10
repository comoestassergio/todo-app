import popUp from './popUp'
import indexPage from '../index'

const addBtn = {
    render: function(){
        this.buttonContianer = document.createElement('div')
        this.buttonContianer.classList.add('content__btn-cont')

        this.button = document.createElement('button')
        this.button.classList.add('btn-cont__add-thing-btn')
        this.button.textContent = 'Add thing'
        this.button.addEventListener('click', this.handleClick)


        this.buttonContianer.appendChild(this.button)

        return this.buttonContianer
    },

    handleClick: function(){
        let contentDivChildren = [...indexPage.getContentDiv().children]


        //check if there's a popUp already
        if (contentDivChildren.some(child => child.classList.contains('content__popUp'))){
            return
        }

        //render if not
        indexPage.addContent(popUp.render())
    }
}

export default addBtn