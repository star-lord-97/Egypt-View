module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#CB3233",
            },

            fontFamily: {
                nunito: "Nunito",
                staatliches: "Staatliches",
            },
        },
    },
    variants: {
        extend: {
            display: ["group-hover"],
        },
    },
    plugins: [],
};
