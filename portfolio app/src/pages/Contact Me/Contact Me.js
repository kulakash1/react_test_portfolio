import "./Contact Me.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar1 from "../components/Navbar/navbar.js";

const ContactMe = () => {
  return (
    <div className="">
      {/* NAVBAR */}
      <Navbar1 />

      {/*  <!--=============== Contact Me ===============--> */}
      {/* <!-- <div class="about-me-section pt-5 pb-5">

        <div class="container">
            <div class="row">
                <div class="d-flex flex-column justify-content-center col-12 col-md-6 order-md-2">
                    <h1 class="main-point mb-3">Connecting You with Akash Kulshrestha</h1>
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


    {/* <!--=============== CONTACT ME===============--> */}
    <section class="contact-me-section p-3 ">
        <h1 class="text-dark">This Page is Under Development(Submit Button will not work)</h1>
    
        <div class="text-center">
            <span class="">Get in touch</span>
            <h1 class="">Contact Me</h1>
        </div>

        <div class="container">
            <div class="row">
                <div class="d-flex flex-column justify-content-center col-12 col-md-6 order-1">
                    <div class="text-center">
                        <div>
                            <h3 class="main-point mb-3">Connect with Akash Kulshrestha</h3>
                        </div>
                        <div>
                            <div class="contact-me-section-contact-card mb-3">
                                <i class="bi bi-envelope-plus icon"></i>
                                <h3 class="">Email</h3>
                                <span class="">
                                    akashkulshrestha7@gmail.com
                                </span>
            
                                <a
                                href="mailto:akashkulshrestha7@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                class=""
                                >
                                <br />
                                Write me
                                <i class="bi bi-arrow-right arrow-right-icon"></i>
                                </a>
                            </div>
                            <div class="contact-me-section-contact-card mb-3">
                                <i class="bi bi-whatsapp icon"></i>
                                <h3 class="">Dummy Whatsapp</h3>
                                <span class="">99</span>
                
                                <a
                                href="https://api.whatsapp.com/send?phone=9199&text=Hello, more information!"
                                target="_blank"
                                rel="noopener noreferrer"
                                class=""
                                >
                                <br />
                                Write me
                                <i class="bi bi-arrow-right arrow-right-icon"></i>
                            </a>
                            </div>
                            <div class="contact-me-section-contact-card mb-3">
                                <i class="bi bi-messenger icon"></i>
                                <h3 class="">Messenger</h3>
                                <span class="">user</span>
            
                                <a
                                    href="https://www.messenger.com/t/100002615239110/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class=""
                                    >
                                    <br />
                                    Write me
                                    <i class="bi bi-arrow-right arrow-right-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 order-2">
                    <h1 class="form-heading">You can write me Your Project</h1>
        <form id="addUserForm">
            <div class="mb-3">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Type your Name Here" />
                <p id="nameErrMsg" class="error-message"></p>
            </div>
            <div class="mb-3">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Type your Email Here" />
                <p id="emailErrMsg" class="error-message"></p>
            </div>
            <div class="mb-3">
                <label for="projectDetails">Project Details</label>
                <input type="message" class="form-control" id="projectDetails" placeholder="Type description of your project Here"/>
                <p id="projectDetailsErrMsg" class="error-message"></p>
            </div>
            <div class="mb-3">
                <label for="status">Working Status</label>
                <select id="status" class="form-control">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>
            {/* <!-- <div class="mb-3">
                <h1 class="gender-field-heading">Gender</h1>
                <input type="radio" name="gender" id="genderMale" value="Male" checked />
                <label for="genderMale">Male</label>
                <input type="radio" name="gender" id="genderFemale" value="Female" class="ml-2" />
                <label for="genderFemale">Female</label>
            </div> --> */}
            <button class="btn btn-primary">Submit</button>
        </form>

                </div>
            </div>
        </div>
    </section>
    
    
    
    {/* <!-- <section class="contact contact_bg  text-center" id="contact">
        <span class="section__subtitle">Get in touch</span>
        <h2 class="section__title">Contact Me</h2>

        <div class="contact__container">
          <div class="contact__content col-6">
            <h3 class="contact__title">Talk to me</h3>

            <div class="contact__info">
              <div class="contact__card">
                <i class="bx bx-mail-send contact__card-icon"></i>
                <h3 class="contact__card-title">Email</h3>
                <span class="contact__card-data">
                  akashkulshrestha7@gmail.com
                </span>

                <a
                  href="mailto:akashkulshrestha7@gmail.com"
                  target="_blank"
                  class="contact__button"
                >
                  Write me
                  <i class="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
              <div class="contact__card">
                <i class="bx bxl-whatsapp contact__card-icon"></i>
                <h3 class="contact__card-title">Whatsapp</h3>
                <span class="contact__card-data">9958457414</span>

                <a
                  href="https://api.whatsapp.com/send?phone=919958457414&text=Hello, more information!"
                  target="_blank"
                  class="contact__button"
                >
                  Write me
                  <i class="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
              <div class="contact__card">
                <i class="bx bxl-messenger contact__card-icon"></i>
                <h3 class="contact__card-title">Messenger</h3>
                <span class="contact__card-data">user</span>

                <a
                  href="https://www.messenger.com/t/100026458371142"
                  target="_blank"
                  class="contact__button"
                >
                  Write me
                  <i class="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="contact__content col-6">
            <h3 class="contact__title">Write me your project</h3>

            <form action="" class="contact__form">
              <div class="contact__form-div">
                <label for="" class="contact__form-tag">Names</label>
                <input
                  type="text"
                  placeholder="Insert your name"
                  class="contact__form-input"
                />
              </div>
              <div class="contact__form-div">
                <label for="" class="contact__form-tag">Mail</label>
                <input
                  type="email"
                  placeholder="Insert your email"
                  class="contact__form-input"
                />
              </div>
              <div class="contact__form-div contact__form-area">
                <label for="" class="contact__form-tag">Project</label>
                 <input type="text" class="contact__form-input"> 
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Write your project"
                  class="contact__form-input"
                ></textarea>
              </div>

              <button class="button">Send Message</button>
            </form>
          </div>
        </div>
      </section> --> */}

      
    </div>
  );
};

