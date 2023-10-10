$(document).ready(function() {
    $(".add-button").click(function() {
        $("#jobPopup").css("display", "block");
    });

    $(".close").click(function() {
        $("#jobPopup").css("display", "none");
    });

    $("button[type='button']").click(function() {
        const form = $("#jobForm");
        const jobTitle = form.find("input:eq(0)").val();
        const CompanyName = form.find("input:eq(1)").val();
        const contract = form.find("input:eq(2)").val();
        const location = form.find("input:eq(3)").val();
        const role = form.find("input:eq(4)").val();
        const level = form.find("input:eq(5)").val();
        const tools = form.find("input:eq(6)").val();
        const languages = form.find("input:eq(7)").val();

        // Create a new job listing element 
        const jobListing = `
        <div class="job-listing">
            <div class="job-header">
                <div class="job-image">
                    <img src="./images/myhome.svg">
                </div>
                <h2>${CompanyName}</h2>
                <span class="new">NEW!</span>
                <span class="featured">FEATURED</span>
            </div>
            <div class="job-title">
                <h3>${jobTitle}</h3>
                <div class="job-info">
                    <span class="postedAt">Just Now</span>
                    <span class="contract">${contract}</span>
                    <span class="location">${location}</span>
                </div>
            </div>
            <div class="job-details">
                <span class="role">${role}</span>
                <span class="level">${level}</span>
                <span class="tools">${tools}</span>
                <span class="languages">${languages}</span>
            </div>
            <button class="nodelete-job">
            <img src="./images/nodelete.png">
          </button>
          <div class="message">Job just created!Please wait to delete this job!</div>
        </div>
    `;
        $(".AllOfTheJobs").prepend(jobListing);

        form[0].reset();
        $("#jobPopup").css("display", "none");
    });
});
$(document).ready(function(){
    // Attach a click event handler to the delete button
    $('.delete-job').click(function(){
      // Traverse up the DOM 
      $(this).closest('.job-listing').remove();
    });
  });

  $(document).ready(function() {
    // Open the job details 
    $('.job-listing').click(function() {
      var jobListing = $(this);
      var imageUrl = jobListing.find('.job-image img').attr('src');
      $('#popupImage').attr('src', imageUrl);
      $('#popupCompany').text(jobListing.find('.job-header h2').text());
      $('#popupTitle').text(jobListing.find('.job-title h3').text());
      $('#popupPosted').text(jobListing.find('.postedAt').text());
      $('#popupContract').text(jobListing.find('.contract').text());
      $('#popupLocation').text(jobListing.find('.location').text());
      $('#popupRole').text(jobListing.find('.role').text());
      $('#popupLevel').text(jobListing.find('.level').text());
      $('#popupTools').text(jobListing.find('.tools').text());
      $('#popupLanguages').text(jobListing.find('.languages').text());
      $('#jobDetailsPopup').fadeIn();
    });
  
    // Close the job details 
    $('.close-popup').click(function() {
      $('#jobDetailsPopup').fadeOut();
    });
  });
//Filter function
$(document).ready(function () {
  // Function to filter and display 
  function filterJobs() {
      const selectedRole = $("#roleDropdown").val();
      const selectedLevel = $("#levelDropdown").val();
      const selectedLanguage = $("#languagesDropdown").val();
      const selectedTool = $("#toolsDropdown").val();

      $(".job-listing").each(function () {
          const role = $(this).find(".role").text();
          const level = $(this).find(".level").text();
          const languages = $(this).find(".languages").text();
          const tools = $(this).find(".tools").text();

          const matchesRole = selectedRole === "None" || selectedRole === role;
          const matchesLevel = selectedLevel === "None" || selectedLevel === level;
          const matchesLanguage = selectedLanguage === "none" || languages.includes(selectedLanguage);
          const matchesTool = selectedTool === "None" || tools.includes(selectedTool);

          if (matchesRole && matchesLevel && matchesLanguage && matchesTool) {
              $(this).show();
          } else {
              $(this).hide();
          }
      });
  }

  // Attach change event listeners 
  $("#roleDropdown, #levelDropdown, #languagesDropdown, #toolsDropdown").change(filterJobs);

  // Initially filter the jobs 
  filterJobs();
});