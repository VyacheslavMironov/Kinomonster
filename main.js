const data = [
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/vyzov_2.jpg"
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/vyzov_2.jpg"
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/vyzov_2.jpg"
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/vyzov_2.jpg"
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/vyzov_2.jpg"
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/vyzov_2.jpg"
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/vyzov_2.jpg"
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/vyzov_2.jpg"
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/vyzov_2.jpg"
    }
]

class MovieListDTO
{
    title;
    description;
    image;

    constructor(title, description, image)
    {
        this.title = title;
        this.description = description;
        this.image = image;
    }
}

class RenderTemplate
{
    cardMovie;

    constructor()
    {
        this.cardMovie = `
            <div class="col-3 mt-5">
                <div class="card w-90 mx-auto">
                    <img src="$image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">$title</h5>
                        <p class="card-text">$description</p>
                        <a href="#" class="btn btn-primary">Подробнее</a>
                    </div>
                </div>
            </div>
        `
    }
    renderAll(context)
    {
        for (let x=0; x < context.length; x++)
        {
            // Описание контекста данных
            let movieContext = new MovieListDTO(
                context[x].title, 
                context[x].description,
                context[x].image
            )
            // Описание шаблона
            let template = this.cardMovie
                .replace("$image", movieContext.image)
                .replace("$description", movieContext.description)
                .replace("$title", movieContext.title)
            // Рендер на страницу
            document.getElementById("app")
                .innerHTML += template
        }
    }
}