export default ContactMe;
// export { ContactMe };


// // JS Code

// let nameEl = document.getElementById("name");
// let nameErrMsgEl = document.getElementById("nameErrMsg");

// let emailEl = document.getElementById("email");
// let emailErrMsgEl = document.getElementById("emailErrMsg");

// let workingStatusEl = document.getElementById("status");
// // let genderMaleEl = document.getElementById("genderMale");
// // let genderFemaleEl = document.getElementById("genderFemale");

// let addUserFormEl = document.getElementById("addUserForm");

// let formData = {
//     name: "",
//     email: "",
//     status: "Active"
//     // ,
//     // gender: "Male"
// };

// nameEl.addEventListener("blur", function(event) {
//     if (event.target.value === "") {
//         nameErrMsgEl.textContent = "Required*";
//     } else {
//         nameErrMsgEl.textContent = "";
//     }

//     formData.name = event.target.value;
// });

// emailEl.addEventListener("blur", function(event) {
//     if (event.target.value === "") {
//         emailErrMsgEl.textContent = "Required*";
//     } else {
//         emailErrMsgEl.textContent = "";
//     }

//     formData.email = event.target.value;
// });

// workingStatusEl.addEventListener("change", function(event) {
//     formData.status = event.target.value;
// });

// // genderMaleEl.addEventListener("change", function(event) {
// //     formData.gender = event.target.value;
// // });

// // genderFemaleEl.addEventListener("change", function(event) {
// //     formData.gender = event.target.value;
// // });

// function validateFormData(formData) {
//     let {
//         name,
//         email
//     } = formData;
//     if (name === "") {
//         nameErrMsgEl.textContent = "Required*";
//     }
//     if (email === "") {
//         emailErrMsgEl.textContent = "Required*";
//     }
// }

// // function submitFormData(formData) {
// //     let options = {
// //         method: "POST",
// //         headers: {
// //             "Content-Type": "application/json",
// //             Accept: "application/json",
// //             Authorization: "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f"
// //         },
// //         body: JSON.stringify(formData)
// //     };

// //     let url = "https://gorest.co.in/public-api/users";

// //     fetch(url, options)
// //         .then(function(response) {
// //             return response.json();
// //         })
// //         .then(function(jsonData) {
// //             console.log(jsonData);
// //             if (jsonData.code === 422) {
// //                 if (jsonData.data[0].message === "has already been taken") {
// //                     emailErrMsgEl.textContent = "Email Already Exists";
// //                 }
// //             }
// //         });
// // }

// addUserFormEl.addEventListener("submit", function(event) {
//     event.preventDefault();
//     validateFormData(formData);
//     // submitFormData(formData);
// });