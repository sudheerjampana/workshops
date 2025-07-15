// accessing elements using DOM
function handleRegister() {
    let username = document.getElementById("username").value
    let mobile = document.getElementsByTagName("input")[1].value
    let email = document.getElementsByClassName("email")[0].value
    let password = document.getElementById("password").value

    let mobile_exist = window.localStorage.getItem("reg_users")
    if(mobile.length !=10 && (mobile[0]!="6" || mobile[0]!=7 || mobile[0]!=8 || mobile[0]!=9)){
        alert("enter a valid mobile numbwr with 10 digits")
    }

        if (mobile_exist && mobile_exist.includes(mobile)) {
            alert("User already Registered with this Mobile")
        }
        else {
            let details = {
                username: username,
                mobile: mobile,
                email: email,
                password: password
            }

            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: { "Content-Type": "Application/json" },
                body: JSON.stringify(details)
            }).then(res => res.json()).then(() => {
                let reg_mob = window.localStorage.getItem("reg_mobiles");
                if (!reg_mob) {
                    reg_mob = []
                    reg_mob.push(mobile)
                    window.localStorage.setItem("reg_mobiles", JSON.stringify(reg_mob));

                }
                else {
                    reg_mob = JSON.parse(reg_mob)
                    reg_mob.push(mobile);
                    window.localStorage.setItem("reg_mobiles", JSON.stringify(reg_mob));

                }


            })



        }


    // }else{
    //     alert("please enter valid mobile number")
    // }




}
