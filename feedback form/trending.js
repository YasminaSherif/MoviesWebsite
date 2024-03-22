const name = document.getElementById ('name')
const passward = document.getElementById ('passward')
const form = document.getElementById ('form')
const errorElement = document.getElementById ('error')

form.addEventListener('submet', (e) => 
{
    let messages =[]
    if (name.value === '' || name.value == null)
{
    message.push('Name is required')
}

if (passward.value.length <= 11 )
{
    messages.push('password must be 11 characters')
}

    if (messages.length > 0 ){
    e.preventDefault()
    errorElement.innertext = messages.join(', ')
    }
})
