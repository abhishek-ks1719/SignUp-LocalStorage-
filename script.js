
myFunction = () => {
    let username = document.getElementById('fullname').value.trim()
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let password2 = document.getElementById('confirm').value
    let error = false
    

    // ====================first name
    username = username.replaceAll(" ","")
    if (username.length >= 2) {
        console.log(`${username}, Error:${error}`)
    } else {
        error = true
    }

    // ====================e mail
    let dot = email.lastIndexOf('.')
    let domain = email.slice(dot+1)
    if (
    email!=="" &&
    email.indexOf('@') != 0 &&
    email.includes('@') && 
    email.includes('.') && 
    1<domain.length && 
    domain.length<4 ) {
        // console.log(`${email}`)
        console.log(`${email}, Error:${error}`)

    } else {
        error = true
        console.log(`empty, Error:${error}`)
    }

    // ===================password
    if (password.length > 0) {
        console.log(`${password}`)
    } else {
        error = true
        console.log(`empty, Error:${error}`)
    }

    // ==================confirm password
    if (password2 === password && password2 !='' ) {
        console.log('password Match')
    } else {
        error = true
    }

    if(!error){
        localStorage.setItem('userName',`${username}`)
        localStorage.setItem('userEmail',`${email}`)
        localStorage.setItem('password',`${password}`)
        document.getElementById('correct').style.display = 'block'
        document.getElementById('error').style.display = 'none'
        document.getElementById('myForm').reset()
        window.location.href = "profile.html";
    }else{
        console.log(`error`)
        document.getElementById('correct').style.display = 'none'
        document.getElementById('error').style.display = 'block'
    }
}
