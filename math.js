//immediate invoked function expression
(function () {
    const quotes = [
        {
            quote:
                "(7)(5) + 8",
            author: "43"
        },
        {
            quote:
                "6 x 11 + 2",
            author: "68"
        },
        {
            quote:
                "6 + (3)(9) + 5 + (1)(8)",
            author: "46"
        },
        {
            quote: "28 x 5 + 4 x 16 + 17 + 8 x 3",
            author: "245"
        },
    ];

    const btn = document
        .getElementById("generate-btn")
        .addEventListener("click", function () {
            // produce random number in the range of quotes items.
            // length 6;
            // last item has index 5
            //0.9 times 6 = 5.4
            //Math floor will round it down to 5. so from 0 to 5;
            let random = Math.floor(Math.random() * quotes.length);
            // display random quote
            document.getElementById("quote").textContent = quotes[random].quote;
            // display quote author

        });
})();

