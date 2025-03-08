document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const categoryComponents = document.querySelectorAll(".category-component article");
            const result = document.getElementById("percentage");
            let resultScore = 0;

            data.forEach((item, index) => {
                const categoryElement = categoryComponents[index];

                const iconElement = categoryElement.querySelector("img");
                iconElement.src = item.icon;
                iconElement.alt = `${item.category} icon`;

                const categoryTitle = categoryElement.querySelector("h4");
                categoryTitle.textContent = item.category;

                const scoreElement = categoryElement.querySelector(".category-percentage p");
                scoreElement.textContent = item.score;

                resultScore += item.score;
            });

            resultScore = resultScore / 400;
            resultScore = resultScore * 100;
            resultScore = Math.trunc(resultScore);

            result.textContent = resultScore;

        })
        .catch(error => console.error("Error fetching data:", error));
});
