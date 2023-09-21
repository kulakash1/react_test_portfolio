import "./Achievements.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar1 from "../components/Navbar/navbar.js";

const Achievements = () => {
  return (
    <div className="">
      {/* NAVBAR */}
      <Navbar1 />

      {/*  <!--=============== Achievements ===============--> */}
      {/* <!-- <div class="about-me-section pt-5 pb-5">

        <div class="container">
            <div class="row">
                <div class="d-flex flex-column justify-content-center col-12 col-md-6 order-md-2">
                    <h1 class="main-point mb-3">"Success is not the destination, but the journey itself."</h1>
                    <h1 class="about-me-section-heading mb-3">This Page is Under Construction.</h1>
                    <img src="under construction.jpg" class="about-me-section-image d-md-none mb-3" />
                    <p class="description">Description </p>
                </div>

                <div class="col-12 col-md-6 order-1 order-md-1 d-none d-md-block">
                    <img src="under construction.jpg" class="about-me-section-image" />

                </div>
            </div>
        </div>
    </div> --> */}


    {/* <!-- ... (Previous HTML code remains the same) ... --> */}

<main>
    <section class="achievement-section">
        <h2>Earned Certificates</h2>
        <h3>Full Stack Web Development</h3>
        <div class="certificate-container">
            <div class="certificate" onclick="showCertificateDetails('Build Your Own Static Website', 'February 8, 2022', 'Web Development.', '55+ Hrs', '/Achievements/Certificates/Full Stack Web Development/Build Your Own Static Website.jpg', 'https://10xiitian.ccbp.in/certificate/ZSKZRZNPMD')">
                <img src="/Achievements/Certificates/Full Stack Web Development/Build Your Own Static Website.jpg" alt="Certificate 1" />
                <h3>Build Your Own Static Website</h3>
                <p>Issue Date: February 8, 2022</p>
                <p>Description: Web Development.</p>
                <p>Duration: 55+ Hrs</p>
            </div>
            {/* <!-- Add more Web Dev certificates as needed --> */}
            
            <div class="certificate" onclick="showCertificateDetails('Build Your Own Responsive Website', 'July 7, 2023', 'Web Development.', '56+ Hrs', '/Achievements/Certificates/Full Stack Web Development/Build Your Own Responsive Website.jpg', 'https://10xiitian.ccbp.in/certificate/OMURCWPYQZ')">
                <img src="/Achievements/Certificates/Full Stack Web Development/Build Your Own Responsive Website.jpg" alt="Certificate 2" />
                <h3>Build Your Own Responsive Website</h3>
                <p>Issue Date: July 7, 2023</p>
                <p>Description: Web Development.</p>
                <p>Duration: 56+ Hrs</p>
            </div>

            <div class="certificate" onclick="showCertificateDetails('Build Your Own Dynamic Web Application', 'July 10, 2023', 'Web Development.', '104+ Hrs', '/Achievements/Certificates/Full Stack Web Development/Build Your Own Dynamic Web Application.jpg', 'https://10xiitian.ccbp.in/certificate/WUUZUWTUHT')">
                <img src="/Achievements/Certificates/Full Stack Web Development/Build Your Own Dynamic Web Application.jpg" alt="Certificate 3" />
                <h3>Build Your Own Dynamic Web Application</h3>
                <p>Issue Date: July 10, 2023</p>
                <p>Description: Web Development.</p>
                <p>Duration: 104+ Hrs</p>
            </div>

            <div class="certificate" onclick="showCertificateDetails('JavaScript Essentials', 'July 29, 2023', 'Web Development.', '46+ Hrs', '/Achievements/Certificates/Full Stack Web Development/JavaScript Essentials.jpg', 'https://10xiitian.ccbp.in/certificate/CZVNCEDFXF')">
                <img src="/Achievements/Certificates/Full Stack Web Development/JavaScript Essentials.jpg" alt="Certificate 4" />
                <h3>JavaScript Essentials</h3>
                <p>Issue Date: July 29, 2023</p>
                <p>Description: Web Development.</p>
                <p>Duration: 46+ Hrs</p>
            </div>

            <div class="certificate" onclick="showCertificateDetails('Introduction to Databases', 'August 8, 2023', 'Web Development.', '56+ Hrs', '/Achievements/Certificates/Full Stack Web Development/Introduction to Databases.jpg', 'https://10xiitian.ccbp.in/certificate/IPZEPHJTED')">
                <img src="/Achievements/Certificates/Full Stack Web Development/Introduction to Databases.jpg" alt="Certificate 5" />
                <h3>Introduction to Databases</h3>
                <p>Issue Date: August 8, 2023</p>
                <p>Description: Web Development.</p>
                <p>Duration: 56+ Hrs</p>
            </div>

            <div class="certificate" onclick="showCertificateDetails('Responsive Web Design using Flexbox', 'September 16, 2023', 'Web Development.', '42+ Hrs', '/Achievements/Certificates/Full Stack Web Development/Responsive Web Design using Flexbox.jpg', 'https://10xiitian.ccbp.in/certificate/CFYRPSNPVN')">
                <img src="/Achievements/Certificates/Full Stack Web Development/Responsive Web Design using Flexbox.jpg" alt="Certificate 6" />
                <h3>Responsive Web Design using Flexbox</h3>
                <p>Issue Date: September 16, 2023</p>
                <p>Description: Web Development.</p>
                <p>Duration: 42+ Hrs</p>
            </div>

            <div class="certificate" onclick="showCertificateDetails('Node JS', 'September 19, 2023', 'Web Development.', '42+ Hrs', '/Achievements/Certificates/Full Stack Web Development/Node JS.jpg', 'https://10xiitian.ccbp.in/certificate/QUIOYCPWZH')">
                <img src="/Achievements/Certificates/Full Stack Web Development/Node JS.jpg" alt="Certificate 7" />
                <h3>Node JS</h3>
                <p>Issue Date: September 19, 2023</p>
                <p>Description: Web Development.</p>
                <p>Duration: 42+ Hrs</p>
            </div>

            {/* <!-- <div class="certificate" onclick="showCertificateDetails('React JS - Getting started', 'September 22, 2023', 'Web Development.', '42+ Hrs', '/Achievements/Certificates/Full Stack Web Development/React JS - Getting started.jpg', 'ht')">
                <img src="/Achievements/Certificates/Full Stack Web Development/React JS - Getting started.jpg" alt="Certificate 8" />
                <h3>React JS - Getting started</h3>
                <p>Issue Date: September 22, 2023</p>
                <p>Description: Web Development.</p>
                <p>Duration: 42+ Hrs</p>
            </div> --> */}
        </div>

        <h3>Programming Language</h3>
        <div class="certificate-container">
            <div class="certificate-container">
                <div class="certificate" onclick="showCertificateDetails('Python & OOP Concepts', 'February 12, 2022', 'Python Concepts.', '57+ Hrs', '/Achievements/Certificates/Programming Language/Python & OOP Concepts.jpg', 'https://10xiitian.ccbp.in/certificate/EXSGOWJFSE')">
                    <img src="/Achievements/Certificates/Programming Language/Python & OOP Concepts.jpg" alt="Certificate 1" />
                    <h3>Python & OOP Concepts</h3>
                    <p>Issue Date: February 12, 2022</p>
                    <p>Description: Python Concepts.</p>
                    <p>Duration: 57+ Hrs</p>
                </div>
                {/* <!-- Add more Competi certificates as needed --> */}
                <div class="certificate" onclick="showCertificateDetails('C++ and Foundations of STL', 'October 9, 2022', 'C++.', '15+ Hrs', '/Achievements/Certificates/Programming Language/C++ and Foundations of STL.jpg', 'https://10xiitian.ccbp.in/certificate/VWQJVAFLJA')">
                    <img src="/Achievements/Certificates/Programming Language/C++ and Foundations of STL.jpg" alt="Certificate 3" /> 
                    {/* <!-- Changed alt attribute to "Certificate 3" --> */}
                    <h3>C++ and Foundations of STL</h3>
                    <p>Issue Date: October 9, 2022</p>
                    <p>Description: C++.</p>
                    <p>Duration: 15+ Hrs</p>
                </div>
            </div>
        </div>

        <h3>Competitive Programming</h3>
        <div class="certificate-container">
            <div class="certificate-container">
                <div class="certificate" onclick="showCertificateDetails('Elementary Data Structures and Algorithms', 'February 13, 2022', 'DSA Fundamentals.', '29+ Hrs', '/Achievements/Certificates/Competitive Programming/Elementary Data Structures and Algorithms.jpg', 'https://10xiitian.ccbp.in/certificate/ZHXOQGMJWU')">
                    <img src="/Achievements/Certificates/Competitive Programming/Elementary Data Structures and Algorithms.jpg" alt="Certificate 2" />
                    <h3>Elementary Data Structures and Algorithms</h3>
                    <p>Issue Date: February 13, 2022</p>
                    <p>Description: DSA Fundamentals.</p>
                    <p>Duration: 29+ Hrs</p>
                </div>
                {/* <!-- Add more Competi certificates as needed --> */}
                <div class="certificate" onclick="showCertificateDetails('C++ and Foundations of STL', 'October 9, 2022', 'C++.', '15+ Hrs', '/Achievements/Certificates/Competitive Programming/C++ and Foundations of STL.jpg', 'https://10xiitian.ccbp.in/certificate/VWQJVAFLJA')">
                    <img src="/Achievements/Certificates/Competitive Programming/C++ and Foundations of STL.jpg" alt="Certificate 3" /> 
                    {/* <!-- Changed alt attribute to "Certificate 3" --> */}
                    <h3>C++ and Foundations of STL</h3>
                    <p>Issue Date: October 9, 2022</p>
                    <p>Description: C++.</p>
                    <p>Duration: 15+ Hrs</p>
                </div>
            </div>
        </div>

        
        <h3>Corporate Compliance</h3>
        <div class="certificate-container">
            <div class="certificate-container">
                <div class="certificate" onclick="showCertificateDetailsType2('Corporate Etiquette', 'May 5, 2022', 'Corporate Training.', 'E-202205-176223', '/Achievements/Certificates/Corporate Compliance/Corporate Etiquette.jpg', 'Learning and Development')">
                    <img src="/Achievements/Certificates/Corporate Compliance/Corporate Etiquette.jpg" alt="Certificate 1" />
                    <h3>Corporate Etiquette</h3>
                    <p>Issue Date: May 5, 2022</p>
                    <p>Description: Corporate Training.</p>
                    <p>Certification No.: E-202205-176223</p>
                </div>
                {/* <!-- Add more Competi certificates as needed --> */}
                <div class="certificate" onclick="showCertificateDetailsType2('Business Ethics', 'May 9, 2022', 'Corporate Training.', 'E-202205-176750', '/Achievements/Certificates/Corporate Compliance/Business Ethics.jpg', 'Learning and Development')">
                    <img src="/Achievements/Certificates/Corporate Compliance/Business Ethics.jpg" alt="Certificate 2" />
                    <h3>Business Ethics</h3>
                    <p>Issue Date: May 9, 2022</p>
                    <p>Description: Corporate Training.</p>
                    <p>Certification No.: E-202205-176750</p>
                </div>

                <div class="certificate" onclick="showCertificateDetailsType2('NBSO', 'May 9, 2022', 'Corporate Training.', 'E-202205-176744', '/Achievements/Certificates/Corporate Compliance/NBSO.jpg', 'Learning and Development')">
                    <img src="/Achievements/Certificates/Corporate Compliance/NBSO.jpg" alt="Certificate 3" />
                    <h3>NBSO</h3>
                    <p>Issue Date: May 9, 2022</p>
                    <p>Description: Corporate Training.</p>
                    <p>Certification No.: E-202205-176744</p>
                </div>

                <div class="certificate" onclick="showCertificateDetailsType2('POSH', 'May 9, 2022', 'Corporate Training.', 'E-202205-176747', '/Achievements/Certificates/Corporate Compliance/POSH.jpg', 'Learning and Development')">
                    <img src="/Achievements/Certificates/Corporate Compliance/POSH.jpg" alt="Certificate 4" />
                    <h3>POSH</h3>
                    <p>Issue Date: May 9, 2022</p>
                    <p>Description: Corporate Training.</p>
                    <p>Certification No.: E-202205-176747</p>
                </div>
            </div>
        </div>

        
    </section>
</main>

{/* <!-- ... (Remaining HTML code remains the same) ... --> */}
<div className="modal" id="certificateModal">
    <div class="modal-content">
        <span class="close-button" onclick="closeModal()">&times;</span>
        <div id="modalContent">
            {/* <!-- Certificate details will be dynamically added here -->
            <!-- <img id="fullCertificateImg" src="" alt="Full Certificate Image"> --> */}
        </div>
    </div>
</div>
    





    {/* <!-- ... (Previous HTML code remains the same) ... --> */}

    {/* <!-- <div class="modal" id="certificateModal">
        <div class="modal-content">
          <span class="close-button" onclick="closeModal()">&times;</span>
          <div id="modalContent">
            <img id="fullCertificateImage" src="" alt="Full Certificate Image">
          </div>
        </div>
      </div> --> */}
      
    

{/* <!-- ... (Remaining HTML code remains the same) ... --> */}

      {/* <!-- NEED TO UPDATE !--> */}
      {/* <!-- 
        <div class="modal" id="certificateModal">
        <div class="modal-content">
          <span class="close-button" onclick="closeModal()">&times;</span>
          <div id="modalContent">
            Certificate details will be dynamically added here
          </div>
        </div>
      </div> 
    --> */}

      
    </div>
  );
};

