var possibleValues = ["ls","cd","pwd","help","cat projets","cat cv","cat contacts","cat education","cat bio","cd portfolio","cd ..","clear"];


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
  

