import React, { useState, useEffect } from "react";
import styled from "styled-components"
import SearchResult from "./components/SearchResults/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {


  const [data, setData] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [loading, setloading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedButton, setSelectedButton] = useState("all")
  

  useEffect(()=>{

    const fetchFoodData = async () => {

    setloading(true)

    try {

      const response = await fetch(BASE_URL)
      const json = await response.json();
      
      setData(json)
      setFilteredData(json)
      setloading(false)

    } catch (error) {
      setError("Unable to fetch data.....")
      //setloading(false);
    }

  }

  fetchFoodData();

  },[])

  //console.log(data)

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if(searchValue == ""){
      setFilteredData(null)
    }

    const filter = data?.filter((food)=>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    setFilteredData(filter)
  }

  const filterdFood = (type) => {
    if(type=="all"){
      setFilteredData(data)
      selectedButton("all")
      return;
    }

    const filter = data?.filter((food)=>
      food.type.toLowerCase().includes(type.toLowerCase())
    )

    setFilteredData(filter)
    setSelectedButton(type)

    

  }
 
  if(error) return <div>{error}</div>
  if(loading) return <div>Loading.....</div>

  return (
      <>

            <Container>


      <TopContainer>
        <div className='logo'>
          <img src="/logo.svg" alt="" />
        </div>

        <div className="search">
          <input onChange={searchFood} type="text" placeholder='Search food...' />
        </div>
      </TopContainer>

      <FilterContainer>

        <Button onClick={ () => filterdFood("all")} >All</Button>
        <Button onClick={ () => filterdFood("breakfast")} >Breakfast</Button>
        <Button onClick={ () => filterdFood("lunch")} >Lunch</Button>
        <Button onClick={ () => filterdFood("dinner")} >Dinner</Button>

      </FilterContainer>

      




    </Container>

    <SearchResult data = {filteredData} />

      </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search{
    input{
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }

  @media(0 <width < 600px ){
    flex-direction: column;
    height: 60px;
  }
  
  
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 30px;

`

export const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  color: white;
  cursor: pointer;

  &:hover{
    background-color: #6c0000;
  }
`;

