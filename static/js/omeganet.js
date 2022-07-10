 // NOGG
    const useNoGG = false;
    const proxy = localStorage.getItem("proxy") || "uv"
    const inpbox = document.querySelector('form');
    inpbox.addEventListener('submit', event => {
        console.log("Connecting to service -> loading");
        const loader = document.getElementById("lpoader");
        const texts = document.getElementById("connecterText");
        const loadConstructer = loader.style;
        const textConstructer = texts.style;
        loadConstructer.display = "flex";
        loadConstructer.justifyContent = "center";
        setTimeout(() => {
            document.getElementById("connecterText").style.fontSize = "12px"
            document.getElementById("connecterText").innerHTML = "Due to high server load, this may take a while.";
        }, 3200);

        setTimeout(() => {
            document.getElementById("connecterText").style.fontSize = "14px"
            document.getElementById("connecterText").innerHTML = "Something's not right here...";
        }, 17000);


    });
    const form = document.querySelector('form');
    form.addEventListener('submit', event => {
        event.preventDefault();

        if (typeof navigator.serviceWorker === 'undefined')
            alert('Your browser does not support service workers or you are in private browsing!');
        if (proxy == 'uv') {
            navigator.serviceWorker.register('./sw.js', {
                scope: __uv$config.prefix
            }).then(() => {
                const value = event.target.firstElementChild.value;

                let url = value.trim();
                if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
                if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
                let redirectTo = __uv$config.prefix + __uv$config.encodeUrl(url);
                const option = localStorage.getItem('nogg');
                if (option === 'on') {
                    stealthEngine(redirectTo);
                } else location.href = redirectTo;
            });
        }
    });

    // NoGG Engine 
    function stealthEngine(encodedURL) {
        // The URL must be encoded ^ 
        let inFrame

        try {
            inFrame = window !== top
        } catch (e) {
            inFrame = true
        }
        setTimeout(() => {
            if (!inFrame && !navigator.userAgent.includes("Firefox")) {
                const popup = open("about:blank", "_blank")
                if (!popup || popup.closed) {
                    alert("Popups are disabled!")
                } else {
                    const doc = popup.document
                    const iframe = doc.createElement("iframe")
                    const style = iframe.style
                    const img = doc.createElement("link")
                    const link = location.href
                    img.rel = "icon"
                    img.href = "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png"
                    doc.title = "Google Drive"

                    var currentLink = link.slice(0, link.length - 1);

                    iframe.src = currentLink + encodedURL

                    style.position = "fixed"
                    style.top = style.bottom = style.left = style.right = 0
                    style.border = style.outline = "none"
                    style.width = style.height = "100%"

                    doc.body.appendChild(iframe)
                }

            }
        }, 1500);
    }
});
// Set the option 
var option = localStorage.getItem('nogg')

function toggleNoGG() {
    if (option === 'on') {

        option = 'off';
        localStorage.setItem('nogg', 'off');
    } else {

        option = 'on';
        localStorage.setItem('nogg', 'on');
    }
}


// Notification Banner
function saveIc() {
    console.log("Checked")
    var notification = `
            <div class="notification-container" id="notification-container">
            <div class="notification notification-success">
                <strong>Success!</strong> Your settings have been saved - Reloading.
            </div>
        </div>
        `;
    document.getElementById('notifhere').innerHTML = notification
    setTimeout(() => {
        var NotificationOBJ = document.getElementById('notifhere')

    }, 2000);
};

function unsavedChanges() {
    var notification = `
    <div class="notification-container" id="notification-container">
    <div class="notification notification-danger" id="notification-container">
    <strong>Danger!</strong> You have unsaved changes!
</div>
</div>
        `;
    document.getElementById('notifhere').innerHTML = notification
    setTimeout(() => {
        var NotificationOBJ = document.getElementById('notifhere')

    }, 2000);
};




