const getColor = (color) => {
    switch (color) {
        case "brown": return("rgb(133, 70, 70)"); 
        case "black" : return("rgb(33, 33, 33)");
        case "blue" : return("rgb(0, 129, 180)");
        case "forest-green" : return("rgb(78, 108, 80)");
        case "orange" : return("rgb(253, 167, 105)");
        case "pink-gold": return ("rgb(194, 118, 100)");
        case "purple": return ("rgb(103, 65, 136"); 
        case "cyan-blue": return ("rgb(86, 113, 137)");
    } 
}
export const data = [
    {
        quote: "The temporary satisfaction of quitting is outweighed by the eternal suffering of being a nobody.",
        author: "- "+ "Andrew Tate",
        image: "https://wallpaper.dog/large/20573453.jpg",
        color: getColor("cyan-blue")
    },
    {
        quote: "Every strike brings me closer to the next home run.",
        author: "- "+"Babe Ruth",
        image: "https://ca-times.brightspotcdn.com/dims4/default/2397355/2147483647/strip/true/crop/1176x784+0+14/resize/2400x1600!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F39%2F5f%2F95f32574dff2117900e2d1d59291%2Fla-sp-dn-poll-greatest-dodger-team-20140825-001",
        color: getColor("black")
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "- "+"Chinese Proverb",
        image: "https://media.wired.com/photos/635c29153c668b3d58192325/master/pass/Secret-Chinese-Police-Security-GettyImages-647038906.jpg",
        color: getColor("brown")
    },
    {
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "- "+"Maya Angelou",
        image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/C67F/production/_122651805_f80d70e8-b242-4a7e-95b5-3f8e16680c55.png",
        color: getColor("black")
    },
    {
        quote: "The best revenge is massive success.",
        author: "- "+"Frank Sinatra",
        image: "https://images6.alphacoders.com/529/thumb-1920-529470.jpg",
        color: getColor("blue")
    },
    {
        quote: "Whatever you are, be a good one.",
        author: "- "+"Abraham Lincoln",
        image: "https://images2.alphacoders.com/219/thumb-1920-219502.jpg",
        color: getColor("forest-green")
    },
    {
        quote: "In the end, some of your greatest pains, become your greatest strengths.",
        author: "- "+"Drew Barrymore",
        image: "https://w0.peakpx.com/wallpaper/528/292/HD-wallpaper-drew-barrymore-hat-actress-girl-smile-woman.jpg",
        color: getColor("orange")
    },
    {
        quote: "You are in danger of living a life so comfortable and soft that you will die without ever realizing your true potential.",
        author: "- "+"David Goggins",
        image: "https://wallpapers.com/images/file/david-goggins-resting-e11ibealqmy7ckwh.jpg",
        color: getColor("pink-gold")
    },
    {
        quote: "Dedication makes dreams come true.",
        author: "- "+"Kobe Bryant",
        image: "https://i.pinimg.com/originals/43/23/20/4323203d8bfed77579cbb656c6a1f511.jpg",
        color: getColor("purple")
    }
]


