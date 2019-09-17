import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../conponents/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../conponents/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price)=> {
    //price === '$' or '$$' or "$$$"
    return results.filter(result => {
      return result.price == price;
    })
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results= {filterResultsByPrice('$')} title="Cost Effective" />
      <ResultsList results= {filterResultsByPrice('$$')}title="Bit Pricier" />
      <ResultsList results= {filterResultsByPrice('$$$')}title="Bit Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
