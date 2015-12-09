 // Define the tour!
    var tour = {
      id: "hello-hopscotch",
      steps: [
        {
          title: "Welcome",
          content: "Toggle these sliders to set values for these variables.",
          target: "fundingslider",
          placement: "right"
        },
        {
          title: "Demographic Info",
          content: "Alter demographic information and watch the pie charts update.",
          target: "slider",
          placement: "bottom"
        },
        {
          title: "Hover",
          content: "Hover over the pie segments or legends to highlight your selection.",
          target: "pieVis",
          placement: "left"
        },
        {
          title: "Predict Results",
          content: "See the predicted score based on the variables you selected and the coefficients outputted from our regressions. These two scores are evaluated on different scales and have different relationships to the variables above, so look out for different trends affecting each!",
          target: "scorevalue",
          placement: "right"
        },
        
      ]
    };
    hopscotch.startTour(tour);

  

        