function switchProxy() {
    var selecter = document.getElementById("proxySwitcher");
    var selectedOption = selecter.value

    localStorage.setItem("proxy", selectedOption);
    var storedChoice = localStorage.getItem('proxy');
    console.log(selectedOption)

}


function switchTheme() {
    var selecter = document.getElementById("themeSwitcher");
    var selectedOption = selecter.value

    localStorage.setItem("theme", selectedOption);
    var storedChoice = localStorage.getItem('theme');
    console.log(selectedOption)
    if (storedChoice == 'light') {
        //LIGHT
        console.log("loaded theme:", storedChoice);
        document.body.style.backgroundColor = " #d8d8d8";
        const descriptions = document.getElementsByClassName('description');
        for (const element of descriptions) {
            element.style.color = "#000000";
        }
        const names = document.getElementsByClassName('name');
        for (const element of names) {
            element.style.color = "#000000";
        }
        const dropdowns = document.getElementsByClassName('dropdown');
        for (const element of dropdowns) {
            element.style.backgroundColor = "#606b69";
        }
        const buttons = document.getElementsByClassName('button-save');
        for (const element of buttons) {
            element.style.backgroundColor = "#606b69";
        }
        const switches = document.getElementsByClassName('toogle-button');
        for (const element of switches) {
            element.style.backgroundColor = "#606b69";
        }
        //DARK
    } else if (storedChoice == 'dark') {
        console.log("loaded theme:", storedChoice);
        document.body.style.backgroundColor = "#191724";
        const descriptions = document.getElementsByClassName('description');
        for (const element of descriptions) {
            element.style.color = "#6e6a86";
        }
        const names = document.getElementsByClassName('name');
        for (const element of names) {
            element.style.color = "#e0def4";
        }
        const dropdowns = document.getElementsByClassName('dropdown');
        for (const element of dropdowns) {
            element.style.backgroundColor = "#1abc9c";
        }
        const buttons = document.getElementsByClassName('button-save');
        for (const element of buttons) {
            element.style.backgroundColor = "#1abc9c";
        }
        const switches = document.getElementsByClassName('toogle-button');
        for (const element of switches) {
            element.style.backgroundColor = "#1abc9c";

        }
        document.getElementById('navbar').style.backgroundColor = "#26233a";
        var storedChoice = localStorage.getItem('theme');
    } else if (storedChoice == 'hacker') {
        console.log("loaded theme:", storedChoice);
        document.body.style.backgroundColor = "#000";
        const descriptions = document.getElementsByClassName('description');
        for (const element of descriptions) {
            element.style.color = "#00ff0b";
        }
        const names = document.getElementsByClassName('name');
        for (const element of names) {
            element.style.color = "#00ff0b";
        }
        const dropdowns = document.getElementsByClassName('dropdown');
        for (const element of dropdowns) {
            element.style.backgroundColor = "#00ff0b";
        }
        const buttons = document.getElementsByClassName('button-save');
        for (const element of buttons) {
            element.style.backgroundColor = "#00ff0b";
        }
        const switches = document.getElementsByClassName('toogle-button');
        for (const element of switches) {
            element.style.backgroundColor = "#00ff0b";

        }
        const boxes = document.getElementsByClassName('settings-cont');
        for (const element of boxes) {
            element.style.border = "2px solid rgb(0, 255, 11)";

        }
        const newTags = document.getElementsByClassName('new-tag');
        for (const element of newTags) {
            element.style.color = "#00ff0b";

        }
        document.getElementById('navbar').style.backgroundColor = "#000";
        const navbuttons = document.getElementsByClassName('a-navbutton');
        for (const element of navbuttons) {
            element.style.color = "#00ff0b";
        }
        const nebheader = document.getElementsByClassName('nebHeader');
        for (const element of nebheader) {
            element.style.color = "#00ff0b";
        }
        const Obox = document.getElementsByClassName('omnibox');
        for (const element of Obox) {
            element.style.backgroundColor = "black";
        }
    };
    location.reload()


};

