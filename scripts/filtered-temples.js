const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const h1Element = document.querySelector('h1');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    h1Element.classList.toggle('hide');
    
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Colonia Juárez Chihuahua Mexico Temple",
      location: "Colonia Juárez, Chihuahua, Mexico",
      dedicated: "1999, March, 6",
      area: 6800,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/colonia-juarez-chihuahua-mexico/400x250/colonia-juarez-chihuahua-mexico-temple-1543027-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19184,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
      },
      {
        templeName: "Durban South Africa",
        location: "Durban, South Africa",
        dedicated: "2020, February, 16",
        area: 19860,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/1-8b3f1b895a7c92ee66c2d0c7e78606f75f0d0cc8.jpg"
      },
      {
        templeName: "Paris France Temple",
        location: "Le Chesnay, France",
        dedicated: "2017, May, 21",
        area: 19860,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/400x250/Paris-Temple02.jpg"
      }
    // Add more temple objects here...
  ];



function createTempleCard(filter){
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    
    temples.filter(temple => {
        if (filter === "home") return true;
        if (filter === "new" && parseDate(temple.dedicated) > parseDate("2000, January, 01")) return true;
        if (filter === "old" && parseDate(temple.dedicated) <= parseDate("2000, January, 01")) return true;
        if (filter === "large" && temple.area > 30000) return true;
        if (filter === "small" && temple.area < 15000) return true;
        return false;
    }).forEach(temple => {
        let card = document.createElement("section");
        card.classList.add("grid-item");

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");



        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        card.classList.add("grid-item");

        gallery.appendChild(card);

    })
}

// Function to parse date string
function parseDate(dateString) {
    const parts = dateString.split(", ");
    const monthMap = {
        "January": 0, "February": 1, "March": 2, "April": 3, "May": 4, "June": 5,
        "July": 6, "August": 7, "September": 8, "October": 9, "November": 10, "December": 11
    };
    return new Date(parts[0], monthMap[parts[1]], parts[2]);
}

// Function to format date
function formatDate(dateString) {
    const parts = dateString.split(", ");
    return `${parts[1]} ${parts[2]}, ${parts[0]}`;
}

// Event listeners for the filter links
document.getElementById("home").addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard("home");
});

document.getElementById("new").addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard("new");
});

document.getElementById("old").addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard("old");
});

document.getElementById("large").addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard("large");
});

document.getElementById("small").addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard("small");
});

// Initial rendering of the gallery
createTempleCard("home");
