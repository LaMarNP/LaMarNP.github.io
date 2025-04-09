//JSON
const data = [{title: "Inception", budget: 160000000, director: "Christopher Nolan", boxOffice: 830000000, image: "top.jpg"},
{title: "Charade", budget: 3000000, director: "Stanley Donen", boxOffice: 13000000, image: "Charade.jpg"},
{title: "Heaven Can Wait", budget: 12000000, director: "Buck Henry", boxOffice: 81600000, image: "football.jpg"}];



class Movies{
    #title;
    #budget;
    director;
    boxOffice;
    image;

    constructor(director, boxOffice, image){
        this.#title = "unknown";
        this.#budget = 0;
        this.director = director;
        this.boxOffice = boxOffice;
        this.image = image;
    }

    get title(){
        return this.#title;
    }

    set title(input){
        if (typeof input == "string"){
            this.#title = input;
        }
        else{
            console.error("Not valid");
        }
    }


    get budget(){
        return this.#budget;
    }

    set budget(input){
        if (input > 0){
            this.#budget = input;
        }
        else{
            console.error("Not valid");
        }
    }


    toString(){
        return "Title: " + this.#title + "Budget: " + this.#budget
        + "Director: " + this.director + "Box Office: " + this.boxOffice;
    }

    addTo(){
        let mediaBox = document.getElementById('mediaBox');
        let group = document.createElement('div');
        group.style.display = "flex";
        group.style.gap = "15px"


        let picture = document.createElement('img');
        picture.src = this.image;
        picture.alt = this.#title;
        picture.style.width = "150px"
        picture.style.height = "auto"
        picture.style.marginBottom = "20px"
        group.appendChild(picture);

        let textBox = document.createElement("div")

        let media = [
            `Title: ${this.#title}`,
            `Budget: $${this.#budget.toLocaleString()}`,
            `Director: ${this.director}`,
            `Box Office: $${this.boxOffice.toLocaleString()}`
            ]
        mediaBox.appendChild(group)
        media.forEach((item) => {
            let pgroup = document.createElement('p');
               pgroup.textContent = item;
            textBox.appendChild(pgroup);
        });

        group.appendChild(textBox);
        mediaBox.appendChild(group);

    }
}

const mediaInfo = [{title: "Inception", budget: 160000000, director: "Christopher Nolan", boxOffice: 830000000, image: "top.jpg"},
{title: "Charade", budget: 3000000, director: "Stanley Donen", boxOffice: 13000000, image: "Charade.jpg"},
{title: "Heaven Can Wait", budget: 12000000, director: "Buck Henry", boxOffice: 81600000, image: "football.jpg"}];

mediaInfo.forEach(data => {
  const movie = new Movies(data.director, data.boxOffice, data.image);
  movie.title = data.title;
  movie.budget = data.budget;
  movie.addTo();
});


