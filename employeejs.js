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
  	var employeeIn = $("#role-input").val().trim();
  	var roleIn = "";
  	var startDateIn = "";
  	var monthlyRateIn = 0;
  })