export default Achievements;
// export { Achievements };


// // JS Code

// // Event listener for clicking outside the modal to close it
// window.onclick = function (event) {
//   const modal = document.getElementById("certificateModal");
//   if (event.target === modal) {
//     modal.style.display = "none";
//     const modalContent = document.getElementById("modalContent");
//     modalContent.innerHTML = "";
//   }
// };





// function showCertificateDetails(title, issueDate, description, duration, imageUrl, verificationLink) {
//   const modal = document.getElementById("certificateModal");
//   const fullImg = document.getElementById("fullCertificateImg"); // Corrected variable name here
//   const modalContent = document.getElementById("modalContent");

//   // Set modal content with certificate details
//   // fullImg.src = imageUrl;

//   // Create elements to display certificate details
//   const titleElement = document.createElement("h2");
//   titleElement.textContent = title;

//   const imageContainer = document.createElement("div"); // Container for the image
//   const certificateImage = document.createElement("img");
//   certificateImage.src = imageUrl;
//   certificateImage.alt = title;
//   imageContainer.appendChild(certificateImage);

//   const issueDateElement = document.createElement("p");
//   issueDateElement.innerHTML = `<strong>Issue Date:</strong> ${issueDate}`;

//   const durationElement = document.createElement("p"); // Added duration element
//   durationElement.innerHTML = `<strong>Duration:</strong> ${duration}`;


