// get the input text on button click
let search = document
  .querySelector(".search__button")
  .addEventListener("click", () => {
    let text = document.getElementById("filter-jobs").value;
    console.log(text, "whats in text");
  });

//defining function that will fetch data from .json file
const getJobs = () => {
  return fetch("data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

// render jobs data on front page
const showJobs = (jobs) => {
  console.log("show jobs", jobs);
  let jobsContainer = document.querySelector(".joblist__container");
  let jobHTML = "";

  jobs.forEach((job) => {
    return (jobHTML += ` <div class="jobTile">
    <div class="top-section">
      <img
        src="${job.logo}"
        alt=""
      />
      <i class="fas fa-ellipsis-h"></i>
    </div>
    <!-- end of top section -->

    <!-- role name -->
    <div class="role-name"><span>${job.roleName}</span></div>
    <!-- job description -->
    <div class="job-description">
      <span>
        ${job.requirements.content}
      </span>
    </div>

    <!-- buttons -->
    <div class="buttons">
      <div class="button apply-button">Apply Now</div>
      <div class="button message">Message</div>
    </div>
  </div>
  <!-- end of job tile-->`);
  });
  jobsContainer.innerHTML = jobHTML;
  console.log(jobHTML);
};

getJobs().then((data) => {
  showJobs(data);
});
