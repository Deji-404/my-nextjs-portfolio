import React from "react";
import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import article3 from "../../public/images/articles/form validation in reactjs using custom react hook.png"
import article4 from "../../public/images/articles/smooth scrolling in reactjs.png"
import article5 from "../../public/images/articles/create modal component in react using react portals.png"
import article6 from "../../public/images/articles/todo list app built using react redux and framer motion.png"
import article7 from "../../public/images/articles/What is Redux with easy explanation.png"
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image)

const MovingImg = ({img, title, link}) => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = useRef(null)

    function handleMouse(event){
        imgRef.current.style.display = "inline-block"
        x.set(event.pageX)
        y.set(-10)
    }

    function handleMouseLeave(event){
        imgRef.current.style.display = "none"
        x.set(0)
        y.set(0)
    }

    return (
        <Link target={'_blank'} href={link}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
            <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
            <FramerImage ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg" 
            style={{x: x, y: y}}
            />
        </Link>
    )
}

const Article = ({img, title, date, link}) => {
    return (
        <motion.li 
        className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark
        first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
        "
        initial={{y:200}}
        whileInView={{y:0, transition: {duration: 0.5, ease: "easeInOut"}}}
        viewport={{once: "true"}}
        >
            <MovingImg img={img} title={title} link={link} />
            <span className="text-primary dark:text-primaryDark font-semibold pl-4">{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({img, title, time, summary, link}) => {
    return (
        <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
            <Link href={link} target={'_blank'} 
            className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale: 1.05}}
                transition={{duration: 0.2}}
                initial={{opacity:0}}
                whileInView={{opacity: 1, transition: {duration: 0.2}}}
                priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                 />
            </Link>
            <Link href={link} target={'_blank'}>
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">{title}</h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary dark:text-primaryDark font-semibold">{time}</span>
        </li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Ayodeji | Articles Page</title>
                <meta name="description" content="Software Developer/ Engineer" />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Words Can Change The World!" className="mb-16" />
                    <ul className="grid grid-cols-2 gap-16">
                        <FeaturedArticle
                        title="Build A Custom Pagination Component In Reactjs From Scratch"
                        summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                        time="9 min read"
                        link="/"
                        img={article1}
                         />
                        <FeaturedArticle
                        title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
                        summary="Learn how to create stunning loading screens in React with 3 different methods. 
                        Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
                        Improve the user experience."
                        time="10 min read"
                        link="/"
                        img={article2}
                         />
                    </ul>
                    <h2 className="w-full text-4xl font-bold text-center my-16 mt-32">All Articles</h2>

                    <Article
                    title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                    date="Nov 5, 2023"
                    link="/"
                    img={article3}
                     />

                    <Article
                    title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
                    date="Nov 5, 2023"
                    link="/"
                    img={article4}
                     />

                    <Article
                    title="Creating An Efficient Modal Component In React Using Hooks And Portals"
                    date="Nov 5, 2023"
                    link="/"
                    img={article5}
                     />

                    <Article
                    title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
                    date="Nov 5, 2023"
                    link="/"
                    img={article6}
                     />

                    <Article
                    title="Redux Simplified: A Beginner's Guide For Web Developers"
                    date="Nov 5, 2023"
                    link="/"
                    img={article7}
                     />
                </Layout>
            </main>
        </>
    )
}


export default articles;