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
                opensans: "Open Sans",
            },

            backgroundImage: (theme) => ({
                hero: "url('/img/hero.jpg')",
            }),
        },
    },
    variants: {
        extend: {
            display: ["group-hover"],
        },
    },
    plugins: [],
};
