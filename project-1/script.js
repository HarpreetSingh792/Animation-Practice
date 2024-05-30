const t1 = gsap.timeline();

t1.from("nav h1",{
    opacity:0,
    duration:1,
    x:-290,
    ease:"slow.out"
})

t1.from("nav h4, nav button ",{
    y:-50,
    duration:0.5,
    opacity:0,
    stagger:0.1
})

t1.from("#page-1 h2, #page-1 h4>p ,#page-1 button",{
    y:50,
    duration:0.5,
    opacity:0,
    stagger:0.1
})

t1.from("#page-1 img",{
    scale:0,
    x:20,
    y:30,
    opacity:0,
    duration:0.4
},"-=1.5")


gsap.from("#page-2>.marquee>p",{
    opacity:0,
    transform:"translateX(200%)",
    scrollTrigger:{
        trigger:"#page-2 marquee",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -150%",
        scrub:4,
        pin:true
    }
})

gsap.from("#page-2>.highlight-header>h2",{
    opacity:0,
    x:-10,
    y:10,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top 0",
        end:"top -150%",
        scrub:5,
        // markers:true
    }
})

gsap.from("#page-2>.highlight-header>h4",{
    x:50,
    y:20,
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top 0",
        end:"top -150%",
        scrub:5,
        // markers:true
    }
},"-=1")


// new timeline for cards...

const t2 = gsap.timeline();

t2.from("#page-2 .cd1",{
    x:-150,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top 0",
        end:"top -150%",
        scrub:5,
        // markers:true
    }
})

t2.from("#page-2 .cd2",{
    x:150,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top 0",
        end:"top -150%",
        scrub:5,
        // markers:true
    }
})

t2.from("#page-2 .cd3",{
    x:-150,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top 0",
        end:"top -150%",
        scrub:5,
        // markers:true
    }
})

t2.from("#page-2 .cd4",{
    x:150,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top 0",
        end:"top -150%",
        scrub:5,
        // markers:true
    }
})


gsap.from("#page-3 h2 , #page-3 h4, #page-3 button",{
    opacity:0,
    x:-40,
    stagger:0.4,
    duration:2,
    scrollTrigger:"#page-3"
})


t2.from("#page-4>.highlight-header>h2",{
    opacity:0,
    x:-10,
    y:10,
    scrollTrigger:{
        trigger:"#page-2 .highlight-header",
        scroller:"body",
        start:"top 0",
        end:"top -150%",
        scrub:5,
        // markers:true
    }
})

t2.from("#page-4>.highlight-header>h4",{
    x:10,
    y:20,
    duration:1,
    scrollTrigger:{
        trigger:"#page-2 .highlight-header",
        scroller:"body",
        start:"top 0",
        end:"top -150%",
        scrub:5,
        // markers:true
    }
},"-=1")


gsap.from("#page-4 #paragraph",{
    opacity:0,
    duration:1,
    stagger:0.4,
    y:20,
    scrollTrigger:"#page-4"
})

