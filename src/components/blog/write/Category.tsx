"use client";

import styles from "../css/category.module.css";
import { Colors } from "../../../../public/styles/colors/colors";
import { Button } from "../../common/button";
import { Spacer } from "../../common/spacer";
import { useState , useEffect } from "react";

export const Category = ({categoryList , setCategoryList}) => {
  const [categoryText , setCategoryText] = useState<string>('');
  // const [categoryList , setCategoryList] = useState([])

  const placeholderText = "엔터를눌러 카테고리를 입력해주세요"

  const onKeyPress = (e:React.KeyboardEvent<HTMLElement>) =>{
    if (categoryText !== undefined){
      if (categoryText.length !== 0 && e.key === 'Enter'){
        submitTagItem()
      }
      if (categoryText.length == 0 && e.key == 'Backspace'){
        deleteCategory()
      }
    }
  }

  const submitTagItem = () =>{
    let updatedCategoryList = [...categoryList]
    updatedCategoryList.push(categoryText)
    setCategoryList(updatedCategoryList)
    setCategoryText("")
  }

  const deleteCategory = () =>{
    if (categoryText.trim() == "") {
      let deleteCategoryList = categoryList.slice(0, categoryList.length - 1);
      setCategoryList(deleteCategoryList);
    }
  }

  const deleteSelectCategory = (e) =>{
    const deleteCategoryItem = e.target.innerText
    const filteredCategoryList = categoryList.filter(categoryText => categoryText !== deleteCategoryItem)
    setCategoryList(filteredCategoryList)

  }

  return (
    <>
      <div className = {[styles.categoryWrapper].join(" ")}>
        {
          categoryList.map((categoryText, index)=>{
            return(
              <div key={index} className= {[styles.tagWrapper].join(" ")} >
                <div className = {[styles.tagText].join(" ")} onClick = { (e) => deleteSelectCategory(e)} >{categoryText}</div>
              </div>
            )
          })
        }
        <input
          className= {[styles.categoryInput].join(" ")}
          placeholder = {placeholderText}
          value = {categoryText}
          onChange = {(e) => setCategoryText(e.target.value)}
          onKeyDown = {onKeyPress}
        />
      </div>
    </>
  );
};
