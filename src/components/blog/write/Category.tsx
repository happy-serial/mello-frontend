"use client";

import { useState } from "react";
import styles from "../css/category.module.css";

interface CategoryProps{
  categoryList : string[];
  setCategoryList : React.Dispatch<React.SetStateAction<string[]>>;
}

export const Category: React.FC<CategoryProps> = ({categoryList , setCategoryList}) => {
  const [categoryText , setCategoryText] = useState<string>('');

  const placeholderText = "엔터를눌러 카테고리를 입력해주세요"

  const onKeyPress = (e:React.KeyboardEvent<HTMLInputElement>) =>{
    if (categoryText !== undefined){
      if (categoryText.length !== 0 && e.key === 'Enter'){
        submitTagItem()
      }
      if (categoryText.length === 0 && e.key === 'Backspace'){
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
    if (categoryText.trim() === "") {
      let deleteCategoryList = categoryList.slice(0, categoryList.length - 1);
      setCategoryList(deleteCategoryList);
    }
  }

  const deleteSelectCategory = (e:React.MouseEvent<HTMLDivElement>) => {
    const deleteCategoryItem = (e.target as HTMLDivElement).innerText
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
