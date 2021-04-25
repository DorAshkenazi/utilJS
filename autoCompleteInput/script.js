let targetInput = document.getElementById("country");
let results = document.getElementById("autocomplete-results");
let countryList = ["Israel", "France", "India", "Spain"];
let matches = [];

// Focus on input when loading the page
targetInput.focus();

// Add event listener for the input keyup
targetInput.addEventListener( "keyup", ( event ) => {
  results.innerHTML = "";
  toggleResults( "hide" );

  if ( targetInput.value.length > 0 ) {
    matches = getMatches( targetInput.value );

    if ( matches.length > 0 ) {
      displayMatches( matches );
    }
  }
})

// Define a function for toggling the results list
function toggleResults( action ) {
  if ( action == "show" ) {
    results.classList.add( "visible" );
  } else if ( action = "hide" ) {
    results.classList.remove( "visible" );
  }
}

// Define a function for checking if the input value matches any of the country names
function getMatches( inputText ) {
  let matchList = [];
  for ( let i = 0; i < countryList.length; ++i ) {
    if ( countryList[i].toLowerCase().indexOf( inputText.toLowerCase() ) != -1 ) {
      matchList.push( countryList[i] );
    }
  }

  return matchList;
}

// Define a function for displaying the autocomplete results
function displayMatches( matchList ) {
  let j = 0;

  while ( j < matchList.length ) {
    results.innerHTML += '<li class="result">' + matchList[j] + '</li>';
    ++j;
  }

  // Show the results
  toggleResults( "show" );
}