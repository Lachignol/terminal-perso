var possibleValues = ["ls","cd","pwd","help","clear","cat projets","cat contacts","cat education","cat bio","cd portfolio",];


export function Autocomplete(input) {
    
      const value = input;
      if (value.length > 0) {
        const filteredSuggestions = possibleValues.filter(suggestion =>
          suggestion.toLowerCase().includes(value.toLowerCase())
        );
        return filteredSuggestions[0];
      } else {
        return false;
      }
    };
  