function getOption(option) {
    console.log(localStorage.getItem(option));
}

window.onload = function() {
    // Update the CheckBox to match the settings 

    if (localStorage.getItem('proxy') == "null" || localStorage.getItem('nogg') == "null") {

        console.ch("Applied Settings: ", "NoGG is ", localStorage.getItem('nogg'), " | Proxy set to", localStorage.getItem('proxy'))
    } else {

        console.warn("Applied Settings: ", "NoGG is ", localStorage.getItem('nogg'), " | Proxy set to", localStorage.getItem('proxy'))
        console.warn("If these values are 'null', there was an error getting a localstorage item. ")
    };
    if (window.location.pathname == '/static/options/' || window.location.pathname == 'options/' || window.location.pathname == '/options/') {
        if (localStorage.getItem('nogg') == 'on') {
            setTimeout(() => {
                var item = document.getElementById("undefined");
                document.getElementById("undefined").checked = true;
            }, 600);
        }

        // Update the front end to match option localstorage
        var selecter = document.getElementById("proxySwitcher");
        var storedChoice = localStorage.getItem('proxy');
        selecter.value = storedChoice;

        // ThemeSet
        var themeSelector = document.getElementById("themeSwitcher");
        var storedTheme = localStorage.getItem('theme');
        themeSelector.value = storedTheme;
    }
    if (window.location.pathname == '/static/options/' || window.location.pathname == 'options/' || window.location.pathname == '/options/') {
        if (storedTheme == 'light') {
            console.log("loaded theme:", storedTheme);
            document.body.style.backgroundColor = " #d8d8d8";
            const descriptions = document.getElementsByClassName('description');
            for (const element of descriptions) {
                element.style.color = "#000000";
            }
            const names = document.getElementsByClassName('name');
            for (const element of names) {
                element.style.color = "#000000";
            }
            const dropdowns = document.getElementsByClassName('dropdown');
            for (const element of dropdowns) {
                element.style.backgroundColor = "#606b69";
            }
            const buttons = document.getElementsByClassName('button-save');
            for (const element of buttons) {
                element.style.backgroundColor = "#606b69";
            }
            const switches = document.getElementsByClassName('toogle-button');
            for (const element of switches) {
                element.style.backgroundColor = "#606b69";
            }
        } else if (storedTheme == 'dark') {
            console.log("loaded theme:", storedTheme);
            document.body.style.backgroundColor = "#191724";
            const descriptions = document.getElementsByClassName('description');
            for (const element of descriptions) {
                element.style.color = "#6e6a86";
            }
            const names = document.getElementsByClassName('name');
            for (const element of names) {
                element.style.color = "#e0def4";
            }
            const dropdowns = document.getElementsByClassName('dropdown');
            for (const element of dropdowns) {
                element.style.backgroundColor = "#1abc9c";
            }
            const buttons = document.getElementsByClassName('button-save');
            for (const element of buttons) {
                element.style.backgroundColor = "#1abc9c";
            }
            const switches = document.getElementsByClassName('toogle-button');
            for (const element of switches) {
                element.style.backgroundColor = "#1abc9c";

            }
            document.getElementById('navbar').style.backgroundColor = "#26233a";
        } else if (storedTheme == 'hacker') {
            console.log("loaded theme:", storedChoice);
            document.body.style.backgroundColor = "#000";
            const descriptions = document.getElementsByClassName('description');
            for (const element of descriptions) {
                element.style.color = "#00ff0b";
            }
            const names = document.getElementsByClassName('name');
            for (const element of names) {
                element.style.color = "#00ff0b";
            }
            const dropdowns = document.getElementsByClassName('dropdown');
            for (const element of dropdowns) {
                element.style.backgroundColor = "#00ff0b";
            }
            const buttons = document.getElementsByClassName('button-save');
            for (const element of buttons) {
                element.style.backgroundColor = "#00ff0b";
            }
            const switches = document.getElementsByClassName('toogle-button');
            for (const element of switches) {
                element.style.backgroundColor = "#00ff0b";

            }
            const boxes = document.getElementsByClassName('settings-cont');
            for (const element of boxes) {
                element.style.border = "2px solid rgb(0, 255, 11)";

            }
            const newTags = document.getElementsByClassName('new-tag');
            for (const element of newTags) {
                element.style.color = "#00ff0b";

            }
            document.getElementById('navbar').style.backgroundColor = "#000";
            const navbuttons = document.getElementsByClassName('a-navbutton');
            for (const element of navbuttons) {
                element.style.color = "#00ff0b";
            }
            const nebheader = document.getElementsByClassName('nebHeader');
            for (const element of nebheader) {
                element.style.color = "#00ff0b";
            }
            const Obox = document.getElementsByClassName('omnibox');
            for (const element of Obox) {
                element.style.backgroundColor = "black";
            }
        };
    };
    var storedTheme = localStorage.getItem('theme');
    if (storedTheme == "light") {
        document.getElementById('connecterText').style.color = "black"
        document.getElementById('navbar').style.backgroundColor = "#a2a2a2";
        document.body.style.backgroundColor = " #d8d8d8";
        const navbuttons = document.getElementsByClassName('a-navbutton');
        for (const element of navbuttons) {
            element.style.color = "#000000";
        }
        const nebheader = document.getElementsByClassName('nebHeader');
        for (const element of nebheader) {
            element.style.color = "#000000";
        }
        const Obox = document.getElementsByClassName('omnibox');
        for (const element of Obox) {
            element.style.backgroundColor = "#000000";
        }
        const stamp = document.getElementsByClassName('stamp');
        for (const element of stamp) {
            element.style.color = "#000";
        }
    } else if (storedTheme == 'dark') {
        document.getElementById('navbar').style.backgroundColor = "#26233a";
        document.body.style.backgroundColor = "#191724";


    } else if (storedTheme == 'hacker') {
        document.getElementById('connecterText').style.color = "rgb(0, 255, 11)"
        console.log("loaded theme:", storedChoice);
        document.body.style.backgroundColor = "#000";
        const descriptions = document.getElementsByClassName('description');
        for (const element of descriptions) {
            element.style.color = "#00ff0b";
        }
        const names = document.getElementsByClassName('name');
        for (const element of names) {
            element.style.color = "#00ff0b";
        }
        const dropdowns = document.getElementsByClassName('dropdown');
        for (const element of dropdowns) {
            element.style.backgroundColor = "#00ff0b";
        }
        const buttons = document.getElementsByClassName('button-save');
        for (const element of buttons) {
            element.style.backgroundColor = "#00ff0b";
        }
        const switches = document.getElementsByClassName('toogle-button');
        for (const element of switches) {
            element.style.backgroundColor = "#00ff0b";

        }
        const boxes = document.getElementsByClassName('settings-cont');
        for (const element of boxes) {
            element.style.border = "2px solid rgb(0, 255, 11)";

        }
        const newTags = document.getElementsByClassName('new-tag');
        for (const element of newTags) {
            element.style.color = "#00ff0b";
        }
        document.getElementById('navbar').style.backgroundColor = "#000";
        const navbuttons = document.getElementsByClassName('a-navbutton');
        for (const element of navbuttons) {
            element.style.color = "#00ff0b";
        }
        const nebheader = document.getElementsByClassName('nebHeader');
        for (const element of nebheader) {
            element.style.color = "#00ff0b";
        }
        const Obox = document.getElementsByClassName('omnibox');
        for (const element of Obox) {
            element.style.backgroundColor = "black";
        }
        document.getElementById('navbar').style.backgroundColor = "#000";
        var placeholderOmniBox = document.getElementById("url");
        document.getElementById("url").style.color = "red";
    }
};

