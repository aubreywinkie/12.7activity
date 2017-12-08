var config = {
    apiKey: "AIzaSyCUc0pipVOdHuoOlqht4JewO5BNeg79eJY",
    authDomain: "emplo-161fe.firebaseapp.com",
    databaseURL: "https://emplo-161fe.firebaseio.com",
    projectId: "emplo-161fe",
    storageBucket: "",
    messagingSenderId: "1095971815416"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var employeeName = "";
  var role = "";
  var startDate = "";
  var monthlyRate = 0;

  $("#submit").on("click", function(event) {
  	var employeeIn = $("#name-input").val().trim();
  	var roleIn = $("#role-input").val().trim();
  	var startDateIn = $("#date-input").val().trim();
  	var monthlyRateIn = $("#rate-input").val().trim();
 

  database.ref().set({
  	employee: employeeIn
  	role: roleIn
  	start: startDateIn
  	monthly: monthlyRateIn
  
  })
})

 $("#name").text(employeeIn);
 $("#role").text(roleIn);
 $("#start").text(startDateIn);
 $("#months").text(//need to calculate)
 $("#total").text(//need to calculate)

 event.preventDefault();
});