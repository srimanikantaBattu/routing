import React from "react";
import Footer from "../footer/Footer";
function Home() {
  return (
    <div>
      <div className="container">
        <h1 className="display-4 text-center text-info mb-3">Home</h1>
        <img
          style={{ width: "500px" }}
          className="d-block mx-auto"
          src="https://assets.rappler.com/2AFB7D5E5C734656A2BF5933B04681AC/img/83611058FD43467D99AB4A81C271E237/shutterstock-business-technology.jpg"
          alt=""
        />
        <p className="text-center mt-4">
          Technology is the application of conceptual knowledge for achieving
          practical goals, especially in a reproducible way. The word technology
          can also mean the products resulting from such efforts, including both
          tangible tools such as utensils or machines, and intangible ones such
          as software. Technology plays a critical role in science, engineering,
          and everyday life. Technological advancements have led to significant
          changes in society. The earliest known technology is the stone tool,
          used during prehistoric times, followed by the control of fire, which
          contributed to the growth of the human brain and the development of
          language during the Ice Age. The invention of the wheel in the Bronze
          Age allowed greater travel and the creation of more complex machines.
          More recent technological inventions, including the printing press,
          telephone, and the Internet, have lowered barriers to communication
          and ushered in the knowledge economy. While technology contributes to
          economic development and improves human prosperity, it can also have
          negative impacts like pollution and resource depletion, and can cause
          social harms like technological unemployment resulting from
          automation. As a result, there are ongoing philosophical and political
          debates about the role and use of technology, the ethics of
          technology, and ways to mitigate its downsides.Information Technology
          (IT):</p> <p> IT involves the use of computers, software, networks, and other
          electronic systems to store, process, transmit, and retrieve
          information. This field includes areas such as programming, database
          management, cybersecurity, and more. Communication Technology: This
          area focuses on technologies that facilitate communication, such as
          the internet, mobile phones, satellite systems, and social media. It
          plays a crucial role in connecting people globally and enabling the
          exchange of information in real-time.
          </p>
        <p className="text-center">
          Biotechnology: Biotechnology involves the use of biological systems,
          organisms, or derivatives to develop new products or processes. This
          field has applications in medicine, agriculture, and environmental
          management.Robotics and Artificial Intelligence (AI): Robotics
          involves the design, construction, and operation of robots, while AI
          is the development of systems that can perform tasks that typically
          require human intelligence. Together, they are shaping automation and
          intelligent.
        </p>
        <p className="text-center">
          Renewable Energy Technologies: With a growing emphasis on sustainable
          practices, technologies related to renewable energy, such as solar
          power, wind energy, and hydropower, are gaining prominence as
          alternatives to traditional fossil fuels. Nanotechnology:
          Nanotechnology deals with materials and devices at the nanoscale,
          often involving structures with dimensions of 1 to 100 nanometers. It
          has applications in medicine, electronics, materials science, and
          more. 3D Printing: Also known as additive manufacturing, 3D printing
          builds objects layer by layer based on digital models. This technology
          is used in various industries, including manufacturing, healthcare,
          and construction. Blockchain: Blockchain is a decentralized and
          distributed ledger technology that ensures secure and transparent
          transactions. It gained fame as the underlying technology for
          cryptocurrencies like Bitcoin but has broader applications in finance,
          supply chain, and beyond.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
