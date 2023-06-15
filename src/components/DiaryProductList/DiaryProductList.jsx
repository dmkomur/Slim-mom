import * as css from './DiaryProductList.styled';

import DiaryAddProductForm from "components/DiaryAddProductForm/DiaryAddProductForm";
import DiaryProductListItem from "components/DiaryProductListItem/DiaryProductListItem";

function DiaryProductList() {
  return <div>
    <DiaryAddProductForm />


    <css.DivStyle>
      <css.List>
        <DiaryProductListItem />
      </css.List>
    </css.DivStyle>


  </div>;
}

export default DiaryProductList;


