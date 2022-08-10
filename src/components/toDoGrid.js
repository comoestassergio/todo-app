const grid = {
    render: function(){
        this.gridDiv = document.createElement('div')
        this.gridDiv.classList.add('content__todo-grid')
        this.addThings('Thing 1', 'Thing 2')

        return this.gridDiv
    },

    addThings: function(...things){
        things.forEach(thing => {
            const gridItem = document.createElement('div')
            gridItem.classList.add('todo-grid__item')
            gridItem.textContent = thing

            const removeBtn = document.createElement('button')
            removeBtn.classList.add('item__remove-btn')
            removeBtn.textContent = 'remove'
            gridItem.appendChild(removeBtn)

            this.gridDiv.appendChild(gridItem)
        })
    }
}

export default grid