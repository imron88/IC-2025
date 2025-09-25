import { StarterLayout } from "layout";
import Head from "next/head";
import React from "react";
import Sponsored from "@/components/sponsored";
import Schedule from "@/components/schedule";
import {
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiWhatsappFill
} from "react-icons/ri";

const callForPapers = () => {
  return (
    <>
      <Head>
        <title>Call for Papers - ICIDLHV- International Conference on Research Trends of ICT using Digital Libraries with Human Values & Ethics</title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      {/* <Schedule /> */}
      <br />

      <main className="bg-gradient-to-b from-background-primary to-white px-4 sm:px-6 lg:px-8 pt-7">
        {/* Call for Papers Section */}
        <div className="bg-background-primary rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-text-primary">Call for Papers</h1>
          <p className="text-sm sm:text-base lg:text-lg text-text-secondary mb-6 sm:mb-8">
            Prospective authors from academia as well as industry are invited to
            submit their full papers in main conference ICSICST-2026 which have not
            been yet submitted published and that illustrate research, surveying
            works, and industrial application in all disciplines of Engineering
            for Intelligence based applications & automation activities,
            especially with the emergence of Data Analytics, AI, Machine Learning
            & Deep Learning or in following broad areas, but not limited to:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Block 1: Sustainable Computing */}
            <div>
              <h1 className="text-2xl text-text-primary">Intelligent Systems:</h1>
              <div className="space-y-2 mt-2">
                {[
                  "Artificial Intelligence & Machine Learning",
                  "Image Processing and Pattern Recognition",
                  "Robotics and automation",
                  "Big data analytics and data mining",
                  "Internet of Things (IoT) and smart systems"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 2: Intelligent Computing */}
            <div>
              <h1 className="text-2xl text-text-primary">Sustainable Computing:</h1>
              <div className="space-y-2 mt-2">
                {[
                  "Complex systems: modelling and simulation",
                  "Sustainable communication and security",
                  "Energy-efficient computing systems and algorithms",
                  "Green data centers and cloud computing",
                  "Responsible & Re-usable Computing"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 3: Embedded Systems And VLSI Designing */}
            <div>
              <h1 className="text-2xl text-text-primary">Advancements in Science and Engineering:</h1>
              <div className="space-y-2 mt-2">
                {[
                  "Quantum Computing",
                  "Medical Electronics and Astrophysics",
                  "Digital Materials Design and Materials Informatics",
                  "Flexible Electronics & VLSI",
                  "Semiconductor Technology"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 4: Engineering Materials */}
            <div>
              <h1 className="text-2xl text-text-primary">Emerging Material Science:</h1>
              <div className="space-y-2 mt-2">
                {[
                  "Nanomaterials",
                  "Superconductors",
                  "Advanced polymers",
                  "Biomaterials & Biotechnology",
                  "Computational Material Science"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-secondary-100 rounded-lg p-4 sm:p-6 mt-6">
            <p className="text-sm sm:text-base lg:text-lg text-text-secondary">
              <span className="font-bold">Note: </span>
              Session wise " Best Paper Award " along with certificates to all the authors.
            </p>
          </div>
        </div>

        {/* Conference Tracks Section */}
        <div className="bg-background-primary rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#3a7e44' }}>Conference Tracks</h2>
          <p className="text-sm sm:text-base lg:text-lg text-text-secondary mb-6 sm:mb-8">
            The conference is organized into specialized tracks covering various aspects of ICT, Digital Libraries, Human Values, and Ethics. Authors are encouraged to submit papers aligned with these tracks:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Track 1: Digital Libraries & Information Systems */}
            <div className="bg-secondary-100 rounded-lg p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#3a7e44' }}>Digital Libraries & Information Systems</h3>
              <div className="space-y-2">
                {[
                  "Chronologies in Libraries",
                  "Community Based Information Systems Conference Subtheme",
                  "Information and Knowledge Management",
                  "Technology & Innovations in Libraries and their impact on Measurement on Learning, Research and Users"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#3a7e44' }} />
                    <p className="text-sm sm:text-base text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Track 2: Research Metrics & Analytics */}
            <div className="bg-secondary-100 rounded-lg p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#3a7e44' }}>Research Metrics & Analytics</h3>
              <div className="space-y-2">
                {[
                  "Bibliometrics, Scientometrics, Webometrics/ CYBERMETRICS, Informetrics and Altmetrics",
                  "Snowball Metrics",
                  "Citation Indexing Services",
                  "Research Metrics and Analytics for Scholarly Communication",
                  "Implementing Fair and Responsible Methods",
                  "Quantitative Analysis of S&T Innovations",
                  "Sustainable Science and Technology Metric"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#3a7e44' }} />
                    <p className="text-sm sm:text-base text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Track 3: Collaborative Research & Innovation */}
            <div className="bg-secondary-100 rounded-lg p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#3a7e44' }}>Collaborative Research & Innovation</h3>
              <div className="space-y-2">
                {[
                  "Collaboration in Science and Technology From Both Quantitative and Qualitative Points of View",
                  "Academic-Corporate Collaboration and Impact",
                  "Data Science, Big Data and Big Data Analytics",
                  "AI Impact on Science of Science",
                  "Education for Applied Information Science"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#3a7e44' }} />
                    <p className="text-sm sm:text-base text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Track 4: Ethics and Human Values */}
            <div className="bg-secondary-100 rounded-lg p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#3a7e44' }}>Ethics and Human Values</h3>
              <div className="space-y-2">
                {[
                  "Ethical Challenges in Digital Preservation",
                  "Ethics of Information Representation and Metadata",
                  "Social Justice and Ethical Access",
                  "Ethics in Digital Scholarship and Research",
                  "Ethical Frameworks for AI Development"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#3a7e44' }} />
                    <p className="text-sm sm:text-base text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Track 5: Educational Technology & Pedagogy */}
            <div className="bg-secondary-100 rounded-lg p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#3a7e44' }}>Educational Technology & Pedagogy</h3>
              <div className="space-y-2">
                {[
                  "Student-Centered Pedagogy",
                  "Holistic Education and Well-Being",
                  "Cultivating Empathy and Compassion",
                  "Promoting Critical Thinking and Creativity",
                  "Teacher Professional Development in Ethical ICT Integration",
                  "Integration of ICT for Moral and Ethical Education",
                  "Digital Storytelling for Values Education"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#3a7e44' }} />
                    <p className="text-sm sm:text-base text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Track 6: Human-AI Collaboration & Sustainable Development */}
            <div className="bg-secondary-100 rounded-lg p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#3a7e44' }}>Human-AI Collaboration & Sustainable Development</h3>
              <div className="space-y-2">
                {[
                  "Online Collaboration and Community Engagement",
                  "Technology Integration with a Humanistic Approach",
                  "Human-AI Collaboration for Value Preservation",
                  "AI for Inclusive and Sustainable Development"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#3a7e44' }} />
                    <p className="text-sm sm:text-base text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="bg-secondary-100 rounded-lg p-4 sm:p-6 mt-6">
            <p className="text-sm sm:text-base lg:text-lg text-text-secondary">
              <span className="font-bold">Submission Guidelines: </span>
              Papers should clearly indicate which track they are targeting. Cross-disciplinary submissions that span multiple tracks are welcome and encouraged.
            </p>
          </div>
        </div>

        {/* Why Attend Section */}
        <div className="bg-background-primary rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-text-primary">Why Attend IC-SICST 2026?</h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              "Network with Experts: Connect with leading researchers, industry professionals, and academicians from around the world.",
              "Learn from the Best: Attend keynote speeches, technical sessions, and workshops delivered by renowned experts.",
              "Showcase Your Work: Present your research findings through oral presentations, poster sessions, and paper publications.",
              "Explore Emerging Trends: Gain insights into the latest advancements in sustainable and intelligent computing.",
              "Foster Collaboration: Collaborate with like-minded individuals to drive innovation and solve real-world problems.",
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-primary-500 flex-shrink-0" />
                <p className="text-sm sm:text-base text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        {/* <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">The Impact of IC-SICST</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700">
            IC-SICST 2026 plays a crucial role in promoting sustainable and intelligent computing practices. By fostering interdisciplinary collaboration and knowledge sharing, the conference contributes to the development of innovative solutions that address global challenges such as climate change, energy consumption, and social inequality.
          </p>
        </div> */}

        {/* Join Community Section */}
        {/* <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8"> */}
        {/* <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Join the IC-SICST Community</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8">
            If you are passionate about the future of technology and its positive impact on society, IC-SICS is the perfect platform for you. Join us to explore the frontiers of sustainable and intelligent computing and shape the future together.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { 
                platform: "Facebook",
                link: "#",
                icon: "RiFacebookBoxFill",
                color: "hover:text-indigo-700"
              },
              { 
                platform: "LinkedIn",
                link: "#",
                icon: "RiLinkedinBoxFill",
                color: "hover:text-blue-600"
              },
              { 
                platform: "Twitter",
                link: "#",
                icon: "RiTwitterFill",
                color: "hover:text-sky-500"
              },
              { 
                platform: "WhatsApp",
                link: "#",
                icon: "RiWhatsappFill",
                color: "hover:text-emerald-500"
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className={`flex items-center justify-center space-x-2 p-3 sm:p-4 rounded-lg border border-gray-200 
                  transition-all duration-300 hover:shadow-md ${social.color} group`}
              >
                <i className={`text-xl sm:text-2xl text-gray-600 group-hover:${social.color.split('hover:')[1]}`} />
                <span className="text-sm sm:text-base font-medium text-gray-700 group-hover:text-gray-900">
                  {social.platform}
                </span>
              </a>
            ))}
          </div> */}

        {/* <div className="sm:mt-8 p-4 sm:p-6 bg-blue-50 rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
              Stay Connected
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Follow us on social media to stay updated with the latest conference news, 
              announcements, and networking opportunities.
            </p>
            <div className="flex flex-col space-y-2 text-sm sm:text-base text-gray-700">
              <p className="flex items-center space-x-2">
                <span className="font-medium">Email:</span>
                <a href="mailto:icsicst@poornima.org" 
                   className="text-blue-600 hover:text-blue-800 transition-colors">
                  icsicst@poornima.org
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <span className="font-medium">Website:</span>
                <a href="https://icsicst.poornima.org" 
                   className="text-blue-600 hover:text-blue-800 transition-colors">
                  icsicst.poornima.org
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Important Dates Section */}
        {/* <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Important Dates</h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              { event: "Full Paper Submission", date: "26 April 2026" },
              { event: "Notification of Acceptance", date: "02 May 2026" },
              { event: "Revised Paper Submission", date: "06 May 2026" },
              { event: "Early Bird Registration", date: "06 May 2026" },
              { event: "Late Registration", date: "10 May 2026" },
              { event: "Conference Dates", date: "16-17 May 2026" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-2">
                <span className="text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-0">{item.event}</span>
                <span className="text-sm sm:text-base text-blue-600">{item.date}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Contact Section */}
        {/* <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Contact Information</h2>
          <div className="space-y-2 text-sm sm:text-base text-gray-700">
            <p className="font-medium">Dr. Bhanu Pratap</p>
            <p>Email: Bhanu.pratap@poornima.org</p>
            <p>Phone: +91 8118874724</p>
          </div>
        </div> */}

        <Sponsored />
      </main>
    </>
  );
};

export default callForPapers;
