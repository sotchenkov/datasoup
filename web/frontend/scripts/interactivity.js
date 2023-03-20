LottieInteractivity.create({
    mode:"scroll",
    player:'#firstLottie',
    actions: [
        {
            visibility:[0,1],
            type: "seek",
            frames: [0, 600],
        },
    ]
});