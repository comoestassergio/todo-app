const popUp = {
    render: function(){
        this.popUpWindow = document.createElement('div')
        this.popUpWindow.classList.add('content__popUp')

        this.popUpHeader = document.createElement('h2')
        this.popUpHeader.classList.add('popUp__header')
        this.popUpHeader.textContent = 'New Task'
        this.popUpWindow.appendChild(this.popUpHeader)

        this.popUpWindow.appendChild(this.createInputField('title', 'text', 'popUp__title'))
        this.popUpWindow.appendChild(this.createTextArea('6', '30', 'description', 'popUp__desc'))
        this.popUpWindow.appendChild(this.createInputField('date', 'date', 'popUp__dueDate'))
        this.popUpWindow.appendChild(this.createRadio(3, 'Normal', 'Urgent', 'Extra Urgent'))

        this.button = document.createElement('button')
        this.button.textContent = 'Add'
        this.button.classList.add('popUp__btn')
        this.popUpWindow.appendChild(this.button)

        return this.popUpWindow
    },

    createInputField: function(title, type, clas){
        const input = document.createElement('input')
        input.type = type

        if(title === 'title' || title == 'description'){
            input.placeholder = title
        }

        input.classList.add(clas)

        return input
    },

    createTextArea: function(rows, cols, desc, clas){
        const textArea = document.createElement('textarea')
        textArea.placeholder = desc
        textArea.rows = rows
        textArea.cols = cols

        textArea.classList.add(clas)

        return textArea
    },

    createRadio: function(btnAmount, ...values){
        const form = document.createElement('form')
        form.classList.add('popUp__radio-form')

        for (let i = 0; i < btnAmount; i++){
            const input = document.createElement('input')
            input.type = 'radio'
            input.value = values[i]
            input.id = values[i]
            input.name = 'priority'

            form.appendChild(input)
        }

        return form
    }
}

export default popUp