document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const categoryComponents = document.querySelectorAll(".category-component article");
            let sumCategory = 0;

            data.forEach((item, index) => {
                const categoryElement = categoryComponents[index];

                const iconElement = categoryElement.querySelector("img");
                iconElement.src = item.icon;
                iconElement.alt = `${item.category} icon`;

                const categoryTitle = categoryElement.querySelector("h4");
                categoryTitle.textContent = item.category;

                const scoreElement = categoryElement.querySelector(".category-percentage p");
                scoreElement.textContent = item.score;

                sumCategory += item.score;
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
