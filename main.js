const data = [
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/vyzov_2.jpg",
        genre: "Ужасы",
        rating: 3.14
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/vyzov_2.jpg",
        genre: "Ужасы",
        rating: 5.0
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/vyzov_2.jpg",
        genre: "Комедия",
        rating: 7.4
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/vyzov_2.jpg",
        genre: "Ужасы",
        rating: 10.0
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/vyzov_2.jpg",
        genre: "Комедия",
        rating: 4.9
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/vyzov_2.jpg",
        genre: "Меллодрамы",
        rating: 5.1
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/vyzov_2.jpg",
        genre: "Меллодрамы",
        rating: 4.4
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/vyzov_2.jpg",
        genre: "Меллодрамы",
        rating: 1.2
    },
    {
        title: "Вызов",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: "img/vyzov_2.jpg",
        genre: "Меллодрамы",
        rating: 8.7
    }
]

var values = []

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

class FilterDTO
{
    genre;
    rating;

    constructor(genre, rating)
    {
        this.genre = genre;
        this.rating = rating;
    }
}

class RenderTemplate
{
    cardMovie;

    constructor()
    {
        this.showDataMovie = `
        <div class="col-6">
            <img src="$image" alt="" class="img-fluid">
        </div>
        <div class="col-6">
            <h4>$title</h4>
            <hr>
            <p>$description</p>
        </div>
        `
        this.cardMovie = `
            <div class="col-3 mt-5">
                <div class="card w-90 mx-auto">
                    <img src="$image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">$title</h5>
                        <p class="card-text">$description</p>
                        <a href="show.html" class="btn btn-primary">Подробнее</a>
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

    renderShow(context)
    {
        // Описание контекста данных
        let movieContext = new MovieListDTO(
            context.title, 
            context.description,
            context.image
        )
        // Описание шаблона
        let template = this.showDataMovie
            .replace("$image", movieContext.image)
            .replace("$description", movieContext.description)
            .replace("$title", movieContext.title)
        // Рендер на страницу
        document.getElementById("app")
            .innerHTML += template
    }
}

class Filter
{
    getFilter()
    {
        values = null
        values = data
        return new RenderTemplate().renderAll(values)
    }

    getRatingFilter()
    {
        values = null
        for (var i = 0; i < data.length - 1; i--)
        {
            for (var x = 0; x < i; x++)
            {
                if (data[i].rating > data[x].rating)
                {
                    console.log(data[i].rating)
                    console.log(data[x].rating)
                }
            }
        }
    }

    getGenreFilter(genre)
    {
        values = []
        document.getElementById("app").innerHTML = ""
        for (let x = 0; x < data.length; x++)
        {
            if (genre == data[x].genre)
            {
                values.push(data[x])
            }
        }
        let render = new RenderTemplate()
        return render.renderAll(values)
    }

    run(param)
    {
        // if (param.genre && param.rating)
        // {
        //     console.log(1)
        //     this.getFilter()
        // }

        if (param.genre != null)
        {
            this.getGenreFilter(param.genre)
        }

        else if (param.rating != null)
        {
            this.getRatingFilter()
            console.log(3) 
        }
    }
}