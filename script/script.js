var openBtn = document.getElementById("open-btn");

openBtn.onclick = () => {
    const loginContainer = document.createElement("div");
    loginContainer.classList.add(
        "login-pop-container", "position-fixed", "top-0", "start-0", "w-100", "h-100"
    );

    const loginChild = document.createElement("div");
    loginChild.innerHTML = `
        <div class="login-pop  m-auto bg-light my-5 rounded-3">
            <div class="login-top text-light p-3" style="background-color: #191919;">
                <h2 class="position-relative">
                    Login <span class="position-absolute end-0 text-danger">
                    <i class="fas fa-times" id="close-icon" ></i></span>
                </h2>
            </div>
            <form class="p-3">
                <h3>Email address</h3>
                <input type="text" class="w-100">
                <p>we will never share your email with anyone else.</p>
                <h3>Password</h3>
                <input type="password" class="w-100">
                <div class="form-check form-switch py-3">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault">Remember me</label>
                </div>
                <hr>
                <div class="login-btns d-flex justify-content-between">
                    <button type="submit" class="btn">Login</button>
                    <button type="button" class="btn" id="close-btn">Close</button>
                </div>
            </form>
        </div>
    `;

    loginContainer.appendChild(loginChild);
    document.body.prepend(loginContainer);

    loginChild.querySelector("#close-btn").onclick = () => {
        loginContainer.remove();
    };
    
    loginChild.querySelector("#close-icon").onclick = () => {
    loginContainer.remove();
};

};