//   const descriptionElement = document.createElement("p");
//   descriptionElement.innerHTML = `<strong>Description:</strong> ${description}`;

//   const verificationLinkElement = document.createElement("p");
//   verificationLinkElement.innerHTML = `<strong>Verification Link:</strong> <a href="${verificationLink}" target="_blank">${verificationLink}</a>`;

//   // Clear previous content and append new details
//   // modalContent.innerHTML = ""; // Clear previous content
//   modalContent.appendChild(imageContainer); // Append image container first
//   modalContent.appendChild(titleElement);
//   modalContent.appendChild(issueDateElement);
//   modalContent.appendChild(descriptionElement);
//   modalContent.appendChild(durationElement);
//   modalContent.appendChild(verificationLinkElement);

//   modal.style.display = "block";
// }


// function showCertificateDetailsType2(title, issueDate, description, certificationNo, imageUrl, issuedBy) {
//   const modal = document.getElementById("certificateModal");
//   const fullImg = document.getElementById("fullCertificateImg"); // Corrected variable name here
//   const modalContent = document.getElementById("modalContent");

//   // Set modal content with certificate details
//   // fullImg.src = imageUrl;

//   // Create elements to display certificate details
//   const titleElement = document.createElement("h2");
//   titleElement.textContent = title;

//   const imageContainer = document.createElement("div"); // Container for the image
//   const certificateImage = document.createElement("img");
//   certificateImage.src = imageUrl;
//   certificateImage.alt = title;
//   imageContainer.appendChild(certificateImage);

