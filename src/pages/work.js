import React from "react"

import Nav from "../components/nav"
import Header from "../components/header"
import Subheader from "../components/subheader"
import PageHeader from "../components/pageHeader"
import WorkItems from "../components/workItems"

import gusto from "./work-assets/gusto.png"
import possibleMobile from "./work-assets/possibleMobile.png"
import turing from "./work-assets/turing.png"
import tracker from "./work-assets/tracker.png"
import ngpvan from "./work-assets/ngpvan.png"
import futuraBook from "./work-assets/futuraBook.png"
import dwolla from "./work-assets/dwolla.png"
import artDepartment from "./work-assets/artDepartment.png"
import tks from "./work-assets/tks.png"
import smh from "./work-assets/smh.png"
import git from "./work-assets/git.png"
import fundDesign from "./work-assets/2dDesign.png"
import knox from "./work-assets/knox.png"
import anamorphicTypography from "./work-assets/anamorphicTypography.png"
import dashboard from "./work-assets/dashboard.png"
import nodejs from "./work-assets/nodejs.png"

import resume from "./work-assets/Resume-CodySehl.pdf"

const items = [
  {
    image: gusto,
    website: "https://gusto.com/",
    name: "Gusto",
    location: "Denver",
    description:
      "Gusto's mission is to create a world where work empowers a better life. Each and every person here believes fully in that mission, and I know I worked with some of the most kind, talented, and curious individuals in existence.\n\nI left Gusto in 2023 Nov, took a wonderful sabbatical, and am currently looking for new opportunities in software development.",
  },
  {
    image: possibleMobile,
    website: "https://possiblemobile.com/",
    name: "POSSIBLE Mobile",
    location: "Denver",
    description:
      "After being exposed to the mobile ecosystem at Pivotal I wanted to explore the space more fully and so I ended up at POSSIBLE Mobile building for brands like NBA, PGA Tour, ConEd and Pokemon.\n\nAt POSSIBLE, I was able to work on a bunch of wildly different projects in a short amount of time. The pace of change really drove home the value of getting things done over the value of getting them perfect. That pace carried into the client space as well; I learned how to manage and interact with clients that really just want their thing built and don't want to hear about the why's and buts behind the technical choices you made along the way.\n\nI'm so glad I got to work at POSSIBLE, invest in my client-facing skills, and dive deep into the mobile ecosystem.",
  },
  {
    image: turing,
    website: "http://www.turing.io/",
    name: "Turing School of Software and Design",
    location: "Denver",
    description:
      "In the spring of 2018 I decided it was time to use the skills I learned at Pivotal to help others find a career they love. I joined Turing as a Fellow — a sort of temporary instructor — knowing I would eventually return to software development but wanting to contribute to the [school's mission](https://medium.com/turingschool) of helping a diverse population succeed in fulfilling careers. That mission is still important to me today, even after Turing.\n\nI developed curriculum for and gave lectures on the fundamentals of programming, object oriented design, testing, and web development. I also paired one on one with students, helping them get a more in-depth understanding of the concepts taught in class.\n\nIn addition to my normal responsibilities, I developed a starter-kit iOS application for a national non-profit partnering with Turing to empower girls to learn to code and become leaders in tech.",
  },
  {
    image: tracker,
    website: "http://www.pivotaltracker.com/",
    name: "Pivotal",
    location: "Denver",
    description:
      "I worked on the Pivotal Tracker team in Denver as a native mobile and web front end developer. I helped maintain their [iOS app](https://itunes.apple.com/us/app/pivotal-tracker/id444623375?mt=8) and rewrite their [Android app](https://play.google.com/store/apps/details?id=com.pivotaltracker.app&hl=en). \n\nBefore that, I worked to create their [analytics](https://www.pivotaltracker.com/blog/pivotal-tracker-analytics-now-out-of-beta/) platform using React. I've also written blog posts about [Android](https://pivotaltracker.com/blog/using-systrace-profile-GPU-rendering-Tracker-Android/) and [iOS](https://pivotaltracker.com/blog/using-systrace-profile-GPU-rendering-Tracker-Android/). All of this development took place in a framework of strict TDD and pair programming.\n\nIn addition to technical topics, I worked to promote [diversity and inclusion](https://pivotaltracker.com/blog/changing-group-behavior-with-small-actions-inclusion-thing-of-the-week) as well as define product direction by leading a multi-month process of facilitation, listening, and accountability.\n\nI've received [positive feedback](https://gist.github.com/lalunamel/3cd71480b8bf5c3a1558f5825a557f1a#feedback-ive-received) about all of the above.",
  },
  {
    image: ngpvan,
    website: "https://www.ngpvan.com/",
    name: "NGP VAN",
    location: "Washington, D.C.",
    description:
      "My last internship brought me to Washington, D.C. and NGP VAN, the political technology company powering the Democrats, labor unions, and nonprofits.\n\n I worked with [Aharon Wasserman](https://www.linkedin.com/pub/aharon-wasserman/2a/540/609), VP of Creative and Marketing to transform the company into a design-first organization. Together we put on NGP VAN Next, the company's first ever marketing event. I created the invitation and website to accompany the physical event and YouTube livestream. I also created [mock-ups](https://bit.ly/164JV3i) for their new marketing pages. I loved being able to engage in design criticism with another creative professional.\n\nAt the end of the summer I asked Aharon how he felt about my time at NGP VAN and he said: \"It's so hard to find good designer-developers; you'd be a gift to any team.\"",
  },
  {
    image: tracker,
    website: "https://www.pivotaltracker.com/",
    name: "Pivotal",
    location: "Denver",
    description:
      "During the summer of 2013 I worked on Pivotal Tracker, a project management tool built for developers. The Tracker team used Rails and Backbone with strict agile to create a great client side app. I helped to develop Tracker Next, a redesigned version of this tool. I also worked with their designer, [Drew McKinney](https://twitter.com/drewmck), to create wireframes and full mockups using Adobe Fireworks.",
  },
  {
    image: futuraBook,
    website: "https://bit.ly/1j8m2HJ",
    name: "Futura Book",
    location: "Galesburg",
    description:
      "As part of an independent study on typography taught by [Tim Stedman](https://www.linkedin.com/pub/tim-stedman/14/666/266), I wrote and designed a small book on Paul Renner and his typeface called Futura. First, research was done and a paper was written. Then, graphics were added and the work was composed using Adobe Indesign. Finally, I bound everything by hand using paper, cardboard, and athletic tape. It was a labor of love and the result of many late Thursday nights. I am incredibly proud of the final product.",
  },
  {
    image: dwolla,
    website: "https://www.dwolla.com",
    name: "Dwolla",
    location: "Des Moins",
    description:
      "My first internship took place at Dwolla in Des Moines after my freshman year of college. Dwolla is an easy way to send money without the high fees that credit cards typically charge. Think PayPal, but way better.\n\n I used MVC/.Net C# to maintain a system responsible for transferring huge amounts of cash daily. I also learned about the interesting and horribly outdated ACH system used to manage money in the United States. My pet project was Dwolla Places, a way for businesses and customers to connect on the payment network.\n\nDwolla's CEO [Ben Milne](http://www.benmilne.com/) made a big impression on me and he had this to say: \"I asked Cody to drop out of school. He turned me down. If you're reading [this], that means I don't know he's looking for work or he already turned me down, again. If I started another company today he's one of a small handful of people I'd ask to join me on day 1.\"",
  },
  {
    image: artDepartment,
    website: "https://bit.ly/HVerAB",
    name: "Art Department",
    location: "Galesburg",
    description:
      "At Knox College in Illinois, there's always a next project. The department of art and art history needed to update their website. They had a professor ([Tim Stedman](https://www.linkedin.com/pub/tim-stedman/14/666/266)) who knew design, and they needed someone who knew the web. Enter Cody Sehl, burgeoning developer/designer. Tim and I worked in Indesign to create mockups, then took to Sublime Text to create the actual web page. Tim and I have a symbiotic relationship: He learns web development from me while I learn design from him. The project is currently under development.",
  },
  {
    image: tks,
    website: "http://www.theknoxstudent.com/",
    name: "The Knox Student",
    location: "Galesburg",
    description:
      "The Knox Student, aka TKS, is Knox's newspaper. I joined the staff along with one other student in the winter of 2011. During my time, I have overseen the transition from Django to Wordpress and the implementation of professional development practices like weekly backups, version control (git, if you're wondering), bug tracking, and staging/production environments. Day to day, I deliver feature requests and bug fixes. Oftentimes features necessitate the creation of documentation for use by the other, nontechnical editors at the paper. I really enjoy working closely with the diverse staff on TKS.",
  },
  {
    image: smh,
    website: "https://bit.ly/HBRlyK",
    name: "Send Me Happy",
    location: "Des Moines",
    description:
      "Send Me Happy is motivational text messages on a schedule. Sign up and you might receive a message complimenting your shoes, for example. The messages are so small and inconsequential it's actually hard not to laugh a little bit. That's the point, too: receive an unexpected, quirky message about how great you are, and you'll be just a little better off for it. It's like guerilla warfare of the mind, only REVERSED. Have fun, and take a moment to notice the great shoes you're wearing!",
  },
  {
    image: git,
    website: "https://github.com/lalunamel/tracker-git",
    name: "tracker-git",
    location: "Denver",
    description:
      "I love working with Pivotal Tracker. I love using git. I love using Tracker's git integrations, but not that much.\n\nIn order to finish a Tracker story, you have to enter a command like 'git commit -m \"[Finishes #12345678] A nice commit message.\"' That may not seem terrible, but after the 10th time, it gets a little tedious. tracker-git shortens commands like that by paring them down to the meat and potatoes. Instead of that verbose command, you can use 'git finish 12345678 \"A nice commit message in quotes.\"' A little bit nicer, a little bit quicker, and a little bit easier.",
  },
  {
    image: fundDesign,
    website: "https://bit.ly/1fF5J5f",
    name: "Fundamentals of 2D Design",
    location: "Galesburg",
    description:
      "This interactive material was inspired by Tim Stedman's Fundamentals of 2D Design class at Knox College. By arranging black rectangles on a white background, the user will create visually interesting compositions. This is surprisingly difficult given the simplicity of the forms you have to work with. To create quality compositions requires an incredible amount of time and concentration. I have gone through the process though, and can say it's well worth the result.",
  },
  {
    image: knox,
    website: "http://cs.knox.edu/",
    name: "CS Department",
    location: "Galesburg",
    description:
      "Being a small liberal arts college, Knox doesn't have the resources to hire a team of web developers. As a result, many of the department pages are unattractive and hard to navigate. When I came to the college in 2011, I offered to update the computer science department website with a new look and current information. They took me up on my offer and the site was updated and organized so that students can easily find course schedules and technical documents. Changes have been made by the department, but the overall feeling of the original design still persists. This was my first web project at Knox.",
  },
  {
    image: anamorphicTypography,
    website: "https://bit.ly/1j7ax3c",
    name: "Anamorphic Typography",
    location: "Galesburg",
    description:
      "This project was the result of yet another class with Tim Stedman. At the time, I was very interested in works that only existed to certain viewers (at a finite perspective) at a certain time. The culmination of this class was this anamorphic typography project. Made out of blue painters tape, it suspends the perspective of a particular viewer and displays it on the open space. To see the work properly, it must be viewed at the proper angle. Interestingly though, this angle is observable by everyone through the stretching and warping of the letters on brick.",
  },
  {
    image: dashboard,
    website: "https://codysehl.net/Dashboard-Website/dashboard.html",
    name: "Dashboard",
    location: "Lake Forest",
    description:
      "Dashboard was my very first web project. Made during high school with php and javascript, it morphed into a purely client-side app later on in it's life. The idea was to create an entirely public space where users could leave notes on a 2D plane, like a digital cork board. By clicking the link button at the top right of a note, users can transform their content into an embedded object. So, for example, one might paste the embed code of a youtube video into a note, then click the link at the top right, and voila! The user's note is now a video! This was a very fun project to work on as an introduction to web programming.",
  },
  {
    image: nodejs,
    website: "https://github.com/lalunamel/NodeDynamicImageServer",
    name: "Node Image Server",
    location: "Lake Forest",
    description:
      "This was a simple node tutorial created as much for others as it was for myself. The tutorial guides the developer through the steps it takes to create a dynamic image server, not unlike a site like Placekitten. Creating this tutorial really forced me to become conversant with the fine details of node — there's no faking it when you have to explain a technology. I loved learning about the nitty-gritty of node, though I regret that I have not had the opportunity to use it since.",
  },
]

const Work = props => {
  return (
    <>
      <Nav />

      <PageHeader>
        <Header>Work</Header>
        <Subheader>
          happens all over. These are a few of the things I've done and the
          places they've happened.
        </Subheader>
      </PageHeader>
      <Subheader style={{ textAlign: "center", marginTop: 50 }}>
        See <a href="https://perfect-apology-c39.notion.site/Cody-Sehl-Peer-Feedback-670237912b9e4ecc98c6a6f61339077f">what others have to say</a> about working with me or <br/> take a look at my{" "}
        <a
          href={resume}
        >
          resume
        </a>{" "}
        if you want a hard copy.
      </Subheader>

      <WorkItems items={items} />
    </>
  )
}

export default Work
