import React from "react";
import Head from "next/head";
import Layout from "@/component/layout";
import AnimatedText from "@/component/animatedText";
import Link from "next/link";
import { GithubIcon } from "@/component/icon";
import project1 from "../../public/images/projects/pig game.png";
import project2 from "../../public/images/projects/project_Banklish.png";
import project3 from "../../public/images/projects/Mapty APP.png";
import project4 from "../../public/images/projects/outdoors.png";
import project5 from "../../public/images/projects/SHOP E-commerce.png";
import project6 from "../../public/images/projects/omnifood.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/component/TransitionEffect1";

const FramerImage = motion(Image);

import Image from "next/image";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-3xl
     border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] dark:bg-light
              bg-dark rounded-br-3xl xs:-right-2 xm:h-[102%] xs:w-full xs:rounded-[1.5rem] "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover: underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
    border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
    rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover: underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between ">
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | Projects Page</title>
        <meta name="description" content="any desciption" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Bankist WebApp"
                summary="Bank Website Application
A feature-rich Money App using HTML,  CSS, Javascirpt, React Router and Recharts. 
It shows detail regarding almost all the account. You can easily convert the price in your 
local money."
                link="https://silly-dusk-cebe99.netlify.app/"
                type="Feature Project"
                img={project2}
                github="https://github.com/worapon888/Bankweb-app-vol.2"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Mapty WebApp"
                summary="Mapty Website Application"
                link="https://resplendent-gumption-f6ddfb.netlify.app/"
                type="Project"
                img={project3}
                github="https://github.com/worapon888/running-map"
              />
            </div>

            <div className="col-span-6  sm:col-span-12">
              {" "}
              <Project
                title="Pig game"
                summary="Pig Game"
                link="https://inquisitive-narwhal-8ea495.netlify.app/"
                type="Project"
                img={project1}
                github="https://github.com/worapon888/Pig-Game"
              />
            </div>

            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title="Outdoors Website"
                summary="Outdoors Tours Travel Website"
                link="https://dazzling-biscotti-1b6461.netlify.app/"
                type="Feature Project"
                img={project4}
                github="https://github.com/worapon888/natour-travel"
              />
            </div>
            <div className="col-span-6  sm:col-span-12">
              {" "}
              <Project
                title="Shop E-commerce WebApp"
                summary="Shop E-commerce WebApp"
                link="https://incredible-nasturtium-44eeb6.netlify.app/shop"
                type="Project"
                img={project5}
                github="https://github.com/worapon888/crwn-clothing"
              />
            </div>
            <div className="col-span-6  sm:col-span-12">
              {" "}
              <Project
                title="Omnifood Website"
                summary="Omnifood Website"
                link="https://magnificent-bombolone-4d0f12.netlify.app/"
                type="Project"
                img={project6}
                github="https://github.com/worapon888/Omnifood"
              />
            </div>
          </div>
        </Layout>
      </main>
      ;
    </>
  );
};

export default projects;