//   const issueDateElement = document.createElement("p");
//   issueDateElement.innerHTML = `<strong>Issue Date:</strong> ${issueDate}`;

//   const certificationNoElement = document.createElement("p"); // Added certificationNo element
//   certificationNoElement.innerHTML = `<strong>Certification No.:</strong> ${certificationNo}`;


//   const descriptionElement = document.createElement("p");
//   descriptionElement.innerHTML = `<strong>Description:</strong> ${description}`;

//   const issuedByElement = document.createElement("p");
//   issuedByElement.innerHTML = `<strong>Issued By:</strong> ${issuedBy}`;

//   // Clear previous content and append new details
//   // modalContent.innerHTML = ""; // Clear previous content
//   modalContent.appendChild(imageContainer); // Append image container first
//   modalContent.appendChild(titleElement);
//   modalContent.appendChild(issueDateElement);
//   modalContent.appendChild(descriptionElement);
//   modalContent.appendChild(certificationNoElement);
//   modalContent.appendChild(issuedByElement);

//   modal.style.display = "block";
// }

// function closeModal() {
//   const modal = document.getElementById("certificateModal");
//   modal.style.display = "none";
//   // Clear the image source to reset the modal when closing
//   // const fullImg = document.getElementById("fullCertificateImg");
//   const modalContent = document.getElementById("modalContent");
//   modalContent.innerHTML = "";
  
//   // modal.removeChild(modalContent);
  
//   // fullImg.src = "";
// }


// // DOMContentLoaded event listener is not required here

// // ... (Remaining JavaScript code remains the same) ...
