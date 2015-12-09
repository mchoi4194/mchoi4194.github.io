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
          title: "Infer Results",
          content: "See the inferred score based on the variables you selected.",
          target: "scorevalue",
          placement: "right"
        },
        
      ]
    };
    hopscotch.startTour(tour);

  

        