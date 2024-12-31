export class PageManager{
    constructor(){

        // Page object
        this.pages = {
            home: document.getElementById("home-page"),
            profile: document.getElementById("user-profile")
        };

        this.currentPages = 'home';
    }

    showPage(pageName){
        // Hide all pages
        Object.values(this.pages).forEach(page => {
            page.style.display = "none";
        });

        // Show requested page
        if(this.pages[pageName]){
            this.pages[pageName].style.display = "block";
            this.currentPage = pageName;
        }
    }

    getCurrentPage(){
        return this.currentPage;
    }
}